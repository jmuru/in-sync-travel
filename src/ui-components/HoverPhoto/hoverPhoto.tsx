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
    useEffect(() => {
        console.log(isHovered)
    })

    return (
        <div
            className={`hoverPhotoContainer`}
            onMouseEnter={() => toggleHovered(true)}
            onMouseLeave={() => toggleHovered(false)}
        >
            <img
                src={props.url}
                width={`${props.width}px`}
                height={`${props.height}px`} />
            <div className={`hpTitle ${isHovered ? "magnify" : ""}`}>{props.title}</div>
        </div>
    )
}



export default HoverPhoto;