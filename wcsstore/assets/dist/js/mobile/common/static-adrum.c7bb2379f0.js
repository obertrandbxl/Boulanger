new function(){if(!window.ADRUM&&!0!==window["adrum-disable"]){var t=window.ADRUM={};window["adrum-start-time"]=window["adrum-start-time"]||(new Date).getTime(),((gt=t||(t={})).monitor||(gt.monitor={})).Uc=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];for(e=0;e<t.length;e++){var n=t[e];n&&n.setUp()}},function(t){(t=t.conf||(t.conf={})).beaconUrlHttp="http://col.eum-appdynamics.com",t.beaconUrlHttps="https://col.eum-appdynamics.com",t.corsEndpointPath="/eumcollector/beacons/browser/v1",t.imageEndpointPath="/eumcollector/adrum.gif?",t.appKey=window["adrum-app-key"]||"AD-AAB-AAA-UKF";var e="https:"===document.location.protocol;if(t.adrumExtUrl=(e?"https://cdn.appdynamics.com":"http://cdn.appdynamics.com")+"/adrum-ext.5f3ed04179a28c18e6b99b8ebb7abf59.js",t.adrumXdUrl="https://cdn.appdynamics.com/adrum-xd.5f3ed04179a28c18e6b99b8ebb7abf59.html",t.agentVer="4.2.0.2",t.sendImageBeacon="false",window["adrum-geo-resolver-url"]){var n=window["adrum-geo-resolver-url"],r=n.indexOf("://");-1!=r&&(n=n.substring(r+3)),n=(e?"https://":"http://")+n}else n="";t.geoResolverUrl=n,t.useStrictDomainCookies=!0===window["adrum-use-strict-domain-cookies"],t.userConf=window["adrum-config"],t.Ud=10}(t||(t={})),function(n){function a(t){return null!=t}function s(t){return"[object Array]"===Object.prototype.toString.apply(t)}function u(t){return"object"==typeof t&&!s(t)&&null!==t}function e(t){return"string"==typeof t}function c(t){return e(t)?t.replace(/^\s*/,"").replace(/\s*$/,""):t}n.isDefined=a,n.isArray=s,n.isObject=u,n.isFunction=function(t){return"function"==typeof t||!1},n.isString=e,n.isNumber=function(t){return"number"==typeof t},n.Sa=function(t){setTimeout(t,0)},n.addEventListener=function(e,n,t){function r(){try{return t.apply(this,Array.prototype.slice.call(arguments))}catch(t){mt.exception(t,"M1",n,e,t)}}mt.isDebug&&mt.log("M0",n,e),e.addEventListener?e.addEventListener(n,r,!1):e.attachEvent&&e.attachEvent("on"+n,r)},n.loadScriptAsync=function(t){var e=document.createElement("script");e.async=!0,e.src=t;var n=document.getElementsByTagName("script")[0];n?(n.parentNode.insertBefore(e,n),mt.log("M2",t)):mt.log("M3",t)},n.mergeJSON=function t(e,n){for(var r in n){var o=n[r];if(n.hasOwnProperty(r)&&a(o)){var i=e[r];u(o)&&u(i)?t(i,o):e[r]=s(i)&&s(o)?i.concat(o):o}}return e},n.hd=function(t){var e=[];return t&&(n.isObject(t)?e=[t]:n.isArray(t)&&(e=t)),e},n.generateGUID=void 0!==window.crypto&&void 0!==window.crypto.getRandomValues?function(){function t(t){for(t=t.toString(16);t.length<4;)t="0"+t;return t}var e=new Uint16Array(8);return window.crypto.getRandomValues(e),t(e[0])+t(e[1])+"_"+t(e[2])+"_"+t(e[3])+"_"+t(e[4])+"_"+t(e[5])+t(e[6])+t(e[7])}:function(){return"xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})},n.tryExtractingErrorStack=function(t){return t&&(t=t.stack)&&"string"==typeof t?t:null},n.tg=function(t){var e,n,r={};if(!t)return r;var o=t.split("\n");for(n=0;n<o.length;n++){var i=o[n];e=i.indexOf(":"),t=c(i.substr(0,e)).toLowerCase(),e=c(i.substr(e+1)),t&&(r[t]=r[t]?r[t]+", "+e:e)}return r},n.tryPeriodically=function(n,r,o,i){var a=0;!function t(){if(r())o&&o();else{var e=n(++a);0<e?setTimeout(t,e):i&&i()}}()},n.Dg=function(t,e,n){a(n)&&(t[e]=n)},n.Nb=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},n.Cc=function(n){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return n.apply(this,r.concat(t))}},n.now=Date&&Date.now||function(){return(new Date).getTime()}}((mt=t||(t={})).utils||(mt.utils={})),function(o){function n(t,e,n,r){return t=o.conf.beaconUrlHttps+"/eumcollector/error.gif?version=1&appKey="+n+"&msg="+encodeURIComponent(t.substring(0,500)),r&&(t+="&stack=",t+=encodeURIComponent(r.substring(0,1500-t.length))),t}function r(t,e){2<=a||((new Image).src=n(t,0,o.conf.appKey,e),a++)}function t(t){return 0<=t.location.search.indexOf("ADRUM_debug=true")||0<=t.cookie.search(/(^|;)\s*ADRUM_debug=true/)}o.iDR=t,o.isDebug=t(document);var i=[];o.log=function(t){for(var e=1;e<arguments.length;e++);o.isDebug&&i.push(Array.prototype.slice.call(arguments).join(" | "))},o.error=function(t){for(var e=1;e<arguments.length;e++);e=Array.prototype.slice.call(arguments).join(" | "),o.log(e),r(e,null)},o.exception=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];arguments.length<1||(t=Array.prototype.slice.call(arguments),e=o.utils.tryExtractingErrorStack(t[0]),t=t.slice(1).join(" | "),o.log(t),r(t,e))},o.assert=function(t,e){t||o.error("Assert fail: "+e)},o.dumpLog=o.isDebug?function(){for(var t="",e=0;e<i.length;e++)t+=i[e].replace(RegExp("<br/>","g"),"\n\t")+"\n";return t}:function(){},o.cIEBU=n;var a=0;o.log("M4")}(t||(t={})),ft=t||(t={}),dt=function(){function t(t){this.max=t,this.za=0}return t.prototype.Jf=function(){this.ma()||this.za++},t.prototype.ma=function(){return this.za>=this.max},t.prototype.reset=function(){this.za=0},t}(),ht=function(){function t(){this.ja=[],this.Ta=new dt(t.ie),this.Ja=new dt(t.Xd)}return t.prototype.submit=function(t){this.push(t)&&ft.initEXTDone&&this.processQ()},t.prototype.processQ=function(){for(var t=this.Ze(),e=0;e<t.length;e++){var n=t[e];"function"==typeof ft.commands[n[0]]?(ft.isDebug&&ft.log("M5",n[0],n.slice(1).join(", ")),ft.commands[n[0]].apply(ft,n.slice(1))):ft.error("M6",n[0])}},t.prototype.Xf=function(t){return"reportXhr"===t||"reportPageError"===t},t.prototype.push=function(t){var e=t[0],n=this.Xf(e),r=n?this.Ta:this.Ja;return r.ma()?(ft.log("M7",n?"spontaneous":"non spontaneous",e),!1):(this.ja.push(t),r.Jf(),!0)},t.prototype.Ze=function(){var t=this.ja;return this.reset(),t},t.prototype.size=function(){return this.ja.length},t.prototype.reset=function(){this.ja=[],this.Ta.reset(),this.Ja.reset()},t.prototype.isSpontaneousQueueDead=function(){return this.Ta.ma()},t.prototype.isNonSpontaneousQueueDead=function(){return this.Ja.ma()},t.ie=100,t.Xd=100,t}(),ft.vd=ht,(lt=t||(t={})).q=new lt.vd,lt.command=function(t){for(var e=1;e<arguments.length;e++);lt.isDebug&&lt.log("M8",t,Array.prototype.slice.call(arguments).slice(1).join(", ")),lt.q.submit(Array.prototype.slice.call(arguments))},ut=t||(t={}),ct=ut.monitor||(ut.monitor={}),pt=function(){function t(){this.status={}}return t.prototype.setUp=function(){},t.prototype.set=function(t,e){this.status[t]=e},t}(),ct.ib=pt,at=t||(t={}),st=at.aop||(at.aop={}),(window.ADRUM.aop=st).support=function(t){return!t||"apply"in t},st.around=function(r,o,i,a){return at.assert(st.support(r),"aop.around called on a function which does not support interception"),r=r||function(){},function(){at.isDebug&&at.log("M9",a,Array.prototype.slice.call(arguments).join(", "));var t,e=Array.prototype.slice.call(arguments);try{o&&(t=o.apply(this,e))}catch(t){at.exception(t,"M10",a,t)}at.assert(!t||"[object Array]"===Object.prototype.toString.call(t));var n=void 0;try{n=r.apply(this,t||e)}finally{try{i&&i.apply(this,e)}catch(t){at.exception(t,"M11",a,t)}}return n}},st.before=function(t,e){return st.around(t,e)},st.after=function(t,e){return st.around(t,null,e)},(it=(it=t||(t={})).EventType||(it.EventType={}))[it.BASE_PAGE=0]="BASE_PAGE",it[it.IFRAME=1]="IFRAME",it[it.XHR=2]="XHR",it[it.VIRTUAL_PAGE=3]="VIRTUAL_PAGE",it[it.PAGE_ERROR=4]="PAGE_ERROR",it[it.ABSTRACT=100]="ABSTRACT",it[it.ADRUM_XHR=101]="ADRUM_XHR",it[it.NG_VIRTUAL_PAGE=102]="NG_VIRTUAL_PAGE",(ot=(ot=t||(t={})).events||(ot.events={})).p={},ot.p[100]={guid:"string",url:"string",parentGUID:"string",parentUrl:"string",parentType:"number",timestamp:"number"},ot.p[3]={resTiming:"object"},ot.p[102]={digestCount:"number"},ot.p[2]={method:"string",parentPhase:"string",parentPhaseId:"number"},ot.p[101]={xhr:"object"},ot.p[4]={msg:"string",line:"number",stack:"string"},et=t||(t={}),rt=function(){function t(){this.A={}}return t.prototype.mark=function(t,e){nt.mark.apply(this,arguments)},t.prototype.Af=function(t){return(t=this.getEntryByName(t))&&t.startTime},t.prototype.measure=function(t,e,n){nt.measure.apply(this,arguments)},t.prototype.getEntryByName=function(t){return nt.getEntryByName.call(this,t)},t}(),et.vb=rt,function(t){t.mark,t.measure,t.getEntryByName;var e=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance,r=e&&e.timing&&e.timing.navigationStart?e.timing.navigationStart:window["adrum-start-time"],o=et.utils.now;t.mark=function(t,e){this.A[t]={name:t,entryType:"mark",startTime:et.utils.isDefined(e)?e:o(),duration:0}},t.measure=function(t,e,n){this.A.hasOwnProperty(e)&&this.A.hasOwnProperty(n)?this.A[t]={name:t,entryType:"measure",startTime:e?this.A[e].startTime:r,duration:(n?this.A[n].startTime:o())-(e?this.A[e].startTime:r)}:et.error("M12"+(this.A.hasOwnProperty(e)?n:e)+" does not exist. ")},t.getEntryByName=function(t){return this.A[t]||null}}(nt||(nt={})),function(t){function e(t,e){for(var n in t=t||{})e[n]=function(){var r=n,o=t[n];return function(t){var e="_"+r,n=this[e];if(tt.utils.isDefined(t)){if(typeof t!==o)throw TypeError("wrong type of "+r+" value, "+typeof t+" passed in but should be a "+o+".");this[e]=t}return n}}()}var n=function(){function t(t){this.g=new tt.vb,this.timestamp(tt.utils.now()),this.guid(tt.utils.generateGUID()),this.url(document.URL),this.Tc(t)}return t.prototype.type=function(){return 100},t.prototype.Tc=function(t){if(tt.utils.isObject(t))for(var e in t){var n=this[e]||this["mark"+tt.utils.Nb(e)];n&&tt.utils.isFunction(n)&&n.call(this,t[e])}},t.Jb=function(t,e,n){return{guid:function(){return t},url:function(){return e},type:function(){return n}}},t.prototype.xf=function(){return t.Jb(this.parentGUID(),this.parentUrl(),this.parentType())},t.prototype.parent=function(t){var e=this.xf();return tt.utils.isDefined(t)&&(this.parentGUID(t.guid()),this.parentUrl(t.url()),this.parentType(t.type())),e},t}();t.EventTracker=n,t.X=e,t.Kb=function(t,e){var n,r=function(t){var e,n={};for(e in t){var r=t[e];n[r.start]=!0,n[r.end]=!0}return n}(t=t||{});for(n in r)e["mark"+(r=tt.utils.Nb(n))]=tt.utils.Cc(function(t,e){this.g.mark(t,e)},n),e["get"+r]=tt.utils.Cc(function(t){return this.g.Af(t)},n)},e(t.p[100],n.prototype)}((tt=t||(t={})).events||(tt.events={}));var n=this.Be||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);n.prototype=e.prototype,t.prototype=new n};z=t||(t={}),W=z.events||(z.events={}),Q=function(e){function t(t){e.call(this,t)}return n(t,e),t.prototype.type=function(){return 4},t}(W.EventTracker),W.Error=Q,W.X(W.p[4],Q.prototype),Z=t||(t={}),K=Z.monitor||(Z.monitor={}),Y=function(t){function a(){t.apply(this,arguments)}return n(a,t),a.prototype.setUp=function(){if(t.prototype.setUp.call(this),Z.aop.support(window.onerror)){var i=this;window.onerror=Z.aop.around(window.onerror,function(t,e,n,r,o){a.Ha||(a.errorsSent>=Z.conf.Ud?Z.log("M13"):(r=Z.utils.tryExtractingErrorStack(o),Z.command("reportPageError",new Z.events.Error(Z.utils.mergeJSON({msg:t,url:e,line:n,stack:r},i.status))),a.errorsSent++,a.Ha=!0))},function(){a.Ha=!1},"onerror"),Z.log("M14")}else Z.log("M15")},a.Ha=!1,a.errorsSent=0,a}(K.ib),K.ErrorMonitor=Y,K.Xb=new K.ErrorMonitor,G=t||(t={}),J=function(){function r(){this.ta=[],this.oa(r.wa,0)}return r.prototype.jg=function(t){this.oa(r.Db,t)},r.prototype.lg=function(t){this.oa(r.Lb,t)},r.prototype.kg=function(t){this.oa(r.Fb,t)},r.prototype.oa=function(t,e){this.ta.push({ig:(new Date).getTime(),hg:e,Dc:t}),this.Ve=t},r.prototype.getPhaseName=function(){return this.Ve},r.prototype.getPhaseID=function(t){for(var e=0;e<r.Ib.length;e++)if(r.Ib[e]===t)return e;return null},r.prototype.getPhaseCallbackTime=function(t){for(var e=this.ta,n=0;n<e.length;n++)if(e[n].Dc===t)return e[n].ig;return null},r.prototype.findPhaseAtNominalTime=function(t){G.assert(0<=t);for(var e=this.ta,n=e.length-1;0<=n;n--)if(t>=e[n].hg)return e[n].Dc;return G.error("M16",t,G.utils.$e(e)),r.wa},r.Ib=[r.wa="AFTER_FIRST_BYTE",r.Db="AFTER_DOM_INTERACTIVE",r.Lb="AT_ONLOAD",r.Fb="AFTER_ONLOAD"],r}(),G.kh=J,G.lifecycle=new J,G.lifecycle=G.lifecycle,B=t||(t={}),H=B.events||(B.events={}),F=function(t){function e(){t.apply(this,arguments)}return n(e,t),e.prototype.type=function(){return 0},e}(H.EventTracker),H.PageView=F,N=t||(t={}),I=N.monitor||(N.monitor={}),q=function(){function n(){}return n.prototype.setUp=function(){n.Gg(),n.Fg()},n.Fg=function(){N.utils.addEventListener(window,"load",n.pa),N.utils.addEventListener(window,"load",n.pg)},n.pg=function(t){N.lifecycle.lg(t&&t.timeStamp),N.utils.Sa(function(){var t=(new Date).getTime();N.lifecycle.kg(t),N.command("mark","onload",t),I.ub.g&&(I.perfMonitor.Re(),I.perfMonitor.Se()),N.command("reportOnload",new N.events.PageView),N.utils.loadScriptAsync(N.conf.adrumExtUrl)}),N.log("M17")},n.Gg=function(){if(document.addEventListener)document.addEventListener("DOMContentLoaded",n.ea,!1);else{document.attachEvent("onreadystatechange",n.ea);var t=null;try{t=null===window.frameElement?document.documentElement:null}catch(t){}null!=t&&t.doScroll&&function e(){if(!n.isReady){try{t.doScroll("left")}catch(t){return void setTimeout(e,10)}n.pa()}}()}N.log("M18")},n.pa=function(t){n.xc||(N.lifecycle.jg(t&&t.timeStamp),N.command("mark","onready",(new Date).getTime()),n.xc=!0)},n.ea=function(t){document.addEventListener?(document.removeEventListener("DOMContentLoaded",n.ea,!1),n.pa(t)):"complete"===document.readyState&&(document.detachEvent("onreadystatechange",n.ea),n.pa(t))},n.isReady=!1,n.xc=!1,n}(),I.yd=q,I.Ye=new I.yd,X=t||(t={}),_=X.monitor||(X.monitor={}),$=function(){function o(){this.navTiming=this.resTiming=null}return o.prototype.setUp=function(){o.g=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance},o.prototype.Re=function(){var t=o.g;if(t=t&&t.timing)if(t.navigationStart&&t.navigationStart<=t.loadEventEnd){var e,n={};for(e in t){var r=t[e];"number"==typeof r&&(n[e]=r)}this.navTiming=n}else X.log("M20");else X.log("M19")},o.prototype.Se=function(){this.resTiming=this.dc()},o.prototype.dc=function(){var t=o.g,e=[];return t&&t.getEntriesByType&&(t=t.getEntriesByType("resource"))&&t.length&&0<t.length&&t.unshift&&(e=t),0==e.length&&X.log("M21"),e},o.g=null,o}(),_.ub=$,_.perfMonitor=new _.ub,(V=(V=(V=t||(t={})).events||(V.events={})).b||(V.b={})).navigationStart="navigationStart",V.domainLookupStart="domainLookupStart",V.domainLookupEnd="domainLookupEnd",V.connectStart="connectStart",V.secureConnectionStart="secureConnectionStart",V.connectEnd="connectEnd",V.requestStart="requestStart",V.responseStart="responseStart",V.responseEnd="responseEnd",V.domContentLoadedEventStart="domContentLoadedEventStart",V.loadEventEnd="loadEventEnd",V.Qc="sendTime",V.Zb="firstByteTime",V.Mc="respAvailTime",V.Nc="respProcTime",V.Za="viewChangeStart",V.dd="viewChangeEnd",V.$a="viewDOMLoaded",V.kd="xhrRequestsCompleted",V.Sh="viewFragmentsLoaded",V.Th="viewResourcesLoaded",V.ab="virtualPageStart",V.Zg="virtualPageEnd",(j=(j=t||(t={})).events||(j.events={})).C={},j.C[0]={ef:{start:j.b.navigationStart,end:j.b.loadEventEnd,name:"PLT"},lf:{start:j.b.navigationStart,end:j.b.responseStart,name:"FBT"},Oh:{start:j.b.navigationStart,end:j.b.requestStart,name:"SCT"},Ph:{start:j.b.secureConnectionStart,end:j.b.connectEnd,name:"SHT"},uh:{start:j.b.domainLookupStart,end:j.b.domainLookupEnd,name:"DLT"},Rh:{start:j.b.connectStart,end:j.b.connectEnd,name:"TCP"},Mh:{start:j.b.requestStart,end:j.b.responseStart,name:"RAT"},wh:{start:j.b.responseStart,end:j.b.loadEventEnd,name:"FET"},zh:{start:j.b.responseStart,end:j.b.domContentLoadedEventStart,name:"DRT"},oh:{start:j.b.responseStart,end:j.b.responseEnd,name:"DDT"},sh:{start:j.b.responseEnd,end:j.b.domContentLoadedEventStart,name:"DPT"},Lh:{start:j.b.domContentLoadedEventStart,end:j.b.loadEventEnd,name:"PRT"},th:{start:j.b.navigationStart,end:j.b.domContentLoadedEventStart,name:"DOM"}},j.C[2]={lf:{start:j.b.Qc,end:j.b.Zb,name:"FBT"},yh:{start:j.b.Zb,end:j.b.Mc,name:"DDT"},nh:{start:j.b.Mc,end:j.b.Nc,name:"DPT"},ef:{start:j.b.Qc,end:j.b.Nc,name:"PLT"}},j.C[3]={Fh:{start:j.b.ab,end:j.b.Zg,name:"PLT"},qh:{start:j.b.Za,end:j.b.dd,name:"DDT"},Ch:{start:j.b.Za,end:j.b.$a,name:"DRT"},fh:{start:j.b.dd,end:j.b.$a,name:"DPT"},gh:{start:j.b.Za,end:j.b.$a,name:"DOM"},Kh:{start:"viewChangeEnd",end:"xhrRequestsCompleted",name:null},Dh:{start:"viewChangeEnd",end:"viewPartialsLoaded",name:null},Bh:{start:"viewPartialsLoaded",end:"viewFragmentsLoaded",name:null},Eh:{start:"viewPartialsLoaded",end:"viewResourcesLoaded",name:null}},j.C[102]=j.C[3],D=t||(t={}),U=D.events||(D.events={}),O=function(e){function t(t){e.call(this,t)}return n(t,e),t.prototype.type=function(){return 2},t}(U.EventTracker),U.Ajax=O,U.X(U.p[2],O.prototype),U.Kb(U.C[2],O.prototype),k=t||(t={}),P=k.events||(k.events={}),L=function(e){function t(t){e.call(this,t)}return n(t,e),t.prototype.type=function(){return 2},t}(P.Ajax),P.AdrumAjax=L,P.X(P.p[101],L.prototype),C=t||(t={}),A=C.monitor||(C.monitor={}),R=function(t){function s(){t.call(this),this.conf=null,!(this.Ua=!1)===window["adrum-xhr-disable"]?C.log("M22"):window.XMLHttpRequest?(this.conf={exclude:[{urls:[{pattern:C.conf.beaconUrlHttp+C.conf.corsEndpointPath},{pattern:C.conf.beaconUrlHttps+C.conf.corsEndpointPath}]}],include:[]},s.Gc(this.conf,C.conf.userConf&&C.conf.userConf.xhr),(this.d=window.XMLHttpRequest.prototype)?"open"in this.d&&"send"in this.d?(this.Ua=C.aop.support(this.d.open)&&C.aop.support(this.d.send))||C.log("M26"):C.log("M25"):C.log("M24")):C.log("M23")}return n(s,t),s.Gc=function(t,e){e&&(e.include=C.utils.hd(e.include),e.exclude=C.utils.hd(e.exclude),C.utils.mergeJSON(t,e));var n=t.exclude;if(n)for(var r=0;r<n.length;r++){var o=n[r].urls;o&&0<o.length&&(n[r].urls=s.Rb(o))}if(n=t.include)for(r=0;r<n.length;r++)(o=n[r].urls)&&0<o.length&&(n[r].urls=s.Rb(o))},s.Rb=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n].pattern;if("string"==typeof r)try{e.push(new RegExp(r))}catch(t){C.exception(t,"Parse regex pattern failed.")}else C.error("xhr filter pattern should be a string")}return e},s.Vc=function(t,e,n){var r=n&&n.include;return n=n&&n.exclude,r&&0<r.length&&!s.sc(e,t,r)||n&&0<n.length&&s.sc(e,t,n)},s.prototype.setUp=function(){if(this.Ua){C.log("M27"),C.xhrConstructor=window.XMLHttpRequest,C.xhrOpen=this.xhrOpen=this.d.open,C.xhrSend=this.xhrSend=this.d.send;var a=this;this.d.open=C.aop.around(this.d.open,function(){var t=1<=arguments.length?String(arguments[0]):"",e=2<=arguments.length?String(arguments[1]):"";s.Vc(e,t,a.conf)||(this._adrumAjaxT=new C.events.AdrumAjax(C.utils.mergeJSON({method:t,url:e,xhr:this},a.status)))},null,"XHR.open"),this.d.send=C.aop.around(this.d.send,function(){var e=this,t=e._adrumAjaxT;if(t){var n=C.utils.now(),r=t.getSendTime();C.assert(null===r,"M28"),t.timestamp(n),t.markSendTime(r||n),t.parentPhase(C.lifecycle.getPhaseName()),s.Vf(t.url())?e.setRequestHeader("ADRUM","isAjax:true"):C.log("M29",document.location.href,t.url());var o=0,i=function(){if(4==e.readyState)C.log("M30"),a.ua(e);else{var t=null;try{t=e.onreadystatechange}catch(t){return C.log("M31",t),void a.ua(e)}o++,t?C.aop.support(t)?(e.onreadystatechange=a.Sb(t,e,"XHR.onReadyStateChange"),C.log("M32",o)):(C.log("M33"),a.ua(e)):o<s.ze?C.utils.Sa(i):(C.log("M34"),a.ua(e))}};i()}},null,"XHR.send"),"addEventListener"in this.d&&"removeEventListener"in this.d&&C.aop.support(this.d.addEventListener)&&C.aop.support(this.d.removeEventListener)?(this.d.addEventListener=C.aop.around(this.d.addEventListener,this.Ue(),null,"XHR.addEventListener"),this.d.removeEventListener=C.aop.around(this.d.removeEventListener,function(t,e){if(this._adrumAjaxT){var n=Array.prototype.slice.call(arguments);return e.__adrumInterceptor?(n[1]=e.__adrumInterceptor,C.log("M35")):C.log("M36"),n}},null,"XHR.removeEventListener")):C.log("M37"),C.log("M38")}},s.fg=function(t,e){for(var n=!1,r=0;r<e.length;r++){var o=e[r];if(o&&o.test(t)){n=!0;break}}return n},s.sc=function(t,e,n){var r=!1;if(e&&n)for(var o=0;o<n.length;o++){var i=n[o];if(!(i.method&&t!==i.method||i.urls&&!s.fg(e,i.urls))){r=!0;break}}return r},s.Vf=function(t){var e=document.createElement("a");return e.href=t,t=document.location,":"===e.protocol&&""===e.hostname&&""===e.port||e.protocol===t.protocol&&e.hostname===t.hostname&&e.port===t.port},s.jc=function(t){var e=t._adrumAjaxT;if(e){var n=(new Date).getTime();2==t.readyState?e.markFirstByteTime(e.getFirstByteTime()||n):4==t.readyState&&(C.assert(null===e.getRespAvailTime(),"M39"),e.markRespAvailTime(e.getRespAvailTime()||n),e.markFirstByteTime(e.getFirstByteTime()||n))}},s.prototype.Sb=function(t,n,e){return s.dh(t,function(){s.jc(this)},function(){var t=n._adrumAjaxT;if(t&&4==n.readyState){var e=(new Date).getTime();C.assert(null===t.getRespProcTime(),"M40"),t.markRespProcTime(t.getRespProcTime()||e),s.a(t)}},e)},s.a=function(t){C.command("reportXhr",t)},s.prototype.ua=function(n){if(n._adrumAjaxT){var r=(new Date).getTime()+3e4,o=function(){s.jc(n);var t=n._adrumAjaxT;if(t){var e=(new Date).getTime();4==n.readyState?(C.assert(null===t.getRespProcTime(),"M41"),t.markRespProcTime(t.markRespProcTime()||e),C.log("M42"),s.a(t),delete n._adrumAjaxT):e<r?setTimeout(o,s.hb):(delete n._adrumAjaxT,C.log("M43"))}};o()}},s.dh=function(t,e,n,r){var o=t;return t&&"object"==typeof t&&"toString"in t&&"[xpconnect wrapped nsIDOMEventListener]"===t.toString()&&"handleEvent"in t&&(o=function(){t.handleEvent.apply(this,Array.prototype.slice.call(arguments))}),C.aop.around(o,e,n,r)},s.prototype.Ue=function(){for(var t=0;t<arguments.length;t++);var o=this;return function(t,e){if(("load"===t||"error"===t)&&e&&this._adrumAjaxT){var n;if((n=e).__adrumInterceptor)n=n.__adrumInterceptor;else if(C.aop.support(n)){var r=o.Sb(n,this,"XHR.invokeEventListener");n=n.__adrumInterceptor=r}else n=null;if(n)return(r=Array.prototype.slice.call(arguments))[1]=n,C.log("M44"),r;C.log("M45",t,e)}}},s.ze=5,s.hb=50,s}(A.ib),A.ha=R,A.cb=new A.ha,function(u){function c(t,e){var n=[];if(o=/^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(t)){var r=o[1],o=o[2].replace(/^"|"$/g,""),i=(o=decodeURIComponent(o).split("|"))[0].split(":");if("R"===i[0]&&Number(i[1])===e)for(a(r),r=1;r<o.length;r++)n.push(o[r])}return n}function p(t,e){var n=/^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(t);if(n){var r=n[1],o=n[4],i=n[5];if(Number(n[3])===e)return a(r),{index:Number(o),value:i}}return null}function l(t){var e=/^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(t);if(e)return S.log("M48",t),3===e.length?(a("ADRUM"),{startTime:Number(e[1]),startPage:e[2]}):(S.error("M49",t),null)}function a(t){S.log("M47",t);var e=new Date;e.setTime(e.getTime()-1e3),document.cookie=t+"=;Expires="+e.toUTCString()}u.startTimeCookie=null,u.cookieMetadataChunks=null,u.Vb=function(t,e){S.log("M46");for(var n=e?e.length:0,r=[],o=t.split(";"),i=0;i<o.length;i++){var a=o[i],s=p(a,n);s?r.push(s):null!=(a=l(a))&&(u.startTimeCookie=a)}for(Array.prototype.sort.call(r,function(t,e){return t.index-e.index}),a=[],i=0;i<r.length;i++)a.push(r[i].value);for(i=0;i<o.length;i++)(r=c(o[i],n))&&0<r.length&&(a=a.concat(r));u.cookieMetadataChunks=a},S.correlation.eck=u.Vb}((S=t||(t={})).correlation||(S.correlation={})),(M=t||(t={})).report=function(t){M.utils.Sa(function(){M.command("reportEvent",t)})},"APP_KEY_NOT_SET"===(x=t||(t={})).conf.appKey&&"undefined"!=typeof console&&void 0!==console.log&&console.log("AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']"),x.correlation.Vb(document.cookie,document.referrer),x.command("mark","firstbyte",window["adrum-start-time"]),x.monitor.Uc(x.monitor.Xb,x.monitor.Ye,x.monitor.perfMonitor,x.monitor.cb),(T=(T=(T=t||(t={})).ng||(T.ng={})).c||(T.c={})).vc="locationChangeStart",T.cg="locationChangeSuccess",T.Oc="routeChangeStart",T.Pc="routeChangeSuccess",T.Xc="stateChangeStart",T.Yc="stateChangeSuccess",T.ed="viewContentLoaded",T.Gf="includeContentRequested",T.Ff="includeContentLoaded",T.Ub="digest",T.Hh="outstandingRequestsComplete",T.Mb="beforeNgXhrRequested",T.Eb="afterNgXhrRequested",T.Gh="ngXhrLoaded",T.Pb="$$completeOutstandingRequest",function(l){function a(e,t,n,r,o,i){if(t)try{return t.apply(e,[n,r,o].concat(i))}catch(t){return e.error(n,r,o,i,l.Error.Gd,"an exception occurred in a caller-provided callback function",t)}}function f(o,i){return function(){var t=this.current,e=i[t]||i[l.ga]||t,n=Array.prototype.slice.call(arguments);if(this.Pe(o))return this.error(o,t,e,n,l.Error.Hd,"event "+o+" inappropriate in current state "+this.current);if(!1===a(this,this["onbefore"+o],o,t,e,n))return l.fa.eb;if(e===l.ga&&(e=t),t===e)return a(this,this["onafter"+o]||this["on"+o],o,t,e,n),l.fa.ke;var r=this;return!(this.transition=function(){return r.transition=null,r.current=e,a(r,r["onenter"+e]||r["on"+e],o,t,e,n),a(r,r["onafter"+o]||r["on"+o],o,t,e,n),l.fa.se})===a(this,this["onleave"+t],o,t,e,n)?(this.transition=null,l.fa.eb):this.transition?this.transition():void 0}}l.VERSION="2.3.5",l.fa={se:1,ke:2,eb:3,ih:4},l.Error={Hd:100,jh:200,Gd:300},l.ga="*",l.create=function(t,e){function n(t){var e=t.from instanceof Array?t.from:t.from?[t.from]:[l.ga];s[t.name]=s[t.name]||{};for(var n=0;n<e.length;n++)u[e[n]]=u[e[n]]||[],u[e[n]].push(t.name),s[t.name][e[n]]=t.to||e[n]}var r="string"==typeof t.initial?{state:t.initial}:t.initial,o=e||t.target||{},i=t.events||[],a=t.callbacks||{},s={},u={};r&&(r.event=r.event||"startup",n({name:r.event,from:"none",to:r.state}));for(var c=0;c<i.length;c++)n(i[c]);for(var p in s)s.hasOwnProperty(p)&&(o[p]=f(p,s[p]));for(p in a)a.hasOwnProperty(p)&&(o[p]=a[p]);return o.current="none",o.Ah=function(t){return t instanceof Array?0<=t.indexOf(this.current):this.current===t},o.Oe=function(t){return!this.transition&&(s[t].hasOwnProperty(this.current)||s[t].hasOwnProperty(l.ga))},o.Pe=function(t){return!this.Oe(t)},o.ta=function(){return u[this.current]},o.error=t.error||function(t,e,n,r,o,i,a){throw a||i},r&&!r.defer&&o[r.event](),o}}((E=t||(t={})).yb||(E.yb={})),y=t||(t={}),b=y.events||(y.events={}),w=function(e){function t(t){e.call(this,t),this.g=new y.vb,this.start()}return n(t,e),t.prototype.type=function(){return 3},t.prototype.uf=function(){return b.EventTracker.Jb(this.guid(),this.url(),this.type())},t.prototype.Wc=function(t){var e=this.uf();t.set("parent",e),y.log("M50",e.guid(),e.url())},t.prototype.startCorrelatingXhrs=function(){y.log("M51"),this.Wc(y.monitor.cb)},t.prototype.stopCorrelatingXhrs=function(){y.monitor.cb.set("parent",null),y.log("M52")},t.prototype.Jg=function(){y.log("M53"),this.Wc(y.monitor.Xb)},t.prototype.start=function(){this.markVirtualPageStart(),this.startCorrelatingXhrs()},t.prototype.end=function(){this.markVirtualPageEnd(),this.stopCorrelatingXhrs()},t}(b.EventTracker),b.VPageView=w,b.X(b.p[3],w.prototype),b.Kb(b.C[3],w.prototype),g=t||(t={}),(v=(v=g.ng||(g.ng={})).conf||(v.conf={})).disabled=g.conf.userConf&&g.conf.userConf.spa&&g.conf.userConf.spa.angular&&g.conf.userConf.spa.angular.disable,v.xhr={},v.metrics={includeResTimingInEndUserResponseTiming:!0},g.conf.userConf&&g.conf.userConf.spa&&g.conf.userConf.spa.angular&&g.conf.userConf.spa.angular.vp&&(g.conf.userConf.spa.angular.vp.xhr&&g.monitor.ha.Gc(v.xhr,g.conf.userConf.spa.angular.vp.xhr),g.conf.userConf.spa.angular.vp.metrics&&g.utils.mergeJSON(v.metrics,g.conf.userConf.spa.angular.vp.metrics)),d=t||(t={}),h=d.ng||(d.ng={}),m=function(e){function s(t){e.call(this,t),this.qc=!0,this.Z={},this.V=0,this.stopCorrelatingXhrs()}return n(s,e),s.prototype.type=function(){return 3},s.prototype.ab=function(){this.markViewChangeStart(),this.markVirtualPageStart(this.getViewChangeStart()),this.timestamp(this.getViewChangeStart())},s.prototype.ff=function(t){var e=this.identifier();return t=t.identifier(),!((d.utils.isDefined(e)||d.utils.isDefined(t))&&e!==t&&(!d.utils.isDefined(e)||!d.utils.isDefined(t)||(e.state||t.state?!d.utils.isDefined(e.state)||!d.utils.isDefined(t.state)||e.state.name!==t.state.name||e.state.$!==t.state.$||e.state.aa!==t.state.aa||e.state.url!==t.state.url:e.h&&t.h?e.h.La!==t.h.La||e.h.$!==t.h.$||e.h.aa!==t.h.aa:e.url!==t.url)))},s.prototype.Hf=function(){this.digestCount(this.digestCount()+1)},s.prototype.If=function(){this.V++,d.log("increasing xhr count "+this.V+" pending xhr requests")},s.prototype.We=function(){this.V--,d.log("decreasing xhr count "+this.V+" pending xhr requests")},s.prototype.Cf=function(){var t=this.g.getEntryByName(d.events.b.kd);return d.log("xhrCount "+this.V+" xhrReuqestCompleted "+t),0<this.V},s.prototype.Le=function(){var t={sa:0},e=document.querySelectorAll("ng-view, [ng-view], .ng-view, [ui-view]");if(e&&0<e.length)for(var n in s.Lc)for(var r=0;r<e.length;r++){var o=angular.element(e[r]).find(n);if(0<o.length)for(var i=0;i<o.length;i++){var a=o[i][s.Lc[n].Wa];(a=a?decodeURIComponent(a):null)&&!t[a]&&(t[a]=n,t.sa++)}}this.Z=t},s.prototype.Ke=function(t){return!!this.Z[decodeURIComponent(t.name)]},s.prototype.Me=function(){var t=[],e=this;0<this.Z.sa&&(t=d.monitor.perfMonitor.dc().filter(function(t){return e.Ke(t)})),this.resTiming(t)},s.hf=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];2!==t[n].eventType&&101!==t[n].eventType||d.monitor.ha.Vc(r.eventUrl,r.method,h.conf.xhr)||e.push(t[n])}return e},s.vf=function(t){var e,n,r=-1;for(e=0,n=t.length;e<n;e++)r=Math.max(r,t[e].timestamp+t[e].metrics.PLT);return r},s.prototype.Fe=function(){if(h.conf.xhr){var t=s.hf(d.channel.getEventsWithParentGUID(this.guid()));if(0<(t=s.vf(t))){var e=this.g.getEntryByName(d.events.b.kd);this.markXhrRequestsCompleted(Math.min(e&&e.startTime||Number.MAX_VALUE,t))}}},s.prototype.adjustTimings=function(){this.Fe();var t=this.getViewDOMLoaded(),e=this.getXhrRequestsCompleted();t=Math.max(t,e),h.conf.metrics.includeResTimingInEndUserResponseTiming&&(this.Ee(),e=this.getViewResourcesLoaded(),e=Math.max(t,e),d.log("adjust this.end from %s to %s",t,e),t=e),this.markVirtualPageEnd(t)},s.prototype.Ee=function(){if(0<this.Z.sa&&(this.Me(),this.resTiming&&this.resTiming.length>=this.Z.sa)){for(var t=[],e=0;e<this.resTiming.length;e++)t.push(this.resTiming[e].responseEnd);t=Math.max.apply(Math,t),this.markViewResourcesLoaded(t)}},s.prototype.identifier=function(t){var e=this.gd;return d.utils.isDefined(t)&&(this.gd=s.gf(t),this.url(this.gd.url)),e},s.gf=function(t){var e={};return t&&t.h?(e.h={La:""},d.utils.mergeJSON(e.h,{La:t.h.originalPath,$:t.h.template,aa:t.h.templateUrl})):t&&t.state&&(e.state={url:""},d.utils.mergeJSON(e.state,{url:t.state.url,name:t.state.name,$:t.state.template,aa:t.state.templateUrl})),e},s.Lc={img:{Wa:"src"},script:{Wa:"src"},link:{Wa:"href"}},s}(d.events.VPageView),h.NgVPageView=m,d.events.X(d.events.p[102],m.prototype),p=t||(t={}),l=p.ng||(p.ng={}),f=function(){function e(){this.e=new l.NgVPageView}return e.prototype.Ag=function(){var t=this;l.conf.metrics.includeResTimingInEndUserResponseTiming?(p.log("M54"),setTimeout(function(){t.Oa()},e.ue)):setTimeout(function(){t.Oa()},e.ve)},e.prototype.Oa=function(){p.log("M55");var t=this.e;p.command("call",function(){t.adjustTimings(),p.reporter.reportEvent(t)})},e.prototype.Eg=function(t){this.e=t},e.ue=5e3,e.ve=2*p.monitor.ha.hb,e}(),l.VirtualPageStateMachine=f,p.yb.create({events:[{name:"start",from:"none",to:"ChangeView"},{name:"viewLoaded",from:"ChangeView",to:"XhrPending"},{name:"xhrCompleted",from:"XhrPending",to:"End"},{name:"abort",from:"*",to:"none"},{name:"init",from:"*",to:"none"},{name:"locChange",from:"*",to:"*"},{name:"beforeXhrReq",from:"*",to:"*"},{name:"afterXhrReq",from:"*",to:"*"}],error:function(t){p.log("M56"+t)},callbacks:{onChangeView:function(){this.e.ab(),this.e.Jg()},onviewLoaded:function(){this.e.markViewDOMLoaded()},onXhrPending:function(){this.e.qc&&this.xhrCompleted()},onleaveXhrPending:function(t,e,n){return"abort"===t?(this.Oa(),!0):"xhrCompleted"===t&&"End"===n?!this.e.Cf()&&(this.e.markXhrRequestsCompleted(),!0):void 0},onEnd:function(){this.e.Le(),this.Ag()},oninit:function(t,e,n,r){this.Eg(r)},onlocChange:function(t,e,n,r){this.e.identifier.url=r},onbeforeXhrReq:function(t,e,n,r){var o=this.e;return o.qc=!1,p.log("M57",r&&r[1]||"",o.guid()),o.If(),o.startCorrelatingXhrs(),r[3]&&(r[3]=p.aop.before(r[3],function(t,e,n){p.log("M58"),o.We(),n&&(t=p.utils.tg(n)["content-type"])&&0<=t.indexOf("text/html")&&o.markViewFragmentsLoaded()})),r},onafterXhrReq:function(){this.e.stopCorrelatingXhrs()}}},f.prototype),s=t||(t={}),u=s.ng||(s.ng={}),c=function(){function t(){this.l=new u.VirtualPageStateMachine}return t.prototype.j=function(t,e){switch(s.log("M59",t),t){case u.c.Oc:case u.c.Xc:this.l.start();var n=new u.NgVPageView({url:e.next.url,identifier:e.next});this.l.e.ff(n)?this.l.e.Tc({url:e.next.url,identifier:e.next}):this.Og(n);break;case u.c.Pc:case u.c.Yc:this.l.e.markViewChangeEnd();break;case u.c.ed:this.l.viewLoaded();break;case u.c.Mb:this.l.beforeXhrReq(e);break;case u.c.Eb:this.l.afterXhrReq();break;case u.c.Pb:this.l.xhrCompleted();break;case u.c.vc:this.l.locChange(e.next.url);break;case u.c.Ub:this.l.e.Hf()}},t.prototype.Og=function(t){this.l.abort(),this.l.init(t),this.l.start()},t}(),u.xe=c,i=t||(t={}),a=i.ng||(i.ng={}),o=function(){function t(){this.k=new a.xe}return t.prototype.setUp=function(){var t=this;i.utils.addEventListener(document,"DOMContentLoaded",function(){i.log("M60"),t.init()})},t.prototype.init=function(){if("undefined"!=typeof angular){i.log("M61");var e=this,t=angular.module("ng");t.config(["$provide",function(t){e.Mf(t),e.Lf(t)}]),t.run(["$browser",function(t){e.Kf(t)}]),i.log("M62")}},t.prototype.Lf=function(t){var e=i.aop,n=this;t.decorator("$httpBackend",["$delegate",function(t){return e.around(t,function(){var t=Array.prototype.slice.call(arguments);return n.k.j(a.c.Mb,t),t},function(){n.k.j(a.c.Eb)})}])},t.prototype.Mf=function(t){var e=i.aop,o=this;t.decorator("$rootScope",["$delegate",function(t){return t.$digest=e.after(t.$digest,function(){o.k.j(a.c.Ub)}),t.$on("$locationChangeStart",function(t,e){var n={url:e},r=t&&t.Y&&t.Y.$state&&t.Y.$state.current;r&&(n.state=r),o.k.j(a.c.vc,{next:n})}),t.$on("$locationChangeSuccess",function(){o.k.j(a.c.cg)}),t.$on("$routeChangeStart",function(t,e){var n={url:location.href},r=e&&e.$$route;r&&(n.h=r),o.k.j(a.c.Oc,{next:n})}),t.$on("$routeChangeSuccess",function(){o.k.j(a.c.Pc)}),t.$on("$stateChangeStart",function(t,e){o.k.j(a.c.Xc,{next:{state:e}})}),t.$on("$stateChangeSuccess",function(){o.k.j(a.c.Yc)}),t.$on("$viewContentLoaded",function(t){var e={url:location.href};(t=t&&t.Y&&t.Y.$state&&t.Y.$state.current)&&(e.state=t),o.k.j(a.c.ed,{next:e})}),t.$on("$includeContentRequested",function(){o.k.j(a.c.Gf)}),t.$on("$includeContentLoaded",function(){o.k.j(a.c.Ff)}),t}])},t.prototype.Kf=function(t){var e=this;t.$$completeOutstandingRequest=i.aop.before(t.$$completeOutstandingRequest,function(){e.k.j(a.c.Pb)})},t}(),a.eh=o,a.ngMonitor=new o,e=t||(t={}),(r=e.ng||(e.ng={})).conf.disabled||e.monitor.Uc(r.ngMonitor)}var e,r,i,a,o,s,u,c,p,l,f,d,h,m,g,v,y,b,w,E,T,x,M,S,C,A,R,k,P,L,D,U,O,j,V,X,_,$,N,I,q,B,H,F,G,J,Z,K,Y,z,W,Q,tt,et,nt,rt,ot,it,at,st,ut,ct,pt,lt,ft,dt,ht,mt,gt};