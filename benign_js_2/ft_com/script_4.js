/* 元のURL: https://ft.com */
;(function () {
	const isEnhanced = 'IntersectionObserver' in window && 'Promise' in window
	const scripts = getScriptsConfig()
	const status = {}
	let scriptsWaiting = 0

	if (!scripts || !scripts.length) {
		return
	}

	scripts
		.filter(function (script) {
			return script.always || (isEnhanced && script.enhanced) || (!isEnhanced && script.core)
		})
		.forEach(loadScript)

	function loadScript(config) {
		try {
			const script = document.createElement('script')
			script.onerror = onerror(config.src)
			script.onload = onload(config.src)
			script.async = config.async
			script.defer = config.defer
			if (config.referrerPolicy) {
				script.referrerPolicy = config.referrerPolicy
			}
			document.currentScript.parentNode.insertBefore(script, document.currentScript)
			script.src = config.src
			status[config.src] = null
			scriptsWaiting++
		} catch (error) {
			console.error('Error creating script element for ' + config.src) // eslint-disable-line no-console
		}
	}

	function onload(script) {
		return function (event) {
			status[script] = true
			scriptsWaiting--
			//
			if (!scriptsWaiting) {
				done()
			}
		}
	}

	function onerror(script) {
		return function (error) {
			status[script] = false
			scriptsWaiting--
			console.error('The thirdparty script ' + script + ' failed to load') // eslint-disable-line no-console
			if (!scriptsWaiting) {
				done()
			}
		}
	}

	const timer = setTimeout(done, 10000)

	function done() {
		clearTimeout(timer)
		try {
			const errors = []
			for (const key in status) {
				if (status.hasOwnProperty(key)) {
					if (!status[key]) {
						errors.push(key)
					}
				}
			}
			if (errors.length) {
				const img = new Image()
				const data = JSON.stringify({
					category: 'javascript',
					action: 'load-error',
					system: {
						source: 'home-page',
					},
					context: {
						scripts: errors,
					},
				})

				img.src = 'https://spoor-api.ft.com/px.gif?data=' + encodeURIComponent(data)
			}
		} catch (e) {
			console.error('Problem sending error report')
		}
	}

	function getScriptsConfig() {
		try {
			return JSON.parse(document.getElementById('third-party-bootstrap-config').textContent) || []
		} catch (error) {
			console.error('Error rehydrating third-party-bootstrap-config', error) // eslint-disable-line no-console
		}
		return []
	}
})();

