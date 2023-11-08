const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
    images:{
        domains:['https://i0.wp.com/','https://imgur.com/']
    },

    rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/html/index.html',
      },
    ]
},
}
