import React from 'react';
import introImage from '../photos/introImage.jpg';
import { Link } from 'react-router-dom'


export default function Intro({ match, location, history }) {

    return (
        <div className='intro-image brighten'>

            <Link className="Link" to={`/albums`}>
                <a className="video">
                    <img src={introImage} alt='standing on boards' />
                </a>
            <span className="play-video" ><h1>GO TO IMAGE GALLERY</h1></span>
            </Link>

        </div>
    )
}

//Q: Why do we use a <pre> on lines 8-10, MDN says it's used for preformatted text?