module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    }
  },
  conventions: {
    // This is the default `conventions.vendor` value. If this line is commented
    // out, the problems strangely go away!
    vendor: /^(bower_components|node_modules|vendor)\//,
  },
}
