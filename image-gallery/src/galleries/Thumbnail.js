import React, { Component } from 'react';

export default class Thumbnail extends Component {

    render() {
        return (
            <div>
                {this.props.images.map(image => (
                    <img src={image.url} style={{
                        height: '100px',
                        width: '100px'
                    }}
                    />
                   
                ))}
            </div>

        )
    }
}

//  <figcaption>{image.title}</figcaption>