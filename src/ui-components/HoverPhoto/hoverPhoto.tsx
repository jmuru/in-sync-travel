import React, {useState, useEffect} from "react"
import "./hoverPhoto.css"

interface HoverPhotoProps {
    url: string,
    width: number,
    height: number,
    title: string,
}



const HoverPhoto: React.FC<HoverPhotoProps> = props => {
    const [isHovered, toggleHovered] = useState(false)
    // debug, remove later
    useEffect(() => {
        console.log(isHovered)
    })

    // const defaultStyle = {
    //     background: `url(${props.url})`,
    //     height: "200px",
    //     width: "200px",
    // }
    //
    // const hoverStyle = {
    //     background: `url(${props.url}), linear-gradient(180deg, rgba(0,0,0,0), black)`,
    //     height: "200px",
    //     width: "200px",
    // }
    return (
        <div
            // style={isHovered ? hoverStyle : hoverStyle}
            className={`hoverPhotoContainer`}
            onMouseEnter={() => toggleHovered(true)}
            onMouseLeave={() => toggleHovered(false)}
        >
            <img
                // onMouseEnter={() => toggleHovered(true)}
                // onMouseLeave={() => toggleHovered(false)}
                src={props.url}
                width={`${props.width}px`}
                height={`${props.height}px`} />
            <div className={`hpTitle ${isHovered ? "magnify" : ""}`}>{props.title}</div>
        </div>
    )
}



export default HoverPhoto;