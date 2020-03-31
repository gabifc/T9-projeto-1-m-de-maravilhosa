if (self.CavalryLogger) { CavalryLogger.start_js(["68O6z"]); }

__d("FDSBaseSelector.react",["requireCond","cr:1345113"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1345113")}),null);
__d("SUIStatusIndicator.react",["cx","React","SUITheme","joinClasses","prop-types","withSUITheme"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.fill;a=a.status;var d=b("SUITheme").get(this).SUIStatusIndicator;a=d.colors[a];return h.jsx("span",{className:b("joinClasses")(this.props.className,this.props.margin,"_5mat"),"data-testid":void 0,style:{backgroundColor:c==="filled"?a:d.colors.empty,borderColor:a,borderRadius:d.size.diameter,borderWidth:d.size.border,height:d.size.diameter,width:d.size.diameter}})};return c}(h.PureComponent);a.propTypes={"data-testid":(c=b("prop-types")).string,margin:c.string,fill:c.oneOf(["border","filled"]).isRequired,status:c.oneOf(["active","error","inactive","warning"]).isRequired};a.defaultProps={fill:"filled"};e.exports=b("withSUITheme")(a)}),null);
__d("FDSStatusIndicator.react",["React","SUIStatusIndicator.react","SUIStatusIndicatorUniform.fds","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=b("makeSUIFDSPrivateTheme")("FDSStatusIndicator",{SUIStatusIndicator:b("SUIStatusIndicatorUniform.fds")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.fill,d=a.margin;a=a.status;return g.jsx(b("SUIStatusIndicator.react"),{"data-testid":this.props["data-testid"],fill:c,margin:d,status:a,theme:h})};return c}(g.PureComponent);e.exports=b("makeFDSStandardComponent")("FDSStatusIndicator",a)}),null);
__d("useGeoStatusIndicatorStyle",["stylex"],(function(a,b,c,d,e,f){"use strict";var g={root:{borderTopStartRadius:"t7uwrchx",borderTopEndRadius:"jqhqbsb4",borderBottomEndRadius:"imqk0sc9",borderBottomStartRadius:"oh4kp8pt",borderTopStyle:"jytk9n0j",borderEndStyle:"ojz0a1ch",borderBottomStyle:"avm085bc",borderStartStyle:"mtc4pi7f",borderTopWidth:"ad4pap6b",borderEndWidth:"h2d43vlq",borderBottomWidth:"bbj4i962",borderStartWidth:"hkrewfr0",boxSizing:"puibpoiz",display:"jrkk970q",height:"akrhewu5",width:"b606nk03"},active:{backgroundColor:"dgtisqad",borderTopColor:"q3urupdh",borderEndColor:"j50hmtic",borderBottomColor:"je4auon7",borderStartColor:"ionjdrj1"},inactive:{backgroundColor:"mwif8v83",borderTopColor:"ij6qeley",borderEndColor:"lylhakne",borderBottomColor:"a545012l",borderStartColor:"oga36wrw"},warning:{backgroundColor:"l4fb6k93",borderTopColor:"bbtd2gof",borderEndColor:"rbtpow9q",borderBottomColor:"pnv2aqke",borderStartColor:"i5z7j8mh"},error:{backgroundColor:"scokuouk",borderTopColor:"gvklws5j",borderEndColor:"fuuwxa6e",borderBottomColor:"kf8asv75",borderStartColor:"rtjgqjp6"},filled:{borderTopColor:"j7ube65m",borderEndColor:"p1b8v6by",borderBottomColor:"p9yf2bmm",borderStartColor:"nwreg485"},outline:{backgroundColor:"mr4k7n6j"}};function a(a){var b=a.status;a=a.variant;return[g.root,b==="active"&&g.active,b==="inactive"&&g.inactive,b==="warning"&&g.warning,b==="error"&&g.error,a==="filled"&&g.filled,a==="outline"&&g.outline]}e.exports=a}),null);
__d("GeoStatusIndicator.react",["React","makeGeoComponent","stylex","useGeoStatusIndicatorStyle"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(a){var c=a["data-testid"];c=a.status;var d=a.variant;d=d===void 0?"filled":d;a=a.xstyle;c=b("useGeoStatusIndicatorStyle")({status:c,variant:d});return h.jsx("span",{className:(g||(g=b("stylex")))(c,a),"data-testid":void 0})}e.exports=b("makeGeoComponent")("GeoStatusIndicator",a)}),null);
__d("FDSSelectorButton.react",["cx","fbt","FDSFormUtils","FDSMediaItem.react","FDSMultiElementLayoutContext","FDSPrivateInputSelectors","FDSPrivateThemeContext.react","FDSPrivateThemeUtils","FDSStatusIndicator.react","FDSText.react","FlexLayout.react","GeoStatusIndicator.react","Image.react","React","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("FDSFormUtils").getInputState,j=b("FDSPrivateInputSelectors").getInputStyle,k=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=(a.isFocused||a.isMenuShown&&a.isFocusedOnMenuShown)&&!a.isDisabled;return k.jsx(b("FDSMultiElementLayoutContext").Consumer,{children:function(d){var e=d.getLayout;return k.jsx(b("FDSPrivateThemeContext.react").Consumer,{children:function(d){var f=e!=null?e(c):void 0,g=j({isFocused:c,isDisabled:a.isDisabled,isValid:!!a.isValid,size:a.size,hasError:a.hasError,hasWarning:a.hasWarning,isEdited:a.isEdited,atoms:d}),h=i(a.hasError,a.hasWarning,a.isValid);d=b("FDSPrivateThemeUtils").isGeo(d);var o;if(a.isEdited&&d){var p=g,q=p.backgroundColor;p=babelHelpers.objectWithoutPropertiesLoose(p,["backgroundColor"]);g=p;o={backgroundColor:q}}return k.jsxs("div",{"aria-busy":a.busyIndicator!=null?!0:void 0,"aria-disabled":a.isDisabled,"aria-labelledby":a.labelledBy,className:"_7fc2"+(a.isDisabled?" _7ix_":""),"data-testid":a["data-testid"],id:a.id,onBlur:a.onBlur,onClick:a.isDisabled?null:a.onClick,onFocus:a.onFocus,onKeyDown:a.isDisabled?null:a.onKeyDown,onKeyUp:a.isDisabled?null:a.onKeyUp,onMouseDown:a.isDisabled?null:a.onMouseDown,ref:a.buttonRef,role:"button",style:Object.assign({},g,f),tabIndex:0,children:[k.jsx(l,{fit:a.fit,isGeo:d,media:a.media,ratio:a.ratio,size:a.size,statusIndicator:a.statusIndicator}),k.jsx(m,{busyIndicator:a.busyIndicator,isDisabled:a.isDisabled,isGeo:d,label:a.label,placeholder:a.placeholder,style:o}),k.jsx(n,{busyIndicator:a.busyIndicator,isDisabled:a.isDisabled}),h!==void 0&&k.jsx(b("Image.react"),{className:"_3-90",src:b("FDSFormUtils").getIconSrc(h,null,d)})]})}})}})};return c}(k.PureComponent);a.defaultProps={isDisabled:!1,isEdited:!1,isFocused:!1,isFocusedOnMenuShown:!0,isMenuShown:!1,hasError:!1,hasWarning:!1,size:"large"};function l(a){var c=a.media,d=a.statusIndicator;return c==null&&d==null?null:k.jsxs(b("FlexLayout.react"),{align:"center",className:"_7yuj",children:[d&&k.jsx("span",{className:"_3-9a"+(d&&c?" _3-90":""),children:a.statusIndicator}),c&&k.jsx(b("FDSMediaItem.react"),{fit:(d=a.fit)!=null?d:"cover",media:a.media,ratio:a.ratio,size:a.size==="medium"&&!a.isGeo?16:24})]})}function m(a){var c;if(a.busyIndicator!=null)c=h._("Carregando...");else{var d;c=(d=a.label)!=null?d:a.placeholder}d="primary";a.isDisabled?d="disabled":a.label==null&&(d="placeholder");return k.jsx("span",{className:"_7fc8",children:k.jsx("span",{style:a.style,children:k.jsx(b("FDSText.react"),{color:d,size:a.isGeo?"body":"body2",children:c})})})}function n(a){return a.busyIndicator==null?k.jsx("span",{className:"_7fc9"+(a.isDisabled?" _7ixe":"")}):k.jsx("span",{className:"_7fca",children:a.busyIndicator})}e.exports=b("makeFDSStandardComponent")("FDSSelectorButton",a)}),null);
__d("FDSSelectorMenuContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({onClose:function(){}});e.exports=c}),null);
__d("FDSPrivateSelectorMenu.experimental.react",["cssVar","cx","ContextualLayer.react","ContextualLayerAutoFlip","ContextualLayerHideOnScrollOut","ContextualLayerUpdateOnScroll","FDSPrivateThemeContext.react","FDSSelectorButton.react","FDSSelectorMenuContext","FDSStatusIndicator.react","Keys","LayerHideOnBlur","LayerHideOnEscape","React","ScrollableArea.react","WheelEventContain.react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j={ContextualLayerAutoFlip:b("ContextualLayerAutoFlip"),ContextualLayerHideOnScrollOut:b("ContextualLayerHideOnScrollOut"),ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll"),LayerHideOnBlur:b("LayerHideOnBlur"),LayerHideOnEscape:b("LayerHideOnEscape")},k=100,l=272;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=i.createRef(),d.$2=i.createRef(),d.$3=m(d.context,d.props.header!=null),d.$4=function(){return d.$1.current},d.$5=function(){d.setState(function(a){return{isFocused:!0,contextValue:babelHelpers["extends"]({},a.contextValue,{isMenuShown:!1})}});var a=d.$4();a!=null&&a.focus();d.props.onClose()},d.state={isFocused:!1,contextValue:{isMenuShown:!!d.props.autoFocus,onClose:d.$5}},d.$9=function(a){a?d.$6():d.$5()},d.$10=function(a){if(d.props.isDisabled)return;switch(a.keyCode){case b("Keys").SPACE:case b("Keys").RETURN:case b("Keys").UP:case b("Keys").DOWN:a.preventDefault();d.$6();break}},d.$11=function(a){if(d.props.isDisabled)return;!d.$7()?d.$6():d.$5();d.props.onClick&&d.props.onClick(a)},d.$12=function(a){d.setState({isFocused:!1}),d.props.onBlur&&d.props.onBlur(a)},d.$13=function(){d.setState({isFocused:!0})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$6=function(){this.setState(function(a){return{isFocused:!0,contextValue:babelHelpers["extends"]({},a.contextValue,{isMenuShown:!0})}}),this.props.onOpen&&this.props.onOpen()};d.$7=function(){return this.state.contextValue.isMenuShown===!0};d.$8=function(){var a=this.$2.current;return this.$7()&&a?window.getComputedStyle(a).width:k};d.close=function(){this.$5()};d.render=function(){var a=this.props,c=this.context,d=this.$7(),e=this.state.isFocused&&(!d||a.isFocusedOnMenuShown),f=this.props.perfTest_isStrict?d:!0;return i.jsx(b("FDSSelectorMenuContext").Provider,{value:this.state.contextValue,children:i.jsxs("div",{className:"hmxda3hc b162h49t","data-testid":a["data-testid"],ref:this.$2,children:[i.jsx(b("FDSSelectorButton.react"),{busyIndicator:a.busyIndicator,buttonRef:this.$1,"data-testid":a["data-button-testid"],fit:a.fit,hasError:a.hasError,hasWarning:a.hasWarning,id:a.htmlForTargetId,isDisabled:a.isDisabled,isEdited:a.isEdited,isFocused:e,isFocusedOnMenuShown:a.isFocusedOnMenuShown,isMenuShown:d,isValid:a.isValid,label:a.label,labelledBy:a.labelledBy,media:a.media,onBlur:this.$12,onClick:this.$11,onFocus:this.$13,onKeyDown:this.$10,placeholder:a.placeholder,ratio:a.ratio,size:a.size,statusIndicator:a.statusIndicator}),f&&i.jsx(b("ContextualLayer.react"),{behaviors:j,contextRef:this.$4,"data-testid":a["data-menu-testid"],offsetY:this.context.dropdown.offsetY,onToggle:this.$9,position:"below",shown:this.state.contextValue.isMenuShown,children:i.jsxs("div",{className:"_6tor",style:{width:this.$8(),minWidth:(e=a.minMenuWidth)!=null?e:void 0},children:[a.header,i.jsxs("div",{style:this.$3,children:[i.jsx(b("ScrollableArea.react"),{fade:!0,maxHeight:l,style:{padding:c.list.paddingVert+"px "+c.list.paddingHoriz+"px"},children:i.jsx(b("WheelEventContain.react"),{children:a.children})}),this.props.footer!=null&&i.jsx("div",{className:"_8w1w",children:this.props.footer})]})]})})]})})};return c}(i.PureComponent);a.contextType=b("FDSPrivateThemeContext.react");a.defaultProps={hasError:!1,hasWarning:!1,isFocusedOnMenuShown:!0,perfTest_isStrict:!1};function m(a,b){var c={borderTop:"none",borderTopLeftRadius:"0px",borderTopRightRadius:"0px"};return babelHelpers["extends"]({backgroundColor:a.colors.layers.background,borderRadius:a.borderRadius.container,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:a.elevation.depth2},b?c:null)}e.exports=a}),null);
__d("FDSSelectorContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c={focusedValue:null,closeMenuOnSelect:!0,horizontalKeyboardNavigation:function(){},onChange:function(a){},onFocus:function(a){},onNext:function(){},onPrevious:function(){},onRegisterItem:function(a){},selectedValue:null,shouldPassFocusToSelectorItem:!0,size:"large"};d=a.createContext(babelHelpers["extends"]({selectionType:"single"},c));e.exports=d}),null);
__d("FDSBaseSelector.stable.react",["fbt","FDSPrivateSelectorMenu.experimental.react","FDSSelectorContext","FDSStatusIndicator.react","React","divisorSignedModulo","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=g._("Nenhuma op\u00e7\u00e3o dispon\u00edvel");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){var b=d.$2(d.$3,a),c=d.$3[b],e=d.$4(c,d.$3);d.setState(function(b){return{label:e,media:c.media,contextValue:babelHelpers["extends"]({},b.contextValue,{focusedValue:a,selectedValue:a})}});a!==d.props.value&&d.props.onChange(a)},d.$5=function(a){d.setState(function(b){return{contextValue:babelHelpers["extends"]({},b.contextValue,{focusedValue:a})}})},d.$6=function(){var a=d.$2(d.$3,d.state.contextValue.focusedValue),c=d.$3[b("divisorSignedModulo")(a+1,d.$3.length)];d.setState(function(a){return{contextValue:babelHelpers["extends"]({},a.contextValue,{focusedValue:c.value})}})},d.$7=function(){var a=d.$2(d.$3,d.state.contextValue.focusedValue),c=d.$3[b("divisorSignedModulo")(a-1,d.$3.length)];d.setState(function(a){return{contextValue:babelHelpers["extends"]({},a.contextValue,{focusedValue:c.value})}})},d.$8=function(a){var b=d.$3.findIndex(function(b){return b.value===a.value});if(b<0){d.$3.push(a);b=d.$2(d.$3,d.props.value);if(b!==-1){b=d.$3[b];var c=d.$4(b,d.$3);d.setState({label:c,media:b.media})}}},d.$3=[],d.state={label:null,media:null,contextValue:{selectionType:"single",closeMenuOnSelect:!0,focusedValue:d.props.value!=null?d.props.value:null,onChange:d.$1,onFocus:d.$5,onPrevious:d.$7,onNext:d.$6,onRegisterItem:d.$8,selectedValue:d.props.value!=null?d.props.value:null,shouldPassFocusToSelectorItem:!0,size:d.props.size}},d.$9=function(){d.$3=[],d.props.onClose&&d.props.onClose()},d.$10=function(){d.props.value==null&&d.state.contextValue.focusedValue==null&&d.$3[0]!=null&&d.$5(d.$3[0].value),d.props.onOpen&&d.props.onOpen()},c)||babelHelpers.assertThisInitialized(d)}c.getDerivedStateFromProps=function(a,b){if(a.value!==b.contextValue.selectedValue){a=a.value===void 0?null:a.value;return{contextValue:babelHelpers["extends"]({},b.contextValue,{focusedValue:a,selectedValue:a}),label:null,media:null}}return null};var d=c.prototype;d.$4=function(a,b){var c=this.props.displayValue;if(c!=null){b=new Map(b.map(function(a){return[a.value,a.label]}));c=c([a==null?void 0:a.value,a==null?void 0:a.label],b);if(c!=null)return c}return a==null?void 0:a.label};d.$2=function(a,b){return a.findIndex(function(a){return a.value===b})};d.render=function(){var a,c=this.props,d=b("FDSSelectorContext");a=(a=this.state.label)!=null?a:this.$4(this.$3[this.$2(this.$3,this.props.value)],this.$3);var e=h.Children.count(c.children)>0,f=c.isDisabled||!e;e=e?c.placeholder:i;return h.jsx(d.Provider,{value:this.state.contextValue,children:h.jsx(b("FDSPrivateSelectorMenu.experimental.react"),{busyIndicator:c.busyIndicator,"data-button-testid":c["data-button-testid"],"data-menu-testid":c["data-menu-testid"],"data-testid":c["data-testid"],footer:c.footer,hasError:c.hasError,hasWarning:c.hasWarning,htmlForTargetId:c.htmlForTargetId,isDisabled:f,isEdited:c.isEdited,isValid:c.isValid,label:a,media:(d=c.media)!=null?d:this.state.media,minMenuWidth:c.minMenuWidth,onBlur:c.onBlur,onClick:c.onClick,onClose:this.$9,onOpen:this.$10,placeholder:e,ratio:c.ratio,size:c.size,statusIndicator:c.statusIndicator,children:h.jsx("ul",{role:"menu",children:c.children})})})};return c}(h.Component);a.defaultProps={hasError:!1,hasWarning:!1,isDisabled:!1,isEdited:!1,size:"large"};e.exports=b("makeFDSStandardComponent")("FDSBaseSelector",a)}),null);
__d("FDSSelector.react",["FDSBaseSelector.react","FDSFormInputLayout.react","FDSStatusIndicator.react","React","UniqueIDProvider.react","makeFDSStandardComponent"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this,c=this.props,d=c.busyIndicator,e=c.children,f=c.description,h=c.disabledMessage,i=c.displayValue,j=c.errorMessage,k=c.footer,l=c.isDisabled,m=c.isEdited,n=c.isValid,o=c.isOptional,p=c.label,q=c.labelIsHidden,r=c.media,s=c.minMenuWidth,t=c.onBlur,u=c.onClick,v=c.onChange,w=c.onClose,x=c.onOpen,y=c.placeholder,z=c.ratio,A=c.size,B=c.statusIndicator,C=c.tooltipText,D=c.value,E=c.warningMessage;return g.jsx(b("UniqueIDProvider.react"),{children:function(c){return g.jsx(b("FDSFormInputLayout.react"),{description:f,disabledMessage:h,errorMessage:j,infoTooltipText:C,inputId:c,isDisabled:l,isOptional:o,label:p,labelIsHidden:q,warningMessage:E,children:function(f){var h=f.describedBy;f=f.errorMessageId;return g.jsx(b("FDSBaseSelector.react"),{busyIndicator:d,children:e,"data-button-testid":a.props["data-button-testid"],"data-menu-testid":a.props["data-menu-testid"],"data-testid":a.props["data-testid"],describedBy:h,displayValue:i,errorMessageId:f,footer:k,hasError:!!j,hasWarning:!!E,htmlForTargetId:c,isDisabled:l,isEdited:m,isValid:!!n,media:r,minMenuWidth:s,onBlur:t,onChange:v,onClick:u,onClose:w,onOpen:x,placeholder:y,ratio:z,size:A,statusIndicator:B,value:D})}})}})};return c}(g.Component);a.defaultProps={isDisabled:!1,isEdited:!1,isOptional:!1,labelIsHidden:!1,isValid:null,size:"large"};e.exports=b("makeFDSStandardComponent")("FDSSelector",a)}),null);
__d("FDSSelectorItem.react",["requireCond","cr:1345114"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1345114")}),null);
__d("FDSPrivateSelectorItemLayout.react",["cx","FDSBaseCheckboxInput.react","FDSBaseRadioInput.react","FDSMediaItem.react","FDSPrivateDisabledMessageWrapper.react","FDSPrivateFocusLevelType","FDSPrivateThemeContext.react","FDSStatusIndicator.react","FDSText.react","FlexLayout.react","React","cxMargin","emptyFunction","stylex","useBoolean"],(function(a,b,c,d,e,f,g){"use strict";var h=b("FDSPrivateFocusLevelType").FDSElementStateType,i=b("FDSPrivateFocusLevelType").FDSFocusLevelType,j=b("React");c=b("React");var k=c.useContext;function a(a,c){var d=a["aria-describedby"],e=a["data-testid"],f=a.binaryControlRenderer,g=a.disabledMessage,h=a.fit,i=a.isChecked;i=i===void 0?!1:i;var o=a.isDisabled;o=o===void 0?!1:o;var p=a.isFocused;p=p===void 0?!1:p;var q=a.label,r=a.media,s=a.onClick,t=a.onKeyDown,u=a.queryString,v=a.ratio,w=a.selectionType,x=a.size,y=a.statusIndicator,z=a.style,A=a.subText,B=a.truncate;a=a.value;var C=k(b("FDSPrivateThemeContext.react")),D=b("useBoolean")(!1),E=D.value,F=D.setTrue;D=D.setFalse;w=w==="single";var G={isDisabled:o,onChange:b("emptyFunction"),size:x};f!=null?f=f(babelHelpers["extends"]({value:i},G)):w?f=j.jsx(b("FDSBaseRadioInput.react"),babelHelpers["extends"]({checked:i},G)):f=j.jsx(b("FDSBaseCheckboxInput.react"),babelHelpers["extends"]({value:i},G));G=w?"menuitemradio":"menuitemcheckbox";w=n(C,i,o,p,E);C=B==="label"||B==="both";p=B==="subtext"||B==="both";return j.jsx("li",{onMouseEnter:F,onMouseLeave:D,style:z,children:j.jsx(b("FDSPrivateDisabledMessageWrapper.react"),{disabledMessage:g,fdsPrivate_loggerSuffix:"InFDSPrivateSelectorItem",isDisabled:o,children:j.jsxs("div",{"aria-checked":i?"true":"false","aria-describedby":d,"aria-disabled":o?"true":"false",className:"_7zrq"+(o?" _7zq8":""),"data-testid":e,onClick:s,onKeyDown:t,ref:c,role:G,style:w,tabIndex:0,value:a,children:[j.jsx("div",{"aria-hidden":!0,className:"rjrm9yz5",children:f}),j.jsx(l,{fit:h,mediaSrc:r,ratio:v,statusIndicator:y}),j.jsxs(b("FlexLayout.react"),{className:"_7zqa",direction:"vertical",children:[j.jsx(b("FDSText.react"),{color:o?"disabled":"primary",display:C?"truncate":"inline",size:x==="medium"?"body3":"body2",width:"100%",children:j.jsx(m,{label:q,queryString:u})}),j.jsx(b("FDSText.react"),{color:o?"disabled":"secondary",display:p?"truncate":"inline",size:"body3",width:"100%",children:A})]})]})})})}function l(a){if(a.mediaSrc!=null){var c;return j.jsx("div",{className:"_3-9a",children:j.jsx(b("FDSMediaItem.react"),{fit:(c=a.fit)!=null?c:"cover",media:a.mediaSrc,ratio:(c=a.ratio)!=null?c:void 0})})}return a.statusIndicator?j.jsx("span",{className:"_3-9a",children:a.statusIndicator}):null}function m(a){var b=a.label;a=a.queryString;if(a==null||a===""||!b.toLowerCase().includes(a.toLowerCase()))return b;b=b;var c=b.toLowerCase().indexOf(""+a.toLowerCase()+"");a=c+a.length-1;var d=b.slice(0,c);c=b.slice(c,a+1);b=b.slice(a+1);return j.jsxs(j.Fragment,{children:[d,j.jsx("em",{className:"cogx59sf b1o468er dykbmea9 av336ji9 jn9fjf9b sjvk1qgf hd3h8f9s ia6l1c9t r2izb8b4 mdhqgwo7 pw9rpixb f8mrd2d7 i1isax1u d8bxe1gi qmd4glyi",children:c}),b]})}function n(a,b,c,d,e){var f=a.list.item.paddingVert+"px "+a.list.item.paddingHoriz+"px",g=a.list.item.marginVert+"px "+a.list.item.marginHoriz+"px";b=b?a.colors.active:a.colors.flat;d=d||e?i.focus:null;e=b.transform(h["default"],d);c&&(e=a.colors.layers.background);return{backgroundColor:e,borderRadius:a.borderRadius.container,padding:f,margin:g}}e.exports=j.forwardRef(a)}),null);
__d("removeFromArrayAtIndex",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return[].concat(a.slice(0,b),a.slice(b+1))}e.exports=a}),null);
__d("FDSPrivateSelectorItem.react",["FDSPrivateSelectorItemLayout.react","FDSSelectorContext","FDSSelectorMenuContext","FDSStatusIndicator.react","Keys","React","areEqual","removeFromArrayAtIndex","useMergeRefs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useCallback,j=c.useContext,k=c.useEffect,l=c.useRef;function a(a,c){var d,e=j(b("FDSSelectorContext")),f=j(b("FDSSelectorMenuContext")),m=a.media,n=a.label,o=a.queryString,p=a.subText,q=a.value,r=(d=a.isDisabled)!=null?d:!1,s=(g||(g=b("areEqual")))(a.value,e.focusedValue),t=l(null);d=b("useMergeRefs")(t,c);c=e.selectionType==="single"?"single":"multi";var u;e.selectionType==="single"?u=(g||(g=b("areEqual")))(a.value,e.selectedValue):u=e.selectedValue!=null&&e.selectedValue.some(function(c){return(g||(g=b("areEqual")))(c,a.value)});k(function(){e.onRegisterItem({label:a.label,media:a.media,value:a.value})});k(function(){var a;f.isMenuShown===!0&&s&&(a=window.requestAnimationFrame(function(){t.current&&e.shouldPassFocusToSelectorItem===!0&&t.current.focus()}));return function(){window.cancelAnimationFrame(a)}});var v=i(function(c){if(r&&c!=null){c.preventDefault();return}if(e.selectionType==="single")e.onChange(a.value),a.onSelected==null?void 0:a.onSelected();else{c=e.selectedValue!=null?e.selectedValue.findIndex(function(c){return(g||(g=b("areEqual")))(c,a.value)}):-1;e.selectedValue!=null&&c!==-1?e.onChange(b("removeFromArrayAtIndex")(e.selectedValue,c)):e.selectedValue!=null&&(e.onChange([].concat(e.selectedValue,[a.value])),a.onSelected==null?void 0:a.onSelected())}e.closeMenuOnSelect===!0&&f.onClose()},[r,f,a.onSelected,a.value,e]),w=i(function(a){switch(a.keyCode){case b("Keys").RETURN:case b("Keys").SPACE:a.preventDefault();v();break;case b("Keys").DOWN:a.preventDefault();e.onNext();break;case b("Keys").UP:a.preventDefault();e.onPrevious();break;case b("Keys").LEFT:case b("Keys").RIGHT:case b("Keys").BACKSPACE:e.horizontalKeyboardNavigation!=null&&(e.horizontalKeyboardNavigation(),a.preventDefault());break;case b("Keys").ESC:case b("Keys").TAB:a.preventDefault();f.onClose();break}},[v,f,e]);return h.jsx(b("FDSPrivateSelectorItemLayout.react"),{"aria-describedby":a["aria-describedby"],binaryControlRenderer:a.binaryControlRenderer,"data-testid":a["data-testid"],disabledMessage:a.disabledMessage,fit:a.fit,isChecked:u,isDisabled:r,isFocused:s,label:n,media:m,onClick:v,onKeyDown:w,queryString:o,ratio:a.ratio,ref:d,selectionType:c,size:e.size,statusIndicator:a.statusIndicator,style:a.style,subText:p,truncate:a.truncate,value:q})}e.exports=h.forwardRef(a)}),null);
__d("FDSSelectorItem.stable.react",["FDSPrivateSelectorItem.react","FDSStatusIndicator.react","React","makeFDSStandardComponent"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){return g.jsx(b("FDSPrivateSelectorItem.react"),babelHelpers["extends"]({},a,{ref:c}))}e.exports=b("makeFDSStandardComponent")("FDSSelectorItem",g.forwardRef(a))}),null);
__d("SUICard.react",["cx","React","SUIErrorBoundary.react","SUITheme","joinClasses","prop-types","withSUITheme"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("SUITheme").get(this).SUICard;return h.jsx("div",{className:b("joinClasses")("_5h92",this.props.className_DEPRECATED,this.props.margin),"data-testid":void 0,style:babelHelpers["extends"]({},this.props.style,{backgroundColor:a.backgroundColor,borderWidth:a.borderWidth,borderRadius:a.borderRadius,borderColor:a.borderColor,boxShadow:a.boxShadow,width:this.props.width}),children:h.jsx(b("SUIErrorBoundary.react"),{children:this.props.children})})};return c}(h.PureComponent);a.propTypes={"data-testid":(c=b("prop-types")).string,margin:c.string,theme:c.instanceOf(b("SUITheme")),width:c.oneOfType([c.string,c.number])};e.exports=b("withSUITheme")(a)}),null);
__d("VideoBroadcastFlowTypes",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({NORMAL_LATENCY:"NORMAL_LATENCY",LOW_LATENCY:"LOW_LATENCY",HIGH_LATENCY:"HIGH_LATENCY"});e.exports={BroadcastPlaybackMode:a}}),null);
__d("LiveVideoBroadcastAPIActions",["LiveVideoBroadcastDispatcher","VideoBroadcastFlowTypes"],(function(a,b,c,d,e,f){b("VideoBroadcastFlowTypes").BroadcastPlaybackMode;a={deleteAPIReplayVideo:function(){var a={type:"DELETE_API_REPLAY_VIDEO"};b("LiveVideoBroadcastDispatcher").dispatch(a)},apiBroadcastStopped:function(){var a={type:"API_BROADCAST_STOPPED"};b("LiveVideoBroadcastDispatcher").dispatch(a)},apiGoLiveClicked:function(){var a={type:"API_GO_LIVE_CLICKED"};b("LiveVideoBroadcastDispatcher").dispatch(a)},addInputStream:function(){var a={type:"ADD_INPUT_STREAM"};b("LiveVideoBroadcastDispatcher").dispatch(a)},setIs360Video:function(a){a={type:"SET_IS_360_VIDEO",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setIs360Audio:function(a){a={type:"SET_IS_360_AUDIO",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},update360Configuration:function(a){a={type:"UPDATE_360_CONFIGURATION",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setEmbeddable:function(a){a={type:"SET_EMBEDDABLE",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setShouldExpireAfterGoLive:function(a){a={type:"SET_SHOULD_EXPIRE_AFTER_GO_LIVE",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setShowEventLogDialog:function(a){a={type:"SET_SHOW_EVENT_LOG_DIALOG",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setContinuous:function(a){a={type:"SET_CONTINUOUS",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setShouldShowGraphicContentWarning:function(a){a={type:"SET_SHOULD_SHOW_GRAPHIC_CONTENT_WARNING",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setCopyrighted:function(a){a={type:"SET_COPYRIGHTED",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setCopyrightMonitoringType:function(a){a={type:"SET_COPYRIGHT_MONITORING_TYPE",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setCopyrightContentCategory:function(a){a={type:"SET_COPYRIGHT_CONTENT_CATEGORY",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setCopyrightOwnershipCountries:function(a,c){a={type:"SET_COPYRIGHT_OWNERSHIP_COUNTRIES",ownershipCountries:a,areCountriesIncluded:c};b("LiveVideoBroadcastDispatcher").dispatch(a)},setCopyrightRuleID:function(a){a={type:"SET_COPYRIGHT_RULE_ID",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},updateCopyrightWhitelistedFBUsers:function(a){a={type:"UPDATE_COPYRIGHT_WHITELISTED_FB_USERS",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},updateCopyrightWhitelistedIGUserNames:function(a){a={type:"UPDATE_COPYRIGHT_WHITELISTED_IG_USERNAMES",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},updateBackupInputStream:function(a,c){a={type:"UPDATE_BACKUP_INPUT_STREAM",backupStreamURL:a,backupSecureStreamURL:c};b("LiveVideoBroadcastDispatcher").dispatch(a)},broadcastErrorReceived:function(){var a={type:"BROADCAST_ERROR_RECEIVED"};b("LiveVideoBroadcastDispatcher").dispatch(a)},errorStartingAPIBroadcast:function(a,c){a={type:"ERROR_STARTING_API_BROADCAST",errorType:a,additionalInfo:c};b("LiveVideoBroadcastDispatcher").dispatch(a)},setSelectedEncoderType:function(a){a={type:"SET_SELECTED_ENCODER_TYPE",encoderType:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setIsFundraiserSelected:function(a){a={type:"SET_IS_FUNDRAISER_SELECTED",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setIsRehearsal:function(a){a={type:"SET_IS_REHEARSAL",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setCommentatingDisabled:function(a){a={type:"SET_COMMENTATING_DISABLED",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setIsrEnabled:function(a){a={type:"SET_ISR_ENABLED",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setBroadcastPlaybackMode:function(a){a={type:"SET_BROADCAST_PLAYBACK_MODE",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},setEnableEventTicketPromotion:function(a){a={type:"SET_ENABLE_EVENT_TICKET_PROMOTION",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},deleteStreamBehaviorChanged:function(a){a={type:"DELETE_STREAM_BEHAVIOR_CHANGED",value:a};b("LiveVideoBroadcastDispatcher").dispatch(a)},commentModerationChanged:function(){var a={type:"COMMENT_MODERATION_CHANGED"};b("LiveVideoBroadcastDispatcher").dispatch(a)}};e.exports=a}),null);