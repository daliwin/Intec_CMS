var render = require('./render')
var tabletop = require('tabletop')

tabletop.init({
	key: 'https://docs.google.com/spreadsheets/d/1vE_wYxs9uZdlB8xMZFJz_xVLyPfK3ihTJtoRJ6KvBhQ/pubhtml',
	callback: function (tabletopData, tabletop) {
		//console.log(tabletopData)
		render(tabletopData)
	},
	simpleSheet: false
})
