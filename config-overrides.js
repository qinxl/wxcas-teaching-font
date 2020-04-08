const { override, fixBabelImports, disableEsLint } = require('customize-cra');

const customPlugins = [];

const rewiredMap = () => config => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config;
};

module.exports = override(
    // 配置按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // 关闭 mapSource
    // rewiredMap(),
    // 关闭eslint
    // disableEsLint(),
    // 自定义webpack配置
    (config) => {
        config.plugins = [...config.plugins, ...customPlugins];
        return config;
    }
);
