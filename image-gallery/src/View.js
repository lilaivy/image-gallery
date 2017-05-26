import React, { Component } from 'react';
import List from './galleries/List';
import Single from './galleries/Single';
import Thumbnail from './galleries/Thumbnail';

export default class Veiw extends Component {

    constructor(props) {
        super(props);

        //Q: Why do we capitalize Current Scene? BC it will have a value of an imported component (List, THUMB, SINGLE).

        this.state = {
            CurrentView: null
        }

    }

    changeView( View = null) {
        this.setState({ CurrentView: View});
    }


    render() {

        const { CurrentView } = this.state;
        return (
            <div>
                <header>
                    <h1>WELCOME TO THE FUZZY BUNNY IMAGE GALLERY</h1>
                </header>
                <h2>Check out all the bunnies...</h2>
                <span>
                    <button 
                    onClick={() => this.changeView(List)}
                    >CHECK OUT LIST VIEW</button>
                </span>
                <span>
                    <button 
                    onClick={() => this.changeView(Thumbnail)}
                    >CHECK OUT THUMBNAIL VIEW</button>
                </span>
                <span>
                    <button 
                    onClick={() => this.changeView(Single)}
                    >CHECK OUT SINGLE VIEW</button>
                </span>
                {CurrentView && <CurrentView 
                    images={this.props.images} />
                }
        </div>
             
    )
}

}