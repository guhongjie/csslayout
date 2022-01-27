(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3637],{6544:function(n,t,e){"use strict";e.d(t,{n:function(){return o}});e(7294);var r=e(3145),c=e(1903),a=e(5893),o=function(n){var t=n.patterns;return(0,a.jsxs)("section",{children:[(0,a.jsx)(r.Heading,{level:2,children:"See also"}),(0,a.jsx)("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"1.5rem"},children:t.map((function(n){return(0,a.jsx)(c.T,{pattern:n},n)}))})]})}},5608:function(n,t,e){"use strict";e.d(t,{_:function(){return l}});var r=e(7294),c=e(9008),a=e(3145),o=e(5893),s=function(){var n=r.useRef(null);return r.useEffect((function(){var t=n.current;if(t){var e=document.createElement("script");return e.src="https://cdn.carbonads.com/carbon.js?serve=CE7I6KQL&placement=csslayoutio",e.async=!0,e.id="_carbonads_js",t.appendChild(e),function(){t.removeChild(e)}}}),[]),(0,o.jsx)("div",{ref:n})},i=e(6708),d=e(2915),l=function(n){var t=n.pattern,e=n.children,r=(0,i.o)(t);return(0,o.jsxs)(d.A,{title:t,children:[(0,o.jsxs)(c.default,{children:[(0,o.jsxs)("title",{children:[t," - CSS Layout"]}),(0,o.jsx)("meta",{name:"title",content:"".concat(t," - CSS Layout")}),(0,o.jsx)("meta",{property:"og:image",content:"https://csslayout.io/assets/patterns/".concat(r,".png")}),(0,o.jsx)("meta",{property:"og:title",content:"".concat(t," - CSS Layout")}),(0,o.jsx)("meta",{property:"og:url",content:"https://csslayout.io/patterns/".concat(r)}),(0,o.jsx)("meta",{property:"twitter:image",content:"https://csslayout.io/assets/patterns/".concat(r,".png")}),(0,o.jsx)("meta",{property:"twitter:title",content:"".concat(t," - CSS Layout")}),(0,o.jsx)("meta",{property:"twitter:url",content:"https://csslayout.io/patterns/".concat(r)})]}),(0,o.jsxs)("div",{className:"block-container",children:[(0,o.jsxs)("div",{className:"page-home__hero",children:[(0,o.jsx)(a.Spacer,{size:"extraLarge"}),(0,o.jsx)(a.Heading,{level:1,children:t}),(0,o.jsx)(a.Spacer,{size:"large"}),(0,o.jsx)("div",{className:"block-ad",children:(0,o.jsx)(s,{})}),(0,o.jsx)(a.Spacer,{size:"medium"})]}),e,(0,o.jsx)(a.Spacer,{size:"extraLarge"})]})]})}},6180:function(n,t,e){"use strict";e.r(t);var r=e(8152),c=e(7294),a=e(9008),o=e(3145),s=e(5046),i=e(6544),d=e(3938),l=e(5608),p=e(9053),x=e(3680),u=e(7389),h=e(3110),j=e(5893);t.default=function(){var n=c.useContext(s.T3),t=n.prefix,e=n.container;e=e||"accordion";var m=c.useState(1),v=(0,r.Z)(m,2),f=v[0],g=v[1],b=function(n){var t=n.index,e=n.title,r=n.children,c=t===f;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{style:{borderBottom:"1px solid rgba(0, 0, 0, 0.3)"},children:[(0,j.jsxs)("div",{style:{alignItems:"center",cursor:"pointer",display:"flex",padding:"16px"},onClick:function(){return g(c?-1:t)},children:[(0,j.jsx)("div",{style:{marginRight:"12px"},children:(0,j.jsx)(h.Z,{size:8,corner:c?"b":"r"})}),(0,j.jsx)("div",{style:{flex:1},children:e})]}),(0,j.jsx)("div",{style:{borderTop:"1px solid rgba(0, 0, 0, 0.3)",display:c?"block":"none",padding:"16px"},children:r})]})})};return(0,j.jsxs)(l._,{pattern:d.c.Accordion,children:[(0,j.jsxs)(a.default,{children:[(0,j.jsx)("meta",{name:"description",content:"Create an accordion with CSS flexbox"}),(0,j.jsx)("meta",{name:"og:description",content:"Create an accordion with CSS flexbox"}),(0,j.jsx)("meta",{name:"twitter:description",content:"Create an accordion with CSS flexbox"}),(0,j.jsx)("meta",{name:"keywords",content:"css accordion, css flexbox"})]}),(0,j.jsx)(x.Z,{html:""+'\n\x3c!-- Container --\x3e\n<div class="'.concat(t).concat(e,'">\n    \x3c!-- Each accordion item --\x3e\n    <div class="').concat(t).concat(e,'__item">\n        \x3c!-- Heading --\x3e\n        <div class="').concat(t).concat(e,'__header">\n            \x3c!-- The toggle icon --\x3e\n            <div class="').concat(t).concat(e,'__toggle">...</div>\n\n            \x3c!-- The title --\x3e\n            <div class="').concat(t).concat(e,'__title">\n                ...\n            </div>\n        </div>\n\n        \x3c!-- The content --\x3e\n        <div class="').concat(t).concat(e,'__content">\n            ...\n        </div>\n    </div>\n\n    \x3c!-- Repeat other item --\x3e\n    ...\n</div>\n'),css:""+"\n.".concat(t).concat(e," {\n    /* Border */\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    border-bottom-color: transparent;\n    border-radius: 4px;\n}\n\n.").concat(t).concat(e,"__item {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.").concat(t).concat(e,"__header {\n    /* Center the content horizontally */\n    align-items: center;\n    display: flex;\n\n    cursor: pointer;\n    padding: 16px;\n}\n\n.").concat(t).concat(e,"__toggle {\n    margin-right: 12px;\n}\n\n.").concat(t).concat(e,"__title {\n    /* Take remaining width */\n    flex: 1;\n}\n\n.").concat(t).concat(e,"__content {\n    /* For not selected item */\n    display: none;\n\n    border-top: 1px solid rgba(0, 0, 0, 0.3);\n    padding: 16px;\n}\n\n.").concat(t).concat(e,"__content--selected {\n    /* For selected item */\n    display: block;\n}\n                "),children:(0,j.jsx)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"8px"},children:(0,j.jsxs)("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",borderBottomColor:"transparent",borderRadius:"4px",width:"60%"},children:[(0,j.jsx)(b,{index:0,title:(0,j.jsx)("div",{style:{width:"40%"},children:(0,j.jsx)(u.Z,{})}),children:(0,j.jsx)("div",{style:{marginBottom:"16px"},children:(0,j.jsx)(p.Z,{numberOfBlocks:10})})}),(0,j.jsx)(b,{index:1,title:(0,j.jsx)("div",{style:{width:"80%"},children:(0,j.jsx)(u.Z,{})}),children:(0,j.jsx)("div",{style:{marginBottom:"16px"},children:(0,j.jsx)(p.Z,{numberOfBlocks:15})})}),(0,j.jsx)(b,{index:2,title:(0,j.jsx)("div",{style:{width:"60%"},children:(0,j.jsx)(u.Z,{})}),children:(0,j.jsx)("div",{style:{marginBottom:"16px"},children:(0,j.jsx)(p.Z,{numberOfBlocks:10})})})]})})}),(0,j.jsx)(o.Spacer,{size:"extraLarge"}),(0,j.jsx)(i.n,{patterns:[d.c.QuestionsAndAnswers]})]})}},9053:function(n,t,e){"use strict";e(7294);var r=e(7146),c=e(5893);t.Z=function(n){var t=n.backgroundColor,e=void 0===t?"rgba(0, 0, 0, 0.3)":t,a=n.blockHeight,o=void 0===a?4:a,s=n.justify,i=void 0===s?"start":s,d=n.numberOfBlocks,l=void 0===d?1:d;return(0,c.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:i,width:"100%"},children:Array(l).fill(0).map((function(n,t){var a=(0,r.M)(1,5);return(0,c.jsx)("div",{style:{marginBottom:"8px",marginRight:"8px",width:"".concat(10*a,"%")},children:(0,c.jsx)("div",{style:{backgroundColor:e,borderRadius:"9999px",height:"".concat(o,"px"),width:"100%"}})},t)}))})}},3680:function(n,t,e){"use strict";e.d(t,{Z:function(){return p}});e(7294);var r=e(3145),c=e(4942),a=e(9235),o=e(1418),s=e(5893);function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function d(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){(0,c.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var l=function(n){var t=n.children,e=n.language;return(0,s.jsx)(a.ZP,d(d({},a.lG),{},{theme:o.Z,code:t.trim(),language:e,children:function(n){var t=n.className,e=n.style,r=n.tokens,c=n.getLineProps,a=n.getTokenProps;return(0,s.jsx)("pre",{className:"block-code ".concat(t),style:d({},e),children:r.map((function(n,t){return(0,s.jsx)("div",d(d({},c({line:n,key:t})),{},{children:n.map((function(n,t){return(0,s.jsx)("span",d({},a({token:n,key:t})),t)}))}),t)}))})}}))},p=function(n){var t=n.children,e=n.css,c=n.html;return(0,s.jsxs)(r.Window,{children:[(0,s.jsx)("div",{className:"demo__html",children:(0,s.jsx)(l,{language:"markup",children:c})}),(0,s.jsx)("div",{className:"demo__css",children:(0,s.jsx)(l,{language:"css",children:e})}),(0,s.jsx)("div",{className:"demo__live",children:t})]})}},7389:function(n,t,e){"use strict";e(7294);var r=e(5893);t.Z=function(n){var t=n.height,e=void 0===t?8:t;return(0,r.jsx)("div",{style:{backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:"0.25rem",height:"".concat(e,"px"),width:"100%"}})}},3110:function(n,t,e){"use strict";e(7294);var r=e(5893);t.Z=function(n){var t=n.backgroundColor,e=void 0===t?"rgba(0, 0, 0, .3)":t,c=n.size,a=void 0===c?16:c,o=n.corner,s="",i="";switch(void 0===o?"tl":o){case"t":s="0 ".concat(a,"px ").concat(a,"px ").concat(a,"px"),i="transparent transparent ".concat(e," transparent");break;case"r":s="".concat(a,"px 0 ").concat(a,"px ").concat(2*a,"px"),i="transparent transparent transparent ".concat(e);break;case"b":s="".concat(a,"px ").concat(a,"px 0 ").concat(a,"px"),i="".concat(e," transparent transparent transparent");break;case"l":s="".concat(a,"px ").concat(2*a,"px ").concat(a,"px 0"),i="transparent ".concat(e," transparent transparent");break;case"tr":s="0 ".concat(a,"px ").concat(a,"px 0"),i="transparent ".concat(e," transparent transparent");break;case"br":s="0 0 ".concat(a,"px ").concat(a,"px"),i="transparent transparent ".concat(e," transparent");break;case"bl":s="".concat(a,"px 0 0 ").concat(a,"px"),i="transparent transparent transparent ".concat(e);break;case"tl":default:s="".concat(a,"px ").concat(a,"px 0 0"),i="".concat(e," transparent transparent transparent")}return(0,r.jsx)("div",{style:{borderColor:i,borderStyle:"solid",borderWidth:s,height:0,width:0}})}},7146:function(n,t,e){"use strict";e.d(t,{M:function(){return r}});var r=function(n,t){return n+Math.round(Math.random()*(t-n))}},8348:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accordion",function(){return e(6180)}])}},function(n){n.O(0,[9774,1136,8527,3797,2888,179],(function(){return t=8348,n(n.s=t);var t}));var t=n.O();_N_E=t}]);