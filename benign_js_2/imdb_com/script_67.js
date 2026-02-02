/* 元のURL: https://imdb.com */
// 外部JS: https://dqpnq362acqdi.cloudfront.net/_next/static/chunks/9052-1b2c77de2c47952d.js
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9052],{94475:function(e,t,a){a.d(t,{G:function(){return d}});var s=a(52322),r=a(72779),o=a.n(r),i=a(2784),n=a(19596),l=a(88169),c=a(86704);let d=e=>{let{palette:{baseColor:t}}=(0,i.useContext)(l.ThemeContext),{title:a,message:r,className:n,action:c,displayType:d}=e;return(0,s.jsx)(g,{className:o()(n,t),baseColor:"none",children:(0,s.jsxs)("div",{className:"inner",children:[(0,s.jsx)("div",{className:"title",role:"alert",children:a}),!!e.message&&(0,s.jsx)("div",{className:"message",role:"alert",children:r}),!!c&&(0,s.jsx)("compact"===d?p:u,{children:c})]})})},p=n.default.div.withConfig({componentId:"sc-46b1addd-0"})(["margin-top:",";"],c.spacing.s),u=n.default.div.withConfig({componentId:"sc-46b1addd-1"})(["margin-top:",";"],c.spacing.l),g=(0,n.default)(l.PageSection).withConfig({componentId:"sc-46b1addd-2"})([".inner{max-width:480px;margin:0 auto;text-align:center;}.message{margin-top:",";}&.base{.title{",";}.message{",";}}&.baseColor{.title{",";}.message{",";}}"],c.spacing.m,(0,c.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"))},14342:function(e,t,a){a.d(t,{_q:function(){return b},ZP:function(){return x}});var s=a(52322),r=a(27722),o=a(72779),i=a.n(o),n=a(2784),l=a(9162),c=a(19596),d=a(11438),p=a(14438);let u={CREDIT_CHANGE:d.Cd.FILMOGRAPHY,"CONTACT_CHANGE|CONTACT__RELATIONSHIP_TYPE|REPRESENTATION":d.Cd.REPRESENTATION,EMPLOYMENT_CHANGE:d.Cd.EMPLOYMENT,"CONTACT_CHANGE|CONTACT__RELATIONSHIP_TYPE|CLIENT":d.Cd.CLIENTS,NEWS_ADDITION:d.Cd.NEWS},g={TRACK:"Track",TRACKING:"Tracking",IS_LOADING:"Loading"};var T=a(17503),m=a(11602);let f=()=>{let[e,t]=(0,T.Z)(m.Vc),a=async e=>t(e);return{success:e.data?.untrackConst?.success,error:e.error,fetching:e.fetching,updateUntrackingForConst:a}},C=()=>{let[e,t]=(0,T.Z)(m.qb),a=async e=>t(e);return{success:e.data?.trackConst?.success,error:e.error,fetching:e.fetching,updateTrackingForConst:a}},I=e=>{let[t,a]=(0,n.useState)(e),[s,r]=(0,n.useState)(!1),{updateTrackingForConst:o}=C(),{updateUntrackingForConst:i}=f(),l=async e=>{if(!1===e.isTracking&&!1!==t.isTracking){r(!0);let e=await i({input:{id:t.id}}),s={...t,isTracking:!1};e.data?.untrackConst?.success&&a(s),r(!1)}else if(!0===e.isTracking&&!1===t.isTracking){r(!0);let e=t.notificationPreferences?.map(e=>({...e,interested:!0})),s=await o({input:{id:t.id,notificationTypeStates:e?.map(e=>{let{interested:t,type:a}=e;return{typeId:a.typeId,interested:t}})}});s.data?.trackConst?.success&&a({...t,isTracking:!0,notificationPreferences:e}),r(!1)}else if(!0===e.isTracking&&e.notificationPreferences!==t.notificationPreferences){r(!0);let s={...t,isTracking:!0,notificationPreferences:t.notificationPreferences?.map(t=>{let a=t;return e.notificationPreferences?.map(e=>{e.type.typeId===t.type.typeId&&e.interested!==t.interested&&(a=e)}),a})},i=await o({input:{id:t.id,notificationTypeStates:s.notificationPreferences?.map(e=>({typeId:e.type.typeId,interested:e.interested}))}});i.data?.trackConst?.success&&a(s),r(!1)}},c=g.IS_LOADING,d=t.isTracking?g.TRACKING:g.TRACK;return{state:t,updateTracking:l,isFetching:s,ariaLabel:s?c:d}},_={TRACK:"Track",TRACKING:"Tracking",STOP_TRACKING:"Stop tracking"},h={track:"track",trackButton:"track-on",trackMenu:"track-menu-open"},b="protrackbutton--tracking--post-icon",E=e=>{let t,{id:a,data:o,buttonProps:c,buttonType:g="button",displayTrackOptionsMenu:T=!0,className:m}=e,f=(0,p.EO)(),{state:{isTracking:C,notificationPreferences:E},updateTracking:x,isFetching:A}=I({id:a,isTracking:o?.isTracking||!1,notificationPreferences:o?.notificationPreferences||[]}),[N,k]=(0,n.useState)(!1),y={className:i()(c?.className,T?void 0:m),onColor:void 0};switch(g){case"secondaryButton":t=r.SecondaryButton,y.onColor="accent2";break;case"textButton":t=r.TextButton,y.onColor="accent2";break;default:t=r.Button}let R={},O=T?L:n.Fragment;T&&(R.className=m);let M=()=>f({pageAction:`${h.trackButton}-${a}`,refMarkerSuffix:d.Cd.EMPTY}),v=()=>f({pageAction:h.trackMenu,refMarkerSuffix:d.Cd.EMPTY}),j=()=>f({pageAction:`${h.track}-${d.Cd.OFF}-${a}`,refMarkerSuffix:d.Cd.MENU}),V=(e,t)=>{let a=u[e],s=t?d.Cd.OFF:d.Cd.ON;f({pageAction:`${a}-${s}`,refMarkerSuffix:d.Cd.MENU})};return(0,s.jsxs)(O,{...R,children:[!!A&&(0,s.jsx)(t,{...c,...y,children:(0,s.jsx)(r.Loader,{})}),!A&&(0,s.jsx)(t,{onSelect:()=>{C?(v(),T?k(!N):x({isTracking:!1})):(M(),x({isTracking:!0}))},preIcon:C?"notifications-add-check":"notifications-add",postIcon:C&&T?"arrow":void 0,postIconClassName:C&&T?b:void 0,...c,...y,children:C?_.TRACKING:_.TRACK}),!!C&&!!T&&(0,s.jsx)(r.SetPalette,{palette:"light",children:(0,s.jsx)(S,{isVisible:N,mode:"absolute",expandFrom:"top-right",children:(0,s.jsx)(l.Y,{onEscapeKey:()=>k(!1),onClickOutside:()=>k(!1),children:(0,s.jsxs)(r.MenuList,{children:[E?.map(e=>{let{type:t,interested:a}=e;return s.jsx(P,{onClick:()=>{V(t.typeId,a),x({isTracking:!0,notificationPreferences:[{interested:!a,type:t}]})},preIconName:a?"checkbox-checked":"checkbox-unchecked",preIconProps:{name:a?"checkbox-checked":"checkbox-unchecked",spanClassName:"checkbox-icon"},children:t.text},t.text)}),(0,s.jsx)(r.MenuListDivider,{}),(0,s.jsx)(r.MenuListItem,{onClick:()=>{j(),k(!1),x({isTracking:!1})},children:_.STOP_TRACKING})]})})})})]})};var x=e=>(0,s.jsx)(d.xm,{value:d.Cd.TRACK,children:(0,s.jsx)(E,{...e})});let L=c.default.div.withConfig({componentId:"sc-57523aca-0"})(["position:relative;"]),P=(0,c.default)(r.MenuListItem).withConfig({componentId:"sc-57523aca-1"})([".checkbox-icon{","}"],(0,r.setPropertyToColorVar)("color","ipt-on-base-accent2-color")),S=(0,c.default)(r.Menu).withConfig({componentId:"sc-57523aca-2"})(["right:0;top:100%;"])},96557:function(e,t,a){a.d(t,{Z:function(){return X}});var s=a(52322),r=a(14973),o=a(88169),i=a(86704),n=a(30382),l=a.n(n),c=a(2784),d=a(46138),p=a(19596),u=a(31885),g=a(20608),T=a(84314),m=a(49666),f=a(49996),C=a(4363),I=a(66724),_=a(11438),h=a(37179),b=a(6935),E=a(14438),x=a(1833),L=a(83163),P=a(48687),S=a(94475),A=a(92543),N=a(67353),k=a(22619),y=a(25436),R=a(75824),O=a(75808);let M=l()`
    fragment AddConstToListMenuItem on List {
        id
        name {
            originalText
        }
    }
`,v=e=>{let{value:t}=(0,_.Lz)(),{listMainLinkBuilder:a}=(0,I.WOb)(),{palette:{baseColor:r}}=(0,c.useContext)(o.ThemeContext),{constId:i,onError:n}=e,{pageType:l}=(0,f.y)(),d=(0,m.ik)()&&l===y.PageType.NAME,p=e.listData.id,u=e.listData.name?.originalText||"",g=(0,R.N)({id:"addConstToListMenuItem_goToList_ariaLabel",defaultMessage:"Go to list: {listTitle}"},{listTitle:u}),T=(0,R.N)({id:"user_your_checkins",defaultMessage:"Your Check-Ins"}),[C,h]=(0,c.useState)(e.isElementInList),{addConstToList:b,removeConstFromList:E}=(0,O.j8)({overrideRefTag:d?t+`_${p}`:t}),{addToWatchedTitles:x}=(0,k.V)(),{executeAddConstToList:L,addConstToListResult:P}=b,{executeRemoveConstFromList:S,removeConstFromListResult:A}=E,M=P?.error||A?.error,v=()=>{C?(S(p,i),h(!1)):(L(p,i),h(!0),"CHECK_INS"===e.listClass&&x(i))};return M?(n(M),null):(0,s.jsxs)(w,{children:[(0,s.jsxs)(D,{onClick:v,onKeyDown:e=>{(0,N.isEnterOrSpaceKey)(e)&&v()},role:"button",tabIndex:0,"data-titleinlist":C,className:r,children:[!!C&&(0,s.jsx)(H,{name:"playlist-add-check",className:r}),!C&&(0,s.jsx)($,{name:"add"}),"CHECK_INS"===e.listClass?T:u]}),(0,s.jsx)(W,{href:a({lsconst:p,refSuffix:_.Cd.EMPTY}),"aria-label":g,className:r,children:(0,s.jsx)(o.Icon,{name:"chevron-right"})})]})};v.fragments={addConstToListMenuItem:M};let j=`
    &:focus {
        ${(0,i.focusOnBaseAlt)()}
    }

    &:hover {
        background: rgba(
            ${(0,i.getColorVarValue)("ipt-on-baseAlt-rgb")},
            ${(0,i.getColorVarValue)("ipt-baseAlt-hover-opacity")}
        );
        background: rgba(
            ${(0,i.getColorVar)("ipt-on-baseAlt-rgb")},
            ${(0,i.getColorVar)("ipt-baseAlt-hover-opacity")}
        );
    }

    &:active {
        background: rgba(
            ${(0,i.getColorVarValue)("ipt-on-baseAlt-rgb")},
            ${(0,i.getColorVarValue)("ipt-baseAlt-pressed-opacity")}
        );
        background: rgba(
            ${(0,i.getColorVar)("ipt-on-baseAlt-rgb")},
            ${(0,i.getColorVar)("ipt-baseAlt-pressed-opacity")}
        );
    }
`,V=`
    &:focus {
        ${(0,i.focusOnBase)()}
    }

    &:hover {
        background: rgba(
            ${(0,i.getColorVarValue)("ipt-on-base-rgb")},
            ${(0,i.getColorVarValue)("ipt-base-hover-opacity")}
        );
        background: rgba(
            ${(0,i.getColorVar)("ipt-on-base-rgb")},
            ${(0,i.getColorVar)("ipt-base-hover-opacity")}
        );
    }

    &:active {
        background: rgba(
            ${(0,i.getColorVarValue)("ipt-on-base-rgb")},
            ${(0,i.getColorVarValue)("ipt-base-pressed-opacity")}
        );
        background: rgba(
            ${(0,i.getColorVar)("ipt-on-base-rgb")},
            ${(0,i.getColorVar)("ipt-base-pressed-opacity")}
        );
    }
`,w=p.default.div.withConfig({componentId:"sc-ad2b51b3-0"})(["display:flex;align-items:center;width:100%;"]),D=p.default.div.withConfig({componentId:"sc-ad2b51b3-1"})(["flex-grow:1;cursor:pointer;padding:0.75rem 1rem 0.75rem 0.75rem;position:relative;text-overflow:ellipsis;overflow:hidden;word-break:break-all;white-space:nowrap;&::after{position:absolute;content:'';right:0;top:20%;height:60%;width:1px;}&.base::after{","}&.baseAlt::after{","}"],(0,i.setPropertyToColorVar)("background-color","ipt-base-border-color"),(0,i.setPropertyToColorVar)("background-color","ipt-baseAlt-border-color")),$=(0,p.default)(o.Icon).withConfig({componentId:"sc-ad2b51b3-2"})(["margin-right:0.5rem;"]),H=(0,p.default)($).withConfig({componentId:"sc-ad2b51b3-3"})(["&.base{","}&.baseAlt{","}"],(0,i.setPropertyToColorVar)("color","ipt-on-base-accent4-color"),(0,i.setPropertyToColorVar)("color","ipt-on-baseAlt-accent4-color")),W=p.default.a.withConfig({componentId:"sc-ad2b51b3-4"})(["padding:0.75rem 1rem;flex-shrink:0;&.base{"," ","}&.baseAlt{"," ","}"],(0,i.setPropertyToColorVar)("color","ipt-on-base-textHint-color"),V,(0,i.setPropertyToColorVar)("color","ipt-on-baseAlt-textHint-color"),j),F={PROMPT_TITLE:{id:"common_add_to_list_buttonText",defaultMessage:"Add to list"},CREATE_LIST:{id:"addConstToListPrompt_label_createList",defaultMessage:"Create new list"},ERROR_TITLE:{id:"error_emptyStates_addConstToList_title",defaultMessage:"There was a problem. Please try again."},VIEW_FAVORITE_PEOPLE:{id:"common_label_viewFavPeople",defaultMessage:"View favorite people"},VIEW_WATCHLIST:{id:"common_label_viewWatchlist",defaultMessage:"View Watchlist"},SIGNED_OUT_ERROR_TITLE:{id:"error_signedOut_addConstToList_title",defaultMessage:"Sign in to create or view a list."},CLOSE_PROMPT_LABEL:{id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"},NO_LISTS_FOUND:{id:"addConstToListPrompt_no_lists_found",defaultMessage:"No lists found"},NO_LISTS_FOUND_SEARCH:{id:"addConstToListPrompt_no_lists_found_search",defaultMessage:"No lists match your search"},SEARCH_LISTS_PLACEHOLDER:{id:"addConstToListPrompt_search_lists_placeholder",defaultMessage:"Search lists..."}},G={LOADER:"actlp-loader",ERROR:"actlp-error",CREATE_LIST:"actlp-creat-list",VIEW_FAVORITE_PEOPLE:"actlp-favPeople",VIEW_WATCHLIST:"actlp-watchlist",NO_LIST:"actlp-no-list"},B="addConstToListPrompt__panel",K=l()`
    query ACTLP_Prompt(
        $count: Int!
        $constId: ID!
        $after: ID
        $listElementType: ListTypeId
        $classTypes: [ListClassId!]
    ) {
        lists(
            first: $count
            filter: {
                listElementType: $listElementType
                classTypes: $classTypes
            }
            after: $after
        ) {
            total
            edges {
                node {
                    ...AddConstToListMenuItem
                    isElementInList(itemElementId: $constId)
                    listClass {
                        id
                    }
                }
            }
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    }
    ${v.fragments.addConstToListMenuItem}
`,Y={hasNextPage:!0,listItems:[],endCursor:null},U=e=>{let t,a;let{isOpen:i,onClose:n,primaryImage:l,primaryText:p,imageType:S}=e,N=l?.caption?.plainText||"",k=(0,T.n)(),y=(0,m.ik)(),R=(0,d.Z)(),{makeRefMarker:O}=(0,_.Lz)(),{listCreateLinkBuilder:M,listFavoritePeopleLinkBuilder:j,listWatchlistLinkBuilder:V,registrationSignInLinkBuilder:w}=(0,I.WOb)(),D=(0,P.hg)({weblabID:L.lh.IMDB_FAV_PEOPLE_780856,treatments:{T1:!0}}),{pageType:$,pageConst:H}=(0,f.y)(),W=e.constId||H,U=W?.startsWith("tt"),X=W?.startsWith("nm"),ee=y?[u.JQJ.ProList]:[u.JQJ.CheckIns,u.JQJ.List],et=(0,E.EO)();(0,A.g)(i);let ea="poster";U&&(t=u.lZo.Titles),X&&(t=u.lZo.People,ea="avatar");let[es,er]=(0,c.useState)(Y),[eo,ei]=(0,c.useState)(""),en=(0,c.useMemo)(()=>y&&eo.trim()?es.listItems.filter(e=>(e.node?.name?.originalText||"").toLowerCase().includes(eo.toLowerCase())):es.listItems,[es.listItems,eo,y]),[el]=(0,C.E)({query:K,requestPolicy:"network-only",variables:{constId:W,count:100,after:es.endCursor,listElementType:t,classTypes:ee},context:{serverSideCacheable:!1,personalized:!0},pause:!i||!k||!W}),[ec,ed]=(0,c.useState)(void 0),ep=el.fetching,eu=el.error||ec,eg=el.data?.lists?.total,eT=$&&W?(0,s.jsx)(o.TextLink,{href:w({refSuffix:[_.Cd.LIST,_.Cd.MENU],query:{u:`/${$}/${W}/`}}),text:R.formatMessage(F.SIGNED_OUT_ERROR_TITLE)}):null,em=R.formatMessage(F.ERROR_TITLE);(0,c.useEffect)(()=>{i&&!ep&&el.data?.lists&&es.hasNextPage&&er({listItems:el.data?.lists?.edges?es.listItems.concat(el.data.lists.edges):es.listItems,hasNextPage:el.data?.lists?.pageInfo?.hasNextPage,endCursor:el.data?.lists?.pageInfo?.endCursor})},[es.hasNextPage,el.data]),(0,c.useEffect)(()=>{if(i){et({pageAction:h.QJ.ADD_TO_LIST_OPEN,hitType:r.HitType.POP_UP,refMarkerSuffix:_.Cd.EMPTY});return}er({...Y}),y&&ei("")},[i]);let ef=!eu&&i&&k&&eg!==es.listItems.length;return(0,s.jsxs)(q,{"data-testid":"styled-list-prompt",isOpen:i,onCloseClicked:()=>{n(),et({pageAction:h.QJ.ADD_TO_LIST_CLOSE,hitType:r.HitType.POP_UP,refMarkerSuffix:_.Cd.EMPTY})},panelClassName:B,baseColor:y?"base":"baseAlt",header:(0,s.jsx)(Z,{type:ea,subtitle:p,reverseTitleOrder:!0,title:R.formatMessage(F.PROMPT_TITLE),ariaLabel:N,imageModel:(0,b.K0)(l,N),imageType:S}),closePromptLabel:R.formatMessage(F.CLOSE_PROMPT_LABEL),children:[k?(0,s.jsxs)(o.MenuList,{children:[!!y&&(0,s.jsx)(o.MenuListDivider,{}),!!U&&!y&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.MenuListItem,{className:G.VIEW_WATCHLIST,href:V({refSuffix:_.Cd.WATCHLIST}),postIconName:"chevron-right",children:(0,s.jsx)(g.q,{...F.VIEW_WATCHLIST})}),(0,s.jsx)(o.MenuListDivider,{})]}),!!X&&!y&&!!D&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.MenuListItem,{className:G.VIEW_FAVORITE_PEOPLE,href:j({refSuffix:_.Cd.EMPTY}),postIconName:"chevron-right",children:(0,s.jsx)(g.q,{...F.VIEW_FAVORITE_PEOPLE})}),(0,s.jsx)(o.MenuListDivider,{})]}),(0,s.jsx)(o.MenuListItem,{className:G.CREATE_LIST,href:y?(0,x.Ae)(`${x.Wr}/list/`,O(_.Cd.NEW),{}):M({refSuffix:_.Cd.NEW}),target:y?"_blank":void 0,postIconName:y?"launch":"chevron-right",children:(0,s.jsx)(g.q,{...F.CREATE_LIST})}),(0,s.jsx)(o.MenuListDivider,{}),!!y&&es.listItems.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(z,{children:(0,s.jsx)(o.TextInput,{name:"listSearch",placeholder:R.formatMessage(F.SEARCH_LISTS_PLACEHOLDER),value:eo,onChange:e=>ei(e.target.value),ariaLabel:"Search existing lists"})}),(0,s.jsx)(o.MenuListDivider,{})]}),!!eu&&(0,s.jsx)(J,{className:G.ERROR,title:(a=ec,a?.graphQLErrors[0]?.extensions?.code==="FORBIDDEN")?eT:em}),!ef&&0===es.listItems.length&&!eo.trim()&&(0,s.jsx)(J,{className:G.NO_LIST,title:(0,s.jsx)(g.q,{...F.NO_LISTS_FOUND})}),!ef&&!!y&&es.listItems.length>0&&0===en.length&&eo.trim()&&(0,s.jsx)(J,{className:G.NO_LIST,title:(0,s.jsx)(g.q,{...F.NO_LISTS_FOUND_SEARCH})}),!eu&&!!W&&en.map(e=>(0,s.jsx)(v,{listData:e.node,listClass:e.node?.listClass?.id,isElementInList:e.node.isElementInList||!1,constId:W,onError:ed},e.node.id))]}):(0,s.jsx)(J,{className:G.ERROR,title:eT}),!!ef&&(0,s.jsx)(Q,{"data-testid":G.LOADER,children:(0,s.jsx)(o.Loader,{})})]})},q=(0,p.default)(o.Prompt).withConfig({componentId:"sc-6151ccd5-0"})([".","{padding:0;",";min-height:18rem;}"],B,(0,i.setPropertyToShapeVar)("border-radius","ipt-cornerRadius")),Z=(0,p.default)(o.PromptHeader).withConfig({componentId:"sc-6151ccd5-1"})([""," ",""],(0,i.setPropertyToShapeVar)("border-top-left-radius","ipt-cornerRadius"),(0,i.setPropertyToShapeVar)("border-top-right-radius","ipt-cornerRadius")),J=(0,p.default)(S.G).withConfig({componentId:"sc-6151ccd5-2"})([""," background:initial;min-height:7rem;padding:3rem;"],(0,i.setTypographyType)("body")),Q=p.default.div.withConfig({componentId:"sc-6151ccd5-3"})(["display:flex;min-height:7rem;justify-content:center;padding:3rem;"]),z=p.default.div.withConfig({componentId:"sc-6151ccd5-4"})(["padding:",";background:initial;"],i.spacing.m);var X=e=>(0,s.jsx)(_.xm,{value:_.Cd.LIST,children:(0,s.jsx)(U,{...e})})},35223:function(e,t,a){a.d(t,{TY:function(){return r},gA:function(){return o},z7:function(){return s}});let s={ADD_TO_LIST:"btp_atl",TRAILER:"btp_trlr",RETRY:"btp_ta",RATING_ROW:"btp_rt",RATING_DISPLAY:"btp_rt_ds",RATE_TRIGGER:"btp_rt_tg",METADATA_LIST:"btp_ml",GENRE_LIST:"btp_gl",PRODUCTION_STATUS:"btp_ps",SET_PREFERRED_SERVICES:"btp_sps"},r={ratingButtonRatedAriaLabel:{id:"common_ariaLabels_ratingButtonRated",defaultMessage:"Your rating: {rating}"},ratingButtonUnratedAriaLabel:{id:"common_ariaLabels_ratingButtonUnrated",defaultMessage:"Rate {titleName}"},ratingPromptRateLabel:{id:"common_ratingPrompt_rate",defaultMessage:"Rate"},closePrompt:{id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"},addToList:{id:"common_add_to_list_buttonText",defaultMessage:"Add to list"},trailer:{id:"common_buttons_trailer",defaultMessage:"Trailer"}},o="released"},4649:function(e,t,a){a.d(t,{a:function(){return d}});var s=a(52322),r=a(2784),o=a(46138),i=a(88169),n=a(63370),l=a(96557),c=a(35223);let d=e=>{let{title:t}=e,a=(0,o.Z)(),d=(0,n.K)({originalTitleText:t?.originalTitleText,titleText:t?.titleText}),[p,u]=(0,r.useState)(!1);return t&&d?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.SecondaryButton,{width:"full-width",preIcon:"playlist-add-check","data-testid":c.z7.ADD_TO_LIST,onSelect:()=>u(!0),children:a.formatMessage(c.TY.addToList)}),(0,s.jsx)(l.Z,{constId:t.id,primaryImage:t.primaryImage,primaryText:d,imageType:"name",isOpen:p,onClose:()=>{u(!1)}})]}):null}}}]);

