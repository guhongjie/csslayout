(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7983],{6544:function(e,t,n){"use strict";n.d(t,{n:function(){return s}});n(7294);var r=n(3145),a=n(1903),c=n(5893),s=function(e){var t=e.patterns;return(0,c.jsxs)("section",{children:[(0,c.jsx)(r.Heading,{level:2,children:"See also"}),(0,c.jsx)("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"1.5rem"},children:t.map((function(e){return(0,c.jsx)(a.T,{pattern:e},e)}))})]})}},5608:function(e,t,n){"use strict";n.d(t,{_:function(){return d}});var r=n(7294),a=n(9008),c=n(3145),s=n(5893),i=function(){var e=r.useRef(null);return r.useEffect((function(){var t=e.current;if(t){var n=document.createElement("script");return n.src="https://cdn.carbonads.com/carbon.js?serve=CE7I6KQL&placement=csslayoutio",n.async=!0,n.id="_carbonads_js",t.appendChild(n),function(){t.removeChild(n)}}}),[]),(0,s.jsx)("div",{ref:e})},o=n(6708),l=n(2915),d=function(e){var t=e.pattern,n=e.children,r=(0,o.o)(t);return(0,s.jsxs)(l.A,{title:t,children:[(0,s.jsxs)(a.default,{children:[(0,s.jsxs)("title",{children:[t," - CSS Layout"]}),(0,s.jsx)("meta",{name:"title",content:"".concat(t," - CSS Layout")}),(0,s.jsx)("meta",{property:"og:image",content:"https://csslayout.io/assets/patterns/".concat(r,".png")}),(0,s.jsx)("meta",{property:"og:title",content:"".concat(t," - CSS Layout")}),(0,s.jsx)("meta",{property:"og:url",content:"https://csslayout.io/patterns/".concat(r)}),(0,s.jsx)("meta",{property:"twitter:image",content:"https://csslayout.io/assets/patterns/".concat(r,".png")}),(0,s.jsx)("meta",{property:"twitter:title",content:"".concat(t," - CSS Layout")}),(0,s.jsx)("meta",{property:"twitter:url",content:"https://csslayout.io/patterns/".concat(r)})]}),(0,s.jsxs)("div",{className:"block-container",children:[(0,s.jsxs)("div",{className:"page-home__hero",children:[(0,s.jsx)(c.Spacer,{size:"extraLarge"}),(0,s.jsx)(c.Heading,{level:1,children:t}),(0,s.jsx)(c.Spacer,{size:"large"}),(0,s.jsx)("div",{className:"block-ad",children:(0,s.jsx)(i,{})}),(0,s.jsx)(c.Spacer,{size:"medium"})]}),n,(0,s.jsx)(c.Spacer,{size:"extraLarge"})]})]})}},2219:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(9008),c=n(3145),s=n(5046),i=n(6544),o=n(3938),l=n(5608),d=n(3680),u=n(7389),p=n(5893);t.default=function(){var e=r.useContext(s.T3),t=e.prefix,n=e.container;return n=n||"cards",(0,p.jsxs)(l._,{pattern:o.c.CardLayout,children:[(0,p.jsxs)(a.default,{children:[(0,p.jsx)("meta",{name:"description",content:"Create a card layout with CSS flexbox"}),(0,p.jsx)("meta",{name:"og:description",content:"Create a card layout with CSS flexbox"}),(0,p.jsx)("meta",{name:"twitter:description",content:"Create a card layout with CSS flexbox"}),(0,p.jsx)("meta",{name:"keywords",content:"css card layout, css flexbox, css layout"})]}),(0,p.jsx)(d.Z,{html:""+'\n<div class="'.concat(t).concat(n,'">\n    \x3c!-- A card with given width --\x3e\n    <div class="').concat(t).concat(n,'__item">\n        ...\n    </div>\n\n    \x3c!-- Repeat other cards --\x3e\n    ...\n</div>\n'),css:""+"\n.".concat(t).concat(n," {\n    display: flex;\n\n    /* Put a card in the next row when previous cards take all width */\n    flex-wrap: wrap;\n\n    margin-left: -8px;\n    margin-right: -8px;\n}\n\n.").concat(t).concat(n,"__item {\n    /* There will be 4 cards per row */\n    flex-basis: 25%;\n\n    padding-left: 8px;\n    padding-right: 8px;\n}\n"),children:(0,p.jsx)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"8px"},children:(0,p.jsx)("div",{style:{display:"flex",flexWrap:"wrap",margin:"0 -8px",width:"60%"},children:Array(10).fill(0).map((function(e,t){return(0,p.jsx)("div",{style:{flexBasis:"25%",marginBottom:"24px",padding:"0 8px"},children:(0,p.jsx)(u.Z,{height:80})},t)}))})})}),(0,p.jsx)(c.Spacer,{size:"extraLarge"}),(0,p.jsx)(i.n,{patterns:[o.c.Card,o.c.MasonryGrid,o.c.SimpleGrid]})]})}},3680:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});n(7294);var r=n(3145),a=n(4942),c=n(9235),s=n(1418),i=n(5893);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.children,n=e.language;return(0,i.jsx)(c.ZP,l(l({},c.lG),{},{theme:s.Z,code:t.trim(),language:n,children:function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,c=e.getTokenProps;return(0,i.jsx)("pre",{className:"block-code ".concat(t),style:l({},n),children:r.map((function(e,t){return(0,i.jsx)("div",l(l({},a({line:e,key:t})),{},{children:e.map((function(e,t){return(0,i.jsx)("span",l({},c({token:e,key:t})),t)}))}),t)}))})}}))},u=function(e){var t=e.children,n=e.css,a=e.html;return(0,i.jsxs)(r.Window,{children:[(0,i.jsx)("div",{className:"demo__html",children:(0,i.jsx)(d,{language:"markup",children:a})}),(0,i.jsx)("div",{className:"demo__css",children:(0,i.jsx)(d,{language:"css",children:n})}),(0,i.jsx)("div",{className:"demo__live",children:t})]})}},7389:function(e,t,n){"use strict";n(7294);var r=n(5893);t.Z=function(e){var t=e.height,n=void 0===t?8:t;return(0,r.jsx)("div",{style:{backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:"0.25rem",height:"".concat(n,"px"),width:"100%"}})}},2122:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/card-layout",function(){return n(2219)}])}},function(e){e.O(0,[9774,1136,8527,3797,2888,179],(function(){return t=2122,e(e.s=t);var t}));var t=e.O();_N_E=t}]);