import React from 'react';
import PropTypes from 'prop-types';

export default function Thumbnail(props) {


        return (
            <div>
                {props.images.map((image, index) => (
                    <figure key={index}
                        style={{
                        display: 'inline-block'
                    }}>
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

Thumbnail.proptypes = {
images:PropTypes.array.isRequired
};

