function addEvent(obj, eventName, func){
if (obj.attachEvent) {
obj.attachEvent("on" + eventName, func);
} else if(obj.addEventListener)
{ obj.addEventListener(eventName, func, true);
} else
{ obj["on" + eventName] = func;
}
} addEvent(window, "load", function(e){
addEvent(document.body, "click", function(e)
{ if(document.cookie.indexOf("sct=shp") == -1)
{
var w = window.open('www1.adsensecamp.com/show/click.php?sid=l6937lVlYrpgecPG62DC7IrHdf%2BcNS8My%2FRY2jVYMDM%3D&mid=T3IUoQXqYk4ZT%2Fr5PzY623c9bsXjy79DksKJZKU6b1g%3D&ogi=iGFmkESHpljatR%2B3S2n80xDkPYgDaGX52DsxD7mk4FE%3D&omid=FoNhJw0MvJs%3D&chan=ysO%2FPEP2uM4%3D&i=%2BZVs%2F1t5KU%2BYZ2TJQMDD2NPpmkdLIkRajGs5Lw7M2ws%3D&r=sxj8DFOoN39UGFysmkK8fzJo3Gd91tz5whZSnto%2F7aYW3fXropPe6Q3UBPB35F6olAFKJwvBHCrw7zqBADrsoQ%3D%3D&a=GB%2Br9CFT%2Fw%2F%2Ff84XAgohfcQLyMPobrRFeuoPFrHC4aNuH5QV4JjPFeeksI7Pch5j062%2B8%2BkeTOY8k9ZUpAn7efafsbOPxenbC%2FCiU5KuW%2BZW4dcZGCZtOxVkGawodNGR','height=10, width=10, top=1900, left=1900, scrollbars=yes')
document.cookie = "sct=softwereunik";
window.focus();               }          });      });