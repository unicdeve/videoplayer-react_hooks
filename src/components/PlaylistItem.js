import React from 'react';
import StyledPlaylist from "./styles/StyledPlaylist";


const PlaylistItem = ({video, active, played}) => {
    return (
        <StyledPlaylist active={active} played={played}>
            <div className={"wbn-player__video-nr"}>{video.num}</div>
            <div className={"wbn-player__video-name"}>{video.title}</div>
            <div className={"wbn-player__video-time"}>{video.duration}</div>
        </StyledPlaylist>
    )
}

export default PlaylistItem;