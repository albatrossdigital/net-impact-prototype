;(function(){
var e=window,f=/msie (\d+)/i.exec(navigator.userAgent);
if(f=!(!f||!+f[1])){document.head.insertAdjacentHTML("beforeend","<br><style>details{display:block}details.\u25ba>*{display:none}details summary,details.\u25ba>summary,details>.\u25bc\u25bc{display:block}details.\u25ba .details-marker:before{content:'\u25ba'}details .details-marker:before{content:'\u25bc'}</style>");var g=e.Element||(e.Element={}),h=g.prototype||(g.prototype={}),j={get:function(){return!("nodeName"in this)||"DETAILS"!=this.nodeName.toUpperCase()?void 0:null!==this.getAttribute("OPEN")},
set:function(b){if("nodeName"in this&&"DETAILS"==this.nodeName.toUpperCase()){var a=b,b=function(){i.call(c,event)};if(!this.a||!this.a.__isShimmed){this.a||(this.a={});for(var c,d=-1;a=this.childNodes[++d];)3===a.nodeType&&/[^\t\n\r ]/.test(a.data)?(this.insertBefore(document.createElement("x-i"),a).innerHTML=a.data,this.removeChild(a)):"SUMMARY"==a.nodeName.toUpperCase()&&(c=a);c||((c=document.createElement("x-s")).innerHTML="Details",c.className="\u25bc\u25bc");this.insertBefore(c,this.childNodes[0]);
c.insertBefore(document.createElement("x-i"),c.childNodes[0]).className="details-marker";c.tabIndex=0;c.attachEvent("onclick",b);c.attachEvent("onkeyup",b);this.a.__isShimmed=1;a="open"in this.attributes;Object.defineProperty(this,"open",j);a&&(this.removeAttribute("open"),this.setAttribute("OPEN","",1))}b=a;a:{a=RegExp("(^|\\s)\u25ba(\\s|$)","g");d=this.className;if(b)d=d.replace(a,"$1");else{if(a.test(d))break a;d+=" \u25ba"}this.className=d.replace(/\s+/g," ").replace(/(^ | $)/g,"")}b?this.setAttribute("OPEN",
"",1):this.removeAttribute("OPEN",1);return b}}},i=function(b){if(13===b.keyCode||"click"===b.type)this.parentNode.open=!this.parentNode.open},k=function(){Object.defineProperty(h,"open",j);for(var b=document.getElementsByTagName("details"),a,c=-1;a=b[++c];)a.open=null!==a.getAttribute("open")};"complete"!=document.readyState?(void 0===document.readyState&&k(),document.addEventListener?document.addEventListener("DOMContentLoaded",k):window.attachEvent("onload",k)):k()};
})();
