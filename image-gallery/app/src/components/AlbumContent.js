import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Gallery from './Gallery';
import List from './List';
import Thumbnail from './Thumbnail';
import ViewButtons from './ViewButtons'

const Views = { List, Thumbnail, Gallery }

class AlbumContent extends Component {
    constructor(props) {
        super(props);

        this.removeImage = (albumId, imageId) => {
            fetch(`/api/albums/${albumId}/remove/${imageId}`, {
                method:'post'
            })
                .then(res => res.json())
                .then (data => console.log('data: ', data))
               
                .catch(error => console.log(error));
            };
    }


    render() {
        const { match, images, albumId } = this.props
        return (

            <div>
                <ViewButtons match={match} />
                <Route path={`${match.url}/:View`} render={({ match }) => {
                    const View = Views[match.params.View]
                    return <View
                        images={images}
                        albumId={albumId}
                        removeImage={this.removeImage} />
                }
                } />
            </div>

        )
    }
}

export default AlbumContent;







