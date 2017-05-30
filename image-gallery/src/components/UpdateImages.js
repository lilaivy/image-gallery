import React, { Component } from 'react';
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
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
        return (imagesApi.getImages()
            .then([title, description, url, wiki]) => {
            this.setState({ title, description, url, wiki })
        })
    };

    handleAdd(image) {
        imagesApi.addImage(image)
            .then(image => {
                this.setState({
                    //adding a new image to the imagesApi array
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
                    <AddImage handleAdd={this.handleAdd} />
                </div>
            </div>
        )
    }


}