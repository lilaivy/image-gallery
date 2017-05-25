import React, { Component } from 'react';

export default class Single extends Component {
    // constructor(props) {
    //     super(props);

        // this.state ={
        //     currentImage:
        //     nextImage:
        //     previousImage:

        // }

        //Q: how do I get the property of image.url off of images array?
        //TODO: add on click to go to next/previous bunny

        nextBunny(nextBunny) {
            this.nextBunny({ nextBunny });
        }

         previousBunny(previousBunny) {
            this.previousBunny({ previousBunny });
        }



        render() {
            return (
                <div style={{
                    display: 'inline-block'
                }} >
                    <span className='nextBunny' style={{
                        fontSize: '50px'

                    }} >
                        &larr;</span>

                    <span>
                        <img src='http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'/>
                    </span>

                    <span className='previousBunny' style={{
                        fontSize: '50px'
                    }} >
                        &rarr;</span>
                </div>
            )
        }
    }
// }