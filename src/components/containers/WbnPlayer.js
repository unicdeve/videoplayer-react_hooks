import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import Video from '../Video';
import PlayList from '../containers/Playlist';
import StyledWbnPlayer from "../styles/StyledWbnPlayer";


const theme = {
    bgcolor: "#353535",
    bgcolorItem: "#414141",
    bgcolorItemActive: "#405c63",
    bgcolorPlayed: "#526d4e",
    border: "none",
    borderPlayed: "none",
    color: "#fff"
}

const themeLight = {
    bgcolor: "#fff",
    bgcolorItem: "#fff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlayed: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535"
}


const WbnPlayer = ({ match, history, location }) => {

    const videos = JSON.parse(document.querySelector('[name="videos"]').value);

    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        nightMode: true,
        playlistId: videos.playlistId,
        autoplay: false
    })

    useEffect(() => {
        const videoId = match.params.activeVideo;
        if(videoId !== undefined) {
            const newactiveVideo = state.videos.findIndex(
                video => video.id === videoId
            )
            setState(prev => ({
                ...prev,
                activeVideo: prev.videos[newactiveVideo],
                autoplay: location.autoplay
            }));
        } else {
            history.push({
                pathname: `/${state.activeVideo.id}`,
                autoplay: false
            })
        }
    }, [history, location.autoplay, match.params.activeVideo, state.activeVideo, state.activeVideo.id, state.videos]);

    const nightModeCallback = () => {
        setState(prev => ({
            ...prev, nightMode: !prev.nightMode
        }));
    }

    const endCallback = () => {
        const videoId = match.params.activeVideo;
        const currentVideoIndex = state.videos.findIndex(
            video => video.id === videoId
        );

        const nextVideo = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;
        history.push({ pathname: `/${state.videos[nextVideo].id}`, autoplay: false});
    }

    const progressCallback = event => {
        if(event.playedSeconds > 10 && event.playedSeconds < 11) {
            const videos = [ ...state.videos ];
            const playedVideo = videos.find(
                video => video.id === state.activeVideo.id
            )

            playedVideo.played = true;

            setState(prev => ({ ...prev, videos }));

            // setState({
            //     ...state,
            //     videos: state.videos.map(video => {
            //         return video.id === state.activeVideo.id ? { ...video, played: true} : video
            //     })
            // })
        }
    }

    return (
        <ThemeProvider theme={ state.nightMode ? theme: themeLight }>
            {
                state.videos !== null ? (
                    <StyledWbnPlayer>
                        <Video
                            active={state.activeVideo}
                            autoplay={state.autoplay}
                            endcallback={endCallback}
                            progressCallback={progressCallback}
                        />
                        <PlayList
                            videos={state.videos}
                            active={state.activeVideo}
                            nightModeCallback={nightModeCallback}
                            nightMode={state.nightMode}
                        />
                    </StyledWbnPlayer>
                ) : null
            }

        </ThemeProvider>
    )
}

export default WbnPlayer;