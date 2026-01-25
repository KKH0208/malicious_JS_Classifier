/* 元のURL: https://scorecardresearch.com */
// 外部JS: https://scorecardresearch.com/Css/sitecommon.js
function ProcessCountryLanguageChange(nextPage, newCountry, newLanguage)
{
	document.location = nextPage +'?newCountry='+ newCountry +'&newLanguage='+ newLanguage; 
}

function ProcessSignupRequest()
{
	var sURL = 'Signup.aspx';
	var sQuerystring = ''

	if (document.forms[0].country != null && document.forms[0].country.value != ''  && document.forms[0].country.value != 'undefined')
	{
		sQuerystring = sQuerystring +'?newCountry='+ document.forms[0].country.value;
	}

	if (document.forms[0].language != null && document.forms[0].language.value != ''  && document.forms[0].language.value != 'undefined')
	{
		if (sQuerystring == '')
		{
			sQuerystring = sQuerystring + '?'
		}
		else
		{
			sQuerystring = sQuerystring + '&'
		}
		
		sQuerystring = sQuerystring +'newLanguage='+ document.forms[0].language.value;
	}

	document.location = sURL + sQuerystring; 
}

function call_ey()	
{
    window.open("https://cert.webtrust.org/ViewSeal?id=1687");
    
}

