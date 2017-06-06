import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Gallery from './Gallery';
import List from './List';
import Thumbnail from './Thumbnail';
import ViewButtons from './ViewButtons'

const Views = { List, Thumbnail, Gallery }

class AlbumContent extends Component {


    render() {
        const { match, images, albumId, removeImage } = this.props
        return (

            <div>
                <ViewButtons match={match} />
                <Route path={`${match.url}/:View`} render={({ match }) => {
                    const View = Views[match.params.View]
                    return <View
                        images={images}
                        albumId={albumId}
                        removeImage={removeImage} />
                }
                } />
            </div>

        )
    }
}


export default AlbumContent;







