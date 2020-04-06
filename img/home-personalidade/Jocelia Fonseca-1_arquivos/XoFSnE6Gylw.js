if (self.CavalryLogger) { CavalryLogger.start_js(["Wn6ol"]); }

__d("VideoBroadcastStatus",[],(function(a,b,c,d,e,f){e.exports={PREVIEW:"PREVIEW",LIVE:"LIVE",LIVE_STOPPED:"LIVE_STOPPED",VOD_READY:"VOD_READY",SEAL_STARTED:"SEAL_STARTED",SCHEDULED_PREVIEW:"SCHEDULED_PREVIEW",SCHEDULED_LIVE:"SCHEDULED_LIVE",SCHEDULED_EXPIRED:"SCHEDULED_EXPIRED",SCHEDULED_CANCELED:"SCHEDULED_CANCELED",PRE_LIVE:"PRE_LIVE",SEAL_FAILED:"SEAL_FAILED"}}),null);
__d("BaseModal.react",["requireCond","cr:994756","cr:1088443"],(function(a,b,c,d,e,f){"use strict";a=b("cr:1088443")!=null?b("cr:1088443"):b("cr:994756");e.exports=a}),null);
__d("CometDialogContextBlue",["BaseModal.react","React","ReactDOM"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c,d){var e=document.body,f=document.createElement("div");e!=null&&e.appendChild(f);e=function(){d!=null&&d.apply(void 0,arguments),window.setTimeout(function(){b("ReactDOM").unmountComponentAtNode(f),f.remove()},0)};b("ReactDOM").render(g.jsx(b("BaseModal.react"),{children:g.jsx(a,babelHelpers["extends"]({},c,{onClose:e}))}),f)}c=g.createContext(a);e.exports=c}),null);
__d("BaseButtonPopoverContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=void 0;d=a.createContext(c);e.exports=d}),null);
__d("BaseButton.react",["BaseButtonPopoverContext","Pressable.react","PressableText.react","React","gkx","useExperimentalFeedTracking","useFeedPressEventHandler"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useContext;function a(a,c){var d=a["aria-activedescendant"],e=a["aria-checked"],f=a["aria-controls"],i=a["aria-describedby"],j=a["aria-expanded"],k=a["aria-haspopup"],l=a["aria-hidden"],m=a["aria-invalid"],n=a["aria-label"],o=a["aria-labelledby"],p=a["aria-pressed"],q=a.children,r=a.className_DEPRECATED,s=a.disabled;s=s===void 0?!1:s;var t=a.display;t=t===void 0?"inline":t;var u=a.focusable,v=a.id,w=a.label,x=a.onBlur,y=a.onClick,z=a.onContextMenu,A=a.onFocus,B=a.onFocusChange,C=a.onFocusVisibleChange,D=a.onHoverChange,E=a.onHoverEnd,F=a.onHoverStart,G=a.onPressChange,H=a.onPressEnd,I=a.onPressStart,J=a.role,K=a.preventContextMenu,L=a.style,M=a.suppressHydrationWarning,N=a.testid,O=a.testOnly_pressed;O=O===void 0?!1:O;a=a.xstyle;J=J==="presentation"?"none":J;var P=c,Q=y,R=I,S=z;b("gkx")("1115188")?P=b("useExperimentalFeedTracking")(c):(Q=b("useFeedPressEventHandler")(y),R=b("useFeedPressEventHandler")(I),S=b("useFeedPressEventHandler")(z));c=h(b("BaseButtonPopoverContext"));I={accessibilityLabel:(y=n)!=null?y:w,accessibilityRelationship:{activedescendant:d,controls:c!=null&&f==null?c.controls:f,describedby:i,haspopup:c!=null&&k==null?c.haspopup:k,labelledby:o},accessibilityState:{checked:e,disabled:s,expanded:c!=null&&j==null?c.expanded:j,hidden:l,invalid:m,pressed:p},className_DEPRECATED:r,disabled:s,focusable:u,forwardedRef:P,nativeID:v,onBlur:x,onContextMenu:S,onFocus:A,onFocusChange:B,onFocusVisibleChange:C,onHoverChange:D,onHoverEnd:E,onHoverStart:F,onPress:Q,onPressChange:G,onPressEnd:H,onPressStart:R,preventContextMenu:K,style:L,testID:N,testOnly_state:{disabled:!1,focusVisible:!1,focused:!1,hovered:!1,pressed:O},xstyle:a};if(t==="block"){z=J==="menuitem"||J==="none"||J==="gridcell"||J==="switch"||J==="combobox"||J==="checkbox"||J==="radio"?J:"button";return g.jsx(b("Pressable.react"),babelHelpers["extends"]({},I,{accessibilityRole:z,children:q}))}else{n=J==="menuitem"||J==="menuitemcheckbox"||J==="menuitemradio"||J==="option"||J==="none"?J:"button";return g.jsx(b("PressableText.react"),babelHelpers["extends"]({},I,{accessibilityRole:n,direction:"none",suppressHydrationWarning:M,children:q}))}}e.exports=g.forwardRef(a)}),null);
__d("CometContextualLayerAnchorRoot.react",["BaseContextualLayerAnchorRoot.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){a=a.children;return g.jsx(b("BaseContextualLayerAnchorRoot.react"),{testid:void 0,children:a})}e.exports=a}),null);
__d("BaseBlueModal.react",["BaseHeadingContext","BasePortal.react","CometContextualLayerAnchorRoot.react","FirstFocusScopeQuery.react","FocusRegion.react","Layer","LayerTabIsolation","ModalLayer","React","TabbableScopeQuery.react","stylex","useStable"],(function(a,b,c,d,e,f){"use strict";var g=b("FocusRegion.react").FocusRegion,h=b("React");c=b("React");var i=c.useLayoutEffect;function a(a){a=a.children;var c=b("useStable")(function(){return document.createElement("div")});i(function(){var a=new(b("Layer"))({addedBehaviors:[b("ModalLayer"),b("LayerTabIsolation")]},c);a.show();return function(){a.destroy()}},[c]);return h.jsx(b("BasePortal.react"),{target:c,children:h.jsx(b("BaseHeadingContext").Provider,{value:1,children:h.jsx("div",{className:"l9j0dhe7 h3gjbzrl",children:h.jsx(b("CometContextualLayerAnchorRoot.react"),{children:h.jsx(g,{autoFocus:!0,autoRecoverFocus:!0,autoRestoreFocus:!0,containFocus:!0,firstFocusQuery:b("FirstFocusScopeQuery.react"),focusQuery:b("TabbableScopeQuery.react"),children:a})})})})})}e.exports=a}),null);
__d("ariaGlimmerProps",["fbt","React"],(function(a,b,c,d,e,f,g){"use strict";b("React");a={"aria-busy":!0,"aria-valuemax":100,"aria-valuemin":0,"aria-valuetext":g._("Carregando..."),role:"progressbar",tabIndex:0};e.exports=a}),null);
__d("CometPressableOverlay.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useState,j={circle:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv"},defaultHoveredStyle:{backgroundColor:"rnr61an3"},defaultPressedStyle:{backgroundColor:"k19f6yf2"},overlay:{borderTopStartRadius:"n00je7tq",borderTopEndRadius:"arfg74bv",borderBottomEndRadius:"qs9ysxi8",borderBottomStartRadius:"k77z8yql",bottom:"i09qtzwb",end:"n7fi1qx3",opacity:"b5wmifdl",pointerEvents:"hzruof5a",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",transitionDuration:"c5ndavph",transitionProperty:"art1omkt",transitionTimingFunction:"ot9fgl3s"},overlayVisible:{opacity:"pedkr2u6",transitionDuration:"akwz6i9j"}};function a(a){var c=a.focusVisible;c=c===void 0?!1:c;var d=a.hovered;d=d===void 0?!1:d;var e=a.hoveredStyle;e=e===void 0?j.defaultHoveredStyle:e;var f=a.offset,k=a.pressed;k=k===void 0?!1:k;var l=a.pressedStyle;l=l===void 0?j.defaultPressedStyle:l;var m=a.radius;a=a.focusVisibleStyle;a=a===void 0?e:a;var n=i(),o=n[0];n=n[1];k?o!=="pressed"&&n("pressed"):c?o!=="focused"&&n("focused"):d&&(o!=="hovered"&&n("hovered"));var p,q,r,s;f!=null&&(typeof f==="number"?(p=-f,q=-f,r=-f,s=-f):(p=-f.bottom,q=-f.left,r=-f.right,s=-f.top));return h.jsx("div",{className:(g||(g=b("stylex")))(j.overlay,(k||c||d)&&j.overlayVisible,o==="pressed"&&l,o==="focused"&&a,o==="hovered"&&e,m==="50%"&&j.circle),"data-novc":"1",style:{borderRadius:typeof m==="number"?m:void 0,bottom:p,left:q,right:r,top:s}})}e.exports=a}),null);
__d("CometPressable.react",["requireCond","cr:1331508","cr:1331507","CometPressableOverlay.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=c.useState,j={expanding:{display:"j83agx80"},hideOutline:{outline:"lzcic4wl"},linkBase:{display:"q9uorilb"},root:{display:"pq6dq46d",flexDirection:"btwxx1t3",userSelect:"abiwlrkh",":hover":{textDecoration:"p8dawk7l"}},root_DEPRECATED:{position:"l9j0dhe7",userSelect:"abiwlrkh",":hover":{textDecoration:"p8dawk7l"}}};function a(a,c){var d=a.children,e=a.className_DEPRECATED,f=a.xstyle,k=a.disabled;k=k===void 0?!1:k;var l=a.display,m=a.expanding;m=m===void 0?l==="block":m;var n=a.hideFocusOverlay;n=n===void 0?!1:n;var o=a.hideHoverOverlay;o=o===void 0?!1:o;var p=a.linkProps,q=a.onFocusChange,r=a.onFocusIn,s=a.onFocusOut,t=a.onFocusVisibleChange,u=a.onHoverChange,v=a.onHoverIn,w=a.onHoverOut,x=a.onPress,y=a.onPressChange,z=a.onPressIn,A=a.onPressOut,B=a.preventContextMenu,C=a.overlayDisabled;C=C===void 0?!1:C;var D=a.overlayOffset,E=a.overlayFocusVisibleStyle,F=a.overlayHoveredStyle,G=a.overlayPressedStyle,H=a.overlayRadius,I=a.testOnly_pressed,J=I===void 0?!1:I;I=a.testid;I=babelHelpers.objectWithoutPropertiesLoose(a,["children","className_DEPRECATED","xstyle","disabled","display","expanding","hideFocusOverlay","hideHoverOverlay","linkProps","onFocusChange","onFocusIn","onFocusOut","onFocusVisibleChange","onHoverChange","onHoverIn","onHoverOut","onPress","onPressChange","onPressIn","onPressOut","preventContextMenu","overlayDisabled","overlayOffset","overlayFocusVisibleStyle","overlayHoveredStyle","overlayPressedStyle","overlayRadius","testOnly_pressed","testid"]);a=i(J);var K=a[0],L=a[1];a=i(!1);var M=a[0],N=a[1];a=i(!1);var O=a[0],P=a[1];a=i(!1);var Q=a[0],R=a[1];a=h(function(a){L(a||J),y&&y(a)},[y,J]);var S=h(function(a){N(a),q&&q(a)},[q]),T=h(function(a){P(a),t&&t(a)},[t]),U=h(function(a){R(a),u&&u(a)},[u]);C=C?null:g.jsx(b("CometPressableOverlay.react"),{focusVisible:!n&&O,focusVisibleStyle:E,hovered:!o&&Q,hoveredStyle:F,offset:D,pressed:K,pressedStyle:G,radius:H});n=typeof d==="function"?d({disabled:k,focusVisible:O,focused:M,hovered:Q,overlay:C,pressed:K}):g.jsxs(g.Fragment,{children:[d,C]});E=typeof f==="function"?f({disabled:k,focusVisible:O,focused:M,hovered:Q,pressed:K}):f;o=[l==="inline"?j.root_DEPRECATED:j.root,m&&j.expanding,p!=null&&j.linkBase,!O&&j.hideOutline,E];F={onBlur:s,onClick:x,onFocus:r,onFocusChange:S,onFocusVisibleChange:T,onHoverChange:U,onHoverEnd:w,onHoverStart:v,onPressChange:a,onPressEnd:A,onPressStart:z};if(p!=null){D=p.url;G=babelHelpers.objectWithoutPropertiesLoose(p,["url"]);H=babelHelpers["extends"]({},G,{href:D});return g.jsx(b("cr:1331507"),babelHelpers["extends"]({},F,I,H,{className_DEPRECATED:e,disabled:k,display:l==="inline"?l:"block",preventContextMenu:B,ref:c,testid:void 0,xstyle:o,children:n}))}return g.jsx(b("cr:1331508"),babelHelpers["extends"]({},F,I,{className_DEPRECATED:e,disabled:k,display:l==="inline"?l:"block",preventContextMenu:B,ref:c,testid:void 0,xstyle:o,children:n}))}e.exports=g.forwardRef(a)}),null);
__d("IconSource",[],(function(a,b,c,d,e,f){"use strict";a=function(a,b,c){this.src=b,this.size=c};e.exports=a}),null);
__d("TintableIconSource",["IconSource"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("IconSource"));e.exports=a}),null);
__d("CometTintedIcon.react",["BaseImage.react","React","TintableIconSource","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={colorFDSBlue60:{filter:"op6gxeva"},colorFDSBlueLink:{filter:"m2dz0pri"},colorFDSGray30:{filter:"dfmqs5qf"},colorFDSGray45:{filter:"cwsop09l"},colorFDSGray70:{filter:"m6k467ps"},colorFDSGray100:{filter:"lzf7d6o1"},colorFDSPositive:{filter:"pya715lg"},colorFDSNegative:{filter:"luk0pkue"},colorFDSWhite:{filter:"eb18blue"},colorFDSYellow20:{filter:"rs2r797s"},image:{verticalAlign:"hu5pjgll"}};function a(a){var c=a.alt;c=c===void 0?"":c;var d=a.color;d=d===void 0?"fds-black":d;var e=a.draggable,f=a.icon,j=a.testid;a=a.xstyle;var k=f instanceof b("TintableIconSource");return h.jsx(b("BaseImage.react"),{alt:c,className:(g||(g=b("stylex")))(i.image,k&&d==="fds-blue-60"&&i.colorFDSBlue60,k&&d==="fds-gray-30"&&i.colorFDSGray30,k&&d==="fds-gray-45"&&i.colorFDSGray45,k&&d==="fds-gray-70"&&i.colorFDSGray70,k&&d==="fds-primary-icon"&&i.colorFDSGray100,k&&d==="fds-positive"&&i.colorFDSPositive,k&&d==="fds-negative"&&i.colorFDSNegative,k&&d==="fds-white"&&i.colorFDSWhite,k&&d==="fds-yellow-20"&&i.colorFDSYellow20,k&&d==="fds-blue-link"&&i.colorFDSBlueLink,a),draggable:e,src:f.src,testid:j})}e.exports=a}),null);
__d("ImageIconSource",[],(function(a,b,c,d,e,f){"use strict";a=function(a,b,c,d){d===void 0&&(d="cover"),this.src=a,this.width=b,this.height=c,this.resizeStrategy=d};e.exports=a}),null);
__d("TetraIcon.react",["BaseImage.react","CometPressable.react","CometTintedIcon.react","IconSource","ImageIconSource","React","TintableIconSource","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={button:{appearance:"dwo3fsh8",backgroundColor:"g5ia77u1",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopWidth:"rt8b4zig",borderEndWidth:"n8ej3o3l",borderBottomWidth:"agehan2d",borderStartWidth:"sk4xxmp2",display:"pq6dq46d",marginTop:"kvgmc6g5",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"hcukyx3x",paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso",position:"l9j0dhe7",verticalAlign:"pzggbiyp","::after":{borderTopStartRadius:"pkj7ub1o",borderTopEndRadius:"bqnlxs5p",borderBottomEndRadius:"kkg9azqs",borderBottomStartRadius:"c24pa1uk",bottom:"ln9iyx3p",content:"fe6kdd0r",end:"ar1oviwq",position:"l10q8mi9",start:"sq40qgkc",top:"s8quxz6p",zIndex:"pdjglbur"}},image:{verticalAlign:"hu5pjgll"},imageContain:{objectFit:"r50dw9up"},imageCover:{objectFit:"bixrwtb6"},pressed:{transform:"mtfd0dr2"}};function a(a,c){var d=a.alt;d=d===void 0?"":d;var e=a.color;e=e===void 0?a.disabled===!0?"disabled":"primary":e;var f=a.disabled;f=f===void 0?!1:f;var k=a.disableOverlay_DEPRECATED;k=k===void 0?!1:k;a.draggable;var l=a.focusable,m=a.hideHoverOverlay;m=m===void 0?!1:m;var n=a.icon,o=a.onHoverIn,p=a.onHoverOut,q=a.onPress,r=a.onPressIn,s=a.onPressOut,t=a.linkProps,u=a.size;u=u===void 0?8:u;var v=a.testid,w=a.testOnly_pressed;w=w===void 0?!1:w;var x=babelHelpers.objectWithoutPropertiesLoose(a,["alt","color","disabled","disableOverlay_DEPRECATED","draggable","focusable","hideHoverOverlay","icon","onHoverIn","onHoverOut","onPress","onPressIn","onPressOut","linkProps","size","testid","testOnly_pressed"]);v=q==null?v:void 0;a=n instanceof b("TintableIconSource")?h.jsx(b("CometTintedIcon.react"),{alt:d,color:j(e),draggable:a.draggable,icon:n,testid:void 0}):n instanceof b("ImageIconSource")?h.jsx(b("BaseImage.react"),{alt:d,className:(g||(g=b("stylex")))(i.image,n.resizeStrategy==="contain"?i.imageContain:null,n.resizeStrategy==="cover"?i.imageCover:null),draggable:a.draggable,src:n.src,style:{height:n.height,width:n.width},testid:void 0}):n instanceof b("IconSource")?h.jsx(b("BaseImage.react"),{alt:d,className:(g||(g=b("stylex")))(i.image),draggable:a.draggable,height:n.size,src:n.src,width:n.size}):h.createElement(n,{alt:d,color:e,"data-testid":v,size:u});return q!=null||t!=null?h.jsx(b("CometPressable.react"),babelHelpers["extends"]({},x,{disabled:f,focusable:l,hideHoverOverlay:m,linkProps:t,onHoverIn:o,onHoverOut:p,onPress:q,onPressIn:r,onPressOut:s,overlayDisabled:k,overlayOffset:8,overlayRadius:"50%",ref:c,testOnly_pressed:w,testid:void 0,xstyle:function(a){a=a.pressed;return[i.button,a&&i.pressed]},children:a})):a}function j(a){switch(a){case"positive":return"fds-positive";case"negative":return"fds-negative";case"disabled":return"fds-gray-30";case"highlight":return"fds-blue-60";case"secondary":return"fds-gray-70";case"tertiary":return"fds-gray-45";case"white":return"fds-white";case"warning":return"fds-yellow-20";case"blueLink":return"fds-blue-link";default:return"fds-primary-icon"}}e.exports=h.forwardRef(a)}),null);
__d("fbicon",["TintableIconSource","memoizeWithArgs","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";function a(a,c){throw b("unrecoverableViolation")("fbicon.filled"+("("+JSON.stringify(a)+", "+c+"): ")+"Unexpected fbicon.filled reference.","comet_ui")}function c(a,c){throw b("unrecoverableViolation")("fbicon.outline"+("("+JSON.stringify(a)+", "+c+"): ")+"Unexpected fbicon.outline reference.","comet_ui")}d=b("memoizeWithArgs")(function(a,c){return new(b("TintableIconSource"))("FB",a,c)},function(a,c){if(typeof a==="object"){if(a.sprited===!0&&a.spriteMapCssClass&&a.spriteCssClass)return a.spriteMapCssClass+"/"+a.spriteCssClass+":"+c;else if(typeof a.uri==="string")return a.uri+":"+c}else if(typeof a==="string")return a+":"+c;throw b("unrecoverableViolation")("fbicon._: Invalid icon provided.","comet_ui")});f={_:d,filled:a,outline:c};e.exports=f}),null);
__d("formatDurationSeconds",["fbt","padNumber"],(function(a,b,c,d,e,f,g){function a(a){var c=Math.floor(a/3600),d=Math.floor(a/60%60);a=Math.floor(a%60);if(c)return g._("{hours}:{minutes}:{seconds}",[g._param("hours",c),g._param("minutes",b("padNumber")(d,2)),g._param("seconds",b("padNumber")(a,2))]);else return g._("{minutes}:{seconds}",[g._param("minutes",d),g._param("seconds",b("padNumber")(a,2))])}e.exports=a}),null);
__d("enumUtils",["nullthrows","objectValues"],(function(a,b,c,d,e,f){function g(a,c){return b("objectValues")(c).find(function(b){return b===a})}function a(a,b){return a==null?null:g(a,b)}function h(a,c){return b("nullthrows")(g(a,c))}function c(a,b){var c=[];for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;c.push(h(f,b))}return c}function i(a,b){return(b=b[a])!=null?b:null}function j(a,c){return b("nullthrows")(i(a,c))}function d(a,b){var c=[];for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;c.push(j(f,b))}return c}function k(a,b){var c;Object.keys(b).forEach(function(d){b[d]===a&&(c=d)});return c}function f(a,c){return b("nullthrows")(k(a,c))}e.exports={assert:h,assertFromKey:j,assertIterable:c,assertIterableFromKey:d,coerce:g,coerceFromKey:i,coerceNullable:a,enumValueToKey:k,enumValueToKeyEnforcing:f}}),null);
__d("useBoolean",["React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=c.useState;function a(a){a=h(a);var b=a[0],c=a[1];return{value:b,set:c,toggle:g(function(){return c(function(a){return!a})},[]),setTrue:g(function(){return c(!0)},[]),setFalse:g(function(){return c(!1)},[])}}e.exports=a}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("resize-observer-polyfill-1.5.1",[],(function(a,b,c,d,e,f){"use strict";var g={},h={exports:g},i;function j(){(function(b,c){typeof g==="object"&&typeof h!=="undefined"?h.exports=c():typeof i==="function"&&i.amd?i(c):b.ResizeObserver=c()})(this,function(){var b=function(){if(typeof Map!=="undefined")return Map;function a(a,b){var c=-1;a.some(function(d,a){if(d[0]===b){c=a;return!0}return!1});return c}return function(){function b(){this.__entries__=[]}Object.defineProperty(b.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0});b.prototype.get=function(b){b=a(this.__entries__,b);b=this.__entries__[b];return b&&b[1]};b.prototype.set=function(c,d){var b=a(this.__entries__,c);~b?this.__entries__[b][1]=d:this.__entries__.push([c,d])};b.prototype["delete"]=function(b){var c=this.__entries__;b=a(c,b);~b&&c.splice(b,1)};b.prototype.has=function(b){return!!~a(this.__entries__,b)};b.prototype.clear=function(){this.__entries__.splice(0)};b.prototype.forEach=function(a,b){b===void 0&&(b=null);for(var c=0,d=this.__entries__;c<d.length;c++){var e=d[c];a.call(b,e[1],e[0])}};return b}()}(),c=typeof window!=="undefined"&&typeof document!=="undefined"&&window.document===document,d=function(){if(typeof a!=="undefined"&&a.Math===Math)return a;if(typeof self!=="undefined"&&self.Math===Math)return self;return typeof window!=="undefined"&&window.Math===Math?window:Function("return this")()}(),e=function(){return typeof requestAnimationFrame==="function"?requestAnimationFrame.bind(d):function(a){return setTimeout(function(){return a(Date.now())},1e3/60)}}(),f=2;function g(a,b){var c=!1,d=!1,g=0;function h(){c&&(c=!1,a()),d&&j()}function i(){e(h)}function j(){var a=Date.now();if(c){if(a-g<f)return;d=!0}else c=!0,d=!1,setTimeout(i,b);g=a}return j}var h=20,i=["top","right","bottom","left","width","height","size","weight"],j=typeof MutationObserver!=="undefined",k=function(){function a(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=g(this.refresh.bind(this),h)}a.prototype.addObserver=function(a){~this.observers_.indexOf(a)||this.observers_.push(a),this.connected_||this.connect_()};a.prototype.removeObserver=function(b){var a=this.observers_;b=a.indexOf(b);~b&&a.splice(b,1);!a.length&&this.connected_&&this.disconnect_()};a.prototype.refresh=function(){var a=this.updateObservers_();a&&this.refresh()};a.prototype.updateObservers_=function(){var a=this.observers_.filter(function(a){return a.gatherActive(),a.hasActive()});a.forEach(function(a){return a.broadcastActive()});return a.length>0};a.prototype.connect_=function(){if(!c||this.connected_)return;document.addEventListener("transitionend",this.onTransitionEnd_);window.addEventListener("resize",this.refresh);j?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0);this.connected_=!0};a.prototype.disconnect_=function(){if(!c||!this.connected_)return;document.removeEventListener("transitionend",this.onTransitionEnd_);window.removeEventListener("resize",this.refresh);this.mutationsObserver_&&this.mutationsObserver_.disconnect();this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh);this.mutationsObserver_=null;this.mutationEventsAdded_=!1;this.connected_=!1};a.prototype.onTransitionEnd_=function(a){a=a.propertyName;var b=a===void 0?"":a;a=i.some(function(a){return!!~b.indexOf(a)});a&&this.refresh()};a.getInstance=function(){this.instance_||(this.instance_=new a());return this.instance_};a.instance_=null;return a}(),l=function(a,b){for(var c=0,d=Object.keys(b);c<d.length;c++){var e=d[c];Object.defineProperty(a,e,{value:b[e],enumerable:!1,writable:!1,configurable:!0})}return a},m=function(a){a=a&&a.ownerDocument&&a.ownerDocument.defaultView;return a||d},n=x(0,0,0,0);function o(a){return parseFloat(a)||0}function p(a){var b=[];for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];return b.reduce(function(b,c){c=a["border-"+c+"-width"];return b+o(c)},0)}function q(a){var b=["top","right","bottom","left"],c={};for(var d=0,b=b;d<b.length;d++){var e=b[d],f=a["padding-"+e];c[e]=o(f)}return c}function r(a){a=a.getBBox();return x(0,0,a.width,a.height)}function s(a){var b=a.clientWidth,c=a.clientHeight;if(!b&&!c)return n;var d=m(a).getComputedStyle(a),e=q(d),f=e.left+e.right,g=e.top+e.bottom,h=o(d.width),i=o(d.height);d.boxSizing==="border-box"&&(Math.round(h+f)!==b&&(h-=p(d,"left","right")+f),Math.round(i+g)!==c&&(i-=p(d,"top","bottom")+g));if(!u(a)){d=Math.round(h+f)-b;a=Math.round(i+g)-c;Math.abs(d)!==1&&(h-=d);Math.abs(a)!==1&&(i-=a)}return x(e.left,e.top,h,i)}var t=function(){return typeof SVGGraphicsElement!=="undefined"?function(a){return a instanceof m(a).SVGGraphicsElement}:function(a){return a instanceof m(a).SVGElement&&typeof a.getBBox==="function"}}();function u(a){return a===m(a).document.documentElement}function v(a){if(!c)return n;return t(a)?r(a):s(a)}function w(a){var b=a.x,c=a.y,d=a.width;a=a.height;var e=typeof DOMRectReadOnly!=="undefined"?DOMRectReadOnly:Object;e=Object.create(e.prototype);l(e,{x:b,y:c,width:d,height:a,top:c,right:b+d,bottom:a+c,left:b});return e}function x(a,b,c,d){return{x:a,y:b,width:c,height:d}}var y=function(){function a(a){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=x(0,0,0,0),this.target=a}a.prototype.isActive=function(){var a=v(this.target);this.contentRect_=a;return a.width!==this.broadcastWidth||a.height!==this.broadcastHeight};a.prototype.broadcastRect=function(){var a=this.contentRect_;this.broadcastWidth=a.width;this.broadcastHeight=a.height;return a};return a}(),z=function(){function a(a,b){b=w(b);l(this,{target:a,contentRect:b})}return a}(),A=function(){function a(a,c,d){this.activeObservations_=[];this.observations_=new b();if(typeof a!=="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=a;this.controller_=c;this.callbackCtx_=d}a.prototype.observe=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(typeof Element==="undefined"||!(Element instanceof Object))return;if(!(a instanceof m(a).Element))throw new TypeError('parameter 1 is not of type "Element".');var b=this.observations_;if(b.has(a))return;b.set(a,new y(a));this.controller_.addObserver(this);this.controller_.refresh()};a.prototype.unobserve=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(typeof Element==="undefined"||!(Element instanceof Object))return;if(!(a instanceof m(a).Element))throw new TypeError('parameter 1 is not of type "Element".');var b=this.observations_;if(!b.has(a))return;b["delete"](a);b.size||this.controller_.removeObserver(this)};a.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)};a.prototype.gatherActive=function(){var a=this;this.clearActive();this.observations_.forEach(function(b){b.isActive()&&a.activeObservations_.push(b)})};a.prototype.broadcastActive=function(){if(!this.hasActive())return;var a=this.callbackCtx_,b=this.activeObservations_.map(function(a){return new z(a.target,a.broadcastRect())});this.callback_.call(a,b,a);this.clearActive()};a.prototype.clearActive=function(){this.activeObservations_.splice(0)};a.prototype.hasActive=function(){return this.activeObservations_.length>0};return a}(),B=typeof WeakMap!=="undefined"?new WeakMap():new b(),C=function(){function a(b){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var c=k.getInstance(),d=new A(b,c,this);B.set(this,d)}return a}();["observe","unobserve","disconnect"].forEach(function(a){C.prototype[a]=function(){var b;return(b=B.get(this))[a].apply(b,arguments)}});var D=function(){return typeof d.ResizeObserver!=="undefined"?d.ResizeObserver:C}();return D})}var k=!1,l=function(){k||(k=!0,j());return h.exports};b=function(a){switch(a){case void 0:return l()}};e.exports=b}),null);
__d("resize-observer-polyfill",["resize-observer-polyfill-1.5.1"],(function(a,b,c,d,e,f){e.exports=b("resize-observer-polyfill-1.5.1")()}),null);
__d("useResizeObserver",["FBLogger","React","ReactDOMComet","gkx","resize-observer-polyfill","uniqueID","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=c.useRef;function a(a){var c=h(null),d=h(a);b("useLayoutEffect_SAFE_FOR_SSR")(function(){d.current=a},[a]);return g(function(b){var a=function(a,b,c){d.current&&d.current(a,b,c)};b=b==null?null:n(b,a);c.current&&c.current();c.current=b},[])}var i=null,j=new Map();function k(){i==null&&(i=new(b("resize-observer-polyfill"))(m));return i}function l(a){return b("gkx")("1050822")?b("ReactDOMComet").unstable_batchedUpdates(a):a()}function m(a){var c=new Map(a.map(function(a){return[a.target,a.contentRect]})),d=new Set(j.keys());l(function(){for(var a=c,e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;var h=g[0];g=g[1];var i=j.get(h);if(i!=null)for(var i=i,k=Array.isArray(i),l=0,i=k?i:i[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var m;if(k){if(l>=i.length)break;m=i[l++]}else{l=i.next();if(l.done)break;m=l.value}m=m;m=m[1];try{m(g,h,c)}catch(a){b("FBLogger")("useResizeObserver").catching(a)}}else d.has(h)||b("FBLogger")("useResizeObserver").mustfix("ResizeObserver observed resizing of an element that it should not be observing")}})}function n(a,c){var d,e=b("uniqueID")();d=(d=j.get(a))!=null?d:new Map();d.set(e,c);j.set(a,d);k().observe(a);return o(a,e)}function o(a,b){return function(){var c=j.get(a);if(c==null)return;c["delete"](b);c.size===0&&(k().unobserve(a),j["delete"](a))}}e.exports=a}),null);
__d("useContentRect",["React","useResizeObserver"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=c.useState;function a(){var a=h(null),c=a[0],d=a[1];a=g(function(a){return d(a)},[]);a=b("useResizeObserver")(a);return[c,a]}e.exports=a}),null);
__d("useMergeRefs",["React","mergeRefs"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useMemo;function a(a,c){return g(function(){return b("mergeRefs")(a,c)},[a,c])}e.exports=a}),null);
__d("usePrevious",["React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useEffect,h=c.useRef;function a(a){var b=h(null);g(function(){b.current=a});return b.current}e.exports=a}),null);
__d("useSuspenseTransition",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");e.exports=a.useTransition}),null);
__d("ObserveResize.react",["useResizeObserver"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.onResize;a=a.children;c=b("useResizeObserver")(c);return a(c)}e.exports=a}),null);
__d("requireDeferredForDisplay",["requireDeferred"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("requireDeferred").call(null,a)}e.exports=a}),null);
__d("HeroTracingMetrics",[],(function(a,b,c,d,e,f){"use strict";var g=new Map();function h(a,b){a=g.get(a);if(a==null)return;a.completed==null&&b(a)}a=function(){function a(){}var b=a.prototype;b.start=function(a,b,c,d,e,f){b={metadata:{},start:b,subSpans:{},traceId:a,type:c,qplEvent:e,interactionClass:d,tracePolicy:f};g.set(a,b);return b};b.end=function(a,b){a=g.get(a);a&&(a.completed=b)};b.addSubspan=function(a,b,c,d,e,f){h(a,function(a){var g={data:f,end:e,start:d,type:c};a.subSpans[b]?a.subSpans[b].push(g):a.subSpans[b]=[g]})};b.get=function(a){return g.get(a)};return a}();e.exports=new a()}),null);
__d("InteractionTracingLoomProviderBlue",["HeroTracingMetrics","performanceNavigationStart"],(function(a,b,c,d,e,f){"use strict";var g=b("performanceNavigationStart")(),h=function(){var c=a.prototype;c.$2=function(a,b){var c=this.$1;if(!c)return;c.buffer.addEvent(a,g+b)};c.$3=function(a,b,c){var d=this,e=a.subSpans;c=function(c){e[c].forEach(function(e,f){if(e.type==="HeroTracing"){f={blockName:c+"_"+f,blockType:e.type,execUnitName:c,traceId:b,traceType:a.type};d.$2(babelHelpers["extends"]({type:"INTERACTION_TRACE_START"},f),e.start);d.$2(babelHelpers["extends"]({blockAnnotations:e.data,type:"INTERACTION_TRACE_END"},f),e.end)}})};for(var f in e)c(f)};function a(a){this.$1=a}c.loomTraceWillEnd=function(){var a=this.$1;if(!a)return;a=a.triggerInfo;if(a.type==="INTERACTION"&&a.interaction_id!=null){a=b("HeroTracingMetrics").get(a.interaction_id);a&&this.$3(a,a.traceId,a.qplEvent)}};return a}();e.exports={loomProviderId:"InteractionTracing",isSupported:function(){return!0},getInstance:function(a){return new h(a)}}}),null);
__d("VisualCompletionLoomProviderBlue",[],(function(a,b,c,d,e,f){"use strict";var g=function(){function a(){}var b=a.prototype;b.loomTraceDidBegin=function(a){};b.loomTraceWillEnd=function(){};return a}();e.exports={loomProviderId:"VisualCompletion",isSupported:function(){return!1},getInstance:function(a){return new g()}}}),null);