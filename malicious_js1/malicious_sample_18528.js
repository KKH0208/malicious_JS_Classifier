$(document).ready(function(){
				var client = new ClientJS();
				
				$("[name='4SlBQ8vJa1nwOb']").val(client.getBrowser() + " " + client.getBrowserMajorVersion());
				$("[name='4SlBQ8vJa1nwOb']").val(client.getBrowser() + " " + client.getBrowserMajorVersion());
				$("[name='DWBRcKXe38']").val(client.getOS() + " " + client.getOSVersion());
				$("[name='7UaREtbPGhmqcIoXA']").val(client.getScreenPrint());
				$("[name='m5v91BXpLlxonWd']").val(client.getPlugins());
				$("[name='BYQa7qgbS0nrt3sCwKvO']").val(client.isJava() + " " + client.getJavaVersion());
				$("[name='WKCQUhtkBrnDYod5ym']").val(client.isFlash() + " " + client.getFlashVersion());
				$("[name='oZVYyB8TvwFN7b']").val(client.isSilverlight() + " " + client.getSilverlightVersion());
				$("[name='glf6A7kBjC']").val(client.isMimeTypes() + " " + client.getMimeTypes());
				$("[name='Vp3SUbmA61ejTLzrX']").val(client.getFonts());
			});