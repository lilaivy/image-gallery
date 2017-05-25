import React, { Component } from 'react';

export default class Single extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImage:
            nextImage:
            previousImage:

        }
    }

    //Q: how do I get the property of image.url off of images array?
    //TODO: add on click to go to next/previous bunny

    nextBunny(nextBunny) {
        this.nextBunny({ nextBunny });
    }

    previousBunny(previousBunny) {
        this.previousBunny({ previousBunny });
    }



    render() {
        if (!this.props.images.length) {
            return null;
        }
        return (
            <div style={{
                display: 'inline-block'
            }} >
                <span className='nextBunny' style={{
                    fontSize: '50px'

                }} >
                    &larr;</span>

                <span>
                    <img src={this.props.images[1].url} />
                    <p>{this.props.images[1].title}</p>
                    <p>{this.props.images[1].description} </p>
                </span>

                <span className='previousBunny' style={{
                    fontSize: '50px'
                }} >
                    &rarr;</span>
            </div>
        )
    }
}

