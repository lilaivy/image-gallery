import React, { Component } from 'react';

export default class AddImage extends Component {
    //passing onAdd Handler from UpdateImages.js
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            url: '',
            wiki: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    reset() {
        this.setState({
            title: '',
            description: '',
            url: '',
            wiki: ''
        })
    }

    handleChange(event) {
        const { title, description, url, wiki } = event.target;
        this.setState({
            [title]: value
        });
    }
    render() {
        const { title, description, url, wiki } = this.state;

        return (
            <div>
                <h2>Add An Image:</h2>
                <form onSubmit={event => {
                    event.preventDefault();
                    this.props.onAdd(this.state);
                    this.reset();
                }}>
                    <label>
                        Title: <input name="title"
                            required
                            value={title}
                            onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        )
    }




}