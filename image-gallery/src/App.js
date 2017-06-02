import React from 'react';
import './App.css';
// import View from './components/View.js';
import Header from './components/Header';
import Intro from './components/IntroView';
import Albums from './components/Albums'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const Albums = props => <h3>Albums</h3>


export default function App() {

  // construnctor()
  // super(){
  //   this.handleAdd = this.handleAdd.bind(this);
  //   this.handleDelete = this.handleDelete.bind(this);
  // }

  // componentDidMount() {
  //   return (albumsApi.getImags()
  //     .then((albums) => {
  //       this.setState({ albums })
  //     }))
  // }

  // handleAdd(image) {
  //   imagesApi.addImage(image)
  //     .then(image => {
  //       this.setState({
  //         //adding a new image objet to the imagesApi array
  //         images: [...this.state.images, image]
  //       });
  //     })
  // }

  // handleDelete(id) {
  //   imagesApi.deleteImage(id)
  //     .then(() => {
  //       const images = this.state.images.slice();
  //       const index = images.findIndex(image => image._id === id);
  //       images.splice(index, 1);
  //       this.setState({ images });
  //     })
  // }


    
    return (
      <Router>
        <div>
          <Header />
          {/*<View classname="view-wrapper"
            images={images}
            onDelete={this.handleDelete}
            handleAdd={this.handleAdd} />*/}

          <Switch>
            <Route exact path='/' component={Intro} />
            <Route path='/albums' component={Albums} />
            
          </Switch>
        </div>
      </Router>

    );
  }


