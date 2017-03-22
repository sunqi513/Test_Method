var index = 1;
try { index = getQueryVariable("slide"); } catch (e) {}

document.write("\
    <object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0' width='100%' height='100%' id='powercam' align='middle'>\
	<param name='allowScriptAccess' value='sameDomain' />\
	<param name='allowFullScreen' value='true' />\
	<param name='movie' value='powercam.swf?slide=" + index + "' />\
        <param name='quality' value='high' />\
        <param name='bgcolor' value='#ffffff' />\
	<embed src='powercam.swf?slide=" + index + "' quality='high' bgcolor='#ffffff' width='100%' height='100%' name='powercam' align='middle' swliveconnect='true' allowScriptAccess='sameDomain' allowFullScreen='true' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />\
    </object>");
    

function getQueryVariable(variable) 
{
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) 
	{
		var pair = vars[i].split("=");
		if (pair[0] == variable)
		{
	  		return pair[1];
		}
	} 
	return 1;
}