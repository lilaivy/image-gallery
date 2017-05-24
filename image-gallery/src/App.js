import React, { Component } from 'react';
import './App.css';
import List from './galleries/List';
import Thumbnail from './galleries/Thumbnail';
import imageData from './images';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      images: [],
    }

  }

  componentDidMount() {
    imageData.get()
      .then(images => this.setState({ images }));
  }

  // slectImage(selectedImage) {
  //   this.setState({ selectedImage });
  // }


  render() {
    const { images } = this.state;
    return (
      <div >
        <header>
          <h2>Image Gallery</h2>
          <List
            images={images}
          />
          <Thumbnail
          images={images}
          />
        </header>
      </div>
    );
  }
}

