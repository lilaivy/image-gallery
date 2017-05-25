import React, { Component } from 'react';
import './App.css';
import List from './galleries/List';
import Thumbnail from './galleries/Thumbnail';
import Single from './galleries/Single';
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
      .then(images => {
        this.setState({ images })
      });
  }

  // slectImage(selectedImage) {
  //   this.setState({ selectedImage });
  // }


  render() {
    const { images } = this.state;
    return (
    <div >

      <div>
        <h2>List Gallery</h2>
        <List
          images={images}
        />
      </div>
      <div>
        <h2>Thumbnail Gallery</h2>
        <Thumbnail
          images={images}
        />
      </div>
      <div>
        <h2>Single Image Gallery</h2>
        <Single
          images={images}
        />
      </div>
    </div>
    );
  }
}

