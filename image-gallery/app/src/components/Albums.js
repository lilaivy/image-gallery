import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Album from './Album';
import AlbumContent from './AlbumContent'


export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }

    // componentDidMount() {
    //     return (copyAlbumsApi.getAlbums()
    //         .then((albums) => {
    //             this.setState({ albums })
    //         }))
    // }

    render() {
        const { match } = this.props;
        const { albums } = this.state;
     if(!albums) return <div>Loading ...</div>;

        return (
            <div>
                <ul>
                    {albums.map(album => <Album 
                        key={album._id} {...album}
                        url={`${match.url}/${album._id}`} />
                    )}
                </ul>

                <Route path={`${match.url}/:albumId`} render={({match}) => {
                   const album= albums.find(album => album._id === match.params.albumId)
                   return <AlbumContent {...album} match={match}/>
                } }/>
            </div>

        );

    }
}

