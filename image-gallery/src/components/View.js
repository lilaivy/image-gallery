import React, { Component } from 'react';
import List from './List';
import Gallery from './Gallery';
import Thumbnail from './Thumbnail';
import PropTypes from 'prop-types';
import introImage from '../photos/introImage.jpg'

export default class Veiw extends Component {

    constructor(props) {
        super(props);

        this.state = {
            CurrentView: null
        }

    }
    //use static if defining proptypes within the class.  
    // if function  statement looks like: View.propTypes.string.isrequired
    static propTypes = {
        images: PropTypes.array.isRequired
    }

    changeView(View = null) {
        this.setState({ CurrentView: View });
    }


    render() {

        const { CurrentView } = this.state;
        return (
            <div className="header-title">
                <header>
                    <h1 > The Zephr Originals. </h1>
                </header>
                <h2>Z-Girls & Boys of the 70's</h2>

                <span>
                    <button className="view-buttons"
                        onClick={() => this.changeView(List)}
                    >CHECK OUT LIST VIEW</button>
                </span>
                <span>
                    <button className="view-buttons"
                        onClick={() => this.changeView(Thumbnail)}
                    >CHECK OUT THUMBNAIL VIEW</button>
                </span>
                <span>
                    <button className="view-buttons"
                        onClick={() => this.changeView(Gallery)}>CHECK OUT GALLERY VIEW</button>
                </span>
                <div className='intro-image'>
                    <a href='https://www.youtube.com/watch?v=cKC-XBwQ_pA'>
                    <img src={introImage}/> </a>
                </div>

                {CurrentView && <CurrentView
                    images={this.props.images} />
                }

            </div>

        )
    }

}