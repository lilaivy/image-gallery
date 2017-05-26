import React, { Component } from 'react';

export default class Thumbnail extends Component {

    render() {
        return (
            <div>
                <h2>THUMBNAIL VIEW</h2>
                {this.props.images.map(image => (
                    <figure style={{
                        display:'inline-block'}}>
                    <img src={image.url} style={{
                        height: '100px',
                        width: '100px',
                    }}
                    />
                     <figcaption> {image.title} </figcaption>
                     </figure>   
                ))}
            </div>

        )
    }
}

