const path = require('path');

const BASE = path.resolve(__dirname, '');
const MODULES = path.join(BASE, 'node_modules');
const APP = path.join(BASE, 'src');

module.exports = {
  BASE,
  MODULES,
  APP,
  CONFIG: path.join(APP, ' config'),
  ASSETS: path.join(BASE, 'assets'),
  COMPONENTS: path.join(APP, 'components')
};
