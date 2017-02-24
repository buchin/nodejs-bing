exports = module.exports = function (query, hack = '', filters = []) {
	var rp = require('request-promise')
	var cheerio = require('cheerio')
	var urlencode = require('urlencode')
	var urlparser = require('url')

	query = query.trim() + ' ' + hack.trim()
	var url = 'http://www.bing.com/videos/search?q=' + urlencode(query)

	url = url + '&qft=+filterui:msite-youtube.com' + filters.join('')

	var results = []

	return rp(url)
		.then(function(body) {
			$ = cheerio.load(body)
			items = $('td.resultCell')	

			$(items).each(function(i, item) {
				result = {}
				if($(item).find('div.title span').attr('title')){
					result.title = $(item).find('div.title span').attr('title')
				}else{
					result.title = $(item).find('div.title').text()
				}

				var link = $(item).find('a').attr('href')
				var query = urlparser.parse(link, true).query

				result.link = "https://www.youtube.com/watch?v=" + query.v
				result.videoid = query.v
				result.thumbnail = "https://i.ytimg.com/vi/" + query.v + "/default.jpg";
				result.thumbnail_mq = "https://i.ytimg.com/vi/" + query.v + "/mqdefault.jpg";
				result.thumbnail_hq = "https://i.ytimg.com/vi/" + query.v + "/hqdefault.jpg";

				results.push(result)
			})

			return results
		})
}


