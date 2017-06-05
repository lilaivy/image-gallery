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

    componentDidMount() {
        const { params } = this.props.match;
        this.fetchAlbum(params.albumId)
    }

    componentWillReceiveProps(nextProps) {
    const nextAlbumId = nextProps.match.params.albumId;
    if (nextAlbumId !== this.props.match.params.albumId) {
      this.fetchStore(nextAlbumId);
    }
  }


    fetchAlbum() {
        fetch(`/api/albums`)
            .then(res => res.json())
            .then(albums => this.setState({ albums }))
            .catch(error => console.log(error));
    }

    render() {
        const { match } = this.props;
        const { albums } = this.state;
        if (!albums) return <div>Loading ...</div>;

        return (
            <div>
                <h4>{albums.name}</h4>
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

