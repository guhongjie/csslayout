(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6723],{6544:function(e,t,n){"use strict";n.d(t,{n:function(){return a}});n(7294);var r=n(3145),c=n(1903),s=n(5893),a=function(e){var t=e.patterns;return(0,s.jsxs)("section",{children:[(0,s.jsx)(r.Heading,{level:2,children:"See also"}),(0,s.jsx)("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"1.5rem"},children:t.map((function(e){return(0,s.jsx)(c.T,{pattern:e},e)}))})]})}},5608:function(e,t,n){"use strict";n.d(t,{_:function(){return l}});var r=n(7294),c=n(9008),s=n(3145),a=n(5893),i=function(){var e=r.useRef(null);return r.useEffect((function(){var t=e.current;if(t){var n=document.createElement("script");return n.src="https://cdn.carbonads.com/carbon.js?serve=CE7I6KQL&placement=csslayoutio",n.async=!0,n.id="_carbonads_js",t.appendChild(n),function(){t.removeChild(n)}}}),[]),(0,a.jsx)("div",{ref:e})},o=n(6708),d=n(2915),l=function(e){var t=e.pattern,n=e.children,r=(0,o.o)(t);return(0,a.jsxs)(d.A,{title:t,children:[(0,a.jsxs)(c.default,{children:[(0,a.jsxs)("title",{children:[t," - CSS Layout"]}),(0,a.jsx)("meta",{name:"title",content:"".concat(t," - CSS Layout")}),(0,a.jsx)("meta",{property:"og:image",content:"https://csslayout.io/assets/patterns/".concat(r,".png")}),(0,a.jsx)("meta",{property:"og:title",content:"".concat(t," - CSS Layout")}),(0,a.jsx)("meta",{property:"og:url",content:"https://csslayout.io/patterns/".concat(r)}),(0,a.jsx)("meta",{property:"twitter:image",content:"https://csslayout.io/assets/patterns/".concat(r,".png")}),(0,a.jsx)("meta",{property:"twitter:title",content:"".concat(t," - CSS Layout")}),(0,a.jsx)("meta",{property:"twitter:url",content:"https://csslayout.io/patterns/".concat(r)})]}),(0,a.jsxs)("div",{className:"block-container",children:[(0,a.jsxs)("div",{className:"page-home__hero",children:[(0,a.jsx)(s.Spacer,{size:"extraLarge"}),(0,a.jsx)(s.Heading,{level:1,children:t}),(0,a.jsx)(s.Spacer,{size:"large"}),(0,a.jsx)("div",{className:"block-ad",children:(0,a.jsx)(i,{})}),(0,a.jsx)(s.Spacer,{size:"medium"})]}),n,(0,a.jsx)(s.Spacer,{size:"extraLarge"})]})]})}},6996:function(e,t,n){"use strict";n.r(t);var r=n(7294),c=n(9008),s=n(3145),a=n(5046),i=n(6544),o=n(3938),d=n(5608),l=n(3680),u=n(5893);t.default=function(){var e=r.useContext(a.T3),t=e.prefix,n=e.container;return n=n||"three-dimensions-card",(0,u.jsxs)(d._,{pattern:o.c.ThreeDimensionsCard,children:[(0,u.jsxs)(c.default,{children:[(0,u.jsx)("meta",{name:"description",content:"Create a 3D card with CSS"}),(0,u.jsx)("meta",{name:"og:description",content:"Create a 3D card with CSS"}),(0,u.jsx)("meta",{name:"twitter:description",content:"Create a 3D card with CSS"}),(0,u.jsx)("meta",{name:"keywords",content:"css 3D card"})]}),(0,u.jsx)(l.Z,{html:""+'\n<div class="'.concat(t).concat(n,'">\n    ...\n</div>\n'),css:""+"\n:root {\n    --".concat(t).concat(n,"-left-side-width: 1rem;\n}\n\n.").concat(t).concat(n," {\n    position: relative;\n}\n\n/* The left side */\n.").concat(t).concat(n,"::before {\n    background: rgba(0, 0, 0, 0.3);\n    content: '';\n\n    /* Position */\n    top: var(--").concat(t).concat(n,"-left-side-width);\n    left: 0px;\n    position: absolute;\n    transform: translate(-100%, 0) skewY(-45deg);\n    transform-origin: left top;\n\n    /* Size */\n    height: 100%;\n    width: var(--").concat(t).concat(n,"-left-side-width);\n}\n\n/* The bottom side */\n.").concat(t).concat(n,"::after {\n    background: rgba(0, 0, 0, 0.3);\n    content: '';\n\n    /* Position */\n    bottom: 0px;\n    left: 0px;\n    position: absolute;\n    transform: translate(0, 100%) skewX(-45deg);\n    transform-origin: left top;\n\n    /* Size */\n    height: var(--").concat(t).concat(n,"-left-side-width);\n    width: 100%;\n}\n"),children:(0,u.jsx)("div",{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",padding:"8px"},children:(0,u.jsx)("div",{className:"three-dimensions-card",children:(0,u.jsx)("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",height:"8rem",width:"16rem"}})})})}),(0,u.jsx)(s.Spacer,{size:"extraLarge"}),(0,u.jsx)(i.n,{patterns:[o.c.Card,o.c.LayeredCard,o.c.StackedCards]})]})}},3680:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});n(7294);var r=n(3145),c=n(4942),s=n(9235),a=n(1418),i=n(5893);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){var t=e.children,n=e.language;return(0,i.jsx)(s.ZP,d(d({},s.lG),{},{theme:a.Z,code:t.trim(),language:n,children:function(e){var t=e.className,n=e.style,r=e.tokens,c=e.getLineProps,s=e.getTokenProps;return(0,i.jsx)("pre",{className:"block-code ".concat(t),style:d({},n),children:r.map((function(e,t){return(0,i.jsx)("div",d(d({},c({line:e,key:t})),{},{children:e.map((function(e,t){return(0,i.jsx)("span",d({},s({token:e,key:t})),t)}))}),t)}))})}}))},u=function(e){var t=e.children,n=e.css,c=e.html;return(0,i.jsxs)(r.Window,{children:[(0,i.jsx)("div",{className:"demo__html",children:(0,i.jsx)(l,{language:"markup",children:c})}),(0,i.jsx)("div",{className:"demo__css",children:(0,i.jsx)(l,{language:"css",children:n})}),(0,i.jsx)("div",{className:"demo__live",children:t})]})}},1199:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/three-dimensions-card",function(){return n(6996)}])}},function(e){e.O(0,[9774,1136,8527,3797,2888,179],(function(){return t=1199,e(e.s=t);var t}));var t=e.O();_N_E=t}]);