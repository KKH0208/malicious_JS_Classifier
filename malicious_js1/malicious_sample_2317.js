(function (w, d, id, ns, s) {
		var c = w[ns] = w[ns] || {};
		if (!c.ready) {
			c.q = [];
			c.ready = function () {
				c.q.push(arguments);
			};
						c.ready.apply(c, ["expose",{"wp\/widgets":{"dependencies":["widgets"],"js":["https:\/\/assets.context.ly\/wp-plugin\/6.0.7\/js\/contextly-wordpress.js"],"foreign":true}}]);
						c.ready.apply(c, ["libraries",{"jquery":false}]);
						c.ready.apply(c, ["load","wp\/widgets"]);
					}

				if (!d.getElementById(id)) {
			var e = d.createElement(s);
			e.id = id;
			e.src = "https:\/\/assets.context.ly\/kit\/6.latest\/loader.js";
			var h = d.getElementsByTagName(s)[0];
			h.parentNode.insertBefore(e, h);
		}
			})(window, document, 'ctx-loader', 'Contextly', 'script');

	(function(c, ns){var v=c[ns]=c[ns]||{};v["appId"]="";
	v["https"]=true;
	v["client"]={"client":"wp","version":"6.0.7"};
	})(Contextly,"overrides");
(function(c, ns){var v=c[ns]=c[ns]||{};v["ajax_url"]="https:\/\/www.primerochiapas.com\/wp-admin\/admin-ajax.php";
	})(Contextly,"wpdata");