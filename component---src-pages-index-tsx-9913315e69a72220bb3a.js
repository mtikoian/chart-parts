(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{191:function(e,t,a){"use strict";a.r(t);var n=a(205),r=a.n(n),i=a(12),o=a.n(i),l=a(0),c=a(201),s=a(233),d=a(489),u=a(208),g=a(213),p=a(202),f=Object(p.scaleLinear)().domain([0,1]).range([1,.4]),h=c.a.div.withConfig({displayName:"hero-banner__InnerContainer"})(["flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;background:rgba( "," );"],function(e){return g.a.palette.primary.rgb.concat([f(e.fadePercent)]).join(",")}),m=c.a.div.withConfig({displayName:"hero-banner__ImageContainer"})(['width:100%;height:100vh;display:flex;background-image:url("','");background-repeat:no-repeat;background-size:cover;'],Object(u.withPrefix)("/images/octopus.jpg")),y=c.a.h1.withConfig({displayName:"hero-banner__Title"})(["color:",";font-weight:lighter;font-size:120px;border:none;"],g.a.palette.highlight),b=c.a.h3.withConfig({displayName:"hero-banner__Description"})(["color:",";font-weight:300;"],g.a.palette.highlight),v=function(e){var t=e.style,a=e.fadePercent;return l.createElement(u.StaticQuery,{query:"3978990474",render:function(e){var n=e.site.siteMetadata,r=n.title,i=n.description;return l.createElement(m,{style:t},l.createElement(h,{fadePercent:a},l.createElement(y,null,r),l.createElement(b,null,i)))},data:d})},w=a(490),x=c.a.div.withConfig({displayName:"below-the-fold__BoxRow"})(["display:flex;height:400px;"]),_=c.a.div.withConfig({displayName:"below-the-fold__Box"})(["display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;"]),E=Object(c.a)(u.Link).withConfig({displayName:"below-the-fold__StyledLink"})(["font-family:",";font-weight:bold;font-size:16px;color:",";"],g.a.text.fontFamily,g.a.palette.highlight),k=c.a.a.withConfig({displayName:"below-the-fold__StyledAnchor"})(["font-family:",";font-weight:bold;font-size:16px;color:",";"],g.a.text.fontFamily,g.a.palette.highlight),C=function(e){var t=e.style;return l.createElement(u.StaticQuery,{query:"945863975",render:function(e){var a=e.site.siteMetadata.githubUrl;return l.createElement(x,{style:t},l.createElement(_,{style:{backgroundColor:g.a.palette.alt}},l.createElement(E,{to:"/documentation"},"Read the docs")),l.createElement(_,{style:{backgroundColor:g.a.palette.alt2}},l.createElement(E,{to:"/blog"},"What's new?")),l.createElement(_,{style:{backgroundColor:g.a.palette.alt3}},l.createElement(k,{target:"_blank",href:a},"Browse the source")))},data:w})},L=c.a.div.withConfig({displayName:"privacy-statement__PrivacyText"})(["color:",";font-family:sans-serif;font-size:12px;"],g.a.palette.whitish),N=c.a.a.withConfig({displayName:"privacy-statement__PrivacyLink"})(["color:",";font-family:sans-serif;font-size:12px;"],g.a.palette.highlight),B=function(){return l.createElement(L,null,"This site does not collect any personal information or use cookies. ",l.createElement(N,{target:"_blank",href:"https://privacy.microsoft.com/en-us/privacystatement/"},"Read Microsoft's statement on Privacy and Cookies."))},I=c.a.div.withConfig({displayName:"footer__Container"})(["display:flex;background-color:",";"],g.a.palette.grey),P=c.a.div.withConfig({displayName:"footer__FooterColumn"})(["display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;height:50px;"]),F=c.a.div.withConfig({displayName:"footer__WithLove"})(["color:",";font-family:sans-serif;font-size:12px;"],g.a.palette.whitish),j=function(e){return l.createElement(I,{style:e},l.createElement(P,null,l.createElement(F,null,"with ♥ from Microsoft")),l.createElement(P,null,l.createElement(B,null)))};a(491),a.d(t,"default",function(){return M}),a(377)("site:index")("Markable documentation, version",a(493).version);var M=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={scrollPercent:0},t.scrollAreaRef=l.createRef(),t.onScroll=function(e){var a=t.scrollPercent;t.setState({scrollPercent:a})},t}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.isAllContentVisible&&this.setState({scrollPercent:1})},a.render=function(){var e=this.state.scrollPercent;return l.createElement(A,null,l.createElement(s.a,{opacity:Math.max(e/.6)}),l.createElement(R,null,l.createElement(T,{innerRef:this.scrollAreaRef,onScroll:this.onScroll},l.createElement(q,null,l.createElement(v,{fadePercent:e}),l.createElement(C,null),l.createElement(j,null)))))},r()(t,[{key:"scrollPercent",get:function(){var e=this.scrollAreaRef.current,t=e.offsetHeight+e.scrollTop,a=e.offsetHeight;return(t-a)/(e.scrollHeight-a)}},{key:"isAllContentVisible",get:function(){var e=this.scrollAreaRef.current;return e.scrollHeight===e.offsetHeight}}]),t}(l.Component),R=c.a.div.withConfig({displayName:"pages__Wrapper"})(["display:flex;flex:1;min-height:0px;"]),T=c.a.div.withConfig({displayName:"pages__OverflowContainer"})(["flex:1;overflow:auto;"]),q=c.a.div.withConfig({displayName:"pages__Content"})(["max-height:200px;"]),A=c.a.div.withConfig({displayName:"pages__Container"})(["height:100%;width:100%;display:flex;flex-direction:column;"])},208:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=a(200),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(219),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var u=a(35);a.d(t,"parsePath",function(){return u.a});var g=r.a.createContext({}),p=function(e){return r.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},213:function(e,t,a){"use strict";a(55);var n=a(370),r=a.n(n),i=a(371),o=a.n(i),l=new r.a(o.a).options;t.a={text:{fontFamily:l.bodyFontFamily.join(", "),lineHeight:l.baseLineHeight,highlight:"#2D882D"},palette:{primary:Object.assign({},"#AA3939",{rgb:[170,57,57]}),highlight:"#FFF3B0",alt:"#335C67",alt2:"#E09F3E",alt3:"#540B0E",grey:"#444",whitish:"#FEFEFE"},backgrounds:{sidebar:"#F6F6F6",header:"#AA3939"}}},219:function(e,t,a){var n;e.exports=(n=a(232))&&n.default||n},232:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=a(40),c=a(1),s=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:a})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},233:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(12),r=a.n(n),i=a(234),o=a(0),l=a(208),c=a(201),s=a(213),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logoTo,a=void 0===t?"/":t,n=e.opacity,r=void 0===n?1:n;return o.createElement(l.StaticQuery,{query:"295592476",render:function(e){var t=e.site.siteMetadata,n=t.title,i=t.githubUrl;return o.createElement(u,null,o.createElement(g,{style:{opacity:r}},o.createElement(f,null,o.createElement(h,{to:a},n)),o.createElement(p,null,o.createElement(m,{to:"/"},"Home"),o.createElement(m,{to:"/documentation"},"Docs"),o.createElement(m,{to:"/blog"},"Blog"),o.createElement(m,{to:i},"Github"))))},data:i})},t}(o.PureComponent);d.HEIGHT=60;var u=c.a.div.withConfig({displayName:"header__Container"})(["background:",";height:","px;display:flex;"],s.a.backgrounds.header,d.HEIGHT),g=c.a.div.withConfig({displayName:"header__InnerContainer"})(["flex:1;margin:0 auto;max-width:960;padding:1.45rem 1.0875rem;display:flex;justify-content:space-between;align-self:stretch;align-items:center;"]),p=c.a.div.withConfig({displayName:"header__Links"})(["display:flex;flex-direction:row;align-items:center;"]),f=c.a.h1.withConfig({displayName:"header__Title"})(["margin:0;border:none;"]),h=Object(c.a)(l.Link).withConfig({displayName:"header__TitleLink"})(["color:white;text-decoration:none;font-family:",";font-weight:100;"],s.a.text.fontFamily),m=Object(c.a)(l.Link).withConfig({displayName:"header__OuterLink"})(["color:white;margin-left:8px;margin-right:8px;font-family:",";font-weight:100;"],s.a.text.fontFamily)},234:function(e){e.exports={data:{site:{siteMetadata:{title:"Markable",githubUrl:"https://github.com/Microsoft/markable"}}}}},489:function(e){e.exports={data:{site:{siteMetadata:{title:"Markable",description:"A flexible, React-friendly, Grammar of Graphics for data visualization"}}}}},490:function(e){e.exports={data:{site:{siteMetadata:{githubUrl:"https://github.com/Microsoft/markable"}}}}},491:function(e,t,a){},493:function(e){e.exports={name:"@markable/documentation",description:"Docs website for Markable",version:"0.0.15",private:!0,dependencies:{"@babel/core":"^7.0.0-rc.2","@markable/orchestrator":"^0.0.15","@markable/react":"^0.0.15","@markable/react-svg-renderer":"^0.0.15","@markable/scales":"^0.0.15","@markable/testdata":"^0.0.15","@markable/transform":"^0.0.15","@types/d3-scale":"^2.0.1","@types/debug":"^0.0.30","@types/react-helmet":"^5.0.6","babel-plugin-styled-components":"^1.5.1","d3-scale":"^2.1.0",debug:"^3.1.0",gatsby:"^2.0.0-rc.0","gatsby-plugin-react-helmet":"^3.0.0-rc.0","gatsby-plugin-styled-components":"^3.0.0-rc.0","gatsby-plugin-typescript":"^2.0.0-rc.1","gatsby-plugin-typography":"^2.2.0-rc.0","gatsby-remark-copy-linked-files":"^2.0.0-rc.0","gatsby-remark-embed-snippet":"^3.0.0-rc.0","gatsby-remark-images":"^2.0.1-rc.0","gatsby-remark-prismjs":"^3.0.0-rc.0","gatsby-source-filesystem":"^2.0.1-rc.0","gatsby-transformer-remark":"^2.1.1-rc.0",prismjs:"^1.15.0","prop-types":"^15.6.2",react:"^16.4.2","react-dom":"^16.4.2","react-helmet":"^5.2.0","react-icons":"^3.0.5","react-typography":"^0.16.13","rehype-react":"^3.0.3","styled-components":"^3.4.4",typography:"^0.16.17","typography-theme-github":"^0.15.10"},license:"MIT",scripts:{clean:"rimraf .cache public apidocs",build:"run-s build:*","build:typecheck":"tsc --noEmit","build:docs":"run-s clean:docs gen:docs",start:"gatsby develop","type-check":"tsc --noEmit","clean:docs":"rimraf static/apidocs","gen:docs":"run-p gen:doc:*",test:"run-s build_static_site","gen:doc":"typedoc --theme minimal --out static/apidocs/$LIB --tsconfig ../$LIB/tsconfig.json --ignoreCompilerErrors --excludePrivate --hideGenerator","gen:doc:builder":"LIB=client/builder yarn gen:doc","gen:doc:interfaces":"LIB=client/interfaces yarn gen:doc","gen:doc:react":"LIB=client/react yarn gen:doc","gen:doc:scene":"LIB=processing/scene yarn gen:doc","gen:doc:orchestrator":"LIB=processing/orchestrator yarn gen:doc","gen:doc:scenegraph":"LIB=processing/scenegraph yarn gen:doc","gen:doc:vsvg":"LIB=processing/vsvg yarn gen:doc","gen:doc:scales":"LIB=util/scales yarn gen:doc","gen:doc:shapes":"LIB=util/shapes yarn gen:doc","gen:doc:transform":"LIB=util/transform yarn gen:doc","gen:doc:react-native-svg":"LIB=renderers/react-native-svg yarn gen:doc","gen:doc:react-svg":"LIB=renderers/react-svg yarn gen:doc",build_static_site:"gatsby build --prefix-paths",publish_gh_pages:"NODE_DEBUG=gh-pages gh-pages -d public -t",clean_release:"run-s clean build release",release:"run-s build_static_site publish_gh_pages"},devDependencies:{"gh-pages":"^1.2.0","npm-run-all":"^4.1.3",rimraf:"^2.6.2",typedoc:"^0.12.0",typescript:"^3.0.1"},repository:{type:"git",url:"https://github.com/gatsbyjs/gatsby-starter-default"}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9913315e69a72220bb3a.js.map