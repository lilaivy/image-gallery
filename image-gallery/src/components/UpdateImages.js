import React, { Component } from 'react';
import View from './View';
import AddImage from './AddImage';
import imagesApi from '../imagesApi';
import '../App.css';

export default class UpdateImages extends Component {
    //what props am I passing
    constructor(props) {
        super(props);

        this.state = {
            images: []
        }
    }

    componentDidMount() {
        return Promise.all
            ([imagesApi.getImages()])
            .then(([images]) => {
                this.setState({ images });
            })
    }

    handleAdd(image) {
        imagesApi.addImage(image)
            .then(image => {
                this.setState({
                    images: [...this.state.images, image]
                });
            })
    }

    render() {
        const { images } = this.state;
        if (!images) return <div>Loading Images...</div>;

        return (
            <div>
                <div className="control">
                    <AddImage onAdd={this.handleAdd} />
                </div>
            </div>
        )
    }


}