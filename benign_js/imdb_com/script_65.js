/* 元のURL: https://imdb.com */
// 外部JS: https://dqpnq362acqdi.cloudfront.net/_next/static/chunks/4866-5597490be5f90763.js
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4866],{3357:function(e,t,i){i.d(t,{C5:function(){return r},DA:function(){return u},EQ:function(){return c},Ew:function(){return m},RQ:function(){return y},dS:function(){return T},gd:function(){return g},ih:function(){return p}});var a,r,n=i(16189),o=i(54122);(a=r||(r={})).activate="activate",a.midpoint1="midpoint1",a.midpoint2="midpoint2",a.midpoint3="midpoint3",a.complete="complete";let l=new Map([["videoStartTrackers","activate"],["videoFirstQuartileTrackers","midpoint1"],["videoMidpointTrackers","midpoint2"],["videoThirdQuartileTrackers","midpoint3"],["videoCompleteTrackers","complete"]]),d="imdb-promoted-ad-trackers",s=(0,n.createLogger)()("AutorotateHero-AdTracker"),u=e=>Object.keys(e).reduce((t,i)=>{let a=e[i],r=l.get(i),n=a&&r&&a.map(e=>({track:e,when:r}));return n&&n.forEach(e=>t.push(e)),t},[]),c=e=>new Promise(t=>{let i=new Image;i.src=e,i.onload=()=>t(),i.onerror=()=>t()}),m=async e=>{e.length&&await Promise.all(e.map(e=>c(e)))},p=e=>{e?.formattedVideoTrackers&&window.sessionStorage&&window.sessionStorage.setItem(d,JSON.stringify(e.formattedVideoTrackers))},T=e=>{"undefined"!=typeof document&&document.location&&document.location.assign(e)},g=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(e){s.error("There was a problem decoding promotedVideoAd JSON",e)}else if(e&&e.id)return e};function y(){let e=(0,o.G)(d);if(e){(0,o.VV)(d);try{return JSON.parse(e)}catch(e){s.error("Error parsing trackers",e)}}}},72811:function(e,t,i){i.d(t,{Q:function(){return l}});var a=i(52322);i(2784);var r=i(88169),n=i(11438),o=i(12563);let l=e=>{let{titleId:t,refOverride:i,onPoster:l,onImage:d=!0,size:s,className:u}=e,{makeRefMarker:c}=(0,n.Lz)(),{isInWatchlist:m,isPending:p,onClick:T,ariaLabel:g}=(0,o.X)(t,c(i||n.Cd.WATCHLIST_RIBBON)),y={inWatchlist:m,isLoading:p,ariaLabel:g,onClick:T};return(0,a.jsxs)(a.Fragment,{children:[!!l&&(0,a.jsx)(r.Poster.WatchlistRibbon,{...y,className:u,size:s,"data-testid":`poster-watchlist-ribbon-${m?"remove":"add"}`}),!l&&(0,a.jsx)(r.WatchlistRibbon,{...y,className:u,onImage:d,size:s,"data-testid":`watchlist-ribbon-${m?"remove":"add"}`})]})};t.Z=l},17708:function(e,t,i){i.d(t,{Z:function(){return s}});var a=i(46138),r=i(25436),n=i(5651),o=i(82338),l=i(63370),d=i(49996);let s=e=>{let{videoName:t,contentTypeId:i,originalTitleText:s,titleText:u,releaseYear:c,canHaveEpisodes:m,shouldRemoveTrailerTitleForTitlePages:p=!0}=e,T=(0,a.Z)(),{pageType:g}=(0,d.y)(),y=i===n.sd.Trailer,f=(0,l.K)({originalTitleText:s,titleText:u}),v=t,h=g===r.PageType.NAME,b=g===r.PageType.TITLE;if(h&&y||y&&b&&!p){let e=(0,o.y)(c,m);v=`${f} (${e})`}else g===r.PageType.TITLE&&(v=y?"":T.formatMessage({id:"common_video_watch_text",defaultMessage:"Watch {videoTitle}"},{videoTitle:t}));return v}},58306:function(e,t,i){i.d(t,{Y:function(){return a}}),i(2784),i(56044),i(64461),i(37706);let a=(e,t)=>window.mediaOrchestrator?.subscribe(e,t).remove},55220:function(e,t,i){i.d(t,{Z:function(){return y}});var a=i(52322),r=i(88169),n=i(72779),o=i.n(n);i(2784);var l=i(19596),d=i(69380),s=i(22073),u=i(17708),c=i(66724),m=i(11438);let p=e=>`videos-slate-card-title-${e+1}`,T=e=>`videos-slate-overlay-${e+1}`,g=e=>{let{video:t,index:i,onClick:r,description:n,className:l,listId:g,onFocus:y,reactionData:v,shouldRemoveTrailerTitleForTitlePages:h=!0,videoTitle:b,videoSubtitle:P,...S}=e,{videoSingleLinkBuilder:x}=(0,c.WOb)(),E={url:t.thumbnail.url,maxHeight:t.thumbnail.height,maxWidth:t.thumbnail.width,caption:t.name.value},V=(0,u.Z)({videoName:t.name.value,contentTypeId:t.contentType?.id,originalTitleText:t.primaryTitle?.originalTitleText?.text,titleText:t.primaryTitle?.titleText?.text,releaseYear:t.primaryTitle?.releaseYear,canHaveEpisodes:t.primaryTitle?.titleType?.canHaveEpisodes,shouldRemoveTrailerTitleForTitlePages:h}),A=t.contentType?.displayName?.value,k=[A,t.runtime?.value?(0,s.L)(t.runtime?.value):""].filter(e=>!!e).join(" "),w=`${A?`${A}`:""}${t.name.value}`,L=g?{listId:g}:void 0,D=x({viconst:t.id,refSuffix:{t:m.Cd.EMPTY,n:i+1},query:L}),_=x({viconst:t.id,refSuffix:{t:m.Cd.TEXT,n:i+1},query:L}),R={"data-testid":T(i),iconName:"play-circle-outline",text:k,gradientType:"linear",...S.slateProps?.overlayProps},Y={ariaLabel:w,"data-testid":p(i),href:_,onClick:r,title:b||V,subtitle2:P||n,lineClamp:2,className:"VideoSlate__title",...S.titleProps},$=(0,a.jsx)(d.Q,{associatedConstId:t.id,initialAggregateData:v?.aggregate,initialUserData:v?.user,entityType:"video"}),I={...S,className:o()("videos-slate-card",l),dynamicWidth:!0,slateProps:{ariaLabel:w,href:D,onClick:r,imageProps:{imageModel:E},overlayProps:R},titleProps:Y,children:$};return(0,a.jsx)(f,{...I,onFocus:y})};var y=e=>(0,a.jsx)(m.xm,{value:m.Cd.VIDEO,children:(0,a.jsx)(g,{...e})});let f=(0,l.default)(r.SlateCard).withConfig({componentId:"sc-73491412-0"})([".VideoSlate__title div:first-of-type{height:unset;}"])},5651:function(e,t,i){var a,r,n,o;i.d(t,{Je:function(){return d},LU:function(){return s},XW:function(){return l},mB:function(){return a},sd:function(){return r}});let l="W7zSm81+mmIsg7F+fyHRKhF3ggLkTqtGMhvI92kbqf/ysE99",d="imdbnext-vp-jw-",s="imdbnext-vp-container";(n=a||(a={})).playerReadyMessage="VIDEO_PLAYER--READY",n.playerPlaybackStartedMessage="VIDEO_PLAYER--PLAYBACK_STARTED",n.playerPlaybackStoppedMessage="VIDEO_PLAYER--PLAYBACK_STOPPED",n.playerPlaybackCompletedMessage="VIDEO_PLAYER--PLAYBACK_COMPLETED",n.signalPlayMessage="VIDEO_PLAYER--PLAY",n.signalPauseMessage="VIDEO_PLAYER--PAUSE",n.signalStopMessage="VIDEO_PLAYER--STOP",(o=r||(r={})).Trailer="amzn1.imdb.video.contenttype.trailer",o.Clip="amzn1.imdb.video.contenttype.clip"},37706:function(e,t,i){i(14865),i(22431),i(64461),i(56044)},36362:function(e,t,i){i.d(t,{K8:function(){return o},V4:function(){return l},p6:function(){return u},sZ:function(){return d},sq:function(){return s}});var a=i(30382),r=i.n(a);let n=r()`
    fragment SharedVideoTextTrack on VideoTimedTextTrack {
        displayName {
            value
            language
        }
        refTagFragment
        type
        language
        url
    }
`,o=r()`
    fragment SharedVideoPreviewUrls on Video {
        previewURLs {
            displayName {
                value
                language
            }
            videoMimeType
            videoDefinition
            url
        }
    }
`,l=r()`
    fragment SharedVideoPlaybackUrls on Video {
        playbackURLs(
            filter: { mimeTypes: [MP4], definitions: [DEF_SD, DEF_480p] }
        ) {
            displayName {
                value
                language
            }
            videoMimeType
            videoDefinition
            url
            metricDimensions {
                name
                value
            }
        }
    }
`,d=r()`
    fragment SharedVideoAllPlaybackUrls on Video {
        playbackURLs {
            displayName {
                value
                language
            }
            videoMimeType
            videoDefinition
            url
            metricDimensions {
                name
                value
            }
        }
    }
`,s=r()`
    fragment SharedVideoWebAd on Video {
        webAdURL(
            adParameters: {
                userAgent: $userAgent
                pageType: $pageType
                subPageType: $subPageType
                viewportSize: $viewportSize
                autoStartVideo: $autoStartVideo
            }
        ) @skip(if: $useV2Ad)
        webAdURLV2(
            adParameters: {
                userAgent: $userAgent
                pageType: $pageType
                subPageType: $subPageType
                viewportSize: $viewportSize
                autoStartVideo: $autoStartVideo
            }
        ) @include(if: $useV2Ad)
    }
`,u=r()`
    fragment SharedVideoRoot on Video {
        id
        createdDate
        isMature
        runtime {
            value
        }
        name {
            value
            language
        }
        description {
            value
            language
        }
        timedTextTracks(filter: { format: SRT }) {
            ...SharedVideoTextTrack
        }
        recommendedTimedTextTrack(filter: { format: SRT }) {
            ...SharedVideoTextTrack
        }
        thumbnail {
            url
            height
            width
        }
        primaryTitle {
            id
            titleText {
                text
            }
            originalTitleText {
                text
            }
            releaseYear {
                year
            }
        }
    }
    ${n}
`},35061:function(e,t){t.Z=e=>({id:e.id,name:{value:e.name.value},thumbnail:{url:e.thumbnail.url,height:e.thumbnail.height,width:e.thumbnail.width},primaryTitle:{titleText:{text:e.primaryTitle?.titleText?.text},originalTitleText:{text:e.primaryTitle?.originalTitleText?.text},titleType:{canHaveEpisodes:e.primaryTitle?.titleType?.canHaveEpisodes},releaseYear:{endYear:e.primaryTitle?.releaseYear?.endYear||void 0,year:e.primaryTitle?.releaseYear?.year||void 0}},contentType:{id:e.contentType?.id,displayName:{value:e.contentType?.displayName.value}},runtime:{value:e.runtime?.value||void 0}})}}]);

