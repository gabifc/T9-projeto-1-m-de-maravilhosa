if (self.CavalryLogger) { CavalryLogger.start_js(["6MCDG"]); }

__d("CenteredContainer.react",["cx","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.fullHeight,d=a.horizontal,e=a.vertical;a=babelHelpers.objectWithoutPropertiesLoose(a,["fullHeight","horizontal","vertical"]);e=(e?"_3bwv":"")+(d?" _3bww":"");d=h.Children.map(this.props.children,function(a){return h.jsx("div",{className:"_3bwx",children:a})});c=b("joinClasses")(this.props.className,c?"_5bpf":"");return h.jsx("div",babelHelpers["extends"]({},a,{className:c,children:h.jsx("div",{className:e,children:h.jsx("div",{className:"_3bwy",children:d})})}))};return c}(h.Component);a.propTypes={fullHeight:b("prop-types").bool,vertical:b("prop-types").bool,horizontal:b("prop-types").bool};a.defaultProps={fullHeight:!1,vertical:!1,horizontal:!0};e.exports=a}),null);
__d("HelpLink.react",["fbt","React","TooltipLink.react","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("TooltipLink.react"),babelHelpers["extends"]({"aria-label":this.props.label},this.props,{className:b("joinClasses")(this.props.className,"uiHelpLink mls"),children:void 0}))};return c}(h.Component);a.defaultProps={href:"#",label:g._("Ajuda")};e.exports=a}),null);
__d("UFICreatorInfo.react",["fbt","HelpLink.react","Image.react","React","URI","cxMargin"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a,c=this.getCreatorLink();switch(this.props.labelType){case"commented":a=g._("Comentado por {creator}",[g._param("creator",c)]);break;case"edited_comment":a=g._("Editado por {creator}",[g._param("creator",c)]);break;case"sent_message":a=g._("Enviada por {creator}",[g._param("creator",c)]);break;case"page_admin_note":a=g._("Nota criada por {creator}",[g._param("creator",c)]);break;default:return i.jsx("span",{})}return i.jsxs("span",{children:[a,i.jsx(b("HelpLink.react"),{tooltip:this.getHelpText()})]})};d.getCreatorLink=function(){switch(this.props.creatorType){case"application":case"gray_account":case"indirect_admin":return i.jsx("a",{className:"uiLinkSubtle","data-hover":"tooltip","data-tooltip-content":this.getTooltipText(),children:this.props.creatorName});case"business_admin":return i.jsx("a",{className:"uiLinkSubtle",href:this.props.profileURI,children:this.props.creatorName});case"direct_admin":return this.getProfileLinkWithHovercard();case"former_admin":return i.jsxs("span",{className:"uiLinkSubtle",children:[i.jsx(b("Image.react"),{src:"/images/privacy/cant-see.png",width:9,height:9,className:"_3-8_"}),this.getProfileLinkWithHovercard()]});default:return i.jsx("span",{className:"uiLinkSubtle",children:this.props.creatorName})}};d.getTooltipText=function(){switch(this.props.creatorType){case"application":return this.getApplicationText();case"gray_account":return this.getGrayAccountText();case"indirect_admin":return this.getIndirectAdminText()}return null};d.getProfileLinkWithHovercard=function(){if(!this.props.profileURI)return i.jsx("span",{children:this.props.creatorName});var a=new(h||(h=b("URI")))("/ajax/hovercard/user.php").setQueryData({id:this.props.creatorID}).addQueryData({type:"page_admin",extragetparams:JSON.stringify({directed_target_id:this.props.pageID})});return i.jsx("a",{className:"uiLinkSubtle","data-hovercard":a,href:this.props.profileURI,children:this.props.creatorName})};d.getApplicationText=function(){switch(this.props.labelType){case"commented":return g._("Isto foi comentado por algu\u00e9m usando {application}.",[g._param("application",this.props.creatorName)]);case"edited_comment":return g._("Isto foi editado por algu\u00e9m usando o {application}.",[g._param("application",this.props.creatorName)]);case"sent_message":return g._("Isso foi enviado por algu\u00e9m usando o aplicativo {application}.",[g._param("application",this.props.creatorName)]);case"page_admin_note":return g._("Esta nota foi criada por algu\u00e9m que usa {application}.",[g._param("application",this.props.creatorName)])}return null};d.getIndirectAdminText=function(){switch(this.props.labelType){case"commented":return g._("Isto foi comentado por algu\u00e9m da p\u00e1gina {page}.",[g._param("page",this.props.creatorName)]);case"edited_comment":return g._("Isto foi editado por algu\u00e9m de {page}.",[g._param("page",this.props.creatorName)]);case"sent_message":return g._("Isso foi enviado por algu\u00e9m da p\u00e1gina {page}.",[g._param("page",this.props.creatorName)]);case"page_admin_note":return g._("Esta nota foi criada por algu\u00e9m de {page}.",[g._param("page",this.props.creatorName)])}return null};d.getGrayAccountText=function(){switch(this.props.labelType){case"commented":return g._("Isto foi comentado por algu\u00e9m que n\u00e3o tem uma conta pessoal do Facebook.");case"edited_comment":return g._("Isto foi editado por algu\u00e9m que n\u00e3o tem uma conta pessoal no Facebook.");case"sent_message":return g._("Isso foi enviado por algu\u00e9m que n\u00e3o possui uma conta pessoal do Facebook.");case"page_admin_note":return g._("Esta nota foi criada por algu\u00e9m que n\u00e3o tem uma conta pessoal no Facebook.")}return null};d.getHelpText=function(){switch(this.props.labelType){case"commented":return g._("Somente pessoas que gerenciam esta P\u00e1gina podem ver quem publicou um coment\u00e1rio.");case"edited_comment":return g._("Somente pessoas que gerenciam esta P\u00e1gina podem ver quem editou um coment\u00e1rio");case"sent_message":return g._("Somente pessoas que gerenciam esta P\u00e1gina podem ver quem enviou uma mensagem.");case"page_admin_note":return g._("Somente as pessoas que gerenciam esta P\u00e1gina podem ver quem criou uma nota")}return null};return c}(i.Component);e.exports=a}),null);
__d("CircularProgressBar.react",["cx","React","createReactClass_DEPRECATED","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=b("createReactClass_DEPRECATED")({displayName:"CircularProgressBar",propTypes:{animate:b("prop-types").bool,percentComplete:b("prop-types").number.isRequired,text:b("prop-types").string},render:function(){var a=this.props,b=a.animate,c=a.text;a=a.percentComplete;var d=360*a/100,e=Math.max(d,180)-180;d=Math.min(d,180);var f=a<100?"1":"0";return h.jsxs("div",{"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":a,className:"_1_bj",role:"progressbar",style:{opacity:f},children:[!!c&&h.jsx("div",{className:"_22sa",children:c}),h.jsx("div",{className:"_1_bk",children:h.jsxs("div",{className:b?"_22sb":"",children:[h.jsx("div",{className:"_1_bl",style:{opacity:f}}),h.jsx("div",{className:"_1_bp _1_bq",children:h.jsx("div",{className:"_1_br",style:{transform:"translateX(-100%) rotate("+e+"deg)",opacity:f}})}),h.jsx("div",{className:"_1_bs _1_bq",children:h.jsx("div",{className:"_1_br",style:{transform:"translateX(-100%) rotate("+d+"deg)",opacity:f}})})]})})]})}});e.exports=a}),null);
__d("MenuSeparator.react",["MenuSeparator"],(function(a,b,c,d,e,f){function a(a){a.isReactLegacyFactory={},a.type=a}c=b("MenuSeparator");a(c);e.exports=c}),null);
__d("PopoverMenu.react",["cx","CSS","InlineBlock.react","Popover","PopoverMenu","React","ReactDOM","SubscriptionsHandler","areEqual","clearImmediate","joinClasses","prop-types","setImmediate"],(function(a,b,c,d,e,f,g){var h,i=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$3=null,c.$7=function(){c.$3&&(c.$3.release(),c.$3=null),c.$8(),c.$2.setMenu(c.$5(c.props.menu)),c.$6()},b)||babelHelpers.assertThisInitialized(c)}c.getFirstChild=function(a){a=a.children;return Array.isArray(a)?a[0]:a};c.getButtonSize=function(a){a=c.getFirstChild(a);return a!=null&&a.props.size!=null?a.props.size:"medium"};var d=c.prototype;d.componentDidMount=function(){var a=b("ReactDOM").findDOMNode(this.refs.root),c=a==null?void 0:a.firstChild;c!=null&&(b("CSS").addClass(c,"_p"),this.$1=new(b("Popover"))(a,c,this.props.layerBehaviors,{alignh:this.props.alignh,position:this.props.position,disabled:this.props.disabled,arrowDimensions:{offset:0,length:0},disableArrowKeyActivation:this.props.disableArrowKeyActivation,enableActivationOnEnter:this.props.enableActivationOnEnter,"data-testid":this.props["data-testid"],shouldDisableHideOnScroll:this.props.shouldDisableHideOnScroll}),this.$2=new(b("PopoverMenu"))(this.$1,c,this.$5(this.props.menu),this.props.behaviors));this.$6()};d.componentDidUpdate=function(a){(h||(h=b("areEqual")))(a.menu,this.props.menu)||(b("clearImmediate")(this.$4),this.$4=b("setImmediate")(this.$7)),this.props.alignh!==a.alignh&&this.$2.getPopover().getLayer().setAlignment(this.props.alignh),this.props.disabled!==a.disabled&&(this.props.disabled?this.$2.disable():this.$2.enable())};d.$6=function(){this.props.onReturnWithoutFocusedItem&&this.$3&&this.$2&&this.$3.addSubscriptions(this.$2.subscribe("returnWithoutFocusedItem",this.props.onReturnWithoutFocusedItem))};d.render=function(){var a=i.Children.map(this.props.children,function(a,c){if(c===0)return i.cloneElement(a,{className:b("joinClasses")(a.props.className,"_p")});else return a}),c=Object.assign({},this.props);delete c.onShow;delete c.onHide;delete c.alignh;delete c.position;delete c.layerBehaviors;delete c.behaviors;delete c.menu;delete c.disabled;delete c.disableArrowKeyActivation;delete c.enableActivationOnEnter;return i.jsx(b("InlineBlock.react"),babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,"uiPopover"),ref:"root",disabled:null,children:a}))};d.componentWillUnmount=function(){b("clearImmediate")(this.$4),this.hidePopover(),this.$3&&(this.$3.release(),this.$3=null),this.$2&&this.$2.destroy()};d.$5=function(a){var c=a.props;a=new a.type(c);this.$3=new(b("SubscriptionsHandler"))();c.onItemClick&&this.$3.addSubscriptions(a.subscribe("itemclick",c.onItemClick));c.onItemFocus&&this.$3.addSubscriptions(a.subscribe("focus",c.onItemFocus));c.onItemBlur&&this.$3.addSubscriptions(a.subscribe("blur",c.onItemBlur));c.onChange&&this.$3.addSubscriptions(a.subscribe("change",c.onChange));this.props.onShow&&this.$3.addSubscriptions(this.$1.subscribe("show",this.props.onShow));this.props.onHide&&this.$3.addSubscriptions(this.$1.subscribe("hide",this.props.onHide));return a};d.getMenu=function(){return this.$2.getMenu()};d.isShown=function(){return!!(this.$1&&this.$1.isShown())};d.showPopover=function(a){this.$1.showLayer();if(a){var b=this.$2.getMenu();b.blur();b.focusAnItem(a)}};d.hidePopover=function(){var a=this.$1;a&&a.isShown()&&a.hideLayer()};d.getFocusedItem=function(){var a=this.$2.getMenu();return a.getFocusedItem()};d.$8=function(){var a=this.getMenu();a&&a.forEachItem(function(a){a=a.getRoot().firstElementChild;a&&b("ReactDOM").unmountComponentAtNode(a)})};return c}(i.Component);a.propTypes={alignh:(c=b("prop-types")).oneOf(["left","center","right"]),alignv:c.oneOf(["baseline","bottom","middle","top"]),position:c.oneOf(["above","below","left","right"]),layerBehaviors:c.array,menu:c.object.isRequired,disabled:c.bool,disableArrowKeyActivation:c.bool,enableActivationOnEnter:c.bool,onReturnWithoutFocusedItem:c.func,shouldDisableHideOnScroll:c.bool};a.defaultProps={alignv:"middle",shouldDisableHideOnScroll:!1};e.exports=a}),null);
__d("MenuItemNoAction",["MenuItem"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.hasAction=function(){return!1};return b}(b("MenuItem"));e.exports=a}),null);
__d("MenuSelectableItem",["cx","CSS","DOM","MenuItem"],(function(a,b,c,d,e,f,g){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b._ARIARole="menuitemcheckbox";b._selected=!!b._data.selected;return b}var d=c.prototype;d.getIcon=function(){return this._data.icon};d.setIcon=function(a){b("DOM").replace(this._data.icon,a),this._data.icon=a};d.isSelected=function(){return this._selected};d.select=function(){if(this.isDisabled())return!1;b("CSS").addClass(this._root,"_54nd");this._anchor.setAttribute("aria-checked","true");this._selected=!0};d.deselect=function(){b("CSS").removeClass(this._root,"_54nd"),this._anchor.setAttribute("aria-checked","false"),this._selected=!1};d.render=function(){var c=a.prototype.render.call(this);this._data.selected&&(b("CSS").addClass(c,"_54nd"),this._anchor.setAttribute("aria-checked","true"));return c};return c}(b("MenuItem"));Object.assign(a.prototype,{_selected:!1});e.exports=a}),null);
__d("MenuTheme",["cx"],(function(a,b,c,d,e,f,g){e.exports={className:"_569t"}}),null);
__d("SelectableMenuUtils",[],(function(a,b,c,d,e,f){a={doesItemSupportSelect:function(a){return g(a)},isSelected:function(a){return g(a)&&a.isSelected()}};function g(a){return a.select&&a.deselect&&a.isSelected}e.exports=a}),null);
__d("SelectableMenu",["Menu","SelectableMenuUtils","createArrayFromMixed"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.focusAnItem=function(){for(var c=0;c<this._items.length;c++)if(b("SelectableMenuUtils").isSelected(this._items[c])&&this._focusItem(this._items[c])!==!1)return!0;return a.prototype.focusAnItem.call(this)};d.setValue=function(a){this._root||this._render();var c=b("createArrayFromMixed")(a);this._items.forEach(function(a){b("SelectableMenuUtils").doesItemSupportSelect(a)&&(c.includes(a.getValue())?a.select():b("SelectableMenuUtils").isSelected(a)&&a.deselect())});this.inform("change",this.getSelection())};d._handleItemClick=function(c,d){if(!b("SelectableMenuUtils").doesItemSupportSelect(c))return a.prototype._handleItemClick.call(this,c,d);var e=this.inform("itemclick",{item:c,event:d});if(e)return;if(this._config.multiple){e=b("SelectableMenuUtils").isSelected(c)?c.deselect():c.select();e!==!1&&this.inform("change",this.getSelection());this._config.closeOnSelectWithMultiple&&this.done()}else b("SelectableMenuUtils").isSelected(c)||c.select()!==!1&&(this._items.forEach(function(a){b("SelectableMenuUtils").isSelected(a)&&a!==c&&a.deselect()}),this.inform("change",this.getSelection())),this.done();return c.handleClick(d)};d.getSelection=function(){var a=[];this._items.forEach(function(c){b("SelectableMenuUtils").isSelected(c)&&a.push({label:c.getLabel(),value:c.getValue(),item:c})});this._config.multiple||(a=a[0]);return a};return c}(b("Menu"));e.exports=a}),null);
__d("ReactMenu",["cx","Menu","MenuItem","MenuItemNoAction","MenuSelectableItem","MenuTheme","React","SelectableMenu","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");function i(a){var b=[];h.Children.forEach(a,function(a){a&&b.push(a)});return b}function a(a){a!=null&&(a.isReactLegacyFactory={},a.type=a)}c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){d=babelHelpers["extends"]({theme:b("MenuTheme"),maxheight:c?c.maxheight:null,className:c?c.className:null,testid:c?c["data-testid"]:null},d);return a.call(this,i(c.children),d)||this}return c}(b("Menu"));a(c);d=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){d=babelHelpers["extends"]({className:b("joinClasses")("_57di",c?c.className:null),theme:b("MenuTheme"),multiple:c&&c.multiple,closeOnSelectWithMultiple:c&&c.closeOnSelectWithMultiple,maxheight:c?c.maxheight:null,testid:c?c["data-testid"]:null},d);return a.call(this,i(c.children),d)||this}return c}(b("SelectableMenu"));a(d);c.SelectableMenu=d;a(b("MenuItem"));c.Item=b("MenuItem");c.ItemNoAction=b("MenuItemNoAction");a(b("MenuSelectableItem"));c.SelectableItem=b("MenuSelectableItem");e.exports=c}),null);
__d("XUIDialogCloseButton.react",["fbt","React","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{action:"cancel",label:g._("Fechar")}))};return c}(h.Component);e.exports=a}),null);
__d("ReactXUIMenu",["ReactMenu","XUIMenuTheme","XUIMenuWithSquareCorner"],(function(a,b,c,d,e,f){"use strict";function a(a){a.isReactLegacyFactory={},a.type=a}d=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d={behaviors:void 0,theme:b("XUIMenuTheme")};(!c||c.withsquarecorner!==!1)&&(d.behaviors=[b("XUIMenuWithSquareCorner")]);return a.call(this,c,d)||this}return c}(c=b("ReactMenu"));a(d);f=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d={behaviors:void 0,theme:b("XUIMenuTheme")};(!c||c.withsquarecorner!==!1)&&(d.behaviors=[b("XUIMenuWithSquareCorner")]);return a.call(this,c,d)||this}return c}(c.SelectableMenu);a(f);d.SelectableMenu=f;d.Item=c.Item;d.SelectableItem=c.SelectableItem;e.exports=d}),null);
__d("XUIRadioInput.react",["cx","invariant","React","joinClasses"],(function(a,b,c,d,e,f,g,h){var i=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){!this.props.children||this.props.children.length===0||h(0,1138);var a=b("joinClasses")(this.props.className,"_55sh"),c=babelHelpers["extends"]({},this.props,{className:null});c=i.jsx("input",babelHelpers["extends"]({},c,{type:"radio",children:void 0}));return i.jsxs("label",{className:a,"data-testid":void 0,children:[c,i.jsx("span",{})]})};return c}(i.Component);e.exports=a}),null);
__d("XUIError",["cx","invariant","Promise","ARIA","Bootloader","CSS","DataStore","DOM","Event","Parent","filterObject","getActiveElement","getElementText","isNode","memoize","nl2br","promiseDone"],(function(a,b,c,d,e,f,g,h){"use strict";var i="data-xui-error-alignh",j="XUIError",k="data-xui-error",l="_1tp7",m="data-xui-error-position";b("Event").listen(document.documentElement,"mouseover",function(a){if(b("Parent").byClass(b("getActiveElement")(),l))return;a=b("Parent").byClass(a.getTarget(),l);a?v(a):w()});b("Event").listen(document.documentElement,"focusin",function(a){a=b("Parent").byClass(a.getTarget(),l);a?v(a):w()});b("Event").listen(document.documentElement,"focusout",function(a){w()});var n=b("memoize")(function(){return new(b("Promise"))(function(a,c){b("Bootloader").loadModules(["React","ReactDOM","XUIErrorDialogImpl"],function(b,c,d){a(babelHelpers["extends"]({React:b,ReactDOM:c},d.getNewDialog()))},"XUIError")})}),o=null;function p(a){return babelHelpers["extends"]({message:a.getAttribute(k),position:a.getAttribute(m),alignh:a.getAttribute(i)},b("DataStore").get(a,j))}function q(a,c){b("DataStore").set(a,j,c)}function r(a,c){b("DataStore").set(a,j,babelHelpers["extends"]({},b("DataStore").get(a,j),c))}function s(a){b("DataStore").remove(a,j)}var t=!1,u=!1;function v(a){b("promiseDone")(n(),function(c){var d=c.React,e=c.ReactDOM,f=c.dialog;c=c.dialogMessageNode;var g=p(a),i=g.message;if(i==null)return;d=d.isValidElement(i);t&&!d&&e.unmountComponentAtNode(c);d?e.render(i,c):(typeof i==="string"||b("isNode")(i)||h(0,652),typeof i==="string"&&(i=b("nl2br")(i)),b("DOM").setContent(c,i));t=d;f.setContext(a).setPosition(g.position||"right").setAlignment(g.alignh||(g.position==="above"||g.position==="below"?"right":null)).show();b("ARIA").notify(b("getElementText")(c));o=a}),u=!0}function w(){if(!u)return;b("promiseDone")(n(),function(a){a.React;var b=a.ReactDOM,c=a.dialog;a=a.dialogMessageNode;if(!o)return;t&&(b.unmountComponentAtNode(a),t=!1);c.hide();o=null})}function x(a){b("DOM").contains(a,b("getActiveElement")())&&v(a)}a={set:function(a){var c=a.target,d=a.message,e=a.position;a=a.alignh;d!==null||h(0,653);b("CSS").addClass(c,l);r(c,b("filterObject")({message:d,position:e,alignh:a},function(a){return a!==void 0}));x(c)},clear:function(a){b("CSS").removeClass(a,l),a.removeAttribute(k),s(a),a===o&&w()},updatePosition:function(){if(!u)return;b("promiseDone")(n(),function(a){a=a.dialog;o&&a.updatePosition()})},__setReactError:function(a,b){var c=b.message,d=b.position;b=b.alignh;c!==null||h(0,653);q(a,{message:c,position:d,alignh:b});x(a)},__clearReactError:function(a){s(a),a===o&&w()}};e.exports=a}),null);
__d("XUIError.react",["cx","React","ReactDOM","XUIError","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i="_1tp7";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){this.props.xuiError!=null&&b("XUIError").__setReactError(b("ReactDOM").findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh})};d.componentDidUpdate=function(){this.props.xuiError==null?b("XUIError").__clearReactError(b("ReactDOM").findDOMNode(this)):b("XUIError").__setReactError(b("ReactDOM").findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh})};d.componentWillUnmount=function(){b("XUIError").__clearReactError(b("ReactDOM").findDOMNode(this))};d.render=function(){var a=h.Children.only(this.props.children);this.props.xuiError!=null&&(a=h.cloneElement(a,{className:b("joinClasses")(a.props.className,i)}));return a};return c}(h.Component);e.exports=a}),null);
__d("XUITextInput.react",["cx","AbstractTextInput.react","React","XUIError.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=b("React");c=a.Component;d=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this,b)||this;c.$1=function(a){c.props.onFocus&&c.props.onFocus(a),c.setState({focused:!0})};c.$2=function(a){c.props.onBlur&&c.props.onBlur(a),c.setState({focused:!1})};c.state={focused:!1};return c}var d=c.prototype;d.render=function(){var a="_55r1"+(this.props.height==="tall"?" _55r2":"")+(this.props.disabled?" _53a0":"")+(this.state.focused?" _1488":"");return h.jsx(b("XUIError.react"),babelHelpers["extends"]({},this.props,{children:h.jsx(b("AbstractTextInput.react"),babelHelpers["extends"]({},this.props,{onFocus:this.$1,onBlur:this.$2,ref:"textInput",className:b("joinClasses")(this.props.className,a)}))}))};d.focusInput=function(){this.refs.textInput&&this.refs.textInput.focusInput()};d.blurInput=function(){this.refs.textInput&&this.refs.textInput.blurInput()};d.selectInput=function(){this.refs.textInput&&this.refs.textInput.selectInput()};d.getValue=function(){return this.refs.textInput&&this.refs.textInput.getValue()};d.getTextFieldDOM=function(){return this.refs.textInput?this.refs.textInput.getTextFieldDOM():null};return c}(c);d.defaultProps={height:"short"};d.propTypes=babelHelpers["extends"]({},b("AbstractTextInput.react").propTypes,b("XUIError.react").propTypes,{height:b("prop-types").oneOf(["short","tall"])});e.exports=d}),null);
__d("LitestandStoryInsertionStatus",["ArbiterMixin"],(function(a,b,c,d,e,f){var g="check";a={registerBlocker:function(a){return this.subscribe(g,function(b,c){c.can_insert&&a()&&(c.can_insert=!1)})},canInsert:function(){var a={can_insert:!0};this.inform(g,a);return a.can_insert}};Object.assign(a,b("ArbiterMixin"));e.exports=a}),null);
__d("LiveRHCUtils",[],(function(a,b,c,d,e,f){"use strict";a="live_rhc_collapse";e.exports=a}),null);
__d("DOMClone",["DataStoreConfig"],(function(a,b,c,d,e,f){a={shallowClone:function(a){return g(a,!1)},deepClone:function(a){return g(a,!0)}};function g(a,c){a=a.cloneNode(c);typeof a.__FB_TOKEN!=="undefined"&&delete a.__FB_TOKEN;typeof a[b("DataStoreConfig").expandoKey]!=="undefined"&&delete a[b("DataStoreConfig").expandoKey];return a}e.exports=a}),null);
__d("FileInput",["cx","ArbiterMixin","DOM","DOMClone","Event","Focus","Keys","UserAgent_DEPRECATED","mixin"],(function(a,b,c,d,e,f,g){var h=b("UserAgent_DEPRECATED").ie();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d,e){var f;f=a.call(this)||this;f.container=c;f.control=d;c=b("DOM").scry(f.container,"a")[0];c&&c.removeAttribute("href");d=b("DOM").create("div",{className:"_3jk"},e);b("DOM").appendContent(f.control,d);f._boundHandleChange=f._handleChange.bind(babelHelpers.assertThisInitialized(f));h&&(f._boundHandleIEKeyDown=f._handleIEKeyDown.bind(babelHelpers.assertThisInitialized(f)));f._setInputElement(e);return f}var d=c.prototype;d.getValue=function(){return this.input.value};d.getInput=function(){return this.input};d.getContainer=function(){return this.container};d.getControl=function(){return this.control};d.clear=function(){this.input.value="";if(this.input.value!==""){var a=b("DOMClone").deepClone(this.input);b("DOM").replace(this.input,a);this._setInputElement(a)}};d.destroy=function(){this._focus.remove(),this._focus=null,this._listener.remove(),this._listener=null,h&&(this._IEKeyDownListener.remove(),this._IEKeyDownListener=null),this.container=null,this.control=null,this.input=null};d._setInputElement=function(a){this.input=a,this._focus&&this._focus.remove(),this._focus=b("Focus").relocate(a,this.control),this._listener&&this._listener.remove(),this._listener=b("Event").listen(a,"change",this._boundHandleChange),h&&(this._IEKeyDownListener&&this._IEKeyDownListener.remove(),this._IEKeyDownListener=b("Event").listen(a,"keydown",this._boundHandleIEKeyDown))};d._handleChange=function(a){this.inform("change",a);if(this.input){var c=this.input.form;c&&h<9&&b("Event").fire(c,"change",a)}};d._handleIEKeyDown=function(a){if(a.keyCode===b("Keys").RETURN){a.preventDefault();a=document.createEvent("MouseEvents");a.initEvent("click",!0,!0);this.input.dispatchEvent(a)}};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("ProfileTile.react",["Image.react","ImageBlock.react","Link.react","React","URI","XUIText.react"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=24;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.size||i;a=this.props.imageProps&&this.props.imageProps.src||"https://graph.facebook.com/"+(this.props.id||"")+"/picture?width="+a+"&height="+a;var c=this.props.imageProps&&this.props.imageProps.href||"/"+(this.props.id||""),d=null;this.props.shouldShowProfileCardOnHover&&(d=new(g||(g=b("URI")))("/ajax/hovercard/user.php").setQueryData({id:this.props.id}));var e=this.props.desc?h.jsx(b("XUIText.react"),babelHelpers["extends"]({display:"block"},this.props.descProps,{children:this.props.desc})):null,f=h.jsx("span",babelHelpers["extends"]({},this.props.titleProps,{children:this.props.name}));this.props.shouldNameLinkToProfile&&(f=h.jsx(b("Link.react"),babelHelpers["extends"]({"data-hovercard":d},this.props.titleProps,{href:this.props.titleProps&&this.props.titleProps.href||"/"+(this.props.id||""),children:this.props.name})));d=this.props.image||(this.props.size&&this.props.imageProps&&!this.props.imageProps.height&&this.props.imageProps&&!this.props.imageProps.width?h.jsx(b("Image.react"),babelHelpers["extends"]({height:this.props.size,src:a,width:this.props.size},this.props.imageProps)):h.jsx(b("Image.react"),babelHelpers["extends"]({src:a},this.props.imageProps)));a=this.props.shouldImageLinkToProfile?h.jsx(b("Link.react"),{href:c,children:d}):d;return h.jsxs(b("ImageBlock.react"),babelHelpers["extends"]({},this.props.tileProps,{children:[a,h.jsxs("div",{children:[f,e]})]}))};return c}(h.Component);a.defaultProps={shouldShowProfileCardOnHover:!0,shouldNameLinkToProfile:!0};e.exports=a}),null);
__d("ContextualLayerPositionClassOnContext",["cx","CSS"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("reposition",this._updateClassName.bind(this)),this._layer.isShown()&&this._updateClassName()};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null,this._prevClassName&&(b("CSS").removeClass(this._layer.getContext(),this._prevClassName),this._prevClassName=null)};c._updateClassName=function(a,c){a=this._layer.getContext();c=h(c);if(this._prevClassName){if(this._prevClassName===c)return;b("CSS").removeClass(a,this._prevClassName)}b("CSS").addClass(a,c);this._prevClassName=c};return a}();function h(a){var b=a.getAlignment();a=a.getPosition();if(a==="below")if(b==="left")return"_nk";else if(b==="right")return"_nl";else return"_nm";else if(a==="above")if(b==="left")return"_nn";else if(b==="right")return"_no";else return"_np";else if(a==="left")return"_nq";else return"_nr"}Object.assign(a.prototype,{_subscription:null,_prevClassName:null});e.exports=a}),null);
__d("getContextualLayerCursorOffset",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=a.getOrientation(),e=d.getPosition();d=d.getAlignment();var f=a.getContent().getBoundingClientRect();a=a.getContext().getBoundingClientRect();b=b-a.left;c=c-a.top;switch(d){case"left":b-=f.width;break;case"center":b-=a.width*.5;break;case"right":b-=a.width-f.width;break;default:throw new Error("invalid alignment")}switch(e){case"above":break;case"left":b+=f.width;c-=f.height*.5;break;case"right":b-=f.width;c-=f.height*.5;break;case"below":c-=a.height;break;default:throw new Error("invalid position")}return{offsetX:b,offsetY:c}}e.exports=a}),null);
__d("Network",["mixInEventEmitter"],(function(a,b,c,d,e,f){var g=!0,h=a.navigator.connection,i={0:"unknown",1:"ethernet",2:"wifi",3:"2g",4:"3g"};function c(){return g}function d(a){if(a==g)return;g=a;l.emit(a?"online":"offline")}function f(){return h?h.bandwidth:g?Infinity:0}function j(){return h?h.metered:!1}function k(){var a=h?String(h.type):"0";return i[a]||a}var l={getBandwidth:f,getType:k,isMetered:j,isOnline:c,setOnline:d};b("mixInEventEmitter")(l,{online:!0,offline:!0});l=l;a.addEventListener?(a.addEventListener("online",d.bind(null,!0)),a.addEventListener("offline",d.bind(null,!1))):a.attachEvent&&(a.attachEvent("online",d.bind(null,!0)),a.attachEvent("offline",d.bind(null,!1)));e.exports=l}),null);
__d("AbstractCheckboxInput.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=h.createRef(),b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.useLabel,e=a["data-testid"];e=babelHelpers.objectWithoutPropertiesLoose(a,["className","useLabel","data-testid"]);return!d?h.jsx("input",babelHelpers["extends"]({},e,{"data-testid":void 0,className:c,ref:this.$1,type:"checkbox"})):h.jsxs("label",{className:b("joinClasses")(c,"_kv1"),"data-testid":void 0,children:[h.jsx("input",babelHelpers["extends"]({},e,{className:null,ref:this.$1,type:"checkbox"})),h.jsx("span",{className:"_66ul","data-hover":this.props.tooltip!=null?"tooltip":null,"data-tooltip-content":this.props.tooltip})]})};d.focusInput=function(){this.$1.current&&this.$1.current.focus()};d.blurInput=function(){this.$1.current&&this.$1.current.blur()};d.setIndeterminate=function(){this.$1.current&&(this.$1.current.indeterminate=!0)};d.isIndeterminate=function(){return this.$1.current?this.$1.current.indeterminate:!1};return c}(h.Component);a.defaultProps={useLabel:!0};e.exports=a}),null);
__d("GridItem.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c=a.alignv,d=a.alignh,e=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["alignv","alignh","className"]);return h.jsx("td",babelHelpers["extends"]({},a,{className:b("joinClasses")(e,"_51m-"+(c==="top"?" vTop":"")+(c==="middle"?" vMid":"")+(c==="bottom"?" vBot":"")+(d==="left"?" hLeft":"")+(d==="center"?" hCent":"")+(d==="right"?" hRght":""))}))}e.exports=a}),null);
__d("Grid.react",["cx","GridItem.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,d=a.alignh,e=a.alignv,f=a.children,g=a.cols,i=a.fixed,j=a.spacing,k=h.Children.count(f),l=[],m=[],n=0;h.Children.forEach(f,function(a,f){if(a===null||a===void 0)return;var o=a.type===c.GridItem;n+=o?Math.max(a.props.colSpan||0,1):1;var p=n===g?"_51mw":"";o=o?h.cloneElement(a,{key:a.key||f,alignh:a.props.alignh||d,alignv:a.props.alignv||e,className:b("joinClasses")(a.props.className,j,p)}):h.jsx(b("GridItem.react"),{alignh:d,alignv:e,className:b("joinClasses")(j,p),children:a},a.key||f);m.push(o);if(n%g===0||f+1===k){if(i===!0&&n<g){for(var p=n;p<g;p++)m.push(h.jsx(b("GridItem.react"),{},f+p));n=g}l.push(h.jsx("tr",{className:"_51mx",children:m},f));m=[];n=0}});return h.jsx("table",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"uiGrid _51mz"+(i===!0?" _5f0n":"")),cellSpacing:"0",cellPadding:"0",children:h.jsx("tbody",{children:l})}))};return c}(h.Component);a.GridItem=b("GridItem.react");e.exports=a}),null);
__d("distinctArrayBy",[],(function(a,b,c,d,e,f){"use strict";function g(a){return a}function a(a,b){b===void 0&&(b=g);var c=[],d=new Set();for(var a=a,e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(e){if(f>=a.length)break;h=a[f++]}else{f=a.next();if(f.done)break;h=f.value}h=h;var i=b(h);d.has(i)||(d.add(i),c.push(h))}return c}e.exports=a}),null);
__d("ManagedError",[],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this,b!==null&&b!==void 0?b:"")||this;b!==null&&b!==void 0?d.message=b:d.message="";d.innerError=c;return d}return b}(babelHelpers.wrapNativeSuper(Error));e.exports=a}),null);