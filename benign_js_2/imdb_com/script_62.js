/* 元のURL: https://imdb.com */
// 外部JS: https://dqpnq362acqdi.cloudfront.net/_next/static/chunks/1811-e15b4e2890f815c1.js
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1811],{31274:function(e,t,r){r.d(t,{T:function(){return i},u:function(){return n}});let n="PREFERRED",i={editPreferredServicesButtonText:{id:"userPreferredServices_edit_preferred_services",defaultMessage:"Edit preferred services"},setYourPreferredServicesButtonText:{id:"userPreferredServices_set_your_preferred_services",defaultMessage:"Set your preferred services"}}},49614:function(e,t,r){r.d(t,{y:function(){return a}});var n=r(2784),i=r(31274);let a=e=>{let{watchOptionsCategories:t,preferredProviderIds:r}=e;return{organizedWatchOptions:(0,n.useMemo)(()=>{if(!t||0===t.length)return[];let e=Object.fromEntries(r.map((e,t)=>[e,t])),n=new Map;t.forEach(e=>{e.watchOptions.forEach(t=>{let a=r.includes(t.provider.id)?i.u:e.categoryName.value;n.has(a)||n.set(a,{categoryName:{value:a},watchOptions:[]}),n.get(a).watchOptions.push(t)})});let a=Array.from(n.values());return a.forEach(t=>{t.watchOptions.sort((t,r)=>(e[t.provider.id]??1/0)-(e[r.provider.id]??1/0))}),a.sort((e,t)=>e.categoryName.value===i.u?-1:t.categoryName.value===i.u?1:0)},[t,r])}}},74029:function(e,t,r){r.d(t,{R:function(){return a}});var n=r(30382),i=r.n(n);i()`
    fragment WatchProviders on WatchProviderConnection {
        pageInfo {
            hasNextPage
            endCursor
        }
        edges {
            node {
                id
                isPopular
                isSupported(platform: WEB)
                logos {
                    icon {
                        height
                        width
                        url
                    }
                }
                name {
                    value
                }
                description {
                    value
                }
                refTagFragment
            }
        }
    }
`;let a=i()`
    fragment UserPreferredServices on User {
        preferredStreamingProviders(first: 100) {
            streamingProviders {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    }
`},28446:function(e,t,r){r.d(t,{H:function(){return n}});let n=e=>e?(e?.preferredStreamingProviders.streamingProviders.edges||[]).map(e=>e.node.id):[]},11602:function(e,t,r){r.d(t,{Vc:function(){return o},qb:function(){return a},vW:function(){return s}});var n=r(30382),i=r.n(n);let a=i()`
    mutation TrackConst($input: SetTrackNotificationPreferencesInput!) {
        trackConst(input: $input) {
            constId
            message {
                language
                value
            }
            success
        }
    }
`,o=i()`
    mutation UntrackConst($input: UntrackConstInput!) {
        untrackConst(input: $input) {
            constId
            message {
                language
                value
            }
            success
        }
    }
`,s=i()`
    fragment TrackPreferences on TrackNotificationPreferences {
        isTracking
        notificationPreferences {
            interested
            type {
                text
                typeId
            }
        }
    }
`},92543:function(e,t,r){r.d(t,{g:function(){return u}});var n=r(27722),i=r(2784),a=r(11438),o=r(14438),s=r(37179);let u=e=>{let t=(0,n.useBreakpointsAsConfig)(),r=t.xs||t.s,u=(0,o.EO)();(0,i.useEffect)(()=>{e&&r&&u({refMarkerSuffix:a.Cd.PROMPT,pageAction:`${s.QJ.PROMPT_OPEN}-bs`})},[e,r])}},92847:function(e,t,r){r.d(t,{T:function(){return T}});var n=r(52322),i=r(77725),a=r(98644),o=r(44958),s=r(2784),u=r(75824),l=r(82433),d=r(84314),c=r(11438),f=r(14438),g=r(37179),m=r(30634),p=r(92543);let v={id:"common_ratingPrompt_header",defaultMessage:"Rate this"},h={id:"common_ratingPrompt_rate",defaultMessage:"Rate"},_={id:"common_ratingPrompt_removeRating",defaultMessage:"Remove rating"},P={id:"common_ratingPrompt_ariaLabelPrefix",defaultMessage:"Rating"},T=e=>{let{title:{id:t,titleText:r,canRate:T,posterImage:k},ratingTriggerComponent:I,refOverride:$}=e,[x,R]=(0,s.useState)(!1),w=(0,d.n)(),{makeRefMarker:S}=(0,c.Lz)(),{rating:M,updateRating:N,deleteRating:b}=(0,a.nj)(t)||{},y=S($?[(0,c.Qk)({refStr:$,explanation:"Not all usages of RatingPrompt have been converted to link builders."}),c.Cd.RATING]:c.Cd.RATING),C=(0,f.EO)(),{updateTitleRating:E,deleteTitleRating:O,tempRateUpdateLogRef:A}=(0,l.vY)({titleId:t,refTag:y,currentRating:M}),F=(0,u.N)(v),L=(0,u.N)(h),U=(0,u.N)(_),B=(0,u.N)(P),D=(0,m.pl)();return(0,p.g)(x),(0,n.jsxs)(n.Fragment,{children:[I({onUserRatingClick:()=>{T&&(C({pageAction:g.QJ.USER_RATING_PROMPT_OPEN,hitType:i.Re.POP_UP,refMarkerString:y}),R(!0))}}),!!T&&(0,n.jsx)(a.TB,{isOpen:x,tconst:t,title:r,posterImage:k,headerLabel:F,rateLabel:L,ariaLabelPrefix:B,shouldUseNewRatingFlow:!0,secondaryButtonText:U,secondaryButtonType:o.uu.RemoveRating,onPrimaryButtonClicked:async(e,t)=>{if(!e){R(!1);return}w?(R(!1),N?.(e,y,()=>E(e,t))):(await A(e,t),D({rating:e,titleId:t,ref:y}))},onSecondaryButtonClicked:async(e,t)=>{R(!1),b?.(y,()=>O(t))},onCloseClicked:()=>{R(!1)}})]})}},2870:function(e,t,r){r.d(t,{f:function(){return l}});var n=r(52322),i=r(88169);r(2784);var a=r(19596),o=r(75824),s=r(11438),u=r(12563);let l=e=>{let{titleId:t,refOverride:r,buttonStyle:a}=e,{makeRefMarker:l}=(0,s.Lz)(),{isInWatchlist:c,isPending:f,onClick:g,ariaLabel:m}=(0,u.X)(t,l(r||[s.Cd.WATCHLIST,s.Cd.BUTTON])),p=(0,o.N)({id:"common_buttons_watchlist",defaultMessage:"Watchlist"}),v="text"===a?i.TextButton:i.SecondaryButton;return(0,n.jsxs)(v,{ariaLabel:m,onClick:g,width:"full-width",preIcon:f?void 0:c?"done":"add",disabled:f,children:[!!f&&(0,n.jsx)(d,{"data-testid":"watchlist-button-loader",type:"circle"}),!f&&p]})},d=(0,a.default)(i.Loader).withConfig({componentId:"sc-37569775-0"})(["max-height:30px;max-width:30px;vertical-align:middle;"]);t.Z=l},94471:function(e,t,r){r.d(t,{P:function(){return a}});var n=r(46138);let i={default:{maximumFractionDigits:1,minimumFractionDigits:1},imdb:{maximumFractionDigits:1,minimumFractionDigits:1},user:{maximumFractionDigits:0,minimumFractionDigits:0}},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",r=arguments.length>2?arguments[2]:void 0,a=(0,n.Z)();if(!e)return"";if(10===e)return"10";let o="user"===t?Math.trunc(e):Number(e.toFixed(1)),s=r??i[t];return a.formatNumber(o,s)}},22073:function(e,t,r){var n,i;function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";if(e<=0)return"hours_minutes_explicit"===t?"0min":"hours_minutes_explicit_short"===t?"0m":"iso_8601"===t?"PT0S":"0:00";let r=Math.floor(e/3600),n=Math.floor(e%3600/60),i=Math.floor(e%60);if("hours_minutes_explicit"===t||"hours_minutes_explicit_short"===t)return(e<60&&e>0&&(n=1),r>0&&n<=0)?`${r}h`:`${r>0?r+"h "+n:n}${"hours_minutes_explicit_short"===t?"m":"min"}`;if("iso_8601"!==t)return`${r>0?r+":"+o(n):n}:${o(i)}`;{let e=r?`${r}H`:"",t=n?`${n}M`:"",a=i?`${i}S`:"";return`PT${e}${t}${a}`}}function o(e){return e<=0||!Number.isInteger(e)?"00":e>9?`${e}`:`0${e}`}r.d(t,{A:function(){return n},L:function(){return a}}),(i=n||(n={})).DEFAULT="default",i.HOURS_MINUTES_EXPLICIT="hours_minutes_explicit",i.HOURS_MINUTES_EXPLICIT_SHORT="hours_minutes_explicit_short",i.ISO_8601="iso_8601"},82433:function(e,t,r){r.d(t,{vY:function(){return d}});var n=r(30382),i=r.n(n),a=r(22619),o=r(14438),s=r(17503);let u=i()`
    mutation UpdateTitleRating($rating: Int!, $titleId: ID!) {
        rateTitle(input: { rating: $rating, titleId: $titleId }) {
            rating {
                value
            }
        }
    }
`,l=i()`
    mutation DeleteTitleRating($titleId: ID!) {
        deleteTitleRating(input: { titleId: $titleId }) {
            date
        }
    }
`,d=e=>{let[,t]=(0,s.Z)(u),[,r]=(0,s.Z)(l),n=(0,o.EO)(),{addToWatchedTitles:i}=(0,a.V)(),d=t=>{n({refMarkerString:e.refTag,pageAction:t,customPageMetadata:{id:e.titleId}})};return{updateTitleRating:(e,r)=>(d(`rating-add-${r}-${e}`),i(r),t({rating:e,titleId:r})),deleteTitleRating:e=>(d(`rating-del-${e}`),r({titleId:e})),tempRateUpdateLogRef:async(e,t)=>{d(`tmp-rating-add-${t}-${e}`)}}}},95441:function(e,t,r){r.d(t,{S:function(){return i}});var n=r(19596);let i=e=>(0,n.css)(["@supports (-webkit-line-clamp:","){display:-webkit-box;-webkit-line-clamp:",";-webkit-box-orient:vertical;overflow:hidden;}"],e,e)},14911:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(14438),i=r(25291),a=r.n(i),o=r(22431),s=r(22873);let u=(e,t)=>{let r;if(!t||(window.ad_utils&&(r=window.ad_utils.responsiveAdAPI.getLastAdResponse()),null===r))return Promise.resolve();let n=l(e),i=l(r);if(!d(n,i))return Promise.resolve();let a=i.clickTrackers;return Array.isArray(a)?c(a):Promise.resolve()},l=(e,t)=>{let r=e&&e.slots?e.slots[o.A.PROMOTED_WATCH_BAR]:null;if((0,s.M2)(r)||!(r&&r.slotMarkup))return null;let n=r.slotMarkup;try{return JSON.parse(n)}catch(e){return t&&t("There was an error decoding PWB ad response",e),null}},d=(e,t)=>!!e&&!!t&&e.providerId===t.providerId,c=e=>{let t=[];return e.forEach(e=>{t.push(g(e).catch(t=>console.error("Error when trying to fire tracker : "+e,t)))}),Promise.all(t)};a()(function(e,t){return f(e,t)});let f=(e,t)=>{let r=l(e),n=l(t);if(!d(r,n))return Promise.resolve();let i=n.impressionTrackers;return Array.isArray(i)?c(i):Promise.resolve()},g=e=>new Promise((t,r)=>{let n=new Image;n.addEventListener("load",()=>t(n)),n.addEventListener("error",e=>r(e)),n.src=e}),m=/[^a-zA-Z0-9]/g,p=e=>{let{watchTitleId:t,refMarker:r,watchOption:n,logOffsiteRef:i,adSlotsInfo:a}=e;return()=>{let e=n.provider?.refTagFragment?.replace(m,"").substring(0,12);i({refMarkerString:r,pageAction:e?`watch-${t}-${e}`:`watch-${t}`}),n.promoted&&a&&u(a,n.promoted)}},v=()=>{let e=(0,n.z7)();return t=>{let{titleId:r,watchOption:i,refMarker:a,adSlotsInfo:o}=t,s=a?.prefix?`${a.prefix}_`:"",u=a?.suffix?`_${a.suffix}`:"",l=i.provider?.refTagFragment?`${s}${i.provider.refTagFragment}${u}`:"",d=i.provider?.refTagFragment?`${s}${i.provider.refTagFragment}`:"",c=i.link.startsWith("/"),f=-1!==i.link.indexOf("imdb.com"),g=!c&&!f;return{href:(0,n.jo)(i.link,d),onClick:p({watchTitleId:r,refMarker:l,watchOption:i,logOffsiteRef:e,adSlotsInfo:o}),postIcon:g?"launch":void 0,postIconName:g?"launch":void 0,target:"_blank"}}}}}]);

