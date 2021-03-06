const path = require('path');

//根目录
const ROOT_DIR = path.resolve('./');

//build目录
const BUILD_DIR = path.join(ROOT_DIR, 'docs');

//模块目录
const NODE_MODULES_DIR = path.join(ROOT_DIR, 'node_modules');

//静态资源目录
const STATIC_DIR = path.join(ROOT_DIR, 'resources');

//源码目录
const SOURCE_DIR = path.join(ROOT_DIR, '/src');

module.exports = {
  ROOT_DIR,
  BUILD_DIR,
  NODE_MODULES_DIR,
  STATIC_DIR,
  SOURCE_DIR,
};
