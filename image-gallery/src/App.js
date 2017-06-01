import React, { Component } from 'react';
import './App.css';
import View from './components/View.js';
import Header from './components/Header';
import Intro from './components/IntroView';
import imagesApi from './imagesApi';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Albums = props => <h3>Albums</h3>


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      images: [],
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    return (imagesApi.getImages()
      .then((images) => {
        this.setState({ images })
      }))
  }

  handleAdd(image) {
    imagesApi.addImage(image)
      .then(image => {
        this.setState({
          //adding a new image objet to the imagesApi array
          images: [...this.state.images, image]
        });
      })
  }

  handleDelete(id) {
    imagesApi.deleteImage(id)
      .then(() => {
        const images = this.state.images.slice();
        const index = images.findIndex(image => image._id === id);
        images.splice(index, 1);
        this.setState({ images });
      })
  }


  render() {
    const { images } = this.state;
    if (!images) return <div>Loading Images...</div>;
    return (
      <Router>
        <div>
          <Header
          Intro={this.props.Intro}/>
          {/*<View classname="view-wrapper"
            images={images}
            onDelete={this.handleDelete}
            handleAdd={this.handleAdd} />*/}

        <Switch>
        <Route exact path= '/' component={Intro}/>
        <Route path='/albums'component={Albums}/>
        </Switch>
        </div>
      </Router>

    );
  }
}

