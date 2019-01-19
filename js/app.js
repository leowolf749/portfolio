const app = angular.module ('leoWolfSnoom', [
    'ui.router',
]);

const components = [
    require('./components/header.component'),
    require('./components/footer.component'),
    require('./components/home.component'),
    require('./components/artists.component'),
    require('./components/media.component'),
    require('./components/about.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};

const controllers = [
    require('./controllers/artists.controller'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

app.config(function ($stateProvider){
    $stateProvider.state({
        name: 'home',
        url: '/',
    });
    $stateProvider.state({
        name: 'artists',
        url: '/music',
        component: 'artists',
    });
    $stateProvider.state({
        name: 'media',
        url: '/art',
        component: 'media',
    });
    $stateProvider.state({
        name: 'about',
        url: '/cv',
        component: 'about',
    });
});