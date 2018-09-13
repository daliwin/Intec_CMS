var crel = require('crel')

function cmsHeader(elem) {
	console.log(elem[0])
	
}

function cmsFooter() {
	
}

function cmsContent() {
	
}

function renderPage(cms) {
	cmsHeader(cms.config.elements)
}

module.exports = renderPage