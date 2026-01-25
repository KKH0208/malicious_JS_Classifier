/* 元のURL: https://imdb.com */
// 外部JS: https://dqpnq362acqdi.cloudfront.net/_next/static/chunks/pages/index-e76400ddc1f13516.js
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{87314:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(40040)}])},29914:function(e,t,i){"use strict";i.d(t,{Z:function(){return f}});var r=i(52322),a=i(5632),n=i(2784),s=i(54588),o=i(82453),l=i(22187),d=i(59291);let c={base:"--ipt-base-rgb",baseShade1:"--ipt-base-shade1-rgb",baseShade2:"--ipt-base-shade2-rgb",baseShade3:"--ipt-base-shade3-rgb",onBase:"--ipt-on-base-rgb",onBaseAccent1:"--ipt-on-base-accent1-rgb",onBaseAccent2:"--ipt-on-base-accent2-rgb",onBaseAccent3:"--ipt-on-base-accent3-rgb",onBaseError:"--ipt-on-base-error-rgb",baseAlt:"--ipt-baseAlt-rgb",baseAltShade1:"--ipt-baseAlt-shade1-rgb",baseAltShade2:"--ipt-baseAlt-shade2-rgb",baseAltShade3:"--ipt-baseAlt-shade3-rgb",onBaseAlt:"--ipt-on-baseAlt-rgb",onBaseAltAccent1:"--ipt-on-baseAlt-accent1-rgb",onBaseAltAccent2:"--ipt-on-baseAlt-accent2-rgb",onBaseAltAccent3:"--ipt-on-baseAlt-accent3-rgb",onBaseAltError:"--ipt-on-baseAlt-error-rgb",accent1:"--ipt-accent1-rgb",onAccent1:"--ipt-on-accent1-rgb",accent2:"--ipt-accent2-rgb",onAccent2:"--ipt-on-accent2-rgb"};new d.DOMParser;let p=e=>{if(e&&Object.keys(e).length>0){let t=":root {\n";for(let i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&e[i]&&"null"!==e[i]&&"undefined"!==e[i]&&c[i]){let r=u(e[i]);t+=`    ${c[i]}: ${r};
`}return t+"}\n"}return""},u=e=>{let t=e;if(!t.startsWith("#"))return t;t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,i,r)=>t+t+i+i+r+r);let i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?`${m(i[1])},${m(i[2])},${m(i[3])}`:""},m=e=>parseInt(e,16),g=e=>{let{initialOverrides:t,pathname:i}=e,a=n.useRef(new Map([[i,p(t)]]));n.useEffect(()=>{let e=e=>{a.current.has(i)||a.current.set(i,p(e.detail))};return window.addEventListener("clientSidePlaidOverride",e),()=>{window.removeEventListener("clientSidePlaidOverride",e)}},[i]);let s=a.current.get(i);return s?.length?(0,r.jsx)("style",{id:l.cp,dangerouslySetInnerHTML:{__html:s}}):null};var f=()=>{let e=(0,o.Ok)().adSlotsInfo,t=(0,a.useRouter)();return(0,r.jsx)(s.Z,{name:"IMDbNextAdStyleOverrides",children:(0,r.jsx)(g,{initialOverrides:e.plaidOverrides,pathname:t.asPath})})}},51378:function(e,t,i){"use strict";i.d(t,{$L:function(){return S},gK:function(){return a}});var r,a,n=i(52322),s=i(88169);i(2784);var o=i(46138),l=i(90047),d=i(30382),c=i.n(d),p=i(11438),u=i(14438),m=i(17503);let g=()=>{let[e,t]=(0,m.Z)(f,{}),[i,r]=(0,m.Z)(h,{}),a=(0,u.EO)();return{follow:{executeFollow:e=>(a({refMarkerSuffix:[p.Cd.ADD],pageAction:`follow-${e}`,customPageMetadata:{id:e}}),t({id:e})),followResult:e},unfollow:{executeUnfollow:e=>(a({refMarkerSuffix:[p.Cd.DELETE],pageAction:`unfollow-${e}`,customPageMetadata:{id:e}}),r({id:e})),unfollowResult:i}}},f=c()`
    mutation Follow($id: ID!) {
        followEntity(input: { id: $id }) {
            result {
                id
            }
        }
    }
`,h=c()`
    mutation Unfollow($id: ID!) {
        unfollowEntity(input: { id: $id }) {
            result {
                id
            }
        }
    }
`;var x=i(84314),T=i(30634),b=i(27722),v=i(54241);let y=e=>{let{isSelected:t,ariaLabel:i,className:r,onSelect:a}=e;return(0,n.jsx)(v.R,{className:`${t?"active":"inactive"} ${r}`,ariaLabel:i,onSelect:a,children:(0,n.jsx)(b.Icon,{name:t?"done":"add"})})};(r=a||(a={})).CIRCLE_WITH_CHECK="circle",r.CHECK="check",r.TEXT="text";let _={ADD_INTEREST:{id:"interest_add",defaultMessage:"Add to your interests"},ADDED_INTEREST:{id:"interest_added",defaultMessage:"Added to your interests"},ADD_INTEREST_FAILED:{id:"interest_add_failed",defaultMessage:"Adding interest failed. Please try again later."},REMOVE_INTEREST:{id:"interest_del",defaultMessage:"Remove from your interests"},REMOVE_INTEREST_FAILED:{id:"interest_del_failed",defaultMessage:"Removing interest failed. Please try again later."}},C={ADD_INTEREST_BUTTON:"add-interest-button"},S=e=>{let{interestId:t,buttonType:i}=e,r=(0,x.n)(),a=(0,o.Z)(),{value:d}=(0,p.Lz)(),{follow:c,unfollow:u}=g(),{sendSnack:m}=(0,s.useSnackbar)(),{followedInterests:f,onFollowInterest:h,onUnfollowInterest:b,isLoading:v}=(0,l.pG)(),S=()=>{v||(r?f.includes(t)?(b(t),u.executeUnfollow(t).then(e=>{!e?.error&&e?.data?.unfollowEntity?.result?.id||(h(t),m({primaryText:a.formatMessage(_.REMOVE_INTEREST_FAILED),baseColor:"accent3",type:"auto"}))})):(h(t),c.executeFollow(t).then(e=>{!e?.error&&e?.data?.followEntity?.result?.id||(b(t),m({primaryText:a.formatMessage(_.ADD_INTEREST_FAILED),baseColor:"accent3",type:"auto"}))})):(0,T.rf)(d))},w=f.includes(t)?a.formatMessage(_.REMOVE_INTEREST):a.formatMessage(_.ADD_INTEREST);switch(i){case"text":return f.includes(t)?(0,n.jsx)(s.OutlineButton,{preIcon:"done",onColor:"accent2",onSelect:S,"data-testid":C.ADD_INTEREST_BUTTON,children:a.formatMessage(_.ADDED_INTEREST)}):(0,n.jsx)(s.Button,{preIcon:"add",onSelect:S,isLoading:v,"data-testid":C.ADD_INTEREST_BUTTON,children:a.formatMessage(_.ADD_INTEREST)});case"circle":return(0,n.jsx)(y,{isSelected:f.includes(t),ariaLabel:w,className:"add-interest-icon",onSelect:S,"data-testid":C.ADD_INTEREST_BUTTON});default:return(0,n.jsx)(s.IconButton,{name:f.includes(t)?"done":"add",label:w,ariaLabel:w,className:"add-interest-icon",onColor:"accent2",onSelect:S,"data-testid":C.ADD_INTEREST_BUTTON})}}},38276:function(e,t,i){"use strict";i.d(t,{Q3:function(){return n},X9:function(){return s},yw:function(){return o}});var r=i(86054);let a=(e,t)=>({...(0,r.rf)(e.node,t),currentRank:e.currentRank}),n=(e,t)=>(e?.map(e=>a(e,t))||[]).filter(e=>e.titleText&&e.titleId&&e.titleType.id),s=e=>0===e.length?0:e.reduce((e,t)=>e+(t.ratingSummary?.aggregateRating??0),0)/e.length,o=e=>{let t=Object.values(e).filter(e=>!!e);if(0===t.length)return 0;let i=t.length>0?t.length:1;return(t.reduce((e,t)=>(e??0)+(t??0),0)??0)/i}},79544:function(e,t,i){"use strict";i.d(t,{b:function(){return n}});var r=i(30382),a=i.n(r);let n=a()`
    fragment InterestCard on Interest {
        id
        primaryText {
            text
        }
        primaryImage {
            caption {
                plainText
            }
            width
            height
            url
            id
        }
        visibilityLevel
    }
`},78814:function(e,t,i){"use strict";i.d(t,{n:function(){return _}});var r=i(52322),a=i(27722),n=i(31129),s=i(4337),o=i(88169),l=i(86704),d=i(45455),c=i.n(d),p=i(2784),u=i(19596),m=i(31885),g=i(66724),f=i(11438),h=i(14438),x=i(6935),T=i(83163),b=i(48687),v=i(51378),y=i(27950);let _=e=>{let{interests:t,refCategoryPrefix:i,shovelerClassName:n}=e,l=(0,f.Lz)().value,{interestSingleLinkBuilder:d}=(0,g.WOb)(),u=(0,h.EJ)(),_=p.useContext(a.Theme).palette.baseColor,I=(0,b.hg)({weblabID:T.lh.IMDB_INTERESTS_VERIFICATION_1305020,treatments:{T1:!0}});if(!t||c()(t))return null;let E=[];return t.forEach(e=>{if(e.id&&e.primaryText){let t=e?.visibilityLevel!==m.atE.Public;(I||!t)&&E.push({id:e.id,primaryText:e.primaryText?.text,primaryImage:e.primaryImage,isHidden:t})}}),(0,r.jsx)(o.Shoveler,{className:n,onPageChange:u,arrowSize:"small",children:E.map((e,t)=>{let a=(0,x.K0)(e.primaryImage&&e.primaryImage.url?e.primaryImage:y.B,e.primaryText),n=[f.Cd.INTEREST,{t:f.Cd.POSTER,n:t+1}],o=[f.Cd.INTEREST,{t:f.Cd.TEXT,n:t+1}];i&&(n.unshift(i),o.unshift(i));let c=I&&e.isHidden;return(0,r.jsx)(s.SubGridItem,{span:3,children:(0,r.jsxs)(S,{className:_,children:[!!c&&(0,r.jsx)(C,{text:`Hidden Interest: ${e.id}`,type:"default",alignment:"left"}),(0,r.jsx)(w,{ariaLabel:e.primaryText,href:d({inconst:e.id,refSuffix:n}),imageProps:{imageModel:a,className:y.p},dynamicWidth:!0,children:(0,r.jsx)(v.$L,{interestId:e.id,buttonType:v.gK.CIRCLE_WITH_CHECK})}),(0,r.jsx)(j,{href:d({inconst:e.id,refSuffix:o}),title:e.primaryText,lineClamp:1})]})},`${l}-${e.id}`)})})},C=(0,u.styled)(o.Signpost).withConfig({componentId:"sc-61d23d62-0"})(["position:absolute;top:0;left:0;z-index:1000;"]),S=u.styled.div.withConfig({componentId:"sc-61d23d62-1"})(["",";margin-bottom:",";position:relative;&.base{box-shadow:0 3px 1px -2px rgb(0 0 0 / 20%),0 2px 2px 0 rgb(0 0 0 / 14%),0 1px 5px 0 rgb(0 0 0 / 12%);}&.baseAlt{",";}"],(0,l.setPropertyToShapeVar)("border-radius","ipt-mediaRadius"),l.spacing.s,(0,l.setPropertyToColorVar)("background","ipt-baseAlt-shade2-bg")),w=(0,u.styled)(o.Slate).withConfig({componentId:"sc-61d23d62-2"})(["position:relative;z-index:1;.","{border-bottom-left-radius:0;border-bottom-right-radius:0;}.add-interest-icon{position:absolute;bottom:0;left:0;z-index:2;margin-left:",";margin-bottom:",";}"],y.p,l.spacing.xs,l.spacing.xs),j=(0,u.styled)(n.SlateCardTitle).withConfig({componentId:"sc-61d23d62-3"})(["margin-left:",";margin-bottom:",";"],l.spacing.xs,l.spacing.xs)},27950:function(e,t,i){"use strict";i.d(t,{B:function(){return r},p:function(){return a}});let r={width:1280,height:720,url:"https://m.media-amazon.com/images/G/01/IMDb/Interests/interest_image_placeholder_dark.png"},a="slate-corners"},64411:function(e,t,i){"use strict";var r=i(52322),a=i(14865);i(2784);var n=i(88169),s=i(47130),o=i(10965),l=i(78814),d=i(25436),c=i(75824),p=i(16214),u=i(49996),m=i(55634),g=i(59002),f=i(66724),h=i(11438);let x=e=>{let{interestAllLinkBuilder:t}=(0,f.WOb)(),{pageType:i,subPageType:x}=(0,u.y)(),{data:T}=e,b=(0,c.N)({id:"popularInterests_title",defaultMessage:"Popular interests"}),v=i===d.PageType.INTEREST&&x===d.SubPageType.ALL,y=(0,p.b)(T?.popularInterests?.edges),_=!a.isNode&&e.fetching;return _||y&&0!==y.length?(0,r.jsx)(s.AU,{value:{cti:d.CTIS.INTERESTS_CTI},children:(0,r.jsx)(g.Lz,{componentId:m.NG.PopularInterests,children:(0,r.jsx)(n.PageGrid.Item,{span:3,children:(0,r.jsxs)(n.PageSection,{children:[(0,r.jsx)(n.SubSectionTitle,{href:v?void 0:t({refSuffix:h.Cd.SEE_MORE}),children:b}),(0,r.jsx)(o.Z,{loading:!!_,height:250,children:(0,r.jsx)(l.n,{interests:y})})]})})})}):null};t.Z=e=>(0,r.jsx)(h.xm,{value:h.Cd.POPULAR_INTERESTS,children:(0,r.jsx)(x,{...e})})},29363:function(e,t,i){"use strict";i.d(t,{T:function(){return s}});var r=i(2784),a=i(93855),n=i(99546);let s=(e,t)=>{let[i,s]=(0,r.useState)(!1),[o,l]=(0,r.useState)(!1);(0,r.useEffect)(()=>{i&&!o&&l(!0)},[i,o]);let d=(0,a.Jf)(e,o,s);return(0,n.S)(e,d,t),o}},96115:function(e,t,i){"use strict";i.d(t,{P:function(){return p}});var r=i(88169),a=i(2784),n=i(75824),s=i(66724),o=i(11438),l=i(72416),d=i(48687);let c="sxdshidesnack",p=e=>{let{sixDegreesLinkBuilder:t}=(0,s.WOb)(),i=(0,n.N)({id:"homepage_six_degrees_snack_msg",defaultMessage:"Try IMDb's new daily game Six Degrees."}),p=(0,n.N)({id:"homepage_six_degrees_snack_link",defaultMessage:"Play now"}),u=(0,d.hg)({weblabID:e,treatments:{T1:!0}}),{sendSnack:m}=(0,r.useSnackbar)(),g=(0,l.ID)(c);(0,a.useEffect)(()=>{u&&!g&&m({type:"manual",primaryText:i,textLinks:[{text:p,href:t({refSuffix:[o.Cd.SNACK,o.Cd.GAMES,o.Cd.SIX_DEGREES]}),onClick:()=>(0,l._2)(c,!0)}],closeLabel:"Close",onClose:()=>(0,l._2)(c,!0)})},[])}},30124:function(e,t,i){"use strict";var r=i(52322);i(2784);var a=i(10105),n=i(54588),s=i(14149);t.Z=function(e){let{groupConfig:t,pageQueryData:i,hideErrors:o,hasIntersected:l=!0}=e,{data:d,config:c,error:p,fetching:u=!1,retry:m,shouldRenderError:g=!1,allErrorsRetryable:f=!0}=i,h=!!(m&&f);return u||!l?(0,r.jsx)(a.ZP,{"data-testid":"entity-group-loader",height:"feature"}):o&&g?null:(0,r.jsxs)(r.Fragment,{children:[!!g&&(0,r.jsx)(s.ZP,{error:p,name:c?.queryName,canRetry:h,onClickRetry:()=>h&&m()}),!g&&Object.entries(t).map(e=>{let[t,i]=e;if(i.shouldRender&&d&&!1===i.shouldRender(d))return null;let a=i.component;return(0,r.jsx)(n.Z,{name:t,parent:"PageQueryEntity",children:(0,r.jsx)(a,{data:d,fetching:u,error:p})},t)})]})}},40040:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSP:function(){return r1},default:function(){return r2}});var r=i(52322),a=i(2784),n=i(25436),s=i(19596),o=i(88169),l=i(14865),d=i(4337),c=i(86704),p=i(10965),u=i(75824),m=i(16214),g=i(78716),f=i(55634),h=i(59002),x=i(66724),T=i(11438),b=i(14438),v=i(72779),y=i.n(v),_=i(30382),C=i.n(_),S=i(82925),w=i(15030),j=i(6935);let I=C()`
    fragment PopularCelebrity on Name {
        id
        nameText {
            text
        }
        primaryImage {
            caption {
                plainText
            }
            url
            height
            width
        }
        meterRanking {
            currentRank
            rankChange {
                changeDirection
                difference
            }
        }
    }
`,E={CARD:"popular-celebrity-card",CURRENT_RANK:"popular-celebrity-current-rank",NAME_TEXT:"popular-celebrity-name-text",RANK:"popular-celebrity-rank",RANK_CHANGE:"popular-celebrity-rank-change"},N=e=>{let{className:t,refMarkerSuffix:i,popularCelebrityData:n}=e,{nameMainLinkBuilder:s}=(0,x.WOb)(),l=(0,a.useContext)(S.Theme),d=y()(t,E.CARD),{id:c,primaryImage:p,meterRanking:u}=n,m=n.nameText?.text??"",g=(0,j.K0)(p,m);return(0,r.jsxs)(M,{className:d,href:s({nconst:c,refSuffix:i}),"data-testid":E.CARD,children:[(0,r.jsxs)(o.Avatar,{dynamicWidth:!0,children:[(0,r.jsx)(o.Avatar.Image,{imageModel:g}),(0,r.jsx)(o.Avatar.Overlay,{className:"overlayClasses"})]}),(0,r.jsxs)(P,{className:E.RANK,"data-testid":E.RANK,children:[(0,r.jsx)("div",{className:y()(E.CURRENT_RANK,`${E.CURRENT_RANK}--${l.palette.name}`),children:u?.currentRank}),u?.rankChange&&(0,r.jsxs)(k,{className:y()(E.RANK_CHANGE,`${E.RANK_CHANGE}--${l.palette.name}`),children:[" (",(0,r.jsx)(w.x,{difference:u?.rankChange.changeDirection==="FLAT"?void 0:u?.rankChange.difference,direction:u?.rankChange.changeDirection}),")"]})]}),(0,r.jsx)(A,{className:y()(E.NAME_TEXT,`${E.NAME_TEXT}--${l.palette.name}`),"data-testid":E.NAME_TEXT,children:m})]})},M=s.default.a.withConfig({componentId:"sc-5a012df2-0"})(["",";width:100%;text-align:center;overflow:hidden;display:flex;flex-direction:column;&:hover{opacity:0.7;}"],(0,c.setTypographyType)("body")),P=s.default.div.withConfig({componentId:"sc-5a012df2-1"})(["display:inline-flex;justify-content:center;width:100%;margin-top:",";line-height:1em;.","--light{",";padding-right:",";}.","--dark{",";padding-right:",";}.","--light{",";}.","--dark{",";}"],c.spacing.s,E.CURRENT_RANK,(0,c.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),c.spacing.xxs,E.CURRENT_RANK,(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),c.spacing.xxs,E.RANK_CHANGE,(0,c.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),E.RANK_CHANGE,(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),k=s.default.div.withConfig({componentId:"sc-5a012df2-2"})(["display:flex;align-items:center;"]),A=s.default.div.withConfig({componentId:"sc-5a012df2-3"})(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;&.","--light{",";}&.","--dark{",";}"],E.NAME_TEXT,(0,c.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),E.NAME_TEXT,(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"));N.fragments={popularCelebrity:I};let R=C()`
    query PopularCelebrities {
        topMeterNames(first: 50) {
            edges {
                node {
                    ...PopularCelebrity
                }
            }
        }
    }

    ${N.fragments.popularCelebrity}
`;var O=i(31885);let D=(e,t)=>e.filter(e=>e?.nameText&&e?.meterRanking?.rankChange?.changeDirection===O.UQd.Up).sort((e,t)=>(t.meterRanking?.rankChange?.difference||0)-(e.meterRanking?.rankChange?.difference||0)).slice(0,t),L={TITLE:"popular-celebrities-title",SHOVELER:"popular-celebrities-shoveler",ITEM_CARD:"popular-celebrities-item-card"},$=e=>{let{delayOnIntersection:t,csmOnLoadHandler:i,csaOnLoadHandler:n,cel_widget_id:s,className:d}=e,c=(0,a.useRef)(null),v=(0,b.EJ)(),{chartStarMeterLinkBuilder:y}=(0,x.WOb)(),_=(0,u.N)({id:"popularCelebrities_title",defaultMessage:"Most popular celebrities"}),C=(0,u.N)({id:"popularCelebrities_topRising_subHeader",defaultMessage:"Top rising"}),S=(0,u.N)({id:"popularCelebrities_topMeter_subHeader",defaultMessage:"By ranking"}),[w]=(0,g.p)({queryOptions:{query:R,context:{personalized:!1,serverSideCacheable:!0}},ref:c,pause:l.isNode,options:{disableIntersection:!t,disableAds:!0}});(0,h.LQ)(w,i,n);let{fetching:j,data:I,error:E}=w;if(E)return null;let N=(0,m.b)(I?.topMeterNames?.edges);if(!j&&(!N||0===N.length))return null;let M=D(N,2);return(0,r.jsx)(h.Lz,{componentId:f.NG.PopularCelebrities,children:(0,r.jsx)(o.PageSection,{"data-testid":s,className:d,children:(0,r.jsxs)("div",{ref:c,children:[(0,r.jsx)(o.SubSectionTitle,{href:y({refSuffix:T.Cd.SEE_MORE}),className:L.TITLE,children:_}),(0,r.jsx)(p.Z,{loading:j,height:230,children:(0,r.jsx)(G,{className:L.SHOVELER,onPageChange:v,children:[...B(M,T.Cd.TOP,C),...B(N,T.Cd.RANK,S,M.filter(e=>e.meterRanking?.currentRank&&e.meterRanking?.currentRank<=4))]})})]})})})},B=(e,t,i,a)=>{let n=1,s=a?.map(e=>e.id)??[],o=[];for(let a=0;a<e.length;a++){let l=e[a];if(!l.nameText||!l.meterRanking||s.includes(l.id))continue;let c=1===n?i:null,p=(0,r.jsx)(d.SubGridItem,{span:2,className:L.ITEM_CARD,children:(0,r.jsxs)("div",{children:[!!c&&(0,r.jsx)(F,{children:c}),(0,r.jsx)(N,{refMarkerSuffix:{t:t,n:n},popularCelebrityData:l,className:`${L.ITEM_CARD}-${t}-${n}`})]})},`${t}_${n}`);o.push(p),n++}return o};var V=e=>(0,r.jsx)(T.xm,{value:T.Cd.POPULAR_CELEBRITIES,children:(0,r.jsx)($,{...e})});let F=s.default.div.withConfig({componentId:"sc-790c21c3-0"})(["",";",";padding-bottom:",";white-space:nowrap;overflow:visible;"],(0,c.setPropertyToColorVar)("color","ipt-accent1-color"),(0,c.setTypographyType)("overline"),c.spacing.s),G=(0,s.default)(o.Shoveler).withConfig({componentId:"sc-790c21c3-1"})([".","{align-self:end;}"],L.ITEM_CARD);var W=i(21915),Z=i(86857),z=i(80380),q=i(55129),U=i(29914),H=i(22431),Q=i(82453),K=i(21768),Y=i(54588),X=i(96115),J=i(83163),ee=i(48687),et=i(82008),ei=i(20608),er=i(30124);let ea=(0,s.default)(o.PageGrid).withConfig({componentId:"sc-42bf884a-0"})(["",""],(0,c.setPropertyToColorVar)("background","ipt-baseAlt-bg"));var en=i(64934);let es=e=>{let t=[],i=1,r=1;for(let a=0;a<30;a+=1)eo(a)?(t.push({name:`geo-${e}-${i}`,isGeo:!0,slotNumber:i}),i++):(t.push({name:`${e}-${r}`,isGeo:!1,slotNumber:r}),r++);return t},eo=e=>e<=3||(!(e>24)||!(e<29))&&e%2==1;var el=i(40158),ed=e=>{let t=e.carouselTitle,i=e.carouselDescription,a=e.slotNamePrefix,n=e.refMarkerPrefix,s=(0,b.EJ)(n),l=es(a).map(e=>(0,r.jsx)(el.Z,{slotName:e.name,className:"editorial-item",refMarker:{prefix:n,suffix:`${e.isGeo?"geo_":""}${e.slotNumber}`}},a+"-editorial-item-"+e.slotNumber));return(0,r.jsxs)(r.Fragment,{children:[!!t&&(0,r.jsx)(o.SubSectionTitle,{description:i,children:t}),(0,r.jsx)(o.Shoveler,{className:"editorial-carousel",onPageChange:s,children:l})]})},ec=i(73013);let ep=e=>{let t=e+"-mso";return!(0>Object.values((0,ec.S)()).findIndex(e=>t===e.symphonyMetadata?.msoGroupName))},eu=e=>{let{slotNamePrefix:t,title:i,description:a}=e,n=(0,T.Lz)().value,s=ep(t),l=ep(`geo-${t}`);if(!s&&!l)return null;let d=i?void 0:"none";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(en.P,{id:t}),(0,r.jsx)(o.PageSection,{topPadding:d,bottomPadding:d,children:(0,r.jsx)(ed,{carouselTitle:i,carouselDescription:a,slotNamePrefix:t,refMarkerPrefix:n})})]})};var em={imdbOriginals:{component:()=>{let e=(0,u.N)({id:"editorialCarousel_imdb_originals",defaultMessage:"IMDb Originals"}),t=(0,u.N)({id:"editorialCarousel_imdb_originals_description",defaultMessage:"Celebrity interviews, trending entertainment stories, and expert analysis"});return(0,r.jsx)(T.xm,{value:T.Cd.EDITORIAL_CAROUSEL_IMDB_ORIG,children:(0,r.jsx)(eu,{slotNamePrefix:"imdb-originals",title:e,description:t})})}}},eg=e=>{let{pageQueryData:t}=e;return(0,r.jsx)(Y.Z,{name:"ExclusiveVideos",children:(0,r.jsx)(ea,{className:"page-grid",children:(0,r.jsx)(o.PageGrid.Item,{span:3,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(o.CategoryTitle,{children:(0,r.jsx)(ei.q,{id:"homepage_main_category_exclusiveVideos",defaultMessage:"Exclusive videos"})}),(0,r.jsx)(er.Z,{groupConfig:em,pageQueryData:t,hideErrors:!1})]})})})})},ef=i(29363),eh=i(85846),ex=i(46138),eT=i(68557),eb=i(84220),ev=i(27722),ey=i(65991),e_=i(12563);let eC=e=>{let{boxOfficeData:t}=e,{makeRefMarker:i}=(0,T.Lz)(),a=(0,ex.Z)(),{onClick:n,ariaLabel:s,isInWatchlist:o,isPending:l}=(0,e_.X)(t.titleId,i({t:T.Cd.WATCHLIST_RIBBON,n:t.rankNumber})),d={titleName:t.titleName,secondaryText:(0,r.jsxs)(ev.InlineList,{showDividers:!0,children:[(0,r.jsx)(ev.InlineListItem,{children:t.weekendGrossAmount}),!!t.lifeTimeGrossAmount&&(0,r.jsx)(ev.InlineListItem,{children:a.formatMessage({id:"boxOffice_lifetime_gross",defaultMessage:"Total {totalGross}"},{totalGross:t.lifeTimeGrossAmount})})]}),titlePageLink:t.titlePageLink,preElement:(0,r.jsx)(ev.WatchlistRibbon,{size:"m",className:"shrink-0",onClick:n,ariaLabel:s,isLoading:l,inWatchlist:o}),rankNumber:t.rankNumber,postElement:t.showtimesLink?(0,r.jsx)(ev.IconButton,{className:"boxOffice-showtimes-link",name:"ticket",href:t.showtimesLink,label:a.formatMessage({id:"boxOffice_tickets_label",defaultMessage:"{title} showtimes link"},{title:t.titleName}),onColor:"accent2"}):void 0};return(0,r.jsx)(ey.p,{...d})};var eS=i(97556);let ew=e=>{let t=e.data,i=(0,ex.Z)(),{chartBoxOfficeLinkBuilder:a}=(0,x.WOb)(),n=(0,eS.I)(t),s=(0,eS.X)(t,i),o=(0,u.N)({id:"topBoxOffice_header_top_us",defaultMessage:"Top box office (US)"}),l=s?i.formatMessage({id:"topBoxOffice_header_description_date",defaultMessage:"Weekend of {dateRange}"},{dateRange:s}):"",d=(0,eb.JY)({id:"top-box-office",height:"other",title:o,description:l,link:a({refSuffix:T.Cd.SEE_MORE}),shouldRender:()=>n.length>4},e),c=n.map(e=>(0,r.jsx)(eC,{boxOfficeData:e},e.titleId));return(0,r.jsx)(eb.GN,{...d,children:(0,r.jsx)(ej,{"data-testid":"boxOfficeList",children:(0,r.jsx)(eT.i,{displayStyle:"dynamic",children:c})})})},ej=s.default.div.withConfig({componentId:"sc-773ed27b-0"})(["","{display:flex;}"],c.mediaQueries.breakpoints.above.s);var eI=e=>(0,r.jsx)(T.xm,{value:T.Cd.TOP_BOX_OFFICE,children:(0,r.jsx)(ew,{...e})});let eE=C()`
    fragment TopBoxOfficeTitle on Title {
        id
        titleText {
            text
        }
        titleType {
            text
        }
        originalTitleText {
            text
        }
        series {
            series {
                titleText {
                    text
                }
                originalTitleText {
                    text
                }
            }
        }
        cinemas(first: 0, request: { location: $location }) {
            total
        }
        lifetimeGross(boxOfficeArea: DOMESTIC) {
            total {
                amount
                currency
            }
        }
    }
`,eN=C()`
    fragment TopBoxOffice on Query {
        boxOfficeWeekendChart(limit: 6) {
            weekendStartDate
            weekendEndDate
            entries {
                title {
                    ...TopBoxOfficeTitle
                }
                weekendGross {
                    total {
                        amount
                        currency
                    }
                }
            }
        }
    }

    ${eE}
`;var eM=i(85018),eP=i(86958);let ek=()=>{let e=new Date;return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()+1).toISOString().split("T")[0]};var eA=i(4363),eR=i(20937),eO=i(11778),eD=i(31129),eL=i(69380),e$=i(22073);let eB=(0,s.default)(eL.Q).withConfig({componentId:"sc-e7a6d986-0"})(["padding-left:2.75rem;"]),eV=(0,s.default)(o.TextLink).withConfig({componentId:"sc-e7a6d986-1"})(["padding-left:0;padding-bottom:0;"]);var eF=e=>{let t=(0,ex.Z)(),{slotNumber:i,model:{titleText:a,titleId:n,releaseDate:s,slate:o,runtimeSeconds:l,videoId:d,hasShowtimes:c}}=e,{makeRefMarker:p}=(0,T.Lz)(),{showtimesTitleLinkBuilder:u,titleMainLinkBuilder:m,videoSingleLinkBuilder:g}=(0,x.WOb)(),{onClick:f,ariaLabel:h,isInWatchlist:b,isPending:v}=(0,e_.X)(n,p({t:T.Cd.WATCHLIST_RIBBON,n:i+1})),y=a+" "+t.formatMessage({id:"comingSoon_trailer_ariaLabel_suffix",defaultMessage:"trailer"}),_=t.formatMessage({id:"comingSoon_get_tickets",defaultMessage:"Get tickets"}),C=g({viconst:d,refSuffix:{t:T.Cd.POSTER,n:i}}),S={title:a,href:m({tconst:n,refSuffix:{t:T.Cd.TEXT,n:i}}),subtitle:t.formatDate(s,{month:"short",day:"numeric"})},w={ariaLabel:y,imageProps:{aspectRatio:"16:9",imageModel:o},overlayProps:{gradientType:"radial",iconName:"play-circle-outline",text:(0,e$.L)(l)},href:C},j={children:c&&(0,r.jsx)(eV,{"data-testid":"coming-soon-ticket-link",text:_,href:u({tconst:n,refSuffix:{t:T.Cd.EMPTY,n:i}}),touchTarget:!0})},I=(0,r.jsx)(eB,{associatedConstId:d,entityType:"video"});return(0,r.jsx)(eD.SlateCard,{className:"coming-soon-title",watchlistProps:{size:"m",onClick:f,ariaLabel:h,isLoading:v,inWatchlist:b},titleProps:S,slateProps:w,actionProps:j,dynamicWidth:!0,size:"s",children:I})};let eG={id:"comingSoon_trailers_for_upcoming_releases",defaultMessage:"Trailers for upcoming releases"},eW={id:"comingSoon_coming_soon_to_theaters",defaultMessage:"Coming soon to theaters"},eZ={id:"comingSoon_add_to_watchlist_for_notifications",defaultMessage:"Add to Watchlist for notifications"},ez={id:"comingSoon_watch_soon_at_home",defaultMessage:"Watch soon at home"};var eq=e=>{let{fetching:t,titles:i,comingSoonType:a}=e,n=(0,ex.Z)(),{calendarLinkBuilder:s}=(0,x.WOb)(),l=(0,b.EJ)(),d=a===O.M4k.Movie,c=i.map((e,t)=>(0,r.jsx)(eF,{slotNumber:t+1,model:e},e.titleId)),{link:p,description:u,title:m}=d?{description:n.formatMessage(eG),title:n.formatMessage(eW),link:s({refSuffix:T.Cd.SEE_MORE})}:{description:n.formatMessage(eZ),title:n.formatMessage(ez),link:void 0},g=("coming-soon-"+a).toLowerCase(),f=(0,eb.JY)({id:g,height:"video-slates",title:m,description:u,link:p,shouldRender:()=>(0,eO.isDevStage)()?i.length>0:i.length>5},{fetching:t});return(0,r.jsx)(eb.GN,{...f,children:(0,r.jsx)(o.Shoveler,{className:"coming-soon-titles",onPageChange:l,children:c})})};let eU=(e,t)=>{if(!e)return[];switch(t){case O.M4k.Tv:return e.comingSoonTV?.edges;case O.M4k.Movie:default:return e.comingSoonMovie?.edges}},eH=e=>{let{fetching:t,data:i,type:a}=e,n=eU(i,a),s=(0,m.b)(n).reduce((e,t)=>{let{titleText:i,latestTrailer:r,releaseDate:a}=t;if(!i||!r||!a)return e;let{month:n,day:s,year:o}=a;if(!n||!s||!o)return e;let{runtime:l,thumbnail:d,name:{value:c}}=r;if(!l)return e;let p=new Date(o,n-1,s,0,0,0,0),u=t.meterRanking?.currentRank;return e.push({titleId:t.id,titleText:i.text,videoId:r.id,releaseDate:p,runtimeSeconds:l.value,slate:{caption:c,maxHeight:d.height,maxWidth:d.width,url:d.url},currentRank:u,hasShowtimes:(t.cinemas?.total??0)>0}),e},[]);return(0,r.jsx)(eq,{fetching:!!t,comingSoonType:a,titles:s})};var eQ=e=>(0,r.jsx)(T.xm,{value:e.type===O.M4k.Movie?T.Cd.COMING_SOON:T.Cd.COMING_SOON_TV,children:(0,r.jsx)(eH,{...e})});let eK=C()`
    query comingSoonMovieQuery(
        $movieReleasingOnOrAfter: Date!
        $movieViewerLocation: ShowtimesLocation!
        $regionOverride: String!
    ) {
        comingSoonMovie: comingSoon(
            first: 50
            comingSoonType: MOVIE
            releasingOnOrAfter: $movieReleasingOnOrAfter
            regionOverride: $regionOverride
            sort: [{ sortBy: POPULARITY, sortOrder: ASC }]
        ) {
            edges {
                node {
                    ...BaseTitleCard
                    ...TitleCardTrailer
                    releaseDate {
                        day
                        month
                        year
                    }
                    latestTrailer {
                        name {
                            value
                        }
                        runtime {
                            value
                        }
                        thumbnail {
                            height
                            width
                            url
                        }
                    }
                    cinemas(
                        first: 0
                        request: { location: $movieViewerLocation }
                    ) {
                        total
                    }
                    meterRanking {
                        currentRank
                    }
                }
            }
        }
    }
    ${eM.sq}
    ${eM.F4}
`,eY=(0,eR.O)({query:()=>{let e=ek(),t=(0,eh.wT)(),i=eP.B().context.sidecar?.localizationResponse.userCountryCode??"US",[r]=(0,eA.E)({query:eK,variables:{movieReleasingOnOrAfter:e,movieViewerLocation:t,regionOverride:i},context:{personalized:!0,serverSideCacheable:!1,clientSideBatch:!1}});return r},component:e=>{let t={...e,type:O.M4k.Movie};return(0,r.jsx)(eQ,{...t})}});var eX=i(78270),eJ=i(23842),e0=i(49175);let e1=e=>{let{classname:t,items:i,buttonText:a}=e,{showtimesTitleLinkBuilder:n}=(0,x.WOb)(),{createPrompt:s}=(0,e0.V1)(),l=(0,b.EJ)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Shoveler,{onPageChange:l,children:i.map((e,i)=>(0,r.jsx)(eJ.c,{className:t,data:e,index:i+1,alternateButton:e2(a,e,i,n)},e.id))}),s()]})},e2=(e,t,i,r)=>({text:e,props:{ariaLabel:e,preIcon:"ticket",href:r({tconst:t.id,refSuffix:{t:T.Cd.EMPTY,n:i+1}})}}),e4=e=>{let{showtimesLinkBuilder:t}=(0,x.WOb)(),i=(0,m.b)(e.data?.showtimesTitles?.edges).slice(0,30);(0,eX.b)(i);let a=(0,u.N)({id:"in_theaters_title",defaultMessage:"In theaters"}),n=(0,u.N)({id:"in_theaters_description",defaultMessage:"Showtimes near you"}),s=(0,u.N)({id:"in_theaters_showtimes_button_text",defaultMessage:"Showtimes"}),o=(0,eb.JY)({id:"in-theaters",height:"title-cards",title:a,description:n,link:t({refSuffix:T.Cd.SEE_MORE}),shouldRender:()=>i.length>5},e);return(0,r.jsx)(eb.GN,{...o,children:(0,r.jsx)(e1,{classname:"in-theaters-title",items:i,buttonText:s})})};var e3=e=>(0,r.jsx)(T.xm,{value:T.Cd.IN_THEATERS,children:(0,r.jsx)(e4,{...e})});let e8=C()`
    query InTheatersHomepage($inTheatersLocation: ShowtimesLocation!) {
        showtimesTitles(
            first: 30
            location: $inTheatersLocation
            queryMetadata: { sortField: SHOWTIMES_COUNT, sortOrder: DESC }
        ) {
            edges {
                node {
                    ...BaseTitleCard
                    ...TitleCardTrailer
                }
            }
        }
    }
    ${eM.sq}
    ${eM.F4}
`;var e6={InTheatersEntity:(0,eR.O)({query:()=>{let e=(0,eh.wT)(),[t]=(0,eA.E)({query:e8,variables:{inTheatersLocation:e},context:{personalized:!0,serverSideCacheable:!1,clientSideBatch:!1}});return t},component:e=>(0,r.jsx)(e3,{...e})}),TopBoxOfficeEntity:{component:e=>(0,r.jsx)(eI,{...e}),shouldRender:()=>!0,fragment:{name:"TopBoxOffice",variables:e=>{let{requestContext:t}=e;return{location:{value:(0,eh.QJ)(t),type:"ShowtimesLocation!"}}},gql:eN}},ComingSoonMovieEntity:eY},e5=e=>{let{pageQueryData:t}=e,i=a.useRef(null),n=(0,ef.T)(i,{root:null,threshold:0,rootMargin:"200px"});return(0,r.jsx)(Y.Z,{name:"ExploreMoviesAndTV",children:(0,r.jsx)("div",{ref:i,children:(0,r.jsxs)(ea,{className:"page-grid",children:[(0,r.jsx)(o.PageGrid.Item,{span:3,children:(0,r.jsx)(o.CategoryTitle,{"data-testid":"exploreMoviesAndTv_title",children:(0,r.jsx)(ei.q,{id:"homepage_main_category_exploreMoviesAndTV",defaultMessage:"Explore Movies & TV shows"})})}),(0,r.jsx)(er.Z,{groupConfig:e6,pageQueryData:t,hasIntersected:n})]})})})},e7=i(70689),e9=i(41174),te=i(74029);let tt=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(0,a.useMemo)(()=>{if(!e.length||!t.length)return e;let i=t.map(e=>e.id),r=[],a=[];return e.forEach(e=>{i.includes(e.id)?r.push(e):a.push(e)}),r.sort((e,t)=>i.indexOf(e.id)-i.indexOf(t.id)),[...r,...a]},[e,t])},ti=(e,t,i)=>{let r=t.findIndex(e=>e.provider.id===i);if(r<0)return"unknown";let a=t[r].provider.refTagFragment;return`${e}_${a}_tab_${r+1}`};var tr=i(54137),ta=i(14911);let tn={ParamountPlus:"amzn1.imdb.w2w.provider.cbs_aa",AMC_PLUS:"amzn1.imdb.w2w.provider.amcplus",PrimeVideo:"amzn1.imdb.w2w.provider.prime_video.PRIME",Netflix:"amzn1.imdb.w2w.provider.netflix",AppleTV:"amzn1.imdb.w2w.provider.appletv",Hulu:"amzn1.imdb.w2w.provider.hulu",HBO_MAX:"amzn1.imdb.w2w.provider.hbo_max",Peacock:"amzn1.imdb.w2w.provider.peacock",Starz:"amzn1.imdb.w2w.provider.starz",Showtimes:"amzn1.imdb.w2w.provider.showtime"},ts=C()`
    query StreamingPicks_WatchNow($titleIds: [ID!]!, $providerId: ID!) {
        titles(ids: $titleIds) {
            id
            watchOption(providerId: $providerId) {
                link(platform: WEB)
                provider {
                    refTagFragment
                }
            }
        }
    }
`,to=()=>({watchNowText:(0,u.N)({id:"common_buttons_watchNow",defaultMessage:"Watch now"}),includedWithPrimeText:(0,u.N)({id:"streamingPicks_providerDescription_withPrime",defaultMessage:"included with Prime"}),withSubscriptionText:(0,u.N)({id:"streamingPicks_providerDescription_withSubscription",defaultMessage:"with subscription"}),onHuluText:(0,u.N)({id:"streamingPicks_providerDescription_onHulu",defaultMessage:"on Hulu.com and the Hulu app"}),withPrimeVideoChannelsText:(0,u.N)({id:"streamingPicks_providerDescription_withPrimeVideoChannels",defaultMessage:"with Prime Video Channels"})}),tl=(e,t)=>{let i=e.map(e=>e.title.id),[r]=(0,eA.E)({query:ts,variables:{titleIds:i,providerId:t},context:{personalized:!1,serverSideCacheable:!0}}),a=r.fetching?{}:r?.data?.titles.reduce((e,t)=>(t?.id&&(e[t?.id]=t?.watchOption),e),{})||{};return{fetching:r.fetching,byTitle:a}},td=e=>{let{tabIndex:t,providerId:i,providerDescription:a,streamingTitles:n}=e,s=(0,T.Lz)().value,{adPreferencesLinkBuilder:l}=(0,x.WOb)(),d=to(),c=tl(n,i),p=(0,Q.Ok)().adSlotsInfo,u=(0,b.EJ)(),m=(0,ta.Z)();(0,eX.b)(n.map(e=>e.title));let g=(e,t)=>{let i=c.byTitle[e],r={id:e,prefix:s,suffix:`tt_${t+1}`};return i?m({titleId:e,watchOption:i,refMarker:r,adSlotsInfo:p}):{}},f=(e,t,i)=>{let r=g(e,i);if(0!==Object.keys(r).length||c.fetching)return{props:{...r,className:"title-watchnow-button"},text:d.watchNowText,fetching:c.fetching}},h=tc((e=>{switch(e){case tn.PrimeVideo:return d.includedWithPrimeText;case tn.Netflix:case tn.AppleTV:case tn.HBO_MAX:case tn.AMC_PLUS:case tn.Peacock:case tn.ParamountPlus:return d.withSubscriptionText;case tn.Hulu:return d.onHuluText;case tn.Starz:case tn.Showtimes:return d.withSubscriptionText;default:return""}})(i),a);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(tp,{className:"streaming-picks-description",children:[h,i===tn.ParamountPlus&&0===t&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(tr.$,{includeSpacingDot:!0,adFeedbackUrl:l({refSuffix:T.Cd.EMPTY}),inheritFontSize:!0})})]}),(0,r.jsx)(o.Shoveler,{onPageChange:u,children:n.map((e,t)=>(0,r.jsx)(eJ.c,{refTagFromGraph:c.byTitle[e.title.id]?.provider.refTagFragment,index:t+1,className:"streaming-picks-title",data:e.title,alternateButton:f(e.title.id,i,t)},e.title.id))},`${t}-${i}`)]})},tc=(e,t)=>{let i=e||t;return i?`${i[0].toLowerCase()}${i.slice(1)}`:""},tp=s.default.p.withConfig({componentId:"sc-14743c42-0"})(["",";margin-bottom:1rem;"],(0,c.setPropertyToSpacingVar)("margin-left","ipt-pageMargin")),tu=e=>{let{providerPicks:t,preferredWatchProviders:i=[]}=e,n=(0,T.Lz)().value,s=(0,b.EO)(),l=tt(t.map(e=>({id:e.provider.id,label:e.provider.name.value})),i),[d,c]=(0,a.useState)(l[0]?.id);if(t.length<1)return null;let p=tm(t,d);return p?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tf,{"data-testid":"streaming-picks-tab-container",children:(0,r.jsx)(o.Tabs,{className:"streaming-picks-tabs",tabs:l,onChange:e=>{c(e),tg(n,t,e,s)}},"tabs")}),(0,r.jsx)("div",{"data-testid":"streaming-picks-shoveler",children:(0,r.jsx)(td,{...p})})]}):null},tm=(e,t)=>{if(!t)return null;let i=e.findIndex(e=>e.provider.id===t);if(-1===i)return null;let r=e[i];return{tabIndex:i,providerId:t,providerDescription:r.provider.description?.value,streamingTitles:r.titles}},tg=(e,t,i,r)=>{r({refMarkerString:ti(e,t,i),pageAction:"tab-select"})},tf=s.default.div.withConfig({componentId:"sc-a3458b00-0"})(["",";margin-bottom:1rem;"],(0,c.setPropertyToSpacingVar)("margin-left","ipt-pageMargin")),th=e=>{let t=tx(e.data),i=tT(e.data),a=(0,eb.JY)({id:"streaming-picks",height:"title-cards",shouldRender:()=>t.length>0},e);return(0,r.jsx)(eb.GN,{...a,children:(0,r.jsx)(tu,{providerPicks:t,preferredWatchProviders:i})})},tx=e=>e&&e.streamingTitles?e.streamingTitles.filter(e=>e.provider&&e.titles&&e.titles.edges.length>0).map(e=>({provider:e.provider,titles:(0,m.b)(e.titles?.edges||[])})):[],tT=e=>(0,m.b)(e?.user?.preferredStreamingProviders.streamingProviders.edges);var tb=e=>(0,r.jsx)(T.xm,{value:T.Cd.STREAMING_PICKS,children:(0,r.jsx)(th,{...e})});let tv=C()`
    query HomepageStreamingPicks(
        $includeUserPreferredServices: Boolean! = false
    ) {
        streamingTitles {
            provider {
                id
                name {
                    value
                }
                description {
                    value
                }
                refTagFragment
            }
            titles(first: 25) {
                edges {
                    node {
                        title {
                            ...BaseTitleCard
                            ...TitleCardTrailer
                        }
                    }
                }
            }
        }
        user @include(if: $includeUserPreferredServices) {
            ...UserPreferredServices
        }
    }
    ${eM.sq}
    ${eM.F4}
    ${te.R}
`,ty=(0,eR.O)({query:e=>{let{isLoggedIn:t}=e??{},[i]=(0,eA.E)({query:tv,variables:{includeUserPreferredServices:t},context:{personalized:t||!1,serverSideCacheable:!1,clientSideBatch:!1}});return i},component:e=>(0,r.jsx)(tb,{...e})}),t_={id:"homepage_main_category_exploreStreaming",defaultMessage:"Explore what’s streaming"},tC={editPreferredServicesButton:"exploreStreaming_editPreferredServicesButton",exploreStreamingtitle:"exploreStreaming_title",setYourPreferredServicesButton:"exploreStreaming_setYourPreferredServicesButton"};var tS={StreamingPicksEntity:ty},tw=e=>{let{pageQueryData:t}=e,i=(0,e9.nu)(),n=a.useRef(null),s=(0,ef.T)(n,{root:null,threshold:0,rootMargin:"300px"});return(0,r.jsx)(Y.Z,{name:"ExploreStreaming",children:(0,r.jsx)("div",{ref:n,children:(0,r.jsxs)(ea,{className:"page-grid",children:[(0,r.jsx)(o.PageGrid.Item,{span:3,children:(0,r.jsx)(o.CategoryTitle,{"data-testid":tC.exploreStreamingtitle,actions:(0,r.jsx)(tj,{refSuffix:[T.Cd.STREAMING_PICKS,T.Cd.BUTTON],"data-testid":i?tC.editPreferredServicesButton:tC.setYourPreferredServicesButton}),children:(0,r.jsx)(ei.q,{...t_})})}),(0,r.jsx)(er.Z,{groupConfig:tS,pageQueryData:t,hasIntersected:s})]})})})};let tj=(0,s.default)(e7.Z).withConfig({componentId:"sc-46dcef98-0"})(["","{margin-top:",";}"],c.mediaQueries.breakpoints.below.m,c.spacing.m);var tI=i(82153),tE=i(88854),tN={featuredToday:{component:()=>(0,r.jsx)(T.xm,{value:T.Cd.EDITORIAL_CAROUSEL_FEATURED,children:(0,r.jsx)(eu,{slotNamePrefix:"featured-today"})})},eventOscars:{component:()=>{let e=(0,u.N)({id:"editorialCarousel_special_event",defaultMessage:"Spotlight: Oscars (2020)"});return(0,r.jsx)(T.xm,{value:T.Cd.EDITORIAL_CAROUSEL_OSCARS,children:(0,r.jsx)(eu,{slotNamePrefix:"event-oscars",title:e})})}}};let tM=(0,tI.vU)({title:{id:"homepage_main_category_featuredToday",defaultMessage:"Featured today"}});var tP=e=>{let{pageQueryData:t}=e,i=(0,ex.Z)(),a=(0,tE.kp)().isValid;return(0,r.jsx)(Y.Z,{name:"FeaturedToday",children:(0,r.jsxs)(ea,{className:"page-grid",children:[(0,r.jsx)(o.PageGrid.Item,{span:2,children:(0,r.jsxs)(o.PageSection,{children:[a&&(0,r.jsx)(o.CategoryTitle,{children:i.formatMessage(tM.title)}),(0,r.jsx)(er.Z,{groupConfig:tN,pageQueryData:t,hideErrors:!1})]})}),(0,r.jsx)(o.PageGrid.Item,{span:1,children:(0,r.jsx)(q.ZP,{name:H.A.INLINE40})})]})})},tk=i(76857),tA=i(95746);let tR=e=>Object.keys(e).filter(t=>{let i=e[t].transformedArguments;return(0,tA.J)(i?.errors)});var tO=i(23906),tD=i(24391);let tL=Object.freeze({slidesPerView:1,effect:"slide",autoplay:{delay:5e3},loop:!0,observer:!0,threshold:20});var t$=i(81611),tB=i(60258),tV=i(99672),tF=i(1833);let tG=s.default.div.withConfig({componentId:"sc-9b43ec2b-0"})(["height:52px;"]),tW=s.default.div.withConfig({componentId:"sc-9b43ec2b-1"})(["height:","px;overflow:hidden;position:relative;","{height:","px;}"],444,c.mediaQueries.breakpoints.only.l,339),tZ=s.default.div.withConfig({componentId:"sc-9b43ec2b-2"})(["position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;background:linear-gradient( 0deg,transparent 0%,transparent 50%,rgba(",",0.7) 78%,rgba(",",1) 100% );.editorial-slots{height:100%;display:flex;flex-direction:column;top:-","px;position:absolute;width:100%;","{top:-","px;}}"],(0,c.getColorVar)("ipt-baseAlt-shade3-rgb"),(0,c.getColorVar)("ipt-baseAlt-shade3-rgb"),296,c.mediaQueries.breakpoints.only.l,226),tz=(0,s.default)(o.Poster.Image).withConfig({componentId:"sc-9b43ec2b-3"})(["height:100%;width:100%;left:0;bottom:0;img{height:100%;width:100%;}"]),tq=s.default.div.withConfig({componentId:"sc-9b43ec2b-4"})(["padding:0px 16px;flex:0 0 ","px;","{flex:0 0 ","px;}width:100%;position:relative;overflow:hidden;transition:all 300ms;&.transit-enter{flex-basis:0;}&.transit-enter-active{flex-basis:","px;","{flex-basis:","px;}}&.transit-exit{flex-basis:","px;","{flex-basis:","px;}}&.transit-exit-active{flex-basis:0;}"],113,c.mediaQueries.breakpoints.above.xl,148,113,c.mediaQueries.breakpoints.above.xl,148,113,c.mediaQueries.breakpoints.above.xl,148),tU=s.default.div.withConfig({componentId:"sc-9b43ec2b-5"})(["left:16px;bottom:0;width:88px;padding-top:16px;","{width:67px;}"],c.mediaQueries.breakpoints.only.l),tH=s.default.a.withConfig({componentId:"sc-9b43ec2b-6"})(["&:hover{cursor:pointer;.editorial-play-icon{",";}}position:absolute;top:0;right:0;left:112px;","{left:83px;padding:16px 8px 0;overflow:hidden;text-decoration:none;}padding:18px 8px 0;overflow:hidden;text-decoration:none;",";"],(0,c.setPropertyToColorVar)("color","ipt-on-base-accent1-color"),c.mediaQueries.breakpoints.only.l,(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),tQ=s.default.div.withConfig({componentId:"sc-9b43ec2b-7"})(["flex:0;width:100%;text-align:left;position:relative;"]),tK=(0,s.default)(tQ).withConfig({componentId:"sc-9b43ec2b-8"})(["margin-bottom:3px;&.reactions{display:flex;align-items:flex-end;margin-bottom:10px;","{margin-bottom:6px;}}"],c.mediaQueries.breakpoints.only.l),tY=(0,s.default)(tQ).withConfig({componentId:"sc-9b43ec2b-9"})(["max-height:40px;"]),tX=(0,s.css)(["",";text-align:start;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"],(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),tJ=s.default.span.withConfig({componentId:"sc-9b43ec2b-10"})([""," ",";font-weight:400;width:100%;display:inline-block;",";white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;max-height:40px;"],tX,(0,c.setTypographyType)("subtitle"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-color")),t0=s.default.span.withConfig({componentId:"sc-9b43ec2b-11"})([""," ",";width:100%;display:inline-block;&.reactions{display:block;","{display:none;}}"],tX,(0,c.setTypographyType)("bodySmall"),c.mediaQueries.breakpoints.only.l),t1=(0,s.default)(eL.I).withConfig({componentId:"sc-9b43ec2b-12"})(["margin-left:0;margin-top:4px;","{margin-bottom:0;margin-top:2px;}"],c.mediaQueries.breakpoints.only.l),t2=s.default.span.withConfig({componentId:"sc-9b43ec2b-13"})(["&:not(.reactions){"," ",";display:inline-block;}&.reactions{",";",";}"],tX,(0,c.setTypographyType)("bodySmall"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"),(0,c.setTypographyType)("bodySmall")),t4=s.default.span.withConfig({componentId:"sc-9b43ec2b-14"})([""," ",";display:block;width:100%;padding:4px 0;",";text-align:left;"],tX,(0,c.setTypographyType)("headline6"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color")),t3=(0,s.css)(["height:32px;width:32px;&.reactions{","{height:28px;width:28px;}}margin-right:8px;",";"],c.mediaQueries.breakpoints.only.l,(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-color")),t8=(0,s.default)(o.Icon).withConfig({componentId:"sc-9b43ec2b-15"})(["",""],t3);(0,s.default)(o.Icon).withConfig({componentId:"sc-9b43ec2b-16"})(["color:#cf1f4a;",""],t3);let t6=(e,t)=>(t+e%t)%t,t5=e=>{let{transformedArguments:t}=e;if(t)return t.promotedVideoData&&(t=t.promotedVideoData),{imageModel:t.posterImage,titleText:t.headline}},t7=e=>{let{transformedArguments:t}=e;return t?(t.promotedVideoData&&(t=t.promotedVideoData),{runtime:t.runtime,videoTitle:t.subHeadline,videoId:t.videoId,videoContentType:t.videoContentType,listId:t.listId}):void 0},t9=(e,t,i)=>{let r=t[e]?.slotName,a=i.transformedPlacements[r];if(!a)return;let n=t5(a),s=t7(a),o=a.transformedArguments?.promotedVideoData?.adData,l=`${e}-${Math.random()}`;return{slotIndex:e,peekImageModel:n,peekVideoSlateModel:s,adData:o,key:l}},ie=(e,t,i)=>t===t6(e-1,i)?-1:t6(t-e,i),it=(e,t,i)=>{let r=t.length,a=[],n=e+-1;for(let e=n;e<n+6;e+=1){let n=t9(t6(e,r),t,i);n&&a.push(n)}return a},ii=(e,t,i,r)=>{let a=i.length,n=t.slice();if(e<0)for(let t=e;t<0;t+=1){let e=t6(n[0]?.slotIndex-1,a);n.unshift(t9(e,i,r)),n.pop()}else if(e>0)for(let t=0;t<e;t+=1){let e=t6(n[n.length-1]?.slotIndex+1,a);n.push(t9(e,i,r)),n.shift()}return n};var ir=e=>{let{slots:t,swiper:i}=e,{videoSingleLinkBuilder:n}=(0,x.WOb)(),[s,o]=(0,a.useState)(0),l=(0,tV.Z)(s),d=(0,tE.kp)(),{makeRefMarker:c}=(0,T.Lz)(),p=(0,u.N)({id:"hero_video_up_next",defaultMessage:"Up next"}),m=it(0,t,d),[g,f]=(0,a.useState)(m),h=t.length;(0,a.useEffect)(()=>{if(i)return i.on("slideChangeTransitionStart",e),function(){i.off("slideChangeTransitionStart",e)};function e(){let{realIndex:e}=this;o(e)}},[i]),(0,a.useEffect)(()=>{f(ii(ie(l||0,s,h),g,t,d))},[s]);let b=(0,a.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tG,{children:(0,r.jsx)(t4,{children:p})}),(0,r.jsx)(tW,{children:(0,r.jsx)(tZ,{children:(0,r.jsx)(tB.Z,{className:"editorial-slots",children:g.map(e=>{let t;if(!e)return null;let{slotIndex:i,peekImageModel:a,peekVideoSlateModel:s,adData:o,key:l}=e,{runtime:d,videoId:p,videoTitle:u,listId:m}=s||{},{imageModel:g,titleText:f}=a||{},h=(0,r.jsx)(t8,{type:"inline",className:y()("editorial-play-icon","reactions"),name:"play-circle-outline-large-inline"});if(p){let e=c({t:T.Cd.VIDEO,n:i+1}),r=n({viconst:p,refSuffix:T.Cd.EMPTY,query:m?{listId:m}:void 0});t=(0,tF.Lr)(r,e)}return(0,r.jsx)(t$.Z,{classNames:"transit",nodeRef:b,timeout:300,children:(0,r.jsxs)(tq,{ref:b,children:[(0,r.jsx)(tU,{children:(0,r.jsx)(tz,{className:"peek-poster-image",imageModel:g,dynamicWidth:!0})}),(0,r.jsxs)(tH,{href:t,children:[(0,r.jsxs)(tK,{className:"reactions",children:[h,(0,r.jsx)(t2,{className:"reactions",children:d})]}),(0,r.jsx)(tY,{children:(0,r.jsx)(tJ,{children:f})}),(0,r.jsx)(tQ,{children:(0,r.jsx)(t0,{className:"reactions",children:u})}),!o&&(0,r.jsx)(t1,{associatedConstId:p,entityType:"video"})]})]})},l)})})})})]})},ia=i(3820);i(80167);var is=i(59899);let io="hero-promoted-video-ad",il=(e,t,i)=>{let r=[];return e&&r.push({slotName:io}),t.forEach(e=>{i.transformedPlacements[e]&&r.push({slotName:e})}),r},id=(e,t)=>{let{slotName:i}=e;return(0,r.jsx)(el.Z,{slotName:i},t)},ic=s.default.div.withConfig({componentId:"sc-244aa702-0"})(["position:relative;margin:8px auto;display:flex;justify-content:center;max-width:1280px;"," ","{flex-direction:column;}"],(0,c.setPropertyToColorVar)("background","ipt-baseAlt-color"),c.mediaQueries.breakpoints.below.l),ip=s.default.div.withConfig({componentId:"sc-244aa702-1"})(["flex:846;margin:0 8px;position:relative;overflow:hidden;","{flex:664;}","{flex:100%;}"],c.mediaQueries.breakpoints.only.l,c.mediaQueries.breakpoints.below.l),iu=s.default.div.withConfig({componentId:"sc-244aa702-2"})(["flex:402;margin:0 8px 0 4px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;","{flex:328;}","{flex:0;}"],c.mediaQueries.breakpoints.only.l,c.mediaQueries.breakpoints.below.l),im=s.default.div.withConfig({componentId:"sc-244aa702-3"})(["width:100%;","{display:none;}"],c.mediaQueries.breakpoints.below.l),ig=s.default.div.withConfig({componentId:"sc-244aa702-4"})(["padding:16px 16px 0;text-align:left;","{background:none;}"],c.mediaQueries.breakpoints.below.l),ih=(0,s.default)(e=>{let{className:t,enableNavigation:i,enableVirtualSlides:n,carouselOptions:s,customNavigation:o,onInitialize:l,children:d}=e,c=(0,a.useRef)(null),p=y()(t,"swiper-container"),[u,m]=(0,a.useState)(d),[g,f]=(0,a.useState)(0),[h,x]=(0,a.useState)(0),[T,b]=(0,a.useState)(),{navigation:v={nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},virtual:_={slides:d,addSlidesBefore:2,addSlidesAfter:2,renderExternal(e){let{slides:t,offset:i}=e;m(t),f(i)}},...C}=s,S=()=>{if(c?.current)try{c.current.update()}catch(e){}},w=function(e){let t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250;return r=>{t&&clearTimeout(t),t=setTimeout(e,i,r)}};return(0,a.useEffect)(()=>{c.current=new ia.Z(c.current,{navigation:i&&v,pagination:!1,scrollbar:!1,virtual:n&&_,...C,on:{init(){let{params:e,activeIndex:t}=this,{slidesPerView:i}=e;x(Math.round(i)),b(t),l(c.current.swiper)},slideChange(){let{activeIndex:e}=this;b(e)}}}),l(c.current)},[]),(0,a.useEffect)(()=>S()),(0,a.useEffect)(()=>(window&&window.addEventListener("resize",w(S)),()=>{window&&window.removeEventListener("resize",w(S))}),[]),(0,r.jsxs)("div",{className:p,ref:c,children:[(0,r.jsx)("div",{className:"swiper-wrapper",children:n?u&&u.map(e=>null!==e&&(0,r.jsx)("div",{className:"swiper-slide",style:{left:`${g}px`},children:e},e.key)):a.Children.toArray(d).filter(e=>null!==e).map((e,t)=>(0,r.jsx)(is.E.Provider,{value:{indexInCarousel:t,initialSlidesVisible:h,isInitiallyVisible:t<h,isActive:T===t,carouselElementRef:c},children:(0,r.jsx)("div",{className:"swiper-slide",children:e})},t))}),o]})}).withConfig({componentId:"sc-244aa702-5"})(["height:100%;width:100%;.swiper-slide{width:100%;}"]),ix=s.default.a.withConfig({componentId:"sc-244aa702-6"})(["text-decoration:none;",";",";svg{vertical-align:bottom;}&:hover{",";}"],(0,c.setTypographyType)("headline6"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color")),iT=(0,s.css)(["background-image:none;position:absolute;z-index:100;top:30%;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;&.swiper-button-disabled{visibility:hidden;}","{&.swiper-button-next,&.swiper-button-prev{visibility:hidden;}}"],c.mediaQueries.breakpoints.below.m),ib=s.default.div.withConfig({componentId:"sc-244aa702-7"})(["&.swiper-button-next{right:0;","}"],iT),iv=s.default.div.withConfig({componentId:"sc-244aa702-8"})(["&.swiper-button-prev{left:0;","}"],iT),iy=(0,s.default)(o.Pager).withConfig({componentId:"sc-244aa702-9"})(["&.swiper-buttons{","{padding:20px 12px;}}"],c.mediaQueries.breakpoints.above.m);var i_=()=>{let e=(0,tO.wL)("AutorotateVideoCarousel"),[t]=(0,tD.i)(),{trailersLinkBuilder:i}=(0,x.WOb)(),s=(0,b.EO)(),[l,d]=(0,a.useState)(),c=(0,u.N)({id:"hero_video_browse_trailers",defaultMessage:"Browse trailers"}),p=(0,tE.kp)(),m=p.isDebug,g=new Set(tR(p.transformedPlacements));g.forEach(i=>{let r=p.transformedPlacements[i],a=r.transformedArguments?.errors;a&&a.length>0&&(t(e,n.NextMetrics.EDITORIAL_ERROR,1),a.map(t=>{((0,tA.X)(t)||m)&&e.error({code:t.code,creativeId:r.symphonyMetadata?.creativeId,placementId:r.symphonyMetadata?.placementId,componentName:r.componentName,context:t.context})}))});let f=es("hero-video").reduce((e,t)=>g.has(t.name)?e:[...e,t.name],[]),h=!!p.transformedPlacements[io]&&!g.has(io),v=f.map(e=>Number(!!p.transformedPlacements[e])).reduce((e,t)=>e+t,0),_=Number(h)+v;if((0,a.useEffect)(()=>{if(l&&!(_<=0))return l.on("slideChangeTransitionEnd",e),function(){l.off("slideChangeTransitionEnd",e)};function e(){let{realIndex:e}=this;(0===e||e===_-1)&&l?.slideToLoop(e,0,!1)}},[l,_]),_<=0)return null;let C=i({refSuffix:T.Cd.SEE_MORE}),S=il(h,f,p),w=S.map((e,t)=>id(e,t)),j=_<2,I=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(iv,{className:y()("swiper-button-prev",{"swiper-button-disabled":j}),children:(0,r.jsx)(iy,{className:"swiper-buttons",direction:"left",isVisible:!0,size:"large",onSelect:()=>{s({refMarkerSuffix:T.Cd.PREVIOUS,pageAction:"prev-button-click"})}})}),(0,r.jsx)(ib,{className:y()("swiper-button-next",{"swiper-button-disabled":j}),children:(0,r.jsx)(iy,{className:"swiper-buttons",direction:"right",isVisible:!0,size:"large",onSelect:()=>{s({refMarkerSuffix:T.Cd.NEXT,pageAction:"next-button-click"})}})})]});return(0,r.jsxs)(ic,{children:[(0,r.jsx)(ip,{children:(0,r.jsx)(ih,{carouselOptions:tL,customNavigation:I,enableNavigation:!0,className:tk.oM,onInitialize:d,children:w})}),(0,r.jsxs)(iu,{children:[(0,r.jsx)(im,{children:(0,r.jsx)(ir,{slots:S,swiper:l})}),(0,r.jsx)(ig,{children:(0,r.jsxs)(ix,{href:C,className:"example-headline6",children:[c,(0,r.jsx)(o.Icon,{name:"chevron-right",className:"chevron-right"})]})})]})]})};let iC=()=>(0,r.jsx)(Y.Z,{name:"HeroSection",children:(0,r.jsx)(ea,{children:(0,r.jsx)(o.PageGrid.Item,{span:3,children:(0,r.jsx)(iw,{children:(0,r.jsx)(i_,{})})})})});var iS=()=>(0,r.jsx)(T.xm,{value:T.Cd.HERO_CAROUSEL,children:(0,r.jsx)(iC,{})});let iw=s.default.div.withConfig({componentId:"sc-39f7131b-0"})(["max-width:1280px;"]);var ij=i(84355),iI=i(51415),iE=i(76018),iN=i(1734),iM=i(48958);let iP=e=>{let{chips:t}=e,i=(0,ex.Z)(),{type:a}=(0,iM.G)();return(0,r.jsx)("div",{className:"p-pageMargin l:p-0",children:(0,r.jsx)(iN.e,{children:(0,r.jsxs)("div",{className:"p-m",children:[(0,r.jsx)("div",{className:y()(a("overline"),"pb-s"),children:i.formatMessage({id:"news_chips_header",defaultMessage:"More news"})}),(0,r.jsx)(o.ChipList,{wrap:!0,children:t.map(e=>(0,r.jsx)(o.Chip,{label:e.category,href:e.link,className:"chip"},`news-chip-${e.category}`))})]})})})},ik=()=>{let{newsCelebrityLinkBuilder:e,newsMovieLinkBuilder:t,newsTopLinkBuilder:i,newsIndieLinkBuilder:r,newsTvLinkBuilder:a}=(0,x.WOb)(),n=(0,u.N)({id:"topNews_chip_top_news",defaultMessage:"Top news"}),s=(0,u.N)({id:"topNews_chip_movie_news",defaultMessage:"Movie news"}),o=(0,u.N)({id:"topNews_chip_tv_news",defaultMessage:"TV news"}),l=(0,u.N)({id:"topNews_chip_celebrity_news",defaultMessage:"Celebrity news"}),d=(0,u.N)({id:"news_main_indie_title",defaultMessage:"Indie news"});return[{category:n,link:i({refSuffix:[T.Cd.TOP,T.Cd.TAB]})},{category:l,link:e({refSuffix:[T.Cd.CELEBRITY,T.Cd.TAB]})},{category:s,link:t({refSuffix:[T.Cd.MOVIE,T.Cd.TAB]})},{category:d,link:r({refSuffix:[T.Cd.INDIE,T.Cd.TAB]})},{category:o,link:a({refSuffix:[T.Cd.TV,T.Cd.TAB]})}]},iA=e=>e&&(e?.news?e.news.edges??[]:void 0)||[],iR=e=>{let{data:t}=e,{newsTopLinkBuilder:i}=(0,x.WOb)(),a=ik(),n=iA(t),s=(0,eb.JY)({id:"top-news",height:"other",title:(0,u.N)({id:"topNews_header",defaultMessage:"Top news"}),link:i({refSuffix:T.Cd.SEE_MORE}),shouldRender:()=>n.length>2},e);return(0,r.jsx)(eb.GN,{...s,children:(0,r.jsxs)(ea,{className:"page-grid",children:[(0,r.jsx)(ev.PageGrid.Item,{span:2,children:(0,r.jsx)("div",{"data-testid":"news-shoveler",children:(0,r.jsx)(iE.X,{topNewsItems:n})})}),(0,r.jsx)(ev.PageGrid.Item,{span:1,children:(0,r.jsx)("div",{"data-testid":"news-chips",children:(0,r.jsx)(iP,{chips:a})})})]})})};var iO=e=>(0,r.jsx)(T.xm,{value:T.Cd.TOP_NEWS,children:(0,r.jsx)(iR,{...e})});let iD={component:e=>(0,r.jsx)(iO,{...e}),shouldRender:e=>!0,fragment:{name:"TopNews",gql:C()`
            fragment TopNews on Query {
                news(category: TOP, first: 5) {
                    edges {
                        ...NewsItem
                    }
                }
            }
            ${iI.s}
        `}},iL={EditorsPicksEntity:{component:()=>{let e=(0,u.N)({id:"editorialCarousel_editors_picks",defaultMessage:"Editor's picks"});return(0,r.jsx)(T.xm,{value:T.Cd.EDITORIAL_CAROUSEL_PICKS,children:(0,r.jsx)(eu,{slotNamePrefix:"editors-picks",title:e})})}},BornTodayEntity:ij.Z,TopNewsEntity:iD};var i$=e=>{let{pageQueryData:t}=e,i=a.useRef(null),n=(0,ef.T)(i,{root:null,threshold:0,rootMargin:"200px"});return(0,r.jsx)(Y.Z,{name:"MoreToExplore",children:(0,r.jsx)(ea,{className:"page-grid",children:(0,r.jsx)(o.PageGrid.Item,{span:3,children:(0,r.jsxs)("div",{ref:i,children:[(0,r.jsx)(o.CategoryTitle,{"data-testid":"moreToExplore_title",children:(0,r.jsx)(ei.q,{id:"common_more_to_explore",defaultMessage:"More to explore"})}),(0,r.jsx)(er.Z,{groupConfig:iL,pageQueryData:t,hasIntersected:n})]})})})})};let iB={MostPopularStreamingEntity:i(76574).w},iV=(0,tI.vU)({header:{id:"homepage_main_category_exploreStreaming",defaultMessage:"Explore what's streaming"}});var iF=e=>{let{pageQueryData:t}=e,i=a.useRef(null),n=(0,ex.Z)(),s=(0,ef.T)(i,{root:null,threshold:0,rootMargin:"300px"});return(0,r.jsx)(Y.Z,{name:"MostPopularStreaming",children:(0,r.jsx)("div",{ref:i,children:(0,r.jsxs)(ea,{className:"page-grid",children:[(0,r.jsx)(o.PageGrid.Item,{span:3,children:(0,r.jsx)(o.CategoryTitle,{"data-testid":"morePopularStreaming_title",children:n.formatMessage(iV.header)})}),(0,r.jsx)(er.Z,{groupConfig:iB,pageQueryData:t,hasIntersected:s})]})})})},iG=i(58139);let iW=e=>{let{value:t}=(0,T.Lz)(),{whatToWatchFanFavoritesLinkBuilder:i}=(0,x.WOb)(),{data:n}=e,s=(0,m.b)(n?.fanPicksTitles?.edges),o=n?.fanPicksTitles?.refTag?.ep13nReftag||void 0,l=(0,u.N)({id:"fan_favorites",defaultMessage:"Fan favorites"}),d=(0,u.N)({id:"fan_favorites_description",defaultMessage:"This week's top TV and movies"}),c=(0,eb.JY)({id:"fan-picks",height:"title-cards",title:l,description:d,link:i({refSuffix:T.Cd.SEE_MORE}),shouldRender:()=>s.length>5},e);return(0,r.jsx)(eb.GN,{...c,children:(0,r.jsx)(iG.t,{titles:s,cardOverride:e=>e.map((e,i)=>(0,a.createElement)(eJ.c,{...e,key:`${t}-${e.data.id}-${i}`,className:"fan-picks-title",refTagFromGraph:o,index:i+1}))})})};var iZ=e=>(0,r.jsx)(T.xm,{value:T.Cd.FAN_FAV,children:(0,r.jsx)(iW,{...e})});let iz=C()`
    query FanFavoritesHomepage($fanPicksFirst: Int!, $fanPicksAfter: ID) {
        fanPicksTitles(first: $fanPicksFirst, after: $fanPicksAfter) {
            edges {
                node {
                    ...BaseTitleCard
                    ...TitleCardTrailer
                    ...TitleWatchOption
                }
            }
            refTag {
                ep13nReftag
            }
        }
    }
    ${eM.sq}
    ${eM.F4}
    ${e0.sG.titleWatchOption}
`,iq=(0,eR.O)({query:()=>{let[e]=(0,eA.E)({query:iz,requestPolicy:"cache-and-network",variables:{fanPicksFirst:30},context:{personalized:!0,serverSideCacheable:!1,clientSideBatch:!0}});return e},component:e=>(0,r.jsx)(iZ,{...e})});var iU=i(96621),iH=i(84314),iQ=i(43421),iK=i(60635);let iY=e=>{let{classname:t,items:i}=e,{createButton:a,createPrompt:n}=(0,e0.V1)(),s=(0,b.EJ)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Shoveler,{onPageChange:s,children:i.map((e,i)=>(0,r.jsx)(eJ.c,{className:t,data:e,index:i+1,alternateButton:a(e,i)},e.id))}),n()]})},iX=e=>{let{fromYourWatchlistTitles:t}=e;return void 0===t?null:(0,r.jsx)("div",{"data-testid":"logged-in-state",className:"fyw-logged-in",children:(0,r.jsx)(iY,{classname:"fyw-title",items:t})})},iJ={id:"from_your_watchlist",defaultMessage:"From your Watchlist"},i0={id:"from_your_watchlist_description",defaultMessage:"Movies and TV shows that you have watchlisted"},i1=e=>{let{data:t,error:i,isSignedIn:a}=e,n=(0,ex.Z)(),{whatToWatchFromWatchlistLinkBuilder:s}=(0,x.WOb)(),o=t?.predefinedList?.unreleasedCount?.total||0,l=t?(0,m.J)(t?.predefinedList):[];(0,iK.Q)(l);let d=a&&0!==l.length,c=t?.predefinedList?.ratedCount?.total||0,p=n.formatMessage(iJ),u=n.formatMessage(i0),g=(0,eb.JY)({id:"from-your-watchlist",height:"title-cards",title:p,description:d?u:void 0,link:s({refSuffix:T.Cd.SEE_MORE}),shouldRender:()=>!0},e);return i?null:(0,r.jsx)(eb.GN,{...g,children:i2(a,c,o,l)})},i2=(e,t,i,a)=>e&&a.length>0?(0,r.jsx)(iX,{fromYourWatchlistTitles:a}):(0,r.jsx)(iQ.OW,{isLoggedIn:e,hasRatedTitles:!!t&&t>0,hasUnreleasedTitlesInWatchlist:!!i&&i>0});var i4=e=>(0,r.jsx)(T.xm,{value:T.Cd.FROM_YOUR_WATCHLIST,children:(0,r.jsx)(i1,{...e})});let i3=(0,eR.O)({query:e=>{let{isLoggedIn:t}=e??{},[i]=(0,eA.E)({query:iU.y,requestPolicy:"cache-and-network",variables:{first:30},context:{personalized:!0,serverSideCacheable:!1,clientSideBatch:!0},pause:!t});return t?i:{fetching:!1,stale:!1}},component:e=>{let t=(0,iH.n)(),i={...e,isSignedIn:t};return(0,r.jsx)(i4,{...i})}});var i8=i(64411),i6=i(79544);let i5=C()`
    query PopularInterests {
        popularInterests(first: 50) {
            edges {
                node {
                    ...InterestCard
                }
            }
        }
    }
    ${i6.b}
`,i7=(0,eR.O)({query:e=>{let[t]=(0,eA.E)({query:i5,context:{personalized:!1,serverSideCacheable:!0,clientSideBatch:!0}});return t},component:e=>(0,r.jsx)(i8.Z,{...e})});var i9=i(89578);let re=(0,eR.O)({query:()=>({fetching:!1,stale:!1}),component:e=>(0,ee.hg)({weblabID:J.lh.IMDB_SUGGESTED_TV_FROM_RATINGS_646975,treatments:{T1:!0}})?(0,r.jsx)(i9.Z,{shouldClientSideBatch:!0}):null}),rt=C()`
    query NameIdsInFavPeople {
        favPeopleNameIds: predefinedList(classType: FAVORITE_ACTORS) {
            nameListItemSearch(
                first: 250
                sort: { by: DATE_ADDED, order: DESC }
            ) {
                edges {
                    listItem: name {
                        id
                    }
                }
            }
        }
    }
`,ri=C()`
    query TitlesFromFavPeople(
        $nameIds: [ID!]!
        $startDate: Date!
        $endDate: Date!
    ) {
        favPeopleTitles: advancedTitleSearch(
            first: 250
            sort: { sortBy: RELEASE_DATE, sortOrder: ASC }
            constraints: {
                titleTypeConstraint: {
                    excludeTitleTypeIds: ["tvEpisode", "podcastEpisode"]
                }
                creditedNameConstraint: { anyNameIds: $nameIds }
                releaseDateConstraint: {
                    releaseDateRange: { start: $startDate, end: $endDate }
                }
            }
        ) {
            edges {
                node {
                    title {
                        ...BaseTitleCard
                        releaseDate {
                            displayableProperty {
                                value {
                                    plainText
                                }
                            }
                        }
                        credits(first: 5, filter: { names: $nameIds }) {
                            edges {
                                node {
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
    }
    ${eM.sq}
`;var rr=i(84636),ra=i.n(rr),rn=i(40981),rs=i(18355),ro=i(14149),rl=i(91359),rd=i(63370),rc=i(70902);let rp=new Date,ru=rp.toISOString().split("T")[0],rm=new Date(rp.getFullYear(),rp.getMonth()-2,rp.getDate()).toISOString().split("T")[0],rg=new Date(rp.getFullYear(),rp.getMonth()+2,rp.getDate()).toISOString().split("T")[0],rf=e=>{let{initialData:t}=e,i=(0,ex.Z)(),n=(0,e9.nu)(),s=(0,T.Lz)().value,{chartStarMeterLinkBuilder:d,titleMainLinkBuilder:c}=(0,x.WOb)(),p=(0,eP.B)().context,u=(0,b.EJ)(),m=(0,o.useBreakpointsAsConfig)(),g=m.xs||m.s,[f,h]=(0,a.useState)(!1),[v,y]=(0,a.useState)(!0),[_,C]=(0,a.useState)((t?.favPeopleNameIds?.nameListItemSearch?.edges??[]).map(e=>e.listItem?.id).filter(Boolean)),[S,w]=(0,a.useState)(rm),[j,I]=(0,a.useState)(ru),[E,N]=(0,a.useState)([]),[{data:M}]=(0,e9.E8)({query:rt,context:{personalized:!0,serverSideCacheable:!1},pause:!n||!(0,l.getIsBrowser)()||_.length>0});(0,a.useEffect)(()=>{M&&C((M?.favPeopleNameIds?.nameListItemSearch?.edges??[]).map(e=>e.listItem?.id).filter(Boolean))},[M]);let[{data:P,fetching:k,error:A}]=(0,e9.E8)({query:ri,variables:{nameIds:_,startDate:S,endDate:j},context:{personalized:!0,serverSideCacheable:!1},pause:!n||!(0,l.getIsBrowser)()||!_.length||!v});if((0,a.useEffect)(()=>{P&&N((P?.favPeopleTitles?.edges??[]).map(e=>e?.node?.title))},[P]),(0,e9.bd)(E.map(e=>({id:e.id}))),!n)return null;let R=i.formatMessage({id:"suggested_tv_from_ratings_upcoming",defaultMessage:"Upcoming"}),O=i.formatMessage({id:"suggested_tv_from_ratings_recent",defaultMessage:"Recent"}),D=i.formatMessage({id:"suggested_tv_from_ratings_switch_aria",defaultMessage:"Switch to show {value} titles"},{value:f?O:R}),L=()=>(0,r.jsxs)(r_,{children:[O,(0,r.jsx)(rC,{ariaLabel:D,checked:f,onChange:()=>{let e=!f;w(e?ru:rm),I(e?rg:ru),h(e),y(!0)}}),R]}),$=!k&&P;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(en.P,{id:"suggestedFromFavPeople"}),(0,r.jsx)(o.PageGrid.Item,{span:3,children:(0,r.jsxs)(o.PageSection,{children:[(0,r.jsxs)(rS,{children:[(0,r.jsx)(o.SubSectionTitle,{description:i.formatMessage({id:"favPeople_page_description",defaultMessage:"See recent or upcoming titles from your favorite people"}),children:i.formatMessage({id:"home_favPeople_feature_description",defaultMessage:"Catch up with your favorite people"})}),!g&&(0,r.jsx)(L,{})]}),g&&(0,r.jsx)(L,{}),(k||!P&&!A)&&(0,r.jsx)(rw,{children:(0,r.jsx)(o.Loader,{className:"suggested-titles-loader"})}),A&&!P&&(0,r.jsx)(rv,{children:(0,r.jsx)(ro.ZP,{canRetry:!0,errorMessage:i.formatMessage({id:"home_favPeople_feature_error_state",defaultMessage:"Sorry, there was an issue fetching your favorite names."}),name:"Suggested from favorite people",onClickRetry:()=>y(!0)})}),$&&0===E.length&&(0,r.jsxs)(rv,{children:[(0,r.jsx)(ry,{children:i.formatMessage({id:"home_favPeople_feature_empty_state_1",defaultMessage:"Want better suggestions? Favorite more people!"})}),(0,r.jsx)(o.TextLink,{href:d({refSuffix:T.Cd.SEE_MORE}),text:i.formatMessage({id:"home_favPeople_feature_empty_state_2",defaultMessage:"Start by checking out the most popular celebs"})})]}),$&&E.length>0&&(0,r.jsx)(o.Shoveler,{onPageChange:u,children:E.map((e,t)=>{let a=(0,rd.L)(p,e.originalTitleText,e.titleText)??"",n=ra()(e.credits?.edges??[],"node.name.id");return(0,r.jsx)(o.ShovelerItem,{span:2,children:(0,r.jsxs)(o.PosterCard,{dynamicWidth:!0,children:[(0,r.jsx)(rs.y,{title:{id:e.id,titleText:a,titleTypeId:e.titleType?.id??"",image:e.primaryImage??{}},index:t+1}),(0,r.jsxs)(rb,{children:[(0,r.jsx)(rn.Nf,{canRate:!!e.canRate?.isRatable,hideMaxIMDbRating:!0,hideVoteCountOnSmallBreakpoints:!0,ratingsSummary:e.ratingsSummary?e.ratingsSummary:void 0,showPlaceholderStarIfApplicable:!0,titleId:e.id,titleText:a}),(0,r.jsx)(o.PosterCard.Title,{ariaLabel:i.formatMessage(rl.F.GO_TO,{target:a}),href:c({tconst:e.id,refSuffix:{t:T.Cd.TEXT,n:t+1}}),children:a}),(0,r.jsx)(rT,{children:e.releaseDate?.displayableProperty?.value?.plainText}),(0,r.jsxs)(rx,{children:[n.slice(0,2).map(e=>{let t=e?.node?.name?.nameText?.text;return(0,r.jsx)("div",{children:t},`${s}-creditedName-${e.node.name.id}`)}),n.length>2&&(0,r.jsx)("div",{children:i.formatMessage({id:"home_favPeople_feature_more_people",defaultMessage:"+ {numMore} more"},{numMore:n.length-2})})]}),(0,r.jsx)(rc.Z,{index:t,titleData:e})]})]})},`${s}-item-${e.id}`)})})]})})]})};var rh=e=>(0,r.jsx)(T.xm,{value:T.Cd.SUGGESTED_FROM_FAV_PEOPLE,children:(0,r.jsx)(rf,{...e})});let rx=s.default.div.withConfig({componentId:"sc-3c3374c6-0"})(["",";"],(0,c.setTypographyType)("bodySmall")),rT=s.default.span.withConfig({componentId:"sc-3c3374c6-1"})(["",";",";margin:"," 0;"],(0,c.setTypographyType)("bodySmall"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"),c.spacing.xs),rb=s.default.div.withConfig({componentId:"sc-3c3374c6-2"})(["display:flex;flex-direction:column;"]),rv=s.default.div.withConfig({componentId:"sc-3c3374c6-3"})(["align-items:center;display:flex;flex-direction:column;justify-content:center;margin-left:",";min-height:10rem;"],(0,c.getSpacingVar)("ipt-pageMargin")),ry=s.default.div.withConfig({componentId:"sc-3c3374c6-4"})(["font-weight:500;"]),r_=s.default.div.withConfig({componentId:"sc-3c3374c6-5"})(["",";align-items:center;display:flex;flex-direction:row;margin-bottom:",";margin-left:",";margin-right:",";width:fit-content;"],(0,c.setTypographyType)("overline"),c.spacing.m,(0,c.getSpacingVar)("ipt-pageMargin"),(0,c.getSpacingVar)("ipt-pageMargin")),rC=(0,s.default)(o.Switch).withConfig({componentId:"sc-3c3374c6-6"})(["margin:0 ",";"],c.spacing.xxs),rS=s.default.div.withConfig({componentId:"sc-3c3374c6-7"})(["align-items:center;display:flex;flex-direction:row;"]),rw=s.default.div.withConfig({componentId:"sc-3c3374c6-8"})(["margin-left:",";text-align:center;width:100%;.suggested-titles-loader{min-height:20rem;}"],(0,c.getSpacingVar)("ipt-pageMargin")),rj=(0,eR.O)({query:()=>{let e=(0,e9.nu)(),t=(0,ee.hg)({weblabID:J.lh.IMDB_SUGGESTED_TV_FROM_RATINGS_646975,treatments:{T1:!0}}),i=e&&t,[r]=(0,e9.E8)({query:rt,context:{personalized:!0,serverSideCacheable:!1,clientSideBatch:i},pause:!i});return r},component:e=>(0,ee.hg)({weblabID:J.lh.IMDB_FAV_PEOPLE_780856,treatments:{T1:!0}})?(0,r.jsx)(rh,{initialData:e.data}):null});var rI=i(38276),rE=i(93515),rN=i(48422),rM=i(36543);let rP=C()`
    query TenUpMoviemeter {
        chartTitles(first: 10, chart: { chartType: MOST_POPULAR_MOVIES }) {
            edges {
                node {
                    ...TitleListItemMetadata
                }
            }
        }
    }
    ${rM.Zz}
`,rk=(0,eR.O)({query:()=>{let[e]=(0,eA.E)({query:rP,context:{personalized:!1,serverSideCacheable:!0,clientSideBatch:!0}});return e},component:function(e){let t=(0,rI.Q3)(e.data?.chartTitles?.edges,!1),i=(0,u.N)({id:"homepage_main_tenup_moviemeter_title",defaultMessage:"Most popular movies this week"}),a=(0,eb.JY)({id:"ten-up-moviemeter",height:"other",pageSectionProps:{topPadding:"m"},shouldRender:()=>10===t.length},e);return(0,ee.hg)({weblabID:J.lh.IMDB_CHART_TEN_UP_WIDGET_1317802,treatments:{T1:!0}})?(0,r.jsx)(eb.GN,{...a,children:(0,r.jsx)(rE.Z,{items:t,seeAllLinkProps:{routeConfig:rN.$.CHART_MOVIE_METER,refSuffix:T.Cd.EMPTY},titleProps:{title:i}})}):null}});var rA=i(49996),rR=i(77845);let rO=e=>{let{items:t,className:i}=e,a=(0,b.EJ)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Shoveler,{className:i,onPageChange:a,children:t.map((e,t)=>(0,r.jsx)(rR.x,{recommendation:e,index:t},e.title.id))})})},rD=e=>{let{data:t,isSignedIn:i}=e,{registrationSignInLinkBuilder:a,whatToWatchTopPicksLinkBuilder:n}=(0,x.WOb)(),s=(0,m.b)(t?.titleRecommendations?.edges),o=(0,u.N)({id:"nav_userMenu_link_signIn",defaultMessage:"Sign in"}),l=(0,u.N)({id:"top_picks",defaultMessage:"Top picks"}),d=(0,u.N)({id:"top_picks_description",defaultMessage:"TV shows and movies just for you"}),c=(0,eb.JY)({id:"top-picks",height:"title-cards",title:l,description:d,link:n({refSuffix:T.Cd.SEE_MORE}),shouldRender:()=>s.length>5},e);return(0,r.jsxs)(eb.GN,{...c,children:[!i&&(0,r.jsx)(rL,{href:a({refSuffix:T.Cd.SIGN_IN}),text:o,className:"top-picks-sign-in-link"}),(0,r.jsx)(rO,{items:s,className:"latest-picks"})]})},rL=(0,s.default)(o.TextLink).withConfig({componentId:"sc-3828dac7-0"})(["margin-left:",";margin-bottom:",";margin-top:0;font-size:",";display:block;"],(0,c.setPropertyToSpacingVar)("margin","ipt-pageMargin"),c.spacing.m,(0,c.setTypographyType)("bodySmall"));var r$=e=>(0,r.jsx)(T.xm,{value:T.Cd.TOP_PICKS,children:(0,r.jsx)(rD,{...e})});let rB=C()`
    query TopPicksHomepage(
        $topPicksFirst: Int!
        $topPicksAfter: String
        $placement: String!
    ) {
        titleRecommendations(
            first: $topPicksFirst
            after: $topPicksAfter
            placementContext: { pageType: $placement }
        ) {
            edges {
                node {
                    refTag
                    title {
                        ...BaseTitleCard
                        ...TitleCardTrailer
                        ...TitleWatchOption
                    }
                    explanations {
                        title {
                            id
                            titleText {
                                text
                            }
                            originalTitleText {
                                text
                            }
                        }
                    }
                }
            }
        }
    }
    ${eM.sq}
    ${eM.F4}
    ${e0.sG.titleWatchOption}
`,rV=(0,eR.O)({query:()=>{let{pageType:e}=(0,rA.y)(),[t]=(0,eA.E)({query:rB,variables:{topPicksFirst:30,placement:e},context:{personalized:!0,serverSideCacheable:!1,clientSideBatch:!0}});return t},component:e=>{let t=(0,iH.n)(),i={...e,isSignedIn:t};return(0,r.jsx)(r$,{...i})}}),rF=e=>{let{data:t,fetching:i}=e,a=(0,m.b)(t?.topMeterTitles?.edges);(0,e9.bd)(a);let n=(0,u.N)({id:"homepage_topTenTitles_title",defaultMessage:"Top 10 on IMDb this week"}),s=(0,eb.JY)({id:"top-ten",height:"title-cards",title:n,shouldRender:()=>o.length>5},e);if(!t?.topMeterTitles&&!i)return null;let o=a.map((e,t)=>({...e,titleText:e.titleText?.text?{text:`${t+1}. ${e.titleText.text}`}:void 0,originalTitleText:e.originalTitleText?.text?{text:`${t+1}. ${e.originalTitleText.text}`}:void 0}));return(0,r.jsx)(eb.GN,{...s,children:(0,r.jsx)(iY,{classname:"topten-title",items:o})})};var rG=e=>(0,r.jsx)(T.xm,{value:T.Cd.TOP_TEN_TITLES,children:(0,r.jsx)(rF,{...e})});let rW=C()`
    fragment TopTenTitlesEntry on Title {
        ...BaseTitleCard
        ...TitleCardTrailer
        ...TitleWatchOption
        meterRanking(input: { meterType: TITLE_METER }) {
            currentRank
            rankChange {
                changeDirection
                difference
            }
        }
    }
    ${eM.sq}
    ${eM.F4}
    ${e0.sG.titleWatchOption}
`,rZ=C()`
    query TopMeterTitlesWidget($topTenFirst: Int!) {
        topMeterTitles(
            first: $topTenFirst
            filter: { topMeterTitlesType: ALL }
        ) {
            edges {
                cursor
                node {
                    ...TopTenTitlesEntry
                }
            }
        }
    }
    ${rW}
`;var rz={ReturningToTV:re,SuggestedFromFavPeople:rj,TopPicks:rV,FromYourWatchlist:i3,TenUpMoviemeter:rk,TopTenTitles:(0,eR.O)({query:()=>{let[e]=(0,e9.E8)({query:rZ,variables:{topTenFirst:10},context:{personalized:!1,serverSideCacheable:!0,clientSideBatch:!0}});return e},component:function(e){return(0,ee.hg)({weblabID:J.lh.IMDB_CHART_TEN_UP_WIDGET_1317802,treatments:{T1:!0}})?null:(0,r.jsx)(rG,{...e})}}),FanFavorites:iq,PopularInterests:i7};let rq=(0,s.default)(o.CategoryTitle).withConfig({componentId:"sc-14c9c056-0"})(["margin-bottom:0;"]),rU=s.default.div.withConfig({componentId:"sc-14c9c056-1"})(["padding-bottom:",";","{display:flex;justify-content:space-between;align-items:flex-end;}"],c.spacing.s,c.mediaQueries.breakpoints.above.l),rH=(0,s.default)(o.TextButton).withConfig({componentId:"sc-14c9c056-2"})(["margin-left:calc("," - ",");","{margin-left:calc( "," - "," );}","{margin-left:calc( "," - "," );}"],(0,c.getSpacingVarValue)("ipt-pageMargin"),c.spacing.xs,c.mediaQueries.breakpoints.only.xs,(0,c.getSpacingVarValue)("ipt-pageMargin"),c.spacing.m,c.mediaQueries.breakpoints.only.l,(0,c.getSpacingVarValue)("ipt-pageMargin"),c.spacing.m);var rQ=e=>{let{pageQueryData:t}=e,{whatToWatchLinkBuilder:i}=(0,x.WOb)(),n=a.useRef(null),s=(0,ef.T)(n,{root:null,threshold:0}),l=(0,u.N)({id:"homepage_main_category_whatToWatch",defaultMessage:"What to watch"}),d=(0,u.N)({id:"homepage_main_button_browseWhatToWatch",defaultMessage:"Get more recommendations"});return(0,r.jsx)(Y.Z,{name:"WhatToWatch",children:(0,r.jsxs)(ea,{className:"page-grid",children:[(0,r.jsx)(o.PageGrid.Item,{span:3,children:(0,r.jsx)(rU,{ref:n,children:(0,r.jsx)(rq,{"data-testid":"whatToWatch_title",actions:(0,r.jsx)(rH,{"data-testid":"wtw-button",href:i({refSuffix:[T.Cd.WHAT_TO_WATCH,T.Cd.BUTTON]}),postIcon:"chevron-right",children:d}),children:l})})}),(0,r.jsx)(er.Z,{groupConfig:rz,pageQueryData:t,hideErrors:!1,hasIntersected:s})]})})};let rK=e=>!!(0,ec.S)()[e],rY=e=>{let{slotName:t,logComponentName:i}=e,a=rK(t);return(0,r.jsx)(Y.Z,{name:i,children:a&&(0,r.jsx)(ea,{className:"page-grid",gutterBias:"center",children:(0,r.jsx)(o.PageGrid.Item,{span:3,children:(0,r.jsx)(o.PageSection,{children:(0,r.jsx)(el.Z,{slotName:t})})})})})},rX=e=>{(0,X.P)(J.lh.IMDB_SIX_DEGREES_HOME_SNACK_648093);let t=(0,ee.hg)({weblabID:J.lh.IMDB_NEXT_HOME_STREAMING_WIDGET_958820,treatments:{T1:!0,T2:!0}});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(Q.ZP,{children:[(0,r.jsx)(et.Z,{}),(0,r.jsx)(z.Z,{}),(0,r.jsx)(U.Z,{}),(0,r.jsxs)(Y.Z,{name:"TopAd",children:[(0,r.jsx)(Z.z,{}),(0,r.jsx)(o.PageBackground,{baseColor:"baseAlt",className:K.R,children:(0,r.jsx)(o.PageContentContainer,{children:(0,r.jsx)(q.ZP,{name:H.A.INLINE20})})})]}),(0,r.jsxs)(rJ,{children:[(0,r.jsx)(iS,{}),(0,r.jsx)(tP,{...e}),(0,r.jsx)(W.S,{}),(0,r.jsx)(rY,{slotName:"center-1",logComponentName:"BestOf"}),(0,r.jsx)(V,{delayOnIntersection:!0}),(0,r.jsx)(rQ,{...e}),(0,r.jsx)(eg,{...e}),t?(0,r.jsx)(iF,{...e}):(0,r.jsx)(tw,{...e}),(0,r.jsx)(e5,{...e}),(0,r.jsx)(i$,{...e})]})]})})},rJ=(0,s.default)(o.PageContentContainer).withConfig({componentId:"sc-6c67ef41-0"})(["position:relative;"]);var r0=i(88486),r1=!0,r2=e=>(0,r.jsx)(r0.Z,{baseColor:"baseAlt",orientContent:"full",hideAdWrap:!0,cti:n.CTIS.HOME_CTI,children:(0,r.jsx)(rX,{...e})})}},function(e){e.O(0,[7406,5601,3078,9808,5163,8245,444,1634,9205,9250,1532,9725,634,5079,1811,7643,9380,4866,158,9052,9031,2146,9307,3044,2888,9774,179],function(){return e(e.s=87314)}),_N_E=e.O()}]);

