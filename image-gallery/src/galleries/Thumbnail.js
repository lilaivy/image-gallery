import React, { Component } from 'react';

export default class Thumbnail extends Component {

    render() {
        return (
            <div>
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

