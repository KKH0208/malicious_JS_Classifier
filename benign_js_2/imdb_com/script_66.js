/* 元のURL: https://imdb.com */
// 外部JS: https://dqpnq362acqdi.cloudfront.net/_next/static/chunks/158-6e536fb455d73015.js
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{60545:function(e,t,i){"use strict";i.d(t,{j:function(){return a}});let a={gotoTitleAriaLabel:{id:"common_ariaLabels_gotoTitle",defaultMessage:"View title page for {titleName}"},gotoTrailerAriaLabel:{id:"common_ariaLabels_gotoTrailer",defaultMessage:"Watch trailer for {titleName}"},ratingButtonRatedAriaLabel:{id:"common_ariaLabels_ratingButtonRated",defaultMessage:"Your rating: {rating}"},ratingButtonUnratedAriaLabel:{id:"common_ariaLabels_ratingButtonUnrated",defaultMessage:"Rate {titleName}"},ratingPromptHeaderLabel:{id:"common_ratingPrompt_header",defaultMessage:"Rate this"},ratingPromptRateLabel:{id:"common_ratingPrompt_rate",defaultMessage:"Rate"},ratingPromptRemoveRatingLabel:{id:"common_ratingPrompt_removeRating",defaultMessage:"Remove rating"},ratingPromptErrorLabel:{id:"common_ratingPrompt_error",defaultMessage:"Can't rate title. Try again later."},ratingPromptAriaLabelPrefix:{id:"common_ratingPrompt_ariaLabelPrefix",defaultMessage:"Rating"},trailerButtonText:{id:"common_buttons_trailer",defaultMessage:"Trailer"}}},23842:function(e,t,i){"use strict";i.d(t,{c:function(){return A}});var a,n,r=i(52322),s=i(88169),o=i(2784),l=i(18355),d=i(72779),c=i.n(d),g=i(19596),m=i(86704),p=i(75824),u=i(66724),h=i(11438),f=i(60545);(a=n||(n={})).SPACE_BETWEEN="space-between",a.SPACE_AROUND="space-around",a.RIGHT="right",a.LEFT="left";let x=e=>{let{title:{latestTrailerId:t},iconButtons:i,index:a}=e,{videoSingleLinkBuilder:n}=(0,u.WOb)(),o=(0,p.N)(f.j.trailerButtonText),l=(0,p.N)(f.j.trailerButtonText),d=[];if(t){let e=n({viconst:t,refSuffix:{t:h.Cd.TRAILER,n:a}});d.push({preIcon:"play-arrow",onColor:"textPrimary",href:e,ariaLabel:o,children:(0,r.jsx)("div",{className:"trailers-button-text","data-testid":"trailer-button",children:l})})}let g="space-around";if(i?.length===1&&d.length<1&&(g="right"),!i?.length&&!d.length)return null;let m=c()([`justify--${g}`],{"both-card-actions":i?.length&&d.length});return(0,r.jsxs)(T,{className:m,children:[d.map((e,t)=>(0,r.jsx)(s.TextButton,{className:c()("card-action-button",e.className),...e},t)),i?.map((e,t)=>r.jsx(s.IconButton,{className:c()("card-action-icon",e.className),...e},t))]})},T=g.default.div.withConfig({componentId:"sc-2e4fa651-0"})(["display:flex;width:100%;align-items:center;padding:"," 0;margin-bottom:-1rem;&.justify--space-between{justify-content:space-between;}&.justify--space-around{justify-content:space-around;}&.justify--left{justify-content:flex-start;}&.justify--right{justify-content:flex-end;}&.both-card-actions{> .card-action-button{margin-left:-0.25rem;padding-right:0.5rem;padding-left:0.5rem;}> .card-action-icon{margin-right:-0.25rem;}}> .card-action-button{text-overflow:ellipsis;overflow:hidden;}"],m.spacing.xs);var b=i(2870);let y=e=>{let{title:{id:t},alternateButton:i,refTagFromGraph:a,index:n}=e;if(i){let e={...i.props,width:"full-width"};return(0,r.jsx)(s.SecondaryButton,{...e,children:i.fetching?(0,r.jsx)(I,{className:"alternate-button-loader",type:"circle"}):i.text})}return(0,r.jsx)(b.Z,{titleId:t,refOverride:[{t:h.Cd.WATCHLIST_RIBBON,n:n},(0,h.Qk)({refStr:a,explanation:"The refmarker comes dynamically from the graph"})]},t)},I=(0,g.default)(s.Loader).withConfig({componentId:"sc-b9fc2f37-0"})(["max-height:",";max-width:",";vertical-align:middle;"],m.spacing.xl,m.spacing.xl);var v=i(77725),w=i(98644),_=i(44958),C=i(94471),S=i(82433),E=i(84314),j=i(14438),L=i(37179),P=i(30634),N=i(92543);let k=e=>{let{className:t,title:{id:i,titleText:a,ratingsSummary:n,canRate:s},refTagFromGraph:l,index:d}=e,{makeRefMarker:c}=(0,h.Lz)(),[g,m]=(0,o.useState)(!1),u=(0,E.n)(),x=(0,P.pl)(),T=(0,j.EO)(),{rating:b,updateRating:y,deleteRating:I}=(0,w.nj)(i),k=(0,C.P)(n,"imdb"),M=(0,C.P)(b,"user"),A=c([{t:h.Cd.TITLE,n:d},h.Cd.RATING,(0,h.Qk)({refStr:l,explanation:"The refmarker comes dynamically from the graph"})]),O=s?()=>{T({pageAction:L.QJ.USER_RATING_PROMPT_OPEN,hitType:v.Re.POP_UP,refMarkerString:A}),m(!0)}:void 0,{updateTitleRating:$,deleteTitleRating:D,tempRateUpdateLogRef:W}=(0,S.vY)({titleId:i,refTag:A,currentRating:b}),U=(0,p.N)(f.j.ratingButtonRatedAriaLabel,{rating:M}),B=(0,p.N)(f.j.ratingButtonUnratedAriaLabel,{titleName:a}),V=(0,p.N)(f.j.ratingPromptHeaderLabel),F=(0,p.N)(f.j.ratingPromptRateLabel),z=(0,p.N)(f.j.ratingPromptRemoveRatingLabel),Q=(0,p.N)(f.j.ratingPromptAriaLabelPrefix);return(0,N.g)(g),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(R,{className:t,formattedImdbRating:k,formattedUserRating:M,onUserRatingClick:O,ariaLabelRated:U,ariaLabelUnrated:B}),!!O&&(0,r.jsx)(w.TB,{isOpen:g,tconst:i,title:a,headerLabel:V,rateLabel:F,ariaLabelPrefix:Q,shouldUseNewRatingFlow:!0,secondaryButtonText:z,secondaryButtonType:_.uu.RemoveRating,onPrimaryButtonClicked:async(e,t)=>{if(!e){m(!1);return}u?(m(!1),y(e,A,()=>$(e,t))):(await W(e,t),x({rating:e,titleId:t,ref:A}))},onSecondaryButtonClicked:async(e,t)=>{m(!1),I(A,()=>D(t))},onCloseClicked:()=>{m(!1)}})]})},R=(0,g.default)(s.PosterCard.RatingStarGroup).withConfig({componentId:"sc-a4ddb2c-0"})(["min-height:36px;"]);var M=i(20189);let A=e=>{let{id:t,titleType:i,primaryImage:a,ratingsSummary:n,canRate:o,latestTrailer:d}=e.data,{index:c,refTagFromGraph:g}=e,{preferredTitleText:m,titleHref:p,goToTitleAriaLabel:u}=(0,M.T)({data:e.data,refTagFromGraph:g,index:c}),h="string"==typeof e.className?e.className:void 0;return m&&i?(0,r.jsxs)(s.PosterCard,{dynamicWidth:!0,className:h,children:[(0,r.jsx)(l.y,{title:{id:t,titleText:m,titleTypeId:i.id,image:{url:a?.url,height:a?.height,width:a?.width}},onClick:e.onClick,refTagFromGraph:g,index:c}),(0,r.jsx)(k,{title:{id:t,titleText:m,ratingsSummary:n?.aggregateRating,canRate:o?.isRatable},refTagFromGraph:g,index:c}),(0,r.jsx)(s.PosterCard.Title,{href:p,onClick:e.onClick,ariaLabel:u,children:(0,r.jsx)("span",{"data-testid":"title",children:m})}),(0,r.jsxs)(s.PosterCard.Actions,{children:[(0,r.jsx)(y,{title:{id:t},alternateButton:e.alternateButton,refTagFromGraph:g,index:c}),(0,r.jsx)(x,{title:{latestTrailerId:d?.id},iconButtons:e.iconButtons,index:c})]})]}):null}},20189:function(e,t,i){"use strict";i.d(t,{T:function(){return l}});var a=i(75824),n=i(66724),r=i(11438),s=i(63370),o=i(60545);let l=e=>{let{data:t,refTagFromGraph:i,index:l}=e,{titleMainLinkBuilder:d}=(0,n.WOb)(),c=(0,s.K)({originalTitleText:t.originalTitleText,titleText:t.titleText}),g=(0,a.N)(o.j.gotoTitleAriaLabel,{titleName:c});return{titleHref:d({tconst:t.id,refSuffix:[{t:r.Cd.TEXT,n:l},(0,r.Qk)({refStr:i,explanation:"The refmarker comes dynamically from the graph"})]}),preferredTitleText:c,goToTitleAriaLabel:g}}},54137:function(e,t,i){"use strict";i.d(t,{Ec:function(){return g},$:function(){return m}});var a=i(52322),n=i(72779),r=i.n(n);i(2784);var s=i(19596),o=i(88169),l=i(86704),d=i(75824),c=i(47069);let g={SPONSORED_LINK:"sponsored-link",SPONSORED_TEXT:"sponsored-text",SPONSORED_DOT:"sponsored-dot",INHERIT_FONT:"sponsored-inherit-font",SPONSORED_ICON:"sponsored-icon"},m=e=>{let{adFeedbackUrl:t,includeSpacingDot:i,inheritFontSize:n}=e,s=(0,d.N)({id:"compliance_sponsored_ad_link",defaultMessage:"Sponsored"});return(0,a.jsxs)(u,{"aria-label":s,className:r()(g.SPONSORED_LINK,{[g.INHERIT_FONT]:n}),href:t,target:"_blank",onClick:p,children:[!!i&&(0,a.jsx)("span",{className:g.SPONSORED_DOT,children:"•"}),(0,a.jsx)("span",{className:g.SPONSORED_TEXT,children:s}),(0,a.jsx)(o.Icon,{className:g.SPONSORED_ICON,name:"info"})]})},p=e=>{e.stopPropagation(),(0,c.P)("SponsoredLink.PromotedVideo")},u=s.default.a.withConfig({componentId:"sc-7a5c1d1d-0"})(["font-size:11px;color:",";text-decoration:none;&:hover{opacity:0.85;}&.","{font-size:inherit;}.","{padding:0 ",";}.","{width:14px;height:14px;margin:-3px 0 0 2px;}"],(0,l.getColorVarValue)("ipt-on-baseAlt-textSecondary-color"),g.INHERIT_FONT,g.SPONSORED_DOT,l.spacing.xs,g.SPONSORED_ICON)},78893:function(e,t,i){"use strict";i.d(t,{p:function(){return h}});var a=i(52322),n=i(2784),r=i(46138),s=i(19596),o=i(88169),l=i(86704),d=i(66724),c=i(11438),g=i(14438);let m={id:"eventHistoryWidget_title",defaultMessage:"Event history"},p={2030:{id:"eventHistoryWidget_decadeTabLabel_2030",defaultMessage:"2030s"},2020:{id:"eventHistoryWidget_decadeTabLabel_2020",defaultMessage:"2020s"},2010:{id:"eventHistoryWidget_decadeTabLabel_2010",defaultMessage:"2010s"},2e3:{id:"eventHistoryWidget_decadeTabLabel_2000",defaultMessage:"2000s"},1990:{id:"eventHistoryWidget_decadeTabLabel_1990",defaultMessage:"1990s"},1980:{id:"eventHistoryWidget_decadeTabLabel_1980",defaultMessage:"1980s"},1970:{id:"eventHistoryWidget_decadeTabLabel_1970",defaultMessage:"1970s"},1960:{id:"eventHistoryWidget_decadeTabLabel_1960",defaultMessage:"1960s"},1950:{id:"eventHistoryWidget_decadeTabLabel_1950",defaultMessage:"1950s"},1940:{id:"eventHistoryWidget_decadeTabLabel_1940",defaultMessage:"1940s"},1930:{id:"eventHistoryWidget_decadeTabLabel_1930",defaultMessage:"1930s"},1920:{id:"eventHistoryWidget_decadeTabLabel_1920",defaultMessage:"1920s"},1910:{id:"eventHistoryWidget_decadeTabLabel_1910",defaultMessage:"1910s"},1900:{id:"eventHistoryWidget_decadeTabLabel_1900",defaultMessage:"1900s"},1890:{id:"eventHistoryWidget_decadeTabLabel_1890",defaultMessage:"1890s"}},u={id:"eventHistoryWidget_decadeTabLabel_fallback",defaultMessage:"Other years"},h=e=>{let{eventId:t,eventEditions:i,headerText:s,hideHeader:l=!1,selectedEventEditionId:p}=e,u=(0,r.Z)(),{eventMainLinkBuilder:h,eventMainYearInstanceLinkBuilder:y}=(0,d.WOb)(),I=(0,g.EO)(),v=h({evconst:t,refSuffix:c.Cd.TEXT}),{decadeToEventMap:w,selectedDecade:_}=f(i,p),C=[];Object.keys(w).forEach(e=>{C.unshift({id:e,label:u.formatMessage(x(e))})});let[S,E]=(0,n.useState)(_||C[0]?.id);if(!i||!i.length)return null;let j=Object.keys(w).length>1;return(0,a.jsxs)(T,{"data-testid":"event-history-widget",sidePadding:"pageMargin",children:[!l&&(0,a.jsx)(o.SubSectionTitle,{padding:"none",href:v,children:s||u.formatMessage(m)}),(0,a.jsxs)(o.PageSection,{topPadding:"none",bottomPadding:"none",borderType:"responsiveLine",className:"event-history-tabs-container",children:[!!j&&(0,a.jsx)(o.Tabs,{tabs:C,disableUppercase:!0,value:S,backgroundColor:"shade1",onChange:(e,t)=>{E(e),I({refMarkerSuffix:[c.Cd.NAVIGATION,{t:c.Cd.TAB,n:t+1}],pageAction:"tab-select"})},onNextPage:()=>I({refMarkerSuffix:c.Cd.NAVIGATION,pageAction:"next-button-click"}),onPreviousPage:()=>I({refMarkerSuffix:c.Cd.NAVIGATION,pageAction:"prev-button-click"})}),!!w[S]&&(0,a.jsx)(o.PageSection,{topPadding:"none",bottomPadding:"none",children:(0,a.jsx)(b,{children:w[S].map((e,i)=>(0,a.jsx)(o.Chip,{id:`event-history-edition-${i}`,label:`${e.year}`,href:y({evconst:t,year:e.year,instance:e.instanceWithinYear,refSuffix:{t:c.Cd.YEAR,n:i+1}}),onColor:e.id===p?"accent1":"",filled:e.id===p},`event-history-edition-${i}`))})})]})]})},f=(e,t)=>{let i;if(!e)return{decadeToEventMap:{},selectedDecade:void 0};let a={};return e.forEach(e=>{let n=10*Math.floor(e.year/10);a[n]=a[n]||[],a[n].push(e),e.id===t&&(i=n.toString())}),{decadeToEventMap:a,selectedDecade:i}},x=e=>p[e]||u,T=(0,s.default)(o.PageSection).withConfig({componentId:"sc-c453816c-0"})(["&&{margin-bottom:",";}"],l.spacing.xs),b=(0,s.default)(o.ChipList).withConfig({componentId:"sc-c453816c-1"})(["margin-top:",";","{padding-left:",";padding-right:",";margin-bottom:",";}"],l.spacing.m,l.mediaQueries.breakpoints.above.l,l.spacing.m,l.spacing.m,l.spacing.xs)},42748:function(e,t,i){"use strict";i.d(t,{X:function(){return s}});var a=i(52322);i(2784);var n=i(89105),r=i(10105);let s=e=>{let{children:t,componentId:i,hideLoader:s}=e,o=(0,n.OV)(i),l=s?null:(0,a.jsx)(r.ZP,{height:650,"data-testid":"delayed-loader"});return o?l:t}},79523:function(e,t,i){"use strict";i.d(t,{U:function(){return s}});var a=i(52322),n=i(27722);i(2784);var r=i(4736);let s=e=>{let{constId:t}=e,{trackInfo:i,ariaLabel:s,isPending:o,onClick:l}=(0,r.R)(t);return(0,a.jsx)(n.IconButton,{name:i?.isTracking?"notifications-add-check":"notifications-add",label:s,onSelect:l,disabled:o})}},24216:function(e,t,i){"use strict";i.d(t,{B:function(){return n},T:function(){return a}});let a={IN_TRACK:{id:"common_buttons_track_label_inTrack",defaultMessage:"Tracking"},NOT_TRACKED:{id:"common_buttons_track_label_addToTrack",defaultMessage:"Track"},IS_LOADING:{id:"common_ariaLabel_loading",defaultMessage:"Loading"},FAILED:{id:"common_buttons_track_failure",defaultMessage:"Failed to update, please try again"}},n={pendingItems:{},items:{},isRequesting:!1}},40962:function(e,t,i){"use strict";i.d(t,{S:function(){return b},Y:function(){return y}});var a=i(52322),n=i(2784);let r=(e,t)=>{switch(t.type){case"CHECK_IN_TRACK":if(void 0!==e.items[t.id])return e;return{...e,pendingItems:{...e.pendingItems,[t.id]:{isTracking:!0}}};case"SET_REQUESTING":if(e.isRequesting)return e;return{...e,isRequesting:!0};case"UPDATE_TRACK_STATE":{let i={...e,isRequesting:!1};return Object.keys(t.items).forEach(e=>{delete i.pendingItems[e],i.items[e]=t.items[e]}),i}case"ADD_TO_TRACK":{if(!t.id)return e;let i={...e,items:{...e.items,[t.id]:{isTracking:!0}}};return delete i.pendingItems[t.id],i}case"REMOVE_FROM_TRACK":{if(!t.id||"boolean"==typeof e.items[t.id]&&!e.items[t.id])return e;let i={...e,items:{...e.items,[t.id]:{isTracking:!1}}};return delete i.pendingItems[t.id],i}default:return e}};var s=i(24216),o=i(16189),l=i(91754),d=i(11602),c=i(30382),g=i.n(c);let m=g()`
    query IsNameTracked($ids: [ID!]!) {
        names(ids: $ids) {
            id
            trackNotificationPreferences {
                isTracking
            }
        }
    }
`,p=g()`
    query IsTitleTracked($ids: [ID!]!) {
        titles(ids: $ids) {
            id
            trackNotificationPreferences {
                isTracking
            }
        }
    }
`,u=(0,o.createLogger)()("ZukoTrackCalls"),h=()=>{let{queryWithContext:e}=(0,l.x)();return t=>e(p,{ids:t},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e,a={};return t?.titles.forEach(e=>{e&&(a[e.id]={isTracking:!!e?.trackNotificationPreferences?.isTracking})}),i&&u.error(i),a}).catch(e=>(u.error(e),{}))},f=()=>{let{queryWithContext:e}=(0,l.x)();return t=>e(m,{ids:t},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e,a={};return t?.names.forEach(e=>{e&&(a[e.id]={isTracking:!!e?.trackNotificationPreferences?.isTracking})}),i&&u.error(i),a}).catch(e=>(u.error(e),{}))},x=()=>{let{mutation:e}=(0,l.x)();return t=>e(d.qb,{input:{id:t}},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e;return i&&u.error(i),!!t?.trackConst?.success}).catch(e=>(u.error(e),!1))},T=()=>{let{mutation:e}=(0,l.x)();return t=>e(d.Vc,{input:{id:t}},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e;return i&&u.error(i),!!t?.untrackConst?.success}).catch(e=>(u.error(e),!1))},b=(0,n.createContext)({state:s.B,getIsInTrack:()=>Promise.resolve(void 0),addToTrack:()=>Promise.resolve(!1),removeFromTrack:()=>Promise.resolve(!1)}),y=e=>{let{children:t}=e,i=h(),o=f(),l=x(),d=T(),[c,g]=(0,n.useReducer)(r,s.B);(0,n.useEffect)(()=>{let e=Object.keys(c.pendingItems);if(e.length>0&&!c.isRequesting){g({type:"SET_REQUESTING"});let t=e.filter(e=>e.startsWith("nm")),a=e.filter(e=>e.startsWith("tt"));t.length>0&&o(t).then(e=>{g({type:"UPDATE_TRACK_STATE",items:e})}),a.length>0&&i(a).then(e=>{g({type:"UPDATE_TRACK_STATE",items:e})})}},[c.pendingItems,c.isRequesting]);let m=(0,n.useCallback)(e=>void 0!==c.items[e]?Promise.resolve(c.items[e]):(g({type:"CHECK_IN_TRACK",id:e}),Promise.resolve(void 0)),[c.pendingItems,c.items]),p=(0,n.useCallback)(async e=>{let t=await l(e);return t&&g({type:"ADD_TO_TRACK",id:e}),t},[]),u=(0,n.useCallback)(async e=>{let t=await d(e);return t&&g({type:"REMOVE_FROM_TRACK",id:e}),t},[]),y=(0,n.useMemo)(()=>({state:c,getIsInTrack:m,addToTrack:p,removeFromTrack:u}),[c]);return(0,a.jsx)(b.Provider,{value:y,children:t})}},4736:function(e,t,i){"use strict";i.d(t,{R:function(){return g}});var a=i(2784),n=i(46138),r=i(41174),s=i(11438),o=i(14438),l=i(37179),d=i(40962),c=i(24216);let g=e=>{let{sendFailureSnack:t}=(0,r.c1)(),{formatMessage:i}=(0,n.Z)(),{makeRefMarker:g}=(0,s.Lz)(),m=(0,o.EO)(),{state:p,addToTrack:u,removeFromTrack:h,getIsInTrack:f}=(0,a.useContext)(d.S),x=void 0!==p.items[e],T=void 0!==p.pendingItems[e],[b,y]=(0,a.useState)({trackInfo:p.items[e],isPending:!x});(0,a.useEffect)(()=>{let t=x&&!!p.items[e].isTracking!==b.trackInfo?.isTracking,i=b.isPending&&x;T||x?(t||i)&&y({trackInfo:p.items[e],isPending:!1}):f(e)},[p.items[e],p.pendingItems[e]]);let I=i(c.T.IS_LOADING),v=b.trackInfo?.isTracking?i(c.T.IN_TRACK):i(c.T.NOT_TRACKED);return{...b,ariaLabel:b.isPending?I:v,onClick:async()=>{y({...b,isPending:!0}),b.trackInfo?.isTracking?await h(e)?m({refMarkerString:g(s.Cd.TRACK),pageAction:`${l.QJ.TRACK_OFF}-${e}`}):t(i(c.T.FAILED)):await u(e)?m({refMarkerString:g(s.Cd.TRACK),pageAction:`${l.QJ.TRACK_ON}-${e}`}):t(i(c.T.FAILED))}}}},68557:function(e,t,i){"use strict";i.d(t,{i:function(){return s}});var a=i(52322),n=i(72779),r=i.n(n);i(2784);let s=e=>{let{children:t,displayStyle:i}=e,n=r()("grid w-full",{"grid-cols-1 m:grid-flow-col m:grid-cols-2 m:grid-rows-3":"dynamic"===i},{"grid-cols-1":"singleColumn"===i});return(0,a.jsx)("div",{className:n,children:t})}},65991:function(e,t,i){"use strict";i.d(t,{p:function(){return o}});var a=i(52322),n=i(72779),r=i.n(n);i(2784);var s=i(48958);let o=e=>{let{color:t,type:i}=(0,s.G)(),n=e.condensedPadding?"py-xs":"py-s";return(0,a.jsxs)("div",{className:r()(e.titleClassName,n,"flex px-m items-center"),children:[!!e.rankNumber&&(0,a.jsx)("div",{className:"pr-m",children:e.rankNumber}),e.preElement,(0,a.jsxs)("div",{className:"flex justify-between min-w-[0] w-full",children:[(0,a.jsxs)("a",{className:"pl-s block overflow-hidden hover:opacity-80 no-underline grow",href:e.titlePageLink,children:[(0,a.jsx)("div",{className:r()(t("accent2"),i("body"),"text-nowrap overflow-hidden text-ellipsis"),children:e.titleName}),(0,a.jsx)("div",{className:r()(t("textSecondary"),i("bodySmall")),children:e.secondaryText})]}),e.postElement]})]})}},93515:function(e,t,i){"use strict";i.d(t,{Z:function(){return k}});var a=i(52322),n=i(27722),r=i(88169),s=i(72779),o=i.n(s),l=i(2784),d=i(46138),c=i(64840),g=i(11438),m=i(82925),p=i(48958),u=i(91359),h=i(86958),f=i(66724),x=i(63370),T=i(40981);let b={ITEM_PREFIX:"tenup_item_",METADATA:"tenup_title_metadata",PARENT:"tenup_parent",POSTER:"tenup_poster",POSTER_GROUP:"tenup_poster-group",RATING_GROUP:T.z7.CONTAINER,SEE_ALL_BUTTON:"tenup_see_all"};var y=i(11898),I=i.n(y),v=i(12563),w=e=>{let{className:t,titleId:i,...n}=e,{isInWatchlist:s,isPending:l,onClick:d,ariaLabel:c}=(0,v.X)(i);return(0,a.jsx)("div",{className:o()("flex",t),children:(0,a.jsx)(r.Poster,{...n,"data-testid":b.POSTER,watchlistRibbonProps:{ariaLabel:c,isLoading:l,inWatchlist:s,onClick:d,size:"m"}})})},_=i(42887),C=i(81269),S=i(57708),E=e=>{let{index:t,listItem:i}=e,{color:n,type:s}=(0,p.G)(),{formattedTitleData:o,titleText:l,textList:d=[]}=(0,_.G)(i,t,!1,!1);return(0,a.jsxs)("div",{className:`flex flex-col gap-xs w-full truncate ${s("bodySmall")} ${n("textSecondary")}`,"data-testid":b.METADATA,children:[(0,a.jsx)(r.Signpost,{className:I().tenUpSignpost,text:`#${t}`}),(0,a.jsx)(C.Z,{forceTwoLineTitles:!0,titleDisplayData:o,index:t}),(0,a.jsxs)("div",{className:"flex flex-col gap-xxs truncate",children:[(0,a.jsx)("div",{className:"flex m:truncate l:flex-wrap gap-x-s gap-y-xs items-center",children:d.map(e=>(0,a.jsx)("div",{className:I().tenUpTitleMetadata,children:e.text},`tenup-metadata-${l}-${e.text}`))}),(0,a.jsx)(T.Nf,{className:I().tenUpRatingGroup,canRate:i.canRate,hideMaxIMDbRating:!0,ratingsSummary:i.ratingSummary,titleText:l,titleId:i.titleId}),(0,a.jsx)(S.$,{className:I().tenUpWatchedButton,titleText:l,titleId:i.titleId})]})]})},j=e=>{let{className:t,items:i,seeAllLabelOverride:n,seeAllLinkProps:s}=e,T=(0,d.Z)(),{color:y,type:v}=(0,p.G)(),{palette:{name:_}}=l.useContext(m.Theme),C="light"===_?"shade3":"shade1",S=(0,h.B)().context,{titleMainLinkBuilder:j}=(0,f.WOb)(),L=(0,c.b)({...s,refSuffix:[g.Cd.SEE_ALL,g.Cd.BUTTON]}),P=n??T.formatMessage({id:"common_buttons_see_all",defaultMessage:"See all"}),N=i[0],k=i.slice(1,3),R=i.slice(3);return(0,a.jsxs)("div",{className:o()(t,"hidden @l:flex"),children:[(0,a.jsxs)("div",{className:`flex w-full gap-m ${v("bodySmall")}`,children:[(0,a.jsxs)("div",{className:o()(`flex overflow-hidden gap-x-xs rounded-media p-s bg-gradient-to-r from-accent2/40 to-50% to-${y("default",C)} flex-[4]`,I().tenUpCardBoxShadow),"data-testid":`${b.ITEM_PREFIX}1`,children:[(0,a.jsx)(w,{ariaLabel:T.formatMessage(u.F.GO_TO,{target:(0,x.L)(S,N.originalTitleText,N.titleText)}),className:"min-w-1/2 h-fit",dynamicWidth:!0,href:j({tconst:N.titleId,refSuffix:{t:g.Cd.POSTER,n:1}}),imageProps:{imageModel:{maxHeight:Number(N.primaryImage?.height),maxWidth:Number(N.primaryImage?.width),caption:String(N.primaryImage?.caption),url:String(N.primaryImage?.url)},imageType:N.titleType?.id,size:"l"},titleId:N.titleId}),(0,a.jsxs)("div",{className:"flex flex-col grow-1 ml-xxs",children:[(0,a.jsx)(E,{index:1,listItem:N}),(0,a.jsx)("span",{className:o()(`line-clamp-5 @xl:line-clamp-7 ${y("textSecondary")} `,I().tenUpPlot),children:N.plot})]})]}),k.map((e,t)=>{let i=t+2;return(0,a.jsxs)("div",{className:o()(`flex-[3] p-s rounded-media ${y("default",C)}`,I().tenUpCardBoxShadow),"data-testid":`${b.ITEM_PREFIX}${i}`,children:[(0,a.jsxs)("div",{className:"flex gap-x-xs",children:[(0,a.jsx)(w,{ariaLabel:T.formatMessage(u.F.GO_TO,{target:(0,x.L)(S,e.originalTitleText,e.titleText)}),className:"min-w-2/5 h-full",dynamicWidth:!0,href:j({tconst:e.titleId,refSuffix:{t:g.Cd.POSTER,n:i}}),imageProps:{imageModel:{maxHeight:Number(e.primaryImage?.height),maxWidth:Number(e.primaryImage?.width),caption:String(e.primaryImage?.caption),url:String(e.primaryImage?.url)},imageType:e.titleType?.id,size:"m"},titleId:e.titleId}),(0,a.jsx)(E,{index:i,listItem:e})]}),(0,a.jsx)("span",{className:o()(`w-fit line-clamp-5 ${y("textSecondary")}`,I().tenUpPlot),children:e.plot})]},`tenup-item-${e.titleId}-${i}`)})]}),(0,a.jsxs)("div",{className:"flex-nowrap gap-m flex","data-testid":b.POSTER_GROUP,children:[R.map((e,t)=>{let i=(0,x.L)(S,e.originalTitleText,e.titleText),n=t+4;return(0,a.jsxs)(r.PosterCard,{"data-testid":`${b.ITEM_PREFIX}${n}`,dynamicWidth:!0,children:[(0,a.jsx)(r.Poster,{ariaLabel:T.formatMessage(u.F.GO_TO,{target:i}),dynamicWidth:!0,href:j({tconst:e.titleId,refSuffix:{t:g.Cd.POSTER,n:n}}),imageProps:{imageModel:{maxHeight:Number(e.primaryImage?.height),maxWidth:Number(e.primaryImage?.width),caption:String(e.primaryImage?.caption),url:String(e.primaryImage?.url)},imageType:e.titleType?.id,size:"s"},radius:"corner",children:(0,a.jsx)("div",{className:"absolute top-[-2px] left-0",children:(0,a.jsx)(r.Signpost,{className:o()("rounded-none",I().tenUpSignpost),text:`#${n}`})})}),(0,a.jsx)(r.PosterCardTitle,{ariaLabel:T.formatMessage(u.F.GO_TO,{target:i}),className:o()(v("bodySmall")),href:j({tconst:e.titleId,refSuffix:{t:g.Cd.TEXT,n:n}}),children:i})]},`tenup-item-${e.titleId}-${n}`)}),(0,a.jsx)(r.SecondaryButton,{className:o()("w-full p-xxs @xl:flex",I().tenUpXLSeeAllButton),"data-testid":b.SEE_ALL_BUTTON,href:L,children:P})]})]})};let L=e=>{let{item:t,refIndex:i}=e,n=(0,d.Z)(),r=(0,x.K)(t),{titleMainLinkBuilder:s}=(0,f.WOb)();return(0,a.jsxs)("div",{className:"flex gap-x-xs",children:[(0,a.jsx)(w,{ariaLabel:n.formatMessage(u.F.GO_TO,{target:r}),className:"min-w-[7rem] h-full",dynamicWidth:!0,href:s({tconst:t.titleId,refSuffix:{t:g.Cd.POSTER,n:i}}),imageProps:{imageModel:{maxHeight:Number(t.primaryImage?.height),maxWidth:Number(t.primaryImage?.width),caption:String(t.primaryImage?.caption),url:String(t.primaryImage?.url)},imageType:t.titleType?.id,size:"s"},titleId:t.titleId}),(0,a.jsx)(E,{index:i,listItem:t})]})};var P=e=>{let{className:t,items:i}=e,{color:n,type:r}=(0,p.G)(),{palette:{name:s}}=l.useContext(m.Theme),d="light"===s?"shade3":"shade1",c=i.slice(0,3),g=i.slice(3,6),u="rounded-media p-s truncate";return(0,a.jsxs)("div",{className:o()(t,`flex flex-row w-full @l:hidden ${r("bodySmall")}`),children:[(0,a.jsx)("div",{className:"flex flex-col gap-m grow-1 w-full",children:c.map((e,t)=>{let i=t+1;return(0,a.jsx)("div",{className:o()(u,I().tenUpCardBoxShadow,{[n("default",d)]:1!==i,[`bg-gradient-to-r from-accent2/40 to-15% to-${n("default",d)}`]:1===i}),"data-testid":`${b.ITEM_PREFIX}${i}`,children:(0,a.jsx)(L,{item:e,refIndex:i})},`tenup-item-${e.titleId}-${i}`)})}),(0,a.jsx)("div",{className:"hidden flex-col gap-m grow-1 w-full @min-[665px]:flex @l:hidden",children:g.map((e,t)=>{let i=t+4;return(0,a.jsx)("div",{className:o()(u,I().tenUpCardBoxShadow,n("default",d)),"data-testid":`${b.ITEM_PREFIX}${i}`,children:(0,a.jsx)(L,{item:e,refIndex:i})},`tenup-item-${e.titleId}-${i}`)})})]})};let N=e=>{let t=(0,d.Z)(),{palette:{name:i}}=(0,l.useContext)(r.ThemeContext),s=(0,c.b)({...e.seeAllLinkProps,refSuffix:g.Cd.SEE_MORE}),m=(0,c.b)({...e.seeAllLinkProps,refSuffix:[g.Cd.SEE_ALL,g.Cd.BUTTON]});if(10!==e.items.length)return null;let p=e.seeAllLabelOverride??t.formatMessage({id:"common_buttons_see_all",defaultMessage:"See all"}),u={...e,className:o()(e.className,"flex-col gap-m px-pageMargin w-full")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.SubSectionTitle,{description:e.titleProps.description,href:s,children:e.titleProps.title}),(0,a.jsxs)("div",{className:"@container","data-testid":b.PARENT,children:[(0,a.jsx)(P,{...u}),(0,a.jsx)(j,{...u}),(0,a.jsx)("div",{className:"px-pageMargin w-full mt-m text-center @xl:hidden",children:(0,a.jsx)(r.SetPalette,{palette:i,children:(0,a.jsx)(r.SecondaryButton,{className:"w-1/2","data-testid":b.SEE_ALL_BUTTON,href:m,children:(0,a.jsx)("span",{children:p})})})})]})]})};var k=e=>(0,a.jsx)(g.xm,{value:g.Cd.TEN_UP,children:(0,a.jsx)(N,{...e})})},67626:function(e,t,i){"use strict";i.d(t,{Z:function(){return y}});var a=i(52322);i(2784);var n=i(59430),r=i.n(n),s=i(55634),o=i(59002),l=i(14438),d=i(11438),c=i(8e3),g=i(19596),m=i(88169),p=i(86704),u=i(55220);let h=e=>{let{videos:t,listId:i,logShovelerInteraction:n}=e;if(!t||0===t.length)return null;let r=t.slice(0,2),s=t.slice(1,6);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f,{"data-testid":"grid_first_row_video",children:(0,a.jsx)(T,{rowNumber:1,videos:r,listId:i})}),(0,a.jsx)(x,{"data-testid":"grid_second_row_video",children:(0,a.jsx)(T,{videos:s,listId:i,rowNumber:2,isShoveler:s.length>=3,logShovelerInteraction:n})})]})},f=g.default.div.withConfig({componentId:"sc-fd689d34-0"})([".video-display{display:none;","{display:flex;}}"],p.mediaQueries.breakpoints.above.m),x=g.default.div.withConfig({componentId:"sc-fd689d34-1"})(["padding-top:",";.video-item{grid-column:span 2;}.video-display{display:flex;","{display:none;}}"],p.spacing.xs,p.mediaQueries.breakpoints.above.m),T=e=>{let{videos:t,listId:i,isShoveler:n=!1,rowNumber:r,logShovelerInteraction:s=()=>{}}=e,o=n?m.Shoveler:m.SubGrid;return(0,a.jsx)(o,{wrapsAt:2===r?"above-m":void 0,onPageChange:n?s:void 0,children:t.map((e,t)=>(0,a.jsx)(u.Z,{video:e,index:t+(r-1),listId:i,className:`video-item ${2===r&&0===t||1===r&&1===t?"video-display":""}`,slateProps:{overlayProps:{lineClamp:1}},titleProps:{title:e.name.value}},`VideoItem--${e.id}--${t}`))})},b=e=>{let{videos:t,videoCount:i,videoSectionTitle:n,videoSectionSubTitle:g,refTagPrefixOverride:m,listId:p,videoSectionTitleLinkType:u}=e,{value:f}=(0,d.Lz)(),x=m||f,T=(0,l.EJ)(`${x}_vi`);return t?.length?(0,a.jsx)(o.wW,{componentId:s.NG.Videos,children:(0,a.jsxs)(r(),{baseColor:"base","data-testid":"videos-section",children:[(0,a.jsx)(c.G,{videoCount:i,videoSectionTitle:n,videoSectionSubTitle:g,refTagPrefixOverride:m,videoPlaylistId:p,videoSectionTitleLinkType:u}),(0,a.jsx)(h,{videos:t,listId:p,logShovelerInteraction:()=>T})]})}):(0,a.jsx)(a.Fragment,{})};var y=e=>(0,a.jsx)(d.xm,{value:d.Cd.VIDEOS,children:(0,a.jsx)(b,{...e})})},8e3:function(e,t,i){"use strict";i.d(t,{G:function(){return m},o:function(){return n}});var a,n,r=i(52322);i(2784);var s=i(88169),o=i(75824),l=i(49996),d=i(66724),c=i(11438),g=i(1833);(a=n||(n={})).NAME_VIDEO_GALLERY="NAME_VIDEO_GALLERY",a.TITLE_VIDEO_GALLERY="TITLE_VIDEO_GALLERY",a.PLAYLIST="PLAYLIST";let m=e=>{let t,{videoCount:i,videoSectionTitle:a,videoSectionSubTitle:n,refTagPrefixOverride:m,videoSectionTitleLinkType:p,videoPlaylistId:u}=e,{nameVideoGalleryLinkBuilder:h,titleVideoGalleryLinkBuilder:f,listMainLinkBuilder:x}=(0,d.WOb)(),{pageConst:T="",pageType:b}=(0,l.y)(),y=(0,o.N)({id:"feature_videos_title",defaultMessage:"Videos"});"PLAYLIST"===p&&u?t=x({lsconst:u,refSuffix:c.Cd.SEE_MORE}):"TITLE_VIDEO_GALLERY"===p?t=f({tconst:T,refSuffix:c.Cd.SEE_MORE}):"NAME_VIDEO_GALLERY"===p&&(t=h({nconst:T,refSuffix:c.Cd.SEE_MORE}));let I=m?`${m}_${c.Cd.SEE_MORE}`:void 0,v=t&&I?(0,g.Lr)(t,I):t;return(0,r.jsx)(s.SectionTitle,{"data-testid":"videos-title",href:v,subText:i?.toString(),description:n,children:a||y})}},61086:function(e,t,i){"use strict";i.d(t,{l:function(){return r}});var a=i(30382),n=i.n(a);let r=n()`
    fragment WatchBarCategory on CategorizedWatchOptions {
        categoryName {
            value
        }
        watchOptions {
            ...WatchBarOption
        }
    }
    fragment WatchBarOption on WatchOption {
        title {
            value
        }
        shortDescription {
            value
        }
        link(platform: WEB)
        provider {
            id
            logos {
                slate {
                    url
                    height
                    width
                }
            }
            refTagFragment
        }
    }
`},44551:function(e,t,i){"use strict";i.d(t,{D:function(){return d}});var a=i(52322),n=i(88169),r=i(86704);i(2784);var s=i(19596),o=i(14438),l=i(49406);let d=e=>{let t=e.watchOptionsCategories,i=(0,o.EJ)(e.refMarker.prefix);return 0===t.length?null:(0,a.jsx)(n.Shoveler,{className:e.className,omitPageMargin:"both",arrowSize:"small",onPageChange:i,"data-testid":"tm-box-wb-shoveler",children:(0,l.NT)(e).map(e=>(0,a.jsx)(m,{span:2,children:(0,a.jsx)(l.bD,{...e})},e.titleId))})},c=r.breakpoints.breakpointsNumbers.xs,g=r.breakpoints.breakpointsNumbers.s-1,m=(0,s.default)(n.ShovelerItem).withConfig({componentId:"sc-ced2741b-0"})(["@media screen and (min-width:","px) and (max-width:","px){grid-column:span 1;}","{grid-column:span 1;}"],c,g,r.mediaQueries.breakpoints.only.s)},49406:function(e,t,i){"use strict";i.d(t,{NT:function(){return m},bD:function(){return g}});var a=i(52322),n=i(88169),r=i(86704),s=i(72779),o=i.n(s);i(2784);var l=i(19596),d=i(49614),c=i(14911);let g=e=>{let{titleId:t,providerLogo:i,watchOption:n,categoryHeader:r,refMarker:s,className:l}=e,d=(0,c.Z)()({titleId:t,watchOption:n,refMarker:s}),g={url:i.url,caption:n.title.value,maxHeight:i.height,maxWidth:i.width},m=n.shortDescription?.value;return(0,a.jsxs)("div",{className:l,children:[(0,a.jsx)(u,{"data-testid":"tm-box-woc-text",children:r??""}),(0,a.jsxs)(h,{dynamicWidth:!0,children:[(0,a.jsx)(f,{ariaLabel:n.title?.value,className:o()({"no-description":!m}),...d,children:(0,a.jsx)(x,{imageModel:g,aspectRatio:"16:9"})}),!!m&&(0,a.jsx)(T,{title:m,lineClamp:"none",ariaLabel:n.title?.value,...d})]})]})},m=e=>{let{watchOptionsCategories:t,preferredProviderIds:i}=e,{organizedWatchOptions:a}=(0,d.y)({watchOptionsCategories:t,preferredProviderIds:i||[]});return a.reduce((t,i)=>{let a;return[...t,...i.watchOptions.reduce((t,n)=>{let r=i.categoryName.value!==a;a=i.categoryName.value;let s=p(n,e,r?i.categoryName.value:"");return s&&t.push(s),t},[])]},[])},p=(e,t,i)=>{let a=e.provider.logos?.slate;if(a&&a.url&&a.width&&a.height)return{titleId:t.titleId,providerLogo:{url:a.url,width:a.width,height:a.height},watchOption:e,categoryHeader:i,refMarker:t.refMarker}},u=l.default.div.withConfig({componentId:"sc-7952fc54-0"})([""," font-size:0.625em;",";height:1rem;margin-bottom:0.25rem;overflow:hidden;text-wrap:nowrap;text-overflow:ellipsis;","{font-size:0.55em;}"],(0,r.setTypographyType)("overline"),(0,r.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color"),r.mediaQueries.breakpoints.only.xs),h=(0,l.default)(n.SlateCard).withConfig({componentId:"sc-7952fc54-1"})(["width:100%;"]),f=(0,l.default)(n.Slate).withConfig({componentId:"sc-7952fc54-2"})([""," border-style:solid;border-width:1px;",";overflow:hidden;&.no-description{margin-bottom:1rem;}"],(0,r.setPropertyToColorVar)("border-color","ipt-baseAlt-border-color"),(0,r.setPropertyToShapeVar)("border-radius","ipt-mediaRadius")),x=(0,l.default)(n.SlateImage).withConfig({componentId:"sc-7952fc54-3"})([""," ",";text-align:center;border-radius:0.25rem;"],(0,r.setTypographyType)("bodySmall"),(0,r.setPropertyToColorVar)("color","ipt-on-baseAlt-color")),T=(0,l.default)(n.SlateCard.Title).withConfig({componentId:"sc-7952fc54-4"})([""," font-size:0.625rem;line-height:1rem;text-align:center;"],(0,r.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"))},21915:function(e,t,i){"use strict";i.d(t,{S:function(){return M}});var a=i(52322),n=i(14865),r=i(2784),s=i(19596),o=i(88169),l=i(86704),d=i(54588),c=i(75824),g=i(11438),m=i(50176);let p=e=>{if(!e)return{};let{awardId:t,eventEditionId:i,numWinners:a,winnersOffset:n}=(0,m.parse)(e.replace("?",""));return{overrideEvent:t&&i?{awardId:t.toString(),eventEditionId:i.toString()}:void 0,numWinners:a?parseInt(a.toString()):void 0,winnersOffset:n?parseInt(n.toString()):void 0}};var u=i(41174),h=i(66724),f=i(87801);let x=(e,t,i)=>(e||[]).map(e=>{let a,n;if(n=e.forEpisodes?e.forEpisodes[0].titleText?.text:void 0,n=e.forSongTitles?e.forSongTitles[0]:n,"AwardedNames"===e.awardedEntities.__typename){let i=e.awardedEntities,r=i.names[0];if(!r.primaryImage?.url||!r.primaryImage?.height||!r.primaryImage?.width||!r.primaryImage?.caption?.plainText||!e.award.category?.text||!r.nameText?.text)return;a={poster:{url:r.primaryImage.url,maxHeight:r.primaryImage.height,maxWidth:r.primaryImage.width,caption:r.primaryImage.caption.plainText},pageLink:t({nconst:r.id,refSuffix:f.C.EMPTY}),awardName:e.award.category.text,winnerName:r.nameText.text,constId:r.id,title:!1,secondaryWinners:(i.secondaryTitles||[]).map(e=>e.titleText?.text).filter(Boolean),notes:n}}else if("AwardedTitles"===e.awardedEntities.__typename){let t=e.awardedEntities,r=t.titles[0];if(!r.primaryImage?.url||!r.primaryImage?.height||!r.primaryImage?.width||!r.primaryImage?.caption?.plainText||!e.award.category?.text||!r.titleText?.text)return;a={poster:{url:r.primaryImage.url,maxHeight:r.primaryImage.height,maxWidth:r.primaryImage.width,caption:r.primaryImage.caption.plainText},pageLink:i({tconst:r.id,refSuffix:f.C.EMPTY}),awardName:e.award.category.text,winnerName:r.titleText.text,constId:r.id,title:!0,secondaryWinners:(t.secondaryNames||[]).map(e=>e.nameText?.text).filter(Boolean),notes:n}}return a}).filter(Boolean);var T=i(30382),b=i.n(T);let y=b()`
    query WinnersWidget(
        $enableOverride: Boolean!
        $overrideEvent: OverrideLiveEventInput
        $numWinners: Int!
    ) {
        eventLiveResults(
            override: {
                enableOverride: $enableOverride
                overrideEvent: $overrideEvent
            }
        ) {
            eventId
            noWinnersBlurb {
                value
            }
            eventPageUrl
            displayDescription {
                value
            }
            displayTitle {
                value
            }
            eventEditionAward {
                id
                awardName
                winners(limit: $numWinners) {
                    id
                    award {
                        category {
                            text
                        }
                    }
                    forEpisodes {
                        titleText {
                            text
                        }
                    }
                    forSongTitles
                    awardedEntities {
                        ... on AwardedNames {
                            __typename
                            names {
                                id
                                nameText {
                                    text
                                }
                                primaryImage {
                                    url
                                    height
                                    width
                                    caption {
                                        plainText
                                    }
                                }
                            }
                            secondaryTitles {
                                titleText {
                                    text
                                }
                            }
                            secondaryCompanies {
                                companyText {
                                    text
                                }
                            }
                        }
                        ... on AwardedTitles {
                            __typename
                            titles {
                                id
                                titleText {
                                    text
                                }
                                primaryImage {
                                    url
                                    height
                                    width
                                    caption {
                                        plainText
                                    }
                                }
                            }
                            secondaryNames {
                                nameText {
                                    text
                                }
                            }
                            secondaryCompanies {
                                companyText {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`,I=e=>{let{numWinners:t,winnersOffset:i,overrideEvent:a}=e,{nameMainLinkBuilder:s,titleMainLinkBuilder:o}=(0,h.WOb)(),l=(0,n.getIsBrowser)(),[d,c]=(0,r.useState)(l),[g,m]=(0,r.useState)(void 0),[p,f]=(0,r.useState)(void 0),[T,b]=(0,r.useState)(void 0),[I,v]=(0,r.useState)(void 0),[w,_]=(0,r.useState)(void 0),[C,S]=(0,r.useState)(void 0),[{data:E}]=(0,u.E8)({query:y,requestPolicy:"network-only",variables:{enableOverride:!!a,overrideEvent:a,numWinners:t},context:{personalized:!1,serverSideCacheable:!1},pause:!d});return(0,r.useEffect)(()=>{if(!E)return;if(!E.eventLiveResults){c(!1),setTimeout(()=>c(!0),9e5);return}m(E.eventLiveResults.displayTitle.value),f(E.eventLiveResults.displayDescription?.value),b(E.eventLiveResults.eventPageUrl),v(E.eventLiveResults.noWinnersBlurb.value);let e=x(E.eventLiveResults.eventEditionAward.winners,s,o);_(e?.slice(i,i+3)),S(E.eventLiveResults.eventId),c(!1),setTimeout(()=>c(!0),3e4)},[E,i]),{displayTitle:g,displayDescription:p,eventPageUrl:T,noWinnersBlurb:I,winners:w,eventId:C}};var v=i(82925),w=i(12563);let _=e=>{let{winner:t}=e,{title:i,constId:n,poster:s,pageLink:l,awardName:d,winnerName:m,secondaryWinners:p,notes:u}=t,{baseColor:h}=(0,r.useContext)(v.Theme).palette,{makeRefMarker:f,value:x}=(0,g.Lz)(),{isInWatchlist:T,isPending:b,onClick:y,ariaLabel:I}=(0,w.X)(n,x),_=`${l}?ref_=${f(i?g.Cd.TITLE:g.Cd.NAME)}`,k=(0,c.N)({id:"common_ariaLabel_goTo",defaultMessage:m},{target:m}),R=(0,c.N)({id:"feature_winnersWidget_signpost",defaultMessage:"WINNER"});return(0,a.jsxs)(C,{children:[(0,a.jsx)(o.Poster,{ariaLabel:k,href:_,imageProps:{imageModel:s,size:"s",imageType:i?"movie":"name",className:"poster"},watchlistRibbonProps:i?{inWatchlist:T,isLoading:b,onClick:y,ariaLabel:I}:void 0}),(0,a.jsxs)(N,{"data-testid":"winner-detail","aria-label":k,href:_,className:h,children:[(0,a.jsx)(o.Signpost,{text:R}),(0,a.jsx)(j,{children:d}),(0,a.jsx)(L,{children:m}),p?.length?(0,a.jsx)(S,{"data-testid":"winners-secondary",className:h,children:p.map((e,t)=>(0,a.jsxs)(E,{children:[e,t<p.length-1?", ":""]},t))}):null,void 0===u?null:(0,a.jsx)(P,{"data-testid":"winners-notes",children:u})]})]})},C=s.default.div.withConfig({componentId:"sc-c0364e9e-0"})(["display:flex;align-items:flex-start;padding-bottom:",";width:33%;","{padding-top:",";border-bottom:1px solid rgba(",",0.1);width:100%;}"],l.spacing.m,l.mediaQueries.breakpoints.below.l,l.spacing.m,(0,l.getColorVarValue)("ipt-base-rgb")),S=s.default.div.withConfig({componentId:"sc-c0364e9e-1"})(["",";max-width:85%;&.base{",";}&.baseAlt{",";}"],(0,l.setTypographyType)("body"),(0,l.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),E=s.default.span.withConfig({componentId:"sc-c0364e9e-2"})(["display:inline-block;white-space:pre-wrap;"]),j=s.default.div.withConfig({componentId:"sc-c0364e9e-3"})(["",";margin-top:",";margin-bottom:",";font-weight:bold;max-width:85%;"],(0,l.setTypographyType)("body"),l.spacing.xs,l.spacing.xs),L=s.default.div.withConfig({componentId:"sc-c0364e9e-4"})(["",";text-align:left;max-width:85%;"],(0,l.setTypographyType)("body")),P=s.default.div.withConfig({componentId:"sc-c0364e9e-5"})(["",";margin-bottom:",";max-width:85%;"],(0,l.setTypographyType)("bodySmall"),l.spacing.xxs),N=s.default.a.withConfig({componentId:"sc-c0364e9e-6"})(["",";padding-left:",";text-decoration:none;width:100%;&.base{",";}&.baseAlt{",";}"],(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),l.spacing.m,(0,l.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color")),k={SUBSECTION_TITLE:"winners-subsection-title",SECTION_CONTENT:"winners-section-content",EMPTY:"winners-empty",CONTENT:"winners-content"},R=(e,t)=>{if(!e)return!1;let{displayTitle:i,displayDescription:a,eventPageUrl:n,noWinnersBlurb:r,winners:s,eventId:o}=e;return(!t||o===t)&&!!e&&!!i&&!!a&&!!n&&!!r&&!!s},M=e=>{let{fallbackComponent:t,mustMatchEventId:i,headerText:n}=e;return(0,a.jsx)(d.Z,{name:"WinnersWidget",children:(0,a.jsx)(g.xm,{value:g.Cd.WINNERS_WIDGET,children:(0,a.jsx)(A,{fallbackComponent:t,mustMatchEventId:i,headerText:n})})})},A=e=>{let{fallbackComponent:t,mustMatchEventId:i,headerText:r}=e,{makeRefMarker:s}=(0,g.Lz)(),{overrideEvent:l,numWinners:d,winnersOffset:m}=p(n.isBrowser?window.location.search:void 0),{displayTitle:u,displayDescription:h,eventPageUrl:f,noWinnersBlurb:x,winners:T,eventId:b}=I({numWinners:d??3,winnersOffset:m??0,overrideEvent:l}),y=(0,c.N)({id:"winners_widget_see_all_link_text",defaultMessage:"See the full list of winners and nominees"}),v=R({displayTitle:u,displayDescription:h,eventPageUrl:f,noWinnersBlurb:x,winners:T,eventId:b},i);return v||t?(0,a.jsxs)(a.Fragment,{children:[v&&(0,a.jsxs)(o.PageSection,{topPadding:"none",bottomPadding:"none",children:[(0,a.jsx)(o.SubSectionTitle,{"data-testid":k.SUBSECTION_TITLE,description:h,href:`${f}?ref_=${s(g.Cd.TOP)}`,children:r||u}),(0,a.jsxs)($,{"data-testid":k.SECTION_CONTENT,children:[T&&0===T.length&&(0,a.jsx)(O,{"data-testid":k.EMPTY,children:x}),T&&T.length>0&&(0,a.jsx)(D,{"data-testid":k.CONTENT,children:T.map((e,t)=>(0,a.jsx)(_,{winner:e},t))}),(0,a.jsx)(W,{text:y,href:`${f}?ref_=${s(g.Cd.BOTTOM)}`})]})]}),!v&&t]}):null},O=s.default.div.withConfig({componentId:"sc-e5012e40-0"})(["padding-bottom:",";"],l.spacing.s),$=s.default.div.withConfig({componentId:"sc-e5012e40-1"})([""," ",""],(0,l.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,l.setPropertyToSpacingVar)("padding-right","ipt-pageMargin")),D=s.default.div.withConfig({componentId:"sc-e5012e40-2"})(["","{display:flex;}"],l.mediaQueries.breakpoints.above.l),W=(0,s.default)(o.TextLink).withConfig({componentId:"sc-e5012e40-3"})(["","{padding-top:",";}"],l.mediaQueries.breakpoints.below.l,l.spacing.m)},76857:function(e,t,i){"use strict";var a,n;i.d(t,{Ei:function(){return s},NE:function(){return o},oM:function(){return r},wF:function(){return a}}),(n=a||(a={})).IMDB_TV="IMDbTV",n.IMDB_ORIGINAL="IMDbOriginal",n.VIDEO="Video";let r="video-hero",s="ls053181649",o={HERO_SLATE:"hero-slate",TITLE_POSTER:"title-poster"}},59899:function(e,t,i){"use strict";i.d(t,{E:function(){return r},f:function(){return n}});var a=i(2784);let n=a.createContext({}),r=a.createContext({})},40158:function(e,t,i){"use strict";i.d(t,{Z:function(){return ax}});var a,n,r,s,o,l,d=i(52322),c=i(2784),g=i(25436),m=i(54588),p=i(23906),u=i(55634),h=i(59002),f=i(11438),x=i(24391),T=i(88959),b=i(95746),y=i(88854),I=i(11778),v=i(88169),w=i(48958),_=i(86958),C=i(2759);let S=/\/symphony\/preview\/\w+\/([\w\d-]+)\//,E=e=>{let t=(0,_.B)().context.queryParams,i=(0,C.Zl)();if(!t||!i)return;let a=t[`slot_${e}`]||void 0;return a&&"string"==typeof a?S.exec(a)?.[1]:void 0},j=e=>{let{slotName:t,slotData:i}=e,a=(0,w.G)(),n=E(t),r=`https://${(0,I.isDevStage)()?"beta.":""}console.harmony.a2z.com/content-symphony/NA`,s=i&&i.symphonyMetadata?.creativeId||n,o=s&&i&&i.symphonyMetadata?.placementId,l=i&&i.componentName,g=i?.transformedArguments?.errors,m=g?.length||0,[p,u]=(0,c.useState)(!1);return(0,d.jsxs)("div",{"data-testid":"slot-debug-bar",className:"text-on-accent1 bg-accent1 p-[0.25rem]",children:[(0,d.jsxs)("div",{className:"flex items-center gap-s flex-wrap",children:[m>0&&(0,d.jsx)(v.OutlineButton,{className:"shrink-0 whitespace-nowrap",preIcon:"warning",postIcon:p?"expand-less":"expand-more",onSelect:()=>u(!p),children:`${m} Config Errors`}),!!l&&(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:"Component:"})," ",l]}),(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:"Symphony Slot:"})," ",t,!!(s||o)&&(0,d.jsxs)(d.Fragment,{children:[!!s&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{children:" - "}),(0,d.jsx)(v.TextLink,{href:`${r}/creatives/summary/${s}/content`,text:"Campaign"})]}),!!o&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{children:" - "}),(0,d.jsx)(v.TextLink,{href:`${r}/creatives/summary/${s}/scheduling/edit/${o}`,text:"Placement"})]})]})]})]}),!!p&&(0,d.jsx)("div",{className:`max-h[300px] overflow-y-auto p-s m-0 text-xs ${a.color("textPrimary","default")}`,"data-testid":"slot-debug-errors",children:g?.map((e,t)=>{let i=`widget-error-${t}`;return d.jsxs("p",{className:"mb-0",children:[d.jsxs("b",{children:[e.code,":"]})," ",`${e.context} | ${e.message}`]},i)})})]})};var L=i(86704),P=i(19596);let N=e=>{switch(e){case T.FO.MAIN:return 2;case T.FO.SIDE:return 1;default:return 3}},k=e=>{switch(e){case T.FO.MAIN:return v.SectionTitle;case T.FO.SIDE:return v.Title;default:return v.SubSectionTitle}};(a=s||(s={})).main="announcement-widget",a.grid="announcement-widget--grid",a.title="announcement-widget--title",a.image="announcement-widget--image",a.imageAspect="announcement-widget--image-aspect",a.description="announcement-widget--desc",a.cta="announcement-widget--cta",a.ctaFullWidth="announcement-widget--cta--full-width";let R=e=>{let{placementArgs:t,displayType:i}=e,{displayTitle:a,description:n,linkTargetLabel:r,linkTargetUrl:s,slateImageModel:o}=t,{makeRefMarker:l}=(0,f.Lz)(),c=i===T.FO.SIDE?"both":void 0,g=N(i),m=k(i);return(0,d.jsx)(M,{sidePadding:"",children:(0,d.jsx)(v.PageGridItem,{span:g,children:(0,d.jsxs)(A,{omitPageMargin:c,children:[(0,d.jsx)(m,{className:"announcement-widget--title",href:`${s}?ref_=${l(f.Cd.TITLE)}`,children:a}),(0,d.jsx)(O,{className:"announcement-widget--image-aspect",href:`${s}?ref_=${l(f.Cd.IMAGE)}`,ariaLabel:a,imageProps:{imageModel:o,aspectRatio:"16:9",loading:"eager",radius:"media"}}),(0,d.jsx)($,{className:"announcement-widget--desc",html:n}),r?(0,d.jsx)(D,{className:"announcement-widget--cta",postIcon:"chevron-right",href:`${s}?ref_=${l(f.Cd.SEE_MORE)}`,children:r}):(0,d.jsx)(d.Fragment,{})]})})})},M=(0,P.default)(v.PageSection).withConfig({componentId:"sc-75d0e8cb-0"})(["container:widget / inline-size;"]),A=(0,P.default)(v.SubGrid).withConfig({componentId:"sc-75d0e8cb-1"})(["width:100%;grid-template-rows:auto 1fr min-content min-content;row-gap:0;@container widget (min-width:"," ) and (max-width:","){grid-template-rows:auto 1fr min-content;}@container widget (min-width:"," ){grid-template-rows:auto min-content 1fr;}@supports not (container:inline-size){","{grid-template-rows:auto 1fr min-content;}","{grid-template-rows:auto min-content 1fr;}}.","{grid-area:1 / 1 / 2 / -1;padding:0;@container widget (min-width:"," ){grid-area:1 / 5 / 1 / -1;}@supports not (container:inline-size){","{grid-area:1 / 5 / 1 / -1;}}}"],L.breakpoints.sizes.m,L.breakpoints.sizes.l,L.breakpoints.sizes.l,L.mediaQueries.breakpoints.above.m,L.mediaQueries.breakpoints.above.l,"announcement-widget--title",L.breakpoints.sizes.l,L.mediaQueries.breakpoints.above.l),O=(0,P.default)(v.Slate).withConfig({componentId:"sc-75d0e8cb-2"})(["display:flex;position:relative;aspect-ratio:16/9;grid-area:2 / 1 / span 2 / span 2;@container widget (min-width:"," ){grid-area:2 / 1 / -1 / span 3;}@container widget (min-width:"," ){grid-area:1 / 1 / -1 / span 4;}@supports not (container:inline-size){","{grid-area:2 / 1 / -1 / span 3;}","{grid-area:1 / 1 / -1 / span 4;}}"],L.breakpoints.sizes.m,L.breakpoints.sizes.l,L.mediaQueries.breakpoints.above.m,L.mediaQueries.breakpoints.above.l),$=(0,P.default)(v.HTMLContent).withConfig({componentId:"sc-75d0e8cb-3"})(["grid-area:2 / 3 / -1 / -1;@container widget (min-width:"," ){grid-area:2 / 4 / 2 / -1;}@container widget (width >= 768px) and (max-width:","){grid-column:4 / -2;}@container widget (min-width:"," ){grid-column:5 / -3;margin-bottom:1rem;}@supports not (container:inline-size){","{grid-area:2 / 4 / 2 / -1;}@media (width >= 768px) and (max-width:","){grid-column:4 / -2;}","{grid-column:5 / -3;margin-bottom:1rem;}}"],L.breakpoints.sizes.m,L.breakpoints.breakpoints.l,L.breakpoints.sizes.l,L.mediaQueries.breakpoints.above.m,L.breakpoints.breakpoints.l,L.mediaQueries.breakpoints.above.l),D=(0,P.default)(v.SecondaryButton).withConfig({componentId:"sc-75d0e8cb-4"})(["grid-row:4;grid-column:1 / -1;margin-top:1rem;width:min-content;flex-shrink:0;display:flex;white-space:nowrap;@container widget (min-width:"," ){display:flex;margin-top:0;width:min-content;height:min-content;align-self:self-end;grid-row:3;grid-column:4 / -1;}@container widget (min-width:"," ){grid-column:5 / -1;}@supports not (container:inline-size){","{display:flex;margin-top:0;width:min-content;height:min-content;align-self:self-end;grid-row:3;grid-column:4 / -1;}","{grid-column:5 / -1;}}"],L.breakpoints.sizes.m,L.breakpoints.sizes.l,L.mediaQueries.breakpoints.above.m,L.mediaQueries.breakpoints.above.l);var W=i(54137),U=i(69380),B=i(75824),V=i(76857);let F=e=>{let{headingText:t,subHeadingText:i,runtime:a,children:n}=e;return(0,d.jsxs)(Q,{children:[(0,d.jsxs)(G,{children:[(0,d.jsx)(Y,{children:t}),(0,d.jsx)(J,{children:a})]},"h2"),(0,d.jsx)(H,{children:i},"h3"),n]})},z=P.default.figcaption.withConfig({componentId:"sc-809ef538-0"})(["display:flex;flex-direction:row;min-width:0;margin:16px 16px 0;position:absolute;bottom:0;right:0;left:177px;","{align-items:flex-start;}","{left:148px;}","{left:165px;}","{left:90px;flex-direction:column;}"],L.mediaQueries.breakpoints.above.m,L.mediaQueries.breakpoints.only.l,L.mediaQueries.breakpoints.only.m,L.mediaQueries.breakpoints.below.m),Q=P.default.div.withConfig({componentId:"sc-809ef538-1"})(["display:flex;flex-direction:column;min-width:0;justify-content:space-around;width:100%;"]),G=P.default.div.withConfig({componentId:"sc-809ef538-2"})(["display:flex;align-items:flex-end;","{font-size:1.25rem;}","{font-size:34px;line-height:40px;}"],L.mediaQueries.breakpoints.below.s,L.mediaQueries.breakpoints.above.m),H=P.default.div.withConfig({componentId:"sc-809ef538-3"})(["","{"," font-weight:400;}","{"," font-weight:400;}","{","}color:",";font-weight:400;margin:0.25rem 0 0;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;"],L.mediaQueries.breakpoints.only.xl,(0,L.setTypographyType)("headline5"),L.mediaQueries.breakpoints.above.m,(0,L.setTypographyType)("headline6"),L.mediaQueries.breakpoints.below.s,(0,L.setTypographyType)("subtitle2"),(0,L.getColorVarValue)("ipt-on-baseAlt-textSecondary-color")),Y=P.default.span.withConfig({componentId:"sc-809ef538-4"})(["color:",";","{","}","{"," font-weight:400;}","{"," font-weight:400;}","{"," font-weight:400;}display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;"],(0,L.getColorVarValue)("ipt-on-baseAlt-color"),L.mediaQueries.breakpoints.only.xs,(0,L.setTypographyType)("subtitle"),L.mediaQueries.breakpoints.above.s,(0,L.setTypographyType)("headline6"),L.mediaQueries.breakpoints.above.m,(0,L.setTypographyType)("headline5"),L.mediaQueries.breakpoints.above.xl,(0,L.setTypographyType)("headline4")),q=(0,P.css)(["height:50px;margin:0 0 8px 0;width:50px;","{height:72px;margin:0 16px 0 0;width:72px;}g{","}"],L.mediaQueries.breakpoints.above.m,(0,L.setPropertyToColorVar)("color","ipt-on-baseAlt-color")),K=(0,P.default)(v.Icon).withConfig({componentId:"sc-809ef538-5"})(["",""],q),Z=(0,P.default)(v.Icon).withConfig({componentId:"sc-809ef538-6"})(["color:#cf1f4a;",""],q),X=P.default.div.withConfig({componentId:"sc-809ef538-7"})(["align-items:center;display:flex;"]),J=P.default.span.withConfig({componentId:"sc-809ef538-8"})(["color:",";display:none;font-size:1rem;line-height:28px;margin-left:2rem;","{display:inline;font-size:1.25rem;align-self:flex-end;}"],(0,L.getColorVarValue)("ipt-on-baseAlt-textSecondary-color"),L.mediaQueries.breakpoints.above.m),ee=P.default.span.withConfig({componentId:"sc-809ef538-9"})(["display:block;margin-left:1rem;","{display:none;}"],L.mediaQueries.breakpoints.above.m);var et=e=>{let{subHeadingText:t,mainHeadingText:i,runtime:a,videoContentType:n,children:r}=e,s=(0,B.N)({id:"video_hero_watch_on_imdb_tv",defaultMessage:"Watch Now on IMDb TV!"});return(0,d.jsx)(z,{children:(()=>{switch(n){case V.wF.IMDB_ORIGINAL:return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X,{children:[(0,d.jsx)(K,{name:"play-circle-outline-large-inline",className:"slide-caption-play-icon"}),(0,d.jsx)(ee,{children:a})]}),(0,d.jsx)(F,{headingText:i,subHeadingText:t,runtime:a,children:r})]});case V.wF.IMDB_TV:return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X,{children:[(0,d.jsx)(Z,{name:"play-circle-outline-large-inline",className:"slide-caption-play-icon"}),(0,d.jsx)(ee,{children:a})]}),(0,d.jsx)(F,{headingText:i,subHeadingText:s,runtime:a,children:r})]});default:return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X,{children:[(0,d.jsx)(K,{name:"play-circle-outline-large-inline",className:"slide-caption-play-icon"}),(0,d.jsx)(ee,{children:a})]}),(0,d.jsx)(F,{headingText:i,subHeadingText:t,runtime:a,children:r})]})}})()})},ei=i(12563),ea=i(3357),en=i(1833),er=i(66724),es=i(59899);let eo=(0,P.default)(v.Slate).withConfig({componentId:"sc-763a1cd7-0"})(["cursor:pointer;text-align:left;padding-bottom:70px;position:relative;&&{outline:none;}&:hover:not(:has(.",":hover)){.slide-caption-play-icon{","}}"],W.Ec.SPONSORED_LINK,(0,L.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color")),el=(0,P.default)(v.Slate.Image).withConfig({componentId:"sc-763a1cd7-1"})(["align-items:center;"]);var ed=e=>{let{videoId:t,listId:i,videoTitle:a,titleText:n,slotName:r}=e.videoSlateMetadata,{children:s,imageProps:o,className:l}=e,{videoSingleLinkBuilder:g}=(0,er.WOb)(),{makeRefMarker:m}=(0,f.Lz)(),p=(0,c.useContext)(es.E).indexInCarousel||0,u=(0,c.useContext)(es.f),h=g({viconst:t,refSuffix:f.Cd.EMPTY,query:i?{listId:i}:void 0}),x=(0,en.Lr)(h,m([f.Cd.VIDEO,(0,f.Qk)({refStr:r,explanation:"This value is generated by symphony content"}),{t:f.Cd.EMPTY,n:p+1}])),T={...u?{onClick:()=>{(0,ea.ih)(u),x&&(0,ea.dS)(x)}}:{href:x}},b=(0,B.N)({id:"video_slate_ariaLabel_fallback",defaultMessage:"Video slide"});return(0,d.jsxs)(eo,{...T,dynamicWidth:!0,ariaLabel:a||n||b,className:l,"data-testid":V.NE.HERO_SLATE,children:[(0,d.jsx)(el,{imageModel:o?.imageModel,aspectRatio:"16:9",loading:0===p?"eager":"lazy"}),s]})};let ec=P.default.figure.withConfig({componentId:"sc-d199aea7-0"})(["height:100%;position:relative;"]),eg=P.default.div.withConfig({componentId:"sc-d199aea7-1"})(["display:flex;position:relative;"]),em=(0,P.default)(e=>{let{titleId:t,titleText:i,clickThroughUri:a,slotName:n}=e.titlePosterMetadata,{className:r,dynamicWidth:s,watchlistRibbonSize:o,imageProps:l}=e,g=l?.imageModel||void 0,{titleMainLinkBuilder:m}=(0,er.WOb)(),{makeRefMarker:p}=(0,f.Lz)(),u=(0,c.useContext)(es.E),h=(0,c.useContext)(es.f),x=u.indexInCarousel||0,T=p([f.Cd.CAP,f.Cd.PRI,(0,f.Qk)({refStr:n,explanation:"This value is generated by symphony content"}),{t:f.Cd.EMPTY,n:x+1}]),b=p([f.Cd.VIDEO,f.Cd.WATCHLIST_RIBBON,(0,f.Qk)({refStr:n,explanation:"This value is generated by symphony content"}),{t:f.Cd.EMPTY,n:x+1}]),{isInWatchlist:y,isPending:I,onClick:w,ariaLabel:_}=(0,ei.X)(t,b),C=a||m({tconst:t,refSuffix:f.Cd.POSTER}),S=(0,en.Lr)(C,T),E=async()=>{h&&await (0,ea.Ew)(h),S&&(0,ea.dS)(S)},j=(0,B.N)({id:"title_main_hero_media_ariaLabel_poster_fallback",defaultMessage:"Poster"}),L={...h?{onClick:E}:{href:S},ariaLabel:i||j,dynamicWidth:s};return(0,d.jsx)(v.Poster,{...L,className:r,"data-testid":V.NE.TITLE_POSTER,imageProps:{imageModel:g,dynamicWidth:s,loading:0===x?"eager":"lazy"},watchlistRibbonProps:{inWatchlist:y,isLoading:I,onClick:w,ariaLabel:_,className:"ipc-poster__watchlist-ribbon",size:o,onImage:!0}})}).withConfig({componentId:"sc-d199aea7-2"})(["position:absolute;width:165px;z-index:100;bottom:0;left:16px;","{width:132px;}","{width:90px;left:0;}"],L.mediaQueries.breakpoints.below.xl,L.mediaQueries.breakpoints.below.m),ep=(0,P.default)(v.Slate.Overlay).withConfig({componentId:"sc-d199aea7-3"})(["background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(0,0,0,0.7) 75%,rgba(0,0,0,1) 85%,rgba(0,0,0,1) 100% );background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(",",0.7) 77%,rgba(",",1) 85%,rgba(",",1) 100% );","{background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,1) 82%,rgba(0,0,0,1) 100% );background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(",",0.7) 70%,rgba(",",1) 82%,rgba(",",1) 100% );}"],(0,L.getColorVarValue)("ipt-baseAlt-rgb"),(0,L.getColorVarValue)("ipt-baseAlt-rgb"),(0,L.getColorVarValue)("ipt-baseAlt-rgb"),L.mediaQueries.breakpoints.below.s,(0,L.getColorVarValue)("ipt-baseAlt-rgb"),(0,L.getColorVarValue)("ipt-baseAlt-rgb"),(0,L.getColorVarValue)("ipt-baseAlt-rgb")),eu=(0,P.default)(U.I).withConfig({componentId:"sc-d199aea7-4"})(["margin-top:",";"],L.spacing.xxs);var eh=e=>{let{titleText:t,titleId:i,headline:a,subHeadline:n,videoId:r,listId:s,runtime:o,videoContentType:l,posterImage:c,videoSlateImage:g,slotName:m,adData:p}=e;return(0,d.jsx)(ec,{children:(0,d.jsxs)(eg,{children:[(0,d.jsx)(em,{titlePosterMetadata:{titleText:t,titleId:i,slotName:m},watchlistRibbonSize:"l",dynamicWidth:!0,imageProps:{imageModel:c}}),(0,d.jsx)(ed,{videoSlateMetadata:{videoTitle:a,videoId:r,listId:s,videoContentType:l,titleText:t,slotName:m},imageProps:{imageModel:g},children:(0,d.jsx)(ep,{children:(0,d.jsx)(et,{subHeadingText:n,mainHeadingText:a,videoContentType:l,runtime:o,children:(0,d.jsx)(d.Fragment,{children:p?(0,d.jsx)("div",{children:(0,d.jsx)(W.$,{adFeedbackUrl:p.adFeedbackUrl})}):(0,d.jsx)(eu,{associatedConstId:r,entityType:"video"})})})})})]})})};i(22073);var ef=i(6935),ex=i(63370),eT=i(41174),eb=i(46138),ey=i(4736),eI=i(31885);let ev=e=>{let{card:t}=e,i=(0,eb.Z)(),a=(0,ex.K)(t.titleTextData||{}),n=t.listType===eI.lZo.Titles?a:t.caption,{trackInfo:r,ariaLabel:s,isPending:o,onClick:l}=(0,ey.R)(t.id);return(0,d.jsx)(v.PosterCard,{dynamicWidth:!0,actionProps:t.subtitle?{children:t.subtitle}:void 0,titleProps:{children:t.title,href:t.linkUrl,lineClamp:1},posterProps:{href:t.linkUrl,ariaLabel:i.formatMessage({id:"common_ariaLabel_goTo",defaultMessage:"Go to {target}"},{target:n}),imageProps:t.image?.url&&t.image?.height&&t.image?.width?{imageModel:{url:t.image?.url,maxHeight:t.image?.height,maxWidth:t.image?.width,caption:t.image?.caption?.plainText??""},imageType:t.itemType}:void 0,watchlistRibbonProps:{ariaLabel:s,inWatchlist:!!r?.isTracking,onClick:l,isLoading:o,iconOverrides:{inWatchlist:"notifications-add-check",notInWatchlist:"notifications-add"}}}})};var ew=i(30382),e_=i.n(ew),eC=i(88758),eS=i(80032),eE=i(36543);let ej=e_()`
    query ConstCardShovelerListMetadata($lsConst: ID!) {
        list(id: $lsConst) {
            listType {
                id
            }
        }
    }
`,eL=e_()`
    query ConstCardShovelerTitleListData($lsConst: ID!, $first: Int!) {
        list(id: $lsConst) {
            ...UserListListItemMetadata
            titleListItemSearch(first: $first) {
                edges {
                    listItem: title {
                        ...TitleListItemMetadata
                        principalCredits(
                            filter: {
                                categories: ["cast", "director", "creator"]
                            }
                        ) {
                            category {
                                id
                                text
                            }
                            credits {
                                name {
                                    id
                                    nameText {
                                        text
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ${eS.O4}
    ${eE.Zz}
`,eP=e_()`
    query ConstCardShovelerNameListData(
        $lsConst: ID!
        $first: Int!
        $isInPace: Boolean!
        $refTagQueryParam: String
        $originalTitleText: Boolean
    ) {
        list(id: $lsConst) {
            ...UserListListItemMetadata
            nameListItemSearch(first: $first) {
                edges {
                    listItem: name {
                        ...NameListItemMetadata
                    }
                }
            }
        }
    }
    ${eS.O4}
    ${eC.E}
`;var eN=i(72779),ek=i.n(eN);let eR=e=>e?.listType?.id===eI.lZo.Titles,eM=e=>e?.listType?.id===eI.lZo.People,eA=e=>{let t=e.principalCredits?.find(e=>"director"===e.category.id);return t?.credits[0]?.name.nameText?.text||""},eO=e=>e.primaryProfessions&&e.primaryProfessions.length>0?e.primaryProfessions[0].category.text:e.professions&&e.professions.length>0&&e.professions[0].profession?.text||"",e$=e=>{let t=e.knownFor?.edges[0]?.node.title;return t&&(t.titleText?.text||t.originalTitleText?.text)||""},eD=e=>{let{text:t,titleTextData:i}=e,a=(0,w.G)(),n=(0,ex.K)(i||{});return(0,d.jsx)("div",{className:ek()(a.color("textPrimary"),a.type("subtitle")),children:n??t})},eW=e=>{let{firstLine:t,secondLine:i}=e,a=(0,w.G)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:ek()(a.color("textPrimary"),a.type("body")),children:t}),(0,d.jsx)("div",{className:ek()(a.color("textSecondary"),a.type("bodySmall")),children:i})]})},eU=e=>{let t={originalTitleText:e?.originalTitleText,titleText:e?.titleText},i=e.releaseYear?.year?`(${e.releaseYear.year})`:"",a=eA(e);return{id:e.id,title:(0,d.jsx)(eD,{titleTextData:t}),subtitle:(0,d.jsx)(eW,{firstLine:i,secondLine:a}),image:e.primaryImage||void 0,linkUrl:`/title/${e.id}/`,listType:eI.lZo.Titles,itemType:e.titleType?.id,titleTextData:t}},eB=e=>{let t=eO(e),i=e$(e),a=e.nameText?.text||"";return{id:e.id,title:(0,d.jsx)(eD,{text:a}),subtitle:(0,d.jsx)(eW,{firstLine:t,secondLine:i}),image:e.primaryImage||void 0,caption:a,linkUrl:`/name/${e.id}/`,listType:eI.lZo.People,itemType:"name"}},eV=e=>{let t=[];return eR(e)&&e?.titleListItemSearch?.edges&&e.titleListItemSearch.edges.forEach(e=>{t.push(eU(e.listItem))}),eM(e)&&e?.nameListItemSearch?.edges&&e.nameListItemSearch.edges.forEach(e=>{t.push(eB(e.listItem))}),t},eF=e=>{let t=[...e];for(let e=t.length-1;e>0;e--){let i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t};var ez=e=>{let{titleData:t,className:i}=e,{interestSingleLinkBuilder:a}=(0,er.WOb)();return!t.interests?.edges||t.interests.edges.length<1?null:(0,d.jsx)(v.ChipList,{"data-testid":"enhanced-list-item-genres",className:i,children:t.interests.edges.map((e,i)=>{let{node:n}=e;return n.id&&n.primaryText?.text?(0,d.jsx)(v.Chip,{label:n.primaryText.text,href:a({inconst:n.id,refSuffix:{t:f.Cd.INTEREST,n:i+1}})},`${t.id}-${n.id}`):null})})},eQ=i(27722),eG=i(80653),eH=i.n(eG),eY=e=>{let t,{name:i,titleData:a,nameData:n,className:r}=e,{titleMainLinkBuilder:s,nameMainLinkBuilder:o}=(0,er.WOb)(),l=(0,ex.K)({titleText:a?.titleText,originalTitleText:a?.originalTitleText}),c=i;void 0!==l?(c=l,t=s({tconst:a?.id??"",refSuffix:f.Cd.SEE_MORE})):n?.nameText?.text&&(c=n.nameText.text,t=o({nconst:n.id,refSuffix:f.Cd.SEE_MORE}));let g=(0,d.jsxs)("h3",{className:`flex items-start gap-x-gutter bold ${eH().heading}`,children:[c,!!t&&(0,d.jsx)("span",{className:"flex flex-col justify-center h-[calc(1em*var(--lineHeight))]",children:(0,d.jsx)(eQ.Icon,{name:"chevron-right-inline",className:"h-[1em] w-[1.5rem]"})})]});return t?(0,d.jsx)("a",{href:t,className:ek()("no-underline text-inherit w-fit",r),children:g}):(0,d.jsx)("div",{className:r,children:g})},eq=i(28446),eK=i(44551),eZ=e=>{let{titleData:t,userData:i,className:a}=e,{makeRefMarker:n}=(0,f.Lz)();if(!t)return null;let r=t.watchOptionsByCategory?.categorizedWatchOptionsList??[],s=(0,eq.H)(i);return(0,d.jsx)("div",{className:ek()(a),children:(0,d.jsx)(eK.D,{titleId:t.id,watchOptionsCategories:r,refMarker:{prefix:n([f.Cd.WATCH_BAR,f.Cd.SHOVELER])},preferredProviderIds:s})})},eX=e=>{let{item:t}=e;return(0,d.jsxs)("div",{children:[(0,d.jsx)(ez,{titleData:t}),(0,d.jsx)(eY,{titleData:t,nameData:t.nameData,name:""}),(0,d.jsx)(eZ,{titleData:t.titleData,userData:t.userData})]})},eJ=i(84314);i(85846),i(47774),i(27991),i(75289);var e0=i(74029),e1=i(61086),e2=i(36362);e_()`
    query EnhancedListData(
        $titleIds: [ID!]!
        $nameIds: [ID!]!
        $imageIds: [ID!]!
        $videoIds: [ID!]!
        $descriptionMarkdown: String!
        $location: WatchOptionsLocation
        $includeUserPreferredServices: Boolean = false
    ) {
        titles(ids: $titleIds) {
            ...EnhancedListTitle
        }
        names(ids: $nameIds) {
            ...EnhancedListName
        }
        images(ids: $imageIds) {
            ...EnhancedListImage
        }
        videos(ids: $videoIds) {
            ...EnhancedListVideo
        }
        user @include(if: $includeUserPreferredServices) {
            ...UserPreferredServices
        }
        renderedMarkdown(markdownString: $descriptionMarkdown) {
            plaidHtml
        }
    }
    fragment EnhancedListName on Name {
        id
        nameText {
            text
        }
        primaryImage {
            ...EnhancedListImage
        }
    }
    fragment EnhancedListTitle on Title {
        id
        canRate {
            isRatable
        }
        titleText {
            text
        }
        primaryImage {
            ...EnhancedListImage
        }
        titleType {
            id
            isSeries
            text
            canHaveEpisodes
            displayableProperty {
                value {
                    plainText
                }
            }
        }
        originalTitleText {
            text
        }
        certificate {
            rating
        }
        ratingsSummary {
            aggregateRating
            voteCount
        }
        meterRanking {
            currentRank
            meterType
            rankChange {
                changeDirection
                difference
            }
        }
        runtime {
            seconds
            displayableProperty {
                value {
                    plainText
                }
            }
        }
        episodes {
            isOngoing
            displayableSeasons(first: 100) {
                total
            }
            displayableYears(first: 100) {
                edges {
                    node {
                        year
                    }
                }
            }
        }
        interests(first: 3) {
            edges {
                node {
                    id
                    primaryText {
                        text
                    }
                }
            }
        }
        releaseDate {
            day
            month
            year
            country {
                text
            }
        }
        watchOptionsByCategory(location: $location) {
            categorizedWatchOptionsList {
                ...WatchBarCategory
            }
        }
    }
    fragment EnhancedListImage on Image {
        id
        url
        width
        height
        caption {
            plainText
        }
    }
    ${e2.p6}
    ${e2.K8}
    ${e2.V4}
    fragment EnhancedListVideo on Video {
        isMature
        ...SharedVideoRoot
        ...SharedVideoPlaybackUrls
        ...SharedVideoPreviewUrls
    }
    ${e1.l}
    ${e0.R}
`;var e5=i(78893),e8=i(21915);i(16214),e_()`
    query EventHistory($id: ID!) {
        eventMetadata {
            event(id: $id) {
                editions(first: 150) {
                    edges {
                        node {
                            id
                            instanceWithinYear
                            year
                        }
                    }
                }
            }
        }
    }
`;let e4=e=>e.replace(/ {2}\n/g,"<br>").replace(/\[image=([^\]]+)\](.*?)\[\/image\]/g,'<img src="$1" alt="$2">'),e9=(0,P.default)(v.PageSection).withConfig({componentId:"sc-68e0bffa-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),e3=(0,P.default)(v.HTMLContent).withConfig({componentId:"sc-68e0bffa-1"})([""," "," img{margin:0 auto;display:block;max-width:100%;}"],(0,L.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,L.setPropertyToSpacingVar)("padding-right","ipt-pageMargin"));e_()`
    query images($ids: [ID!]!) {
        images(ids: $ids) {
            id
            width
            height
            url
            caption {
                plainText
            }
        }
    }
`,e_()`
    query imageGalleries($ids: [ID!]!) {
        imageGalleries(ids: $ids) {
            id
            galleryText
            images(first: 1) {
                edges {
                    node {
                        id
                        width
                        height
                        url
                        caption {
                            plainText
                        }
                    }
                }
            }
        }
    }
`,e_()`
    query videos($ids: [ID!]!) {
        videos(ids: $ids) {
            id
            runtime {
                value
                unit
            }
            thumbnail {
                width
                height
                url
            }
            name {
                value
            }
            primaryTitle {
                id
                titleText {
                    text
                    isOriginalTitle
                }
                originalTitleText {
                    text
                }
                primaryImage {
                    url
                    caption {
                        plainText
                    }
                    height
                    width
                }
                series {
                    series {
                        primaryImage {
                            url
                            caption {
                                plainText
                            }
                            height
                            width
                        }
                    }
                }
            }
        }
    }
`,e_()`
    query renderedMarkdown(
        $markdownString: String!
        $queryParams: String
        $showOriginalTitleText: Boolean
    ) {
        renderedMarkdown(markdownString: $markdownString) {
            markdown
            plaidHtml(
                queryParams: $queryParams
                showOriginalTitleText: $showOriginalTitleText
            )
        }
    }
`;var e7=i(49236);let e6=(0,P.default)(v.PageSection).withConfig({componentId:"sc-6fdee83c-0"})(["display:flex;justify-content:space-between;"," "," &&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"],(0,L.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,L.setPropertyToSpacingVar)("padding-right","ipt-pageMargin")),te=P.default.div.withConfig({componentId:"sc-6fdee83c-1"})(["width:33%;text-align:center;"]),tt=P.default.a.withConfig({componentId:"sc-6fdee83c-2"})([""," display:block;&:hover{text-decoration:underline;}"],(0,L.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color")),ti=P.default.span.withConfig({componentId:"sc-6fdee83c-3"})(["display:block;"," ",""],(0,L.setTypographyType)("body"),(0,L.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color")),ta=P.default.span.withConfig({componentId:"sc-6fdee83c-4"})(["display:block;"," ",""],(0,L.setTypographyType)("bodySmall"),(0,L.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"));var tn=i(46107),tr=i.n(tn);let ts=e=>{let{imageBreakpointOverrides:t,...i}=e,a={xs:{targetUrl:i.targetUrl,url:i.imageUrl,caption:i.imageCaption,maxHeight:i.imageHeight,maxWidth:i.imageWidth}};if(t&&JSON.parse(t)){let e=JSON.parse(t);Object.keys(e).forEach(t=>{a[t]={targetUrl:e[t].targetUrl||i.targetUrl,url:e[t].url||i.imageUrl,caption:e[t].caption||i.imageCaption,maxHeight:e[t].height||i.imageHeight,maxWidth:e[t].width||i.imageWidth}})}return a},to=e=>{let{images:t}=e,i=Object.keys(t);return(0,d.jsx)(d.Fragment,{children:i.map((e,a)=>{let n=t[e],r=i[a+1],s=a>0;return(0,d.jsx)("a",{href:n.targetUrl,style:{aspectRatio:`${n.maxWidth}/${n.maxHeight}`,width:`calc(100% - (2 * ${(0,L.getSpacingVar)("ipt-pageMargin")}))`},className:`mx-pageMargin mb-m inline-flex ${ek()({[tr().hide]:s,[tr()[`show-at-${e}`]]:s,[tr()[`hide-at-${r}`]]:r})}`,children:(0,d.jsx)(eQ.DynamicImage,{imageModel:t[e],dynamicWidth:!0})},e+t[e].url)})})};function tl(e){let{prefix:t,suffix:i}=e;return t&&i?`${t}_${i}`:t||i}var td=i(45455),tc=i.n(td),tg=i(95441);let tm="editorial-single-main-column-image",tp=e=>{let{linkedImages:t,slateProps:i,children:a,refMarker:n}=e;if(!t)return null;if(1===t.length)return(0,d.jsx)(tf,{children:(0,d.jsx)(th,{"data-testid":"main-column-editorial-styled-slate",slateProps:i,dynamicWidth:!0,children:a})});let r=2===t.length?ty:tb;return(0,d.jsx)(tx,{"data-testid":"main-column-editorial-multiple-images",children:t.map((e,t)=>{let i=e.link&&n?(0,en.Lr)(e.link,`${n}_i`):e.link;return(0,d.jsx)(tT,{className:tm,children:(0,d.jsx)(r,{children:(0,d.jsx)(v.Poster,{imageProps:{imageModel:e.imageModel},dynamicWidth:!0,href:i,ariaLabel:"editorial image"})})},`${tm}-${t}`)})})},tu=e=>{let{titleProps:t,actionProps:i,description:a,linkedImages:n}=e;return tc()(n)?(0,d.jsxs)(tI,{"data-testid":"main-column-editorial-single",children:[(0,d.jsx)(tE,{children:t?.title}),(0,d.jsx)(tj,{children:t?.title}),(0,d.jsx)(tL,{html:a}),i?.children]}):(0,d.jsxs)(tI,{"data-testid":"main-column-editorial-single",children:[(0,d.jsx)(tE,{children:t?.title}),(0,d.jsxs)(tw,{"data-testid":"content-with-images",children:[(0,d.jsxs)(tv,{children:[(0,d.jsx)(tj,{children:t?.title}),(0,d.jsx)(tL,{html:a}),i?.children]}),(0,d.jsx)(tp,{...e})]})]})},th=(0,P.default)(v.SlateCard).withConfig({componentId:"sc-546ed1e8-0"})(["width:100%;"]),tf=P.default.div.withConfig({componentId:"sc-546ed1e8-1"})(["width:100%;","{width:63%;}"],L.mediaQueries.breakpoints.above.m),tx=P.default.div.withConfig({componentId:"sc-546ed1e8-2"})(["display:flex;width:100%;& > .","{margin-right:",";}& > :last-child{margin-right:0;}","{width:63%;}.editorial-single-main-column-image{&:focus-within{outline:1px dashed currentColor;}}"],tm,L.spacing.s,L.mediaQueries.breakpoints.above.m),tT=P.default.div.withConfig({componentId:"sc-546ed1e8-3"})(["overflow:hidden;display:inline-flex;position:relative;justify-content:center;align-items:center;width:100%;padding-bottom:calc(","% * 100);"],L.IMAGE_RATIOS["slate-16x9"]),tb=P.default.div.withConfig({componentId:"sc-546ed1e8-4"})(["position:absolute;height:100%;width:122%;top:0;"]),ty=P.default.div.withConfig({componentId:"sc-546ed1e8-5"})(["position:absolute;height:100%;width:100%;top:0;"]),tI=(0,P.default)(v.PageSection).withConfig({componentId:"sc-546ed1e8-6"})(["display:flex;flex-direction:column;"," "," &&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"],(0,L.setPropertyToSpacingVar)("padding-right","ipt-pageMargin"),(0,L.setPropertyToSpacingVar)("padding-left","ipt-pageMargin")),tv=P.default.div.withConfig({componentId:"sc-546ed1e8-7"})(["display:flex;flex-direction:column;margin-top:",";z-index:1;","{width:37%;margin-right:",";margin-top:0;}"],L.spacing.m,L.mediaQueries.breakpoints.above.m,L.spacing.m),tw=P.default.div.withConfig({componentId:"sc-546ed1e8-8"})(["display:flex;flex-direction:column-reverse;","{flex-direction:row;}"],L.mediaQueries.breakpoints.above.m),t_=P.default.h2.withConfig({componentId:"sc-546ed1e8-9"})(["margin-top:0;font-size:1.25rem;font-weight:600;margin-bottom:",";"],L.spacing.l),tC=(0,P.css)(["display:block;padding-left:",";position:relative;&:before{",";",";content:'';position:absolute;height:1.5rem;width:0.25rem;margin-left:-",";}"],L.spacing.m,(0,L.setPropertyToColorVar)("background","ipt-accent1-bg"),(0,L.setPropertyToShapeVar)("border-radius","ipt-cornerRadius"),L.spacing.m),tS=(0,P.css)(["display:block;padding-top:",";position:relative;&:before{",";",";content:'';position:absolute;height:0.25rem;width:2.25rem;margin-top:-",";}"],L.spacing.l,(0,L.setPropertyToColorVar)("background","ipt-accent1-bg"),(0,L.setPropertyToShapeVar)("border-radius","ipt-cornerRadius"),L.spacing.l),tE=(0,P.default)(t_).withConfig({componentId:"sc-546ed1e8-10"})(["display:none;","{"," ","}","{"," ","}","{"," ","}","{"," ","}"],L.mediaQueries.breakpoints.only.l,tC,(0,tg.S)(1),L.mediaQueries.breakpoints.only.m,tC,(0,tg.S)(1),L.mediaQueries.breakpoints.only.s,tS,(0,tg.S)(2),L.mediaQueries.breakpoints.below.s,tS,(0,tg.S)(2)),tj=(0,P.default)(t_).withConfig({componentId:"sc-546ed1e8-11"})(["display:none;","{"," ","}"],L.mediaQueries.breakpoints.only.xl,tS,(0,tg.S)(2)),tL=(0,P.default)(v.HTMLContent).withConfig({componentId:"sc-546ed1e8-12"})(["margin-bottom:1.75rem;"," ","{","}","{","}","{","}"],(0,tg.S)(5),L.mediaQueries.breakpoints.only.xl,(0,tg.S)(6),L.mediaQueries.breakpoints.only.l,(0,tg.S)(7),L.mediaQueries.breakpoints.only.m,(0,tg.S)(7));i(72579),i(14481),(n=o||(o={})).LARGE="large",n.LISTER_SIMPLE="lister_simple",n.LSC_CENTERWIDTH="lsc_centerwidth",n.LSC_LARGE="lsc_large",n.LSC_MEDIUM="lsc_medium",n.LSC_SMALL="lsc_small",n.LSC_XLARGE="lsc_xlarge",n.LSC_XSMALL="lsc_xsmall",n.MEDIUM="medium",n.METER_ITEM="meter_item",n.MOBILE="mobile",n.MOBILE_LIST="mobile_list",n.MOBILE_SUBPAGE="mobile_subpage",n.OG_IMAGE="og_image",n.PORTRAIT_LARGE="portrait_large",n.PORTRAIT_MEDIUM="portrait_medium",n.PORTRAIT_SMALL="portrait_small",n.PORTRAIT_SPECIAL="portrait_special",n.PORTRAIT_XLARGE="portrait_xlarge",n.PORTRAIT_XSMALL="portrait_xsmall",n.PS_105X105="ps_105x105",n.PS_122X176="ps_122x176",n.PS_150X150="ps_150x150",n.PS_38X38="ps_38x38",n.PS_86X86="ps_86x86",n.PS_90X90="ps_90x90",n.SMALL="small",n.SQUARE_LARGE="square_large",n.SQUARE_MEDIUM="square_medium",n.SQUARE_SMALL="square_small",n.SQUARE_XSMALL="square_xsmall",n.TINY="tiny";let tP={[T.Et.LIST]:"editorialSingle_label_list",[T.Et.GALLERY]:"editorialSingle_label_photos",[T.Et.IMAGE]:"editorialSingle_label_photos"};T.Et.VIDEO,T.LQ.PLAY_CIRCLE_OUTLINE,T.Et.GALLERY,T.LQ.COLLECTIONS,T.Et.LIST,T.LQ.LIST,T.LQ.COLLECTIONS;let tN=e=>{var t,i;let a,n,{placementArgs:r,refMarker:s,displayType:o}=e,l=(0,p.wL)("component_IMDbEditorialSingle"),c=(0,eb.Z)(),g=(t=r.refTag)&&s?s?.prefix&&s.prefix.indexOf(t)>=0?tl(s):(0,e7.z)(t,s):s?tl(s):t||void 0,m=(i=r.refTag)&&s?s?.prefix&&s.prefix.indexOf(i)>=0?tl(s):(0,e7.z)(`c_${i}`,s):s?(0,e7.z)("c",s):i?`${i}_c`:void 0;try{n=r.linkedImages?.map(e=>({fullRefMarker:g,link:e.link,imageModel:e.imageModel?{...e.imageModel,caption:e.imageModel?.caption||"Image caption not available"}:void 0}))??[];let e=r.callToActionUrl&&r.callToActionText&&{children:(0,d.jsx)(v.TextLink,{href:m&&!tR(r.callToActionUrl)?(0,en.Lr)(r.callToActionUrl,`${m}_cta`):r.callToActionUrl,text:r.callToActionText})};a=function(e,t,i,a,n,r,s){let o={[tP[T.Et.LIST]]:e.formatMessage({id:tP[T.Et.LIST],defaultMessage:"List"}),[tP[T.Et.GALLERY]]:e.formatMessage({id:tP[T.Et.GALLERY],defaultMessage:"Photos"})},l={iconName:i,text:r&&Object.keys(o).includes(r)?o[r]:r,gradientType:"linear"},d=n?.imageModel,c=n?.link,g=s&&c&&!tR(c)?(0,en.Lr)(c,`${s}_i`):c,m=s&&c&&!tR(c)?(0,en.Lr)(c,`${s}_t`):c;return{slateProps:{imageProps:{imageModel:d},overlayProps:l,onClick:()=>g,href:g,ariaLabel:l?.text?l.text:"editorial image"},titleProps:{title:t,href:m,lineClamp:"none"},actionProps:a}}(c,r.displayTitle,r.iconName,e,n[0],r.overlayCaption,g)}catch(e){return l.error("Exception rendering component IMDbEditorialSingle",{message:e.message,stack:e.stack}),null}let u=(0,T.zc)(r.constId??"")===T.Et.VIDEO?(0,d.jsx)(U.Q,{associatedConstId:r.constId,entityType:"video"}):void 0;return a={...a,children:u},(0,d.jsx)(d.Fragment,{children:o===T.FO.MAIN?(0,d.jsx)(tu,{...a,description:r.description,linkedImages:n,refMarker:g}):(0,d.jsx)(tk,{className:"imdb-editorial-single",dynamicWidth:!0,size:"s",...a})})},tk=(0,P.default)(v.SlateCard).withConfig({componentId:"sc-73d1a9c6-0"})(["width:100%;"]),tR=e=>"https://"===e.substring(0,8)||"http://"===e.substring(0,7);e_()`
    query AdvancedTitleSearchWidget(
        $titleTypeConstraint: TitleTypeSearchConstraint
        $userRatingsConstraint: UserRatingsSearchConstraint
        $keywordConstraint: KeywordSearchConstraint
        $genreConstraint: GenreSearchConstraint
        $sort: AdvancedTitleSearchSort
    ) {
        advancedTitleSearch(
            first: 3
            constraints: {
                titleTypeConstraint: $titleTypeConstraint
                userRatingsConstraint: $userRatingsConstraint
                keywordConstraint: $keywordConstraint
                genreConstraint: $genreConstraint
            }
            sort: $sort
        ) {
            edges {
                node {
                    title {
                        id
                        titleText {
                            text
                        }
                        originalTitleText {
                            text
                        }
                        primaryImage {
                            url
                            height
                            width
                            caption {
                                plainText
                            }
                        }
                    }
                }
            }
        }
    }
`;var tM=i(74095),tA=i(78267),tO=i(75785),t$=i(42748),tD=i(49996),tW=i(14438);let tU=(e,t)=>{if(t?.[e]===void 0)return;let i=Object.entries(t[e]??{}).find(e=>{let[,t]=e;return t});return i?i[0]:void 0},tB=c.createContext({subscribeToRatingChange:void 0,subscribeToWatchlistChange:void 0});tB.Provider,tB.Consumer;var tV=i(44958),tF=i(3557);let tz=()=>{let e=(0,c.useContext)(tB),t=(0,c.useContext)(tV.E5).ratings;(0,c.useEffect)(()=>{e.subscribeToRatingChange&&e.subscribeToRatingChange(t)},[t]);let i=(0,c.useContext)(tF.r).state.items;return(0,c.useEffect)(()=>{e.subscribeToWatchlistChange&&e.subscribeToWatchlistChange(i)},[i]),(0,d.jsx)(d.Fragment,{})};var tQ=i(61139),tG=i(44115),tH=i(43698),tY=i(51347),tq=i(36123),tK=i(23279),tZ=i(55736);let tX=(e,t)=>{let i={};return t.forEach(t=>{let a=e.getPropertyValue(t);a&&(i[t]=a.trim())}),i};var tJ=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2?arguments[2]:void 0,a=i||Array.from(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.styleSheets,t=new Set;for(let i=0;i<e.length;i++)try{let a=e[i];for(let e=0;e<a.cssRules.length;e++)try{let i=a.cssRules[e];for(let e=0;e<i.style.length;e++){let a=i.style[e];a.startsWith("--")&&t.add(a)}}catch(e){continue}}catch(e){continue}return Array.from(t)}());return tX(window.getComputedStyle(e,t),a)};let t0={getIsReady:()=>!0,getWidgetSize:null,getSiteVariant:()=>"web",getPlatform:()=>"web",getPlacementData:null,getPageContext:null,getWeblabActivations:null,openTitlePrompt:null,openCreditPrompt:null,openRatingPrompt:null,recordMetric:null,setRating:null,setWatchlist:null,subscribeToRatingChange:null,subscribeToWatchlistChange:null,getScrollOffset:tQ.default,getViewportSize:tG.ZP,getTheme:e=>tJ(e),getThemeVariables:e=>tJ(e),setWidgetAspectRatio:tH.ZP,subscribeToIntersectionObserver:tY.IH,unsubscribeFromIntersectionObserver:tY.Od,subscribeToMediaQueries:tq.IH,unsubscribeFromMediaQueries:tq.Od,subscribeToResize:tK.IH,unsubscribeFromResize:tK.Od,subscribeToScrollChange:tZ.IH,unsubscribeFromScrollChange:tZ.Od},t1=e=>{let{title:t,url:i}=e;return{slotName:e.slotName||"",title:t,url:i,height:e.height||"400",generatedPrefix:e.generatedPrefix||"",isPageSection:e.isPageSection||"",disableLazyLoad:e.disableLazyLoad||""}},t2=(e,t,i)=>{let a=e.contentWindow;a&&(a.EmbeddableBridge?(a.EmbeddableBridge.pageContext=t,a.EmbeddableBridge.placementData=i,a.EmbeddableBridge.requests||(a.EmbeddableBridge.requests=[])):a.EmbeddableBridge={requests:[],pageContext:t,placementData:i},a.setEmbeddableReady?a.setEmbeddableReady():(0,tO.ZP)(a,{messageType:"embeddableReady"},"*"))},t5=(e,t)=>{if(!e)return!1;let{pageAction:i,refMarkerString:a,customPageMetadata:n}=e;if("string"==typeof i&&"string"==typeof a){let e={pageAction:i,refMarkerString:a};return n&&(e.customPageMetadata=n),t(e),!0}return!1},t8=/\/(m|www)?(\.)?((dev|preprod|beta|gamma|(([a-zA-Z]+\.)+)?desktop)+)?\.imdb\.com/,t4=e=>!!e&&!!e.match(t8),t9=(e,t)=>{let i=new URL(e),a=new URL(t);return t7(a.href)?(i.hostname=a.hostname,i.href):e},t3=/[0-9a-z-]+\.amazon\.com[:0-9]+?\/embeddable\//,t7=e=>t4(e)||t3.test(e),t6="IMDbEmbeddable",ie="embeddableMessage",it=`component_${t6}`,ii=e=>{let{isPageSection:t,children:i}=e;return t?(0,d.jsx)(v.PageSection,{"data-testid":"embeddable-section",children:i}):(0,d.jsx)(ia,{children:i})},ia=P.default.div.withConfig({componentId:"sc-a0df6ef8-0"})(["position:relative;width:100%;line-height:0;"]),ir=P.default.iframe.withConfig({componentId:"sc-a0df6ef8-1"})(["width:100%;"]),is=(0,P.default)(v.SlateCard).withConfig({componentId:"sc-19912bf7-0"})(["width:100%;"]),io=(0,P.default)(v.TextLink).withConfig({componentId:"sc-19912bf7-1"})(["",""],(0,tg.S)(2)),il=(0,P.default)(v.Slate).withConfig({componentId:"sc-19912bf7-2"})(["width:63%;"]),id=(0,P.default)(v.Title).withConfig({componentId:"sc-19912bf7-3"})(["padding-left:0;"]),ic=P.default.div.withConfig({componentId:"sc-19912bf7-4"})(["","{display:none;}"],L.mediaQueries.breakpoints.only.m),ig=(0,P.default)(v.PageSection).withConfig({componentId:"sc-19912bf7-5"})(["display:none;","{display:flex;flex-direction:column;}"],L.mediaQueries.breakpoints.only.m),im=(0,P.default)(v.HTMLContent).withConfig({componentId:"sc-19912bf7-6"})(["margin-bottom:",";",""],L.spacing.l,(0,tg.S)(7)),ip=P.default.div.withConfig({componentId:"sc-19912bf7-7"})(["width:37%;margin-right:",";"],L.spacing.m),iu=P.default.div.withConfig({componentId:"sc-19912bf7-8"})(["display:flex;flex-direction:row;"]);var ih=i(93515),ix=i(87801),iT=i(48422);let ib=e=>{let t;try{t=new URL(e,en.l8)}catch{throw Error(`Invalid URL format for url: ${e}`)}let i=t.pathname.endsWith("/")?t.pathname:t.pathname+"/",a={},n=ix.C.EMPTY;for(let[e,i]of t.searchParams.entries())"ref_"===e?n=(0,f.Qk)({refStr:i,explanation:"This value comes from an external source and cannot easily be converted to RefTokens"}):a[e]=i;let r=t.hash?t.hash.slice(1):void 0;for(let[e,t]of Object.entries(iT.$)){let s=t.replace(/\//g,"\\/").replace(/\{(\w+)\}/g,"(?<$1>[^/]+)"),o=RegExp(`^${s}$`),l=i.match(o);if(l){let t=l.groups??{};return{routeConfig:iT.$[e],routeArgs:tc()(t)?void 0:t,query:tc()(a)?void 0:a,refSuffix:n,hash:r}}}};i(86054),i(16956),e_()`
    query TenUpTitles($tconsts: [ID!]!) {
        titles(ids: $tconsts) {
            ...TitleListItemMetadata
        }
    }
    ${eE.Zz}
`;var iy=i(11947),iI=i(15030),iv=i(40981),iw=i(57708);let i_=e=>{let{rank:t,title:i,link:a,imageModel:n,rankChange:r,percentage:s,ratingData:o,refOverride:l}=e,c=s?s.weight/s.total:void 0,g=c&&c<.01,m=n?.type==="name"?v.AvatarImage:v.PosterImage;return(0,d.jsx)(v.MetaDataListItem,{labelLink:a,labelLinkAriaLabel:`${t}. ${i}`,display:"inline",preElement:n?(0,d.jsx)(iC,{children:(0,d.jsx)(m,{imageModel:n,size:"48px",dynamicWidth:!0,imageType:n.type||"movie",dynamicAspectRatio:!0})}):void 0,children:(0,d.jsxs)(iS,{children:[(0,d.jsxs)(iE,{children:[(0,d.jsxs)(ik,{"data-testid":"rank-list-item-title",children:[(0,d.jsx)(iR,{children:t}),i]}),!!o?.aggregateRating&&(0,d.jsxs)(iP,{onClick:e=>e.stopPropagation(),children:[(0,d.jsx)(ij,{hideMaxIMDbRating:!0,canRate:o.canRate,titleId:o.titleId,titleText:i,ratingsSummary:{aggregateRating:o.aggregateRating},refOverride:l}),!!o?.canRate&&(0,d.jsx)(iL,{titleId:o?.titleId,titleText:i})]})]}),(0,d.jsxs)(iN,{children:[!!r&&!!r.direction&&"number"==typeof r.difference&&(0,d.jsx)(iI.x,{difference:r.difference,direction:r.direction}),!!c&&(0,d.jsxs)(d.Fragment,{children:[!!g&&"<",(0,d.jsx)(iy.A,{value:g?.01:c,unit:"percent",style:"percent",maximumFractionDigits:g?0:1})]})]})]})})},iC=P.default.span.withConfig({componentId:"sc-29915307-0"})(["display:flex;width:3rem;flex-shrink:0;"]),iS=P.default.div.withConfig({componentId:"sc-29915307-1"})(["display:flex;flex-direction:row;margin-left:",";"," ",""],L.spacing.s,(0,L.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,L.setTypographyType)("bodySmall")),iE=P.default.div.withConfig({componentId:"sc-29915307-2"})(["display:flex;flex-direction:column;flex-grow:1;","{flex-direction:row;justify-content:space-between;align-items:center;margin-right:",";}"],L.mediaQueries.breakpoints.above.l,L.spacing.xs),ij=(0,P.default)(iv.Nf).withConfig({componentId:"sc-29915307-3"})(["flex-wrap:nowrap;margin-left:-2px;min-height:1.75rem;width:fit-content;.","{padding:0 ",";span{",";}}"],iv.z7.USER_RATING,L.spacing.s,(0,L.setTypographyType)("bodySmall")),iL=(0,P.default)(iw.$).withConfig({componentId:"sc-29915307-4"})(["","{margin-left:-",";padding-top:0;padding-bottom:0;min-height:auto;}"],L.mediaQueries.breakpoints.below.s,L.spacing.xs),iP=P.default.div.withConfig({componentId:"sc-29915307-5"})(["display:flex;align-items:center;flex-wrap:wrap;gap:0 ",";"],L.spacing.xxs),iN=P.default.div.withConfig({componentId:"sc-29915307-6"})(["display:flex;flex-direction:row;flex-grow:0;align-items:center;"]),ik=P.default.span.withConfig({componentId:"sc-29915307-7"})([""," "," ","{display:inline-flex;align-items:center;padding:0.75rem 0 0;}"],(0,L.setTypographyType)("body"),(0,L.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),L.mediaQueries.breakpoints.below.l),iR=P.default.span.withConfig({componentId:"sc-29915307-8"})(["font-weight:bold;margin-right:",";"],L.spacing.s);var iM=i(9707),iA=i(86528);let iO=(0,P.default)(v.PageSection).withConfig({componentId:"sc-355af3ec-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),i$=(0,P.default)(e=>{let{items:t,...i}=e;return t&&0!==t.length?(0,d.jsx)(v.MetaDataList,{...i,display:"compact",children:t.map(e=>(0,c.createElement)(i_,{...e,refOverride:i.refOverride,key:`${e.rank}-${e.title}`}))}):null}).withConfig({componentId:"sc-355af3ec-1"})([""," ",""],(0,L.setPropertyToSpacingVar)("margin-left","ipt-pageMargin"),(0,L.setPropertyToSpacingVar)("margin-right","ipt-pageMargin")),iD=P.default.div.withConfig({componentId:"sc-355af3ec-2"})(["align-items:center;display:flex;justify-content:center;min-height:2.25rem;"]),iW=P.default.div.withConfig({componentId:"sc-355af3ec-3"})(["margin-top:",";"," "," margin-bottom:",";min-height:2.25rem;"],L.spacing.l,(0,L.setPropertyToSpacingVar)("margin-left","ipt-pageMargin"),(0,L.setPropertyToSpacingVar)("margin-right","ipt-pageMargin"),L.spacing.l);var iU=i(85018);(r=l||(l={})).TitleTrendsUpcoming="INDIA_TITLE_TRENDS_UPCOMING",r.TitleTrendsReleasedTamil="INDIA_TITLE_TRENDS_RELEASED_TAMIL",r.TitleTrendsReleasedTelugu="INDIA_TITLE_TRENDS_RELEASED_TELUGU",r.TitleRankingsTop250India="TOP_250_INDIA",r.TitleRankingsTop50Tamil="TOP_50_TAMIL",r.TitleRankingsTop50Telugu="TOP_50_TELUGU",r.TitleRankingsTop50Malayalam="TOP_50_MALAYALAM",eI._pv.IndiaTitleTrendsUpcoming,eI._pv.IndiaTitleTrendsReleasedTamil,eI._pv.IndiaTitleTrendsReleasedTelugu,eI.dO5.Top_250India,eI.dO5.Top_50Tamil,eI.dO5.Top_50Telugu,eI.dO5.Top_50Malayalam;let iB=e_()`
    fragment TitleItem on Title {
        ...BaseTitleCard
        ...TitleCardTrailer
    }
    ${iU.sq}
    ${iU.F4}
`,iV=e_()`
    fragment TrendingTitle on TrendingTitleNode {
        rank
        weightRank
        item {
            ...TitleItem
        }
    }
    ${iB}
`;e_()`
    query IndiaWidgetTrendingTitles(
        $numResults: Int!
        $input: TopTrendingPredefinedEnum!
    ) {
        topTrendingSetsPredefined(
            first: $numResults
            input: { topTrendingSetPredefined: $input }
        ) {
            edges {
                node {
                    ...TrendingTitle
                }
            }
        }
    }
    ${iV}
`;let iF=e_()`
    fragment RankTitle on TitleChartRankingsNode {
        item {
            ...TitleItem
        }
    }
    ${iB}
`;e_()`
    query IndiaWidgetTopRatedTitles(
        $numResults: Int!
        $input: TitleChartRankingsType!
    ) {
        titleChartRankings(
            first: $numResults
            input: { rankingsChartType: $input }
        ) {
            edges {
                node {
                    ...RankTitle
                }
            }
        }
    }
    ${iF}
`;var iz=i(23842);let iQ=(0,P.default)(v.PageSection).withConfig({componentId:"sc-7ab67fd6-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),iG=(0,P.default)(v.TextLink).withConfig({componentId:"sc-7ab67fd6-1"})([""," margin-top:1.75rem;"],(0,L.setPropertyToSpacingVar)("margin-left","ipt-pageMargin")),iH=(0,P.default)(v.PageSection).withConfig({componentId:"sc-eafbde39-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),iY=(0,P.default)(v.ChipList).withConfig({componentId:"sc-eafbde39-1"})([""," ",""],(0,L.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,L.setPropertyToSpacingVar)("padding-right","ipt-pageMargin"));var iq=i(5632),iK=i(31769);let iZ=P.default.div.withConfig({componentId:"sc-45354452-0"})(["display:flex;flex-direction:column;padding-top:",";"," ",""],L.spacing.m,e=>e.backgroundColor&&(0,P.css)(["background-color:",";"],e.backgroundColor),e=>e.backgroundImage&&(0,P.css)(["background:url(",");background-size:cover;"],e.backgroundImage)),iX=P.default.div.withConfig({componentId:"sc-45354452-1"})(["display:flex;flex-direction:row;"]),iJ=(0,P.default)(v.PageTitle).withConfig({componentId:"sc-45354452-2"})([""," ",""],e=>e.headingColor&&(0,P.css)(["h1{color:",";}"],e.headingColor),e=>e.href&&(0,P.css)(["svg{display:none;}"])),i0=P.default.div.withConfig({componentId:"sc-45354452-3"})(["",""],(0,L.setPropertyToSpacingVar)("padding-right","ipt-pageMargin")),i1=(0,P.default)(iK.ZP).withConfig({componentId:"sc-45354452-4"})(["",""],e=>e.color&&(0,P.css)(["color:",";&:hover{color:",";}"],e.color,e.color)),i2=(0,P.default)(v.Tabs).withConfig({componentId:"sc-45354452-5"})([""," "," ",""],e=>e.tabBackgroundColor&&(0,P.css)(["background-color:",";"],e.tabBackgroundColor),e=>e.tabColor&&(0,P.css)([".ipc-tab > span{color:",";}"],e.tabColor),e=>e.selectedTabColor&&(0,P.css)([".ipc-tabs__indicator{background:",";}"],e.selectedTabColor));var i5=i(97729),i8=i.n(i5),i4=i(73286),i9=i(34231);let i3=e=>[e.section,e.subSection].filter(Boolean).join("."),i7=e=>{let{pageType:t,subPageType:i,queryParams:a}=e,n=i3(a||{});return(0,d.jsxs)(d.Fragment,{children:[!!t&&(0,d.jsx)("meta",{property:"imdb:pageType",content:t}),!!i&&(0,d.jsx)("meta",{property:"imdb:subPageType",content:i}),!!n&&(0,d.jsx)("meta",{property:"imdb:specialSectionPageId",content:n})]})},i6=()=>{let e=new URL((0,iq.useRouter)().asPath,"https://www.imdb.com"),t=(0,en.ps)()??"";return`https://${e.hostname}${t}${e.pathname}${e.pathname.endsWith("/")?"":"/"}`},ae=e=>{let t={};e.forEach(e=>{Object.keys(e).forEach(i=>{let a=`background-${i}`,n=t[a]?t[a]:null;t[a]=`${null!==n?`${n}, `:""}${e[i]}`})});let i="";return Object.keys(t).forEach(e=>{i+=`
	${e}: ${t[e]}; `}),i},at=e=>{let t=/^--/,i="";return Object.keys(e).forEach(a=>{let n=t.test(a)?a:`--${a}`;i+=`
	${n}: ${e[a]}; `}),i};var ai=i(68557),aa=i(83163),an=i(48687);let ar=e_()`
    fragment RankedListNameMetadata on Name {
        id
        primaryImage {
            url
            caption {
                plainText
            }
            width
            height
        }
        nameText {
            text
        }
        primaryProfessions {
            category {
                text
            }
        }
        # IMDB_WEB_PACE_SPECIFIC_PROFESSIONS_DISPLAY_1112523
        professions {
            profession {
                text
            }
        }
        knownForV2(limit: 1) @include(if: $isInPace) {
            credits {
                title {
                    id
                    originalTitleText {
                        text
                    }
                    titleText {
                        text
                    }
                    titleType {
                        canHaveEpisodes
                    }
                    releaseYear {
                        year
                        endYear
                    }
                }
                episodeCredits(first: 0) {
                    yearRange {
                        year
                        endYear
                    }
                }
            }
        }
        knownFor(first: 1) @skip(if: $isInPace) {
            edges {
                node {
                    summary {
                        yearRange {
                            year
                            endYear
                        }
                    }
                    title {
                        id
                        originalTitleText {
                            text
                        }
                        titleText {
                            text
                        }
                        titleType {
                            canHaveEpisodes
                        }
                    }
                }
            }
        }
    }
`,as=e_()`
    fragment RankedTitleListMetadata on Title {
        ...BaseTitleCard
        principalCredits {
            credits {
                category {
                    id
                    text
                }
                name {
                    id
                    nameText {
                        text
                    }
                }
            }
        }
    }

    ${iU.sq}
`,ao=e_()`
    query RankedList($lsConst: ID!, $first: Int!, $isInPace: Boolean!) {
        list(id: $lsConst) {
            id
            items(first: $first) {
                edges {
                    node {
                        listItem {
                            __typename
                            ... on Name {
                                ...RankedListNameMetadata
                            }
                            ... on Title {
                                ...RankedTitleListMetadata
                            }
                        }
                    }
                }
            }
        }
    }
    ${as}
    ${ar}
`;var al=i(79523),ad=i(65991);let ac=e=>{let t,i,{nameListData:a,rankNumber:n}=e,{nameMainLinkBuilder:r}=(0,er.WOb)();(0,an.hg)({weblabID:aa.lh.IMDB_WEB_PACE_CREDITS_1201882,treatments:{T1:!0}})?(t=a.knownForV2?.credits[0]?.title,i=a.professions?.[0].profession?.text):(t=a.knownFor?.edges[0]?.node.title,i=a.primaryProfessions?.[0].category.text);let s=(0,ex.K)(t||{}),o=a.nameText?.text;if(!o)return null;let l=(0,ef.K0)(a.primaryImage,o),c={titleName:o,condensedPadding:!0,secondaryText:(0,d.jsxs)(eQ.InlineList,{showDividers:!0,noWrap:!0,inline:!0,children:[(0,d.jsx)(eQ.InlineListItem,{children:i}),!!s&&(0,d.jsx)(eQ.InlineListItem,{children:s})]}),titlePageLink:r({nconst:a.id,refSuffix:[{t:f.Cd.LIST,n:n}]}),preElement:(0,d.jsx)(eQ.PosterImage,{imageModel:l,size:"48",imageType:"name"}),rankNumber:n,postElement:(0,d.jsx)(al.U,{constId:a.id})};return(0,d.jsx)(ad.p,{...c})},ag=e=>{let{titleListData:t,rankNumber:i}=e,{titleMainLinkBuilder:a}=(0,er.WOb)(),n=(0,ex.K)(t||{}),r=t.principalCredits?.[0].credits[0].category.text,s=t.principalCredits?.[0].credits[0].name.nameText?.text;if(!n||!s)return null;let o=(0,ef.K0)(t.primaryImage,n),l={titleName:n,condensedPadding:!0,secondaryText:(0,d.jsxs)(d.Fragment,{children:[!!r&&`${r}, `,s]}),titlePageLink:a({tconst:t.id,refSuffix:[{t:f.Cd.LIST,n:i}]}),preElement:(0,d.jsx)(eQ.PosterImage,{imageModel:o,size:"48",imageType:t.titleType?.id}),rankNumber:i,postElement:(0,d.jsx)(al.U,{constId:t.id})};return(0,d.jsx)(ad.p,{...l})};var am=i(8e3),ap=i(67626);i(35061),e_()`
    query VideoPlaylistWidgetList($id: ID!) {
        list(id: $id) {
            name {
                originalText
            }
            listType {
                id
            }
            listClass {
                id
            }
            description {
                originalText {
                    plaidHtml
                }
            }
            items(first: 100) {
                total
                edges {
                    cursor
                    position
                    node {
                        description {
                            originalText {
                                plaidHtml
                            }
                        }
                        listItem {
                            ... on Video {
                                id
                                contentType {
                                    displayName {
                                        value
                                    }
                                }
                                name {
                                    value
                                }
                                runtime {
                                    value
                                }
                                thumbnail {
                                    height
                                    url
                                    width
                                }
                                primaryTitle {
                                    originalTitleText {
                                        text
                                    }
                                    titleText {
                                        text
                                    }
                                    releaseYear {
                                        year
                                        endYear
                                    }
                                    titleType {
                                        canHaveEpisodes
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;let au={AdvancedTitleSearchWidget:e=>{let t=e.refMarker?e.refMarker:{prefix:e.placementArgs.generatedPrefix};return(0,d.jsx)(tN,{...e,refMarker:t})},ChartWidget:e=>{let{placementArgs:{heading:t,subheading:i,items:a,generatedPrefix:n,voteTotal:r}}=e,{titleMainLinkBuilder:s}=(0,er.WOb)(),o=(0,eT.nu)(),l=(0,eT.LI)({titleIds:a?.map(e=>e.item.id)??[]}),c=(0,_.B)().context;if(!a||0===a.length)return null;let g=a.some(e=>{let{item:t}=e;return t.canRate?.isRatable}),m=!!(l?.fetching&&o),p=a.map((e,t)=>{let i=e.item,a=(0,ex.L)(c,i.originalTitleText?.text,i.titleText?.text),o=e.rank||t+1,l=r?{weight:e.weightRank||0,total:r}:void 0,d=i.ratingsSummary?.aggregateRating?{aggregateRating:i.ratingsSummary.aggregateRating,voteCount:i.ratingsSummary.voteCount,titleId:i.id,canRate:!0}:void 0;if(a&&o)return{rank:o.toString(),title:a,imageModel:(0,ef.K0)(i.primaryImage,a),link:s({tconst:e.item.id,refSuffix:{t:(0,f.Qk)({refStr:n,explanation:"This ref marker is vended from the graph dynamically"}),n:t+1}}),percentage:l,ratingData:d}}).filter(Boolean);return(0,d.jsxs)(iO,{"data-testid":"symphony-IMDbChartWidget",children:[!!t&&(0,d.jsx)(v.SubSectionTitle,{description:i,children:t}),!!g&&(0,d.jsx)(iW,{children:(0,d.jsx)(iA.Z,{children:m&&o?(0,d.jsx)(iD,{children:(0,d.jsx)(v.Loader,{})}):(0,d.jsx)(iM.r,{totalNumber:p.length})})}),(0,d.jsx)(i$,{items:p,refOverride:n})]})},EventHistoryWidget:e=>{let{placementArgs:t}=e;return(0,d.jsx)(e8.S,{mustMatchEventId:t.eventId,fallbackComponent:(0,d.jsx)(f.xm,{value:(0,f.Qk)({refStr:t.generatedPrefix??"",explanation:`
                        We will continue to support ref strings provided
                        by the editorial team as well as the generated ref
                        prefix that includes the slot name.`}),children:(0,d.jsx)(e5.p,{...t})}),headerText:t.headerText})},FreeFormMarkdown:e=>{let{placementArgs:{heading:t,subheading:i,blurbHtml:a}}=e;return a?(0,d.jsxs)(e9,{"data-testid":"symphony-FreeFormMarkdown",children:[!!t&&(0,d.jsx)(v.SubSectionTitle,{description:i,children:t}),!!a&&(0,d.jsx)(e3,{html:e4(a)})]}):null},HeroWidget:e=>{let{placementArgs:t}=e,{imageLockups:i,generatedPrefix:a}=t,n={prefix:a};return(0,d.jsx)(d.Fragment,{children:!!i&&i.length>0&&(0,d.jsx)(e6,{"data-testid":"symphony-HeroWidget",children:i.map((e,t)=>{let i=t+1,a=`${e.imageUrl}?ref_=${(0,e7.z)(`${f.Cd.POSTER}_${i}`,n)}`,r=`${e.primaryTextUrl||e.imageUrl}?ref_=${(0,e7.z)(`${f.Cd.TEXT}_${i}`,n)}`,s=e.primaryText||e.secondaryText||e.image?.caption;return(0,d.jsxs)(te,{children:[(0,d.jsx)(v.Poster,{imageProps:{imageModel:e.image,imageType:"movie"},href:a,ariaLabel:s,dynamicWidth:!0}),!!r&&!!(e.primaryText||e.secondaryText)&&(0,d.jsxs)(tt,{href:r,children:[!!e.primaryText&&(0,d.jsx)(ti,{children:e.primaryText}),!!e.secondaryText&&(0,d.jsx)(ta,{children:e.secondaryText})]})]},`hero-widget-lockup-${i}`)})})})},IMDbAutorotatePromotedVideoAd:e=>{let{placementArgs:t}=e,i=(0,ea.gd)(t.promotedVideoAd),a=(0,ex.K)({originalTitleText:t.promotedVideoData.originalTitleText,titleText:t.promotedVideoData.title})||t.promotedVideoData.headline,n=i?.impressionTrackers,r=i?.titlePageClickTrackers,s={...i},o=(0,ea.DA)(s),l={...t.promotedVideoData,titleText:a},g=async()=>{n?.length&&await (0,ea.Ew)(n)};return(0,c.useEffect)(()=>{g()},[]),(0,d.jsx)(es.f.Provider,{value:{titlePageClickTrackers:r,formattedVideoTrackers:o},children:(0,d.jsx)(eh,{...l})})},IMDbAutorotateVideo:e=>{let{placementArgs:t}=e;return(0,d.jsx)(eh,{...t})},IMDbBannerImage:e=>{let{placementArgs:t}=e;if(!t||!t.imageUrl)return null;let i=ts(t);return(0,d.jsx)(to,{images:i})},IMDbEditorialAnnouncement:e=>{let{refTag:t}=e.placementArgs;return(0,d.jsx)(f.xm,{value:(0,f.Qk)({refStr:`${f.Cd.ANNOUNCEMENT}_${t}`,explanation:`
                        We will continue to support ref strings provided
                        by the editorial team as well as the generated ref
                        prefix that includes the slot name.`}),children:(0,d.jsx)(R,{...e})})},IMDbEditorialSingle:tN,IMDbEmbeddableWidget:e=>{let{placementArgs:t}=e,{url:i,title:a,height:n,slotName:r,generatedPrefix:s,isPageSection:o,disableLazyLoad:l}=t1(t),{context:g}=(0,_.B)(),{isDebug:m=!1}=(0,y.kp)(),u=g.headers?.host,h=u?`https://${u}`:i,f=t9(i,h),x=t7(f),T=(0,p.wL)(it),b=(0,eJ.n)(),I=(0,tD.y)(),v=(0,c.createRef)(),w=(0,c.useContext)(tB),C=(0,tW.EO)(),S=(0,c.useMemo)(()=>({...I,isUserLoggedIn:b,isDebug:!!m,slotId:r,siteVariant:"web"}),[I,b,r,m]),E={...t0,getPageContext:()=>S,getPlacementData:()=>t,getWeblabActivations:(e,t)=>{let i={};return("string"==typeof t?[t]:t).forEach(e=>{let t=tU(e);t&&(i[e]=t)}),i},recordMetric:(e,t)=>t5(t,C),subscribeToWatchlistChange:(e,t,i)=>(w.subscribeToWatchlistChange=e=>{(0,tO.ZP)(i.source,{...t,messageType:ie,subscribeKey:tA.hP.watchlist,subscribeData:e},i.origin)},null),subscribeToRatingChange:(e,t,i)=>(w.subscribeToRatingChange=e=>{(0,tO.ZP)(i.source,{...t,messageType:ie,subscribeKey:tA.hP.rating,subscribeData:e},i.origin)},null)},j=(0,c.useCallback)(e=>{let t=e.origin,i=e.source,{messageType:a,requestKey:n,requestData:r}=e.data,s={...e.data};if(a===ie){try{let e=i.frameElement,a=E[n];if(a){let n=a(e,r,{source:i,origin:t});s.responseData=n||s.responseData}else throw(0,tM.UnknownRequestError)(n)}catch(e){T.info(`IMDbEmbeddableBridge requestKey ${n} has no bridgeResponseMethod defined`,e.message,e.stack),s.responseError=e}(0,tO.ZP)(i,s,t)}},[T]);if((0,c.useEffect)(()=>{v.current&&S&&t&&t2(v.current,S,t)},[v,S,t]),(0,c.useEffect)(()=>(window?.addEventListener("message",j),()=>window?.removeEventListener("message",j)),[j]),!x)return T.error(`IMDbEmbeddableWidget[${r}] has invalid url [${f}] defined in creative configuration`),null;let L=(0,d.jsxs)(ii,{isPageSection:"true"===o,children:[(0,d.jsx)(ir,{"data-testid":"embeddable-iframe","data-slotid":r,"data-refprefix":s,ref:v,height:n,title:a,src:f}),(0,d.jsx)(tz,{})]});return"true"!==l?(0,d.jsx)(t$.X,{componentId:`${t6}_${r}`,children:L}):L},IMDbEnhancedList:e=>{let{placementArgs:t}=e,{items:i}=t;return i.length?(0,d.jsx)("div",{"data-testid":"enhanced-list-widget",children:i.map(e=>(0,d.jsx)(eX,{item:e},e.id))}):null},IMDbProSidebarWidget:e=>{let t,i,a,{placementArgs:n}=e,r=(0,p.wL)("component_IMDbProSidebarWidget"),{blurbContent:s,blurbLink:o,ctaText:l,ctaLink:c,heading:g,imageUrl:m,imageCaption:u,imageMaxWidth:h,imageMaxHeight:f,imageLink:x}=n;try{t={children:(0,d.jsx)(io,{href:c,text:l})},i={...(a={slateProps:{imageProps:{imageModel:{url:m,maxHeight:f,maxWidth:h,caption:u}},onClick:()=>x,href:x,ariaLabel:u},titleProps:{title:s,href:o,lineClamp:"none"},actionProps:t,dynamicWidth:!0}).slateProps,dynamicWidth:!0}}catch(e){return r.error("Exception rendering component IMDbProSidebarWidget",{message:e.message,stack:e.stack}),null}return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(ic,{"data-testid":"imdb-pro-sidebar-widget",children:[(0,d.jsx)(id,{children:g}),(0,d.jsx)(is,{size:"s",...a})]}),(0,d.jsx)(ig,{baseColor:"none","data-testid":"imdb-pro-sidebar-widget-m",children:(0,d.jsxs)(iu,{children:[(0,d.jsxs)(ip,{children:[(0,d.jsx)(id,{children:g}),(0,d.jsx)(im,{html:s}),t?.children]}),(0,d.jsx)(il,{...i})]})})]})},IMDbRankedList:e=>{let{placementArgs:t}=e,{listId:i,widgetTitle:a,widgetTitleUrl:n,description:r,subListText:s,subListTextUrl:o}=t,l=(0,an.hg)({weblabID:aa.lh.IMDB_WEB_PACE_CREDITS_1201882,treatments:{T1:!0}}),[{data:c,fetching:g,error:m}]=(0,eT.E8)({query:ao,variables:{lsConst:i,first:5,isInPace:l},context:{personalized:!1,serverSideCacheable:!0}});if(m||g||0>=(c?.list?.items?.edges.length||0))return null;let p=c?.list?.items?.edges[0].node.listItem?.__typename==="Name",u=c?.list?.items?.edges[0].node.listItem?.__typename==="Title";return p||u?(0,d.jsxs)("div",{children:[(0,d.jsx)(v.SubSectionTitle,{description:r,href:n,children:a}),(0,d.jsx)(ai.i,{displayStyle:"singleColumn",children:(0,d.jsxs)(d.Fragment,{children:[!!p&&c?.list?.items?.edges.map((e,t)=>{let{node:i}=e,a=i.listItem;return d.jsx(ac,{nameListData:a,rankNumber:t+1},a.id)}),!!u&&c?.list?.items?.edges.map((e,t)=>{let{node:i}=e,a=i.listItem;return d.jsx(ag,{titleListData:a,rankNumber:t+1},a.id)})]})}),!!s&&!!o&&(0,d.jsx)("div",{className:"pl-pageMargin pt-s",children:(0,d.jsx)(v.TextLink,{text:s,href:o})})]}):null},IMDbConstCardShoveler:e=>{let{placementArgs:t}=e,{listId:i,titleText:a,titleUrl:n,description:r,subShovelerText:s,subShovelerUrl:o}=t,[{data:l,fetching:c,error:g}]=(0,eT.E8)({query:ej,variables:{lsConst:i},context:{personalized:!1,serverSideCacheable:!0}}),m=eR(l?.list),p=eM(l?.list),[{data:u,fetching:h,error:f}]=(0,eT.E8)({query:m?eL:eP,variables:{lsConst:i,first:25,isInPace:!1,refTagQueryParam:null,originalTitleText:!1},context:{personalized:!1,serverSideCacheable:!0},pause:c||!!g||!m&&!p});if(g||f||c||h||!m&&!p||!u?.list)return null;let x=eV(u.list),T=eF(x);return 0===x.length?null:(0,d.jsxs)("div",{children:[(0,d.jsx)(v.SectionTitle,{tag:"h2",description:r,href:n,children:a}),(0,d.jsx)(v.Shoveler,{children:T.map((e,t)=>(0,d.jsx)(ev,{card:e},`${e.id}_${t}`))}),!!s&&(0,d.jsx)("div",{className:"pl-pageMargin pt-s",children:(0,d.jsx)(v.TextLink,{text:s,href:o})})]})},IMDbSectionHeader:e=>{let{placementArgs:t}=e;return t&&t.headerText?(0,d.jsx)("div",{children:(0,d.jsx)(v.SubSectionTitle,{tag:"h2",description:t.subHeaderText,children:t.headerText})}):null},IMDbTenUpTitlesWidget:e=>{let{placementArgs:t}=e,i=(0,p.wL)("IMDbTenUpTitlesWidget"),{items:a=[],title:n,description:r,seeAllLabel:s,ctaUrl:o}=t,l=ib(o)??{routeConfig:iT.$.HOME,refSuffix:f.Cd.EMPTY};return 10!==a.length?(i.error("Tried to render IMDbTenUpTitlesWidget when 10 titles were not provided"),null):(0,d.jsx)(v.PageSection,{children:(0,d.jsx)(ih.Z,{items:a,seeAllLinkProps:l,seeAllLabelOverride:s,titleProps:{title:n,description:r}})})},LinksWidget:e=>{let{placementArgs:t}=e,{heading:i,subheading:a,generatedPrefix:n}=t,r=[],s=1;for(let e=0;e<100;e++){let i=e<10?`0${e}_url`:`${e}_url`,a=e<10?`0${e}_urllabel`:`${e}_urllabel`;t[i]&&t[a]&&(r.push((0,d.jsx)(v.Chip,{label:t[a],href:`${t[i]}?ref_=${(0,e7.z)(s.toString(),{prefix:n})}`},i)),s+=1)}return r.length?(0,d.jsxs)(iH,{"data-testid":"symphony-LinksWidget",children:[!!i&&(0,d.jsx)(v.SubSectionTitle,{description:a,children:i}),(0,d.jsx)(iY,{wrap:!0,children:r})]}):null},NavigationWidget:e=>{let{placementArgs:t}=e,i=t.heading?(0,d.jsx)(iJ,{headingColor:t.headingcolor,href:t.targeturl,tag:"h1",children:t.heading}):null,a=t.showsocialsharingwidget?(0,d.jsx)(i0,{children:(0,d.jsx)(i1,{color:t.socialsharingwidgetcolor,shareProps:{label:t.socialsharingtext}})}):null,n=[],r=1;for(let e=0;e<100;e++){let i=e<10?`0${e}_url`:`${e}_url`,a=e<10?`0${e}_urllabel`:`${e}_urllabel`;t[i]&&t[a]&&(n.push({id:i,label:t[a],href:`${t[i]}?ref_=${(0,e7.z)(r.toString(),{prefix:t.generatedPrefix})}`}),r+=1)}let s=(0,iq.useRouter)(),o=n.find(e=>t[e.id]===s.asPath.split("?")?.[0]),l=o?.id;return n.length?(0,d.jsxs)(iZ,{"data-testid":"symphony-NavigationWidget",backgroundColor:t.backgroundcolor,backgroundImage:t.backgroundimageid,children:[(0,d.jsxs)(iX,{children:[i,a]}),(0,d.jsx)(i2,{tabs:n,tabBackgroundColor:t.tabbackgroundcolor,tabColor:t.tabtextcolor,selectedTabColor:t.tabkeycolor,value:l})]}):null},NinjaWidget:e=>{let t=e.refMarker?e.refMarker:{prefix:e.placementArgs.generatedPrefix};return(0,d.jsx)(tN,{...e,refMarker:t})},PageDetailsWidget:e=>{let{placementArgs:t}=e,{context:i,update:a}=(0,_.B)(),n=i6(),r=(0,i9.z)(n),{makeRefMarker:s}=(0,f.Lz)();if((0,c.useEffect)(()=>{t?.baseref&&a({...i,refTagPrefix:s((0,f.Qk)({refStr:t.baseref,explanation:"This ref marker comes from symphony content."}))})},[]),!t||!Object.keys(t).length)return null;let o=[],l=[],g=null;t.title&&(g=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("title",{children:[t.title," - IMDb"]}),(0,d.jsx)("meta",{name:"title",content:`${t.title} - IMDb`})]}),o.push((0,d.jsx)("meta",{property:"og:title",content:`${t.title} - IMDb`},"og-title")),l.push((0,d.jsx)("meta",{property:"twitter:title",content:`${t.title} - IMDb`},"tw-title")));let m=null;t.description&&(m=(0,d.jsx)("meta",{name:"description",content:t.description}),o.push((0,d.jsx)("meta",{property:"og:description",content:t.description},"og-desc")),l.push((0,d.jsx)("meta",{property:"twitter:description",content:t.description},"tw-desc")));let p=null;t.keywords&&(p=(0,d.jsx)("meta",{name:"keywords",content:t.keywords}));let u=[];if(t.backgroundimageid&&(u.push(`background-image: url(${t.backgroundimageid});`,"background-position: center top;","background-repeat: no-repeat;"),t.backgroundscroll)){let e="true"===t.backgroundscroll?"scroll":"fixed";u.push(`background-attachment: ${e};`)}if(t.backgroundcolor&&u.push(`background-color: ${t.backgroundcolor};`),t.backgroundstyles)try{let e=JSON.parse(t.backgroundstyles),i=ae(e);u.push(i)}catch(e){}let h=null;t.socialimageid&&(h=(0,d.jsx)("link",{rel:"image_src",href:t.socialimageid}),o.push((0,d.jsx)("meta",{property:"og:image",content:t.socialimageid},"og-img"),(0,d.jsx)("meta",{property:"og:image:secure_url",content:t.socialimageid},"og-imgsecureurl")),l.push((0,d.jsx)("meta",{property:"twitter:image",content:t.socialimageid},"tw-img"))),t.socialimageheight&&o.push((0,d.jsx)("meta",{property:"og:image:height",content:t.socialimageheight},"og-imgheight")),t.socialimagewidth&&o.push((0,d.jsx)("meta",{property:"og:image:width",content:t.socialimagewidth},"og-imgwidth"));let x="";if(t.stylevars)try{let e=at(JSON.parse(t.stylevars));x=`${e}`}catch(e){}o.push((0,d.jsx)("meta",{property:"og:type",content:"website"},"og-type")),l.push((0,d.jsx)("meta",{property:"twitter:card",content:"summary_large_image"},"tw-card")),o.push((0,d.jsx)("meta",{property:"og:url",content:n},"og-url")),l.push((0,d.jsx)("meta",{property:"twitter:url",content:n},"tw-url"));let T=[];return x.length&&T.push(`:root {
	${x}
}`),u.length&&T.push(`#ipc-wrap-background-id {
	${u.join("\n	")}
}`),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i8(),{children:[g,(0,d.jsx)(d.Fragment,{children:m}),(0,d.jsx)(d.Fragment,{children:p}),(0,d.jsx)(d.Fragment,{children:h}),(0,d.jsx)("link",{rel:"canonical",href:n}),(0,i4.W)(r),(0,d.jsx)(d.Fragment,{children:i7(i)}),o,l]}),(0,d.jsx)("style",{id:"symphony-custom-stylings",dangerouslySetInnerHTML:{__html:`${T.join("\n")}`}})]})},popular_shoveler:e=>{let{placementArgs:{heading:t,subheading:i,urlLabel:a,targetURL:n,titleCards:r=[],generatedPrefix:s}}=e;return r.length?(0,d.jsx)(iQ,{"data-testid":"symphony-IMDbIndiaShoveler",children:(0,d.jsxs)(f.xm,{value:(0,f.Qk)({refStr:s??"",explanation:`
                    We will continue to support ref strings provided
                    by the editorial team as well as the generated ref
                    prefix that includes the slot name.`}),children:[!!t&&(0,d.jsx)(v.SubSectionTitle,{description:i,children:t}),(0,d.jsx)(v.Shoveler,{wraps:!1,children:(0,d.jsx)(d.Fragment,{children:r.map((e,t)=>(0,d.jsx)(iz.c,{data:e,index:t+1},e.id))})}),!!a&&!!n&&(0,d.jsx)(iG,{text:a,href:(0,en.Lr)(n,(0,e7.z)("cta",{prefix:s}))})]})}):null},VideoPlaylistWidget:e=>{let{placementArgs:{lsconst:t,heading:i,subheading:a,videos:n,generatedPrefix:r}}=e;return(0,d.jsx)(ap.Z,{videoSectionTitle:i,videoSectionSubTitle:a,videos:n,refTagPrefixOverride:r,listId:t,videoSectionTitleLinkType:am.o.PLAYLIST})}},ah=e=>{let{slotName:t}=e,i=(0,p.wL)("component_Slot"),[a]=(0,x.i)();try{let n=(0,y.kp)(),r=n.transformedPlacements[t],s=n.isDebug;if(!r){if(Object.keys(n?.transformedPlacements).length>0&&s&&i.debug({context:t,code:T.SM.SLOT_NAME_UNAVAILABLE,message:`${t} is not on CMS Context`}),s)return(0,d.jsx)(j,{slotName:t});return null}if(!(r.componentName in au))return s&&r.componentName!==T.h4&&i.error({context:r.componentName,code:T.SM.UNREGISTERED_COMPONENT_NAME,message:`${r.componentName} is not a registered component`}),null;let o=r.transformedArguments?.errors;if(o&&o.length>0){if(a(i,g.NextMetrics.EDITORIAL_ERROR,1),o.map(e=>{((0,b.X)(e)||s)&&i.error({code:e.code,creativeId:r.symphonyMetadata?.creativeId,placementId:r.symphonyMetadata?.placementId,componentName:r.componentName,context:e.context})}),(0,b.J)(o))return null}else a(i,g.NextMetrics.EDITORIAL_ERROR,0);let l=`${u.NG.ContentSymphony}_${e.slotName}`;return(0,d.jsx)(h.wW,{componentId:l,children:(0,d.jsx)(af,{...e,slotData:r,isDebug:!!s})})}catch(e){return i.error(`Exception rendering Symphony slot with name ${t}`,{message:e.message,stack:e.stack}),null}},af=e=>{let{slotData:t,slotName:i,isDebug:a,refMarker:n,displayType:r}=e,{value:s}=(0,f.Lz)(),o=au[t.componentName];return(0,d.jsxs)(d.Fragment,{children:[!!a&&(0,d.jsx)(j,{slotName:i,slotData:t}),(0,d.jsx)(o,{placementArgs:t.transformedArguments||t.arguments,refMarker:n??{prefix:s},displayType:r})]})};var ax=e=>(0,d.jsx)(m.Z,{name:e.slotName,parent:"Slot",children:(0,d.jsx)(ah,{...e})})},88959:function(e,t,i){"use strict";var a,n,r,s,o,l,d,c;i.d(t,{Et:function(){return a},FO:function(){return r},LQ:function(){return s},SM:function(){return n},h4:function(){return p},zc:function(){return m}}),(o=a||(a={})).TITLE="title",o.NAME="name",o.VIDEO="video",o.IMAGE="image",o.LIST="list",o.GALLERY="gallery",(l=n||(n={})).SLOT_NAME_UNAVAILABLE="SlotNameUnavailable",l.UNREGISTERED_COMPONENT_NAME="UnregisteredComponentName",l.CONST_TYPE_UNAVAILABLE="ConstTypeUnavailable",l.IMAGE_UNAVAILABLE="ImageUnavailable",l.CAPTION_UNAVAILABLE="CaptionUnavailable",l.LINK_UNAVAILABLE="LinkUnavailable",l.NO_DESCRIPTION="NoDescription",l.NO_TITLE="NoTitle",l.INVALID_IMAGE_SIZE="InvalidImageSize",l.VIDEO_NOT_FOUND="VideoIdNotFound",l.UNEXPECTED_ERROR="UnexpectedError",l.GRAPHQL_ERROR="GraphQLError",l.MISSING_REQUIRED_FIELDS="MissingRequiredFields",l.INVALID_JSON="InvalidJson",l.TITLE_NOT_FOUND="TitleIdNotFound",l.NAME_NOT_FOUND="NameIdNotFound",(d=r||(r={})).MAIN="main",d.SIDE="side",d.FULL="full";let g={tt:"title",rm:"image",nm:"name",vi:"video",rg:"gallery",ls:"list"};function m(e){return g[e.substring(0,2)]}(c=s||(s={})).PLAY_CIRCLE_OUTLINE="play-circle-outline",c.DASHBOARD="dashboard",c.LIST="list",c.COLLECTIONS="collections";let p="ZergnetWidget"},95746:function(e,t,i){"use strict";i.d(t,{J:function(){return s},X:function(){return r}});var a=i(88959);let n=[a.SM.NO_TITLE,a.SM.VIDEO_NOT_FOUND,a.SM.UNEXPECTED_ERROR,a.SM.MISSING_REQUIRED_FIELDS],r=e=>!!n.includes(e.code),s=e=>!!e&&0!==e.length&&!!e.find(r)},14481:function(e,t,i){"use strict";i.d(t,{E5:function(){return y},HL:function(){return f},Kz:function(){return T},PY:function(){return I},Q0:function(){return d},ax:function(){return u},hc:function(){return s},iZ:function(){return m},p$:function(){return c},pU:function(){return v},qM:function(){return w},v_:function(){return b},zF:function(){return x}});let a="[0-9]{7,19}",n=`[a-z]{2}${a}`,r=`ch${a}`,s=`co${a}`,o=`in${a}`,l=`li${a}`,d=`ls${a}`,c=`nm${a}`,g=`rg${a}`,m=`rm${a}`,p=`rw${a}`,u=`tt${a}`,h=`ev${a}`,f="ur[0-9]{7,}",x=`vi${a}`;new RegExp(a);let T=new RegExp(n);new RegExp(r),new RegExp(s),new RegExp(o),new RegExp(l);let b=new RegExp(d);new RegExp(c),RegExp("[\\w-]{11,22}");let y=new RegExp(g),I=new RegExp(m);new RegExp(p);let v=new RegExp(u);new RegExp(h),new RegExp(f);let w=new RegExp(x);RegExp(`.*/title/${u}/`)},89105:function(e,t,i){"use strict";i.d(t,{OV:function(){return g}});var a,n,r=i(66898),s=i(14865),o=i(2784),l=i(56044),d=i(8531),c=i(58306);(a=n||(n={})).NotDelayed="NOT_DELAYED",a.DelayCompleted="DELAYED",a.Fallback="DELAYED_FALLBACK";let g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"UNDECLARED_DELAYED_FEATURE",t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[i,a]=(0,o.useState)(!0),n=(0,o.useRef)([]),g=(0,o.useCallback)(i=>{t&&((0,d.XK)(`${e}_${i}`),(0,r.insertCSAWidgetLoad)(`${e}_${i}`,Date.now())),n.current.forEach(e=>e()),a(!1)},[e]);return(0,o.useEffect)(()=>{if((0,s.getIsBrowser)()){let e=(0,c.Y)(l.x.PRIMARY_ADS_LOADED_EVENT_NAME,()=>g("DELAYED"));e&&n.current.push(e);let t=(0,c.Y)(l.x.NO_PRIMARY_ADS_TO_LOAD_EVENT_NAME,()=>g("NOT_DELAYED"));t&&n.current.push(t)}},[g]),(0,o.useEffect)(()=>{let e=setTimeout(()=>g("DELAYED_FALLBACK"),9e3);return()=>clearTimeout(e)},[g]),i}},64840:function(e,t,i){"use strict";i.d(t,{b:function(){return m}});var a=i(11778),n=i(50176),r=i(68546),s=i.n(r),o=i(49666),l=i(1833),d=i(54038),c=i(11438),g=i(48422);let m=e=>{let{makeRefMarker:t}=(0,c.Lz)(),i=(0,o.ik)(),r=(0,l.ps)()??"",m=i&&(0,a.isLocalStage)()?o.y2:"",p=Object.entries(g.$).find(t=>t[1]===e.routeConfig)?.[0]??"",u=p in g.G&&i?g.G[p]:e.routeConfig,h=s()((i?"":r)+m+u,e.routeArgs),f=(0,d.J)(e.query||{},g.$[e.routeConfig]);f.ref_=t(e.refSuffix);let x=e.hash?"#"+e.hash:"";return h+"?"+(0,n.stringify)(f)+x}},16956:function(e,t,i){"use strict";i.d(t,{_:function(){return r}});var a=i(14481);let n=RegExp(`^${a.ax}$`),r=e=>n.test(e)},11898:function(e){e.exports={tenUpRatingGroup:"TenUp_tenUpRatingGroup__8uvyN",tenUpWatchedButton:"TenUp_tenUpWatchedButton__GYi7E",tenUpTitleMetadata:"TenUp_tenUpTitleMetadata__5iDFT",tenUpSignpost:"TenUp_tenUpSignpost__XTaxd",tenUpCardBoxShadow:"TenUp_tenUpCardBoxShadow__aaYA2",tenUpPlot:"TenUp_tenUpPlot__PbFBT",tenUpXLSeeAllButton:"TenUp_tenUpXLSeeAllButton__Fkwx0"}},80653:function(e){e.exports={heading:"EnhancedListItemContent_heading__ODx0z",posterArea:"EnhancedListItemContent_posterArea__AFQMH",contentArea:"EnhancedListItemContent_contentArea__LNI7I",contentAreaNoPoster:"EnhancedListItemContent_contentAreaNoPoster__Rt0FW",relatedItem:"EnhancedListItemContent_relatedItem__9O73e",rankSignpost:"EnhancedListItemContent_rankSignpost__KxwLD"}},46107:function(e){e.exports={hide:"IMDbBannerImage_hide__zrGMm","hide-at-s":"IMDbBannerImage_hide-at-s__1w8DT","show-at-s":"IMDbBannerImage_show-at-s__2YIUT","hide-at-md":"IMDbBannerImage_hide-at-md__O4JNI","show-at-md":"IMDbBannerImage_show-at-md__hlSKq","hide-at-l":"IMDbBannerImage_hide-at-l__JUoOf","show-at-l":"IMDbBannerImage_show-at-l__ibYsy","hide-at-xl":"IMDbBannerImage_hide-at-xl__Lt_az","show-at-xl":"IMDbBannerImage_show-at-xl__s1bg4"}}}]);

