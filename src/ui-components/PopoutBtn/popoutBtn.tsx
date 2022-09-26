import React, {useState} from "react"
import "./popoutBtn.css"

const PopoutBtn = () => {
    const [popoutActive, toggleActive] = useState(false)
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