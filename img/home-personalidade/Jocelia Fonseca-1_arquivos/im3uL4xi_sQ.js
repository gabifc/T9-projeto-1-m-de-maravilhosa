if (self.CavalryLogger) { CavalryLogger.start_js(["cwt7J"]); }

__d("CookieConsentBlacklistedHrefs",[],(function(a,b,c,d,e,f){e.exports={hrefs:["/about/basics","/privacy/explanation","/ads/settings","/help/111814505650678","/help/1561485474074139","/help/568137493302217","/help/769828729705201","/help/cookies","/policies/cookies","/policy/cookies"]}}),null);
__d("PixelRatioConst",[],(function(a,b,c,d,e,f){e.exports={cookieName:"dpr"}}),null);
__d("XConsentCookieController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/cookie/consent/",{})}),null);
__d("DeferredCookie",["requireCond","Cookie","CookieConsent","cr:1109759","SubscriptionList","cr:1083116","XConsentCookieController","cr:1069930","promiseDone","cr:1083117"],(function(a,b,c,d,e,f){"use strict";var g,h=new Map();a={shouldAddDefaultListener:!0,defaultHandler:null,sentConsentToServer:!1,callbacks:new(b("SubscriptionList"))(),addToQueue:function(a,c,d,e,f,i,j){if(!(g||(g=b("CookieConsent"))).isDeferCookies()){f?b("Cookie").setWithoutChecksIfFirstPartyContext(a,c,d,e,j):b("Cookie").setWithoutChecks(a,c,d,e,j);return}if(h.has(a))return;h.set(a,{name:a,value:c,nMilliSecs:d,path:e,firstPartyOnly:f,secure:j});i&&this.addDefaultInteractionListener()},flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing:function(){h.forEach(function(a,c){a.firstPartyOnly?b("Cookie").setWithoutChecksIfFirstPartyContext(a.name,a.value,a.nMilliSecs,a.path,a.secure):b("Cookie").setWithoutChecks(a.name,a.value,a.nMilliSecs,a.path,a.secure)}),(g||(g=b("CookieConsent"))).setConsented(),this.callbacks.fireCallbacks(),h=new Map(),this.removeDefaultInteractionListener()},flushAllCookies:function(){this.flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing();if(!this.sentConsentToServer){var a=b("XConsentCookieController").getURIBuilder().getURI();this.sentConsentToServer=!0;b("cr:1069930")!=null?b("promiseDone")(b("cr:1069930")(a.toString(),{data:{},method:"POST"}),null,function(a){b("cr:1083117")&&b("cr:1083117")("Cookie consent has not been set successfully: "+a.errorMsg,"comet_infra")}):b("cr:1083116")!=null&&new(b("cr:1083116"))(a).send()}},removeDefaultInteractionListener:function(){this.shouldAddDefaultListener=!1,this.defaultHandler&&(window.removeEventListener?window.removeEventListener("click",this.defaultHandler,!0):document.detachEvent&&document.detachEvent("onclick",this.defaultHandler),this.defaultHandler=null)},addDefaultInteractionListener:function(a){this.shouldAddDefaultListener&&(this.shouldAddDefaultListener=!1,this.defaultHandler=a!=null?a:this.baseInteractionHandler.bind(this),window.addEventListener?window.addEventListener("click",this.defaultHandler,!0):document.attachEvent&&document.attachEvent("onclick",this.defaultHandler))},registerCallbackOnCookieFlush:function(a){!(g||(g=b("CookieConsent"))).isDeferCookies()?a():this.callbacks.add(a)},baseInteractionHandler:function(a){var c=a.target;if(!(c instanceof HTMLElement))return;if(a instanceof MouseEvent&&!this.isValidClick(a))return;b("cr:1109759")!=null&&!b("cr:1109759").isBlacklisted(c)&&this.flushAllCookies()},isValidClick:function(a){return a.which===void 0?!0:a.which==1},canEmbedThirdPartyPixel:function(){return(g||(g=b("CookieConsent"))).isCookiesBlocked()||(g||(g=b("CookieConsent"))).isDeferCookies()?!1:h.size===0}};e.exports=a}),null);
__d("XRefererFrameController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/common/referer_frame.php",{})}),null);
__d("ControlledReferer",["Bootloader","DeferredCookie","URI","XRefererFrameController","isMessengerDotComURI","isOculusDotComURI","isWorkplaceDotComURI","lowerFacebookDomain"],(function(a,b,c,d,e,f){var g,h={useFacebookReferer:function(a,c,d){if(!b("DeferredCookie").canEmbedThirdPartyPixel()){b("Bootloader").loadModules(["BanzaiODS"],function(a){a.bumpEntityKey(2966,"defer_cookies","block_controlled_referer_iframe")},"ControlledReferer");return}var e=!1;function f(){if(e)return;var b=a.contentWindow.location.pathname;if(b!=="/intern/common/referer_frame.php"&&b!=="/common/referer_frame.php")return;e=!0;a.contentWindow.document.body.style.margin=0;c()}var h;b("isMessengerDotComURI")((g||(g=b("URI"))).getRequestURI())?h=b("XRefererFrameController").getURIBuilder().getURI().toString():b("isOculusDotComURI")((g||(g=b("URI"))).getRequestURI())?h="/common/referer_frame.php":!b("lowerFacebookDomain").isValidDocumentDomain()?h="/intern/common/referer_frame.php":h=b("XRefererFrameController").getURIBuilder().getURI().toString();d==null&&b("isWorkplaceDotComURI")((g||(g=b("URI"))).getRequestURI())&&(d="workplace");d&&(h+="?fb_source="+d);a.onload=f;a.src=h},useFacebookRefererHtml:function(a,b,c){h.useFacebookReferer(a,function(){a.contentWindow.document.body.innerHTML=b},c)}};e.exports=h}),null);
__d("TrackingPixel",["Arbiter","ControlledReferer","DeferredCookie","FBLogger"],(function(a,b,c,d,e,f){var g={_iframe:void 0,setIFrame:function(a){g._iframe=a},loadWithNoReferrer:function(a){if(!b("DeferredCookie").canEmbedThirdPartyPixel()){b("FBLogger")("tracking_pixel").mustfix("Attempting to load a TrackingPixel (%s) while cookies are deferred. This is not allowed because tracking pixels sometimes set cookies.",a);return}if(!g._iframe){var c=document.createElement("iframe");c.frameBorder="0";c.width=c.height="1";c.style.position="absolute";c.style.top="-10px";b("ControlledReferer").useFacebookReferer(c,function(){b("Arbiter").inform("TrackingPixel/iframeIsLoaded",null,"persistent")});document.body!=null&&document.body.appendChild(c);g._iframe=c}b("Arbiter").subscribe("TrackingPixel/iframeIsLoaded",function(){if(g._iframe!=void 0){var b=g._iframe.contentWindow;b=new b.Image();b.src=a}})}};e.exports=g}),null);
__d("DesktopHscrollUnitEventConstants",[],(function(a,b,c,d,e,f){e.exports={HSCROLL_ITEM_INSERTED_EVENT:"DesktopHScrollUnit/itemInserted",HSCROLL_ITEM_SHOWN_EVENT:"DesktopHScrollUnit/itemShown",HSCROLL_ITEM_HIDE_EVENT:"DesktopHScrollUnit/HideIndividualItem",HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT:"DesktopHScrollUnit/scrollItemBeforeXout",HSCROLL_ITEM_UNHIDE_EVENT:"DesktopHScrollUnit/unhideIndividualItem",HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN:"logLastAdXout",HSCROLL_PAGER_ITEM_HIDE_EVENT:"onXoutIndividualItem"}}),null);
__d("routeBuilderUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.split("/");return a.filter(function(a){return a!==""}).map(function(a){var b=a.split(/{|}/);if(b.length<3)return{isToken:!1,part:a};else{a=b[0];var c=b[1];b=b[2];var d=c[0]==="?",e=c[d?1:0]==="*";c=c.substring((d?1:0)+(e?1:0));return{isToken:!0,optional:d,prefix:a,suffix:b,token:c}}})}e.exports={getPathParts:a}}),null);
__d("cometRouteBuilder",["ConstUriUtils","FBLogger","routeBuilderUtils"],(function(a,b,c,d,e,f){"use strict";var g=b("routeBuilderUtils").getPathParts;function a(a,c,d,e){var f=g(a);function h(g){var h=e!=null?babelHelpers["extends"]({},e,g):g,i={};g="";var j=!1;g=f.reduce(function(a,b){if(!b.isToken)return a+"/"+b.part;else{var d,e=b.optional,f=b.prefix,g=b.suffix;b=b.token;if(e&&j)return a;d=(d=h[b])!=null?d:c[b];if(d==null&&e){j=!0;return a}if(d==null)throw new Error("Missing required template parameter: "+b);if(d==="")throw new Error("Required template parameter is an empty string: "+b);i[b]=!0;return a+"/"+f+d+g}},"");a.slice(-1)==="/"&&(g+="/");g===""&&(g="/");var k=b("ConstUriUtils").getUri(g);for(var l in h){var m=h[l];!i[l]&&m!=null&&k!=null&&(d!=null&&d.has(l)?m!==!1&&(k=k.addQueryParam(l,null)):k=k.addQueryParam(l,m))}return k==null?g:k.toString()}return{buildURL:function(c){try{return h(c)}catch(c){b("FBLogger")("CometRouteBuilder").catching(c).mustfix("Failed building URL for base path: %s",a);return"#"}}}}e.exports=a}),null);
__d("ClickableArea.react",["Focus","React","ReactDOM"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){if(this.props.buttonRef){var a=this.props.buttonRef();b("Focus").relocate(b("ReactDOM").findDOMNode(a),b("ReactDOM").findDOMNode(this))}};d.render=function(){var a=this.props,b=a.children,c=a.onClick;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","onClick"]);return g.cloneElement(g.Children.only(b),babelHelpers["extends"]({},a,{onClick:c}))};return c}(g.Component);e.exports=a}),null);
__d("EntstreamFeedObject",["csx","CSS","Parent"],(function(a,b,c,d,e,f,g){var h={getRoot:function(a){return b("Parent").bySelector(a,"._5jmm")},getHscrollOuterRootIfAvailable:function(a){a=a;b("CSS").matchesSelector(a,"._170y")&&(a=h.getRoot(a.parentNode));return a}};e.exports=h}),null);
__d("PageHooks",["Arbiter","ErrorUtils","InitialJSLoader","PageEvents"],(function(a,b,c,d,e,f){var g;f={DOMREADY_HOOK:"domreadyhooks",ONLOAD_HOOK:"onloadhooks"};function h(){var c=a.CavalryLogger;!window.domready&&c&&c.getInstance().setTimeStamp("t_prehooks");k(l.DOMREADY_HOOK);!window.domready&&c&&c.getInstance().setTimeStamp("t_hooks");window.domready=!0;b("Arbiter").inform("uipage_onload",!0,"state")}function i(){k(l.ONLOAD_HOOK),window.loaded=!0}function j(a,c){return(g||(g=b("ErrorUtils"))).applyWithGuard(a,null,null,function(a){a.event_type=c,a.category="runhook"},"PageHooks:"+c)}function k(a){var b=a=="onbeforeleavehooks"||a=="onbeforeunloadhooks";do{var c=window[a];if(!c)break;b||(window[a]=null);for(var d=0;d<c.length;d++){var e=j(c[d],a);if(b&&e)return e}}while(!b&&window[a])}function c(){window.domready||(window.domready=!0,k("onloadhooks")),window.loaded||(window.loaded=!0,k("onafterloadhooks"))}function d(){var a,c;(a=b("Arbiter")).registerCallback(h,[(c=b("PageEvents")).BIGPIPE_DOMREADY,b("InitialJSLoader").INITIAL_JS_READY]);a.registerCallback(i,[c.BIGPIPE_DOMREADY,c.BIGPIPE_ONLOAD,b("InitialJSLoader").INITIAL_JS_READY]);a.subscribe(c.NATIVE_ONBEFOREUNLOAD,function(a,b){b.warn=k("onbeforeleavehooks")||k("onbeforeunloadhooks"),b.warn||(window.domready=!1,window.loaded=!1)},"new");a.subscribe(c.NATIVE_ONUNLOAD,function(a,b){k("onunloadhooks"),k("onafterunloadhooks")},"new")}var l=babelHelpers["extends"]({_domreadyHook:h,_onloadHook:i,runHook:j,runHooks:k,keepWindowSetAsLoaded:c},f);d();a.PageHooks=e.exports=l}),null);
__d("legacy:onload-action",["PageHooks"],(function(a,b,c,d,e,f){a._domreadyHook=(c=b("PageHooks"))._domreadyHook;a._onloadHook=c._onloadHook;a.runHook=c.runHook;a.runHooks=c.runHooks;a.keep_window_set_as_loaded=c.keepWindowSetAsLoaded}),3);
__d("FlipDirection",["DOM","Input","Style"],(function(a,b,c,d,e,f){a={setDirection:function(a,c,d){c===void 0&&(c=5);d===void 0&&(d=!1);var e=b("DOM").isNodeOfType(a,"input")&&a.type=="text",f=b("DOM").isNodeOfType(a,"textarea");if(!(e||f)||a.getAttribute("data-prevent-auto-flip"))return;e=b("Input").getValue(a);f=a.style&&a.style.direction;if(!f||d){f=0;d=!0;for(var g=0;g<e.length;g++){var h=e.charCodeAt(g);if(h>=48){d&&(d=!1,f++);if(h>=1470&&h<=1920){b("Style").set(a,"direction","rtl");a.setAttribute("dir","rtl");return}if(f==c){b("Style").set(a,"direction","ltr");a.setAttribute("dir","ltr");return}}else d=!0}}else e.length===0&&(b("Style").set(a,"direction",""),a.removeAttribute("dir"))}};e.exports=a}),null);
__d("FlipDirectionOnKeypress",["Event","FlipDirection"],(function(a,b,c,d,e,f){a=function(a){a=a.getTarget();b("FlipDirection").setDirection(a)};b("Event").listen(document.documentElement,{keyup:a,input:a})}),null);
__d("LitestandMessages",[],(function(a,b,c,d,e,f){a=Object.freeze({NEWSFEED_LOAD:"LitestandMessages/NewsFeedLoad",LEAVE_HOME:"LitestandMessages/LeaveHome",STORIES_REQUESTED:"LitestandMessages/StoriesRequested",STORIES_INSERTED:"LitestandMessages/StoriesInserted",NEWER_STORIES_REQUESTED:"LitestandMessages/NewerStoriesRequested",NEWER_STORIES_INSERTED:"LitestandMessages/NewerStoriesInserted",NEW_STORIES_CONTAINER_CREATED:"LitestandMessages/NewStoriesContainer",RHC_RELOADED:"LitestandMessages/RHCReloaded",STREAM_LOAD_ERROR:"LitestandMessages/StreamLoadError",DUPLICATE_CURSOR_ERROR:"LitestandMessages/DuplicateCursorError",STREAM_LOAD_RETRY:"LitestandMessages/StreamLoadRetry"});e.exports=a}),null);
__d("Nectar",["Env","getContextualParent"],(function(a,b,c,d,e,f){var g;function h(a){a.nctr||(a.nctr={})}function i(a){if((g||(g=b("Env"))).module||!a)return(g||(g=b("Env"))).module;var c={fbpage_fan_confirm:!0,photos_snowlift:!0},d;while(a&&a.getAttribute){var e=a.getAttribute("id");if(e!=null&&e.startsWith("pagelet_"))return e;!d&&c[e]&&(d=e);a=b("getContextualParent")(a)}return d}a={addModuleData:function(a,b){b=i(b);b&&(h(a),a.nctr._mod=b)},addImpressionID:function(a){(g||(g=b("Env"))).impid&&(h(a),a.nctr._impid=(g||(g=b("Env"))).impid)}};e.exports=a}),null);
__d("FantaHider",["ifRequired"],(function(a,b,c,d,e,f){"use strict";e.exports={hide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.hide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.hide()})})},unhide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.unhide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.unhide()})})}}}),null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar"],(function(a,b,c,d,e,f){Object.assign(b("AsyncRequest").prototype,{setNectarModuleData:function(a){this.method=="POST"&&b("Nectar").addModuleData(this.data,a)}})}),null);
__d("DOMTraverser",["DOM"],(function(a,b,c,d,e,f){var g={previousNode:function(a){if(a.previousElementSibling){var b=a.previousElementSibling;while(b.lastElementChild!==null)b=b.lastElementChild;return b}return a.parentElement},nextNode:function(a){if(a.firstElementChild)return a.firstElementChild;if(a.nextElementSibling)return a.nextElementSibling;a=a.parentElement;while(a!=null){if(a.nextElementSibling)return a.nextElementSibling;a=a.parentElement}return null},previousFilteredNode:function(a,b,c){if(b===a)return null;b=g.previousNode(b);while(b!=null){if(b instanceof HTMLElement&&c(b))return b;if(b===a)return null;b=g.previousNode(b)}return null},nextFilteredNode:function(a,c,d){c=g.nextNode(c);while(c!=null){if(a&&!b("DOM").contains(a,c))return null;if(c instanceof HTMLElement&&d(c))return c;c=g.nextNode(c)}return null}};e.exports=g}),null);
__d("DialogHideOnSuccess",["csx","CSS"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("success",this._handle.bind(this))};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null};c._handle=function(a,c){b("CSS").matchesSelector(c.getTarget(),"._s")&&this._layer.hide()};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("Ease",[],(function(a,b,c,d,e,f){var g={makePowerOut:function(a){var b=g.makePowerIn(a);return function(a){return 1-b(1-a)}},makePowerIn:function(a){return function(b){b=Math.pow(b,a);return(b*1e4|0)/1e4}},makePowerInOut:function(a){var b=g.makePowerIn(a),c=g.makePowerOut(a);return function(a){return a<.5?.5*b(a*2):.5*c(a*2-1)+.5}},expoOut:function(a){return 1-Math.pow(2,-10*a)},expoIn:function(a){return 1-g.expoOut(1-a)},expoInOut:function(a){return a<.5?.5*g.expoIn(a*2):.5*g.expoOut(a*2-1)+.5},sineOut:function(a){return Math.sin(a*Math.PI*.5)},sineIn:function(a){return 1-Math.cos(a*Math.PI*.5)},sineInOut:function(a){return-.5*(Math.cos(Math.PI*a)-1)},circOut:function(a){a--;return Math.sqrt(1-a*a)},circIn:function(a){return 1-g.circOut(1-a)},circInOut:function(a){return a<.5?.5*g.circIn(a*2):.5*g.circOut(a*2-1)+.5},bounceOut:function(a){if(a<1/2.75)return 7.5625*a*a;else if(a<2/2.75)return 7.5625*(a-=1.5/2.75)*a+.75;else if(a<2.5/2.75)return 7.5625*(a-=2.25/2.75)*a+.9375;else return 7.5625*(a-=2.625/2.75)*a+.984375},bounceIn:function(a){return 1-g.bounceOut(1-a)},bounceInOut:function(a){return a<.5?.5*g.bounceIn(a*2):.5*g.bounceOut(a*2-1)+.5},makeBounceOut:function(a){a=a||1;return function(b){b=(1-Math.cos(b*Math.PI*a))*(1-b)+b;return 1-Math.abs(1-b)}},makeBounceIn:function(a){var b=g.makeBounceOut(a);return function(a){return 1-b(1-a)}},makeElasticOut:function(a,b){a<1&&(a=1);var c=Math.PI*2;return function(d){if(d===0||d===1)return d;var e=b/c*Math.asin(1/a);return a*Math.pow(2,-10*d)*Math.sin((d-e)*c/b)+1}},makeElasticIn:function(a,b){var c=g.makeElasticOut(a,b);return function(a){return 1-c(1-a)}},makeElasticInOut:function(a,b){b*=1.5;var c=g.makeElasticIn(a,b),d=g.makeElasticOut(a,b);return function(a){return a<.5?.5*c(a*2):.5*d(a*2-1)+.5}},makeBackOut:function(a){var b=g.makeBackIn(a);return function(a){return 1-b(1-a)}},makeBackIn:function(a){return function(b){return b*b*((a+1)*b-a)}},makeBackInOut:function(a){a*=1.525;var b=g.makeBackIn(a),c=g.makeBackOut(a);return function(a){return a<.5?.5*b(a*2):.5*c(a*2-1)+.5}}};g.elasticOut=g.makeElasticOut(1,.3);g.elasticIn=g.makeElasticIn(1,.3);g.elasticInOut=g.makeElasticInOut(1,.3);g.backOut=g.makeBackOut(1.7);g.backIn=g.makeBackIn(1.7);g.backInOut=g.makeBackInOut(1.7);e.exports=g}),null);
__d("KeyboardShortcutToken",["KeyEventController"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a,b,c){this.$1=!0,this.key=a,this.handler=b,this.filter=c.filter,this.persistOnTransition=c.persistOnTransition,this.shortcutInfo=c.shortcutInfo,this.register()}var c=a.prototype;c.register=function(){var a=this;if(!this.$1)return;this.token=b("KeyEventController").registerKey(this.key,this.handler,this.filter,!1,function(){return a.persistOnTransition})};c.remove=function(){this.token.remove(),this.$1=!1};c.unregister=function(){this.token.remove()};c.isActive=function(){return this.$1};c.getKey=function(){return this.key};c.getShortcutInfo=function(){return this.shortcutInfo};return a}();e.exports=a}),null);
__d("PageTransitions",["requireCond","cr:917439"],(function(a,b,c,d,e,f){e.exports=b("cr:917439")}),null);
__d("translateKey",["fbt","invariant"],(function(a,b,c,d,e,f,g,h){var i={alt:g._("alt"),enter:g._("enter"),"delete":g._("delete"),shift:g._("shift"),opt:g._("opt"),ctrl:g._("ctrl"),cmd:g._("cmd"),esc:g._("esc"),tab:g._("tab"),up:g._("seta para cima"),down:g._("seta para baixo"),right:g._("seta para a direita"),left:g._("seta para a esquerda"),page_up:g._("page up"),page_down:g._("page down"),home:g._("home"),end:g._("end")};function a(a){if(Object.prototype.hasOwnProperty.call(i,a))return i[a];a.length===1||h(0,2507);return a}e.exports=a}),null);
__d("KeyboardShortcuts",["csx","cx","fbt","Arbiter","BasicFBNux","CSS","Dock","KeyboardShortcutToken","KeyEventController","Layer","ModalLayer","NavigationMessage","PageTransitions","Run","emptyFunction","translateKey"],(function(a,b,c,d,e,f,g,h,i){a={_arbiter:null,_hasTriggeredShortcut:!1,_flyoutNub:null,_nubNux:null,_nubNuxID:null,_tokenLayers:[],showInfo:b("emptyFunction"),register:function(a,c,d){var e=this,f=d?d:{};d=function(a,b){c.call(e,a,b),f.allowDefault||a.prevent(),e._hasTriggeredShortcut||e._handleFirstShortcutTriggered()};var g=f.baseFilters||[b("KeyEventController").defaultFilter],h=function(a,b){for(var c=g,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(d){if(e>=c.length)break;h=c[e++]}else{e=c.next();if(e.done)break;h=e.value}h=h;if(!h(a,b))return!1}return!f.filter||f.filter(a,b)};a=new(b("KeyboardShortcutToken"))(a,d,{filter:h,persistOnTransition:f.persistOnTransition,shortcutInfo:f.shortcutInfo});this._tokenLayers.length||this._tokenLayers.push([]);this._tokenLayers[this._tokenLayers.length-1].push(a);this.inform("token_added");return a},init:function(){var a=this;this._cleanup=this._cleanup.bind(this);b("Run").onLeave(this._cleanup);b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this._cleanup);b("Layer").subscribe("show",function(c,d){d.hasBehavior(b("ModalLayer"))&&a.pushLayer()});b("Layer").subscribe("hide",function(c,d){d.hasBehavior(b("ModalLayer"))&&a.popLayer()});this.register("SLASH",function(){var c=a._getFlyoutNub();c&&b("Dock").toggle(c)},{filter:function(a,b){return a.getModifiers().shift},persistOnTransition:!0,shortcutInfo:{displayKeys:[b("translateKey")("?")],description:i._("Exibir este di\u00e1logo de ajuda")}})},_cleanup:function(){var a=this,c=[];this._tokenLayers.forEach(function(a){var b=[];a.forEach(function(a){a.isActive()&&b.push(a)});b.length&&c.push(b)});this._tokenLayers=c;this.inform("cleanup");b("PageTransitions").registerCompletionCallback(function(){b("Run").onLeave(a._cleanup),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,a._cleanup)})},pushLayer:function(){var a=this._getTopLayer();a&&a.forEach(function(a){a.unregister()});this._tokenLayers.push([])},popLayer:function(){if(this._tokenLayers.length===0)return;var a=this._tokenLayers.pop();a.forEach(function(a){a.remove()});a=this._getTopLayer();a&&a.forEach(function(a){a.register()})},_getTopLayer:function(){return!this._tokenLayers.length?null:this._tokenLayers[this._tokenLayers.length-1]},_getBaseLayer:function(){return!this._tokenLayers.length?null:this._tokenLayers[0]},getShortcutInfos:function(){var a=[],b=this._getBaseLayer();b&&b.forEach(function(b){var c=b.getShortcutInfo();b.isActive()&&c!=null&&a.push(c)});return a},_getArbiterInstance:function(){this._arbiter||(this._arbiter=new(b("Arbiter"))());return this._arbiter},inform:function(a,b,c){return this._getArbiterInstance().inform(a,b,c)},subscribe:function(a,b,c){return this._getArbiterInstance().subscribe(a,b,c)},unsubscribe:function(a){this._getArbiterInstance().unsubscribe(a)},_handleFirstShortcutTriggered:function(){this._hasTriggeredShortcut=!0;var a=this._getFlyoutNub();a&&(b("CSS").removeClass(a,"_ur5"),this._nubNux&&this._nubNuxID&&(this._nubNux.show(),b("BasicFBNux").onView(this._nubNuxID),this._nubNux.subscribe("hide",b("BasicFBNux").onDismiss.bind(this,this._nubNuxID))))},_getFlyoutNub:function(){this._flyoutNub||(this._flyoutNub=document.querySelector("#pagelet_dock ._rz3"));return this._flyoutNub},showShortcutFlyout:function(){this._hasTriggeredShortcut||this._handleFirstShortcutTriggered();var a=this._getFlyoutNub();a&&b("Dock").show(a)},hasFlyoutToShow:function(){return this._getFlyoutNub()!=null&&this.getShortcutInfos().length>0},initNUXEvent:function(a,b){this._nubNux=a,this._nubNuxID=b}};a.init();e.exports=a}),null);
__d("TidyArbiterMixin",["Arbiter","ArbiterMixin","Run"],(function(a,b,c,d,e,f){a={};Object.assign(a,b("ArbiterMixin"),{_getArbiterInstance:function(){this._arbiter||(this._arbiter=new(b("Arbiter"))(),b("Run").onLeave(function(){delete this._arbiter}.bind(this)));return this._arbiter}});e.exports=a}),null);
__d("WebPixelRatio",["SiteData"],(function(a,b,c,d,e,f){a={get:function(){return b("SiteData").pr!=null&&b("SiteData").pr>0?b("SiteData").pr:window.devicePixelRatio||1}};e.exports=a}),null);
__d("WebPixelRatioDetector",["Cookie","DOMEventListener","PixelRatioConst","Run"],(function(a,b,c,d,e,f){"use strict";var g=b("PixelRatioConst").cookieName,h=!1,i=!1,j=!1;function k(){return window.devicePixelRatio||1}function l(){b("Cookie").set(g,String(k()))}function m(){b("Cookie").clear(g)}function n(){if(i)return;i=!0;j&&m();k()!==1?l():m()}a={startDetecting:function(a){a&&(j=!0);if(h)return;h=!0;"onpagehide"in window&&b("DOMEventListener").add(window,"pagehide",n);b("Run").onBeforeUnload(n,!1)}};e.exports=a}),null);
__d("onEnclosingPageletDestroy",["Arbiter","DOMQuery"],(function(a,b,c,d,e,f){function a(a,c){var d=b("Arbiter").subscribe("pagelet/destroy",function(e,f){b("DOMQuery").contains(f.root,a)&&(d.unsubscribe(),c())});return d}e.exports=a}),null);
__d("tidyEvent",["Run"],(function(a,b,c,d,e,f){var g=[];function h(){while(g.length){var a=g.shift();a.remove?a.remove():a.unsubscribe&&a.unsubscribe()}}function i(a){var b,c=a;function d(){if(!b)return;b.apply(c,arguments);b=null;c=null}if(c&&c.remove)b=c.remove,c.remove=d;else{b=(a=c)==null?void 0:a.unsubscribe;c.unsubscribe=d}return c}function a(a){g.length||b("Run").onLeave(h);if(Array.isArray(a))for(var c=0;c<a.length;c++)a[c]&&g.push(i(a[c]));else a&&g.push(i(a));return a}e.exports=a}),null);
__d("ReactComposerEvents",[],(function(a,b,c,d,e,f){a=Object.freeze({CHANGE:"change",INSTANCE_MOUNTED:"composer/instanceMounted/",ACTIVATE_ATTACHMENT:"composer/activateAttachment/",MENTION_INPUT_FOCUS:"composer/mentionInputFocused/",TEXT_PREFILL_BEFORE_BOOTLOAD:"composer/textPrefillBeforeBootload/",RERENDER_MENTION_INPUT:"reactComposer/rerenderMentionInput/",OPTIMISTIC_POSTING_STARTED:"composer/optimisticPostingStarted/",POST_FINALLY:"composer/postFinally/",POST_STARTED:"composer/postStarted/",POST_SUCCEEDED:"composer/postSucceeded/",COMPOSER_RESET:"composer/reset/",COMPOSER_UNMOUNT:"composer/unmount/",SET_PREFILL_DATA:"reactComposer/setPrefillData/",RICH_TEXT_EDITOR_MOUNTED:"reactComposer/richTextEditorMounted/",SAVE_STARTED:"composer/saveStarted/",HIGHLIGHT_TOP_COMPOSER:"reactComposer/highlightTopComposer"});e.exports=a}),null);
__d("KappaWrapper",["AsyncSignal","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){var g=!1;e.exports={forceStart:function(a,c,d){var e=0,f=function d(){new(b("AsyncSignal"))("/si/kappa/",{Ko:"a"}).send(),++e<a&&b("setTimeoutAcrossTransitions")(d,c*1e3)};b("setTimeoutAcrossTransitions")(f,(c+d)*1e3)},start:function(a,b,c){g||(g=!0,this.forceStart(a,b,c))}}}),null);
__d("Chromedome",["fbt"],(function(a,b,c,d,e,f,g){a={start:function(a){if(top!==window||document.domain==null||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;a=g._("Espere!");var b=g._("Este \u00e9 um recurso de navegador voltado para desenvolvedores. Se algu\u00e9m disse para voc\u00ea copiar e colar algo aqui para ativar um recurso do Facebook ou \"invadir\" a conta de outra pessoa, isso \u00e9 uma fraude e voc\u00ea dar\u00e1 a ele acesso \u00e0 sua conta."),c=g._("Consulte {url} para obter mais informa\u00e7\u00f5es.",[g._param("url","https://www.facebook.com/selfxss")]);if(window.chrome||window.safari){var d="font-family:helvetica; font-size:20px; ";[[a,d+"font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;"],[b,d],[c,d],["",""]].map(function(a){window.setTimeout(console.log.bind(console,"\n%c"+a[0].toString(),a[1]))})}else{a=[""," .d8888b.  888                       888","d88P  Y88b 888                       888","Y88b.      888                       888",' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P',"Y88b  d88P Y88b.  Y88..88P 888 d88P",' "Y8888P"   "Y888  "Y88P"  88888P"   888',"                           888","                           888","                           888"];d=(""+b.toString()).match(/.{35}.+?\s+|.+$/g);if(d!=null){b=Math.floor(Math.max(0,(a.length-d.length)/2));for(var e=0;e<a.length||e<d.length;e++){var f=a[e];a[e]=f+new Array(45-f.length).join(" ")+(d[e-b]||"")}}console.log("\n\n\n"+a.join("\n")+"\n\n"+c.toString()+"\n");return}}};e.exports=a}),null);
__d("LayerRemoveOnHide",["DOM"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("hide",b("DOM").remove.bind(null,this._layer.getRoot()))};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("PagesEventObserver",["Banzai"],(function(a,b,c,d,e,f){var g="pages_client_logging",h={VITAL_WAIT:b("Banzai").VITAL_WAIT,logData_DEPRECATED:function(a,c){c={delay:c||b("Banzai").VITAL_WAIT};b("Banzai").post(g,a,c)},notify:function(a,c,d,e,f){d=babelHelpers["extends"]({},d,{event_name:a,page_id:c,dedupe:e!==!1});a={delay:f||b("Banzai").VITAL_WAIT};b("Banzai").post(g,d,a)},registerLogOnClick:function(a,b,c){c===void 0&&(c=null),a.addEventListener("click",function(){c&&h.notify(c,b,null,null,null)})}};e.exports=h}),null);
__d("CookieConsentBlacklist",["CookieConsentBlacklistedHrefs","Parent"],(function(a,b,c,d,e,f){"use strict";a={isBlacklisted:function(a){a=a;if(!this.hasCookieBanner())return!0;var c=b("Parent").byAttribute(a,"data-cookiebanner");if(c){c=c.getAttribute("data-cookiebanner");switch(c){case"close_button":return!1;case"banner":return!0}}c=b("Parent").byAttribute(a,"data-nocookies");if(c)return!0;a.tagName.toLowerCase()!=="a"&&(a=b("Parent").byTag(a,"a"));if(a instanceof HTMLAnchorElement&&typeof a.href==="string"){c=a.href;for(var a=0;a<this.blacklistedHrefs.length;a++)if(c.indexOf(this.blacklistedHrefs[a])>-1)return!0}return!1},blacklistedHrefs:b("CookieConsentBlacklistedHrefs").hrefs,hasCookieBanner:function(){var a=document.querySelectorAll('[data-cookiebanner="banner"]');return a.length>0}};e.exports=a}),null);
__d("VisualCompletionGating",["requireCond","cr:729414"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:729414")}),null);
__d("ImageBlock.react",["cx","invariant","LeftRight.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){var i=b("React");function j(a){a=a.children;a&&(a.length===2||a.length===3)||h(0,97);a[0]!==null||h(0,98);return a}function k(a){return"img _8o"+(a==="small"?" _8r":"")+(a==="medium"?" _8s":"")+(a==="large"?" _8t":"")}a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=j(this.props),c=a[0],d=a[1];a=a[2];var e=this.props,f=e.imageClassName,g=e.contentClassName,h=e.spacing;e=babelHelpers.objectWithoutPropertiesLoose(e,["imageClassName","contentClassName","spacing"]);var l=c.props,m=l.className,n=l.alt,o=l.tabIndex;l=l.title;m={className:b("joinClasses")(m,k(h),f)};c.type==="img"?n===void 0&&(m.alt=""):(c.type==="a"||c.type==="link")&&o===void 0&&l===void 0&&c.props["aria-label"]===void 0&&(m.tabIndex="-1",m["aria-hidden"]="true");c=i.cloneElement(c,m);f=!0;this.props.flexibleContent!=null&&(f=this.props.flexibleContent);n=b("joinClasses")(g,(f?"_42ef":"")+(h==="small"?" _8u":""));!a?o=i.jsx("div",{className:n,children:d}):o=i.jsxs(b("LeftRight.react"),{className:n,direction:b("LeftRight.react").DIRECTION.right,children:[d,a]});return i.jsxs(b("LeftRight.react"),babelHelpers["extends"]({},e,{direction:b("LeftRight.react").DIRECTION.left,children:[c,o]}))};return c}(i.Component);a.defaultProps={spacing:"small"};e.exports=a}),null);
__d("Currency",["CurrencyConfig"],(function(a,b,c,d,e,f){var g=b("CurrencyConfig").allCurrenciesByCode,h={iso:"",format:"",symbol:"",offset:1,name:""};function i(a){return a!=null&&g[a]?g[a]:h}function a(a){return i(a).format}function c(a){return i(a).iso}function d(a){return i(a).name}function f(a){return i(a).offset}function j(a){return i(a).symbol}e.exports={getFormat:a,getISO:c,getName:d,getOffset:f,getSymbol:j}}),null);
__d("SimpleObjectsPool",["invariant"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a){this.$1=a,this.$2=[]}var b=a.prototype;b.get=function(){if(this.$2.length)return this.$2.pop();else{var a=this.$1;return new a()}};b.put=function(a){a instanceof this.$1||g(0,4227),this.$2.push(a)};return a}();e.exports=a}),null);
__d("PersistentAnimationFrame",["SimpleObjectsPool","Visibility","cancelAnimationFrame","requestAnimationFrame"],(function(a,b,c,d,e,f){var g=16,h,i={},j=!0;function k(){h||(h=new(b("SimpleObjectsPool"))(l));return h}var l=function(){"use strict";function a(){var a=this;this.$1=function(){a.callback(),a.$2(),k().put(a)}}a.request=function(a){return!a?0:k().get().request(a)};a.cancel=function(a){if(a===0)return;a=i[String(a)];a&&a.cancel()};var c=a.prototype;c.request=function(a){j&&m();this.callback=a;this.hidden=b("Visibility").isHidden();this.hidden?this.intID=setTimeout(this.$1,g):this.intID=b("requestAnimationFrame")(this.$1);this.strID=String(this.intID);i[this.strID]=this;return this.intID};c.cancel=function(){this.strID&&(this.hidden?clearTimeout(this.intID):b("cancelAnimationFrame")(this.intID),this.$2(),k().put(this))};c.$2=function(){delete i[this.strID],delete this.intID,delete this.strID,delete this.callback,delete this.hidden};return a}();function m(){var a;j=!1;(a=b("Visibility")).addListener(a.HIDDEN,n);a.addListener(a.VISIBLE,n)}function n(){Object.keys(i).forEach(function(a){a=i[a];var b=a.callback;a.cancel();b()})}e.exports=l}),null);
__d("requestPersistentAnimationFrame",["PersistentAnimationFrame"],(function(a,b,c,d,e,f){"use strict";e.exports=b("PersistentAnimationFrame").request}),null);
__d("ResizeEventHandler",["requestPersistentAnimationFrame"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){var c=this;this.$1=!1;this.$2=!1;this.handleEvent=function(){c.$2===!1&&(c.$2=!0,b("requestPersistentAnimationFrame")(c.$4))};this.$4=function(){c.$2=!1,c.$1===!1&&c.$3()};this.$3=a}var c=a.prototype;c.cancel=function(){this.$1=!0};return a}();e.exports=a}),null);
__d("flatMapArray",[],(function(a,b,c,d,e,f){var g=Array.prototype.push;function a(a,b){var c=[];for(var d=0;d<a.length;d++){var e=b.call(a,a[d],d);if(Array.isArray(e))g.apply(c,e);else if(e!=null)throw new TypeError('flatMapArray: Callback must return an array or null, received "'+e.toString()+'" instead')}return c}e.exports=a}),null);
__d("keyMirrorRecursive",["invariant","isTruthy"],(function(a,b,c,d,e,f,g){"use strict";a=function a(c,d){var e={};h(c)||g(0,580);for(var f in c){if(!Object.prototype.hasOwnProperty.call(c,f))continue;var i=c[f],j=b("isTruthy")(d)?d+"."+f:f;h(i)?i=a(i,j):i=j;e[f]=i}return e};function h(a){return a instanceof Object&&!Array.isArray(a)}e.exports=a}),null);
__d("ghlTestUBT",["requireCond","cr:1278084"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1278084")}),null);
__d("ImmutableRecordWithV4Types",["immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record;e.exports={Record:a}}),null);
__d("QuicklingRefreshOverheadUtil",["QuicklingConfig","WebStorage","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";var g,h,i=null,j=1e4;a={onQuicklingStart:function(){i=(g||(g=b("performanceAbsoluteNow")))()},onQuicklingVersionMatch:function(){i=null},onQuicklingRefreshStart:function(){if(!b("QuicklingConfig").logRefreshOverhead||i===null)return;var a=(h||(h=b("WebStorage"))).getSessionStorage();if(!a)return;a.setItem("quickling_refresh_overhead",((g||(g=b("performanceAbsoluteNow")))()-i).toString());a.setItem("quickling_refresh_start",Date.now().toString())},getOverhead:function(a){if(!b("QuicklingConfig").logRefreshOverhead)return null;var c=(h||(h=b("WebStorage"))).getSessionStorageForRead();if(!c)return null;var d=c.getItem("quickling_refresh_start");if(d==null)return null;if(a-parseInt(d,10)>j)return null;a=c.getItem("quickling_refresh_overhead");return a!=null?parseFloat(a):null}};e.exports=a}),null);
__d("ClientServiceWorkerMessage",[],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a,b,c){this.$1=a,this.$2=b,this.$3=c}var b=a.prototype;b.sendViaController=function(){if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var a=new self.MessageChannel();this.$3&&(a.port1.onmessage=this.$3);navigator.serviceWorker.controller.postMessage({command:this.$1,data:this.$2},[a.port2])};return a}();e.exports=a}),null);
__d("ServiceWorkerLoginAndLogout",["ClientServiceWorkerMessage"],(function(a,b,c,d,e,f){function g(a){new(b("ClientServiceWorkerMessage"))(a,null).sendViaController()}a={login:function(){g("login")},logout:function(){g("logout")}};e.exports=a}),null);
__d("ServiceWorkerRegistration",["Promise","BrowserPaymentHandlerConfig","ClientServiceWorkerMessage","EventListener","Run","promiseDone"],(function(a,b,c,d,e,f){var g=!!navigator.serviceWorker,h={},i={name:"Facebook Pay",method:self.location.origin+"/pay"};function j(a){if(!b("BrowserPaymentHandlerConfig").enabled)return;(a=a.paymentManager)==null?void 0:(a=a.instruments)==null?void 0:a.set("Facebook",i)}function k(){var a=navigator.serviceWorker;if(!g||!a)throw new Error("serviceWorker is not supported in this browser");return a}var l={isSupported:function(){return g},registerWorkerIfUnregisteredAfterDD:function(a){b("Run").onAfterLoad(function(){l.registerWorkerIfUnregistered(a)})},registerWorkerIfUnregistered:function(a){if(h[a])return h[a];var c=k(),d=h[a]=new(b("Promise"))(function(d,e){b("promiseDone")(l.getWorkerRegistration(a),function(f){if(!f){var g=b("EventListener").listen(window,"message",function(a){(a==null?void 0:(a=a.data)==null?void 0:a.command)==="ServiceWorkerInstallError"&&e()});b("promiseDone")(b("Promise").resolve(c.register(a,{updateViaCache:"all"})),function(){g.remove(),b("promiseDone")(b("Promise").resolve(c.ready),d)})}else d(f)})});b("promiseDone")(d,function(b){h[a]=null,j(b)});return d},unregisterControllingWorker:function(){return new(b("Promise"))(function(a,c){c=new(b("ClientServiceWorkerMessage"))("unregister",{},function(){a(!0)});c.sendViaController()})},getWorkerRegistration:function(a){var b=k();return b.getRegistration(a)},isAWorkerActivated:function(){return!navigator.serviceWorker||!navigator.serviceWorker.getRegistration?b("Promise").resolve(!1):navigator.serviceWorker.getRegistration().then(function(a){return!!(a&&a.active)})}};e.exports=l}),null);
__d("filterNulls",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=[];for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;e!=null&&b.push(e)}return b}e.exports=a}),null);
__d("XBrowseQueryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/search/{?searchtype}/{?*bqf}/",{q:{type:"String"},bqf:{type:"String"},searchtype:{type:"Enum",enumType:1},page:{type:"Int"},ref:{type:"String"},topicID:{type:"Int"},filters:{type:"String"},f:{type:"String"},query:{type:"String"},name:{type:"String"},cursor:{type:"String"},source:{type:"String"}})}),null);
__d("XEventCreateDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/dialog/create/",{acontext:{type:"String",required:!0},page_id:{type:"Int"},group_id:{type:"Int"},actor_id:{type:"Int"},post_id:{type:"Int"},post_text:{type:"String"},event_id_for_copy:{type:"Int"},schema_org:{type:"String"},default_user_event_privacy_type:{type:"Enum",defaultValue:"private_event",enumType:1},intercept_session_id:{type:"String"},invite_ids:{type:"IntVector"},default_theme_id:{type:"Int"},default_title:{type:"String"},default_start_time:{type:"Int"},default_end_time:{type:"Int"},default_description:{type:"String"},default_cover_id:{type:"Int"},default_ticket_url:{type:"String"},friend_birthday_prompt_xout_id:{type:"FBID"},community_id:{type:"Int"},composer_id:{type:"String"},dialog_entry_point:{type:"Enum",defaultValue:"others",enumType:1},is_arena:{type:"Bool",defaultValue:!1},show_work_tour:{type:"Bool",defaultValue:!1},__asyncDialog:{type:"Int"}})}),null);