/* 元のURL: https://imdb.com */
// 外部JS: https://dqpnq362acqdi.cloudfront.net/_next/static/chunks/9031-d6090f2e10fc57aa.js
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9031],{70689:function(e,t,i){var a=i(52322),r=i(27722),n=i(86704);i(2784);var o=i(75824),s=i(41174),d=i(66724),l=i(31274);t.Z=e=>{let{refSuffix:t,"data-testid":i,preferredServicesIds:c,className:p}=e,g=(0,s.nu)(),{preferencesPreferredServicesLinkBuilder:f}=(0,d.WOb)(),u=g&&(!c||c.length>0),m=(0,o.N)(u?l.T.editPreferredServicesButtonText:l.T.setYourPreferredServicesButtonText);return(0,a.jsx)(r.TextButton,{alignContent:"left",href:f({refSuffix:t}),preIcon:u?n.ICONS.EDIT:n.ICONS.SETTINGS,"data-testid":i,ariaLabel:m,className:p,children:m})}},5042:function(e,t,i){i.d(t,{L:function(){return r}});var a=i(41174);let r=e=>{let{preferredServiceIds:t}=e,i=(0,a.nu)();return!i||i&&0===t.length}},19031:function(e,t,i){i.d(t,{Pz:function(){return e_},qo:function(){return ej},tN:function(){return eS}});var a=i(52322),r=i(27722),n=i(86704),o=i(30382),s=i.n(o),d=i(2784),l=i(46138),c=i(19596),p=i(45274),g=i(41174),f=i(49666),u=i(4363),m=i(85846),h=i(95441),x=i(94475),b=i(10105),T=i(74029),y=i(92543),C=i(35223),w=i(4649),v=i(88169),I=i(94471),j=i(75824),P=i(22073),S=i(82338),_=i(66724),O=i(11438),k=i(63370),B=i(6935),M=i(92847);let R=e=>{let{originalTitleText:t,titleText:i,id:r,primaryImage:o,titleType:s,titleGenres:l,ratingsSummary:c,canRate:p}=e.titleData,{palette:{baseColor:g}}=(0,d.useContext)(v.ThemeContext),u=(0,f.ik)(),{titleMainLinkBuilder:m}=(0,_.WOb)(),{rating:h}=(0,v.useRatingsContext)(r),x=(0,I.P)(h,"user"),b=(0,I.P)(c?.aggregateRating,"imdb"),T=(0,k.K)({originalTitleText:t,titleText:i}),y=(0,j.N)(C.TY.ratingButtonRatedAriaLabel,{rating:x||""}),w=(0,j.N)(C.TY.ratingButtonUnratedAriaLabel,{titleName:T}),R=(0,j.N)(C.TY.ratingPromptRateLabel),D=m({tconst:r,refSuffix:O.Cd.TEXT}),G=m({tconst:r,refSuffix:O.Cd.POSTER}),z=function(e){let t=[],{releaseYear:i,runtime:a,certificate:r}=e,n=(0,S.y)(i,e.titleType?.canHaveEpisodes);return n&&t.push(n),a?.seconds&&t.push((0,P.L)(a.seconds,P.A.HOURS_MINUTES_EXPLICIT)),r?.rating&&t.push(r.rating),t}(e.titleData);return(0,a.jsxs)(E,{className:g,children:[(0,a.jsx)(L,{children:(0,a.jsx)(v.Poster,{imageProps:{imageModel:(0,B.Gs)(o,T),imageType:s?.id,size:"xs"},dynamicWidth:!0,ariaLabel:T,href:G})}),(0,a.jsxs)($,{children:[(0,a.jsx)(N,{href:D,titleTextClass:"prompt-title-text",typographyType:(T?.length??0)>65?`${(0,n.setTypographyType)("subtitle")}`:"",children:T}),z.length>0&&(0,a.jsx)(v.InlineList,{showDividers:!0,inline:!0,noWrap:!0,"data-testid":C.z7.METADATA_LIST,children:z.map(e=>(0,a.jsx)(v.InlineListItem,{children:e},e))}),!!l&&l.genres.length>0&&(0,a.jsx)(v.InlineList,{showDividers:!0,inline:!0,noWrap:!0,"data-testid":C.z7.GENRE_LIST,children:l.genres.map(e=>(0,a.jsx)(v.InlineListItem,{children:e.genre.text},`${e.genre.text}`))}),!!(b||p?.isRatable)&&(0,a.jsxs)(A,{"data-testid":C.z7.RATING_ROW,children:[!!b&&(0,a.jsx)(v.RatingStar,{className:C.z7.RATING_DISPLAY,formattedRating:b,maxRating:10}),!!p?.isRatable&&!!T&&!u&&(0,a.jsx)(M.T,{title:{id:r,titleText:T,canRate:p.isRatable},ratingTriggerComponent:e=>{let{onUserRatingClick:t}=e;return(0,a.jsx)(W,{ariaLabelRated:y,ariaLabelUnrated:w,formattedRating:x,className:b?void 0:"standalone-star",onClick:t,rateLabel:R})}})]})]})]})},L=c.default.div.withConfig({componentId:"sc-5b5e8697-0"})(["width:4.5rem;"]),E=c.default.div.withConfig({componentId:"sc-5b5e8697-1"})(["display:flex;"," margin-bottom:",";margin-top:",";max-width:100%;padding-left:",";padding-right:",";","{padding-left:0;padding-right:0;margin-top:0;}&.base{","}&.baseAlt{","}"],(0,n.setTypographyType)("bodySmall"),n.spacing.s,n.spacing.xxs,n.spacing.s,n.spacing.s,n.mediaQueries.breakpoints.above.m,(0,n.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,n.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),$=c.default.div.withConfig({componentId:"sc-5b5e8697-2"})(["display:flex;flex-direction:column;padding-left:",";overflow:hidden;"],n.spacing.s),N=(0,c.default)(v.Title).withConfig({componentId:"sc-5b5e8697-3"})(["margin-bottom:",";padding:0;"," .prompt-title-text{max-height:7.4rem;}"],n.spacing.xxs,e=>(0,c.css)(["",""],e.typographyType)),A=c.default.div.withConfig({componentId:"sc-5b5e8697-4"})([""," .standalone-star{padding:0;min-width:0;}"],(0,n.setTypographyType)("body")),W=(0,c.default)(v.RateButton).withConfig({componentId:"sc-5b5e8697-5"})(["height:fit-content;"]);var D=i(15323);let G=e=>{let{labelTitle:t,listContent:i,"data-testid":r}=e;return(0,a.jsxs)(Q,{"data-testid":r,children:[(0,a.jsx)(V,{children:t}),(0,a.jsx)(F,{children:i?.filter(e=>"object"==typeof e&&null!==e&&"text"in e).map((e,t)=>{let i=e.text,r=t>0?` • ${i}`:i;return a.jsx(d.Fragment,{children:r},i)})})]})},z=e=>{let{data:t}=e,i=(0,l.Z)(),r=t?.productionBudget?.budget.amount,n=t?.lifetimeGross?.total.amount,o=t?.openingWeekendGross?.gross.total.amount,s=t?.worldwideGross?.total.amount,d=(0,D.AO)(t?.productionBudget),c=(0,D.yK)(t?.lifetimeGross),p=(0,D.UJ)(t?.openingWeekendGross),g=(0,D.pM)(t?.worldwideGross);return r||n||o||s?(0,a.jsx)(U,{"data-testid":"title-boxoffice-section",children:(0,a.jsxs)(Z,{children:[!!r&&!!d&&(0,a.jsx)(G,{labelTitle:i.formatMessage(d.label),listContent:d.props.listContent,"data-testid":d.props["data-testid"]}),!!n&&!!c&&(0,a.jsx)(G,{labelTitle:i.formatMessage(c.label),listContent:c.props.listContent,"data-testid":c.props["data-testid"]}),!!o&&!!p&&(0,a.jsx)(G,{labelTitle:i.formatMessage(p.label),listContent:p.props.listContent,"data-testid":p.props["data-testid"]}),!!s&&!!g&&(0,a.jsx)(G,{labelTitle:i.formatMessage(g.label),listContent:g.props.listContent,"data-testid":g.props["data-testid"]})]})}):null},U=c.default.div.withConfig({componentId:"sc-8e95b90d-0"})(["margin:0 "," "," ",";","{margin:0 0 "," 0;}"],n.spacing.s,n.spacing.m,n.spacing.s,n.mediaQueries.breakpoints.above.m,n.spacing.m),Z=c.default.div.withConfig({componentId:"sc-8e95b90d-1"})(["display:flex;flex-direction:column;","{flex-flow:row wrap;}"],n.mediaQueries.breakpoints.above.m),Q=c.default.div.withConfig({componentId:"sc-8e95b90d-2"})(["display:grid;margin-bottom:",";","{width:50%;}"],n.spacing.s,n.mediaQueries.breakpoints.above.m),V=c.default.div.withConfig({componentId:"sc-8e95b90d-3"})([""," font-weight:bold;"],(0,v.setTypographyType)("bodySmall")),F=c.default.div.withConfig({componentId:"sc-8e95b90d-4"})(["",""],(0,v.setTypographyType)("bodySmall"));var Y=i(14342),H=i(11602);let q=s()`
    fragment BaseTitlePrompt__Track on Title {
        id
        trackNotificationPreferences @include(if: $isProPage) {
            ...TrackPreferences
        }
    }
    ${H.vW}
`,K=e=>{let{data:t}=e;return t?(0,a.jsx)(J,{id:t.id,data:t.trackNotificationPreferences,displayTrackOptionsMenu:!1,buttonProps:{width:"full-width"},buttonType:"secondaryButton"}):null},J=(0,c.default)(Y.ZP).withConfig({componentId:"sc-e967ba0e-0"})(["width:100%;"]),X=s()`
    fragment BaseTitlePrompt__Trailer on Title {
        id
        latestTrailer @skip(if: $isProPage) {
            id
        }
    }
`,ee=e=>{let{data:t}=e,i=(0,l.Z)(),{videoSingleLinkBuilder:r}=(0,_.WOb)(),n=t?.latestTrailer?.id,o=n?r({viconst:n,refSuffix:O.Cd.TRAILER}):void 0;return o?(0,a.jsx)(v.SecondaryButton,{width:"full-width",preIcon:"play-arrow",href:o,"data-testid":C.z7.TRAILER,children:i.formatMessage(C.TY.trailer)}):null};var et=i(2870);let ei=e=>{let{titleId:t}=e;return t?(0,a.jsx)(et.f,{titleId:t}):null};var ea=i(82453),er=i(14911),en=i(49614);let eo=e=>{let{titleId:t,category:i,watchOptions:r,refMarker:n}=e,o=i.toUpperCase().replace("IMDB","IMDb"),s=(0,ea.Ok)().adSlotsInfo,d=(0,er.Z)();return(0,a.jsxs)(ec,{children:[(0,a.jsx)(ep,{"data-testid":`${o}-title`,children:o}),(0,a.jsx)(v.List,{"data-testid":`${o}-list`,children:!!t&&r.map(e=>{let r=d({titleId:t,watchOption:e,refMarker:n,adSlotsInfo:s}),o="shw"===e.provider.refTagFragment?e.title.value:e.provider.name.value,l=e.provider?.logos?.icon;return(0,a.jsx)(eg,{...r,children:(0,a.jsxs)(ef,{children:[!!l?.url&&!!l?.width&&!!l?.height&&(0,a.jsx)(eu,{imageModel:{caption:o,url:l.url,maxWidth:l.width,maxHeight:l.height},size:50}),(0,a.jsxs)(em,{children:[(0,a.jsx)(eh,{children:o}),(0,a.jsx)(ex,{children:e.description?.value})]})]})},`${i}-${e.link}`)})})]})},es=e=>{let{titleId:t,watchOptionsCategories:i,isLoading:r,refMarker:n,preferredProviderIds:o=[]}=e,s=(0,l.Z)(),{organizedWatchOptions:d}=(0,en.y)({watchOptionsCategories:i||[],preferredProviderIds:o});return r?(0,a.jsx)(el,{"data-testid":"loader-container",children:(0,a.jsx)(v.Loader,{})}):i&&0!==i.length?(0,a.jsx)(a.Fragment,{children:d.map(e=>(0,a.jsx)(eo,{titleId:t,category:e.categoryName.value,watchOptions:e.watchOptions,refMarker:n},e.categoryName.value))}):(0,a.jsx)(eb,{title:s.formatMessage({id:"error_emptyStates_watchOptions_title",defaultMessage:"Watch Options are currently unavailable"}),message:s.formatMessage({id:"error_common_refreshOrTryAgain",defaultMessage:"Please refresh the page or try again later."})})},ed=s()`
    fragment WatchOptionCategories on CategorizedWatchOptions {
        categoryName {
            value
            language
        }
        watchOptions {
            title {
                value
                language
            }
            link(platform: WEB)
            shortTitle {
                value
                language
            }
            description {
                value
                language
            }
            provider {
                id
                name {
                    value
                    language
                }
                logos {
                    icon {
                        url
                        height
                        width
                    }
                }
                refTagFragment
            }
        }
    }
`;es.fragments={watchOptionsCategories:ed};let el=c.default.div.withConfig({componentId:"sc-3bb14ed-0"})(["align-items:flex-start;display:flex;height:100%;margin:3rem 0;justify-content:center;"]),ec=c.default.div.withConfig({componentId:"sc-3bb14ed-1"})(["",""],(0,n.setTypographyType)("body")),ep=c.default.div.withConfig({componentId:"sc-3bb14ed-2"})([""," "," text-transform:none;font-size:13px;margin:0;padding:13px 0 7px 15px;","{padding:13px 0 7px;}"],(0,n.setTypographyType)("overline"),(0,n.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color"),n.mediaQueries.breakpoints.above.m),eg=(0,c.default)(v.ListItem).withConfig({componentId:"sc-3bb14ed-3"})(["&:first-of-type{border-top:1px solid rgba(",",0.1);}border-bottom:1px solid rgba(",",0.1);height:4rem;","{padding:0;}"],(0,n.getColorVarValue)("ipt-base-rgb"),(0,n.getColorVarValue)("ipt-base-rgb"),n.mediaQueries.breakpoints.above.m),ef=c.default.div.withConfig({componentId:"sc-3bb14ed-4"})(["display:flex;"]),eu=(0,c.default)(v.PhotoImage).withConfig({componentId:"sc-3bb14ed-5"})(["min-width:","px;margin-top:auto;margin-bottom:auto;margin-right:0.5rem;border-radius:0.25rem;"],50),em=c.default.div.withConfig({componentId:"sc-3bb14ed-6"})(["margin-top:auto;margin-bottom:auto;"]),eh=c.default.div.withConfig({componentId:"sc-3bb14ed-7"})(["",""],(0,n.setTypographyType)("subtitle")),ex=c.default.div.withConfig({componentId:"sc-3bb14ed-8"})([""," "," ","{max-width:260px;}"],(0,n.setPropertyToColorVar)("color","ipt-on-baseAlt-textHint-color"),(0,n.setTypographyType)("bodySmall"),n.mediaQueries.breakpoints.above.m),eb=(0,c.default)(x.G).withConfig({componentId:"sc-3bb14ed-9"})([""," background:initial;"],(0,n.setTypographyType)("body"));var eT=i(70689),ey=i(5042),eC=i(28446);let ew=s()`
    fragment BaseTitlePrompt__WatchOptions on Title {
        id
        watchOptionsByCategory(location: $location) @skip(if: $isProPage) {
            categorizedWatchOptionsList {
                ...WatchOptionCategories
            }
        }
    }
    ${ed}
`,ev=e=>{let{data:t}=e,{value:i}=(0,O.Lz)(),r=t?.user?.preferredStreamingProviders?(0,eC.H)({preferredStreamingProviders:t.user.preferredStreamingProviders}):[],n=(0,ey.L)({preferredServiceIds:r});if(!t)return null;let o=t.watchOptionsByCategory?.categorizedWatchOptionsList,s=o&&o.length>0;return(0,a.jsxs)(a.Fragment,{children:[!!n&&(0,a.jsx)(eI,{refSuffix:[O.Cd.BUTTON],"data-testid":C.z7.SET_PREFERRED_SERVICES,preferredServicesIds:r}),!!s&&(0,a.jsx)(es,{titleId:t.id,watchOptionsCategories:o,preferredProviderIds:r,refMarker:{prefix:i}})]})},eI=(0,c.default)(eT.Z).withConfig({componentId:"sc-b077d543-0"})(["margin:"," 0;"],n.spacing.xxs),ej=s()`
    fragment BaseTitlePromptShared on Title {
        id
        plot {
            plotText {
                plainText
            }
        }
        productionStatus(useEntitlement: false) {
            currentProductionStage {
                id
                text
            }
        }
        ...BaseTitlePrompt__Track
        ...BaseTitlePrompt__Trailer
        ...BaseTitlePrompt__WatchOptions
    }
    ${X}
    ${ew}
    ${q}
`,eP=s()`
    query Base_Title_Prompt(
        $id: ID!
        $location: WatchOptionsLocation
        $isProPage: Boolean!
        $includeUserPreferredServices: Boolean! = false
        $includeBoxOfficeData: Boolean!
    ) {
        title(id: $id) {
            ...BaseTitlePromptShared
        }
        boxOffice: title(id: $id) @include(if: $includeBoxOfficeData) {
            ...Title_BoxOffice
        }
        user @include(if: $includeUserPreferredServices) {
            ...UserPreferredServices
        }
    }
    ${ej}
    ${T.R}
    ${p.j}
`,eS=e=>{let{titleId:t,pause:i=!1,queryOverride:a}=e,r=(0,m.ic)(),n=(0,f.ik)(),o=(0,g.nu)(),s=!n&&o,d=n&&o,[l,c]=(0,u.E)({query:eP,variables:{id:t,location:r,isProPage:n,includeUserPreferredServices:s,includeBoxOfficeData:d},context:{serverSideCacheable:!1,personalized:n||s},pause:i,...a});return[l,c]},e_=e=>{let{title:t,baseTitlePromptData:i,onClose:n,isOpen:o,queryOverride:s,contentOverride:d,actionOverride:c}=e,p=(0,l.Z)(),g=(0,f.ik)(),[u,m]=eS({titleId:t?.id||"",pause:!!i||!t||!o,queryOverride:s});if((0,y.g)(o),!t||!t.titleText?.text)return null;let h=i?.title??u.data?.title,T=i?.user??u.data?.user,v=u.data?.boxOffice,I=u.fetching,j=u.error,P=h?.productionStatus?.currentProductionStage.id,S=h?.productionStatus?.currentProductionStage.text,_=P&&S&&P!==C.gA;return(0,a.jsx)(eM,{onCloseClicked:n,baseColor:g?"base":"baseAlt",isOpen:o,closePromptLabel:p.formatMessage(C.TY.closePrompt),children:(0,a.jsxs)(eO,{children:[(0,a.jsx)(R,{titleData:t}),!!I&&(0,a.jsx)(b.lI,{height:"feature"}),!I&&(0,a.jsxs)(a.Fragment,{children:[!!h?.plot?.plotText?.plainText&&(0,a.jsx)(eB,{children:h.plot.plotText.plainText}),!!_&&(0,a.jsx)(eR,{"data-testid":C.z7.PRODUCTION_STATUS,children:S}),!!d&&d(u?.data||{}),!!g&&!!v&&(0,a.jsx)(z,{data:v}),(0,a.jsxs)(ek,{children:[!c&&!g&&!!h&&(0,a.jsx)(ee,{data:h}),!!g&&(0,a.jsx)(w.a,{title:t}),!g&&(0,a.jsx)(ei,{titleId:t.id}),!!g&&!!h&&(0,a.jsx)(K,{data:h}),!!c&&c(u?.data||{})]}),!g&&!!h&&(0,a.jsx)(ev,{data:{...h,user:T}})]}),!I&&!!j&&(0,a.jsx)(x.G,{title:p.formatMessage({id:"error_common_sorryTryAgain",defaultMessage:"Sorry, there was an error. Please try again."}),displayType:"compact",action:(0,a.jsx)(r.TextLink,{onClick:()=>m(),text:p.formatMessage({id:"common_buttons_retry",defaultMessage:"Try again"}),"data-testid":C.z7.RETRY})})]})})},eO=c.default.div.withConfig({componentId:"sc-6ef24fae-0"})(["padding-bottom:",";"],n.spacing.l),ek=c.default.div.withConfig({componentId:"sc-6ef24fae-1"})(["display:flex;margin-bottom:",";padding-left:",";padding-right:",";","{padding-left:0;padding-right:0;}& > :nth-child(1):not(:last-child){margin-right:",";}"],n.spacing.xs,n.spacing.s,n.spacing.s,n.mediaQueries.breakpoints.above.m,n.spacing.xs),eB=c.default.div.withConfig({componentId:"sc-6ef24fae-2"})([""," margin-bottom:",";padding-left:",";padding-right:",";","{padding-left:0;padding-right:0;}"],(0,h.S)(4),n.spacing.s,n.spacing.s,n.spacing.s,n.mediaQueries.breakpoints.above.m),eM=(0,c.default)(r.Prompt).withConfig({componentId:"sc-6ef24fae-3"})(["",""],(0,n.setTypographyType)("bodySmall")),eR=c.default.div.withConfig({componentId:"sc-6ef24fae-4"})(["margin:",";","{margin-left:0;margin-right:0;}"],n.spacing.s,n.mediaQueries.breakpoints.above.m)},45274:function(e,t,i){i.d(t,{j:function(){return n}});var a=i(30382),r=i.n(a);let n=r()`
    fragment Title_BoxOffice on Title {
        id
        titleType {
            id
        }
        productionBudget {
            budget {
                amount
                currency
            }
        }
        lifetimeGross(boxOfficeArea: DOMESTIC) {
            total {
                amount
                currency
            }
        }
        openingWeekendGross(boxOfficeArea: DOMESTIC) {
            gross {
                total {
                    amount
                    currency
                }
            }
            weekendEndDate
        }
        worldwideGross: lifetimeGross(boxOfficeArea: WORLDWIDE) {
            total {
                amount
                currency
            }
        }
    }
`},15323:function(e,t,i){i.d(t,{AO:function(){return c},UJ:function(){return g},pM:function(){return f},yK:function(){return p}});var a=i(46138);let r={id:"title_main_boxoffice_estimated",defaultMessage:"{budget} (estimated)"},n={id:"title_main_boxoffice_budget",defaultMessage:"Budget"},o={id:"title_main_boxoffice_grossdomestic",defaultMessage:"Gross US & Canada"},s={id:"title_main_boxoffice_openingweekenddomestic",defaultMessage:"Opening weekend US & Canada"},d={id:"title_main_boxoffice_cumulativeworldwidegross",defaultMessage:"Gross worldwide"},l=(e,t)=>{let i=(0,a.Z)();if(e&&t)return i.formatNumber(e,{style:"currency",currency:t,minimumFractionDigits:0})},c=e=>{let t=(0,a.Z)(),i=l(e?.budget.amount,e?.budget.currency);if(i)return{label:n,props:{listContent:[{text:t.formatMessage(r,{budget:i})}],"data-testid":"title-boxoffice-budget"}}},p=e=>{let t=l(e?.total.amount,e?.total.currency)??"";if(e)return{label:o,props:{listContent:[{text:t}],"data-testid":"title-boxoffice-grossdomestic"}}},g=e=>{let t=(0,a.Z)(),i=l(e?.gross.total.amount,e?.gross.total.currency)??"";if(e)return{label:s,props:{listContent:[{text:i},{text:t.formatDate(e?.weekendEndDate,{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"})}],"data-testid":"title-boxoffice-openingweekenddomestic"}}},f=e=>{let t=l(e?.total.amount,e?.total.currency)??"";if(e)return{label:d,props:{listContent:[{text:t}],"data-testid":"title-boxoffice-cumulativeworldwidegross"}}}}}]);

