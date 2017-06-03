import lordsOfDogtown from './photos/lordsOfDogtown.jpg';
import jayAdams from './photos/jayAdams.png';
import peggyOki from './photos/peggyOki.jpg';
// import mikeKolar from './photos/mikeKolar.jpg';
import peggyTurner from './photos/peggyTurner.jpg';
import lauraThornhill from './photos/lauraThornhill2.jpg';
import rampage from './photos/rampage.jpg';
import tonyAlva from './photos/tonyAlva.jpg';
import surfTurf  from './photos/surfTurf.png';

//Change your pictures to URL's

module.exports= [
    {
        name: 'Z-Team',
        images: [{
            title: 'Z Boys',
            description: 'Zephyr skate team 1970\'s',
            url: lordsOfDogtown,
            wiki: 'https://en.wikipedia.org/wiki/Z-Boys',
         
        },

        {
            title: 'Jumping Homies',
            description: 'Mike Kolar 1970\'s',
            url: 'https://s-media-cache-ak0.pinimg.com/originals/5c/5a/53/5c5a538be085b6a3a8c29a8474c3dc8a.jpg',
            wiki: 'https://www.washingtonpost.com/news/in-sight/wp/2015/08/20/locals-only-sun-drenched-vintage-photos-show-the-dawn-of-californias-skateboarding-culture-in-the-1970s/?utm_term=.33b15ce4e7ce',
           
        },

        {
            title: 'Surf Turf',
            description: 'Dowgtown: Locals Only',
            url: surfTurf,
            wiki: '',
       
        },

        {
            title: "Jumping Homies 2.0",
            description: 'Rampage Expo 1970\'s',
            url: rampage,
          

        }]
    },

    {
        name: 'Z-Street',
       
        images: [{

            title: 'Turn Only',
            description: 'Jay Adams gets low',
            url: jayAdams,
            wiki: 'http://www.skateboardinghalloffame.org/projects/2012-jay-adams-2/',
        },

        {
            title: 'Peggy Does Venice',
            description: 'Peggy Oki repping Zephr',
            url: peggyOki,
            wiki: 'http://www.skateboardinghalloffame.org/projects/2012-peggy-oki-2/',

        }]

    },

    {
        name: 'Z-Compete',
        images: [{

            title: "Tippin' Toes",
            description: 'Laura Thornhill in skate competition 1970\'s',
            url: lauraThornhill,
            wiki: 'http://www.skateboardinghalloffame.org/projects/2013-laura-thornhill-caswell/',
        },

        {
            title: 'Custom Trucks',
            description: 'Tony Alva with custom gear',
            url: tonyAlva,
            wiki: 'http://www.skateboardinghalloffame.org/projects/tony-alva/',

        },

        {
            title: "Van Fans",
            description: 'Peggy Turner repping Vans in skate competition',
            url: peggyTurner,
            wiki: '',
        }]
    }
];

   
    
