// MooTools: the javascript framework.
// Load this file's selection again by visiting: http://mootools.net/more/92c6f58f5389fa4d95b725f0856142dc 
// Or build this file again with packager using: packager build More/Date More/URI More/Element.Delegation More/Element.Shortcuts More/Locale.sv-SE.Date
/*
---
copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/
MooTools.More={version:"1.3.0.1",build:"6dce99bed2792dffcbbbb4ddc15a1fb9a41994b5"};(function(){var a=function(b){return b!=null;};Object.extend({getFromPath:function(e,d){var f=d.split(".");
for(var c=0,b=f.length;c<b;c++){if(e.hasOwnProperty(f[c])){e=e[f[c]];}else{return null;}}return e;},cleanValues:function(b,c){c=c||a;for(key in b){if(!c(b[key])){delete b[key];
}}return b;},erase:function(b,c){if(b.hasOwnProperty(c)){delete b[c];}return b;},run:function(c){var b=Array.slice(arguments,1);for(key in c){if(c[key].apply){c[key].apply(c,b);
}}return c;}});})();(function(){var b=null,a={},d={};var c=function(f){if(instanceOf(f,e.Set)){return f;}else{return a[f];}};var e=this.Locale={define:function(f,j,h,i){var g;
if(instanceOf(f,e.Set)){g=f.name;if(g){a[g]=f;}}else{g=f;if(!a[g]){a[g]=new e.Set(g);}f=a[g];}if(j){f.define(j,h,i);}if(!b){b=f;}return f;},use:function(f){f=c(f);
if(f){b=f;this.fireEvent("change",f);}return this;},getCurrent:function(){return b;},get:function(g,f){return(b)?b.get(g,f):"";},inherit:function(f,g,h){f=c(f);
if(f){f.inherit(g,h);}return this;},list:function(){return Object.keys(a);}};Object.append(e,new Events);e.Set=new Class({sets:{},inherits:{locales:[],sets:{}},initialize:function(f){this.name=f||"";
},define:function(i,g,h){var f=this.sets[i];if(!f){f={};}if(g){if(typeOf(g)=="object"){f=Object.merge(f,g);}else{f[g]=h;}}this.sets[i]=f;return this;},get:function(r,j,q){var p=Object.getFromPath(this.sets,r);
if(p!=null){var m=typeOf(p);if(m=="function"){p=p.apply(null,Array.from(j));}else{if(m=="object"){p=Object.clone(p);}}return p;}var h=r.indexOf("."),o=h<0?r:r.substr(0,h),k=(this.inherits.sets[o]||[]).combine(this.inherits.locales).include("en-US");
if(!q){q=[];}for(var g=0,f=k.length;g<f;g++){if(q.contains(k[g])){continue;}q.include(k[g]);var n=a[k[g]];if(!n){continue;}p=n.get(r,j,q);if(p!=null){return p;
}}return"";},inherit:function(g,h){g=Array.from(g);if(h&&!this.inherits.sets[h]){this.inherits.sets[h]=[];}var f=g.length;while(f--){(h?this.inherits.sets[h]:this.inherits.locales).unshift(g[f]);
}return this;}});})();Locale.define("en-US","Date",{months:["January","February","March","April","May","June","July","August","September","October","November","December"],months_abbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],days_abbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dateOrder:["month","date","year"],shortDate:"%m/%d/%Y",shortTime:"%I:%M%p",AM:"AM",PM:"PM",ordinal:function(a){return(a>3&&a<21)?"th":["th","st","nd","rd","th"][Math.min(a%10,4)];
},lessThanMinuteAgo:"less than a minute ago",minuteAgo:"about a minute ago",minutesAgo:"{delta} minutes ago",hourAgo:"about an hour ago",hoursAgo:"about {delta} hours ago",dayAgo:"1 day ago",daysAgo:"{delta} days ago",weekAgo:"1 week ago",weeksAgo:"{delta} weeks ago",monthAgo:"1 month ago",monthsAgo:"{delta} months ago",yearAgo:"1 year ago",yearsAgo:"{delta} years ago",lessThanMinuteUntil:"less than a minute from now",minuteUntil:"about a minute from now",minutesUntil:"{delta} minutes from now",hourUntil:"about an hour from now",hoursUntil:"about {delta} hours from now",dayUntil:"1 day from now",daysUntil:"{delta} days from now",weekUntil:"1 week from now",weeksUntil:"{delta} weeks from now",monthUntil:"1 month from now",monthsUntil:"{delta} months from now",yearUntil:"1 year from now",yearsUntil:"{delta} years from now"});
(function(){var i=this.Date;i.Methods={ms:"Milliseconds",year:"FullYear",min:"Minutes",mo:"Month",sec:"Seconds",hr:"Hours"};["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds","Time","TimezoneOffset","Week","Timezone","GMTOffset","DayOfYear","LastMonth","LastDayOfMonth","UTCDate","UTCDay","UTCFullYear","AMPM","Ordinal","UTCHours","UTCMilliseconds","UTCMinutes","UTCMonth","UTCSeconds","UTCMilliseconds"].each(function(p){i.Methods[p.toLowerCase()]=p;
});var d=function(r,q,p){if(!p){p="0";}return new Array(q-String(r).length+1).join(p)+r;};i.implement({set:function(r,q){r=r.toLowerCase();var p=i.Methods;
if(p[r]){this["set"+p[r]](q);}return this;}.overloadSetter(),get:function(q){q=q.toLowerCase();var p=i.Methods;if(p[q]){return this["get"+p[q]]();}return null;
},clone:function(){return new i(this.get("time"));},increment:function(p,r){p=p||"day";r=r!=null?r:1;switch(p){case"year":return this.increment("month",r*12);
case"month":var q=this.get("date");this.set("date",1).set("mo",this.get("mo")+r);return this.set("date",q.min(this.get("lastdayofmonth")));case"week":return this.increment("day",r*7);
case"day":return this.set("date",this.get("date")+r);}if(!i.units[p]){throw new Error(p+" is not a supported interval");}return this.set("time",this.get("time")+r*i.units[p]());
},decrement:function(p,q){return this.increment(p,-1*(q!=null?q:1));},isLeapYear:function(){return i.isLeapYear(this.get("year"));},clearTime:function(){return this.set({hr:0,min:0,sec:0,ms:0});
},diff:function(q,p){if(typeOf(q)=="string"){q=i.parse(q);}return((q-this)/i.units[p||"day"](3,3)).round();},getLastDayOfMonth:function(){return i.daysInMonth(this.get("mo"),this.get("year"));
},getDayOfYear:function(){return(i.UTC(this.get("year"),this.get("mo"),this.get("date")+1)-i.UTC(this.get("year"),0,1))/i.units.day();},getWeek:function(){return(this.get("dayofyear")/7).ceil();
},getOrdinal:function(p){return i.getMsg("ordinal",p||this.get("date"));},getTimezone:function(){return this.toString().replace(/^.*? ([A-Z]{3}).[0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3");
},getGMTOffset:function(){var p=this.get("timezoneOffset");return((p>0)?"-":"+")+d((p.abs()/60).floor(),2)+d(p%60,2);},setAMPM:function(p){p=p.toUpperCase();
var q=this.get("hr");if(q>11&&p=="AM"){return this.decrement("hour",12);}else{if(q<12&&p=="PM"){return this.increment("hour",12);}}return this;},getAMPM:function(){return(this.get("hr")<12)?"AM":"PM";
},parse:function(p){this.set("time",i.parse(p));return this;},isValid:function(p){return !isNaN((p||this).valueOf());},format:function(p){if(!this.isValid()){return"invalid date";
}p=p||"%x %X";p=k[p.toLowerCase()]||p;var q=this;return p.replace(/%([a-z%])/gi,function(s,r){switch(r){case"a":return i.getMsg("days_abbr")[q.get("day")];
case"A":return i.getMsg("days")[q.get("day")];case"b":return i.getMsg("months_abbr")[q.get("month")];case"B":return i.getMsg("months")[q.get("month")];
case"c":return q.format("%a %b %d %H:%m:%S %Y");case"d":return d(q.get("date"),2);case"e":return d(q.get("date"),2," ");case"H":return d(q.get("hr"),2);
case"I":return d((q.get("hr")%12)||12,2);case"j":return d(q.get("dayofyear"),3);case"k":return d(q.get("hr"),2," ");case"l":return d((q.get("hr")%12)||12,2," ");
case"L":return d(q.get("ms"),3);case"m":return d((q.get("mo")+1),2);case"M":return d(q.get("min"),2);case"o":return q.get("ordinal");case"p":return i.getMsg(q.get("ampm"));
case"s":return Math.round(q/1000);case"S":return d(q.get("seconds"),2);case"U":return d(q.get("week"),2);case"w":return q.get("day");case"x":return q.format(i.getMsg("shortDate"));
case"X":return q.format(i.getMsg("shortTime"));case"y":return q.get("year").toString().substr(2);case"Y":return q.get("year");case"z":return q.get("GMTOffset");
case"Z":return q.get("Timezone");}return r;});},toISOString:function(){return this.format("iso8601");}});i.alias("toJSON","toISOString");i.alias("compare","diff");
i.alias("strftime","format");var k={db:"%Y-%m-%d %H:%M:%S",compact:"%Y%m%dT%H%M%S",iso8601:"%Y-%m-%dT%H:%M:%S%T",rfc822:"%a, %d %b %Y %H:%M:%S %Z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"};
var g=[];var e=i.parse;var n=function(s,u,r){var q=-1;var t=i.getMsg(s+"s");switch(typeOf(u)){case"object":q=t[u.get(s)];break;case"number":q=t[u];if(!q){throw new Error("Invalid "+s+" index: "+u);
}break;case"string":var p=t.filter(function(v){return this.test(v);},new RegExp("^"+u,"i"));if(!p.length){throw new Error("Invalid "+s+" string");}if(p.length>1){throw new Error("Ambiguous "+s);
}q=p[0];}return(r)?t.indexOf(q):q;};i.extend({getMsg:function(q,p){return Locale.get("Date."+q,p);},units:{ms:Function.from(1),second:Function.from(1000),minute:Function.from(60000),hour:Function.from(3600000),day:Function.from(86400000),week:Function.from(608400000),month:function(q,p){var r=new i;
return i.daysInMonth(q!=null?q:r.get("mo"),p!=null?p:r.get("year"))*86400000;},year:function(p){p=p||new i().get("year");return i.isLeapYear(p)?31622400000:31536000000;
}},daysInMonth:function(q,p){return[31,i.isLeapYear(p)?29:28,31,30,31,30,31,31,30,31,30,31][q];},isLeapYear:function(p){return((p%4===0)&&(p%100!==0))||(p%400===0);
},parse:function(r){var q=typeOf(r);if(q=="number"){return new i(r);}if(q!="string"){return r;}r=r.clean();if(!r.length){return null;}var p;g.some(function(t){var s=t.re.exec(r);
return(s)?(p=t.handler(s)):false;});return p||new i(e(r));},parseDay:function(p,q){return n("day",p,q);},parseMonth:function(q,p){return n("month",q,p);
},parseUTC:function(q){var p=new i(q);var r=i.UTC(p.get("year"),p.get("mo"),p.get("date"),p.get("hr"),p.get("min"),p.get("sec"),p.get("ms"));return new i(r);
},orderIndex:function(p){return i.getMsg("dateOrder").indexOf(p)+1;},defineFormat:function(p,q){k[p]=q;},defineFormats:function(p){for(var q in p){i.defineFormat(q,p[q]);
}},defineParser:function(p){g.push((p.re&&p.handler)?p:l(p));},defineParsers:function(){Array.flatten(arguments).each(i.defineParser);},define2DigitYearStart:function(p){h=p%100;
m=p-h;}});var m=1900;var h=70;var j=function(p){return new RegExp("(?:"+i.getMsg(p).map(function(q){return q.substr(0,3);}).join("|")+")[a-z]*");};var a=function(p){switch(p){case"x":return((i.orderIndex("month")==1)?"%m[-./]%d":"%d[-./]%m")+"([-./]%y)?";
case"X":return"%H([.:]%M)?([.:]%S([.:]%s)?)? ?%p? ?%T?";}return null;};var o={d:/[0-2]?[0-9]|3[01]/,H:/[01]?[0-9]|2[0-3]/,I:/0?[1-9]|1[0-2]/,M:/[0-5]?\d/,s:/\d+/,o:/[a-z]*/,p:/[ap]\.?m\.?/,y:/\d{2}|\d{4}/,Y:/\d{4}/,T:/Z|[+-]\d{2}(?::?\d{2})?/};
o.m=o.I;o.S=o.M;var c;var b=function(p){c=p;o.a=o.A=j("days");o.b=o.B=j("months");g.each(function(r,q){if(r.format){g[q]=l(r.format);}});};var l=function(r){if(!c){return{format:r};
}var p=[];var q=(r.source||r).replace(/%([a-z])/gi,function(t,s){return a(s)||t;}).replace(/\((?!\?)/g,"(?:").replace(/ (?!\?|\*)/g,",? ").replace(/%([a-z%])/gi,function(t,s){var u=o[s];
if(!u){return s;}p.push(s);return"("+u.source+")";}).replace(/\[a-z\]/gi,"[a-z\\u00c0-\\uffff;&]");return{format:r,re:new RegExp("^"+q+"$","i"),handler:function(v){v=v.slice(1).associate(p);
var s=new i().clearTime(),u=v.y||v.Y;if(u!=null){f.call(s,"y",u);}if("d" in v){f.call(s,"d",1);}if("m" in v||"b" in v||"B" in v){f.call(s,"m",1);}for(var t in v){f.call(s,t,v[t]);
}return s;}};};var f=function(p,q){if(!q){return this;}switch(p){case"a":case"A":return this.set("day",i.parseDay(q,true));case"b":case"B":return this.set("mo",i.parseMonth(q,true));
case"d":return this.set("date",q);case"H":case"I":return this.set("hr",q);case"m":return this.set("mo",q-1);case"M":return this.set("min",q);case"p":return this.set("ampm",q.replace(/\./g,""));
case"S":return this.set("sec",q);case"s":return this.set("ms",("0."+q)*1000);case"w":return this.set("day",q);case"Y":return this.set("year",q);case"y":q=+q;
if(q<100){q+=m+(q<h?100:0);}return this.set("year",q);case"T":if(q=="Z"){q="+00";}var r=q.match(/([+-])(\d{2}):?(\d{2})?/);r=(r[1]+"1")*(r[2]*60+(+r[3]||0))+this.getTimezoneOffset();
return this.set("time",this-r*60000);}return this;};i.defineParsers("%Y([-./]%m([-./]%d((T| )%X)?)?)?","%Y%m%d(T%H(%M%S?)?)?","%x( %X)?","%d%o( %b( %Y)?)?( %X)?","%b( %d%o)?( %Y)?( %X)?","%Y %b( %d%o( %X)?)?","%o %b %d %X %T %Y");
Locale.addEvent("change",function(p){if(Locale.get("Date")){b(p);}}).fireEvent("change",Locale.getCurrent());})();String.implement({parseQueryString:function(d,a){if(d==null){d=true;
}if(a==null){a=true;}var c=this.split(/[&;]/),b={};if(!c.length){return b;}c.each(function(i){var e=i.indexOf("="),g=i.substr(e+1),f=e<0?[""]:i.substr(0,e).match(/([^\]\[]+|(\B)(?=\]))/g),h=b;
if(a){g=decodeURIComponent(g);}f.each(function(k,j){if(d){k=decodeURIComponent(k);}var l=h[k];if(j<f.length-1){h=h[k]=l||{};}else{if(typeOf(l)=="array"){l.push(g);
}else{h[k]=l!=null?[l,g]:g;}}});});return b;},cleanQueryString:function(a){return this.split("&").filter(function(e){var b=e.indexOf("="),c=b<0?"":e.substr(0,b),d=e.substr(b+1);
return a?a.call(null,c,d):(d||d===0);}).join("&");}});(function(){var b=function(){return this.get("value");};var a=this.URI=new Class({Implements:Options,options:{},regex:/^(?:(\w+):)?(?:\/\/(?:(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)?(\.\.?$|(?:[^?#\/]*\/)*)([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,parts:["scheme","user","password","host","port","directory","file","query","fragment"],schemes:{http:80,https:443,ftp:21,rtsp:554,mms:1755,file:0},initialize:function(d,c){this.setOptions(c);
var e=this.options.base||a.base;if(!d){d=e;}if(d&&d.parsed){this.parsed=Object.clone(d.parsed);}else{this.set("value",d.href||d.toString(),e?new a(e):false);
}},parse:function(e,d){var c=e.match(this.regex);if(!c){return false;}c.shift();return this.merge(c.associate(this.parts),d);},merge:function(d,c){if((!d||!d.scheme)&&(!c||!c.scheme)){return false;
}if(c){this.parts.every(function(e){if(d[e]){return false;}d[e]=c[e]||"";return true;});}d.port=d.port||this.schemes[d.scheme.toLowerCase()];d.directory=d.directory?this.parseDirectory(d.directory,c?c.directory:""):"/";
return d;},parseDirectory:function(d,e){d=(d.substr(0,1)=="/"?"":(e||"/"))+d;if(!d.test(a.regs.directoryDot)){return d;}var c=[];d.replace(a.regs.endSlash,"").split("/").each(function(f){if(f==".."&&c.length>0){c.pop();
}else{if(f!="."){c.push(f);}}});return c.join("/")+"/";},combine:function(c){return c.value||c.scheme+"://"+(c.user?c.user+(c.password?":"+c.password:"")+"@":"")+(c.host||"")+(c.port&&c.port!=this.schemes[c.scheme]?":"+c.port:"")+(c.directory||"/")+(c.file||"")+(c.query?"?"+c.query:"")+(c.fragment?"#"+c.fragment:"");
},set:function(d,f,e){if(d=="value"){var c=f.match(a.regs.scheme);if(c){c=c[1];}if(c&&this.schemes[c.toLowerCase()]==null){this.parsed={scheme:c,value:f};
}else{this.parsed=this.parse(f,(e||this).parsed)||(c?{scheme:c,value:f}:{value:f});}}else{if(d=="data"){this.setData(f);}else{this.parsed[d]=f;}}return this;
},get:function(c,d){switch(c){case"value":return this.combine(this.parsed,d?d.parsed:false);case"data":return this.getData();}return this.parsed[c]||"";
},go:function(){document.location.href=this.toString();},toURI:function(){return this;},getData:function(e,d){var c=this.get(d||"query");if(!(c||c===0)){return e?null:{};
}var f=c.parseQueryString();return e?f[e]:f;},setData:function(c,f,d){if(typeof c=="string"){var e=this.getData();e[arguments[0]]=arguments[1];c=e;}else{if(f){c=Object.merge(this.getData(),c);
}}return this.set(d||"query",Object.toQueryString(c));},clearData:function(c){return this.set(c||"query","");},toString:b,valueOf:b});a.regs={endSlash:/\/$/,scheme:/^(\w+):/,directoryDot:/\.\/|\.$/};
a.base=new a(Array.from(document.getElements("base[href]",true)).getLast(),{base:document.location});String.implement({toURI:function(c){return new a(this,c);
}});})();Events.Pseudos=function(f,c,d){var b="monitorEvents:";var a=function(g){return{store:g.store?function(h,i){g.store(b+h,i);}:function(h,i){(g.$monitorEvents||(g.$monitorEvents={}))[h]=i;
},retrieve:g.retrieve?function(h,i){return g.retrieve(b+h,i);}:function(h,i){if(!g.$monitorEvents){return i;}return g.$monitorEvents[h]||i;}};};var e=function(h){if(h.indexOf(":")==-1){return null;
}var g=Slick.parse(h).expressions[0][0],i=g.pseudos;return(f&&f[i[0].key])?{event:g.tag,value:i[0].value,pseudo:i[0].key,original:h}:null;};return{addEvent:function(l,n,i){var m=e(l);
if(!m){return c.call(this,l,n,i);}var j=a(this),q=j.retrieve(l,[]),g=Array.from(f[m.pseudo]),k=g[1];var p=this;var o=function(){g[0].call(p,m,n,arguments,k);
};q.include({event:n,monitor:o});j.store(l,q);var h=m.event;if(k&&k[h]){h=k[h].base;}c.call(this,l,n,i);return c.call(this,h,o,i);},removeEvent:function(m,l){var k=e(m);
if(!k){return d.call(this,m,l);}var n=a(this),j=n.retrieve(m),i=Array.from(f[k.pseudo]),h=i[1];if(!j){return this;}var g=k.event;if(h&&h[g]){g=h[g].base;
}d.call(this,m,l);j.each(function(o,p){if(!l||o.event==l){d.call(this,g,o.monitor);}delete j[p];},this);n.store(m,j);return this;}};};(function(){var b={once:function(d,e,c){e.apply(this,c);
this.removeEvent(d.original,e);}};Events.definePseudo=function(c,d){b[c]=d;};var a=Events.prototype;Events.implement(Events.Pseudos(b,a.addEvent,a.removeEvent));
})();(function(){var b={once:function(d,e,c){e.apply(this,c);this.removeEvent(d.original,e);}};Event.definePseudo=function(d,e,c){b[d]=[e,c];};var a=Element.prototype;
[Element,Window,Document].invoke("implement",Events.Pseudos(b,a.addEvent,a.removeEvent));})();Event.definePseudo("relay",function(d,e,b,c){var f=b[0];var a=c?c.condition:null;
for(var h=f.target;h&&h!=this;h=h.parentNode){var g=document.id(h);if(Slick.match(h,d.value)&&(!a||a.call(g,f))){if(g){e.call(g,f,g);}return;}}},{mouseenter:{base:"mouseover",condition:Element.Events.mouseenter.condition},mouseleave:{base:"mouseout",condition:Element.Events.mouseleave.condition}});
Element.implement({isDisplayed:function(){return this.getStyle("display")!="none";},isVisible:function(){var a=this.offsetWidth,b=this.offsetHeight;return(a==0&&b==0)?false:(a>0&&b>0)?true:this.style.display!="none";
},toggle:function(){return this[this.isDisplayed()?"hide":"show"]();},hide:function(){var b;try{b=this.getStyle("display");}catch(a){}if(b=="none"){return this;
}return this.store("element:_originalDisplay",b||"").setStyle("display","none");},show:function(a){if(!a&&this.isDisplayed()){return this;}a=a||this.retrieve("element:_originalDisplay")||"block";
return this.setStyle("display",(a=="none")?"block":a);},swapClass:function(a,b){return this.removeClass(a).addClass(b);}});Document.implement({clearSelection:function(){if(document.selection&&document.selection.empty){document.selection.empty();
}else{if(window.getSelection){var a=window.getSelection();if(a&&a.removeAllRanges){a.removeAllRanges();}}}}});Locale.define("sv-SE","Date",{months:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],months_abbr:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],days:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],days_abbr:["sön","mån","tis","ons","tor","fre","lör"],dateOrder:["year","month","date"],shortDate:"%Y-%m-%d",shortTime:"%H:%M",AM:"",PM:"",ordinal:"",lessThanMinuteAgo:"mindre än en minut sedan",minuteAgo:"ungefär en minut sedan",minutesAgo:"{delta} minuter sedan",hourAgo:"ungefär en timme sedan",hoursAgo:"ungefär {delta} timmar sedan",dayAgo:"1 dag sedan",daysAgo:"{delta} dagar sedan",lessThanMinuteUntil:"mindre än en minut sedan",minuteUntil:"ungefär en minut sedan",minutesUntil:"{delta} minuter sedan",hourUntil:"ungefär en timme sedan",hoursUntil:"ungefär {delta} timmar sedan",dayUntil:"1 dag sedan",daysUntil:"{delta} dagar sedan"});
