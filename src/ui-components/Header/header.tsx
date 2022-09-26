import React, {useState, useEffect, useRef, useCallback} from "react"
import {amountscrolled} from "../../util/coordinate";
import "./header.css"

// React.FC source code example, function type that accepts a generic
// prop interface and returns a jsx element:
//
// type FauxactFunctionComponent<Props extends {}> = (
//     props: Props,
//     context?: any
// ) => FauxactFunctionComponent<any> | null | JSX.Element;

interface HeaderProps {
    /*custom button action as apart of the menu*/
    buttonElement: JSX.Element
}

const HeaderComponent: React.FC<HeaderProps> = props => {
    const [y, setY] = useState(window.scrollY);
    const [transformHeader, setTransformHeader] = useState(false)

    /*
    * useCallback and useEffect are being used in tandem here since the handle
    * navigation func has not been combined within the useEffect, the reason
    * for this is there is the option to control re-renders (useEffect)
    * of a component using the
    * dependency change rerender mechanism in useCallback.
    * docs: https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
    * useEffect Doc: https://www.w3schools.com/react/react_useeffect.asp
    * useCallback Doc: https://www.w3schools.com/react/react_usecallback.asp
    * */
    const handleNavigation = useCallback(
        (e: any) => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                console.log("scrolling up");
            } else if (y < window.scrollY) {
                console.log("scrolling down");
            }
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
        window.addEventListener("scroll", () => {
            if (amountscrolled()) {
                setTransformHeader(true);
            } else {
                setTransformHeader(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);


   return (
       <div className={`flex-container ${transformHeader ? "transform" : ""}`}>
        <div>
            <img className="header-logo" width="70px"
                 src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png"></img>
        </div>
        <div className="header-menu-items">
            <ul>
                <li><a href="">menu item</a></li>
                <li><a href="">menu item</a></li>
                <li><a href="">menu item</a></li>
            </ul>
        </div>
        <div className="menu-btn-container">
            {props.buttonElement}
        </div>
    </div>
   )
}

export default HeaderComponent;