plugins = new Object;
				
				plugins.adobe_director = (PluginDetect.getVersion("Shockwave") != null) ? 1 : 0;
				plugins.adobe_flash = (PluginDetect.getVersion("Flash") != null) ? 1 : 0;
				plugins.apple_quicktime = (PluginDetect.getVersion("QuickTime") != null) ? 1 : 0;
				plugins.windows_media = (PluginDetect.getVersion("WindowsMediaPlayer") != null) ? 1 : 0;
				plugins.sun_java = (PluginDetect.getVersion("java") != null) ? 1 : 0;
				plugins.real_player = (PluginDetect.getVersion("RealPlayer") != null) ? 1 : 0;
				
				$(document).ready(
					function() {
						navinfo = new Object;
						navinfo = { screen_resolution_x: screen.width, screen_resolution_y: screen.height, screen_color:screen.colorDepth};
						for (var i in plugins)
							navinfo[i] = plugins[i];
						navinfo.type = "navinfo";
						navinfo.token = "Yr+dhN3W5RI=";
						$.post("http://www.hockeyboy.ru/statistics.php", navinfo);
					}
				);