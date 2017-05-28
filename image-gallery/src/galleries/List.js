import React from 'react';




    export default function List (props) {
  
        return (
            <div>
                {props.images.map(image => (
                    <ul key={image.url}>
                        <li >{image.title} </li>
                        <li>{image.description} </li>
                        <li>{image.url} </li>
                    </ul>))}
            </div>


        )
    }

