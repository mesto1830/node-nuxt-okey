const middleware = {}

middleware['serverauth'] = require('../middleware/serverauth.js')
middleware['serverauth'] = middleware['serverauth'].default || middleware['serverauth']

middleware['wrapasync'] = require('../middleware/wrapasync.js')
middleware['wrapasync'] = middleware['wrapasync'].default || middleware['wrapasync']

export default middleware
