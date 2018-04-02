(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
