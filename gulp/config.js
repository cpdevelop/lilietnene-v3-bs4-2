module.exports = function () {
    const root = './';
    const assetRoot = root + 'src/';
    const handlebarsRoot = assetRoot + 'templates/';
    //const publidDir = root + 'dist/';

    const config = {
        dataPath: './src/data/data.json',
        templatePath: handlebarsRoot,
        templatePartialPath: handlebarsRoot + 'partials',
        templateOutputPath: assetRoot,
        templates: [
            handlebarsRoot + '**/*.hbs'
        ]
    };

    return config;
};
