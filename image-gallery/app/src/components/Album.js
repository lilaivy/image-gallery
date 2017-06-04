import React from 'react';
import { Link } from 'react-router-dom';

export default function Album({ name, images, _id, url }) {
    return (
        <li><Link to={url}>{ name }</Link ></li>
    );
}