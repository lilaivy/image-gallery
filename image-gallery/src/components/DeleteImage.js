import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function DeleteImage({ onDelete }) {

DeleteImage.propTypes = {
    onDelete: PropTypes.func.isRequired
}


return (
    <button className="delete-button"
        onClick={onDelete}>
        DELETE IMAGE
            </button>
)

}