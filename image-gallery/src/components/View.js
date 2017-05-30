import React, { Component } from 'react';
import List from './List';
import Gallery from './Gallery';
import Thumbnail from './Thumbnail';
import PropTypes from 'prop-types';

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
                    <h1 >Dogtown & Z-Boys</h1>
                </header>
                <h2> The Zephr Originals...</h2>

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

                {CurrentView && <CurrentView
                    images={this.props.images} />
                }

            </div>

        )
    }

}