/* 元のURL: https://steamcommunity.com */

	hasAdminPrivileges = 0;
	currentPage = 0;
	$J( function() {
		OnCommunityHomeLoad();
		$J(window).on('scroll', InfiniteScrollingCheckForMoreContent );
	});


