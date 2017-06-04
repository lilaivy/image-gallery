import React, { Component } from 'react';
import albumsApi from '../albumsApi';
import { Route } from 'react-router-dom';
import Album from './Album';
import AlbumContent from './AlbumContent'



export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        return (albumsApi.getAlbums()
            .then((albums) => {
                this.setState({ albums })
            }))
    }

    handleDelete(id) {
        albumsApi.deleteAlbum(id)
            .then(() => {
                const albums = this.state.albums.slice();
                const index = albums.findIndex(album => album._id === id);
                albums.splice(index, 1);
                this.setState({ albums });
            })
    }


    render() {
        const { match } = this.props;
        const { albums } = this.state;
        if (!albums) return <div>Loading ...</div>;

        return (
            <div className="album-list">
                <h1>Which Album?</h1>
                <ul>
                    {albums.map(album => <Album
                        key={album._id} {...album}
                        url={`${match.url}/${album._id}`} />
                    )}
                </ul>

                <Route path={`${match.url}/:albumId`} render={({ match }) => {
                    const album = albums.find(album => album._id === match.params.albumId)
                    return <AlbumContent {...album} match={match} />
                }} />
            </div>

        );

    }
}

