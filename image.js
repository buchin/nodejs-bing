exports = module.exports = function (query, hack = '', filters = []) {
	var rp = require('request-promise')
	var cheerio = require('cheerio')
	var urlencode = require('urlencode')

	query = query.trim() + ' ' + hack.trim()
	var url = 'http://www.bing.com/images/search?q=' + urlencode(query)

	if(filters.length > 0){
		url = url + '&qft=' + filters.join('')
	}

	var results = []

	return rp(url)
		.then(function(body) {
			$ = cheerio.load(body)
			items = $('div.item')	

			$(items).each(function(i, item) {
				result = {}
				result.mediaurl = $(item).find('a.thumb').attr('href')
				result.link = $(item).find('a.tit').attr('href')
				result.title = $(item).find('div.des').html()
				result.size = $(item).find('div.fileInfo').html()

				results.push(result)
			})

			return results
		})
}


