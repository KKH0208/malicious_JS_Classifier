/* 元のURL: https://gravatar.com */

			let debounceTimer;

			window._errorHandler = function (message, source, lineno, colno, error) {
				const errorData = {
					message: message,
					source: source,
					lineno: lineno,
					type: error?.name,
					colno: colno,
					errorStack: error ? error.stack.split("\n").map(line => line.trim()) : [],
					userAgent: navigator.userAgent,
					url: window?.location?.href,
					platform: navigator?.platform,
					language: navigator?.language,
				};

				// Clear the existing debounce timer
				clearTimeout(debounceTimer);

				// Set a new debounce timer
				debounceTimer = setTimeout(() => {
			        // Send the error data to an endpoint
			        fetch('https://api.gravatar.com/v2/errors/log', {
			            method: 'POST',
			            headers: {
			                'Content-Type': 'application/json',
			            },
			            body: JSON.stringify(errorData),
			            credentials: 'include',
			        });
				}, 300);
			}

			window.onerror = window._errorHandler;


