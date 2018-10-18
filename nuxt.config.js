const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/searchabledropdown/'
  },
    generate:{
  		dir: 'docs'
  	}
} : {
 		 generate:{
  			dir: 'docs'
		 }
	}

module.exports = {
  ...routerBase,
  modules: [
  ],
  head:{
  	meta:[
		{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
  	],
  	script: [
       { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.js' },
       { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'},
       {src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/js/bootstrap-select.min.js'}

    ],
    link: [
       { rel:'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'},
       { rel:'stylesheet', href:'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'},
       { rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/css/bootstrap-select.min.css'}

    ]
  
  }

}