(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4685],{6544:function(e,t,n){"use strict";n.d(t,{n:function(){return c}});n(7294);var r=n(3145),s=n(1903),i=n(5893),c=function(e){var t=e.patterns;return(0,i.jsxs)("section",{children:[(0,i.jsx)(r.Heading,{level:2,children:"See also"}),(0,i.jsx)("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"1.5rem"},children:t.map((function(e){return(0,i.jsx)(s.T,{pattern:e},e)}))})]})}},5608:function(e,t,n){"use strict";n.d(t,{_:function(){return d}});var r=n(7294),s=n(9008),i=n(3145),c=n(5893),a=function(){var e=r.useRef(null);return r.useEffect((function(){var t=e.current;if(t){var n=document.createElement("script");return n.src="https://cdn.carbonads.com/carbon.js?serve=CE7I6KQL&placement=csslayoutio",n.async=!0,n.id="_carbonads_js",t.appendChild(n),function(){t.removeChild(n)}}}),[]),(0,c.jsx)("div",{ref:e})},o=n(6708),l=n(2915),d=function(e){var t=e.pattern,n=e.children,r=(0,o.o)(t);return(0,c.jsxs)(l.A,{title:t,children:[(0,c.jsxs)(s.default,{children:[(0,c.jsxs)("title",{children:[t," - CSS Layout"]}),(0,c.jsx)("meta",{name:"title",content:"".concat(t," - CSS Layout")}),(0,c.jsx)("meta",{property:"og:image",content:"https://csslayout.io/assets/patterns/".concat(r,".png")}),(0,c.jsx)("meta",{property:"og:title",content:"".concat(t," - CSS Layout")}),(0,c.jsx)("meta",{property:"og:url",content:"https://csslayout.io/patterns/".concat(r)}),(0,c.jsx)("meta",{property:"twitter:image",content:"https://csslayout.io/assets/patterns/".concat(r,".png")}),(0,c.jsx)("meta",{property:"twitter:title",content:"".concat(t," - CSS Layout")}),(0,c.jsx)("meta",{property:"twitter:url",content:"https://csslayout.io/patterns/".concat(r)})]}),(0,c.jsxs)("div",{className:"block-container",children:[(0,c.jsxs)("div",{className:"page-home__hero",children:[(0,c.jsx)(i.Spacer,{size:"extraLarge"}),(0,c.jsx)(i.Heading,{level:1,children:t}),(0,c.jsx)(i.Spacer,{size:"large"}),(0,c.jsx)("div",{className:"block-ad",children:(0,c.jsx)(a,{})}),(0,c.jsx)(i.Spacer,{size:"medium"})]}),n,(0,c.jsx)(i.Spacer,{size:"extraLarge"})]})]})}},8494:function(e,t,n){"use strict";n.r(t);var r=n(7294),s=n(9008),i=n(3145),c=n(5046),a=n(6544),o=n(3938),l=n(5608),d=n(9053),u=n(3680),x=n(2903),p=n(7389),h=n(5893);t.default=function(){var e=r.useContext(c.T3),t=e.prefix,n=e.container;return n=n||"container",(0,h.jsxs)(l._,{pattern:o.c.FeatureList,children:[(0,h.jsxs)(s.default,{children:[(0,h.jsx)("meta",{name:"description",content:"Create a feature list with CSS flexbox"}),(0,h.jsx)("meta",{name:"og:description",content:"Create a feature list with CSS flexbox"}),(0,h.jsx)("meta",{name:"twitter:description",content:"Create a feature list with CSS flexbox"}),(0,h.jsx)("meta",{name:"keywords",content:"css feature list, css flexbox"})]}),(0,h.jsx)(u.Z,{html:""+'\n\x3c!-- Feature item --\x3e\n<div class="'.concat(t).concat(n,'">\n    \x3c!-- Image --\x3e\n    <div class="').concat(t).concat(n,'__image">\n        ...\n    </div>\n\n    \x3c!-- Right side --\x3e\n    <div class="').concat(t).concat(n,'__feature">\n        ...\n    </div>\n</div>\n\n\x3c!-- Repeated items --\x3e\n...\n'),css:""+"\n.".concat(t).concat(n," {\n    display: flex;\n\n    /* OPTIONAL: Reverse the order of image and content */\n    flex-direction: row-reverse;\n\n    /* OPTIONAL: Spacing between items */\n    margin: 16px 0;\n}\n\n.").concat(t).concat(n,"__image {\n    width: 128px;\n}\n\n.").concat(t).concat(n,"__feature {\n    /* Take the remaining width */\n    flex: 1;\n}\n"),children:(0,h.jsx)("div",{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center"},children:(0,h.jsxs)("div",{style:{width:"60%"},children:[(0,h.jsxs)("div",{style:{display:"flex",marginBottom:"32px"},children:[(0,h.jsx)("div",{style:{margin:"0 16px"},children:(0,h.jsx)(x.Z,{size:128})}),(0,h.jsxs)("div",{style:{flex:1},children:[(0,h.jsx)("div",{style:{marginBottom:"32px"},children:(0,h.jsx)(p.Z,{height:8})}),(0,h.jsx)(d.Z,{numberOfBlocks:10})]})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"row-reverse",marginBottom:"32px"},children:[(0,h.jsx)("div",{style:{margin:"0 16px"},children:(0,h.jsx)(x.Z,{size:128})}),(0,h.jsxs)("div",{style:{flex:1},children:[(0,h.jsx)("div",{style:{marginBottom:"32px"},children:(0,h.jsx)(p.Z,{height:8})}),(0,h.jsx)(d.Z,{numberOfBlocks:15})]})]})]})})}),(0,h.jsx)(i.Spacer,{size:"extraLarge"}),(0,h.jsx)(a.n,{patterns:[o.c.FeatureComparison]})]})}},9053:function(e,t,n){"use strict";n(7294);var r=n(7146),s=n(5893);t.Z=function(e){var t=e.backgroundColor,n=void 0===t?"rgba(0, 0, 0, 0.3)":t,i=e.blockHeight,c=void 0===i?4:i,a=e.justify,o=void 0===a?"start":a,l=e.numberOfBlocks,d=void 0===l?1:l;return(0,s.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:o,width:"100%"},children:Array(d).fill(0).map((function(e,t){var i=(0,r.M)(1,5);return(0,s.jsx)("div",{style:{marginBottom:"8px",marginRight:"8px",width:"".concat(10*i,"%")},children:(0,s.jsx)("div",{style:{backgroundColor:n,borderRadius:"9999px",height:"".concat(c,"px"),width:"100%"}})},t)}))})}},3680:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});n(7294);var r=n(3145),s=n(4942),i=n(9235),c=n(1418),a=n(5893);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.children,n=e.language;return(0,a.jsx)(i.ZP,l(l({},i.lG),{},{theme:c.Z,code:t.trim(),language:n,children:function(e){var t=e.className,n=e.style,r=e.tokens,s=e.getLineProps,i=e.getTokenProps;return(0,a.jsx)("pre",{className:"block-code ".concat(t),style:l({},n),children:r.map((function(e,t){return(0,a.jsx)("div",l(l({},s({line:e,key:t})),{},{children:e.map((function(e,t){return(0,a.jsx)("span",l({},i({token:e,key:t})),t)}))}),t)}))})}}))},u=function(e){var t=e.children,n=e.css,s=e.html;return(0,a.jsxs)(r.Window,{children:[(0,a.jsx)("div",{className:"demo__html",children:(0,a.jsx)(d,{language:"markup",children:s})}),(0,a.jsx)("div",{className:"demo__css",children:(0,a.jsx)(d,{language:"css",children:n})}),(0,a.jsx)("div",{className:"demo__live",children:t})]})}},2903:function(e,t,n){"use strict";n(7294);var r=n(5893);t.Z=function(e){var t=e.backgroundColor,n=void 0===t?"rgba(0, 0, 0, .3)":t,s=e.size,i=void 0===s?16:s;return(0,r.jsx)("div",{style:{backgroundColor:n,borderRadius:"9999px",height:"".concat(i,"px"),width:"".concat(i,"px")}})}},7389:function(e,t,n){"use strict";n(7294);var r=n(5893);t.Z=function(e){var t=e.height,n=void 0===t?8:t;return(0,r.jsx)("div",{style:{backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:"0.25rem",height:"".concat(n,"px"),width:"100%"}})}},7146:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});var r=function(e,t){return e+Math.round(Math.random()*(t-e))}},5669:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feature-list",function(){return n(8494)}])}},function(e){e.O(0,[9774,1136,8527,3797,2888,179],(function(){return t=5669,e(e.s=t);var t}));var t=e.O();_N_E=t}]);