var path = require('path')

module.exports = {
  httpPort: 9080,
  streamPort: 9082,
  wsPort: 9084,
  staticFolder: path.join(__dirname + '/../../../client')
};
