if (self.CavalryLogger) { CavalryLogger.start_js(["XwLYT"]); }

__d("LiveVideoCometBadge_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"LiveVideoCometBadge_video",type:"Video",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"breaking_status",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_live_streaming",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_premiere",args:null,storageKey:null}]};e.exports=a}),null);
__d("CometTahoeUpNextOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometTahoeUpNextOverlay_video",type:"Video",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"is_live_streaming",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"playable_duration",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"preferred_thumbnail",storageKey:null,args:null,concreteType:"VideoThumbnail",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"image",storageKey:'image(height:145,sizing:"cover-fill-cropped",width:257)',args:[{kind:"Literal",name:"height",value:145},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:257}],concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]}]},{kind:"LinkedField",alias:null,name:"title",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null},{kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities",args:null}]},{kind:"LinkedField",alias:null,name:"owner",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},{kind:"FragmentSpread",name:"CometTahoeVideoOwner_actor",args:null}]},{kind:"FragmentSpread",name:"LiveVideoCometBadge_video",args:null}]};e.exports=a}),null);
__d("CometTahoeVideoOwner_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometTahoeVideoOwner_actor",type:"Actor",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"verification_status",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[{kind:"ScalarField",alias:null,name:"is_verified",args:null,storageKey:null}]}]};e.exports=a}),null);
__d("PageRecommendationsCircleScoreQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"pageID",type:"ID!",defaultValue:null},{kind:"LocalArgument",name:"callsite",type:"ConsiderationAggregatedScoreCallSite",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"pageID"}],c={kind:"LinkedField",alias:null,name:"aggregated_score_info",storageKey:null,args:[{kind:"Variable",name:"callsite",variableName:"callsite"}],concreteType:"ConsiderationAggregatedScoreInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"score",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"color",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"show_circle",args:null,storageKey:null}]};return{kind:"Request",fragment:{kind:"Fragment",name:"PageRecommendationsCircleScoreQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"page",storageKey:null,args:b,concreteType:"Page",plural:!1,selections:[c]}]},operation:{kind:"Operation",name:"PageRecommendationsCircleScoreQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"page",storageKey:null,args:b,concreteType:"Page",plural:!1,selections:[c,{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]},params:{operationKind:"query",name:"PageRecommendationsCircleScoreQuery",id:"2601787329847500",text:null,metadata:{}}}}();e.exports=a}),null);
__d("CometResponsiveColumns.react",["BaseRow.react","BaseRowItem.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");d=b("React");var i=d.useContext,j={container:{maxWidth:"d2edcug0",width:"k4urcfbm"},content:{alignItems:"gs1a9yip",display:"j83agx80",flexDirection:"btwxx1t3",flexWrap:"lhclo0ds",justifyContent:"taijpn5t"},defaultWidth:{width:"tn7ubyq0"},reverse:{flexWrap:"kbz25j0m"}},k={16:{marginTop:"sv5sfqaa",marginEnd:"o22cckgh",marginBottom:"obtkqiv7",marginStart:"fop5sh7t"}},l=h.createContext(16);function a(a){var c=a.children,d=a.containerWidth,e=a.gutterWidth;e=e===void 0?"16":e;var f=a.reverseColumns;f=f===void 0?!1:f;var i=a.testid;i=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","containerWidth","gutterWidth","reverseColumns","testid","xstyle"]);return h.jsx("div",babelHelpers["extends"]({},a,{className:(g||(g=b("stylex")))(j.container,d==="DEFAULT"&&j.defaultWidth,i),"data-testid":void 0,children:h.jsx(b("BaseRow.react"),{xstyle:[j.content,f&&j.reverse,k[e]],children:h.jsx(l.Provider,{value:e,children:c})})}))}var m={FEED:{flexBasis:"gile2uim",maxWidth:"qmfd67dx"},FULL:{flexBasis:"dxtxif39",maxWidth:"gderk4og"},SECONDARY:{flexBasis:"o387gat7",maxWidth:"qmfd67dx"}},n={16:{marginTop:"aov4n071",marginEnd:"oi9244e8",marginBottom:"bi6gxh9e",marginStart:"h676nmdw"}};function c(a){var c=a.children,d=a.columnType,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","columnType","xstyle"]);var f=i(l);return h.jsx(b("BaseRowItem.react"),babelHelpers["extends"]({},a,{expanding:!0,xstyle:[d==="FEED"&&m.FEED,d==="FULL"&&m.FULL,d==="SECONDARY"&&m.SECONDARY,e,n[f]],children:c}))}e.exports={Column:c,Container:a}}),null);
__d("LiveVideoCometBadge.react",["fbt","BaseRow.react","BaseRowItem.react","CometRelay","React","TetraText.react","stylex","LiveVideoCometBadge_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;b("CometRelay").graphql;var j=b("CometRelay").useFragment,k=b("React"),l=function(a,b,c){if(a)return g._("AO VIVO URGENTE");return c?g._("ESTREIA"):b?g._("AO VIVO"):null};function a(a){var c=a.pulse;c=c===void 0?!1:c;var d=a.size;d=d===void 0?"small":d;a=a.video;a=j(h!==void 0?h:h=b("LiveVideoCometBadge_video.graphql"),a);var e=!!a.breaking_status,f=!!a.is_live_streaming;a=!!a.is_premiere;return k.jsx("div",{className:(i||(i=b("stylex"))).dedupe({"background-color-1":"l44iypv3","border-top-start-radius-1":"jk6sbkaj","border-top-end-radius-1":"kdgqqoy6","border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","box-sizing-1":"rq0escxv","display-1":"pq6dq46d","height-1":"datstx6m","margin-top-1":"rs0gx3tq","margin-end-1":"kady6ibp","margin-bottom-1":"dicw6rsg","margin-start-1":"dwxx2s2f"},d==="large"?{"padding-top-1":"l29c1vbm","padding-end-1":"dflh9lhu","padding-bottom-1":"j7796vcc","padding-start-1":"scb9dxdr"}:null,d==="small"?{"padding-top-1":"ipjc6fyt","padding-end-1":"ph5uu5jm","padding-bottom-1":"iuny7tx3","padding-start-1":"b3onmgus"}:null,c?{"animation-direction-1":"afxn4irw","animation-duration-1":"m8weaby5","animation-iteration-count-1":"ee40wjg4","animation-name-1":"q1gqmpn5","animation-timing-function-1":"jbu8tgem"}:null),children:k.jsx(b("BaseRow.react"),{align:"center",verticalAlign:"center",children:k.jsx(b("BaseRowItem.react"),{children:k.jsx(b("TetraText.react"),{color:"white",numberOfLines:1,type:d==="large"?"bodyLink3":"bodyLink4",children:l(e,f,a)})})})})}e.exports=a}),null);
__d("CometPageVerificationIcon.react",["ix","React","TetraIcon.react","fbicon","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c=a.isInverted,d=a.size;a=a.verificationBadge;var e=null,f=b("fbicon")._(g("498144"),12),i=12;d==="large"&&(i=16,f=b("fbicon")._(g("498145"),16));if(c===!0)e=h.jsx(b("TetraIcon.react"),{color:"white",icon:f,size:i});else switch(a){case"BLUE_VERIFIED":e=h.jsx(b("TetraIcon.react"),{color:"highlight",icon:f,size:i});break;case"GRAY_VERIFIED":e=h.jsx(b("TetraIcon.react"),{color:"secondary",icon:f,size:i});break}return e!=null?h.jsx("span",{className:"hrs1iv20 pq6dq46d",children:e}):null}e.exports=a}),null);
__d("CometTahoeEndScreenProgressCircle.react",["CometImage.react","React","stylex","useInterval"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useState;function a(a){var c=a.circleDiameter;c=c===void 0?52:c;var d=a.isMakingProgress,e=a.onProgressDone;a=a.timeoutSec;var f=c/2,i=f*2*Math.PI,j=i/100,k=h(i),l=k[0],m=k[1];k=h(!1);var n=k[0],o=k[1];b("useInterval")(!d||n?null:function(){if(l<=2){m(0);o(!0);return}m(l-j)},a*10,[d,n]);n&&(e&&e());return g.jsxs("div",{className:"ama3r5zh taijpn5t j83agx80 bp9cbjyn",children:[g.jsxs("svg",{className:"hgltlino ggxiycxj hihg3u9x",style:{height:c,width:c},children:[g.jsx("circle",{cx:f,cy:f,fill:"var(--fds-black-alpha-40)",r:f}),g.jsx("circle",{cx:f,cy:f,fill:"transparent",r:f,stroke:"var(--always-white)",strokeDasharray:i,strokeDashoffset:l,strokeWidth:4})]}),g.jsx(b("CometImage.react"),{className:"bsnbvmp4 pmk7jnqg f9o22wc5 myj7ivm5 ad2k81qe km676qkl k7cz35w2 a8c37x1j",src:"/images/video/player/embedded_controls/icons/play.png"})]})}e.exports=a}),null);
__d("CometTahoeVideoOwner.react",["CometPageVerificationIcon.react","CometRelay","React","stylex","CometTahoeVideoOwner_actor.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){a=a.owner;a=h(g!==void 0?g:g=b("CometTahoeVideoOwner_actor.graphql"),a);var c=a.is_verified,d=a.name;a=a.verification_status;c=c===!0?"BLUE_VERIFIED":a;return i.jsxs("div",{children:[i.jsx("span",{children:d}),c!=null&&c!=="NOT_VERIFIED"&&i.jsx("span",{className:"bk00n993 l9j0dhe7 hytbnt81",children:i.jsx(b("CometPageVerificationIcon.react"),{size:"small",verificationBadge:c})})]})}e.exports=a}),null);
__d("CometTahoeUpNextOverlay.react",["ix","fbt","CometImage.react","CometLink.react","FBLogger","CometRelay","CometResponsiveColumns.react","CometTahoeEndScreenProgressCircle.react","CometTahoeVideoOwner.react","CometTextWithEntitiesRelay.react","LiveVideoCometBadge.react","React","TetraText.react","TetraTextPairing.react","VideoPlayerLoggingExternalLogContext","asset","formatDurationSeconds","requireCond","stylex","useCometRouterDispatcher","useCometTahoeChainingDepth","cr:793833","CometTahoeUpNextOverlay_video.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=b("FBLogger")("watch_www_bug_rotation");b("CometRelay").graphql;var l=b("CometRelay").useFragment,m=b("React");c=b("React");var n=c.useContext,o=c.useState,p=b("useCometTahoeChainingDepth").useChainingDepthContext,q={backgroundThumbnail:{backgroundPosition:"skiu6z9h",backgroundSize:"r4lidvzm",borderBottomStartRadius:"qttc61fc",borderTopStartRadius:"jk6sbkaj",height:"m1bnnib3",width:"kfpcsd3p"},cancelLink:{alignItems:"bp9cbjyn",bottom:"d2iitwg3",color:"ljqsnud1",display:"j83agx80",end:"swmj3c3o",paddingBottom:"e5nlhep0",position:"pmk7jnqg",":hover":{textDecoration:"gpro0wi8"}},cancelLinkIcon:{marginEnd:"cgat1ltu"},centeredContainer:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",height:"datstx6m",justifyContent:"taijpn5t",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm"},durationOverlay:{backgroundColor:"d6rk862h",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",bottom:"irdul1xz",end:"qpq5lcxm",marginTop:"f43gzcya",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"bnywmjdh",paddingTop:"fdg1wqfs",paddingEnd:"jxrgncrl",paddingBottom:"ae35evdt",paddingStart:"qnrpqo6b",position:"pmk7jnqg"},headerLink:{color:"ljqsnud1"},liveOverlay:{position:"pmk7jnqg",start:"hnlv2pgd",top:"plgsh5y4"},metaColumn:{flexBasis:"ovwxwvn6"},metadataContainer:{display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",marginTop:"n1l5q3vz",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"fop5sh7t"},thumbnailColumn:{flexBasis:"hwwcs9y8"},upNextOverlay:{animationDuration:"ipxafjjy",animationFillMode:"j1l0snac",animationIterationCount:"h9pa7xm5",animationName:"sbevj9st",backgroundColor:"by8nzva6",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",bottom:"cdjodzko",end:"swmj3c3o",height:"m1bnnib3",lineHeight:"soycq5t1",opacity:"pedkr2u6",position:"pmk7jnqg",width:"eezhb0co"},upNextText:{textShadow:"osv5lhw2"}};function a(a){var c=a.initialTracePolicy,d=a.isMakingProgress,e=a.logTahoeEvent,f=a.navigateToNextVideo,r=a.nextVideoURL,s=a.onCancelCallback,t=a.onProgressDone,u=a.reactionVideoChannelType,v=a.subOrigin,w=a.timeoutSec,x=a.video;a=a.visible;var y=o(!1),z=y[0];y=y[1];x=l(i!==void 0?i:i=b("CometTahoeUpNextOverlay_video.graphql"),x);var A=n(b("VideoPlayerLoggingExternalLogContext")),B=A.externalLogID;A=A.externalLogType;var C=p(),D=C.chainingDepthDispatch;C=(C=x.preferred_thumbnail)==null?void 0:(C=C.image)==null?void 0:C.uri;C=C!=null?{backgroundImage:"url("+C+")"}:{backgroundColor:"var(--disabled-icon)"};C=m.jsx("div",{className:(j||(j=b("stylex")))(q.backgroundThumbnail),style:C});var E=!!x.is_live_streaming,F=E?m.jsx("div",{className:(j||(j=b("stylex")))(q.liveOverlay),children:m.jsx(b("LiveVideoCometBadge.react"),{pulse:!0,size:"small",video:x})}):null,G=x.playable_duration;E=!E&&G!=null?m.jsx("div",{className:(j||(j=b("stylex")))(q.durationOverlay),children:m.jsx(b("TetraText.react"),{color:"white",type:"body4",children:b("formatDurationSeconds")(G)})}):null;G=(G=x.owner)==null?void 0:G.name;var H=x.title,I=null;H!=null&&(H==null?void 0:H.text)?I=m.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:H}):G!=null&&(I=h._("V\u00eddeo de {name}",[h._param("name",G)]));H=x.owner!=null?m.jsx(b("CometTahoeVideoOwner.react"),{owner:x.owner}):null;var J=b("useCometRouterDispatcher")(),K={externalLogID:B,externalLogType:A,initialTracePolicy:c,playerSubOrigin:v,reactionVideoChannelType:u};G=f||function(){b("cr:793833")!=null&&b("cr:793833").go(r),J==null?k.warn("Route dispatcher is null, unable to navigate to next video."):r===""?k.warn("Cannot use Comet Router to navigate to an empty URL."):(e&&e("up_next_overlay_redirect_on_click"),D&&D({type:"INCREMENT"}),J.go(r,{passthroughProps:K,target:"self"}))};x=m.jsx(b("CometLink.react"),{onClick:G,xstyle:q.headerLink,children:I});a&&!z&&(y(!0),e&&e("up_next_overlay_shown"));return a?m.jsx("div",{className:(j||(j=b("stylex")))(q.upNextOverlay),children:m.jsxs(b("CometResponsiveColumns.react").Container,{children:[m.jsx(b("CometResponsiveColumns.react").Column,{xstyle:q.thumbnailColumn,children:m.jsxs(b("CometLink.react"),{onClick:G,children:[C,m.jsxs("div",{className:(j||(j=b("stylex")))(q.centeredContainer),children:[m.jsx(b("CometTahoeEndScreenProgressCircle.react"),{circleDiameter:52,isMakingProgress:d,onProgressDone:t,timeoutSec:w}),m.jsx("div",{className:(j||(j=b("stylex")))(q.upNextText),children:m.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized3",children:h._("A SEGUIR")})})]}),E,F]})}),m.jsxs(b("CometResponsiveColumns.react").Column,{xstyle:q.metaColumn,children:[m.jsx("div",{className:(j||(j=b("stylex")))(q.metadataContainer),children:m.jsx(b("TetraTextPairing.react"),{body:H,bodyColor:"disabled",bodyLineLimit:1,headline:x,headlineColor:"white",headlineLineLimit:3,level:4})}),m.jsx(b("CometLink.react"),{onClick:s,children:m.jsxs("div",{className:(j||(j=b("stylex")))(q.cancelLink),children:[m.jsx(b("CometImage.react"),{className:(j||(j=b("stylex")))(q.cancelLinkIcon),src:g("368787")}),m.jsx(b("TetraText.react"),{color:"white",type:"headline3",children:h._("Cancelar")})]})})]})]})}):null}e.exports=a}),null);
__d("CometVideoHomeHeroVideoGlimmer.react",["BaseGlimmer.react","React","gkx","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(){return h.jsx("div",{className:(g||(g=b("stylex"))).dedupe({"background-color-1":"cddn0xzi","display-1":"j83agx80","justify-content-1":"taijpn5t","margin-top-1":"trrkgow7","margin-end-1":"tci0nj69","margin-bottom-1":"oygrvhab","margin-start-1":"id8gkqje","overflow-x-1":"ni8dbmo4","overflow-y-1":"stjgntxs","padding-top-1":"jb3vyjys","padding-end-1":"rz4wbd8a","padding-bottom-1":"qt6c0cv9","padding-start-1":"a8nywdso","width-1":"k4urcfbm"},b("gkx")("708253")?{"height-1":"cxj30y35"}:{"height-1":"lccpc8tu"}),children:h.jsx("div",{className:"d2edcug0 nwf6jgls taijpn5t j83agx80",children:h.jsx(b("BaseGlimmer.react"),{className:"k4urcfbm nwf6jgls",index:0})})})}e.exports=a}),null);
__d("CometVideoHomeLiveAutoplayContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("CometVideoHomeLiveContext",["React"],(function(a,b,c,d,e,f){"use strict";c=b("React");function a(){}d=c.createContext({hasInjectedVideo:!1,heroVideoID:null,hotswapVideoID:null,setHeroVideoID:a,setHotswapVideoID:a,setVideoMuted:a,updateVisibleVideoIDs:a,videoMuted:!0,visibleVideoIDs:{}});e.exports=d}),null);
__d("VideoHomeVerifiedPageTooltip.react",["fbt","React","Tooltip.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("Tooltip.react"),{tooltip:h.jsxs("div",{children:[h.jsx(b("XUIText.react"),{display:"block",weight:"bold",children:g._("P\u00e1gina verificada")}),h.jsx(b("XUIText.react"),{display:"block",children:g._("O Facebook confirmou que esta \u00e9 uma P\u00e1gina aut\u00eantica para esta figura p\u00fablica, empresa de m\u00eddia ou marca.")})]}),children:this.props.children})};return c}(h.PureComponent);e.exports=a}),null);
__d("VideoMetadataOverlay.react",["cx","React","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useEffect,j=c.useState;function a(a){var c=a.overlay,d=a.vpc;a=j(!1);var e=a[0],f=a[1];a=j(!1);var g=a[0],k=a[1];a=j("unknown");var l=a[0],m=a[1];i(function(){var a=new(b("SubscriptionsHandler"))();a.addSubscriptions(d.addListener("stateChange",function(){m(d.getState())}),d.addListener("beginPlayback",function(){var a=d.getOption("VideoControls","areControlsVisible");f(!a)}),d.addListener("VideoControls/visibilityUpdate",function(a){a=a.areControlsVisible;return f(!a)}),d.addListener("TahoeController/exitTahoe",function(){k(!1)}),d.addListener("TahoeController/enterTahoe",function(){k(!0)}));return function(){a.release()}});if(!d||!c||l==="destroyed")return null;a=(l==="paused"||l==="ready"||l==="loading"||l==="playing")&&!e&&!g;return h.jsx("div",{className:(a?"":"_8klx")+(a?" _8mfz":""),children:c})}e.exports=a}),null);
__d("VideoComponentWithMetadataOverlay.react",["React","SubscriptionsHandler","VideoMetadataOverlay.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={hidden:!1,vpc:null},d.subscriptionsHandler=new(b("SubscriptionsHandler"))(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.enable=function(a){var b=this;this.setState({vpc:a});this.subscriptionsHandler.addSubscriptions(a.addListener("enterWatchAndScroll",function(){b.setState({hidden:!0})}),a.addListener("exitWatchAndScroll",function(){b.setState({hidden:!1})}))};d.disable=function(){this.subscriptionsHandler.release()};d.render=function(){return!this.state.vpc||this.state.hidden?null:g.jsx(b("VideoMetadataOverlay.react"),{overlay:this.props.overlay,vpc:this.state.vpc})};return c}(g.PureComponent);e.exports=a}),null);
__d("VideoWithTahoeExitAutoplay",[],(function(a,b,c,d,e,f){"use strict";a=function(a){var b=this;this.$3=function(){b.$1.play("autoplay_initiated"),b.$2||b.$1.unmute()};this.$1=a;a.addListener("TahoeController/exitTahoe",this.$3);a.addListener("unmuteVideo",function(){b.$2=!1});a.addListener("muteVideo",function(){b.$2=!0});this.$2=a.isMuted()||a.getVolume()===0};e.exports=a}),null);
__d("VideoComponentWithTahoeExitAutoplay.react",["React","VideoWithTahoeExitAutoplay"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){this.$1=new(b("VideoWithTahoeExitAutoplay"))(a)};d.disable=function(){};d.shouldComponentUpdate=function(){return!1};d.render=function(){return null};return c}(a.Component);e.exports=c}),null);
__d("ConsiderationAggregatedScoreCallSite",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({GRAPHQL:"graphql",GRAPHAPI:"graphapi",PAGE_HEADER_SOCIAL_CONTEXT:"page_header_social_context",PAGE_COMPARISON_CARD_NT:"page_comparison_card_nt",PAGE_RECOMMENDATIONS_REACTION_UNIT:"page_recommendations_reaction_unit",SEARCH_RANKED_HOVERCARD:"search_ranked_hovercard",LOCAL_SEARCH_PLACE_IMAGE_NT:"local_search_place_image_nt",REVIEW_TAB_HEADER_CARD_NT:"review_tab_header_card_nt",LOCAL_SURFACE_PLACE_ROW_NT:"local_surface_place_row_nt",LOCAL_SURFACE_PLACE_PILE_NT:"local_surface_place_pile_nt",LOCAL_SURFACE_PILE_VIEW_MODEL_FACTORY_NT:"local_surface_pile_view_nt",UNSOLICITED_RECOMMENDATION_ACTION_LINK_NT:"unsolicited_recommendations_action_link_nt",RELATED_PAGES:"related_pages",SOCIAL_TREX:"social_trex",SEARCH_PLACE_TAB:"search_place_tab",SEARCH_RESULT_SMALL:"search_result_small",SEARCH_RESULT_MEDIUM:"search_result_medium",SEARCH_RESULT_LARGE:"search_result_large",SEARCH_RESULT_XLARGE:"search_result_xlarge",SEARCH_HIGH_CONFIDENCE_PAGE:"search_high_confidence_page",PAGE_REVIEW:"page_review",PAGE_METABOX:"page_metabox",REX_CARD:"rex_card",SCORE_EXPLAINER:"score_explainer",ORDER_FOOD:"order_food",PAGE_CARD:"page_card",CAROUSEL_CARD:"carousel_card",PAGE_TAB:"page_tab",LOCATION_CARD_MSITE:"location_card_msite",PAGES_HIGHLIGHT_COLUMN_REDESIGN_RELATED_PAGES:"pages_highlight_column_redesign_related_pages",MESSENGER_PAGE_SHARE:"messenger_page_share",PAGE_PYML_WWW:"page_pyml_www",PAGE_PYML_NT:"page_pyml_nt",PEOPLE_ALSO_LIKE_NT:"people_also_like_nt",LOCAL_PAGE_SUBSCRIPTIONS_LANDING_PAGE_NT:"local_page_subscriptions_landing_page_nt",RELATED_PAGES_RHC:"related_pages_rhc",PAGE_PSYM_NT:"page_psym_nt",OFFERS_GRAPHQL:"offers_graphql",OFFERS_DETAILS_VIEW_NT:"offers_details_view_nt",FOOD_DRINK_GRAPHQL:"food_drink_graphql",CITY_GUIDES_GRAPHQL:"city_guides_graphql",MARKET_PLACE_GRAPHQL:"market_place_graphql",SERVICES_GRAPHQL:"services_graphql",JOBS_GRAPHQL:"jobs_graphql",LOCAL_SERVICES_GRAPHQL:"local_services_graphql",MESSENGER_CTM_ADS:"messenger_ctm_ads",MESSENGER_INBOX_ADS:"messenger_inbox_ads"})}),null);
__d("PageRecommendationsCircleScoreType",["ConsiderationAggregatedScoreCallSite","keyMirror"],(function(a,b,c,d,e,f){"use strict";c=(a=b("ConsiderationAggregatedScoreCallSite")).SEARCH_RESULT_SMALL;d=a.SEARCH_RESULT_MEDIUM;f=a.SEARCH_RESULT_LARGE;var g=a.SEARCH_RESULT_XLARGE,h=a.PAGE_REVIEW,i=a.PAGE_METABOX,j=a.REX_CARD,k=a.SCORE_EXPLAINER,l=a.ORDER_FOOD,m=a.PAGE_PYML_WWW,n=a.SEARCH_RANKED_HOVERCARD,o=a.SEARCH_PLACE_TAB,p=a.PAGE_CARD,q=a.CAROUSEL_CARD,r=a.LOCATION_CARD_MSITE,s=a.PAGES_HIGHLIGHT_COLUMN_REDESIGN_RELATED_PAGES;a=a.MESSENGER_PAGE_SHARE;b=b("keyMirror")({SEARCH_RESULT_SMALL:c,SEARCH_RESULT_MEDIUM:d,SEARCH_RESULT_LARGE:f,SEARCH_RESULT_XLARGE:g,PAGE_REVIEW:h,PAGE_METABOX:i,REX_CARD:j,SCORE_EXPLAINER:k,ORDER_FOOD:l,PAGE_PYML_WWW:m,SEARCH_RANKED_HOVERCARD:n,SEARCH_PLACE_TAB:o,PAGE_CARD:p,CAROUSEL_CARD:q,LOCATION_CARD_MSITE:r,PAGES_HIGHLIGHT_COLUMN_REDESIGN_RELATED_PAGES:s,MESSENGER_PAGE_SHARE:a});e.exports=b}),null);
__d("PageRecommendationsCircleScore.react",["ix","cx","invariant","Image.react","PageRecommendationsCircleScoreType","React","RelayFBEnvironment","RelayModern","asset","formatNumber","promiseDone","PageRecommendationsCircleScoreQuery.graphql"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=b("React"),l=b("RelayModern").fetchQuery;b("RelayModern").graphql;var m=(a=b("PageRecommendationsCircleScoreType")).SEARCH_RESULT_SMALL,n=a.SEARCH_RESULT_MEDIUM,o=a.SEARCH_RESULT_LARGE,p=a.SEARCH_RESULT_XLARGE,q=a.PAGE_REVIEW,r=a.PAGE_METABOX,s=a.REX_CARD,t=a.SCORE_EXPLAINER,u=a.ORDER_FOOD,v=a.PAGE_PYML_WWW,w=a.SEARCH_RANKED_HOVERCARD,x=a.SEARCH_PLACE_TAB,y=a.PAGE_CARD,z=a.CAROUSEL_CARD,A=a.LOCATION_CARD_MSITE,B=a.PAGES_HIGHLIGHT_COLUMN_REDESIGN_RELATED_PAGES,C=a.MESSENGER_PAGE_SHARE,D={SEARCH_RESULT_SMALL:g("515097"),SEARCH_RESULT_MEDIUM:g("515097"),SEARCH_RESULT_LARGE:g("515097"),SEARCH_RESULT_XLARGE:g("515097"),PAGE_REVIEW:g("515099"),PAGE_METABOX:g("515097"),REX_CARD:g("515097"),SCORE_EXPLAINER:g("515099"),ORDER_FOOD:g("515097"),PAGE_PYML_WWW:g("515097"),SEARCH_RANKED_HOVERCARD:g("515097"),SEARCH_PLACE_TAB:g("515097"),PAGE_CARD:g("515097"),CAROUSEL_CARD:g("515097"),LOCATION_CARD_MSITE:g("515097"),PAGES_HIGHLIGHT_COLUMN_REDESIGN_RELATED_PAGES:g("515097"),MESSENGER_PAGE_SHARE:g("515097")},E=j!==void 0?j:j=b("PageRecommendationsCircleScoreQuery.graphql");c=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=!1,b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$2()};d.componentDidUpdate=function(a,b){this.props.pageIDString!==a.pageIDString&&this.$2()};d.componentWillUnmount=function(){this.$1=!0};d.render=function(){this.props.pageIDString!==void 0||i(0,370);return this.state===null||this.state.rating===void 0||this.state.showCircle===!1||this.state.color===void 0?null:k.jsx("div",{className:"_672g"+(this.props.scoreType===m?" _1v1b":"")+(this.props.scoreType===n?" _1v1c":"")+(this.props.scoreType===o?" _1v1e":"")+(this.props.scoreType===p?" _1v1h":"")+(this.props.scoreType===q?" _1f47":"")+(this.props.scoreType===r?" _4okn":"")+(this.props.scoreType===s?" _67wa":"")+(this.props.scoreType===t?" _1nnu":"")+(this.props.scoreType===u?" _6d33":"")+(this.props.scoreType===v?" _6e2c":"")+(this.props.scoreType===w?" _6g9k":"")+(this.props.scoreType===x?" _6hp2":"")+(this.props.scoreType===y?" _6hp3":"")+(this.props.scoreType===z?" _82s9":"")+(this.props.scoreType===A?" _6huo":"")+(this.props.scoreType===B?" _6j7b":"")+(this.props.scoreType===C?" _6khv":""),style:{backgroundColor:this.state.color},children:this.$3()})};d.$2=function(){var a=this;b("promiseDone")(l(b("RelayFBEnvironment"),E,{pageID:this.props.pageIDString,callsite:this.props.scoreType}),function(b){var c,d;d=(d=b.page)!=null?(d=d.aggregated_score_info)!=null?d.score:d:d;c=(c=b.page)!=null?(c=c.aggregated_score_info)!=null?c.show_circle:c:c;b=(b=b.page)!=null?(b=b.aggregated_score_info)!=null?b.color:b:b;a.$1||a.setState({rating:d!==null?Number(d):void 0,showCircle:c!==null?c:!1,color:b!==null?b:void 0})})};d.$3=function(){var a=Number(this.state.rating);if(a===10)return b("formatNumber")(a,0);return a===0&&this.state.showCircle===!0?this.$4():b("formatNumber")(a,1)};d.$4=function(){if(this.props.scoreType===z){this.setState({showCircle:!1});return null}var a=D[this.props.scoreType];return k.jsx(b("Image.react"),{src:a})};return c}(k.Component);e.exports=c}),null);