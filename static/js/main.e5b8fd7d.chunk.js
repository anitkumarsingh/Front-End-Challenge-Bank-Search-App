(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=(a(91),a(22)),l=a(34),s=a(13),m=a(14),u=a(18),p=a(17),h=a(19),d=a(6),g=a(130),b=a(132),f=a(133),E=a(134),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={bankID:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.bank_id;this.setState({bankID:e})}},{key:"render",value:function(){var e=this,t=JSON.parse(localStorage.getItem("bankLocalData")).filter(function(t){return t.bank_id===Number(e.state.bankID)}).slice(0,1),a=this.props.classes,n=t.map(function(e){return r.a.createElement("div",{className:a.cardContainer,key:e.bank_id+"p"},r.a.createElement(g.a,{className:a.card},r.a.createElement(b.a,{className:a.media,image:"Images/bank2.jpeg",title:e.bank_name}),r.a.createElement(f.a,null,r.a.createElement(E.a,{variant:"h5",component:"h2",className:a.bottomDetails},"Bank Name : ",e.bank_name),r.a.createElement(E.a,{variant:"h5",component:"h2",className:a.bottomDetails},"Location : ",e.city+" ,"+e.state),r.a.createElement("hr",null),r.a.createElement(E.a,{variant:"h5",component:"h2",className:a.bottomDetails},"IFSC : ",e.ifsc),r.a.createElement(E.a,{variant:"h5",component:"h2",className:a.bottomDetails},"Branch : ",e.branch),r.a.createElement(E.a,{variant:"h5",component:"h2",className:a.bottomDetails},"Address : ",e.address))))});return r.a.createElement(r.a.Fragment,null,n)}}]),t}(n.Component),y=Object(d.a)(function(e){return{card:{boxShadow:"12px 15px 20px rgba(0, 0, 0, 0.1)","&:hover":{boxShadow:"12px 15px 20px rgba(0, 0, 0, 0.1)",transition:"0.2s box-shadow ease-in-out, 0.2s background-color ease-in-out, 0.2s border-color ease-in-out"}},media:{height:0,paddingTop:"56.25%"},cardContainer:{marginLeft:"auto",marginRight:"auto",width:"70%",marginBottom:50,marginTop:50},bottomDetails:{margin:"5px 0 5px 0"},title:{fontSize:"5em"}}})(v),k=a(53),O=a(11),j=a(135),x=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.props.loadText?this.props.loadText:"Please Wait Its Loading....";return r.a.createElement("div",{className:e.loadingContainer},r.a.createElement("div",{className:e.centered},r.a.createElement(j.a,{color:"secondary"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h5",component:"h4"},t)))}}]),t}(r.a.Component),C=Object(d.a)(function(e){var t;return{loadingContainer:(t={position:"fixed",width:"100%",top:"50px",paddingTop:"50%",height:"100%",backgroundColor:"#fff",zIndex:"1000"},Object(O.a)(t,e.breakpoints.down("sm"),{paddingTop:"50%"}),Object(O.a)(t,e.breakpoints.up("lg"),{paddingTop:"20%"}),Object(O.a)(t,e.breakpoints.only("lg"),{position:"fixed",width:"100%",top:"50px",paddingTop:"50%",height:"100%",backgroundColor:"#fff",zIndex:"1000",left:"0px"}),Object(O.a)(t,e.breakpoints.between("sm","md"),{paddingTop:"40%",zIndex:"1000"}),Object(O.a)(t,e.breakpoints.up("md"),{paddingTop:"25%"}),t),centered:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",textAlign:"center"}}})(x),N=a(24),S=(a(67),a(55)),w=a(71),P=a.n(w),I=a(39),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handlePageSizeChange=function(e){a.setState({pageSize:e.target.value})},a.state={pager:{},pageSize:10},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.items&&this.props.items.length&&this.setPage(this.props.initialPage)}},{key:"componentDidMount",value:function(){console.log(this.props.pageSize)}},{key:"componentDidUpdate",value:function(e,t){this.props.items!==e.items&&this.setPage(this.props.initialPage)}},{key:"setPage",value:function(e){var t=this.props,a=t.items,n=t.pageSize;console.log(this.props.pageSize);var r=this.state.pager;if(!(e<1||e>r.totalPages)){r=this.getPager(a.length,e,n);var c=a.slice(r.startIndex,r.endIndex+1);this.setState({pager:r}),this.props.onChangePage(c)}}},{key:"getPager",value:function(e,t,a){t=t||1,a=a||10;var n,r,c=Math.ceil(e/a);c<=10?(n=1,r=c):t<=6?(n=1,r=10):t+4>=c?(n=c-9,r=c):(n=t-5,r=t+4);var i=(t-1)*a,o=Math.min(i+a-1,e-1),l=Object(S.a)(Array(r+1-n).keys()).map(function(e){return n+e});return{totalItems:e,currentPage:t,pageSize:a,totalPages:c,startPage:n,endPage:r,startIndex:i,endIndex:o,pages:l}}},{key:"render",value:function(){var e=this,t=this.props.pageSize;console.log(t);var a=this.state.pager;return!a.pages||a.pages.length<=1?null:r.a.createElement("div",null,r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:1===a.currentPage?"disabled":""},r.a.createElement("a",{onClick:function(){return e.setPage(1)}},"First")),r.a.createElement("li",{className:1===a.currentPage?"disabled":""},r.a.createElement("a",{onClick:function(){return e.setPage(a.currentPage-1)}},"Previous")),a.pages.map(function(t,n){return r.a.createElement("li",{key:n,className:a.currentPage===t?"active":""},r.a.createElement("a",{onClick:function(){return e.setPage(t)}},t))}),r.a.createElement("li",{className:a.currentPage===a.totalPages?"disabled":""},r.a.createElement("a",{onClick:function(){return e.setPage(a.currentPage+1)}},"Next")),r.a.createElement("li",{className:a.currentPage===a.totalPages?"disabled":""},r.a.createElement("a",{onClick:function(){return e.setPage(a.totalPages)}},"Last"))))}}]),t}(r.a.Component),D=function(){return"/"},T=function(e){return"bank/".concat(e)},F=function(){function e(t,a){Object(s.a)(this,e),this.searchFunction=t,this.resultsHandler=a,this.query="",this.queryCount=0,this.cache={},this.cacheHits=0,this.cacheHitsHistory=[]}return Object(m.a)(e,[{key:"changeQuery",value:function(e){var t=this;e.length<3?this.resultsHandler([]):this.cache[e]?(this.cacheHits=this.cacheHits+1,this.queryCount=this.queryCount+1,this.cacheHitsHistory.concat(e),console.log("retrieved query from cache:",e),this.resultsHandler(this.cache[e])):this.searchFunction(e).then(function(a){t.cache[e]=a,t.queryCount=t.queryCount+1,console.log("query added to cache:",e),t.resultsHandler(a)})}}]),e}(),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=sessionStorage.getItem("favouteData");console.log(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.props.data.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{style:{textAlign:"center",fontSize:"1.2em"}},"List Of Favourite Banks"),r.a.createElement("table",{className:"table table-dark"},r.a.createElement("thead",{style:{backgroundColor:Object(I.fade)("#ec407a",.75),color:"white"}},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Bank Name"))),this.props.data.map(function(e){return r.a.createElement("tbody",{key:Math.floor(1e4*Math.random())+1},r.a.createElement("tr",null,r.a.createElement("td",{style:{color:"green"}},e)))}))):"")}}]),t}(n.Component),_=Object(d.a)(function(e){return{root:{flexGrow:1},title:Object(O.a)({flexGrow:1,textAlign:"center",padding:"50px 0 50px 0",fontSize:"2em"},e.breakpoints.up("sm"),{display:"block"})}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:t.title,variant:"h6",noWrap:!0},"Encounter error ,Please try after some time",r.a.createElement("span",{role:"img","aria-label":"Message"},"\ud83d\ude22"),r.a.createElement("br",null),r.a.createElement("br",null)))}),B=a(136),L=a(141),R=a(137),W=a(142),H=a(140),M=a(143),G=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).onChangePage=function(t){e.setState({pageOfItems:t})},e.handleQueryChange=function(t){e.setState({query:t}),e.CachedSearch.changeQuery(t)},e.handleResults=function(t){e.setState({pageOfItems:t})},e.handlePageSizeChange=function(t){e.setState({pageSize:t.target.value})},e.state={pageOfItems:[],cityName:"BANGALORE",query:"",results:[],pageSize:10,labelWidth:0,loadText:"Please Wait Its Loading....",myFavoriteBanks:[],isFaved:!1,color:"black"},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"addFavoriteChange",value:function(e){var t=JSON.parse(localStorage.getItem("bankLocalData")).filter(function(t){return t.ifsc===e}).map(function(e){return e.bank_name});this.setState({myFavoriteBanks:[].concat(Object(S.a)(this.state.myFavoriteBanks),[t])}),this.state.myFavoriteBanks.forEach(function(){document.getElementById(e).className="fav"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.data;if(!n)return null;var c=n.successPayload;return this.CachedSearch=new F(function(e){return new Promise(function(t,a){var n=new RegExp("^".concat(e),"i");t(c.filter(function(e){return n.test(e.ifsc)||n.test(e.bank_name)||n.test(e.bank_id)||n.test(e.branch)||n.test(e.address)||n.test(e.city)||n.test(e.state)}))})},this.handleResults),localStorage.setItem("bankLocalData",JSON.stringify(c)),n.fetching?r.a.createElement(C,{loadText:this.state.loadText}):n.error?r.a.createElement(_,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:["container"].join(" ")},r.a.createElement(B.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",className:a.searchPostion},r.a.createElement(B.a,{item:!0}),r.a.createElement(B.a,{item:!0},r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(P.a,null)),r.a.createElement(L.a,{placeholder:"Search\u2026",onChange:function(t){var a=t.target.value;return e.handleQueryChange(a)},classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"Search"}}))))),r.a.createElement("br",null),r.a.createElement("div",{className:["container","table-responsive"].join(" ")},r.a.createElement("div",{className:["text-left"].join(" ")},r.a.createElement("table",{className:["table","table-dark "].join(" ")},r.a.createElement("thead",{className:["thead-dark",a.tbleHeader].join(" ")},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"IFSC"),r.a.createElement("th",{scope:"col"},"Branch Name"),r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Branch"),r.a.createElement("th",{scope:"col"},"Address"),r.a.createElement("th",{scope:"col"},"District"),r.a.createElement("th",{scope:"col"},"State"))),this.state.pageOfItems.map(function(t){return r.a.createElement("tbody",{key:"i"+t.ifsc},r.a.createElement("tr",{className:"list"},r.a.createElement("td",{onClick:function(){return e.addFavoriteChange(t.ifsc)},style:{color:"#23527c"},id:t.ifsc},t.ifsc),r.a.createElement("td",null,r.a.createElement(o.b,{to:T(t.bank_id)},t.bank_name)),r.a.createElement("td",null,r.a.createElement(o.b,{to:T(t.bank_id)},t.bank_id)),r.a.createElement("td",null,r.a.createElement(o.b,{to:T(t.bank_id)},t.branch)),r.a.createElement("td",null,r.a.createElement(o.b,{to:T(t.bank_id)},t.address)),r.a.createElement("td",null,r.a.createElement(o.b,{to:T(t.bank_id)},t.district)),r.a.createElement("td",null,r.a.createElement(o.b,{to:T(t.bank_id)},t.state))))})),r.a.createElement(B.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(B.a,{item:!0},r.a.createElement(z,{items:c,onChangePage:this.onChangePage,pageSize:Number(this.state.pageSize)})),r.a.createElement(B.a,{item:!0},r.a.createElement(R.a,{variant:"outlined",className:a.formControl},r.a.createElement(W.a,{ref:function(t){e.InputPageSizeRef=t},htmlFor:"pageDataSize"}),r.a.createElement(H.a,{native:!0,value:this.state.pageSize,onChange:this.handlePageSizeChange,style:{height:"30px"},input:r.a.createElement(M.a,{name:"pageSize",labelWidth:this.state.labelWidth,id:"pageDataSize"})},[10,50,100,200,500].map(function(e){return r.a.createElement("option",{key:e+"i",value:e,className:a.selectPaddingOpt},e)}))))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(A,{data:this.state.myFavoriteBanks})))}}]),t}(n.Component),q=Object(d.a)(function(e){return{root:{flexGrow:1},title:Object(O.a)({flexGrow:1,display:"none",marginLeft:35},e.breakpoints.up("sm"),{display:"block"}),search:Object(O.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(I.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(I.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),fontSize:"14px",height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(O.a)({padding:e.spacing(7),transition:e.transitions.create("width"),width:"100%",fontSize:"14px"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200,"&::placeholder":{color:"#ec407a",opacity:1,fontSize:"14px"}}}),paginationContainer:{margin:"50px 20px 10px 25px"},formControl:{margin:e.spacing(3),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},selectPaddingOpt:{margin:"10px",fontSize:"14px",color:"#ec407a"},tbleHeader:{backgroundColor:Object(I.fade)("#ec407a",.75),color:"white"},searchPostion:{marginTop:"-95px"}}})(G),U=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleChange=function(t){var a=e.props.fetchUserData,n=t.target.value;e.setState({cityName:n,loadText:"Please wait loading Bank's details from "+t.target.value}),a(n)},e.state={cityName:"BANGALORE",loadText:"Please Wait Its Loading...."},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.cityName;(0,this.props.fetchUserData)(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.loading,c=t.getResult,i=this.state.cityName;return n?r.a.createElement(C,{loadText:this.state.loadText}):r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("div",{className:["container"].join(" ")},r.a.createElement(B.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(B.a,{item:!0},r.a.createElement(R.a,{variant:"outlined",className:a.formControl},r.a.createElement(W.a,{ref:function(t){e.InputLabelRef=t},htmlFor:"explore-city"}),r.a.createElement(H.a,{native:!0,value:this.state.cityName,onChange:this.handleChange,style:{height:"30px",fontSize:"14px"},input:r.a.createElement(M.a,{name:"city",labelWidth:this.state.labelWidth,id:"explore-city"})},["Bangalore","Mysore","Mumbai","Delhi","Patna"].map(function(e){return r.a.createElement("option",{key:e+"i",value:e,className:a.selectPaddingOpt},e)})))))),i&&r.a.createElement(q,{data:c(i)}))}}]),t}(n.Component),J=Object(k.b)(function(e){return{getResult:function(t){return N.a.selectors.getResult(e,t)}}},function(e){return{fetchUserData:function(t){return e(N.a.actions.invoke({endpoint:"https://vast-shore-74260.herokuapp.com/banks?city=".concat(t.toUpperCase()),cache:{key:t}}))}}}),Q=Object(d.a)(function(e){return{formControl:{margin:e.spacing(3),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},selectPaddingOpt:{margin:"10px",fontSize:"14px",color:"#ec407a"}}})(J(U)),Y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.match;return r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"".concat(e.path,"/"),component:Q}),r.a.createElement(l.a,{path:"".concat(e.path,"bank/:bank_id"),component:y}),r.a.createElement(l.a,{path:"".concat(e.path,"favourite"),component:A}))}}]),t}(r.a.Component),K=a(138),V=a(139),$=Object(d.a)(function(e){return{root:{flexGrow:1},title:Object(O.a)({flexGrow:1,fontSize:"1.2em",display:"none",color:"white"},e.breakpoints.up("sm"),{display:"block"}),AppContainer:{background:"#3379b7"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(K.a,{position:"static",className:t.AppContainer},r.a.createElement(V.a,null,r.a.createElement(o.b,{to:D(),style:{textDecoration:"none"}},r.a.createElement(E.a,{className:t.title,variant:"h6",noWrap:!0},"Front End Coding Challenge")))))}),X=Object(d.a)(function(e){return{root:{flexGrow:1},title:Object(O.a)({flexGrow:1,textAlign:"center",color:"white",fontSize:"1.2em",display:"none"},e.breakpoints.up("sm"),{display:"block"}),FootContainer:{background:"#3379b7"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(K.a,{position:"static",className:t.FootContainer},r.a.createElement(V.a,null,r.a.createElement(E.a,{className:t.title,variant:"h6",noWrap:!0},"Developed By Anit Kumar ",r.a.createElement("span",{role:"img","aria-label":"happy mode"},"\ud83d\ude04")))))}),Z=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{component:$}),r.a.createElement(l.c,null,r.a.createElement(l.a,{component:Y})),r.a.createElement(l.a,{component:X}))},ee=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{component:Z}))},te=a(26),ae=a(77),ne=a(49),re=a(63),ce=a(78),ie=a(79),oe={key:"api-caching-1",storage:a.n(ie).a},le=Object(te.createStore)(Object(re.a)(oe,Object(O.a)({},N.a.constants.NAME,N.a.reducer)),Object(ce.composeWithDevTools)(Object(te.applyMiddleware)(ae.a,ne.apiMiddleware,function(e){return function(t){return function(a){var n=t(a);return"persist/REHYDRATE"===a.type&&e.dispatch(N.a.actions.invalidateCache()),n}}}))),se=Object(re.b)(le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(80);N.a.config.DEFAULT_INVOKE_OPTIONS={method:"GET",headers:{Accept:"application/json"}},N.a.config.DEFAULT_CACHE_STRATEGY=N.a.cache.get(N.a.constants.CACHE_TYPES.TTL).buildStrategy({ttl:6e5}),i.a.render(r.a.createElement(k.a,{store:le},r.a.createElement(me.a,{persistor:se},r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,a){},86:function(e,t,a){e.exports=a(109)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.e5b8fd7d.chunk.js.map