const path = require('path')

module.exports = {
  paths: {
    src: path.resolve(__dirname, '../src'),
    build: path.resolve(__dirname, '../dist'),
    public: path.resolve(__dirname, '../public'),
    components: path.resolve(__dirname, '../src/components'),
    images: path.resolve(__dirname, '../src/images'),
    styles: path.resolve(__dirname, '../src/styles'),
  },
  port: 8080,
  title: 'Vue 2 Boilerplate',
}
