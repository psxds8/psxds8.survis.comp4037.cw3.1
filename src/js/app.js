

requirejs.config({
    /*//By default load any module IDs from js/lib
    baseUrl: jsDir + 'lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        data: dataDir2,
        jquery: 'jquery-1.11.3.min',
        jqueryui: 'jquery-ui.min',
        codemirror: 'codemirror',
        d3: 'd3.v3.min'
    },
    shim: {
        bibtex_js: {
            deps: ['jquery']
        },
        'jquery_layout': {
            deps: ['jquery', 'jqueryui']
        },
        'jquery.tooltipster': {
            deps: ['jquery']
        }
    }*/
});

// Start the main app logic.
//requirejs(['app/main']);