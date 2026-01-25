/* 元のURL: https://imdb.com */
// 外部JS: https://dqpnq362acqdi.cloudfront.net/_next/static/chunks/9307-cace3238a356b4a6.js
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9307],{64934:function(e,t,a){a.d(t,{P:function(){return r}});let r=a(19596).default.div.withConfig({componentId:"sc-b7651f91-0"})(["height:0;"])},10965:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(52322),n=a(17620),i=a.n(n),o=a(2784),s=a(3358),l=a(81611),d=a(19596),c=a(10105);function u(e){let t;let{loading:a,children:n,height:d,customLoader:u}=e,p=(0,o.useRef)(null);return t=a?u||(0,r.jsx)(c.ZP,{height:d,"data-testid":"lazy-loader"}):n,(0,r.jsx)(g,{...i()(e,["loading","height","customLoader","children"]),children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(l.Z,{timeout:170,classNames:"item",nodeRef:p,children:(0,r.jsx)("div",{"data-testid":"loader-container",ref:p,children:t})},"lazyloader-"+a.toString())})})}let g=d.default.div.withConfig({componentId:"sc-e3008202-0"})(["& .item-enter{opacity:0;transform:translateY(1rem);}& .item-enter-active{opacity:1;transform:translateY(0);transition:all ","ms ease-out,opacity ","ms ease-in;}& .item-exit{opacity:1;transform:translateY(0);}& .item-exit-active{opacity:0;transform:translateY(-1rem);transition:all ","ms ease-in,opacity ","ms ease-out;}"],170,170,170,170)},58139:function(e,t,a){a.d(t,{t:function(){return f}});var r=a(52322),n=a(2784),i=a(14865),o=a(88169),s=a(43573),l=a(45455),d=a.n(l),c=a(46138),u=a(21821),g=a(49175),p=a(11438),m=a(14438),h=a(23842);let f=e=>{let{titles:t,cardOverride:a,promptOverride:l,shovelerClassName:f,...x}=e,T=(0,p.Lz)().value,{createButton:y,createPrompt:v}=(0,g.V1)(),b=(0,m.EJ)(),{formatMessage:C}=(0,c.Z)(),[E,D]=(0,n.useState)(t),S=t.map(e=>e.id),w=(0,u.L)({titleIds:S});(0,n.useEffect)(()=>{if(!w?.data?.titles)return;let e={};w.data.titles.forEach(t=>{t?.id&&(e[t?.id]=t)}),D(E.map(t=>({...t,primaryWatchOption:e[t.id]?.primaryWatchOption,userRating:e[t.id]?.userRating})))},[w?.data]);let I=E.map((e,t)=>{let a=w.fetching||(0,i.getIsNode)(),r={fetching:!0,text:C({id:"common_ariaLabel_loading",defaultMessage:"Loading"}),props:{}},n=y(e,t,w.fetching),o=n?{...n,fetching:!1}:void 0;return{data:e,index:t+1,alternateButton:a?r:o}}),M=a?a(I):I.map((e,t)=>(0,n.createElement)(h.c,{...e,key:`title-card-shoveler-item-${T}-${e.data.id}`,index:t+1}));if(d()(M))return null;let _=v();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Shoveler,{className:f,onPageChange:b,...(0,s.filterDataAttributes)(x),children:M}),l&&l(_)||_]})}},14149:function(e,t,a){a.d(t,{Kj:function(){return p}});var r=a(52322),n=a(88169),i=a(82925),o=a(86704),s=a(70314),l=a.n(s),d=a(2784),c=a(19596),u=a(75824);let g={PARENT:"retry-error",DEBUG:"retry-error-debug",BUTTON:"retry"},p=e=>{let{className:t,name:a,error:o,errorMessage:s,onClickRetry:c,canRetry:p}=e,f="Prod"===l()().publicRuntimeConfig.stage,x=(0,u.N)({id:"error_common_sorryLoadingPage",defaultMessage:"Sorry, there was an error loading the page."}),T=(0,u.N)({id:"common_buttons_retry",defaultMessage:"Try again"}),y=(0,u.N)({id:"error_500_title",defaultMessage:"Error"}),v=d.useContext(i.Theme),b=`color-${v.palette.baseColor}`;return(0,r.jsxs)("div",{className:t,"data-testid":g.PARENT,children:[(0,r.jsx)(h,{className:b,children:s??x}),!!p&&(0,r.jsx)(m,{"data-testid":g.BUTTON,onColor:"textPrimary",onClick:e=>c(e),children:T}),!f&&(0,r.jsxs)("div",{"data-testid":g.DEBUG,children:[(0,r.jsx)(n.SectionTitle,{children:y}),(0,r.jsx)(h,{className:b,children:`"${a}" failed to load. Reason: "${o?.message}" Check console for errors.`})]})]})},m=(0,c.default)(n.SecondaryButton).withConfig({componentId:"sc-29b3c6c9-0"})(["display:block;margin:0 auto;"]),h=(0,c.default)(n.ErrorMessage).withConfig({componentId:"sc-29b3c6c9-1"})(["padding-top:5rem;padding-bottom:1.5rem;text-align:center;&.color-base{","}&.color-baseAlt{","}"],(0,o.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),(0,o.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"));t.ZP=p},82008:function(e,t,a){var r=a(52322);a(2784);var n=a(2791),i=a(34231),o=a(48422),s=a(1833);t.Z=()=>{let e=(0,s.D9)(o.$.HOME),t=(0,i.z)(e);return(0,r.jsx)(n.ZP,{canonicalUrl:e,hrefLangEntries:t})}},84220:function(e,t,a){a.d(t,{GN:function(){return C},JY:function(){return b}});var r=a(52322),n=a(14865),i=a(88169),o=a(2784),s=a(64934),l=a(10965),d=a(25436),c=a(86958),u=a(53996),g=a(19596),p=a(86704);let m=e=>{let{height:t}=e,a=h(t);return(0,r.jsx)(a,{className:"feature-row-loader",children:(0,r.jsx)(v,{})})},h=e=>{switch(e){case"title-cards":return f;case"video-slates":return x;case"name-avatars":return T;default:return y}},f=g.default.div.withConfig({componentId:"sc-a7081958-0"})(["width:100%;position:relative;","{height:379px;}","{height:375px;}","{height:367px;}","{height:417px;}","{height:466px;}"],p.mediaQueries.breakpoints.above.xs,p.mediaQueries.breakpoints.above.s,p.mediaQueries.breakpoints.above.m,p.mediaQueries.breakpoints.above.l,p.mediaQueries.breakpoints.above.xl),x=g.default.div.withConfig({componentId:"sc-a7081958-1"})(["width:100%;position:relative;","{height:209px;}","{height:203px;}","{height:200px;}","{height:238px;}","{height:280px;}"],p.mediaQueries.breakpoints.above.xs,p.mediaQueries.breakpoints.above.s,p.mediaQueries.breakpoints.above.m,p.mediaQueries.breakpoints.above.l,p.mediaQueries.breakpoints.above.xl),T=g.default.div.withConfig({componentId:"sc-a7081958-2"})(["width:100%;position:relative;","{height:180px;}","{height:173px;}","{height:187px;}","{height:202px;}","{height:235px;}"],p.mediaQueries.breakpoints.above.xs,p.mediaQueries.breakpoints.above.s,p.mediaQueries.breakpoints.above.m,p.mediaQueries.breakpoints.above.l,p.mediaQueries.breakpoints.above.xl),y=g.default.div.withConfig({componentId:"sc-a7081958-3"})(["width:100%;position:relative;height:20rem;"]),v=(0,g.default)(i.Loader).withConfig({componentId:"sc-a7081958-4"})(["margin:auto;position:absolute;top:0;right:0;bottom:0;left:0;"]),b=(e,t)=>({...e,...t}),C=e=>{let{id:t,height:a,title:g,description:p,link:h,fetching:f,data:x,shouldRender:T,children:y,pageSectionProps:v}=e,b=o.useRef(),C=o.useRef(!1);n.isNode||b.current||(b.current=Date.now());let E=!(n.isNode&&!x||f||!T||T())||!y,D=!f&&!E,S=(0,c.B)().context,w={pageType:S.pageType,subPageType:S.subPageType,pageConst:S.pageConst,requestId:S.requestId,time:new Date().getTime(),unit:d.Unit.NONE};return(o.useEffect(()=>{let e;if(n.isNode||!b.current)return;let t=Date.now()-b.current;if(f)C.current=!0,e={...w,metricName:d.NextClientMetrics.FEATURE_FETCHING,value:1,unit:d.Unit.COUNT};else if(E){let a=C.current?d.NextClientMetrics.FEATURE_FETCHED_THEN_DROPPED_TIME:d.NextClientMetrics.FEATURE_DROPPED_WITHOUT_FETCH_TIME;e={...w,metricName:a,value:t,unit:d.Unit.MILLISECONDS}}else if(D){let a=C.current?d.NextClientMetrics.FEATURE_FETCHED_THEN_COMPLETE_TIME:d.NextClientMetrics.FEATURE_COMPLETE_WITHOUT_FETCH_TIME;e={...w,metricName:a,value:t,unit:d.Unit.MILLISECONDS}}e&&(0,u.cY)(e)},[E,D]),E)?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.P,{id:t}),(0,r.jsx)(i.PageGrid.Item,{span:3,children:(0,r.jsx)(i.PageSection,{...v,topPadding:v?.topPadding??(g?void 0:"none"),children:(0,r.jsxs)("div",{className:t,children:[!!g&&(0,r.jsx)(i.SubSectionTitle,{"data-testid":"subsection-title",description:p,href:h,children:g}),(0,r.jsx)(l.Z,{loading:!!f||n.isNode&&!x,height:"feature",customLoader:(0,r.jsx)(m,{height:a}),children:y})]})})})]})}},84355:function(e,t,a){a.d(t,{F:function(){return c}});var r=a(52322),n=a(30382),i=a.n(n);a(2784);var o=a(4363),s=a(20937),l=a(58670);let d=i()`
    query BornTodayHomepage(
        $bornToday: MonthDay!
        $bornTodayFirst: Int!
        $currentDate: Date!
    ) {
        bornToday(today: $bornToday, first: $bornTodayFirst) {
            edges {
                node {
                    id
                    nameText {
                        text
                    }
                    age(currentDate: $currentDate) {
                        displayableProperty {
                            value {
                                plainText
                            }
                        }
                    }
                    birthDate {
                        dateComponents {
                            day
                            month
                            year
                        }
                    }
                    deathDate {
                        dateComponents {
                            day
                            month
                            year
                        }
                    }
                    primaryImage {
                        caption {
                            plainText
                        }
                        url
                        height
                        width
                    }
                }
            }
        }
    }
`,c={query:()=>{let e=new Date,t=("0"+(e.getMonth()+1)).slice(-2),a=("0"+e.getDate()).slice(-2),r=e.getFullYear(),n={query:d,variables:{bornToday:"--"+t+"-"+a,bornTodayFirst:30,currentDate:`${r}-${t}-${a}`},context:{personalized:!1,serverSideCacheable:!1,clientSideBatch:!1}},[i]=(0,o.E)(n);return i},component:e=>(0,r.jsx)(l.Z,{...e})},u=(0,s.O)(c);t.Z=u},58670:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(52322);a(2784);var n=a(46138),i=a(88169),o=a(75824),s=a(16214),l=a(66724),d=a(11438),c=a(14438),u=a(84220),g=a(72779),p=a.n(g),m=a(19596),h=a(86704);let f="name-born-today-card",x="born-today-name",T="born-today-age",y=e=>{let{name:t,age:a,namePageLink:n,plaidImageModel:o,className:s}=e,l=p()(s,f);return(0,r.jsxs)(C,{className:l,href:n,"data-testid":f,children:[(0,r.jsxs)(i.Avatar,{dynamicWidth:!0,children:[(0,r.jsx)(i.Avatar.Image,{imageModel:o}),(0,r.jsx)(i.Avatar.Overlay,{className:"overlayClasses"})]}),(0,r.jsx)(b,{className:x,"data-testid":x,children:t}),a&&(0,r.jsx)(v,{className:T,"data-testid":T,children:a})]})},v=m.default.div.withConfig({componentId:"sc-7b55a663-0"})(["",";display:block;width:100%;text-decoration:none !important;margin-top:",";line-height:1em;",""],(0,h.setTypographyType)("bodySmall"),h.spacing.xxs,(0,h.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),b=m.default.div.withConfig({componentId:"sc-7b55a663-1"})(["",";margin-top:",";line-height:1em;color:inherit;display:block;width:100%;height:1.25rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",";"],(0,h.setTypographyType)("body"),h.spacing.s,(0,h.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color")),C=m.default.a.withConfig({componentId:"sc-7b55a663-2"})(["width:100%;text-align:center;text-decoration-style:none;color:inherit;text-decoration:none;overflow:hidden;display:flex;flex-direction:column;&:hover{opacity:0.7;}"]),E=e=>{if(e?.age?.displayableProperty?.value?.plainText){if(e.deathDate?.dateComponents?.year&&e.deathDate?.dateComponents?.month&&e.deathDate?.dateComponents?.day&&e.birthDate?.dateComponents?.year&&e.birthDate?.dateComponents?.month&&e.birthDate?.dateComponents?.day){let t=new Date(e.birthDate.dateComponents.year,e.birthDate.dateComponents.month-1,e.birthDate.dateComponents.day),a=new Date(e.deathDate.dateComponents.year,e.deathDate.dateComponents.month-1,e.deathDate.dateComponents.day);return t.getFullYear()+"-"+a.getFullYear()}return e?.age?.displayableProperty?.value?.plainText}},D=e=>{let{primaryImage:t}=e;if(!e.nameText||!(t&&t.url&&t.height&&t.width))return;let a=e.nameText?.text||"",r=E(e),n={caption:t?.caption?.plainText||a,url:t.url,maxHeight:t.height,maxWidth:t.width};return{name:a,nameId:e.id,age:r,plaidImageModel:n}},S=e=>{let{data:t}=e,a=(0,n.Z)(),{bornOnDateLinkBuilder:g,nameMainLinkBuilder:p}=(0,l.WOb)(),m=(0,c.EJ)(),h=new Date,f=a.formatDate(h,{month:"long",day:"numeric"}),x=(0,s.b)(t?.bornToday?.edges).map(e=>D(e)).filter(e=>!!e),T=x.map((e,t)=>(0,r.jsx)(i.SubGridItem,{span:2,children:(0,r.jsx)(y,{name:e.name,age:e.age,namePageLink:p({nconst:e.nameId,refSuffix:{t:d.Cd.EMPTY,n:t+1}}),plaidImageModel:e.plaidImageModel})},e.nameId)),v=(0,o.N)({id:"bornToday_header",defaultMessage:"Born today"}),b=(0,o.N)({id:"bornToday_header_description_date",defaultMessage:"People born on {dateString}"},{dateString:f}),C=(0,u.JY)({id:"born-today",height:"name-avatars",title:v,description:b,link:g({refSuffix:d.Cd.SEE_MORE}),shouldRender:()=>x.length>0},e);return(0,r.jsx)(u.GN,{...C,children:(0,r.jsx)(i.Shoveler,{onPageChange:m,children:T})})};var w=e=>(0,r.jsx)(d.xm,{value:d.Cd.BORN_TODAY,children:(0,r.jsx)(S,{...e})})},76574:function(e,t,a){a.d(t,{F:function(){return h},w:function(){return f}});var r=a(52322),n=a(30382),i=a.n(n);a(2784);var o=a(85018),s=a(4363),l=a(49175),d=a(20937),c=a(8305);let u=i()`
    fragment StreamingSingleTitle on Title {
        ...BaseTitleCard
        ...TitleCardTrailer
        ...TitleWatchOption
        meterRanking {
            currentRank
        }
        watchOptionsByCategory {
            categorizedWatchOptionsList {
                categoryName {
                    value
                }
                watchOptions {
                    providerName {
                        value
                    }
                    provider {
                        id
                    }
                }
            }
        }
    }
    ${o.sq}
    ${o.F4}
    ${l.sG.titleWatchOption}
`,g=i()`
    fragment StreamingProvidersInfo on WatchProvider {
        id
        name {
            value
        }
        description {
            value
        }
        refTagFragment
        logos {
            icon {
                url
            }
        }
    }
`,p=i()`
    fragment StreamingTitlesInfo on StreamingTitles {
        provider {
            ...StreamingProvidersInfo
        }
        titles(first: 12) {
            edges {
                node {
                    title {
                        ...StreamingSingleTitle
                    }
                }
            }
        }
    }
    ${u}
    ${g}
`,m=i()`
    query HomepageMostPopularStreaming {
        movieStreaming: streamingTitles(filter: { includeTitleTypes: movie }) {
            ...StreamingTitlesInfo
        }
        tvStreaming: streamingTitles(filter: { includeTitleTypes: tv }) {
            ...StreamingTitlesInfo
        }
    }
    ${p}
`,h={query:()=>{let[e]=(0,s.E)({query:m,context:{personalized:!0,serverSideCacheable:!1,clientSideBatch:!1}});return e},component:e=>(0,r.jsx)(c.Z,{...e})},f=(0,d.O)(h)},8305:function(e,t,a){a.d(t,{Z:function(){return W}});var r,n,i=a(52322),o=a(2784),s=a(41174),l=a(11438),d=a(46138),c=a(19596),u=a(88169),g=a(86704),p=a(83163),m=a(48687);let h=(0,a(82153).vU)({seeMoreButton:{id:"popular_see_more",defaultMessage:"See more"},movieTitle:{id:"popular_movie_tab",defaultMessage:"Movies"},tvTitle:{id:"popular_tv_tab",defaultMessage:"TV Shows"},emptyString:{id:"popular_empty",defaultMessage:"No content available. Please adjust your filters."},allFilterOptions:{id:"popular_all_filter",defaultMessage:"All"}});var f=a(4337),x=a(29562),T=a(23842),y=a(49175);let v=e=>{var t;let{items:a,isSmallBreakpoint:r}=e,n=(0,d.Z)(),{createButton:o,createPrompt:s}=(0,y.V1)();return(0,i.jsxs)(i.Fragment,{children:[a?.length>0&&(0,i.jsxs)(i.Fragment,{children:[(t=a.map((e,t)=>(0,i.jsx)(T.c,{data:e,alternateButton:o(e,t),index:t+1},e?.id)),r?(0,i.jsx)(b,{children:t}):(0,i.jsx)(f.PageGrid,{children:(0,i.jsx)(f.PageGrid.Item,{span:3,children:(0,i.jsx)(C,{children:t})})})),s()]}),!a||a?.length===0&&(0,i.jsx)(E,{children:n.formatMessage(h.emptyString)})]})},b=(0,c.styled)(x.Shoveler).withConfig({componentId:"sc-26a3e2e3-0"})(["padding-top:",";padding-bottom:",";"],g.spacing.xl,g.spacing.xl),C=(0,c.styled)(f.SubGrid).withConfig({componentId:"sc-26a3e2e3-1"})(["padding:"," ",";"],g.spacing.xl,g.spacing.m),E=c.styled.div.withConfig({componentId:"sc-26a3e2e3-2"})(["padding-top:",";text-align:center;"],g.spacing.m),D=e=>{let{streamingOptions:t,selectedOptions:a,setSelectedStreamingOptions:r}=e,n=(0,d.Z)();return(0,i.jsx)(S,{children:(0,i.jsxs)(u.ChipList,{wrap:!1,className:"chips",children:[(0,i.jsx)(w,{onClick:()=>r("all"),className:a?.includes("all")?"selected":"","aria-label":n.formatMessage(h.allFilterOptions),"data-testid":"streaming-all-filter",children:n.formatMessage(h.allFilterOptions)}),t?.map(e=>i.jsx(I,{className:a.includes(e.id)?"selected":"",children:i.jsx(u.Avatar,{onClick:()=>r(e.id),ariaLabel:e.name,"aria-pressed":a.includes(e.id),children:i.jsx(u.Avatar.Image,{imageModel:{maxHeight:50,maxWidth:50,caption:e.name,url:e.url},size:"50"})})},e.name))]})})},S=c.styled.div.withConfig({componentId:"sc-895815ea-0"})([".selected{border:2px solid ",";}"],(0,g.getColorVar)("ipt-on-baseAlt-accent1-color")),w=c.styled.button.withConfig({componentId:"sc-895815ea-1"})(["height:54px;min-width:54px;line-height:50px;background-color:",";color:",";border:2px solid rgba(",",0.5);text-align:center;border-radius:50%;margin-right:",";"],(0,g.getColorVar)("ipt-baseAlt-rgb"),(0,g.getColorVar)("ipt-on-baseAlt-textPrimary-color"),(0,g.getColorVar)("ipt-on-baseAlt-rgb"),g.spacing.s),I=c.styled.div.withConfig({componentId:"sc-895815ea-2"})(["margin-right:",";border:2px solid rgba(",",0.5);height:54px;border-radius:50%;display:inline-flex;"],g.spacing.s,(0,g.getColorVar)("ipt-on-baseAlt-rgb"));var M=a(14438),_=a(37179);(r=n||(n={})).Movie="movie",r.Tv="tv",r.All="all";let j=e=>{let t=e?.flatMap(e=>e.provider);return t?.filter(e=>e?.id!=="amzn1.imdb.w2w.provider.showtime"&&e?.id&&e?.logos?.icon?.url&&e?.name.value).map(e=>({id:e?.id||"",name:e?.name.value||"",url:e?.logos?.icon?.url||""}))},R=e=>{let t=e?.flatMap(e=>e.titles?.edges.flatMap(e=>e.node.title));return A(t?.filter((e,t,a)=>t===a.findIndex(t=>t?.id===e?.id)))},A=e=>e?.sort((e,t)=>e?.meterRanking?.currentRank||t?.meterRanking?.currentRank?e?.meterRanking?.currentRank?t?.meterRanking?.currentRank?e.meterRanking.currentRank-t.meterRanking.currentRank:-1:1:0),O=e=>{let t,{allTitles:a,isSmallBreakpoint:r,isExpanded:n}=e;if(r)t=a;else if(n){let e=a.length>=24?24:18;t=a.slice(0,e)}else t=a?.slice(0,12);return t},N={[n.Movie]:l.Cd.MOVIE,[n.Tv]:l.Cd.TV,[n.All]:l.Cd.ALL},P=e=>{let{movieTitles:t,tvTitles:a,allTitles:r}=e,[i,s]=(0,o.useState)(["all"]),[d,c]=(0,o.useState)(n.Movie),[u,g]=(0,o.useState)([]),p=(0,M.EO)();return(0,o.useEffect)(()=>{let e;d===n.Movie?e=t:d===n.Tv?e=a:d===n.All&&(e=r),i.includes("all")||(e=e.filter(e=>e.watchOptionsByCategory?.categorizedWatchOptionsList?.some(e=>{let t=e?.watchOptions.map(e=>e?.provider?.id);return i.filter(e=>t.includes(e)).length>0}))),g(e)},[i,d,t]),{selectedItems:i,results:u,selectedTab:d,onTitleTypeClick:function(e){c(e),p({pageAction:_.QJ.TAB_SELECT,refMarkerSuffix:N[e]})},onStreamingOptionClick:function(e){if("all"===e){s(["all"]),p({pageAction:_.QJ.FILTER_SELECT,refMarkerSuffix:l.Cd.ALL});return}let t=i.filter(e=>"all"!==e);t.includes(e)?0===(t=t.filter(t=>t!==e)).length&&t.push("all"):t.push(e),s(t),p({pageAction:_.QJ.FILTER_SELECT,refMarkerSuffix:(0,l.Qk)({refStr:t.map(e=>e.split(".")[1]??"").join("_"),explanation:`
                        ಠ_ಠ
                        ...
                        I'll allow it. Seems reasonable to want to know which provider was selected. I think
                        you could argue that should be in the page action, but those are pretty strict with
                        character limit, so I'll allow it.`})})}}},k=e=>{let{streamingOptions:t,movieTitles:a,tvTitles:r,allTitles:s}=e,l=(0,d.Z)(),c=(0,u.useBreakpointsAsConfig)(),g=c.xs||c.s,f=(0,m.hg)({weblabID:p.lh.IMDB_NEXT_HOME_STREAMING_WIDGET_958820,treatments:{T2:!0}}),[x,T]=(0,o.useState)(!1),{selectedItems:y,results:b,selectedTab:C,onTitleTypeClick:E,onStreamingOptionClick:S}=P({movieTitles:a,tvTitles:r,allTitles:s}),w=b?.length>=18,I=O({allTitles:b,isSmallBreakpoint:g,isExpanded:x});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)($,{children:[(0,i.jsx)(D,{streamingOptions:t,selectedOptions:y,setSelectedStreamingOptions:e=>{T(!1),S(e)}}),(0,i.jsx)(L,{tabs:(()=>{let e=[{id:n.Movie,label:l.formatMessage(h.movieTitle)},{id:n.Tv,label:l.formatMessage(h.tvTitle)}];return f&&e.unshift({id:n.All,label:l.formatMessage(h.allFilterOptions)}),e})(),value:C,onChange:e=>{T(!1),E(e)}})]}),(0,i.jsx)(v,{items:I,isSmallBreakpoint:g}),!x&&w&&!g&&(0,i.jsx)(B,{children:(0,i.jsx)(u.SecondaryButton,{preIcon:"expand-more",onClick:()=>T(!0),children:l.formatMessage(h.seeMoreButton)})})]})},$=c.styled.div.withConfig({componentId:"sc-983647e6-0"})(["margin-left:",";"],g.spacing.m),L=(0,c.styled)(u.Tabs).withConfig({componentId:"sc-983647e6-1"})(["margin-top:",";"],g.spacing.xs),B=c.styled.div.withConfig({componentId:"sc-983647e6-2"})(["display:flex;justify-content:center;"]);var F=a(84220);let U=e=>{let t=(0,F.JY)({id:"streaming-picks",height:"title-cards",shouldRender:()=>!0},e),a=e.data,r=j(a?.movieStreaming),n=R(a?.movieStreaming),o=R(a?.tvStreaming),l=A([...n||[],...o||[]]);return(0,s.bd)(l),(0,i.jsx)(F.GN,{...t,children:(0,i.jsx)(k,{streamingOptions:r,movieTitles:n,tvTitles:o,allTitles:l})})};var W=e=>(0,i.jsx)(l.xm,{value:l.Cd.POPULAR_STREAMING,children:(0,i.jsx)(U,{...e})})},89578:function(e,t,a){a.d(t,{Z:function(){return F}});var r=a(52322),n=a(14865),i=a(2784),o=a(46138),s=a(19596),l=a(88169),d=a(86704),c=a(64934),u=a(40981),g=a(58139),p=a(18355),m=a(14149),h=a(31885),f=a(91359),x=a(86958),T=a(41174),y=a(84314),v=a(66724),b=a(11438),C=a(63370),E=a(63837),D=a(30382),S=a.n(D),w=a(85018);let I=S()`
    fragment TitleWithEpisodeDataFromRatings on Title {
        ...BaseTitleCard
        primaryWatchOption {
            watchOption {
                link(platform: WEB)
            }
        }
        episodes {
            isOngoing
            next: episodes(
                first: 2
                filter: {
                    releasedOnOrAfter: {
                        day: $startDateDay
                        month: $startDateMonth
                        year: $startDateYear
                    }
                    releasedOnOrBefore: {
                        day: $endDateDay
                        month: $endDateMonth
                        year: $endDateYear
                    }
                }
            ) {
                edges {
                    node {
                        series {
                            episodeNumber {
                                episodeNumber
                                seasonNumber
                            }
                        }
                        id
                        titleText {
                            text
                        }
                        originalTitleText {
                            text
                        }
                        releaseDate {
                            day
                            month
                            year
                        }
                    }
                }
            }
        }
    }
    ${w.sq}
`,M=S()`
    query ReturningToTVFromRatings(
        $startDateDay: Int!
        $startDateMonth: Int!
        $startDateYear: Int!
        $endDateDay: Int!
        $endDateMonth: Int!
        $endDateYear: Int!
    ) {
        rttvRatedTitles: advancedTitleSearch(
            first: 250
            constraints: {
                myRatingConstraint: { filterType: INCLUDE }
                titleTypeConstraint: {
                    anyTitleTypeIds: ["tvSeries", "tvMiniSeries"]
                }
            }
            sort: { sortBy: POPULARITY, sortOrder: ASC }
        ) {
            pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
            }
            edges {
                node {
                    title {
                        ...TitleWithEpisodeDataFromRatings
                    }
                }
            }
        }
    }
    ${I}
`,_=S()`
    fragment TitleWithEpisodeDataFromPopular on Title {
        ...BaseTitleCard
        primaryWatchOption {
            watchOption {
                link(platform: WEB)
            }
        }
        episodes {
            isOngoing
            next: episodes(
                first: 2
                filter: {
                    releasedOnOrAfter: {
                        day: $popularStartDateDay
                        month: $popularStartDateMonth
                        year: $popularStartDateYear
                    }
                    releasedOnOrBefore: {
                        day: $popularEndDateDay
                        month: $popularEndDateMonth
                        year: $popularEndDateYear
                    }
                }
            ) {
                edges {
                    node {
                        series {
                            episodeNumber {
                                episodeNumber
                                seasonNumber
                            }
                        }
                        id
                        titleText {
                            text
                        }
                        originalTitleText {
                            text
                        }
                        releaseDate {
                            day
                            month
                            year
                        }
                    }
                }
            }
        }
    }
    ${w.sq}
`,j=S()`
    query ReturningToTVFromPopular(
        $popularStartDateDay: Int!
        $popularStartDateMonth: Int!
        $popularStartDateYear: Int!
        $popularEndDateDay: Int!
        $popularEndDateMonth: Int!
        $popularEndDateYear: Int!
        $myRatingConstraint: MyRatingSearchConstraint
    ) {
        rttvPopularTitles: advancedTitleSearch(
            first: 250
            constraints: {
                titleTypeConstraint: {
                    anyTitleTypeIds: ["tvSeries", "tvMiniSeries"]
                }
                myRatingConstraint: $myRatingConstraint
            }
            sort: { sortBy: POPULARITY, sortOrder: ASC }
        ) {
            pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
            }
            edges {
                node {
                    title {
                        ...TitleWithEpisodeDataFromPopular
                    }
                }
            }
        }
    }
    ${_}
`;var R=a(70902),A=a(27513);let O=e=>{if(!e||!e.releaseDate)return -1;let t=N(e);if(!t)return -1;let a=(t.getTime()-E.tg.getTime())/1e3;return a/=604800,a=Math.abs(Math.round(a))},N=e=>{let{day:t,month:a,year:r}=e.releaseDate||{};if(t&&a&&r)return new Date(r,a-1,t)},P=(e,t)=>{let a=N(e?.episodes?.next?.edges?.[0]?.node),r=N(t?.episodes?.next?.edges?.[0]?.node);return a&&r?r<a?1:r>a?-1:0:0};var k=e=>{let{nextEpisodeNode:t}=e,a=(0,o.Z)(),n=new Date,i=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds())),s=N(t),l=new Date(s??""),d=i>l,c="";s&&(c=d?(0,A.LU)(a,l,i):(0,A.LU)(a,i,l));let u=d?a.formatMessage({id:"returning_to_tv_airing_now",defaultMessage:"Airing now"}):a.formatMessage({id:"returning_to_tv_airs_in",defaultMessage:"Airs in {duration}"},{duration:c});return c?(0,r.jsx)($,{"data-testid":E.z7.METADATA_PARENT,children:(0,r.jsx)(L,{"data-testid":E.z7.AIR_DATE,children:u})}):null};let $=s.default.div.withConfig({componentId:"sc-4e8efc44-0"})(["",";margin-top:",";"],(0,d.setTypographyType)("bodySmall"),d.spacing.xs),L=s.default.span.withConfig({componentId:"sc-4e8efc44-1"})(["",";",";"],(0,d.setTypographyType)("bodySmall"),(0,d.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),B=e=>{let{shouldClientSideBatch:t}=e,a=(0,o.Z)(),s=(0,y.n)(),d=(0,b.Lz)().value,{chartTopTvLinkBuilder:D,titleMainLinkBuilder:S}=(0,v.WOb)(),w=(0,x.B)().context,[I,_]=(0,i.useState)([]),[A,N]=(0,i.useState)([]),$=[...I,...A],[{data:L,error:B,fetching:F},H]=(0,T.E8)({query:M,variables:{startDateDay:E.WB,startDateMonth:E.Ws,startDateYear:E.Zd,endDateDay:E.xd,endDateMonth:E.Bs,endDateYear:E._K},context:{clientSideBatch:(0,n.getIsBrowser)()&&s&&t,serverSideCacheable:!1,personalized:!0},pause:!(0,n.getIsBrowser)()||!s}),[{data:z,error:G,fetching:Q},q]=(0,T.E8)({query:j,variables:{popularStartDateDay:E.WB,popularStartDateMonth:E.Ws,popularStartDateYear:E.Zd,popularEndDateDay:E.xd,popularEndDateMonth:E.Bs,popularEndDateYear:E._K,myRatingConstraint:s?{filterType:h.hFp.Exclude}:void 0},context:{clientSideBatch:(0,n.getIsBrowser)()&&t,serverSideCacheable:!s,personalized:s},pause:!(0,n.getIsBrowser)()}),J=!F&&!Q&&(L||z);(0,i.useEffect)(()=>{if(L){let e=(L?.rttvRatedTitles?.edges??[]).map(e=>e?.node?.title).filter(e=>{let t=O(e?.episodes?.next?.edges?.[0]?.node);return t>=0&&t<=2});_(e=e.sort((e,t)=>P(e,t)))}},[L,B]),(0,i.useEffect)(()=>{if(z){let e=(z?.rttvPopularTitles?.edges??[]).map(e=>e?.node?.title).filter(e=>{let t=O(e?.episodes?.next?.edges?.[0]?.node);return t>=0&&t<=2});N(e=e.sort((e,t)=>P(e,t)))}},[z,G]),(0,T.bd)($.map(e=>({id:e.id})));let K=a.formatMessage({id:"returning_to_tv_title",defaultMessage:"Returning to TV"}),X=a.formatMessage({id:"returning_to_tv_description",defaultMessage:"See recent or upcoming episodes from popular shows or ones you've rated"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.P,{id:"returningToTV"}),(0,r.jsx)(l.PageGrid.Item,{span:3,children:(0,r.jsxs)(l.PageSection,{"data-testid":E.z7.PARENT,children:[(0,r.jsx)(V,{children:(0,r.jsx)(l.SubSectionTitle,{className:E.kA.FEATURE_TITLE,description:X,children:K})}),!J&&!B&&!G&&(0,r.jsx)(Z,{"data-testid":E.z7.LOADER,children:(0,r.jsx)(l.Loader,{className:E.kA.LOADER})}),(B&&!L||G&&!z)&&(0,r.jsx)(W,{"data-testid":E.z7.ERROR_STATE,children:(0,r.jsx)(m.ZP,{canRetry:!0,errorMessage:a.formatMessage({id:"error_common_sorryTryAgain",defaultMessage:"Sorry, there was an error. Please try again."}),name:"ReturningToTV",onClickRetry:()=>B?H():q()})}),J&&0===$.length&&(0,r.jsxs)(W,{"data-testid":E.z7.EMPTY_STATE,children:[(0,r.jsx)(Y,{children:a.formatMessage({id:"returning_to_tv_empty_state_1",defaultMessage:"Want better suggestions? Rate more titles!"})}),(0,r.jsx)(l.TextLink,{href:D({refSuffix:b.Cd.SEE_MORE}),text:a.formatMessage({id:"returning_to_tv_empty_state_2",defaultMessage:"Start by checking out the highest rated TV shows"})})]}),J&&$.length>0&&(0,r.jsx)(g.t,{shovelerClassName:E.kA.SHOVELER,titles:$,cardOverride:e=>e.map((e,t)=>{let n=e.data,i=(0,C.L)(w,n.originalTitleText,n.titleText)??"";return(0,r.jsxs)(l.PosterCard,{dynamicWidth:!0,children:[(0,r.jsx)(p.y,{className:E.kA.POSTER,title:{id:n.id,titleText:i,titleTypeId:n.titleType?.id??"",image:{url:n.primaryImage?.url,height:n.primaryImage?.height,width:n.primaryImage?.width}},index:t+1}),(0,r.jsxs)(U,{children:[(0,r.jsx)(u.Nf,{canRate:!!n.canRate?.isRatable,className:E.kA.RATINGS,hideMaxIMDbRating:!0,hideVoteCountOnSmallBreakpoints:!0,ratingsSummary:n.ratingsSummary?n.ratingsSummary:void 0,showPlaceholderStarIfApplicable:!0,titleId:n.id,titleText:i}),(0,r.jsx)(l.PosterCard.Title,{ariaLabel:a.formatMessage(f.F.GO_TO,{target:i}),className:E.kA.TITLE_TEXT,href:S({tconst:n.id,refSuffix:{t:b.Cd.TEXT,n:t+1}}),children:i}),(n.episodes?.next?.edges?.length??!1)&&(0,r.jsx)(k,{nextEpisodeNode:(n.episodes?.next?.edges??[])[0].node},`${d}-${n.id}-episode`),(0,r.jsx)(R.Z,{index:t,titleData:n})]})]},`rttv-pc-${n.id}`)})})]})})]})};var F=e=>(0,r.jsx)(b.xm,{value:b.Cd.RETURNING_TO_TV,children:(0,r.jsx)(B,{...e})});let U=s.default.div.withConfig({componentId:"sc-6b4f4d99-0"})(["display:flex;flex-direction:column;"]),W=s.default.div.withConfig({componentId:"sc-6b4f4d99-1"})(["align-items:center;display:flex;flex-direction:column;justify-content:center;margin-left:",";min-height:10rem;"],(0,d.getSpacingVar)("ipt-pageMargin")),Y=s.default.div.withConfig({componentId:"sc-6b4f4d99-2"})(["font-weight:500;"]),V=s.default.div.withConfig({componentId:"sc-6b4f4d99-3"})(["align-items:center;display:flex;flex-direction:row;"]),Z=s.default.div.withConfig({componentId:"sc-6b4f4d99-4"})(["margin-left:",";text-align:center;width:100%;.","{min-height:20rem;}"],(0,d.getSpacingVar)("ipt-pageMargin"),E.kA.LOADER)},70902:function(e,t,a){var r=a(52322);a(2784);var n=a(46138),i=a(19596),o=a(88169),s=a(86704),l=a(49175),d=a(63837);t.Z=e=>{let{index:t,titleData:a}=e,i=(0,n.Z)(),{createButton:s,createPrompt:g}=(0,l.V1)(),p=i.formatMessage({id:"common_buttons_details",defaultMessage:"Details"}),m=s(a,t)??{...s(a,t,!0),text:p};return(0,r.jsxs)(c,{children:[(0,r.jsx)(o.PosterCard.Actions,{children:(0,r.jsx)(o.SecondaryButton,{...m.props,className:d.kA.WATCH_OPTIONS_BUTTON,width:"full-width",children:m.fetching?(0,r.jsx)(u,{type:"circle"}):m.text})}),g()]})};let c=i.default.div.withConfig({componentId:"sc-d5c026d1-0"})(["margin-top:auto;"]),u=(0,i.default)(o.Loader).withConfig({componentId:"sc-d5c026d1-1"})(["max-height:",";max-width:",";vertical-align:middle;"],s.spacing.xl,s.spacing.xl)},63837:function(e,t,a){a.d(t,{Bs:function(){return c},WB:function(){return i},Ws:function(){return o},Zd:function(){return s},_K:function(){return u},kA:function(){return p},tg:function(){return r},xd:function(){return d},z7:function(){return g}});let r=new Date,n=new Date(r);n.setDate(n.getDate()-14);let i=n.getDate(),o=n.getMonth()+1,s=n.getFullYear(),l=new Date(r);l.setDate(l.getDate()+14);let d=l.getDate(),c=l.getMonth()+1,u=l.getFullYear(),g={AIR_DATE:"rttv-air-date",EMPTY_STATE:"rttv-empty-state",ERROR_STATE:"rttv-error-state",LOADER:"rttv-loader",METADATA_PARENT:"rttv-metadata-parent",PARENT:"rttv-parent"},p={FEATURE_TITLE:"rttv-feature-title",LOADER:"rttv-loader",POSTER:"rttv-poster",RATINGS:"rttv-ratings",SHOVELER:"rttv-shoveler",TITLE_TEXT:"rttv-title-text",WATCH_OPTIONS_BUTTON:"rttv-watch-options-button"}},20937:function(e,t,a){a.d(t,{O:function(){return n}});var r=a(84314);let n=e=>({component:()=>{let t=(0,r.n)(),a=e.query({isLoggedIn:t}),n={data:a.data,fetching:a.fetching,error:a.error};return e.component(n)},shouldRender:()=>!0})},27513:function(e,t,a){var r,n;a.d(t,{D2:function(){return u},LU:function(){return c},_J:function(){return o},dR:function(){return d},ez:function(){return r}});let i="formatters_duration";(n=r||(r={})).SECOND="second",n.MINUTE="minute",n.HOUR="hour",n.DAY="day",n.WEEK="week",n.MONTH="month",n.YEAR="year";let o={second:()=>1e3,minute:()=>60*o.second(),hour:()=>60*o.minute(),day:()=>24*o.hour(),week:()=>7*o.day(),month:()=>4.35*o.week(),year:()=>12*o.month()},s=(e,t,a,r)=>{let n=o[a](),s=r&&o[r](),l=0;return((s?t<s&&t>=2*n:t>=2*n)?l=Math.floor(t/n):t<2*n&&t>=n&&(l=1),l)?e.formatMessage({id:`${i}_${a}`,defaultMessage:`{count, plural, one {1 ${a}} other {{count} ${a}s}}`},{count:l}):""},l=e=>e instanceof Date&&!isNaN(e.getTime()),d=(e,t,a)=>{let r=a?new Date(a):new Date;return c(e,new Date(t),r)},c=(e,t,a)=>{if(!l(a)||!l(t))return"";let r=a.getTime()-t.getTime();if(r>=o.year())return s(e,r,"year");if(r<o.year()&&r>=o.month())return s(e,r,"month","year");if(r<o.month()&&r>=o.week())return s(e,r,"week","month");if(r<o.week()&&r>=o.day())return s(e,r,"day","week");if(r<o.day()&&r>=o.hour())return s(e,r,"hour","day");if(r<o.hour()&&r>=o.minute())return s(e,r,"minute","hour");if(r<o.minute()&&r>=o.second())return s(e,r,"second","minute");else if(r<o.second())return e.formatMessage({id:`${i}_now`,defaultMessage:"now"});return""};function u(e,t){let a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=new Date;return r<new Date(t)?a?d(e,r.toISOString(),t):e.formatMessage({id:`${i}_now`,defaultMessage:"now"}):d(e,t)}}}]);

