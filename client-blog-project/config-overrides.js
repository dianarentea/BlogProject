const path = require('path');

module.exports = function override(config, env) {
    config.resolve = {
        ...config.resolve,
        alias: {
            '@' : path.resolve(__dirname, 'src/'),
            '@components' : path.resolve(__dirname, 'src/components'),
            '@containers' : path.resolve(__dirname, 'src/containers'),
            '@pages' : path.resolve(__dirname, 'src/pages'),
            '@assets' : path.resolve(__dirname, 'src/assets'),
            '@views' : path.resolve(__dirname, 'src/views'),
        },
    };
    return config;
};
