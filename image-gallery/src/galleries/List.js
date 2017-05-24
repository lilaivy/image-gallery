import React, { Component } from 'react';



export default class List extends Component {
  
    render() {
        return (
            <div>
                {this.props.images.map(image => (
                    <ul key={image.url}>
                        <li >{image.title} </li>
                        <li>{image.description} </li>
                        <li>{image.url} </li>
                    </ul>))}
            </div>


        )
    }


}