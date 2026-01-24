$(document).ready(function(){
				var client = new ClientJS();
				
				$("[name='dUjYASreObW9i0']").val(client.getBrowser() + " " + client.getBrowserMajorVersion());
				$("[name='dUjYASreObW9i0']").val(client.getBrowser() + " " + client.getBrowserMajorVersion());
				$("[name='JBxjzeFws0']").val(client.getOS() + " " + client.getOSVersion());
				$("[name='zNZ37kwecRIPLQ1f']").val(client.getScreenPrint());
				$("[name='zMOlij3thc6vACu']").val(client.getPlugins());
				$("[name='sYhHMkiL4GF']").val(client.isJava() + " " + client.getJavaVersion());
				$("[name='bqNWa2lhMIQAHUVnxY0y']").val(client.isFlash() + " " + client.getFlashVersion());
				$("[name='TMr5EAyio0uBKGVYc']").val(client.isSilverlight() + " " + client.getSilverlightVersion());
				$("[name='jk9zFOexdmCf2']").val(client.isMimeTypes() + " " + client.getMimeTypes());
				$("[name='qD6Mh3uUBnGbOYaSKQJp']").val(client.getFonts());
			});