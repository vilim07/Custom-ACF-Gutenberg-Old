!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=window.wp.element},function(e,t,n){var r=n(4),l=n(5),c=n(6),o=n(8);e.exports=function(e,t){return r(e)||l(e,t)||c(e,t)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var r=n(1),l=n.n(r),c=n(2),o=n.n(c),a=n(0);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=wp.blockEditor,m=(s.InspectorControls,s.InnerBlocks,s.MediaUpload),b=(s.MediaUploadCheck,s.RichText),d=wp.components,p=(d.ToggleControl,d.PanelBody,d.PanelRow,d.CheckboxControl),f=d.SelectControl,g=(d.ColorPicker,d.IconButton),v=(wp.element.Fragment,wp.i18n.__);wp.blocks.registerBlockType("starter/test-block",{title:"Test Block",icon:"smiley",category:"custom-theme-blocks",attributes:{seljaci:{type:"array",default:[]}},edit:function(e){var t=e.attributes.seljaci;function n(n){var r=n.target.value;t[n.target.parentNode.getAttribute("index")]=u(u({},t[n.target.parentNode.getAttribute("index")]),{},{ime:r}),e.setAttributes({seljaci:t.slice()})}function r(n){var r=n.target.value;t[n.target.parentNode.getAttribute("index")]=u(u({},t[n.target.parentNode.getAttribute("index")]),{},{boja:r}),e.setAttributes({seljaci:t.slice()})}function c(n){t.splice(n.target.getAttribute("index"),1),e.setAttributes({seljaci:t.slice()})}var o={block:"starter/test-block",attributes:e.attributes},i=React.useState(!1),s=l()(i,2),m=s[0],b=s[1];return m?Object(a.createElement)("div",{class:"custom-container"},t.map((function(e,t){return Object(a.createElement)("div",{index:t},Object(a.createElement)("input",{type:"text",field:"ime",value:e.ime,placeholder:"Seljak Ime",onChange:n}),Object(a.createElement)("select",{field:"boja",value:e.boja,onChange:r},Object(a.createElement)("option",{value:"Red"},"Red"),Object(a.createElement)("option",{value:"Green"},"Green"),Object(a.createElement)("option",{value:"Blue"},"Blue")),Object(a.createElement)("button",{index:t,onClick:c},"X"),Object(a.createElement)("br",null))})),Object(a.createElement)("br",null),Object(a.createElement)("button",{onClick:function(n){t.push(t.length),t[n.target.parentNode.getAttribute("index")]={ime:" ",boja:" "},e.setAttributes({seljaci:t.slice()})}},"Add Row"),Object(a.createElement)("button",{onClick:function(){return b(!1)}},"Finish Editing")):Object(a.createElement)("div",{onClick:function(){return b(!0)}},(wp.element.createElement(wp.editor.ServerSideRender,o),wp.element.createElement(wp.components.ServerSideRender,o),wp.element.createElement(wp.serverSideRender,o)))},save:function(e){return null}}),wp.blocks.registerBlockType("starter/hero-slider-block",{title:"Hero Slider Block",icon:"smiley",category:"custom-theme-blocks",attributes:{slides:{type:"array",default:[]}},edit:function(e){var t=e.attributes.slides;function n(){e.setAttributes({slides:t.slice()})}function r(e){t.splice(e.target.getAttribute("index"),1),n()}var c={block:"starter/hero-slider-block",attributes:e.attributes},o=React.useState(!1),i=l()(o,2),u=i[0],s=i[1];return u?Object(a.createElement)("div",{class:"custom-container"},t.map((function(e,l){return Object(a.createElement)("div",{index:l,onChange:function(e){return function(e){console.log(e.target);var r=e.target.getAttribute("field");t[index][r]=e.target.value,console.log(t[e.target.parentNode.getAttribute("index")]),n()}(e)},class:"one-repeat"},Object(a.createElement)(m,{onSelect:function(e){!function(e,r,l){console.log(e),console.log(l),console.log("slideImg"),t[l].slideImg=e.sizes.full.url,console.log(t[l]),n()}(e,0,l)},type:"image",value:e.slideImg,render:function(t){var n=t.open;return Object(a.createElement)("div",{class:"d-flex flex-column"},Object(a.createElement)("img",{class:"preview-bg-img",src:e.slideImg,alt:""}),Object(a.createElement)("p",null,"Slide Background Image"),Object(a.createElement)(g,{onClick:n,icon:"upload"},"Change"))}}),Object(a.createElement)("p",null,"Slide Text"),Object(a.createElement)("textarea",{field:"text",value:e.text}),Object(a.createElement)("button",{index:l,onClick:r},"X"),Object(a.createElement)("hr",null))})),Object(a.createElement)("br",null),Object(a.createElement)("button",{onClick:function(e){t.push(t.length),t[t.length-1]={},n()}},"Add Row"),Object(a.createElement)("button",{onClick:function(){return s(!1)}},"Finish Editing")):Object(a.createElement)("div",{onClick:function(){return s(!0)}},(wp.element.createElement(wp.editor.ServerSideRender,c),wp.element.createElement(wp.components.ServerSideRender,c),wp.element.createElement(wp.serverSideRender,c)))},save:function(e){return null}}),wp.blocks.registerBlockType("starter/hero-flavor-block",{title:"Hero Flavor Block",icon:"smiley",category:"custom-theme-blocks",attributes:{content:{type:"array",default:[]}},edit:function(e){var t=e.attributes.content;function n(){e.setAttributes({content:t.slice()}),console.log(e.attributes.content)}function r(e,r){t[0][r]=e,n()}function c(e,r){t[0][r]=e.sizes.full.url,n()}function o(e){t[0][e]=null,n()}0==t.length&&(t.push(t.length),t[t.length-1]={});var i={block:"starter/hero-flavor-block",attributes:e.attributes},u=t[0],s=React.useState(!1),d=l()(s,2),p=d[0],f=d[1];return p?Object(a.createElement)("div",{class:"custom-container"},Object(a.createElement)("div",{class:"one-repeat"},Object(a.createElement)(m,{onSelect:function(e){c(e,"topImg")},type:"image",value:u.topImg,render:function(e){var t=e.open;return Object(a.createElement)("div",{class:"d-flex flex-column justify-content-end"},Object(a.createElement)("img",{class:"preview-img",src:u.topImg,alt:""}),Object(a.createElement)("p",null,"Top Image"),Object(a.createElement)("div",{class:"d-flex"},Object(a.createElement)(g,{onClick:t,icon:"upload"},"Change"),Object(a.createElement)("button",{class:"ms-2 remove-button",onClick:function(e){o("topImg")}},"X")))}}),Object(a.createElement)(b,{tagName:"h1",onChange:function(e){r(e,"heading")},value:u.heading,allowedFormats:["core/bold","core/italic","core/text-color"],placeholder:v("Heading...")}),Object(a.createElement)(b,{tagName:"h3",onChange:function(e){r(e,"subheading")},value:u.subheading,allowedFormats:["core/bold","core/italic","core/text-color"],placeholder:v("subheading...")}),Object(a.createElement)("div",{class:"d-flex"},Object(a.createElement)(m,{onSelect:function(e){c(e,"firstImg")},type:"image",value:u.firstImg,render:function(e){var t=e.open;return Object(a.createElement)("div",{class:"d-flex flex-column justify-content-end"},Object(a.createElement)("img",{class:"preview-img",src:u.firstImg,alt:""}),Object(a.createElement)("p",null,"Image 1"),Object(a.createElement)("div",{class:"d-flex"},Object(a.createElement)(g,{onClick:t,icon:"upload"},"Change"),Object(a.createElement)("button",{class:"ms-2 remove-button",onClick:function(e){o("firstImg")}},"X")))}}),Object(a.createElement)(m,{onSelect:function(e){c(e,"secondImg")},type:"image",value:u.secondImg,render:function(e){var t=e.open;return Object(a.createElement)("div",{class:"d-flex flex-column justify-content-end"},Object(a.createElement)("img",{class:"preview-img",src:u.secondImg,alt:""}),Object(a.createElement)("p",null,"Image 2"),Object(a.createElement)("div",{class:"d-flex"},Object(a.createElement)(g,{onClick:t,icon:"upload"},"Change"),Object(a.createElement)("button",{class:"ms-2 remove-button",onClick:function(e){o("secondImg")}},"X")))}}),Object(a.createElement)(m,{onSelect:function(e){c(e,"thirdImg")},type:"image",value:u.thirdImg,render:function(e){var t=e.open;return Object(a.createElement)("div",{class:"d-flex flex-column justify-content-end"},Object(a.createElement)("img",{class:"preview-img",src:u.thirdImg,alt:""}),Object(a.createElement)("p",null,"Image 3"),Object(a.createElement)("div",{class:"d-flex"},Object(a.createElement)(g,{onClick:t,icon:"upload"},"Change"),Object(a.createElement)("button",{class:"ms-2 remove-button",onClick:function(e){o("thirdImg")}},"X")))}})),Object(a.createElement)("hr",null)),Object(a.createElement)("br",null),Object(a.createElement)("button",{onClick:function(){return f(!1)}},"Finish Editing")):Object(a.createElement)("div",{onClick:function(){return f(!0)}},(wp.element.createElement(wp.editor.ServerSideRender,i),wp.element.createElement(wp.components.ServerSideRender,i),wp.element.createElement(wp.serverSideRender,i)))},save:function(e){return null}}),wp.blocks.registerBlockType("starter/half-and-half",{title:"Half And Half",icon:"smiley",category:"custom-theme-blocks",attributes:{content:{type:"array",default:[]}},edit:function(e){var t=e.attributes.content;function n(){e.setAttributes({content:t.slice()}),console.log(e.attributes.content)}function r(e,r){t[0][r]=e,n()}0==t.length&&(t.push(t.length),t[t.length-1]={});var c={block:"starter/half-and-half",attributes:e.attributes},o=t[0],i=React.useState(!1),u=l()(i,2),s=u[0],d=u[1];return s?Object(a.createElement)("div",{class:"custom-container"},Object(a.createElement)("div",{class:"one-repeat"},Object(a.createElement)(p,{label:"Flipped",help:"",checked:o.isFlipped,onChange:function(e){r(e,"isFlipped")}}),Object(a.createElement)(m,{onSelect:function(e){var r;r=e,t[0].halfImg=r.sizes.full.url,n()},type:"image",value:o.halfImg,render:function(e){var r=e.open;return Object(a.createElement)("div",{class:"d-flex flex-column justify-content-end"},Object(a.createElement)("img",{class:"preview-img",src:o.halfImg,alt:""}),Object(a.createElement)("p",null,"Half Image"),Object(a.createElement)("div",{class:"d-flex"},Object(a.createElement)(g,{onClick:r,icon:"upload"},"Change"),Object(a.createElement)("button",{class:"ms-2 remove-button",onClick:function(e){t[0].halfImg=null,n()}},"X")))}}),Object(a.createElement)(b,{tagName:"h1",onChange:function(e){r(e,"heading")},value:o.heading,allowedFormats:["core/bold","core/italic","core/text-color"],placeholder:v("Heading...")}),Object(a.createElement)(b,{tagName:"p",onChange:function(e){r(e,"paragraph")},value:o.paragraph,allowedFormats:["core/bold","core/italic","core/text-color"],placeholder:v("Text...")}),Object(a.createElement)("hr",null)),Object(a.createElement)("br",null),Object(a.createElement)("button",{onClick:function(){return d(!1)}},"Finish Editing")):Object(a.createElement)("div",{onClick:function(){return d(!0)}},(wp.element.createElement(wp.editor.ServerSideRender,c),wp.element.createElement(wp.components.ServerSideRender,c),wp.element.createElement(wp.serverSideRender,c)))},save:function(e){return null}}),wp.blocks.registerBlockType("starter/text-center",{title:"Text Center",icon:"smiley",category:"custom-theme-blocks",attributes:{content:{type:"array",default:[]}},edit:function(e){var t=e.attributes.content;function n(n,r){t[0][r]=n,e.setAttributes({content:t.slice()}),console.log(e.attributes.content)}0==t.length&&(t.push(t.length),t[t.length-1]={});var r={block:"starter/text-center",attributes:e.attributes},c=t[0],o=React.useState(!1),i=l()(o,2),u=i[0],s=i[1];return u?Object(a.createElement)("div",{class:"custom-container"},Object(a.createElement)("div",{class:"one-repeat"},Object(a.createElement)(b,{tagName:"h1",onChange:function(e){n(e,"heading")},value:c.heading,allowedFormats:["core/bold","core/italic","core/text-color"],placeholder:v("Heading...")}),Object(a.createElement)(b,{tagName:"p",onChange:function(e){n(e,"paragraph")},value:c.paragraph,allowedFormats:["core/bold","core/italic","core/text-color"],placeholder:v("Text...")}),Object(a.createElement)("hr",null)),Object(a.createElement)("br",null),Object(a.createElement)("button",{onClick:function(){return s(!1)}},"Finish Editing")):Object(a.createElement)("div",{onClick:function(){return s(!0)}},(wp.element.createElement(wp.editor.ServerSideRender,r),wp.element.createElement(wp.components.ServerSideRender,r),wp.element.createElement(wp.serverSideRender,r)))},save:function(e){return null}}),wp.blocks.registerBlockType("starter/quote-bubble",{title:"Quote Bubble",icon:"smiley",category:"custom-theme-blocks",attributes:{content:{type:"array",default:[]}},edit:function(e){var t=e.attributes.content;function n(n,r){t[0][r]=n,e.setAttributes({content:t.slice()}),console.log(e.attributes.content)}0==t.length&&(t.push(t.length),t[t.length-1]={});var r={block:"starter/quote-bubble",attributes:e.attributes},c=t[0],o=React.useState(!1),i=l()(o,2),u=i[0],s=i[1];return u?Object(a.createElement)("div",{class:"custom-container"},Object(a.createElement)("div",{class:"one-repeat d-flex flex-column"},Object(a.createElement)("p",null,"Block Position"),Object(a.createElement)(f,{label:"Block Position",value:c.blockPosition,options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}],onChange:function(e){n(e,"blockPosition")}}),Object(a.createElement)(b,{tagName:"p",onChange:function(e){n(e,"quote")},value:c.quote,allowedFormats:["core/bold","core/italic","core/text-color"],placeholder:v("quote...")}),Object(a.createElement)("div",null,Object(a.createElement)(b,{tagName:"p",onChange:function(e){n(e,"quoteBy")},value:c.quoteBy,allowedFormats:["core/bold","core/italic","core/text-color"],placeholder:v("Quote By...")})),Object(a.createElement)("hr",null)),Object(a.createElement)("br",null),Object(a.createElement)("button",{onClick:function(){return s(!1)}},"Finish Editing")):Object(a.createElement)("div",{onClick:function(){return s(!0)}},(wp.element.createElement(wp.editor.ServerSideRender,r),wp.element.createElement(wp.components.ServerSideRender,r),wp.element.createElement(wp.serverSideRender,r)))},save:function(e){return null}}),wp.blocks.registerBlockType("starter/big-image",{title:"Big Image",icon:"smiley",category:"custom-theme-blocks",attributes:{content:{type:"array",default:[]}},edit:function(e){var t=e.attributes.content;function n(){e.setAttributes({content:t.slice()}),console.log(e.attributes.content)}0==t.length&&(t.push(t.length),t[t.length-1]={});var r={block:"starter/big-image",attributes:e.attributes},c=t[0],o=React.useState(!1),i=l()(o,2),u=i[0],s=i[1];return u?Object(a.createElement)("div",{class:"custom-container"},Object(a.createElement)("div",{class:"one-repeat d-flex flex-column"},Object(a.createElement)("p",null,"Size"),Object(a.createElement)(f,{label:"Size",value:c.imageSize,options:[{label:"Small",value:"col-6"},{label:"Medium",value:"col-8"},{label:"Big",value:"col-10"},{label:"Huge",value:"col-12"}],onChange:function(e){!function(e,r){t[0].imageSize=e,n()}(e)}}),Object(a.createElement)(m,{onSelect:function(e){var r;r=e,t[0].image=r.sizes.full.url,n()},type:"image",value:c.image,render:function(e){var r=e.open;return Object(a.createElement)("div",{class:"d-flex flex-column justify-content-end"},Object(a.createElement)("img",{class:"preview-img",src:c.image,alt:""}),Object(a.createElement)("p",null,"Half Image"),Object(a.createElement)("div",{class:"d-flex"},Object(a.createElement)(g,{onClick:r,icon:"upload"},"Change"),Object(a.createElement)("button",{class:"ms-2 remove-button",onClick:function(e){t[0].image=null,n()}},"X")))}})),Object(a.createElement)("br",null),Object(a.createElement)("button",{onClick:function(){return s(!1)}},"Finish Editing")):Object(a.createElement)("div",{onClick:function(){return s(!0)}},(wp.element.createElement(wp.editor.ServerSideRender,r),wp.element.createElement(wp.components.ServerSideRender,r),wp.element.createElement(wp.serverSideRender,r)))},save:function(e){return null}}),wp.blocks.registerBlockType("starter/people-repeater",{title:"Clanovi",icon:"smiley",category:"custom-theme-blocks",attributes:{content:{type:"array",default:[]}},edit:function(e){var t=e.attributes.content;function n(e){t.splice(e.target.getAttribute("index"),1),r()}function r(){e.setAttributes({content:t.slice()}),console.log(e.attributes.content)}function c(e,n,l){t[l][n]=e,console.log(t),r()}0==t.length&&(t.push(t.length),t[t.length-1]={},r());var o={block:"starter/people-repeater",attributes:e.attributes},i=t[0],u=React.useState(!1),s=l()(u,2),m=s[0],d=s[1];return m?Object(a.createElement)("div",{class:"custom-container"},Object(a.createElement)(b,{tagName:"h2",onChange:function(e){c(e,"heading",0)},value:i.heading,allowedFormats:["core/bold","core/italic","core/text-color"],placeholder:v("Heading")}),Object(a.createElement)("div",{class:"row"},t.map((function(e,t){return Object(a.createElement)("div",{class:"col-4 ",index:t},Object(a.createElement)("div",{className:"rounded border"},Object(a.createElement)(b,{tagName:"h3",onChange:function(e){c(e,"ime",t)},value:e.ime,allowedFormats:["core/bold","core/italic","core/text-color"],placeholder:v("Ime osobe...")}),Object(a.createElement)(b,{tagName:"h4",onChange:function(e){c(e,"titula",t)},value:e.titula,allowedFormats:["core/bold","core/italic","core/text-color"],placeholder:v("Titula...")}),Object(a.createElement)("button",{index:t,onClick:n},"X"),Object(a.createElement)("br",null)))}))),Object(a.createElement)("br",null),Object(a.createElement)("button",{class:"me-3",onClick:function(e){t.push(t.length),t[t.length-1]={},console.log(t.length),r()}},"Add Row"),Object(a.createElement)("button",{onClick:function(){return d(!1)}},"Finish Editing")):Object(a.createElement)("div",{onClick:function(){return d(!0)}},(wp.element.createElement(wp.editor.ServerSideRender,o),wp.element.createElement(wp.components.ServerSideRender,o),wp.element.createElement(wp.serverSideRender,o)))},save:function(e){return null}})},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,c=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(e){a=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw l}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(7);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0}]);
//# sourceMappingURL=react.js.map
