if (self.CavalryLogger) { CavalryLogger.start_js(["WEjeM"]); }

__d("BUIComponent",["React"],(function(a,b,c,d,e,f){"use strict";b("React");a=b("React");c=a.Component;d=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(c);e.exports=d}),null);
__d("AbstractActionList.react",["React","ReactFragment"],(function(a,b,c,d,e,f){var g=b("React"),h=g.jsx("span",{"aria-hidden":"true",children:" \xb7 "});a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=!0,c=g.Children.map(this.props.children,function(c){if(!c)return c;if(a){a=!1;return c}return b("ReactFragment").create({BULLET:h,child:c})});return g.jsx("div",babelHelpers["extends"]({},this.props,{children:c}))};return c}(g.Component);e.exports=a}),null);
__d("ActionList.react",["AbstractActionList.react","React","joinClasses"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return g.jsx(b("AbstractActionList.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"fsm fwn fcg"),children:this.props.children}))};return c}(g.Component);e.exports=a}),null);
__d("ScrollableArea.react",["cx","Bootloader","React","ReactDOM","ScrollBoundaryContain","Style","SubscriptionsHandler","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i="uiScrollableArea native",j="uiScrollableAreaWrap scrollable",k="uiScrollableAreaBody",l="uiScrollableAreaContent";a=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;d.$4=function(a){if(d.$2)return;d.$1=a.fromNative(b("ReactDOM").findDOMNode(d.refs.root),{fade:d.props.fade,persistent:d.props.persistent,shadow:d.props.shadow===void 0?!0:d.props.shadow,tabIndex:d.props.tabIndex});d.$5();(d.props.onScroll||d.props.onEndReached||d.props.onTopReached)&&d.$1&&d.$1.subscribe("scroll",d.$6)};d.$6=function(){d.props.onScroll&&d.props.onScroll(),d.$1&&d.$1.isScrolledToBottom()?d.props.onEndReached&&d.props.onEndReached():d.$1&&d.$1.isScrolledToTop()&&(d.props.onTopReached&&d.props.onTopReached())};d.$3=new(b("SubscriptionsHandler"))();return d}var d=c.prototype;d.render=function(){var a={height:this.props.height},c=Object.assign({},this.props);delete c.maxHeight;delete c.fade;delete c.persistent;delete c.contain;return h.jsx("div",babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,i),ref:"root",role:this.props.role,style:babelHelpers["extends"]({},this.props.style||{},a),children:h.jsx("div",{className:j,ref:"wrap",role:this.props.role,style:{maxHeight:this.props.maxHeight},children:h.jsx("div",{className:k,ref:"body",role:this.props.role,children:h.jsx("div",{className:l,role:this.props.contentRole||this.props.role,children:this.props.children})})})}))};d.getArea=function(){return this.$1};d.setScrollTop=function(a,b,c){this.$1&&this.$1.setScrollTop(a,b,c)};d.getScrollTop=function(){return this.$1&&this.$1.getScrollTop()||0};d.componentDidMount=function(){var a=b("Bootloader").loadModules(["ScrollableArea"],this.$4,"ScrollableArea.react");this.$3.addSubscriptions(a);a=b("ReactDOM").findDOMNode(this.refs.wrap);if(a&&this.props.contain){a=b("ScrollBoundaryContain").applyToElem(a);a&&this.$3.addSubscriptions(a)}};d.componentDidUpdate=function(a){a.width!==this.props.width&&this.$5();a=this.getArea();a&&a.throttledAdjustGripper()};d.componentWillUnmount=function(){this.$1&&this.$1.destroy(),this.$2=!0,this.$3.release()};d.$5=function(){var a=b("ReactDOM").findDOMNode(this.refs.body);b("Style").set(a,"width",this.props.width+"px")};return c}(h.Component);a.propTypes={width:(c=b("prop-types")).number,height:c.oneOfType([c.number,c.string]),maxHeight:c.oneOfType([c.number,c.string]),onScroll:c.func,onEndReached:c.func,onTopReached:c.func,shadow:c.bool,fade:c.bool,persistent:c.bool,role:c.string,contentRole:c.string,contain:c.bool};a.defaultProps={contain:!0};e.exports=a}),null);
__d("InputSelection",["DOM","Focus"],(function(a,b,c,d,e,f){a={get:function(a){try{if(typeof a.selectionStart==="number")return{start:a.selectionStart,end:a.selectionEnd}}catch(a){return{start:0,end:0}}if(!document.selection)return{start:0,end:0};var c=document.selection.createRange();if(c.parentElement()!==a)return{start:0,end:0};var d=a.value.length;if(b("DOM").isNodeOfType(a,"input"))return{start:-c.moveStart("character",-d),end:-c.moveEnd("character",-d)};else{var e=c.duplicate();e.moveToElementText(a);e.setEndPoint("StartToEnd",c);a=d-e.text.length;e.setEndPoint("StartToStart",c);return{start:d-e.text.length,end:a}}},set:function(a,c,d){c=c;d=d;d===void 0&&(d=c);if(document.selection){if(a.tagName=="TEXTAREA"){var e=(a.value.slice(0,c).match(/\r/g)||[]).length,f=(a.value.slice(c,d).match(/\r/g)||[]).length;c-=e;d-=e+f}e=a.createTextRange();e.collapse(!0);e.moveStart("character",c);e.moveEnd("character",d-c);e.select()}else a.selectionStart=c,a.selectionEnd=Math.min(d,a.value.length),b("Focus").set(a)}};e.exports=a}),null);
__d("PopoverMenuOverlappingBorder",["cx","CSS","DOM","Style","shield"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a){this._popoverMenu=a,this._popover=a.getPopover(),this._triggerElem=a.getTriggerElem()}var c=a.prototype;c.enable=function(){this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",b("shield")(this._onSetMenu,this))};c.disable=function(){this._popoverMenu.unsubscribe(this._setMenuSubscription),this._setMenuSubscription=null,this._removeBorderSubscriptions(),this._removeShortBorder()};c._onSetMenu=function(){this._removeBorderSubscriptions();this._menu=this._popoverMenu.getMenu();this._renderShortBorder(this._menu.getRoot());this._showSubscription=this._popover.subscribe("show",b("shield")(this._updateBorder,this));var a=this._updateBorder.bind(this);this._menuSubscription=this._menu.subscribe(["change","resize"],function(){setTimeout(a,0)});this._updateBorder()};c._updateBorder=function(){var a=this._menu.getRoot(),c=this._triggerElem.offsetWidth;a=Math.max(a.offsetWidth-c,0);b("Style").set(this._shortBorder,"width",a+"px")};c._renderShortBorder=function(a){this._shortBorder=b("DOM").create("div",{className:"_54hx"}),b("DOM").appendContent(a,this._shortBorder),b("CSS").addClass(a,"_54hy")};c._removeShortBorder=function(){this._shortBorder&&(b("DOM").remove(this._shortBorder),this._shortBorder=null,b("CSS").removeClass(this._popoverMenu.getMenu().getRoot(),"_54hy"))};c._removeBorderSubscriptions=function(){this._showSubscription&&(this._popover.unsubscribe(this._showSubscription),this._showSubscription=null),this._menuSubscription&&(this._menu.unsubscribe(this._menuSubscription),this._menuSubscription=null)};return a}();Object.assign(a.prototype,{_shortBorder:null,_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});e.exports=a}),null);
__d("Popup",["isTruthy"],(function(a,b,c,d,e,f){a={open:function(a,c,d,e){var f=[];b("isTruthy")(c)&&f.push("width="+c);b("isTruthy")(d)&&f.push("height="+d);var g=document.body;if(g!=null&&c!=null&&c!==0&&d!=null&&d!==0){var h="screenX"in window?window.screenX:window.screenLeft,i="screenY"in window?window.screenY:window.screenTop,j="outerWidth"in window?window.outerWidth:g.clientWidth;g="outerHeight"in window?window.outerHeight:g.clientHeight-22;h=Math.floor(h+(j-c)/2);j=Math.floor(i+(g-d)/2.5);f.push("left="+h);f.push("top="+j)}f.push("scrollbars");return window.open(a,e!=null&&e!==""?e:"_blank",f.join(","))}};e.exports=a}),null);
__d("PopupWindow",["DOMDimensions","DOMQuery","Layer","Popup","getViewportDimensions"],(function(a,b,c,d,e,f){var g={_opts:{allowShrink:!0,strategy:"vector",timeout:100,widthElement:null},init:function(a){Object.assign(g._opts,a),setInterval(g._resizeCheck,g._opts.timeout)},_resizeCheck:function(){var a=b("getViewportDimensions")(),c=g._getDocumentSize(),d=b("Layer").getTopmostLayer();if(d){d=d.getRoot().firstChild;var e=b("DOMDimensions").getElementDimensions(d);e.height+=b("DOMDimensions").measureElementBox(d,"height",!0,!0,!0);e.width+=b("DOMDimensions").measureElementBox(d,"width",!0,!0,!0);c.height=Math.max(c.height,e.height);c.width=Math.max(c.width,e.width)}d=c.height-a.height;e=c.width-a.width;e<0&&!g._opts.widthElement&&(e=0);e=e>1?e:0;!g._opts.allowShrink&&d<0&&(d=0);if(d||e)try{window.console&&window.console.firebug,window.resizeBy(e,d),e&&window.moveBy(e/-2,0)}catch(a){}},_getDocumentSize:function(){var c=b("DOMDimensions").getDocumentDimensions();g._opts.strategy==="offsetHeight"&&(c.height=document.body.offsetHeight);if(g._opts.widthElement){var d=b("DOMQuery").scry(document.body,g._opts.widthElement)[0];d&&(c.width=b("DOMDimensions").getElementDimensions(d).width)}d=a.Dialog;d&&d.max_bottom&&d.max_bottom>c.height&&(c.height=d.max_bottom);return c},open:function(a,c,d,e){return b("Popup").open(a,d,c,e)}};e.exports=g}),null);
__d("WIGCardedDialog.react",["CometCardedDialog.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("CometCardedDialog.react"),babelHelpers["extends"]({},a))}e.exports=a}),null);
__d("PageContentTabSuccessDialog.react",["cx","ix","Image.react","React","XUIDialog.react","XUIDialogBody.react","prop-types"],(function(a,b,c,d,e,f,g,h){var i=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return i.jsx(b("XUIDialog.react"),{width:344,shown:!0,layerHideOnBlur:!1,layerFadeOnShow:!0,children:i.jsxs(b("XUIDialogBody.react"),{className:"_--l",children:[i.jsx(b("Image.react"),{src:h("101769"),className:"_--n"}),i.jsx("div",{className:"_--o",children:this.props.successLabel})]})})};return c}(i.Component);a.propTypes={successLabel:b("prop-types").node};e.exports=a}),null);
__d("ShowWaitTimeAreasMode",["URI"],(function(a,b,c,d,e,f){"use strict";var g,h=!!new(g||b("URI"))(window.location.href).getQueryData().showwaitareas;a={disable:function(){h=!1},enable:function(){h=!0},isEnabled:function(){return h}};e.exports=a}),null);
__d("WaitTimeArea.react",["cx","PerfHelperUtils","React","ShowWaitTimeAreasMode","WaitTimeContext"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useMemo,j=b("PerfHelperUtils").BorderedComponent;function k(a){var b=a.name;a=a.children;return h.jsx(j,{color:"green",tooltip:b,className:"_68qf",children:a})}function a(a){var c=a.name,d=a.owner;a=a.children;var e=i(function(){return{waitTimeAreaName:c,waitTimeAreaOwner:d}},[c,d]);return!b("ShowWaitTimeAreasMode").isEnabled()?h.jsx(b("WaitTimeContext").Provider,{value:e,children:a}):h.jsx(b("WaitTimeContext").Provider,{value:e,children:h.jsx(k,{name:c,children:a||null})})}e.exports=a}),null);
__d("PageContentTabLoadingDialog",["cx","PageContentTabSuccessDialog.react","PageContentTabSuccessDialogTimer","React","ReactDOM","WaitTimeArea.react","XUIDialog.react","XUIDialogBody.react","XUISpinner.react"],(function(a,b,c,d,e,f,g){var h=b("React"),i=b("PageContentTabSuccessDialogTimer").TIME_IN_MS,j=function(c){"use strict";babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.render=function(){return h.jsx(b("WaitTimeArea.react"),{name:"PageContentTabLoadingDialog",owner:"pages_publishing",children:h.jsx(b("XUIDialog.react"),{width:300,shown:!0,layerHideOnBlur:!1,children:h.jsx(b("XUIDialogBody.react"),{className:"_5xp9",children:h.jsx(b("XUISpinner.react"),{background:"light",className:"_5xpe",size:"large"})})})})};return a}(h.Component);a={show:function(){this._container||(this._container=document.createElement("div")),b("ReactDOM").render(h.jsx(j,{}),this._container)},hide:function(){if(!this._container)return;this.destroy()},hideWithSuccessMessage:function(a,c){if(!this._container)return;b("ReactDOM").render(h.jsx(b("PageContentTabSuccessDialog.react"),{successLabel:a}),this._container);setTimeout(this.destroy.bind(this),c?c:i)},destroy:function(){b("ReactDOM").unmountComponentAtNode(this._container),this._container=null}};e.exports=a}),null);
__d("QueryHistory",[],(function(a,b,c,d,e,f){var g={};a={set:function(a,b){g[this._key(a)]=b},get:function(a){return g[this._key(a)]},_key:function(a){return"uri-"+a.getQualifiedURI().toString()}};e.exports=a}),null);
__d("SimpleSearchNavigation",["Arbiter","DOMQuery","Input","QueryHistory","URI"],(function(a,b,c,d,e,f){var g,h=null,i=null;a={registerInput:function(a,c){var d=this;i=b("DOMQuery").scry(a,"input")[0];h&&this._updateTitle(h,c);b("Arbiter").subscribe("page_transition",function(a,c){d._updateTitle(b("QueryHistory").get(c.uri))})},_updateTitle:function(a,c){i&&(b("Input").setValue(i,a||""),i.setAttribute("singlestate",a&&c),i.blur())},setPageTitle:function(a,c){b("QueryHistory").set((g||(g=b("URI"))).getNextURI(),a);i?this._updateTitle(a,c):h=a;c={};b("Arbiter").inform("search/updateNullState",c,"state")},setPageQuery:function(a){b("Arbiter").inform("search/updateNullState",a,"state")}};e.exports=a}),null);
__d("SUIFocusUtil",["Focus","VirtualCursorStatus"],(function(a,b,c,d,e,f){"use strict";a={setFocus:function(a){b("VirtualCursorStatus"),b("Focus").set(a)}};e.exports=a}),null);
__d("SUIThemeContainer.react",["React","SUIThemeContext.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.theme;a=a.children;return g.jsx(b("SUIThemeContext.react").Provider,{value:c,children:a})}e.exports=a}),null);
__d("divisorSignedModulo",[],(function(a,b,c,d,e,f){function a(a,b){return(a%b+b)%b}e.exports=a}),null);
__d("wrapIndex",["divisorSignedModulo"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("divisorSignedModulo")(a,c)}e.exports=a}),null);
__d("SUIActionMenu.react",["cx","Link.react","Locale","React","RTLKeys","SUIFocusUtil","SUISubActionMenuLayer.react","SUITheme","cxMargin","withSUITheme","wrapIndex"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=1,j=4;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={items:d.props.items,highlightedIndex:null,activeSubmenuIndex:null,flattenedEntries:r(d.props.items)},d.$1=null,d.$2=new Map(),d.$5=function(a){var b=d.state.flattenedEntries;b=b[a];b&&q(b.item)&&(b.item.onClick&&b.item.onClick(),d.props.onItemClick&&d.props.onItemClick())},d.$8=function(a){var b=d.state.flattenedEntries;b=b[a];b&&q(b.item)?d.$4(a):d.$4(null)},d.$9=function(a,b,c){d.$4(a,b),d.props.onSubmenuHide&&d.props.onSubmenuHide(c)},d.$10=function(a){var c=d.state,e=c.activeSubmenuIndex;c=c.highlightedIndex;var f=d.state.flattenedEntries,g=0,h=b("RTLKeys").getRight(),i=a.target instanceof HTMLAnchorElement&&a.target.href!=null;switch(a.keyCode){case b("RTLKeys").RETURN:case b("RTLKeys").SPACE:i||a.preventDefault();if(c!==null){i=f[c].item;i.type==="submenu"?d.setState({activeSubmenuIndex:c}):d.$5(c)}break;case b("RTLKeys").UP:a.preventDefault();g=-1;break;case b("RTLKeys").DOWN:a.preventDefault();g=1;break;case h:a.preventDefault();if(c!==null&&e!==c){i=f[c].item;i.type==="submenu"&&d.setState({activeSubmenuIndex:c})}break}if(g===0)return;if(!f.some(function(a){a=a.item;return q(a)}))return;h=d.state.highlightedIndex!==null?b("wrapIndex")(d.state.highlightedIndex+g,f.length):g===1?0:f.length-1;while(!q(f[h].item))h=b("wrapIndex")(h+g,f.length);d.$4(h)},c)||babelHelpers.assertThisInitialized(d)}c.getDerivedStateFromProps=function(a,b){return a.items!==b.items?{flattenedEntries:r(a.items),items:a.items}:null};var d=c.prototype;d.componentDidMount=function(){var a=this;(this.props.focusFirstElementOnMount||this.props.focusItemOnMount)&&(this.$3(),this.$1=window.setTimeout(function(){a.props.focusItemOnMount==null?a.$4(0,!1):a.$4(Math.max(a.props.items.findIndex(function(b){return b===a.props.focusItemOnMount}),0),!1)},0))};d.componentWillUnmount=function(){this.$3()};d.$4=function(a,b){b===void 0&&(b=!1),this.$6(a),this.$7(a,b)};d.$6=function(a){a=a!==null?this.$2.get(a):null;a!=null&&a.focus()};d.$7=function(a,b){b=b?a:null;this.setState({highlightedIndex:a,activeSubmenuIndex:b})};d.$3=function(){this.$1&&(window.clearTimeout(this.$1),this.$1=null)};d.render=function(){var a=this,c=b("SUITheme").get(this).SUIActionMenu,d=this.state.flattenedEntries,e=d.some(function(a){return a.item.type==="submenu"}),f=d.some(function(a){return(a.item.type==="item"||a.item.type==="link"||a.item.type==="submenu")&&a.item.icon!==void 0});return h.jsx("ul",{className:"_2pi2 _6ff6",id:this.props.id,onKeyDown:this.$10,role:"menu",style:{backgroundColor:c.backgroundColor,borderColor:c.borderColor,borderRadius:c.borderRadius,borderWidth:c.borderWidth,paddingLeft:c.horizontalPadding,paddingRight:c.horizontalPadding},tabIndex:"0",children:d.map(function(b,d){var g=b.item;b=b.isIndented;switch(g.type){case"item":case"link":var i={"data-testid":g["data-testid"],description:g.description,hasIconSibling:f,hasSubmenuSibling:e,icon:g.icon,index:d,isDisabled:!!g.isDisabled,isHighlighted:d===a.state.highlightedIndex,isIndented:b,label:g.label,onClick:a.$5,onMouseEnter:a.$8,ref:function(b){return b&&a.$2.set(d,b)},rightContent:g.rightContent,uniform:c};return g.type==="item"?h.createElement(k,babelHelpers["extends"]({},i,{key:d})):h.createElement(k,babelHelpers["extends"]({},i,{href:g.href,key:d,openLinkInNewTab:g.openLinkInNewTab,rel:g.rel}));case"submenu":return h.jsx(l,{behaviors:g.behaviors?g.behaviors:{},hasIconSibling:f,icon:g.icon,index:d,isDisabled:!!g.isDisabled,isHighlighted:d===a.state.highlightedIndex,isIndented:b,isSubmenuOpen:d===a.state.activeSubmenuIndex,items:g.items,label:g.label,onItemClick:a.$5,onSubmenuVisibilityChange:a.$9,onToggle:g.onToggle,position:g.position?g.position:"right",ref:function(b){return b&&a.$2.set(d,b)},uniform:c},d);case"separator":return h.jsx(o,{isIndented:b,uniform:c},d);case"group":return h.jsx(p,{hasSubmenuSibling:e,isFirstItem:d===0,label:g.label,rightContent:g.rightContent,uniform:c},d);default:break}return null})})};return c}(h.Component);a.defaultProps={focusFirstElementOnMount:!1};var k=function(c){babelHelpers.inheritsLoose(a,c);function a(){var a,b;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(a=b=c.call.apply(c,[this].concat(e))||this,b.$1=h.createRef(),b.$2=function(){b.props.onClick(b.props.index)},b.$3=function(){b.props.onMouseEnter(b.props.index)},a)||babelHelpers.assertThisInitialized(b)}var d=a.prototype;d.focus=function(){var a=this.$1.current;a instanceof HTMLElement&&b("SUIFocusUtil").setFocus(a)};d.render=function(){var a=this.props,c=a.description,d=a.hasIconSibling,e=a.hasSubmenuSibling,f=a.href,g=a.icon,i=a.isDisabled,j=a.isHighlighted,k=a.isIndented,l=a.label,o=a.openLinkInNewTab,p=a.rel,q=a.rightContent;a=a.uniform;j=m({isDisabled:i,isHighlighted:j,uniform:a});var r=q!=null;r=!r&&e;e=f!=null&&f!=="";var s="_8l9y";k="_6ff7"+(k?" _6ff8":"")+(r?" _6ff9":"");r=h.jsx(n,{description:c,hasIconSibling:d,icon:g,isDisabled:i,label:l,rightContent:q,uniform:a});c={"aria-disabled":i,"data-testid":this.props["data-testid"],onClick:this.$2,onMouseEnter:this.$3,role:"menuitem",tabIndex:0};return e&&!i?h.jsx("li",{className:s,role:"presentation",children:h.jsx(b("Link.react"),babelHelpers["extends"]({},c,{className:k,href:f,linkRef:this.$1,rel:p,style:j,target:o===!0?"_blank":"_self",children:r}))}):h.jsx("li",babelHelpers["extends"]({},c,{className:s,ref:this.$1,children:h.jsx("div",{className:k,style:j,children:r})}))};return a}(h.PureComponent),l=function(c){babelHelpers.inheritsLoose(a,c);function a(){var a,b;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(a=b=c.call.apply(c,[this].concat(e))||this,b.state={itemRef:null},b.$1=function(a){b.setState({itemRef:a})},b.$2=function(){b.props.onItemClick(b.props.index)},b.$3=function(){b.props.onSubmenuVisibilityChange(b.props.index,!0)},b.$4=function(a){b.props.onSubmenuVisibilityChange(b.props.index,!1,a)},b.$5=function(){return b.state.itemRef},a)||babelHelpers.assertThisInitialized(b)}var d=a.prototype;d.componentDidUpdate=function(a){a.isSubmenuOpen!==this.props.isSubmenuOpen&&this.props.onToggle&&this.props.onToggle(this.props.isSubmenuOpen)};d.componentWillUnmount=function(){this.props.isSubmenuOpen&&this.props.onToggle&&this.props.onToggle(!1)};d.focus=function(){this.state.itemRef!==null&&b("SUIFocusUtil").setFocus(this.state.itemRef)};d.render=function(){var a=this.props,c=a.behaviors;c=c===void 0?{}:c;var d=a.isDisabled,e=a.isSubmenuOpen,f=a.items,g=a.position;g=g===void 0?"right":g;var k=a.uniform,l=a.icon;a=a.hasIconSibling;var n=b("Locale").isRTL(),o=m({isDisabled:this.props.isDisabled,isHighlighted:this.props.isHighlighted,uniform:k}),p={width:k.itemIconWidth};n=n?k.submenuIndicatorRTL:k.submenuIndicatorLTR;var q={};d&&(q.opacity=.5);return h.jsx("li",{className:"_8l9y",onClick:this.$3,onMouseEnter:this.$3,ref:this.$1,role:"menuitem",tabIndex:0,children:h.jsxs("div",{className:"_6ff7 _6ffc"+(this.props.isIndented?" _6ff8":""),style:o,children:[a?h.jsxs("div",{className:"_2pi3 _6vpg"+(k.itemIconAlignment==="center"?" _85sa":""),children:[l&&h.jsx("div",{className:"_6vph",style:p,children:l}),this.props.label]}):this.props.label,h.jsx("div",{className:"_6ffd",style:q,children:n}),d||this.$5()==null?null:h.jsx(b("SUISubActionMenuLayer.react"),{behaviors:c,getContextNode:this.$5,isVisible:e,items:f,offsetY:-1*j-i,onClose:this.$4,onItemClick:this.$2,position:g,uniform:k})]})})};return a}(h.PureComponent);function m(a){var b=a.isDisabled,c=a.isHighlighted;a=a.uniform;var d=babelHelpers["extends"]({},a.itemTypeStyle,{borderRadius:a.itemBorderRadius,color:a.itemColor,minHeight:a.itemHeight});b?(d.cursor="default",d.color=a.disabledItemColor,d.userSelect="none"):c&&(d.color=a.highlightedItemColor,d.backgroundColor=a.highlightedItemBackgroundColor);return d}var n=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}var c=a.prototype;c.render=function(){var a=this.props,b=a.description,c=a.hasIconSibling,d=a.icon,e=a.isDisabled,f=a.label,g=a.rightContent;a=a.uniform;var i=g!=null,j=b!=null,k=d!=null,l=typeof a.itemIconWidth==="number",m={width:a.itemIconWidth};return h.jsxs(h.Fragment,{children:[j||c?h.jsxs("div",{className:"_2pi3 _6vpg"+(a.itemIconAlignment==="center"?" _85sa":""),children:[k||c&&l?h.jsx("div",{className:"_6vph",style:m,children:d}):null,h.jsxs("div",{children:[f,j?h.jsx("div",{style:babelHelpers["extends"]({},a.descriptionTypeStyle,e?{color:a.disabledItemColor}:{}),children:b}):null]})]}):f,i?h.jsx("span",{className:"_3-9a",children:g}):null]})};return a}(h.PureComponent),o=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}var c=a.prototype;c.render=function(){return h.jsx("li",{className:"_6ffg"+(this.props.isIndented?" _6ffh":""),style:{borderColor:this.props.uniform.borderColor}})};return a}(h.PureComponent),p=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}var c=a.prototype;c.render=function(){var a=this.props,b=a.rightContent;a=a.uniform;b=b!=null;b=!b&&this.props.hasSubmenuSibling;return h.jsx("li",{className:"_8lau",children:h.jsxs("div",{className:"_6ffi"+(b?" _6ff9":""),style:babelHelpers["extends"]({},a.headerTypeStyle,{color:a.headerColor,minHeight:a.itemHeight}),children:[this.props.label,this.props.rightContent]})})};return a}(h.PureComponent);function q(a){return(a.type==="item"||a.type==="link"||a.type==="submenu")&&!a.isDisabled}function r(a){var b=[];a.forEach(function(c,d){switch(c.type){case"item":b.push({isIndented:!1,item:c});break;case"link":b.push({isIndented:!1,item:c});break;case"separator":b.push({isIndented:!1,item:c});break;case"submenu":b.push({isIndented:!1,item:c});break;case"group":var e=d===0;e=!e;e&&b.push({isIndented:!1,item:{type:"separator"}});b.push({isIndented:!1,item:c});c.items.forEach(function(a){b.push({isIndented:!0,item:a})});e=d===a.length-1;d=a[d+1];d=d&&(d.type==="group"||d.type==="separator");e=!e&&!d;e&&b.push({isIndented:!1,item:{type:"separator"}});break;default:c.type}});return b}e.exports=b("withSUITheme")(a)}),null);
__d("LayerFitHeightToScreen",["DOMVector","Event","Style","SubscriptionsHandler","Vector","debounce"],(function(a,b,c,d,e,f){var g=12;a=function(){"use strict";function a(a){var c=this;this.$3=function(){var a=c.$1.getContent();for(var d=0;d<2;d++)a&&(a=a.children[0]);if(!a)return;d=b("Vector").getElementPosition(a).y;var e=b("Vector").getViewportDimensions().y,f=b("DOMVector").getScrollPosition().y;e=e-(d-f)-g;b("Style").apply(a,{maxHeight:e+"px",overflowX:"hidden",overflowY:"auto"});c.$1.inform("resize",{height:e})};this.$1=a;this.$2=null}var c=a.prototype;c.enable=function(){this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(b("Event").listen(window,"resize",b("debounce")(this.$3)),this.$1.subscribe("show",this.$3),this.$1.subscribe("reposition",this.$3))};c.disable=function(){this.$2&&(this.$2.release(),this.$2=null)};return a}();e.exports=a}),null);
__d("SUIContextMenuLayerBehaviors",["ContextualLayerAutoFlip","ContextualLayerHideOnScroll","LayerAutoFocus","LayerFitHeightToScreen","LayerHideOnBlur","LayerHideOnEscape"],(function(a,b,c,d,e,f){"use strict";a={ContextualLayerAutoFlip:b("ContextualLayerAutoFlip"),ContextualLayerHideOnScroll:b("ContextualLayerHideOnScroll"),LayerAutoFocus:b("LayerAutoFocus"),LayerFitHeightToScreen:b("LayerFitHeightToScreen"),LayerHideOnBlur:b("LayerHideOnBlur"),LayerHideOnEscape:b("LayerHideOnEscape")};e.exports=a}),null);
__d("SUISubActionMenuLayer.react",["cssVar","ContextualLayer.react","LayerHideSources","React","RTLKeys","SUIActionMenu.react","SUIContextMenuLayerBehaviors"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){var c=b("RTLKeys").getLeft();a.keyCode===c&&(a.preventDefault(),d.props.onClose())},d.$2=function(a){(a===b("LayerHideSources").BLUR||a===b("LayerHideSources").ESCAPE)&&d.props.onClose(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.behaviors;c=c===void 0?{}:c;var d=a.getContextNode,e=a.isVisible,f=a.onItemClick,g=a.offsetY;g=g===void 0?0:g;var i=a.position;i=i===void 0?"right":i;a=a.uniform;if(!e)return null;a={borderRadius:a==null?void 0:a.borderRadius,boxShadow:(e=a==null?void 0:a.boxShadow)!=null?e:"0 1px 10px rgba(0, 0, 0, 0.2)",minWidth:160};return h.jsx(b("ContextualLayer.react"),{alignment:"left",behaviors:babelHelpers["extends"]({},b("SUIContextMenuLayerBehaviors"),c),contextRef:d,includeHideSource:!0,isStrictlyControlled:!0,offsetY:g,onHide:this.props.onClose,position:i,shouldSetARIAProperties:!0,shown:!0,children:h.jsx("div",{onKeyDown:this.$1,style:a,children:h.jsx(b("SUIActionMenu.react"),{focusFirstElementOnMount:!0,items:this.props.items,onItemClick:f,onSubmenuHide:this.$2})})})};return c}(h.PureComponent);e.exports=a}),null);
__d("isEmail",[],(function(a,b,c,d,e,f){var g=/^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;function a(a){return g.test(a)}e.exports=a}),null);
__d("AbstractTextField.react",["cx","Keys","React","prop-types","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");a=h.Component;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;d.onInputKeyDown=function(a){var c=d.props,e=a.keyCode,f=a.shiftKey;e===b("Keys").BACKSPACE&&!f&&c.onBackspace?c.onBackspace(a):e===b("Keys").TAB&&!f&&c.onTab?c.onTab(a):e===b("Keys").TAB&&f&&c.onBackTab?c.onBackTab(a):e===b("Keys").UP?f?c.onShiftUpArrow&&c.onShiftUpArrow(a):c.onUpArrow&&c.onUpArrow(a):e===b("Keys").DOWN&&c.onDownArrow?f?c.onShiftDownArrow&&c.onShiftDownArrow(a):c.onDownArrow&&c.onDownArrow(a):e===b("Keys").LEFT&&c.onLeftArrow?c.onLeftArrow(a):e===b("Keys").RIGHT&&c.onRightArrow?c.onRightArrow(a):e===b("Keys").RETURN?(c.onEnter&&c.onEnter(a),f?c.onShiftEnter&&c.onShiftEnter(a):c.onNoShiftEnter&&c.onNoShiftEnter(a)):e===b("Keys").ESC&&c.onEscape?c.onEscape(a):e==b("Keys").COMMA&&c.onComma?c.onComma(a):e==b("Keys").SPACE&&c.onSpace&&c.onSpace(a);c.onKeyDown&&c.onKeyDown(a)};d.onInputChange=function(a){d.props.onChange&&d.props.onChange(a),(d.props.value===null||d.props.value===void 0)&&d.setState({value:a.currentTarget.value})};d.onInputBlur=function(a){d.props.onBlur&&d.props.onBlur(a),a.isDefaultPrevented()||d.setState({focused:!1})};d.onInputFocus=function(a){d.props.onFocus&&d.props.onFocus(a),a.isDefaultPrevented()||d.setState({focused:!0})};d.state={focused:!1,value:d.props.defaultValue||""};return d}var d=c.prototype;d.getValue=function(){return this.props.value!=null?String(this.props.value):this.state.value};d.getHint=function(){return this.props.hint!=null?String(this.props.hint):""};d.cloneElement=function(a){var c=this.getHint()?this.getHint():this.getValue();return h.cloneElement(a,{"aria-activedescendant":this.props["aria-activedescendant"],"aria-autocomplete":this.props["aria-autocomplete"],"aria-controls":this.props["aria-controls"],"aria-describedby":this.props["aria-describedby"],"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-multiline":this.props["aria-multiline"],"aria-owns":this.props["aria-owns"],"aria-expanded":this.props["aria-expanded"],"aria-valuenow":this.props["aria-valuenow"],"aria-valuetext":this.props["aria-valuetext"],"data-testid":this.props["data-testid"],required:this.props.required,role:this.props.role,placeholder:this.props.placeholder,autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,autoFocus:this.props.autoFocus,onKeyDown:this.onInputKeyDown,onKeyUp:this.props.onKeyUp,onBlur:this.onInputBlur,onFocus:this.onInputFocus,onChange:this.onInputChange,onInput:this.props.onInput,onPaste:this.props.onPaste,onWheel:this.props.onWheel,className:this.props.useLabel?a.props.className:b("joinClasses")(a.props.className,this.props.className),dir:this.props.dir,disabled:this.props.disabled,defaultValue:this.props.defaultValue,name:this.props.name,value:c,id:this.props.id,maxLength:this.props.maxLength,min:this.props.min,max:this.props.max,step:this.props.step,pattern:this.props.pattern,style:this.props.style,title:this.props.title,type:this.props.type||a.props.type,spellCheck:this.props.spellCheck})};d.render=function(){var a=h.Children.only(this.props.children);if(!this.props.useLabel)return this.cloneElement(a);var c=this.props.className;this.props.classNames&&(c=b("joinClasses")(c,this.props.classNames.root),this.getValue()||(c=b("joinClasses")(c,this.props.classNames.empty)));return h.jsxs("label",{className:c,style:this.props.styles.label,children:[this.props.leftChild,this.cloneElement(a),this.props.rightChild]})};return c}(a);c.defaultProps={useLabel:!0,classNames:{root:"_58ak",empty:"_3ct8"},styles:{label:null}};c.propTypes={useLabel:(d=b("prop-types")).bool,leftChild:d.element,rightChild:d.element,classNames:d.shape({root:d.string.isRequired,empty:d.string.isRequired}),styles:d.shape({label:d.object}),"aria-activedescendant":d.string,"aria-autocomplete":d.string,"aria-controls":d.string,"aria-describedby":d.string,"aria-errormessage":d.string,"aria-invalid":d.oneOf(["grammar","false","spelling","true"]),"aria-label":d.node,"aria-labelledby":d.string,"aria-multiline":d.bool,"aria-owns":d.string,"aria-expanded":d.bool,"aria-valuenow":d.number,"aria-valuetext":d.string,"data-testid":d.string,autoComplete:d.string,autoFocus:d.bool,className:d.string,defaultValue:d.string,dir:d.string,disabled:d.bool,id:d.string,max:d.oneOfType([d.number,d.string]),maxLength:d.number,min:d.string,name:d.string,onBackspace:d.func,onBackTab:d.func,onBlur:d.func,onChange:d.func,onClick:d.func,onComma:d.func,onDownArrow:d.func,onEnter:d.func,onEscape:d.func,onFocus:d.func,onKeyDown:d.func,onKeyPress:d.func,onKeyUp:d.func,onLeftArrow:d.func,onNoShiftEnter:d.func,onPaste:d.func,onRightArrow:d.func,onShiftDownArrow:d.func,onShiftEnter:d.func,onShiftUpArrow:d.func,onSpace:d.func,onTab:d.func,onUpArrow:d.func,onWheel:d.func,pattern:d.string,placeholder:d.node,required:d.bool,role:d.string,step:d.string,style:d.object,tabIndex:d.number,title:d.string,type:d.string,value:d.string,spellCheck:d.bool,autoCapitalize:d.string,autoCorrect:d.string};e.exports=c}),null);
__d("AbstractTextInput.react",["cx","AbstractTextField.react","React"],(function(a,b,c,d,e,f,g){var h=b("React");a=h.Component;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this;return h.jsx(b("AbstractTextField.react"),babelHelpers["extends"]({},this.props,{children:h.jsx("input",{className:"_58al",onClick:this.props.onClick,onMouseDown:this.props.onMouseDown,onKeyUp:this.props.onKeyUp,onKeyDown:this.props.onKeyDown,onPaste:this.props.onPaste,size:this.props.size,tabIndex:this.props.tabIndex,type:this.props.type,ref:function(b){return a.$1=b}})}))};d.focusInput=function(){this.$1&&this.$1.focus()};d.blurInput=function(){this.$1&&this.$1.blur()};d.selectInput=function(){this.$1&&this.$1.select()};d.getTextFieldDOM=function(){return this.$1};d.getValue=function(){return this.$1?this.$1.value:""};return c}(a);c.propTypes=b("AbstractTextField.react").propTypes;c.defaultProps={type:"text"};e.exports=c}),null);
__d("LayoutColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");function a(a,c){var d=a.className,e=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);return h.jsx("div",babelHelpers["extends"]({ref:c},a,{className:b("joinClasses")(d,"_4bl7"),children:e}))}e.exports=h.forwardRef(a)}),null);
__d("LayoutFillColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");function a(a,c){var d=a.className,e=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);return h.jsx("div",babelHelpers["extends"]({ref:c},a,{className:b("joinClasses")(d,"_4bl9"),children:e}))}e.exports=h.forwardRef(a)}),null);
__d("Layout.react",["cx","LayoutColumn.react","LayoutFillColumn.react","React","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=!1,d=!1,e=this.props,f=e.children,g=e.className;e=babelHelpers.objectWithoutPropertiesLoose(e,["children","className"]);h.Children.forEach(f,function(b){if(!b)return;b.type===c.FillColumn?d=!0:d&&(a=!0)});return h.jsx("div",babelHelpers["extends"]({},e,{className:b("joinClasses")(g,a?"_5aj7":"clearfix _ikh"),children:f}))};return c}(h.Component);a.Column=b("LayoutColumn.react");a.FillColumn=b("LayoutFillColumn.react");e.exports=a}),null);
__d("FluxMapStore",["invariant","FluxReduceStore","immutable"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return b("immutable").Map()};d.at=function(a){this.has(a)||g(0,465,a);return this.get(a)};d.has=function(a){return this.getState().has(a)};d.get=function(a){return this.getState().get(a)};d.getAll=function(a,c){var d=this,e=b("immutable").Set(a),f=c||b("immutable").Map();return f.withMutations(function(a){for(var b=f,c=Array.isArray(b),g=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(c){if(g>=b.length)break;h=b[g++]}else{g=b.next();if(g.done)break;h=g.value}h=h;h=h[0];(!e.has(h)||!d.has(h))&&a["delete"](h)}for(var h=e,g=Array.isArray(h),c=0,h=g?h:h[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(g){if(c>=h.length)break;b=h[c++]}else{c=h.next();if(c.done)break;b=c.value}b=b;d.has(b)&&a.set(b,d.at(b))}})};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("XFacebookWorkChatInboxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/chat/t/{?thread_key}/",{entrypoint:{type:"String"},thread_key:{type:"String"},mid:{type:"String"},ref:{type:"String"},ds:{type:"Int"},sender:{type:"Bool",defaultValue:!1},hide_header:{type:"Bool",defaultValue:!1},last_message_timestamp:{type:"Int"},first_message_timestamp:{type:"Int"}})}),null);
__d("XPagesManagerPublishingToolsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/publishing_tools/",{page_token:{type:"String",required:!0},business_id:{type:"Int"},current_page:{type:"Int"},section:{type:"String"},source:{type:"Enum",enumType:1},sourceID:{type:"String"},refSource:{type:"Enum",enumType:1},initial_action_data:{type:"StringToStringMap"},initial_data:{type:"StringToStringMap"}})}),null);
__d("XSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/",{tab:{type:"String"},section:{type:"String"},edit_section:{type:"String"},id:{type:"String"},dispute_id:{type:"String"},managed_notif_id:{type:"Int"},qp_id:{type:"Int"},ref:{type:"String"},privacy_source:{type:"Enum",enumType:1},option:{type:"String"},show_modal:{type:"Bool",defaultValue:!1},modal_type:{type:"String"},flow_kind:{type:"String"},referrer:{type:"Enum",enumType:1},protocol:{type:"String"},country:{type:"String"},initial_open_app_id:{type:"FBID"},legacy_contact_delegator_id:{type:"FBID"}})}),null);