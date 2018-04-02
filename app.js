window.addEventListener('load', function () {
    let projects = [
        {
            link: 'http://inspiredclosets.com/',
            name: 'Inspired Closets',
            image: 'assets/closets-scrnshot.png',
            description: 'An interactive website for Inspired Closets, a division of The Stow Company. Clients are able to browse custom closet designs and design elements, read and watch real testimonials from other clients, learn about the process, and subscribe to the Inspired Closets mailing list.',
            tools: 'Wordpress, PHP, JQuery, Sass, Gulp, Foundation, JIRA, MAMP',
        }
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