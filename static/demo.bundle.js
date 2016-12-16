webpackJsonp([0],{0:function(e,t,n){e.exports=n(1)},1:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(2),a=o(r),u=n(166),i=o(u),l=n(167),f=o(l);n(172),a.default.render(i.default.createElement(f.default,null),document.getElementById("root"))},167:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(166),f=o(l),s=n(168),c=o(s),p=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.zoomIn=function(){n.setState({zoom:Math.min(n.state.zoom+1,18)})},n.zoomOut=function(){n.setState({zoom:Math.max(n.state.zoom-1,1)})},n.handleCenterChange=function(e,t){n.setState({center:[e,t]})},n.state={center:[50.879,4.6997],zoom:12},n}return u(t,e),i(t,[{key:"render",value:function(){var e=this.state,t=e.center,n=e.zoom;return f.default.createElement("div",null,f.default.createElement(c.default,{center:t,zoom:n,onCenterChanged:this.handleCenterChange,width:600,height:400},f.default.createElement(s.Overlay,{position:[50.879,4.6997],offset:[15,31]},f.default.createElement("img",{src:"https://www.apprentus.com/images/map/pin-green-large@2x.png",width:29,height:34,alt:""})),f.default.createElement(s.Overlay,{position:[50.874,4.6947],offset:[15,31]},f.default.createElement("img",{src:"https://www.apprentus.com/images/map/pin-green-large@2x.png",width:29,height:34,alt:""}))),f.default.createElement("div",null,f.default.createElement("button",{onClick:this.zoomIn},"Zoom In"),f.default.createElement("button",{onClick:this.zoomOut},"Zoom Out")," ",n))}}]),t}(l.Component);t.default=p},168:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var r=n(169),a=o(r),u=n(171),i=o(u);t.Overlay=i.default,t.default=a.default},169:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){var o="undefined"!=typeof window&&window.devicePixelRatio>=2;return"https://maps.wikimedia.org/osm-intl/"+n+"/"+e+"/"+t+(o?"@2x":"")+".png"}function l(e,t){return e/Math.pow(2,t)*360-180}function f(e,t){var n=Math.PI-2*Math.PI*e/Math.pow(2,t);return 180/Math.PI*Math.atan(.5*(Math.exp(n)-Math.exp(-n)))}function s(e,t){var n=(0,y.default)(e);return[t.clientX-n.x,t.clientY-n.y]}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=n(166),d=o(p),h=n(170),y=o(h),m=function(e,t){return(e+180)/360*Math.pow(2,t)},b=function(e,t){return(1-Math.log(Math.tan(e*Math.PI/180)+1/Math.cos(e*Math.PI/180))/Math.PI)/2*Math.pow(2,t)},v=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleMouseDown=function(e){n._mouseDown=!0,n._dragStart=s(n._containerRef,e)},n.handleMouseUp=function(e){var t=n.props,o=t.center,r=t.zoom,a=t.onCenterChanged,u=n.state.dragDelta;if(u&&a){var i=l(m(o[1],r)-(u?u[0]/256:0),r),s=f(b(o[0],r)-(u?u[1]/256:0),r);a(s,i)}n._mouseDown=!1,n.setState({dragDelta:null})},n.handleMouseMove=function(e){n._mousePosition=s(n._containerRef,e),n._mouseDown&&n._dragStart&&n.setState({dragDelta:[n._mousePosition[0]-n._dragStart[0],n._mousePosition[1]-n._dragStart[1]]})},n.setRef=function(e){n._containerRef=e},n._mousePosition=null,n._dragStart=null,n._mouseDown=!1,n.state={dragDelta:null},n}return u(t,e),c(t,[{key:"render",value:function(){for(var e=this.props,t=e.center,n=e.zoom,o=e.width,r=e.height,a=e.provider,u=this.state.dragDelta,l=a||i,f=m(t[1],n)-(u?u[0]/256:0),s=b(t[0],n)-(u?u[1]/256:0),c=o/2/256,p=r/2/256,h=Math.floor(f-c),y=Math.floor(f+c),v=Math.floor(s-p),_=Math.floor(s+p),w=[],g=h;g<=y;g++)for(var M=v;M<=_;M++)w.push({key:g+"-"+M+"-"+n,url:l(g,M,n),left:256*(g-h),top:256*(M-v)});var P=-(256*(f-h)-o/2),O=-(256*(s-v)-r/2),E=d.default.Children.map(this.props.children,function(e){var t=e.props,o=t.position,r=t.offset;if(o){var a=256*(m(o[1],n)-h),u=256*(b(o[0],n)-v);return d.default.cloneElement(e,{left:a-(r?r[0]:0),top:u-(r?r[1]:0)})}}),T={width:o,height:r,position:"relative",display:"inline-block",overflow:"hidden"},j={position:"absolute",width:256*(y-h+1),height:256*(_-v+1),left:P,top:O};return d.default.createElement("div",{style:T,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,ref:this.setRef},d.default.createElement("div",{style:j},w.map(function(e){return d.default.createElement("img",{key:e.key,src:e.url,width:256,height:256,style:{position:"absolute",left:e.left,top:e.top}})})),d.default.createElement("div",{style:j},E))}}]),t}(p.Component);v.propTypes={center:d.default.PropTypes.array,zoom:d.default.PropTypes.number,width:d.default.PropTypes.number,height:d.default.PropTypes.number,provider:d.default.PropTypes.func,children:d.default.PropTypes.node,onCenterChanged:d.default.PropTypes.func,onZoomChanged:d.default.PropTypes.func},t.default=v},170:function(e,t){"use strict";function n(e){for(var t=0,n=0,o=!0;e;)t+=e.offsetLeft-(o?0:e.scrollLeft)+e.clientLeft,n+=e.offsetTop-(o?0:e.scrollTop)+e.clientTop,e=e.offsetParent,o=!1;return{x:t,y:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},171:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(166),f=o(l),s=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.left,n=e.top;return f.default.createElement("div",{style:{position:"absolute",left:t,top:n}},this.props.children)}}]),t}(l.Component);s.propTypes={position:f.default.PropTypes.array,offset:f.default.PropTypes.array,left:f.default.PropTypes.number,top:f.default.PropTypes.number,children:f.default.PropTypes.node},t.default=s},172:function(e,t,n){e.exports=n.p+"index.html"}});