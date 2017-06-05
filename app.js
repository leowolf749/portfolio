window.addEventListener('load', function () {
    let projects = [
        {
            link: 'http://inspiredclosets.com/',
            name: 'Inspired Closets',
            image: 'assets/closets-scrnshot.png',
            description: 'An interactive website for Inspired Closets, a division of The Stow Company. Clients are able to browse custom closet designs and design elements, read and watch real testimonials from other clients, learn about the process, and subscribe to the Inspired Closets mailing list.',
            tools: 'Wordpress, PHP, JQuery, Sass, Gulp, Foundation, JIRA, MAMP',
        },
        {
            link: 'https://drumcircle1.herokuapp.com/',
            name: 'Drum Circle',
            image: 'assets/drum-circle-scrnshot.png',
            description: 'An open source library of drum samples where users can browse through the database, save their favorite sounds, and play them by building their own customized drum kits.',
            tools: 'Angular, Angular Material, Wad, Sass, Gulp, Foundation, AJAX, Dragula',
        },
        {
            link: 'http://addicted-worm.surge.sh/',
            name: 'Movie Emporeum',
            image: 'assets/movie-emp-scrnshot.png',
            description: 'A movie catalog that pulls recent movies from an API and allows users to rate them. Users can also add movies to the catalog.',
            tools: 'Angular, Sass, Gulp, Foundation, AJAX'
        },
        {
            link: 'http://lewd-wren.surge.sh/',
            name: 'Chatterbox2',
            image: 'assets/chatterbox-scrnshot.png',
            description: 'A minimalistic messaging app that allows users to send and recieve messages through an API.',
            tools: 'JQuery, Backbone, Sass, Gulp, AJAX',
        },
        {
            link: 'http://icky-advice.surge.sh/',
            name: 'The Happy Mask Shop Online',
            image: 'assets/shoppers-scrnshot.png',
            description: 'A mock website of the Happy Mask Shop from the Zelda video game franchise. Users can browse various masks for sale and add them to their cart. The cart adds up their total.',
            tools: 'JavaScript, Sass, Foundation',
        },
    ];

    let parent = document.querySelector('#project-list');
        for (let i = 0; i < projects.length; i++) {
            let projectSamples = document.createElement('li');
            projectSamples.innerHTML = Mustache.render (
                document.querySelector('#portfolio-template').innerHTML,
                {
                    projectLink: projects[i].link,
                    projectImage: projects[i].image,
                    projectName: projects[i].name,
                    projectDescription: projects[i].description,
                    projectTools: projects[i].tools,
                }
            );
            parent.appendChild(projectSamples);
        }

});