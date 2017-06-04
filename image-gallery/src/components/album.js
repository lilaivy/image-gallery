import React from 'react';
import { Link } from 'react-router-dom';

export default function Album({ name, images, _id, url }) {
    return (
        <h1><Link className="Link album" to={url}>{ name }</Link ></h1>
    );
}