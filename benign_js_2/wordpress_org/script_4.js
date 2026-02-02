/* 元のURL: https://wordpress.org */

{
	"@context":"https://schema.org",
	"@graph":[
		{
			"@type":"Organization",
			"@id":"https://wordpress.org/#organization",
			"url":"https://wordpress.org/",
			"name":"WordPress",
			"logo":{
				"@type":"ImageObject",
				"@id":"https://wordpress.org/#logo",
				"url":"https://s.w.org/style/images/about/WordPress-logotype-wmark.png"
			},
			"sameAs":[
				"https://www.facebook.com/WordPress/",
				"https://twitter.com/WordPress",
				"https://en.wikipedia.org/wiki/WordPress"
			]
		},
		{
			"@type":"WebSite",
			"@id":"https://wordpress.org/#website",
			"url":"https://wordpress.org/",
			"name":"WordPress.org",
			"publisher":{
				"@id":"https://wordpress.org/#organization"
			}
		},
		{
			"@type":"WebPage",
			"@id":"https://wordpress.org/",
			"url":"https://wordpress.org/",
			"inLanguage":"en",
			"name":"Blog Tool, Publishing Platform, and CMS - WordPress.org",
			"description":"Open source software which you can use to easily create a beautiful website, blog, or app.",
			"isPartOf":{
				"@id":"https://wordpress.org/#website"
			}
		}
	]
}


