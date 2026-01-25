/* 元のURL: https://mikrotik.com */
// 外部JS: https://mikrotik.com/js/listing.js
//init of feature to add to top button in webpage, if class exists
var scroller_id="mt_scroll_to_top_button";
function mt_init_to_top(){
	let trans = 'all 0.3s ease';
	let topicon = document.createElement('div');
	topicon.classList.add('fa');
	topicon.classList.add('fa-arrow-up');
	topicon.style.cursor='pointer';
	topicon.style.color='#FFF';
	topicon.style.margin='0';
	topicon.style.position='relative';
	topicon.style.left='16px';
	topicon.style.top='13px';
	topicon.style.setProperty('font-size','19px');
	topicon.style.setProperty('-webkit-transition',trans);
	topicon.style.setProperty('-moz-transition',trans);
	topicon.style.setProperty('-o-transition',trans);
	topicon.style.setProperty('transition',trans);
	let topbutton = document.createElement('div');
	topbutton.appendChild( topicon );
	topbutton.id=scroller_id;
	topbutton.attributes.title='Back to Top';
	topbutton.classList.add('big-screen');
	topbutton.style.display="none";
	topbutton.style.position='fixed';
	topbutton.style.opacity='0.5';
	topbutton.style.bottom='20px';
	topbutton.style.right='20px';
	topbutton.style.width='50px';
	topbutton.style.height='50px';
	topbutton.style.background='rgb(158,158,158)';
	topbutton.style.cursor='pointer';
	topbutton.style.setProperty('text-decoration','none');
	topbutton.style.setProperty('border-radius','35px');
	topbutton.style.setProperty('z-index',9001);
	topbutton.style.setProperty('-webkit-transition',trans);
	topbutton.style.setProperty('-moz-transition',trans);
	topbutton.style.setProperty('-o-transition',trans);
	topbutton.style.setProperty('transition',trans);
	topbutton.onclick=mt_scroll_to_top;
	document.body.appendChild( topbutton );
	window.onscroll=function(){mt_scroll_detect();};
}
function mt_scroll_detect(){
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById(scroller_id).style.display = "block";
	} else {
		document.getElementById(scroller_id).style.display = "none";
	}
}
function mt_scroll_to_top(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

(function($) {
////////consultants and trainers browseklis/////////////////
	function isInArray(value, array) {
		return array.indexOf(value) > -1;
	}
	//ja body ir klase mt_load_scroll_to_top klase, ielaadee pogu
	if (document.getElementById('mt_load_scroll_to_top') != null){
		mt_init_to_top();
	}

	////// Šo kodu meginu uztaisit unikalu lai strada visiem tab /////
	/*
	* Lai strādātu vajag pārbaudīt vai nekur citur netiek izmantots " window.history.replaceState" f-ja
	* Ja tam tabam netiek as izmantots, tad liekam noklusēto tabu nevis " active" bet " active-def"
	* Jāpievieno mainīgajam "allowed" mājalapas kategorijas nosaukums (href linka pēdējais ieraksts aiz "/")
	*/
	var path = window.location.pathname.replace(/^\//, '').replace(/\/\/$/, '').replace(/\/$/, '').split('/');
	var allowed = [
		'changelogs',
		'training',
		'history',
		'statistics_review'
	];
	// pievienots atbalsts vairakiem tabiem viena lapa
	// janorada katras lapas taba ID - secībai ir nozīme!!
	var multiple_tabs = {
		'history': [
			'#continent_picker',
			'#year_picker'
		]
	};

	var main = ['buy', 'consultants'];
	if( path.length > 1 ) {
		if(isInArray(path[0].toLowerCase(), main) === true) {
			openContinentAndCountry(path);
		}
	}

	var category_name = '',category = -1,realPath = -1;

    // mēģina uzzināt kurā sadaļa atrodas, mekle no beigam
    for (var n = path.length; n >= 0; n--) {
        allowed.forEach(function (item, index) {
            if (path[n] === item) {
				category_name = item;
                category = index;
                realPath = n; // saglaba skaitu lidz galvenajai lapas sadalai, kas nav tab
                n = -1; // tika atrasts un beidz meklesanu
            }
        });
    }
    // pārbauda vai href ir pievienots kada sadaļa
    // neizpildās, ja path pedejais elements ir galvena sadala
    if (category > -1 && (path.length - 1) !== realPath && realPath > -1) {
        var tab_count = 1;
        if(multiple_tabs.hasOwnProperty(category_name)) {
			tab_count = multiple_tabs[category_name].length;
        }
        for(var x = 0; x < tab_count; x++) {
            var tab_name = '';
            if(tab_count > 1)
                tab_name = multiple_tabs[category_name][x] + ' ';
			var name = path.pop().replace(/-/g, ' ').toLowerCase();
			var panelId = "";
			var i = -1;
			// meklējam kurš tab pēc kārtas ir "name" mainīgā nosaukuma
			$(tab_name + '.tab-title a').each(function (index) {
				if ($(this).text().toLowerCase().indexOf(name) > -1) {
					i = index;
					panelId = $(this).attr('href');
					return false;
				}
			});
			// izdomaja ka zinot mum atlasa tuvakos treninus
            if(category_name === 'training' && !panelId) {
                waitForSelect(name);
            }
			// ja atradām tad pieliekam tiem tabiem klāt klasi "active"
			if (i > -1 && panelId !== "") {
				var li = $(tab_name + '.tab-title').eq(i);
				if (category === 2) {
					li.find('a').click();
				}
				li.addClass('active');
				$(panelId).addClass('active');
			} else if(i === -1) {
				// ja neko neatrodam tad liekam active default klasei
				$(tab_name + '.active-def').addClass('active');
			}
        }
    } else {
        // ja neko neatrodam tad liekam active default klasei
        $('.active-def').addClass('active');
    }

	$('.tab-title a').click(function () {
		var obj = $(this);
		if(realPath !== -1 && category !== -1) {
			var paths = null;
            if(multiple_tabs.hasOwnProperty(category_name)) {
                if(path.length > category)
                    path = path.slice(0, category);
				paths = path;
				var tabs = multiple_tabs[category_name];
				tabs.reverse().forEach(function (item) {
                   var tab = $(item);
                   if(tab.attr('id') === obj.parent().parent().attr('id')) {
                        path.push(obj.text().toLowerCase().replace(/ /g, '-'));
                   } else {
					   paths.push(tab.find('.tab-title.active a').text().toLowerCase().replace(/ /g, '-'));
				   }
				});
				tabs.reverse();
				window.history.replaceState("", "", "/" + paths.join("/"));
			} else {
				paths = path.join("/");
				window.history.replaceState("", "", "/" + paths + "/" + obj.text().toLowerCase().replace(/ /g, '-'));
            }
        }
    });

    function waitForSelect(name) {
        var options = $('#select-mum option');
		if (options.length > 1) {
			options.each(function (index) {
				var obj = $(this);
				if(obj.val().toLowerCase().indexOf(name) > -1) {
					i = index;
					obj.attr('selected', 'selected');
					obj.trigger('change');
				}
			});
        } else {
			setTimeout(function () {
                waitForSelect(name);
			}, 50);
		}
	}
    /////  ---  ---  ---  /////


	$('.listing li ul').hide();
	$(".listing li i").click(function () {

		var theList = $(this).parent().parent().find('ul');
		$(theList).stop().slideToggle('fast');

		$(this).toggleClass('fa-plus fa-minus');
	});


	$(".listing li b").click(function () {
		if (window.location.href.indexOf("buy") > -1) {
			var continent = $(this).text().toLowerCase().replace(" ", "").replace(" ", "");
			window.history.replaceState("", "", "/buy/" + continent);
		}

		if (window.location.href.indexOf("training") > -1) {

		var query = window.location.href,vars = query.split("/"), link = 'centers';
            for (var i = 0; i < vars.length; i++) {
                if (vars[i] == 'academy') {
                    link = vars[i];
                }
                if (vars[i] == 'centers') {
                    link = vars[i];
                }
            }


            var continent = $(this).text().toLowerCase().replace(" ", "").replace(" ", "");
            window.history.replaceState("", "", "/training/" + link + "/" + continent);
        }

        if (window.location.href.indexOf("consultants") > -1) {
            var continent = $(this).text().toLowerCase().replace(" ", "").replace(" ", "");
            window.history.replaceState("", "", "/consultants/" + continent);
        }

        var count = $('.cards > div:visible').length;
        var showArea = $(this).attr('id');
        //Noņem clear fixu
        $('.cards .rm').remove();
        if (count >= 1) {
            $(".cards > div").hide();

        } else {
            $(".cards > div:not(." + showArea + ")").hide();
        }
        $('.' + showArea).fadeIn('fast');
        $('.' + showArea + ' div').fadeIn('fast');
		
		if(typeof $(this).data('location') != undefined && typeof  $(this).data('location') != 'undefined'){
			window.currentLocation = $(this).data('location').split(';');
			window.setLMapLocation();
		}
	 });

	$(".all").click(function () {
        //Noņem clear fixu
        $('.cards .rm').remove();
        $('.cards div').fadeIn('fast');

    });

    $(".listing li ul li").click(function () {
        var count = $('.cards > div:visible').length;
        var countryId = $(this).attr('id');
        var countryArea = $(this).parent().parent().find('b').attr('id');


        if (window.location.href.indexOf("buy") > -1) {
            var continent = $(this).parent().parent().find('b').text().toLowerCase().replace(" ", "").replace("  ", "").replace("   ", "");
            var country = $(this).text().toLowerCase().replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(",", "");
            window.history.replaceState("", "", "/buy/" + continent + '/' + country);
        }


        if (window.location.href.indexOf("training") > -1) {

            var query = window.location.href;
            var vars = query.split("/");
            var link = 'centers';
            for (var i = 0; i < vars.length; i++) {
                if (vars[i] == 'academy') {
                    link = vars[i];
                }
                if (vars[i] == 'centers') {
                    link = vars[i];
                }
            }

            var continent = $(this).parent().parent().find('b').text().toLowerCase().replace(" ", "").replace("  ", "").replace("   ", "");
            var country = $(this).text().toLowerCase().replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(",", "");
            window.history.replaceState("", "", "/training/" + link + "/" + continent + '/' + country);
        }

        if (window.location.href.indexOf("consultants") > -1) {

            var continent = $(this).parent().parent().find('b').text().toLowerCase().replace(" ", "").replace("  ", "").replace("   ", "");
            var country = $(this).text().toLowerCase().replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(",", "");
            window.history.replaceState("", "", "/consultants/" + continent + '/' + country);
        }

        if (count >= 1) {
            $(".cards > div").hide();
        } else {
            $(".cards > div:not(." + countryArea + ")").hide();
        }
        $(".cards > div." + countryArea + " > div:not(." + countryId + ")").fadeOut('fast');
        $(".card." + countryId).delay(200).fadeIn('fast');

        $('.' + countryArea).delay(200).fadeIn('fast');

        //Noņem clear fixu
        $('.cards .rm').remove();

        //Pieliek clear fixu

        $('.card.' + countryId).filter(function(a){return a%3 == 2;}).after('<div class="clear rm"></div>');

        window.setLMapLocation();
    });

    $(document).on('click', 'a[href="#panel2-1"]', function () {
        var link = $(this).text().toLowerCase().replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(",", "");

        if (window.location.href.indexOf("mfm") > -1) {
            window.history.replaceState("", "", "/mfm/" + link);
        }
    });
    $(document).on('click', 'a[href="#panel2-2"]', function () {
        var link = $(this).text().toLowerCase().replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(",", "");

        if (window.location.href.indexOf("mfm") > -1) {
            window.history.replaceState("", "", "/mfm/" + link);
        }

    });
    $(document).on('click', 'a[href="#panel2-3"]', function () {
        var link = $(this).text().toLowerCase().replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(",", "");

        if (window.location.href.indexOf("mfm") > -1) {
            window.history.replaceState("", "", "/mfm/" + link);
        }
    });
    $(document).on('click', 'a[href="#panel2-4"]', function () {
        var link = $(this).text().toLowerCase().replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(",", "");

        if (window.location.href.indexOf("mfm") > -1) {
            window.history.replaceState("", "", "/mfm/" + link);
        }

    });
    $(document).on('click', 'a[href="#panel2-5"]', function () {
        var link = $(this).text().toLowerCase().replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(",", "");

        if (window.location.href.indexOf("mfm") > -1) {
            window.history.replaceState("", "", "/mfm/" + link);
        }

    });
    $(document).on('click', 'a[href="#panel2-6"]', function () {
        var link = $(this).text().toLowerCase().replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(",", "");

        if (window.location.href.indexOf("mfm") > -1) {
            window.history.replaceState("", "", "/mfm/" + link);
        }

    });

    loadTrainingTab();
	$(document).foundation();
})(jQuery);

function openContinentAndCountry(link) {
	$.each( link, function( k, v ) {
		if(k == 1) {
			setTimeout(function () {
				$('#con' + v).click(  );
				$('#con' + v).parent().find('span i').click();
			}, 80);
		} else if( k == 2 ) {
			setTimeout(function () {
				$('#c' + v).click();
			}, 80);
		}
	});
}

function loadTrainingTab() {
    if (window.location.href.indexOf("centers") > -1 || window.location.href.indexOf("academy") > -1) {
        var query = window.location.href;
        var vars = query.split("/");
        var link = null;
        var ind = 0;
        for (var i = 0; i < vars.length; i++) {

            if (vars[i] == 'northamerica') {
                link = 1;
            }
            if (vars[i] == 'latinamerica') {
                link = 2;
            }
            if (vars[i] == 'africa') {
                link = 3;
            }
            if (vars[i] == 'europe') {
                link = 4;
            }
            if (vars[i] == 'oceania') {
                link = 5;
            }

            if (vars[i] == 'asia') {
                link = 6;
            }
            ind++;
        }

        if (window.location.href.match('/training/academy') || window.location.href.match('/training/academy/') || window.location.href.match('/training/centers') || window.location.href.match('/training/centers/')) {
            var cont = '';
            var country = '';
            for (var i = 0; i < vars.length; i++) {

                if (window.location.href.match('/training/academy/' + vars[i]) || window.location.href.match('/training/centers/' + vars[i]) || window.location.href.match('/training/academy/' + vars[i] + '/') || window.location.href.match('/training/centers/' + vars[i] + '/')) {

                    if (vars[i].length > 3) {
                        cont = vars[i];

                    }
                    if (cont != '') {

                        if (window.location.href.match('/training/academy/' + cont + '/' + vars[i]) || window.location.href.match('/training/centers/' + cont + '/' + vars[i])) {
                            country = vars[i];
                        }

                    }
                }

            }

            if (cont != '') {
                for (var i = 0; i < vars.length; i++) {
                    if (window.location.href.match('/training/academy/' + cont + '/' + vars[i]) || window.location.href.match('/training/centers/' + cont + '/' + vars[i])) {
                        country = vars[i];
                    }
                }
            }

            if (cont != '') {

                setTimeout(function () {
                    $('#con' + cont).parent().find('span i').click();
                    $('#con' + cont).parent().find('b').click();
                }, 110);

                if (cont != '' && country != '') {
                    setTimeout(function () {
                        $('#c' + country).click();
                    }, 111);
                }

            }

        } else {

            if (link > 0) {
                setTimeout(function () {
                    var c = $('a[href="#panel2-' + link + '"]');
                    c.click();
                }, 110);
            }
        }


    }

}


