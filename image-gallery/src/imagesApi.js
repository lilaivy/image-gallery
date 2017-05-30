import lordsOfDogtown from './photos/lordsOfDogtown.jpg';
import jayAdams from './photos/jayAdams.png';
import peggyOki from './photos/peggyOki.jpg';
import mikeKolar from './photos/mikeKolar.jpg';
import peggyTurner from './photos/peggyTurner.jpg';
import lauraThornhill from './photos/lauraThornhill2.jpg';
import rampage from './photos/rampage.jpg';
import shortId from 'shortid';
// let shortId = require('shortid');

const images = [
    {
        title: 'Z Boys',
        description: 'Zephyr skate team 1970\'s',
        url: lordsOfDogtown,
        _id: shortId.generate()
    },

    {
        title: 'Turn Only',
        description: 'Jay Adams gets low',
        url: jayAdams,
        _id: shortId.generate()
    },

    {
        title: 'Peggy Does Venice',
        description: 'Peggy Oki repping Zephr',
        url: peggyOki,
        _id: shortId.generate()
    },

    {
        title: 'Jumping Homies',
        description: 'Mike Kolar 1970\'s',
        url: mikeKolar,
        _id: shortId.generate()
    },

    {
        title: "Tippin' Toes",
        description: 'Laura Thornhill in skate competition 1970\'s',
        url: lauraThornhill,
        _id: shortId.generate()
    },

    {
        title: "Van Fans",
        description: 'Peggy Turner repping Vans in skate competition',
        url: peggyTurner,
        _id: shortId.generate()
    },

    {
        title: "Jumping Homies 2.0",
        description: 'Rampage Expo 1970\'s',
        url: rampage,
        _id: shortId.generate()
    }

];

export default {
    get() { return Promise.resolve(images) }
}