import React from 'react';
import StyledNightmode from "./styles/StyledNightmode";


const NighMode = ({ nightModeOnClick, nightMode }) => {
    return (
        <StyledNightmode>
            <span>Night mode...</span>
            <label className={"switch"}>
                <input type={"checkbox"} checked={nightMode} onChange={nightModeOnClick} />
                <span className={"slider round"} />
            </label>
        </StyledNightmode>
    )
}

export default NighMode;