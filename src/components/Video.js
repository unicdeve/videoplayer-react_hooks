import React from 'react';
import ReactPlayer from "react-player";
import StyledVideoWrapper from "./styles/StyledVideoWrapper";
import StyledVideo from "./styles/StyledVideo";


const Video = ({active, autoplay, endcallback, progressCallback}) => {
    return (
        <StyledVideo>
            <StyledVideoWrapper>
                <ReactPlayer
                    width={"100%"}
                    height={"100%"}
                    style={{ position: "absolute", top: "0"}}
                    playing={autoplay}
                    controls={true}
                    url={active.video}
                    onEnded={endcallback}
                    onProgress={progressCallback}
                />
            </StyledVideoWrapper>
        </StyledVideo>
    )
}

export default Video;