if (self.CavalryLogger) { CavalryLogger.start_js(["tzw1d"]); }

__d("dangerouslyBypassDispatchError",[],(function(a,b,c,d,e,f){"use strict";function a(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];setTimeout(function(){a.apply(null,c)},0)}e.exports=a}),null);
__d("CommentVoteReactionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:0,UPVOTE:1,DOWNVOTE:2})}),null);
__d("CommentVoteUIVersion",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:"none",INSIDE_BLING_BAR:"inside_bling_bar",VERTICAL_ON_THE_SIDE:"vertical_on_the_side"})}),null);
__d("FeedbackActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHANGE_ACCEPTED_ANSWER:"fa-type:change-accepted-answer",COMMENT_LIKE:"fa-type:comment-like",COMMENT_REACTION:"fa-type:comment-reaction",COMMENT_SET_SPAM:"fa-type:mark-spam",COMMENT_KEEP_SPAM:"fa-type:keep_spam",COMMENT_APPEAL_SPAM:"fa-type:appeal_spam",COMMENT_SECURE_ACCOUNT:"fa-type:secure_account",COMMENT_VOTE:"fa-type:comment_vote",DELETE_COMMENT:"fa-type:delete-comment",DELETE_COMMENT_REMOVE_COMMENTER:"fa-type:delete_comment_remove_commenter",DISABLE_COMMENTS:"fa-type:disable-comments",LIVE_DELETE_COMMENT:"fa-type:live-delete-comment",LIKE_ACTION:"fa-type:like",SUBSCRIBE_ACTION:"fa-type:subscribe",SHARE_COUNT_UPDATE_ACTION:"fa-type:share_count_update",REMOVE_PREVIEW:"fa-type:remove-preview",MARK_COMMENT_SPAM:"fa-type:mark-spam",MUTE_MEMBER:"fa-type:mute-member",CONFIRM_COMMENT_REMOVAL:"fa-type:confirm-remove",TRANSLATE_COMMENT:"fa-type:translate-comment",TRANSLATE_ALL:"fa-type:translate-all-comments",COMMENT_LIKECOUNT_UPDATE:"fa-type:comment-likecount-update",ADD_COMMENT_ACTION:"fa-type:add-comment",REACTION:"fa-type:reaction",UPDATE_CONSTITUENT_BADGE:"fa-type:comment_update_constituent_title",COMMENT_AUTHOR_PIN_CHANGE:"fa-type:comment_author_pin_change"})}),null);
__d("FeedbackPayloadSourceType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:0,INITIAL_SERVER:1,LIVE_SEND:2,USER_ACTION:3,STREAMING:4,COLLAPSE_ACTION:7,ENDPOINT_LIKE:10,ENDPOINT_COMMENT_LIKE:11,ENDPOINT_ADD_COMMENT:12,ENDPOINT_EDIT_COMMENT:13,ENDPOINT_DELETE_COMMENT:14,ENDPOINT_HIDE_COMMENT:16,ENDPOINT_REMOVE_PREVIEW:17,ENDPOINT_ID_COMMENT_FETCH:18,ENDPOINT_COMMENT_FETCH:19,ENDPOINT_TRANSLATE_COMMENT:20,ENDPOINT_BAN:21,ENDPOINT_SUBSCRIBE:22,ENDPOINT_COMMENT_LIKECOUNT_UPDATE:23,ENDPOINT_DISABLE_COMMENTS:24,ENDPOINT_ACTOR_CHANGE:25,ENDPOINT_REACTION:26,ENDPOINT_PAGES_MODERATION:27,ENDPOINT_COMMENT_REACTION:28,ENDPOINT_COMMENT_ANSWER_ACCEPT:29,ENDPOINT_COMMENT_KEEP_SPAM:30,ENDPOINT_COMMENT_APPEAL_SPAM:31,ENDPOINT_COMMENT_SECURE_ACCOUNT:32,ENDPOINT_DELETE_COMMENT_AND_REMOVE_COMMENTER:33,ENTPOINT_MUTE_MEMBER:34,ENDPOINT_SUBSCRIBE_COMMENT:35,ENDPOINT_HIDE_TEXT_DELIGHTS:36,ENDPOINT_SEND_MESSAGE:37,ENDPOINT_COMMENT_VOTE:38,ENDPOINT_AUTHOR_PINNED_COMMENT:39,ENDPOINT_DELETE_COMMENT_WTH_FEEDBACK:40})}),null);
__d("UFIFeedbackMode",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EXPANDED:"expanded",NONE:"none",NEVER:"never",TOGGLE:"toggle"})}),null);
__d("UFIPaging",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TOP:"top",BOTTOM:"bottom",ALL:"all"})}),null);
__d("UFIStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DELETED:"status:deleted",SPAM:"status:spam",SPAM_DISPLAY:"status:spam-display",LIVE_DELETED:"status:live-deleted",FAILED_ADD:"status:failed-add",FAILED_EDIT:"status:failed-edit",PENDING_EDIT:"status:pending-edit"})}),null);
__d("UFIConstants",["FeedbackActionType","CommentVoteReactionType","CommentVoteUIVersion","UFIFeedbackMode","FeedbackSourceType","FeedbackPayloadSourceType","UFIStatus","UFIPaging"],(function(a,b,c,d,e,f){"use strict";a=80;c={UFIActionType:b("FeedbackActionType"),UFICommentVoteType:b("CommentVoteReactionType"),UFICommentVoteUIVersion:b("CommentVoteUIVersion"),UFIFeedbackMode:b("UFIFeedbackMode"),UFIFeedbackSourceType:b("FeedbackSourceType"),UFIPayloadSourceType:b("FeedbackPayloadSourceType"),UFIStatus:b("UFIStatus"),UFIPaging:b("UFIPaging"),attachmentTruncationLength:a,commentTruncationLength:420,commentTruncationMaxLines:3,commentTruncationPercent:.6,commentURLTruncationLength:60,infiniteScrollRangeForQANDAPermalinks:1e3,maxScrollDistanceForAutoScroll:60,minCommentsForOrderingModeSelector:1,unavailableCommentKey:"unavailable_comment_key"};e.exports=c}),null);
__d("ReactDispatcher_DEPRECATED",["Dispatcher_DEPRECATED","ReactDOM"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.dispatch=function(c){var d=this;b("ReactDOM").unstable_batchedUpdates(function(){a.prototype.dispatch.call(d,c)})};return c}(b("Dispatcher_DEPRECATED"));e.exports=a}),null);
__d("UFICommentActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHANGE_REACTION:"comment_change_reaction",CHANGE_REACTION_FAILURE:"comment_change_reaction_failure",CHANGE_REACTION_SUCCESS:"comment_change_reaction_success",CHANGE_VISIBILITY:"comment_change_visibility",CHANGE_VOTE:"comment_change_vote",CHANGE_VOTE_FAILURE:"comment_change_vote_failure",CHANGE_VOTE_SUCCESS:"comment_change_vote_success",EDIT:"comment_edit",EMBED:"embed",DELETE_COMMENT_AND_REMOVE_COMMENTER:"comment_delete_and_commenter_remove",DELETE_COMMENT_WITH_FEEDBACK:"comment_delete_with_feedback",MANAGE_CONSTITUENT_BADGE:"comment_manage_constituent_badge",MOUNTED:"comment_mounted",MUTE_MEMBER:"commenter_muted",REMOVE:"comment_remove",REMOVE_AND_BLOCK:"comment_remove_and_block",REMOVE_PREVIEW:"comment_remove_preview",TOGGLE_INLINE_BAN:"comment_toggle_inline_ban",TOGGLE_INLINE_STREAM_BAN:"comment_toggle_inline_stream_ban",TOGGLE_INLINE_SUSPENSION:"comment_toggle_inline_suspension",TOGGLE_LIKE:"comment_toggle_like",TOGGLE_MARK_AS_SPAM:"comment_toggle_mark_as_spam",TOGGLE_KEEP_SPAM:"comment_toggle_keep_spam",TOGGLE_APPEAL_SPAM:"comment_toggle_appeal_spam",TOGGLE_SECURE_ACCOUNT:"comment_toggle_secure_account",TOGGLE_TEXT_DELIGHTS:"comment_toggle_text_delights",TRANSLATE:"comment_translate",TRANSLATE_ARRAY:"comment_translate_array",UNMOUNTED:"comment_unmounted",UPDATE_VOTE_COUNT_AND_STATE:"comment_update_vote_count_and_state",CHANGE_PIN_BY_AUTHOR:"comment_change_author_pin"})}),null);
__d("UFIDispatcherBase",["invariant","ReactDispatcher_DEPRECATED","UFICommentActionType","dangerouslyBypassDispatchError"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b){return Object.values(b).indexOf(a)>=0}function i(a,b,c){a[b]||g(0,2123,a.type,b,c)}a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.dispatch=function(c){var d=this;i(c,"instanceID","contextArgs.instanceid");i(c,"ftentidentifier","contextArgs.ftentidentifier");h(c.type,b("UFICommentActionType"))&&i(c,"fbid","comment.fbid");try{a.prototype.dispatch.call(this,c)}catch(e){b("dangerouslyBypassDispatchError")(function(){return a.prototype.dispatch.call(d,c)})}};return c}(b("ReactDispatcher_DEPRECATED"));e.exports=new a()}),null);
__d("UFIRange",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,b){a===void 0&&(a=0),b===void 0&&(b=0),this.offset=a,this.length=b,this.requestedOffset=this.offset,this.requestedLength=this.length}var b=a.prototype;b.getOffset=function(){return this.offset};b.getLength=function(){return this.length};b.getRequestedOffset=function(){return this.requestedOffset};b.getRequestedLength=function(){return this.requestedLength};b.updateRequestedRange=function(a,b){this.requestedOffset=a;this.requestedLength=b;return this};b.isLoadingNext=function(){var a=this.requestedOffset+this.requestedLength,b=this.offset+this.length;return a>b};b.isLoadingPrev=function(){return this.requestedOffset<this.offset};a.combine=function(b,c){if(!c)return b;var d=Math.min(b.getOffset(),c.getOffset());b=Math.max(b.getLength(),c.getLength());var e=new a(d,b);if(c.getRequestedLength()>0){var f=Math.min(d,c.getRequestedOffset());d=Math.max(d+b,c.getRequestedOffset()+c.getRequestedLength());e.updateRequestedRange(f,d-f)}return e};return a}();e.exports=a}),null);
__d("UFIKeyValueStore",["FluxReduceStore","abstractMethod"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return{}};d.getValueFor=function(a){return this.getState()[a]||null};d.getStateKey=function(a){return a.instanceID};d.getStateValue=function(a){return b("abstractMethod")("UFIKeyValueStore","getStateValue")};d.reduce=function(a,b){var c=this.getStateKey(b);b=this.getStateValue(b);if(b!==null){var d;return babelHelpers["extends"]({},a,(d={},d[c]=b,d))}return a};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("UFIComposerIsTypingStore",["UFIDispatcherBase","UFIKeyValueStore"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getStateKey=function(a){return a.ftentidentifier};c.getStateValue=function(a){switch(a.type){case"add_comment_submit_edit":return!1;case"add_comment_submit_new":return!1;case"add_comment_change_content":a=a.text.trim().length;return a>0}return null};return b}(b("UFIKeyValueStore"));e.exports=new a(b("UFIDispatcherBase"))}),null);
__d("UFIFeedbackStore",["FluxReduceStore","UFIDispatcherBase"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return{}};c.reduce=function(a,b){var c;switch(b.type){case"instance_init":var d=b.payload;d=d.feedbacktarget?d.feedbacktarget:d.feedbacktargets&&d.feedbacktargets[0];return!d?a:babelHelpers["extends"]({},a,(c={},c[b.ftentidentifier]=babelHelpers["extends"]({orderingmodes:[],defaultcommentorderingmode:""},d),c))}return a};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("UFIDispatcherBase"))}),null);
__d("UFIOrderingModeStore",["invariant","FluxReduceStore","UFIDispatcherBase","UFIFeedbackStore"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b){return a.filter(function(a){return a.selected}).map(function(a){return a.value}).pop()||b}a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new Map()};d.areEqual=function(a,b){return a===b};d.isLiveStreaming=function(a){return this.getState().get(a)=="live_streaming"};d.isInverted=function(a,c){var d=!1;c=b("UFIFeedbackStore").getState()[c];if(c){c=c.orderingmodes.filter(function(a){return a.selected}).pop();c&&(d=c.isBottomUpVideoCommentSreamingEnabled)}switch(a){case"recent_activity":case"ranked_threaded":case"ranked_unfiltered":case"live_streaming":return!d}return!1};d.getOrderingMode=function(a){a=this.getState().get(a);a!==void 0||g(0,2896);return a};d.reduce=function(a,c){switch(c.type){case"instance_init":if(a.has(c.instanceID))return a;b("UFIDispatcherBase").waitFor([b("UFIFeedbackStore").getDispatchToken()]);var d=b("UFIFeedbackStore").getState()[c.ftentidentifier];a=new Map(a);return a.set(c.instanceID,h(d.orderingmodes,d.defaultcommentorderingmode));case"story_change_order_mode":(!a.has(c.instanceID)||a.get(c.instanceID)!==c.mode)&&(a=new Map(a),a.set(c.instanceID,c.mode));return a}return a};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("UFIDispatcherBase"))}),null);
__d("UFIImageBlock.react",["cx","ImageBlock.react","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("ImageBlock.react"),babelHelpers["extends"]({},this.props,{imageClassName:"UFIImageBlockImage",contentClassName:"UFIImageBlockContent",children:this.props.children}))};return c}(h.Component);e.exports=a}),null);
__d("isCanvasAppURI",["isFacebookURI"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("isFacebookURI")(a)&&a.getSubdomain()==="apps"}e.exports=a}),null);
__d("StickerInterfaces",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MESSAGES:"messages",NEO:"neo",COMMENTS:"comments",STICKERED:"stickered",COMPOSER:"composer",POSTS:"posts",FRAMES:"frames",SMS:"sms",MONTAGE:"montage"})}),null);
__d("setByPath",["invariant"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c){a=a;for(var d=0;d<b.length;d++){var e=b[d];if(d===b.length-1){a[e]=c;return}!Object.prototype.hasOwnProperty.call(a,e)?a[e]={}:a[e]==null?a[e]={}:Array.isArray(a[e])||Object.prototype.toString.call(a[e])==="[object Object]"||g(0,1041,a[e]);a=a[e]}}e.exports=a}),null);
__d("XGroupsMuteMembersController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/mutemember/",{group_id:{type:"FBID"},user_id:{type:"FBID"},mute_duration:{type:"Enum",enumType:1},source:{type:"Enum",enumType:1},should_reload:{type:"Bool",defaultValue:!1},mute_reason:{type:"FBID"},custom_expiration:{type:"Int"},share_feedback:{type:"Bool",defaultValue:!1},selected_rules:{type:"FBIDVector",defaultValue:[]},admin_notes:{type:"String",defaultValue:""}})}),null);
__d("XTownHallController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/townhall/",{ref:{type:"Enum",enumType:1},notif_id:{type:"Int"},setting_nux:{type:"Bool",defaultValue:!1},hide_nux:{type:"Bool",defaultValue:!1},new_reps:{type:"Int"},tab:{type:"Enum",enumType:1}})}),null);
__d("XUFIDeleteCommentAndRemoveCommenterController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ufi/deletecommentandremovecommenter/",{})}),null);