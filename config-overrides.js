const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

let path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = function override(config, env) {
  config.resolve.alias['@'] = resolve('src');    // 往config内注入配置
  config.resolve.alias['@cp'] = resolve('src/components');
  config.resolve.alias['@scp'] = resolve('src/styledComponents');
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    // modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);
  return config;
}
