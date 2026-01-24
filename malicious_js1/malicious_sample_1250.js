// instantiate object
		var gsr = gsr || new GsrModule('gsr');

		// get errors translation
		gsr.msgs = {"delay":"You have not filled out a numeric for delay option","fbId":"You have not filled out a numeric for Facebook App ID option","fbsecret":"You have not filled out Facebook App Secret option","title":"You have not filled out the title","description":"You have not filled out the comment","rating":"You have not selected the rating for the review","checkreview":"You have not selected at least one review","email":"You have not filled out your email","vouchercode":"You have not filled out the voucher code","voucheramount":"You have left 0 as value for voucher's value","voucherminimum":"Minimum amount is not a numeric","vouchermaximum":"Maximum quantity is not a numeric","vouchervalidity":"You have left 0 as value for voucher's validity","tabTitle":{"1":"You have not filled out your title with language English (English). Click on the language flag in order to fill out the correct language field(s)."}};

		// set URL of admin img
		gsr.sImgUrl = '/modules/gsnippetsreviews/views/img/';

					// set URL of module's web service
			gsr.sWebService = '/modules/gsnippetsreviews/ws-gsnippetsreviews.php';