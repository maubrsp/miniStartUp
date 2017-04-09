deviceStartUp = function ( _onSplashReady , _commonsRequiresReady , _clientRequiresReady , _onUserSelected , _onAppReady , _initialExtraRequires ) {

var onSplashReady = _onSplashReady;
var onUserSelect = _onUserSelected;
var onAppReady = _onAppReady;

var userSelector = null;

var commonsRequiresReady = _commonsRequiresReady;
var clientRequiresReady = _clientRequiresReady;
var initialExtraRequires = _initialExtraRequires;

var splahsLoaded = false;
var commonsLoaded = false;
var clientDataLoaded = false;
var userData = null;

var deviceDetector = (function ()
{
    var ua = navigator.userAgent.toLowerCase();
    var detect = (function(s){
            if(s===undefined)s=ua;
            else ua = s.toLowerCase();
                if(/(tv|smartv)/.test(ua))
                            return 'tv';
                else if(/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua))
                        return 'tablet';
                else if(/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(ua))
                            return 'phone';
                else if(/(crawl|googlebot|screenshot)/.test(ua))
                            return 'robo';
                else return 'desktop';
            });
        return{ device:detect(), detect:detect, isMobile:((detect()!='desktop')?true:false), userAgent:ua  };
    }());
    
    var prepare = function(){
        var requiresFirst = [ './assets/css/startup.' + deviceDetector.device + '.css', './startUpView.js' , './commonsRequires.js' ];
        if(initialExtraRequires)requiresFirst = requiresFirst.concat(initialExtraRequires);
        ljs.load( requiresFirst ,function(p){
            splahsLoaded = true;
            onSplashReady(deviceDetector.device);
            userSelector  = new startUpView( deviceDetector.device , selectorSelect );
            loadCommonsRequires();
        });
    }

    var loadCommonsRequires = function(){
        console.log(splahsLoaded);
        var commonsReq = new commonsRequires();
        ljs.load( commonsReq.requires() , commonsRequireComplete );
    }

    var commonsRequireComplete = function(){
        commonsLoaded = true;
        commonsRequiresReady();
        if(userData){
            loadClientRequires();
        }
    }
    
    var loadClientRequiresConfig = function(){

        ljs.load( './clientRequires.' + userData.userSelection + '.js' , function(){ loadClientRequires();   } );
    }

    var loadClientRequires = function(){
        var clientReq = new clientRequires();
        ljs.load( clientReq.requires() , clientRequireComplete );
    }

    var clientRequireComplete = function(){
        clientDataLoaded = true;
        clientRequiresReady();
        if(userData && clientDataLoaded && commonsLoaded)onAppReady();
    }

    var selectorSelect = function(userSelection,quality){
        console.log(userSelection,quality);
        userData = { };
        userData.userSelection = userSelection;
        userData.quality = quality;

        onUserSelect();
        if(commonsLoaded)loadClientRequiresConfig();

    }

    var destroy = function(){
        userSelector.destroy();
        userSelector = null;
        null;
    }
 
    prepare();

    var getCommonsLoaded = function(){  return commonsLoaded;   }
    var getSplahsLoaded = function(){   return splahsLoaded;    }
    var getUserData = function(){   return userData;    }
    var getUserHasSelect = function(){   return userData != null;    }
    var getClientDataLoaded = function(){   return clientDataLoaded;    }

    return{
        commonsLoaded: getCommonsLoaded,
        clientDataLoaded: getClientDataLoaded,
        userHasSelect: getUserHasSelect,
        userData: getUserData,
        splahsLoadeds: getSplahsLoaded,
        destroy: destroy,
    }
}
deviceStartUp.prototype = {
	constructor: deviceStartUp,
}
//Other libs... see:
//https://github.com/malko/l.js
!function(t,e){var r=function(t,e){return t instanceof(e||Array)},i=document,n="getElementsByTagName",s="length",a="readyState",c="onreadystatechange",l=i[n]("script"),o=l[l[s]-1],u=o.innerHTML.replace(/^\s+|\s+$/g,"");if(!t.ljs){var f=o.src.match(/checkLoaded/)?1:0,h=i[n]("head")[0]||i.documentElement,d=function(t){var e={};return e.u=t.replace(/#(=)?([^#]*)?/g,function(t,r,i){return e[r?"f":"i"]=i,""}),e},p=function(t,e,r){var n,s=i.createElement(t);r&&(s[a]?s[c]=function(){("loaded"===s[a]||"complete"===s[a])&&(s[c]=null,r())}:s.onload=r);for(n in e)e[n]&&(s[n]=e[n]);h.appendChild(s)},v=function(t,e){if(this.aliases&&this.aliases[t]){var i=this.aliases[t].slice(0);return r(i)||(i=[i]),e&&i.push(e),this.load.apply(this,i)}if(r(t)){for(var n=t[s];n--;)this.load(t[n]);return e&&t.push(e),this.load.apply(this,t)}return t.match(/\.css\b/)?this.loadcss(t,e):this.loadjs(t,e)},y={},m={aliases:{},loadjs:function(t,r){var i=d(t);return t=i.u,y[t]===!0?(r&&r(),this):y[t]!==e?(r&&(y[t]=function(t,e){return function(){t&&t(),e&&e()}}(y[t],r)),this):(y[t]=function(e){return function(){y[t]=!0,e&&e()}}(r),r=function(){y[t]()},p("script",{type:"text/javascript",src:t,id:i.i,onerror:function(t){if(i.f){var e=t.currentTarget;e.parentNode.removeChild(e),p("script",{type:"text/javascript",src:i.f,id:i.i},r)}}},r),this)},loadcss:function(t,e){var r=d(t);return t=r.u,y[t]||p("link",{type:"text/css",rel:"stylesheet",href:t,id:r.i}),y[t]=!0,e&&e(),this},load:function(){var t=arguments,i=t[s];return 1===i&&r(t[0],Function)?(t[0](),this):(v.call(this,t[0],1>=i?e:function(){m.load.apply(m,[].slice.call(t,1))}),this)},addAliases:function(t){for(var e in t)this.aliases[e]=r(t[e])?t[e].slice(0):t[e];return this}};if(f){var g,j,x,A;for(g=0,j=l[s];j>g;g++)(A=l[g].getAttribute("src"))&&(y[A.replace(/#.*$/,"")]=!0);for(x=i[n]("link"),g=0,j=x[s];j>g;g++)("stylesheet"===x[g].rel||"text/css"===x[g].type)&&(y[x[g].getAttribute("href").replace(/#.*$/,"")]=!0)}t.ljs=m}o.src&&u&&p("script",{innerHTML:u})}(window);
