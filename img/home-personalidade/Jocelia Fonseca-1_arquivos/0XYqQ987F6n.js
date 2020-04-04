if (self.CavalryLogger) { CavalryLogger.start_js(["lkdB+"]); }

__d("NotificationJewelReminderDialog.react",["cx","fbt","invariant","Arbiter","Image.react","ImageBlock.react","LayerFadeOnHide","LayerFadeOnShow","React","ShimButton.react","SubscriptionsHandler","TimeSlice","XUIContextualDialog.react","clearTimeout","intlList","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=new(b("SubscriptionsHandler"))(),d.state={shown:!0},d.$3=function(){b("clearTimeout")(d.$1)},d.$4=function(a){d.$5(),d.props.onClick&&d.props.onClick(a)},d.$6=function(){d.$3()},d.$7=function(){d.$5()},d.$5=function(){d.setState({shown:!1},function(){d.props.onHide&&d.props.onHide()})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){var a=this;this.$1=b("setTimeoutAcrossTransitions")(this.$5,this.props.showTime);this.$2.addSubscriptions(b("Arbiter").subscribe("layer_shown",function(c,d){d&&d.type==="Jewel"&&b("TimeSlice").guard(a.$5,"JewelOpen Notification reminder",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()}),{remove:this.$3})};d.componentWillUnmount=function(){this.$3(),this.$2.release()};d.$8=function(){var a=this.props.names.map(function(a){return j.jsx("strong",{children:a})});switch(this.props.jewelType){case"notification":return h._({"*":"Novas notifica\u00e7\u00f5es de {list of notification senders}","_1":"Nova notifica\u00e7\u00e3o de {list of notification senders}"},[h._plural(this.props.reminderCount),h._param("list of notification senders",b("intlList")(a))]);case"request":var c=this.props.reminderCount-a.length;if(c>0){if(a.length===0)return h._({"*":"{number of friend requests} solicita\u00e7\u00f5es de amizade","_1":"1 solicita\u00e7\u00e3o de amizade"},[h._plural(this.props.reminderCount,"number of friend requests")]);else if(a.length===1)return h._({"*":{"*":"{number of friend requests} solicita\u00e7\u00f5es de amizade de {name of person} e outras {number of unnamed people} pessoas","_1":"{number of friend requests} solicita\u00e7\u00f5es de amizade de {name of person} e 1 outra pessoa"},"_1":{"*":"1 solicita\u00e7\u00e3o de amizade de {name of person} e outras {number of unnamed people} pessoas","_1":"1 solicita\u00e7\u00e3o de amizade de {name of person} e 1 outra pessoa"}},[h._plural(this.props.reminderCount,"number of friend requests"),h._param("name of person",a[0]),h._plural(c,"number of unnamed people")]);else if(a.length>=2)return h._({"*":{"*":"{number of friend requests} solicita\u00e7\u00f5es de amizade de {name of first person}, {name of second person} e outras {number of unnamed people} pessoas","_1":"{number of friend requests} solicita\u00e7\u00f5es de amizade de {name of first person}, {name of second person} e 1 outra pessoa"},"_1":{"*":"1 solicita\u00e7\u00e3o de amizade de {name of first person}, {name of second person} e outras {number of unnamed people} pessoas","_1":"1 solicita\u00e7\u00e3o de amizade de {name of first person}, {name of second person} e 1 outra pessoa"}},[h._plural(this.props.reminderCount,"number of friend requests"),h._param("name of first person",a[0]),h._param("name of second person",a[1]),h._plural(c,"number of unnamed people")])}else return h._({"*":"{number of friend requests} solicita\u00e7\u00f5es de amizade de {list of friend request senders}","_1":"1 solicita\u00e7\u00e3o de amizade de {list of friend request senders}"},[h._plural(this.props.reminderCount,"number of friend requests"),h._param("list of friend request senders",b("intlList")(a))]);default:i(0,4391,this.props.jewelType)}};d.render=function(){var a=this.props.jewelType==="request"?h._({"*":"Novas solicita\u00e7\u00f5es de amizade","_1":"Nova solicita\u00e7\u00e3o de amizade"},[h._plural(this.props.reminderCount)]):h._({"*":"Novas notifica\u00e7\u00f5es","_1":"Nova notifica\u00e7\u00e3o"},[h._plural(this.props.reminderCount)]);return j.jsx(b("XUIContextualDialog.react"),{alignment:"right",autoFocus:!1,behaviors:{LayerFadeOnShow:b("LayerFadeOnShow"),LayerFadeOnHide:b("LayerFadeOnHide")},context:this.props.context,dialogRole:"alert",focusContextOnHide:!1,label:a,offsetY:-10,position:"below",shown:this.state.shown,width:210,children:j.jsx(b("ShimButton.react"),{className:"_5bov",onClick:this.$4,children:j.jsx("div",{onMouseEnter:this.$6,onMouseLeave:this.$7,children:j.jsxs(b("ImageBlock.react"),{children:[j.jsx(b("Image.react"),{className:"_5bow",src:this.props.photoURI}),j.jsx("div",{children:this.$8()})]})})})})};return c}(j.Component);e.exports=a}),null);
__d("NotificationJewelReminder",["DOMQuery","NotificationJewelReminderDialog.react","React","ReactDOM","Toggler","ge"],(function(a,b,c,d,e,f){var g=b("React"),h="fbNotificationsJewel",i="fbRequestsJewel";function j(a,c,d,e,f,j){var k=b("ge")(e);if(k==null||b("Toggler").getInstance(b("ge")(h)).isShown()||b("Toggler").getInstance(b("ge")(i)).isShown()){j&&j();return}b("ReactDOM").render(g.jsx(b("NotificationJewelReminderDialog.react"),{context:b("DOMQuery").scry(k,".jewelButton")[0],jewelType:e===h?"notification":"request",names:c,onClick:function(){b("Toggler").show(k)},onHide:j,photoURI:a,reminderCount:d,showTime:f}),document.createElement("div"))}function k(a,b){j(a.friendRequestData.pics[0],a.friendRequestData.names,a.friendRequestData.count,i,a.showTimeMs,b)}function l(a){j(a.notificationData.photoURI,a.notificationData.names,a.notificationData.names.length,h,a.showTimeMs)}a={init:function(a){a.friendRequestData?k(a,function(){a.notificationData&&l(a)}):a.notificationData&&l(a)}};e.exports=a}),null);