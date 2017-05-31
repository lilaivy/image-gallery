import React from 'react';
import PropTypes from 'prop-types';
import DeleteImage from './DeleteImage'


    export default function List (props) {
  
        return (
            <div>
                {props.images.map(image => (
                    <ul className="list-view" key={image.url}>
                        <li className="image-caption">{image.title} </li>
                        <li className="image-caption">{image.description} </li>
                        <li className="image-caption">{image.url} </li>
                        <li><DeleteImage onClick={() => this.props.onDelete(image._id)}/></li>
                    </ul>))}
                    <DeleteImage/>
            </div>


        )
    }

    List.proptypes = {
images:PropTypes.array.isRequired
};

