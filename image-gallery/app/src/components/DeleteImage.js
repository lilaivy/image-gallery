import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DeleteImage extends Component {

    static propTypes = {
        removeImage: PropTypes.func.isRequired
    }

    render() {
        return (
            <button className="delete-button"
                onClick={this.props.removeImage}>
                DELETE IMAGE
            </button>
        )
    }

}