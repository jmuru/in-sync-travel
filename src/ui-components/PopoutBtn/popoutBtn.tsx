import React, {useState} from "react"
import {stopPageScroll, resumePageScroll} from "../../util/coordinate";
import "./popoutBtn.css"

const PopoutBtn = () => {
    const [popoutActive, toggleActive] = useState(false)
    if (popoutActive) {
        stopPageScroll();
    } else {
        resumePageScroll();
    }
    return (
        <div>
            <div className="popoutContainer">
                <div className={`slide-container ${ popoutActive ? "active" : "closed"}`}>
                    <button onClick={() => toggleActive(!popoutActive)}>close</button>
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => toggleActive(!popoutActive)}>
                    {`Am I Active`}
                </button>
            </div>

        </div>
    )
}

export default PopoutBtn;