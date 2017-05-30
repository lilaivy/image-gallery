import lordsOfDogtown from './photos/lordsOfDogtown.jpg';
import jayAdams from './photos/jayAdams.png';
import peggyOki from './photos/peggyOki.jpg';
import mikeKolar from './photos/mikeKolar.jpg';
import peggyTurner from './photos/peggyTurner.jpg';
import lauraThornhill from './photos/lauraThornhill2.jpg';
import rampage from './photos/rampage.jpg';

const images = [
    {
        title: 'Z Boys',
        description: 'Zephyr skate team 1970\'s',
        url: lordsOfDogtown
    },

    {
        title: 'Turn Only',
        description: 'Jay Adams gets low',
        url: jayAdams
    },

    {
        title: 'Peggy Does Venice',
        description: 'Peggy Oki repping Zephr',
        url: peggyOki
    },

    {
        title: 'Jumping Homies',
        description: 'Mike Kolar 1970\'s',
        url: mikeKolar
    },

    {
        title: "Tippin' Toes",
        description: 'Laura Thornhill in skate competition 1970\'s',
        url: lauraThornhill
    },

    {
        title: "Van Fans",
        description: 'Peggy Turner repping Vans in skate competition',
        url: peggyTurner
    },

    {
        title: "Jumping Homies 2.0",
        description: 'Rampage Expo 1970\'s',
        url: rampage
    }

];

export default {
    get() { return Promise.resolve(images) }
}