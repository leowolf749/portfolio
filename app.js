window.addEventListener('load', function () {
    let projects = [
        {
            link: 'https://drumcircle1.herokuapp.com/',
            name: 'Drum Circle',
            image: 'assets/drum-circle-scrnshot.png',
            description: 'An open source library of drum samples where users can browse through the database, save their favorite sounds, and play them by building their own customized drum kits.',
            tools: 'Angular, Angular Material, Wad, Sass, Gulp, Foundation, AJAX, Dragula',
        },
        {
            link: 'https://github.com/leowolf749/movie-emporeum',
            name: 'Movie Emporeum',
            image: 'assets/movie-emp-scrnshot.png',
            description: 'A movie catalog that pulls recent movies from an API and allows users to rate them. Users can also add movies to the catalog.',
            tools: 'Angular, Sass, Gulp, Foundation, AJAX'
        },
        {
            link: 'https://github.com/leowolf749/back-to-chat',
            name: 'Chatterbox2',
            image: 'assets/chatterbox-scrnshot.png',
            description: 'A minimalistic messaging app that allows users to send and recieve messages through an API.',
            tools: 'JQuery, Backbone, Sass, Gulp, AJAX',
        },
        {
            link: 'https://github.com/leowolf749/shoppers_delight',
            name: 'Happy Mask Shop Online',
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
                }
            );
            parent.appendChild(projectSamples);
        }

});