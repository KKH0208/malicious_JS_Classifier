/* 元のURL: https://espn.com */

	{
		"@context": "https://schema.org",
		"@type":    "WebSite",
		"name":     "ESPN",
		"url":      "https://www.espn.com/"
		
			,"potentialAction": {
				"@type": "SearchAction",
				"target": {
					"@type": "EntryPoint",
					"urlTemplate": "https://www.espn.com/search/_/q/{search_term_string}?ex_cid=google_sitelinks"
				},
				"query-input": "required name=search_term_string"
			}
		
	}


