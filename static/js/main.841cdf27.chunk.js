(this["webpackJsonpreact-examples"]=this["webpackJsonpreact-examples"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,c=n(1),i=n(8),r=n.n(i),o=(n(13),n(2)),s=n(3),l=n(6),u=n(5),d=n(4),h=(n(14),n(15),n.p+"static/media/logo.6ce24c58.svg"),j=(n(16),n(0)),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"page-title-container",children:Object(j.jsx)("div",{className:"page-title",children:this.props.title})})}}]),n}(c.Component),b=p,v=(n(18),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"info-box",children:this.props.content})}}]),n}(c.Component)),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app-content",children:[Object(j.jsx)(b,{title:"Home"}),Object(j.jsx)(v,{content:Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"info-box-title",children:"Welcome"}),Object(j.jsx)("div",{className:"react-logo-container",children:Object(j.jsx)("img",{className:"react-logo",src:h})}),Object(j.jsx)("p",{className:"info-box-text",children:"This is a website made by Lucas Johnson. It was built using react and hosted using github pages. This was created to serve as an example site for Luke's portfolio. Below you find links to various examples. You can also use the nav to check out all of the examples."})]})})]})}}]),n}(c.Component),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"app-content",children:Object(j.jsx)(p,{title:"About"})})}}]),n}(c.Component),x=O,m=(n(19),["title","titleId"]);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function k(e,t){var n=e.title,i=e.titleId,r=y(e,m);return c.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":i},r),n?c.createElement("title",{id:i},n):null,a||(a=c.createElement("path",{fill:"current",stroke:"current",d:"M12 3l12 18h-24z"})))}var C,N,P,w=c.forwardRef(k),E=(n.p,function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).componentDidUpdate=function(e,t){"auto"===t.height&&"auto"!==a.state.height&&setTimeout((function(){return a.setState({height:"0px"})}),1)},a._setContentDiv=function(e){a.setState({contentElement:e})},a.state={expanded:!1,height:"0px",contentElement:null},a}return Object(s.a)(n,[{key:"_afterExpand",value:function(){this.state.expanded&&this.setState({height:"auto"})}},{key:"_toggleContainer",value:function(){console.log(this.state.height),this.state.contentElement&&this.setState({expanded:!this.state.expanded,height:this.state.contentElement.scrollHeight+"px"})}},{key:"_getAccordionClass",value:function(){var e="accordion-container default";return this.state.expanded&&(e+=" expanded"),e}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:this._getAccordionClass(),children:[Object(j.jsx)("div",{className:"accordion-title",onClick:function(){return e._toggleContainer()},children:Object(j.jsxs)("div",{className:"accordion-title-content",children:[Object(j.jsx)("div",{className:"accordion-expand-icon-container",children:Object(j.jsx)(w,{className:"accordion-expand-icon",fill:"cyan"})}),this.props.titleContent]})}),Object(j.jsx)("div",{ref:this._setContentDiv,onTransitionEnd:function(){return e._afterExpand()},style:{height:this.state.height,overflow:"hidden",transition:"height 250ms linear 0s"},className:"accordion-content",children:this.props.mainContent})]})}}]),n}(c.Component)),A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app-content",children:[Object(j.jsx)(p,{title:"Accordions"}),Object(j.jsx)(E,{titleContent:Object(j.jsx)("span",{children:"accordion 1"}),mainContent:Object(j.jsx)("p",{children:"Some Content"})}),Object(j.jsx)(E,{titleContent:Object(j.jsx)("span",{children:"accordion 2"}),mainContent:Object(j.jsx)("p",{children:"Some Content"})}),Object(j.jsx)(E,{titleContent:Object(j.jsx)("span",{children:"accordion 3"}),mainContent:Object(j.jsx)("p",{children:"Some Content"})}),Object(j.jsx)(E,{titleContent:Object(j.jsx)("span",{children:"accordion 4"}),mainContent:Object(j.jsx)("p",{children:"Some Content"})})]})}}]),n}(c.Component),S=A,_=["title","titleId"];function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function T(e,t){var n=e.title,a=e.titleId,i=I(e,_);return c.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 80",ref:t,"aria-labelledby":a},i),n?c.createElement("title",{id:a},n):null,C||(C=c.createElement("rect",{fill:"current",stroke:"current",width:100,height:20})),N||(N=c.createElement("rect",{fill:"current",stroke:"current",y:30,width:100,height:20})),P||(P=c.createElement("rect",{fill:"current",stroke:"current",y:60,width:100,height:20})))}var D=c.forwardRef(T),F=(n.p,n(20),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).props.setAppPage.bind(Object(l.a)(a)),a.state={activePage:"home-page",expanded:!1},a}return Object(s.a)(n,[{key:"setActive",value:function(e){this.setState({activePage:e}),this.props.setAppPage(e)}},{key:"_toggleExpand",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"_checkExpandedNavButton",value:function(){var e="react-example-nav-expand-button";return this.state.expanded&&(e+=" expanded"),e}},{key:"_checkExpandedNav",value:function(){var e="react-example-nav";return this.state.expanded&&(e+=" expanded"),e}},{key:"_checkActiveButton",value:function(e){var t="nav-button";return this.state.activePage==e&&(t+=" active"),t}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"react-example-nav-container",children:[Object(j.jsx)("button",{className:this._checkExpandedNavButton(),onClick:function(){return e._toggleExpand()},children:Object(j.jsx)("div",{className:"react-example-nav-expand-button-container",children:Object(j.jsx)(D,{className:"react-example-nav-expand-button-icon",fill:"cyan",stroke:"cyan"})})}),Object(j.jsxs)("nav",{className:this._checkExpandedNav(),children:[Object(j.jsx)("button",{className:this._checkActiveButton("home-page"),onClick:function(){return e.setActive("home-page")},children:"Home"}),Object(j.jsx)("button",{className:this._checkActiveButton("accordion-page"),onClick:function(){return e.setActive("accordion-page")},children:"Accordions"}),Object(j.jsx)("button",{className:this._checkActiveButton("about-page"),onClick:function(){return e.setActive("about-page")},children:"About"})]})]})}}]),n}(c.Component)),L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={homePage:!0,accordionPage:!1,aboutPage:!1},a.setAppPage=a.setAppPage.bind(Object(l.a)(a)),a}return Object(s.a)(n,[{key:"setAppPage",value:function(e){switch(this.setState({homePage:!1}),this.setState({aboutPage:!1}),this.setState({accordionPage:!1}),e){case"home-page":this.setState({homePage:!0});break;case"accordion-page":this.setState({accordionPage:!0});break;case"about-page":this.setState({aboutPage:!0})}}},{key:"render",value:function(){var e=this.state,t=e.homePage,n=e.accordionPage,a=e.aboutPage;return Object(j.jsx)("div",{className:"app-main default",children:Object(j.jsxs)("div",{className:"meta-grid",children:[Object(j.jsx)("div",{className:"meta-grid-nav",children:Object(j.jsx)(F,{setAppPage:this.setAppPage})}),Object(j.jsxs)("div",{className:"meta-grid-content",children:[t&&Object(j.jsx)(f,{}),n&&Object(j.jsx)(S,{}),a&&Object(j.jsx)(x,{})]})]})})}}]),n}(c.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},J=document.getElementById("root");r.a.render(Object(j.jsx)(L,{}),J),H()}],[[21,1,2]]]);
//# sourceMappingURL=main.841cdf27.chunk.js.map