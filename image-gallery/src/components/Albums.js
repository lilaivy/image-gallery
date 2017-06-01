import React, { Component } from 'react';
import AlbumsApi from '../AlbumsApi'

export default class Albums extends Component {
    constructor (props) {
        super(props);
        this.state = {
            albums: []
        }
    }

componentDidMount() {
    return (albumsApi.getAlbums()
    .then((albums) => {
        this.setState({ albums })
    }))
}




}
