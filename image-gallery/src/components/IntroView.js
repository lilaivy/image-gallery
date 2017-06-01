import React from 'react';
import introImage from '../photos/introImage.jpg'

export default function Intro( {match, location, history}) {

    return (
        <div className='intro-image brighten'>
            <pre>{JSON.stringify(match, true, 2)}</pre>
            <pre>{JSON.stringify(location, true, 2)}</pre>
            <pre>{JSON.stringify(history, true, 2)}</pre>
            
            <a className="video" href='https://www.youtube.com/watch?v=cKC-XBwQ_pA'>
                <img src={introImage} alt='standing on boards' />
            </a>
            <span className="play-video"><h1>PLAY VIDEO</h1></span>

        </div>
    )
}