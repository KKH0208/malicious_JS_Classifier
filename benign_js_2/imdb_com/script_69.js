/* 元のURL: https://imdb.com */
// 外部JS: https://dqpnq362acqdi.cloudfront.net/_next/static/chunks/2146-83ab187b1ac2eeec.js
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2146],{21768:function(e,t,n){n.d(t,{R:function(){return i}});let i="inline20-page-background"},77845:function(e,t,n){n.d(t,{x:function(){return O}});var i=n(52322),r=n(2784),a=n(14973),o=n(30382),s=n.n(o),l=n(19596),c=n(88169),d=n(86704),p=n(75824),m=n(86958),u=n(66724),f=n(11438),g=n(63370),h=n(19031);let x=e=>{let{isOpen:t,isNotInterested:n,interestStateOnClick:r,recommendation:a,onClose:o}=e,s=(0,p.N)({id:"common_listItem_notInterested",defaultMessage:"Not interested"});return(0,i.jsx)(h.Pz,{isOpen:t,onClose:o,title:a.title,contentOverride:()=>(0,i.jsx)(i.Fragment,{children:!!a&&(0,i.jsx)(y,{recommendation:a})}),actionOverride:()=>(0,i.jsx)(T,{ariaLabel:s,preIcon:n?"thumb-down-filled":"thumb-down",onClick:r})})},y=e=>{let t=(0,m.B)().context,{titleMainLinkBuilder:n}=(0,u.WOb)(),{recommendation:r,className:a}=e,o=(0,p.N)({id:"titleRecommendationPrompt_attributionHeading",defaultMessage:"Because of your interest in"});return(0,i.jsxs)(w,{className:a,children:[(0,i.jsx)("div",{className:"heading",children:o}),(0,i.jsx)("div",{className:"content",children:r.explanations.slice(0,2).map((e,r)=>{let{title:a}=e,o=(0,g.L)(t,a.originalTitleText,a.titleText);return(0,i.jsx)(i.Fragment,{children:!!o&&(0,i.jsx)(c.TextLink,{className:"link",href:n({tconst:a.id,refSuffix:f.Cd.EMPTY}),text:o,inheritColor:!0},r)})})})]})};var _=e=>{let{recommendation:{refTag:t}}=e;return(0,i.jsx)(f.xm,{value:[f.Cd.TITLE_RECOMMENDATION_PROMPT,(0,f.Qk)({refStr:t,explanation:"reftag is dynamic and passed down from graph"})],children:(0,i.jsx)(x,{...e})})};let T=(0,l.default)(c.SecondaryButton).withConfig({componentId:"sc-646c92ea-0"})(["width:30%;padding-left:",";"],d.spacing.l),w=l.default.div.withConfig({componentId:"sc-646c92ea-1"})(["margin:0;padding:"," "," "," ",";","{padding:"," 0 "," 0;}.content{"," ","}.heading{padding-bottom:",";",";","}.link{text-decoration:none;display:flex;flex-direction:column;","}"],d.spacing.xs,d.spacing.s,d.spacing.s,d.spacing.s,d.mediaQueries.breakpoints.above.m,d.spacing.xs,d.spacing.s,(0,d.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),(0,d.setTypographyType)("bodySmall"),d.spacing.xxs,(0,d.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"),(0,d.setTypographyType)("bodySmall"),(0,d.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"));var b=n(31885),v=n(17503),C=n(14438);let I={id:"common_featureHeader_link_info",defaultMessage:"More information"},S=s()`
    mutation UpdateTitleInterest(
        $titleId: ID!
        $interestLevel: InterestLevel!
    ) {
        updateTitleInterest(
            input: { titleId: $titleId, interestLevel: $interestLevel }
        ) {
            success
        }
    }
`,P=(e,t)=>{let[n,o]=(0,r.useState)(!1),[s,l]=(0,r.useState)(!1),[,c]=(0,v.Z)(S),{makeRefMarker:d}=(0,f.Lz)(),m=(0,C.EO)(),u=e.title.id,g=d([{t:f.Cd.TITLE,n:t+1},(0,f.Qk)({refStr:e.refTag,explanation:"This refmarker is vended dynamically from the graph"})]);return{iconButtonProps:{name:"info",label:(0,p.N)(I),onClick:()=>{o(!0),m({refMarkerString:g,pageAction:"overflow-expand",hitType:a.HitType.POP_UP,customPageMetadata:{id:u}})}},prompt:(0,i.jsx)(_,{isNotInterested:s,interestStateOnClick:()=>{let e=s?b.FhM.Ambivalent:b.FhM.NotInterested;m({refMarkerString:g,pageAction:s?"reverse-not-interested":"not-interested",customPageMetadata:{id:u}}),c({titleId:u,interestLevel:e}),l(!s)},isOpen:n,onClose:()=>o(!1),recommendation:e})}};var j=n(49175),M=n(23842);let O=e=>{let{recommendation:t,index:n}=e,{createButton:r,createPrompt:a}=(0,j.V1)(),{iconButtonProps:o,prompt:s}=P(t,n);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M.c,{className:"top-picks-title",data:t.title,refTagFromGraph:t.refTag,index:n+1,alternateButton:r(t.title,n),iconButtons:[o]},t.title.id),a(),s]})}},43421:function(e,t,n){n.d(t,{OW:function(){return y}});var i=n(52322);n(2784);var r=n(46138),a=n(19596),o=n(88169),s=n(86704),l=n(66724),c=n(11438);let d={id:"from_your_watchlist_empty_title",defaultMessage:"Your watchlist is empty"},p={id:"from_your_watchlist_empty_content",defaultMessage:"Save shows and movies to keep track of what you want to watch."},m={id:"from_your_watchlist_all_rated_title",defaultMessage:"No available releases"},u={id:"from_your_watchlist_all_rated_content",defaultMessage:"Add more shows and movies to keep track of what you want to watch."},f={id:"from_your_watchlist_logged_out",defaultMessage:"Sign in to access your Watchlist"},g={id:"from_your_watchlist_logged_out_content",defaultMessage:"Save shows and movies to keep track of what you want to watch."},h={id:"from_your_watchlist_empty_button",defaultMessage:"Browse popular movies"},x={id:"from_your_watchlist_logged_out_button",defaultMessage:"Sign in to IMDb"},y=e=>{let{isLoggedIn:t,hasRatedTitles:n,hasUnreleasedTitlesInWatchlist:a}=e,o=(0,r.Z)(),{chartMovieMeterLinkBuilder:s,registrationSignInLinkBuilder:y}=(0,l.WOb)(),C=n||a,I=t?C?m:d:f,S=t?s({refSuffix:c.Cd.EMPTY_MESSAGE}):y({refSuffix:c.Cd.SIGN_IN});return(0,i.jsxs)(_,{className:"from-your-watchlist__state__container",children:[(0,i.jsx)(T,{className:"from-your-watchlist__ribbon",inWatchlist:!1,ariaLabel:o.formatMessage(I)}),(0,i.jsxs)(w,{className:"from-your-watchlist__status-prompt__container",children:[(0,i.jsx)(b,{className:"from-your-watchlist__status-prompt__title",children:o.formatMessage(I)}),(0,i.jsx)("div",{"data-testid":"empty-state-content",className:"from-your-watchlist_status-prompt_content",children:o.formatMessage(t?C?u:p:g)})]}),(0,i.jsx)(v,{className:"from-your-watchlist__state__button",width:"double-padding",href:S,children:o.formatMessage(t?h:x)})]})},_=(0,a.default)(o.PageSection).withConfig({componentId:"sc-5b81157c-0"})([""," text-align:center;padding:",";"],(0,s.setPropertyToSpacingVar)("margin","ipt-pageMargin"),s.spacing.l),T=(0,a.default)(o.WatchlistRibbon).withConfig({componentId:"sc-5b81157c-1"})(["pointer-events:none;"]),w=a.default.div.withConfig({componentId:"sc-5b81157c-2"})(["margin-top:",";"],s.spacing.xs),b=a.default.div.withConfig({componentId:"sc-5b81157c-3"})(["font-weight:bold;"]),v=(0,a.default)(o.SecondaryButton).withConfig({componentId:"sc-5b81157c-4"})(["margin-top:",";"],s.spacing.xl)},2791:function(e,t,n){n.d(t,{Se:function(){return b},ZP:function(){return v}});var i=n(52322),r=n(66898),a=n(97729),o=n.n(a);n(2784);var s=n(98042),l=n(75824),c=n(86958),d=n(49666),p=n(55634),m=n(8531),u=n(83163),f=n(48687),g=n(73183),h=n(54456),x=n(73286),y=n(52154),_=n(71225);let T=e=>{let{pageType:t,subPageType:n,pageConst:r}=e;return(0,i.jsxs)(i.Fragment,{children:[!!t&&(0,i.jsx)("meta",{property:"imdb:pageType",content:t}),!!n&&(0,i.jsx)("meta",{property:"imdb:subPageType",content:n}),!!r&&(0,i.jsx)("meta",{property:"imdb:pageConst",content:r})]})};var w=n(25436);let b=e=>{let t=(0,d.ik)(),n=(0,c.B)().context,{imageUrl:a,imageHeight:b,imageWidth:v}=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=e?_.xJ:_.ax,i=e?_.Yv:_.Bs,r=e?_.Tm:_.yw;return t&&t.url&&t.width&&t.height&&(n=(0,y.y8)(t.url,_.sc),i=t.height/t.width*_.sc,r=_.sc),{imageUrl:n,imageHeight:i,imageWidth:r}}(t,e.image),C=(0,l.N)({id:"common_share_title",defaultMessage:"IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows"}),I=(0,l.N)({id:"common_share_description",defaultMessage:"IMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows. Get personalized recommendations, and learn where to watch across hundreds of streaming providers."}),S=(0,f.hg)({weblabID:u.lh.IMDB_NEXT_CLIENT_SIDE_NAVIGATION_323089,treatments:{T1:!0}}),P=e.title??C,j=e.description??I,M=e.openGraphData?.type||g.s.Website,O=n.sidecar?.localizationResponse?.isFullLocalizationEnabled,E=(O?n.sidecar?.localizationResponse?.languageForTranslations??"en_US":"en_US").replace("-","_"),N=function(e){let t=e.pageType,n=e.subPageType;return t===w.PageType.TITLE&&n===w.SubPageType.MAIN||t===w.PageType.NAME&&n===w.SubPageType.MAIN||t===w.PageType.VIDEO&&n===w.SubPageType.VIDEO_PLAYBACK_PAGE}(n),A=P,k=j;if(N){let t=e.openGraphData?.enhancedTitle;t&&t.length>0&&(A=t);let n=e.openGraphData?.enhancedDescription;n&&n.length>0&&(k=n)}let D="";if(e.noIndex||e.noFollow){let t=[];e.noIndex&&t.push("noindex"),e.noFollow&&t.push("nofollow"),e.noIndex&&!e.noFollow&&t.push("follow"),D=t.join(",")}return(0,i.jsxs)(o(),{children:[(0,m.n4)(p.yS.LOAD_META,S),(0,r.logCSAWidgetStart)(p.yS.LOAD_META,Date.now()),(0,i.jsx)("title",{children:P}),(0,i.jsx)("meta",{name:"description",content:j,"data-id":"main"},"page-desc"),!!e.keywords&&(0,i.jsx)("meta",{name:"keywords",content:e.keywords},"page-keywords"),(0,i.jsx)("meta",{name:"google-site-verification",content:"0cadf7898134e79b"}),(0,i.jsx)("meta",{name:"msvalidate.01",content:"C1DACEF2769068C0B0D2687C9E5105FA"}),!!D&&(0,i.jsx)("meta",{name:"robots",content:D}),!e.noIndex&&(0,i.jsx)("meta",{name:"robots",content:"max-image-preview:large"}),!!e.structuredData&&(0,i.jsx)("script",{...(0,s.h6)(e.structuredData)}),!!e.canonicalUrl&&(0,i.jsx)("meta",{property:"og:url",content:e.canonicalUrl},"fb_url"),(0,i.jsx)("meta",{property:"og:site_name",content:t?"IMDbPro":"IMDb"},"fb_site"),(0,i.jsx)("meta",{property:"og:title",content:A},"fb_title"),(0,i.jsx)("meta",{property:"og:description",content:k},"fb_desc"),(0,i.jsx)("meta",{property:"og:type",content:M},"fb_type"),(0,i.jsx)("meta",{property:"og:image",content:a},"fb_img"),(0,i.jsx)("meta",{property:"og:image:height",content:b.toString()},"fb_img_height"),(0,i.jsx)("meta",{property:"og:image:width",content:v.toString()},"fb_img_Width"),(0,i.jsx)("meta",{content:E,property:"og:locale"}),!!O&&!t&&function(e){let t=h.n.map(e=>e.replace("-","_"));return(0,i.jsx)(i.Fragment,{children:t.filter(t=>t!==e).map(e=>(0,i.jsx)("meta",{content:e,property:"og:locale:alternate"},`lc_alt_${e}`))})}(E),(0,i.jsx)("meta",{property:"twitter:site",content:t?"@IMDbPro":"@IMDb"},"tw_site"),(0,i.jsx)("meta",{property:"twitter:title",content:A},"tw_title"),(0,i.jsx)("meta",{property:"twitter:description",content:k},"tw_desc"),(0,i.jsx)("meta",{property:"twitter:card",content:"summary_large_image"},"tw_type"),(0,i.jsx)("meta",{property:"twitter:image",content:a},"tw_img"),(0,i.jsx)("meta",{property:"twitter:image:alt",content:j},"tw_img_alt"),!!e.canonicalUrl&&!e.noIndex&&(0,i.jsx)("link",{rel:"canonical",href:e.canonicalUrl}),(0,x.W)(e.hrefLangEntries),T(n),(0,m.vt)(p.yS.LOAD_META,S),(0,r.logCSAWidgetEnd)(p.yS.LOAD_META,Date.now()),(0,m.wx)(p.yS.LOAD_META,S),(0,r.logCSAWidgetLoad)(p.yS.LOAD_META,Date.now())]})};var v=b},71225:function(e,t,n){n.d(t,{Bs:function(){return a},Tm:function(){return l},Yv:function(){return c},ax:function(){return i},sc:function(){return o},xJ:function(){return s},yw:function(){return r}});let i="https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo.png",r=1e3,a=1e3,o=1e3,s="https://m.media-amazon.com/images/S/sash/gje4y522toZQB1l.png",l=300,c=300},73183:function(e,t,n){var i,r;n.d(t,{s:function(){return i}}),(r=i||(i={})).MusicAlbum="music.album",r.MusicSong="music.song",r.Profile="profile",r.VideoEpisode="video.episode",r.VideoMovie="video.movie",r.VideoOther="video.other",r.VideoTvShow="video.tv_show",r.Website="website"},88213:function(e,t,n){n.d(t,{ZP:function(){return I}});var i=n(52322),r=n(88169),a=n(86704),o=n(30382),s=n.n(o);n(2784);var l=n(19596),c=n(41174),d=n(49666),p=n(66724),m=n(11438),u=n(85846),f=n(95441),g=n(83163),h=n(48687),x=n(74029),y=n(19031);let _=(e,t)=>{let n=e?.title;if(t){let e=[];return n?.principalCreditsV2?.forEach(t=>{let n=t.grouping.text,i=[];t.credits.forEach(e=>{e.name.nameText?.text&&i.push({nameId:e.name.id,nameText:e.name.nameText.text})}),n&&i.length&&e.push({categoryText:n,credits:i})}),e}return[n?.principalCreators?.length?T(n.principalCreators[0]):void 0,n?.principalDirectors?.length?T(n.principalDirectors[0]):void 0,n?.principalCast?.length?T(n.principalCast[0]):void 0].filter(e=>!!e)},T=e=>{let t=[];if(e.credits.forEach(e=>{e.name.nameText?.text&&t.push({nameId:e.name.id,nameText:e.name.nameText.text})}),t.length&&e.category.text)return{categoryText:e.category.text,credits:t}},w=s()`
    fragment TitleSummaryPromptCreditCategories on Title {
        principalCast: principalCredits(filter: { categories: ["cast"] })
            @skip(if: $isInPace) {
            ...TitleSummaryPromptCredits
        }
        principalCreators: principalCredits(
            filter: { categories: ["creator"] }
        ) @skip(if: $isInPace) {
            ...TitleSummaryPromptCredits
        }
        principalDirectors: principalCredits(
            filter: { categories: ["director"] }
        ) @skip(if: $isInPace) {
            ...TitleSummaryPromptCredits
        }
        principalCreditsV2(filter: { mode: "NARROWED" }, useEntitlement: false)
            @include(if: $isInPace) {
            grouping {
                text
            }
            credits(limit: 3) {
                name {
                    id
                    nameText {
                        text
                    }
                }
            }
        }
    }

    fragment TitleSummaryPromptCredits on PrincipalCreditsForCategory {
        category {
            text
        }
        credits(limit: 3) {
            name {
                id
                nameText {
                    text
                }
            }
        }
    }
`,b=s()`
    query Title_Summary_Prompt_From_Base(
        $id: ID!
        $location: WatchOptionsLocation
        $isProPage: Boolean!
        $includeUserPreferredServices: Boolean! = false
        $isInPace: Boolean!
    ) {
        title(id: $id) {
            ...TitleSummaryPromptCreditCategories
            ...BaseTitlePromptShared
        }
        user @include(if: $includeUserPreferredServices) {
            ...UserPreferredServices
        }
    }
    ${y.qo}
    ${w}
    ${x.R}
`,v=e=>{let{title:t,onClose:n,isOpen:r}=e,a=(0,d.ik)(),o=(0,c.nu)(),s=(0,u.ic)(),l=(0,h.hg)({weblabID:g.lh.IMDB_WEB_PACE_CREDITS_1201882,treatments:{T1:!0}}),p=!a&&o;return(0,i.jsx)(y.Pz,{isOpen:r,onClose:n,title:t,queryOverride:{query:b,context:{serverSideCacheable:!1,personalized:p},variables:{id:t?.id??"",location:s,isProPage:a,includeUserPreferredServices:p,isInPace:l}},contentOverride:e=>{let t=_(e,l);if(0!==t.length)return(0,i.jsx)(M,{"data-testid":"p_ct",children:t.map((e,t)=>(0,i.jsx)(C,{index:t+1,...e},e.categoryText))})}})},C=e=>{let{categoryText:t,credits:n,index:a}=e,{nameMainLinkBuilder:o}=(0,p.WOb)();return(0,i.jsxs)(j,{"data-testid":"c_ct",children:[(0,i.jsxs)(P,{children:[" ",t," "]}),(0,i.jsx)(r.InlineList,{showDividers:!0,inline:!0,children:n.map((e,n)=>(0,i.jsx)(r.InlineListItem,{children:(0,i.jsx)(S,{href:o({nconst:e.nameId,refSuffix:[{t:m.Cd.CREDIT,n:a},{t:m.Cd.EMPTY,n:n+1}]}),text:e.nameText},`name-link-${e.nameId}`)},`${t}-${e.nameId}`))})]})};var I=e=>(0,i.jsx)(m.xm,{value:m.Cd.TITLE_SUMMARY_PROMPT,children:(0,i.jsx)(v,{...e})});let S=(0,l.default)(r.TextLink).withConfig({componentId:"sc-b657111a-0"})(["font-size:",";",";display:inline;"],(0,a.setTypographyType)("bodySmall"),(0,a.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),P=l.default.span.withConfig({componentId:"sc-b657111a-1"})(["font-size:",";",";margin-right:",";"],(0,a.setTypographyType)("subtitle2"),(0,a.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"),a.spacing.xs),j=l.default.div.withConfig({componentId:"sc-b657111a-2"})(["",";margin-bottom:",";"],(0,f.S)(1),a.spacing.xs),M=l.default.div.withConfig({componentId:"sc-b657111a-3"})(["margin:",";","{margin-left:0;margin-right:0;}"],a.spacing.s,a.mediaQueries.breakpoints.above.m)},9707:function(e,t,n){n.d(t,{r:function(){return p}});var i=n(52322);n(2784);var r=n(46138),a=n(19596),o=n(88169),s=n(86704),l=n(22619),c=n(11947),d=n(43986);let p=e=>{let{scopedTitleIds:t,totalNumber:n,...a}=e,{watchedTitles:s}=(0,l.V)(),p=(0,r.Z)(),f=0,g=Math.min((f=t?.length?Object.keys(t?.reduce((e,t)=>s[t]?{...e,[t]:!0}:e,{})??{}).length:Object.keys(s).length)/n,1),h=p.formatMessage(d.TY.watchedProgress,{currentNumber:f,totalNumber:n});return(0,i.jsxs)(m,{...a,children:[(0,i.jsx)(o.ProgressBar,{ariaLabel:h,currentNumber:f,totalNumber:n}),(0,i.jsxs)(u,{"aria-hidden":!0,"data-testid":d.z7.WATCHED_PROGRESS_TEST_ID,children:[(0,i.jsx)("span",{children:h}),(0,i.jsx)("span",{children:(0,i.jsx)(c.A,{maximumFractionDigits:0,style:"percent",unit:"percent",value:g})})]})]})},m=a.default.div.withConfig({componentId:"sc-14c4aaa0-0"})(["margin-top:",";"],s.spacing.l),u=a.default.div.withConfig({componentId:"sc-14c4aaa0-1"})([""," display:flex;justify-content:space-between;margin-top:",";"],(0,s.setTypographyType)("overline"),s.spacing.xs)},18355:function(e,t,n){n.d(t,{y:function(){return c}});var i=n(52322);n(2784);var r=n(88169),a=n(75824),o=n(66724),s=n(11438),l=n(72811);let c=e=>{let{className:t,title:{id:n,titleText:c,titleTypeId:d,image:{url:p,height:m,width:u}},onClick:f,refTagFromGraph:g,index:h,ribbonSize:x}=e,{titleMainLinkBuilder:y}=(0,o.WOb)(),_=y({tconst:n,refSuffix:[{t:s.Cd.POSTER,n:h},(0,s.Qk)({refStr:g,explanation:"The refmarker comes dynamically from the graph"})]}),T=(0,a.N)({id:"common_ariaLabels_gotoTitle",defaultMessage:"View title page for {titleName}"},{titleName:c});return(0,i.jsx)(r.PosterCard.Poster,{href:_,ariaLabel:T,onClick:f,className:t,imageProps:{imageModel:p&&m&&u?{url:p,maxHeight:m,maxWidth:u,caption:c}:void 0,imageType:d,className:"poster-card-image",dynamicAspectRatio:!1},children:(0,i.jsx)(l.Z,{titleId:n,refOverride:[{t:s.Cd.WATCHLIST_RIBBON,n:h},(0,s.Qk)({refStr:g,explanation:"The refmarker comes dynamically from the graph"})],onPoster:!0,className:"poster-card-watchlist-ribbon",size:x},n)})}},96621:function(e,t,n){n.d(t,{y:function(){return s}});var i=n(30382),r=n.n(i),a=n(85018),o=n(49175);let s=r()`
    query FromYourWatchlist($first: Int!) {
        predefinedList(classType: WATCH_LIST) {
            items(
                first: $first
                filter: { rated: EXCLUDE, released: INCLUDE }
                sort: { by: POPULARITY, order: ASC }
            ) {
                edges {
                    node {
                        item {
                            ...BaseTitleCard
                            ...TitleCardTrailer
                            ...TitleWatchOption
                        }
                    }
                }
            }
            ratedCount: items(first: 0, filter: { rated: INCLUDE }) {
                total
            }
            unreleasedCount: items(first: 0, filter: { released: EXCLUDE }) {
                total
            }
        }
    }
    ${a.sq}
    ${a.F4}
    ${o.sG.titleWatchOption}
`},54456:function(e,t,n){n.d(t,{O:function(){return r},n:function(){return i}});let i=["en-US","es-ES","es-MX","fr-FR","fr-CA","it-IT","pt-BR","hi-IN","de-DE"],r=e=>i.includes(e)},73013:function(e,t,n){n.d(t,{S:function(){return r}});var i=n(86958);let r=()=>i.B()?.context?.sidecar?.placementMap||{}},49175:function(e,t,n){n.d(t,{V1:function(){return m},sG:function(){return u}});var i=n(52322),r=n(14973),a=n(30382),o=n.n(a),s=n(2784),l=n(88213),c=n(75824),d=n(87801),p=n(14438);let m=()=>{let[e,t]=(0,s.useState)(),[n,a]=(0,s.useState)(),o=(0,c.N)({id:"common_buttons_watchOptions",defaultMessage:"Watch options"}),m=(0,p.EO)();return{createButton:(e,n,i)=>{let{primaryWatchOption:s}=e;return i||s?{props:{onSelect:()=>{t(e),a(void 0!==n?n+1:void 0),m({refMarkerSuffix:{t:d.C.WATCH_OPTIONS,n:void 0!==n?n+1:void 0},pageAction:`watcho-open-${e.id}`,hitType:r.HitType.POP_UP,customPageMetadata:{id:e.id}})}},text:o}:void 0},createPrompt:()=>(0,i.jsx)(l.ZP,{title:e,isOpen:!!e,onClose:()=>{t(void 0),a(void 0),m({refMarkerSuffix:{t:d.C.WATCH_OPTIONS,n:n},pageAction:`watcho-close-${e?.id}`,hitType:r.HitType.POP_UP,customPageMetadata:{id:e?.id}})}})}},u={titleWatchOption:o()`
    fragment TitleWatchOption on Title {
        primaryWatchOption {
            additionalWatchOptionsCount
        }
    }
`};o()`
    query TitleListWatchOption(
        $titleIds: [ID!]!
        $location: WatchOptionsLocation
    ) {
        titles(ids: $titleIds) {
            id
            primaryWatchOption(location: $location) {
                additionalWatchOptionsCount
            }
        }
    }
`},52154:function(e,t,n){n.d(t,{F2:function(){return c},gA:function(){return d},y8:function(){return s}});var i=n(86704);let r="FMjpg",a=375/812,o=1920/1080;function s(e,t){return c(e,`${r}_UX${Math.floor(t)}_`)}function l(e,t){return c(e,`${r}_UY${Math.floor(t)}_`)}function c(e,t){let n=e.split("."),i=n.length-2;return n[i].indexOf("_V1_")>=0&&(n[i]+=t),n.join(".")}function d(e,t){let n="";if(!e.height||!e.width||!e.url)return n;let r=e.height,c=e.width,d=e.url,p=Object.values(i.breakpoints.breakpointsNumbers),m=!1;if(p.forEach((e,t)=>{let u=e>c,f=t===p.length-1;if(!m){if(u)n+=s(d,c)+` ${c}w`;else if(r<c)n+=s(d,e)+` ${e}w`;else{let t=c/r,s=e>=i.breakpoints.breakpointsNumbers.m?o:a,p=Math.min(Math.floor(e/t),Math.floor(e/s)),m=Math.floor(p*t);n+=l(d,p)+` ${m}w`}u||f?m=!0:n+=", "}}),t){let e=Math.min(2160,c);r<c?n+=`, ${s(d,e)} ${e}w`:n+=`, ${l(d,r)} ${e}w`}return n}},60635:function(e,t,n){n.d(t,{Q:function(){return i}});function i(e){(e||[]).forEach(e=>{let t=e.id,n=e?.userRating?.value;n&&window.imdb?.ratings?.addRating(t,n)})}},47774:function(e,t,n){function i(e,t){let n=e.split(" ");return n.length<t?e:`${n.slice(0,t).join(" ")}...`}function r(e){if(e)return isNaN(Number(e))?void 0:Number(e)}function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.d(t,{Cc:function(){return o},fm:function(){return a},mc:function(){return r},z$:function(){return i}});let o=e=>e.replace(/\s+/g,"-").toLowerCase()}}]);

