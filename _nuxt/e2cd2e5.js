(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,5,6,7,10],{7369:function(t,e,r){var content=r(7376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("2e083f2a",content,!0,{sourceMap:!1})},7370:function(t,e,r){var content=r(7378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("4cc7fb35",content,!0,{sourceMap:!1})},7371:function(t,e,r){"use strict";r.r(e);var n={props:["toc"]},c=r(14),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",t._l(t.toc,(function(link){return r("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[r("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},7372:function(t,e,r){"use strict";var n=r(17),c=r(7373),o=r(56),l=r(67),d=r(95),f=r(205);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=o(this),r=l(e),n=f(e,0);return n.length=c(n,e,e,r,0,void 0===t?1:d(t)),n}})},7373:function(t,e,r){"use strict";var n=r(4),c=r(150),o=r(67),l=r(96),d=n.TypeError,f=function(t,e,source,r,n,h,_,m){for(var element,v,x=n,C=0,k=!!_&&l(_,m);C<r;){if(C in source){if(element=k?k(source[C],C,e):source[C],h>0&&c(element))v=o(element),x=f(t,e,element,v,x,h-1)-1;else{if(x>=9007199254740991)throw d("Exceed the acceptable array length");t[x]=element}x++}C++}return x};t.exports=f},7374:function(t,e,r){r(204)("flat")},7375:function(t,e,r){"use strict";r(7369)},7376:function(t,e,r){var n=r(54)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\ndl.authors dd[data-v-c0a5610a]:first-of-type:before{\n  content:"by "\n}\ndl.authors dd[data-v-c0a5610a]:not(:last-child):after{\n  content:", "\n}\ndl.authors dd[data-v-c0a5610a]:nth-last-child(2):after{\n  content:" and "\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},7377:function(t,e,r){"use strict";r(7370)},7378:function(t,e,r){var n=r(54)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\naside[data-v-56880a37]{\n  padding-top:1.25rem;\n  padding-bottom:1.25rem\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},7379:function(t,e,r){"use strict";r.r(e);var n={props:["articles"]},c=r(14),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.articles?t._l(t.articles,(function(article){return r("article",{staticClass:"mb-4"},[r("figure",[article.image?r("NuxtImg",{staticStyle:{width:"200px",height:"200px","object-fit":"cover"},attrs:{src:article.image,width:"200",height:"200"}}):t._e()],1),r("header",[r("h2",[article.link?r("a",{attrs:{href:article.link,target:"_blank"}},[t._v(t._s(article.title))]):r("NuxtLink",{attrs:{to:article}},[t._v(t._s(article.title))])],1),article.date?r("time",{staticClass:"block text-sm text-gray-500",attrs:{pubdate:"",datetime:article.date}},[t._v(t._s(t._f("toLocaleString")(article.date)))]):t._e()]),article.description&&!article.excerpt?r("div",{staticClass:"prose dark:prose-invert"},[t._v(t._s(article.description))]):article.excerpt?r("NuxtContent",{staticClass:"prose dark:prose-invert",attrs:{document:{body:article.excerpt}}}):r("NuxtContent",{staticClass:"prose dark:prose-invert",attrs:{document:article}})],1)})):r("div",{staticClass:"text-center"},[r("span",{staticClass:"text-2xl text-gray-500"},[t._v("There's nothing to see yet.")])])],2)}),[],!1,null,null,null);e.default=component.exports},7380:function(t,e,r){"use strict";r.r(e);r(27),r(16),r(7372),r(7374);var n=r(98),c={props:["article"],computed:{categories:function(){return(this.article.categories||[this.article.category]).flat().filter(Boolean)},series:function(){return[this.article.series].flat().filter(Boolean)},tags:function(){return[this.article.tags].flat().filter(Boolean)},authors:function(){return(this.article.authors||[this.article.author]).flat().filter(Boolean)}},methods:{parameterize:function(t){return Object(n.kebabCase)(t)}}},o=(r(7375),r(14)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[t.categories.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Categories")]),t._l(t.categories,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/categories/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/categories/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),t.series.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Series")]),t._l(t.series,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/series/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/series/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),r("h1",[t._v(t._s(t.article.title))]),t.authors.length?r("address",[r("dl",{staticClass:"authors"},[r("dt",{staticClass:"sr-only"},[t._v("Authors")]),t._l(t.authors,(function(e){return r("dd",{staticClass:"inline"},[t.$router.match("/authors/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/authors/"+t.parameterize(e),rel:"author"}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2)]):t._e(),t.article.date?r("time",{staticClass:"block text-sm text-gray-500",attrs:{pubdate:"",datetime:t.article.date}},[t._v(t._s(t._f("toLocaleString")(t.article.date)))]):t._e(),t.tags.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Tags")]),t._l(t.tags,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/tags/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/tags/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),t.article.image?r("NuxtImg",{attrs:{src:t.article.image,sizes:"xs:320px sm:640px md:768px"}}):t._e()],1)}),[],!1,null,"c0a5610a",null);e.default=component.exports},7381:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},c=(r(7377),r(14)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",[r("h2",[t._v("Table of Contents")]),r("RockBandUITableOfContents",{attrs:{toc:t.article.toc}})],1)}),[],!1,null,"56880a37",null);e.default=component.exports;installComponents(component,{RockBandUITableOfContents:r(7371).default})},7382:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},c=r(14),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("NuxtContent",{staticClass:"prose dark:prose-invert",attrs:{document:t.article}})}),[],!1,null,null,null);e.default=component.exports},7383:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},c=r(14),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("RockBandContentHeader",{attrs:{article:t.article}}),0!=t.article.showToC&&t.article.toc&&t.article.toc.length?[r("RockBandContentToC",{attrs:{article:t.article}}),r("hr")]:t._e(),r("RockBandContentBody",{attrs:{article:t.article}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RockBandContentHeader:r(7380).default,RockBandContentToC:r(7381).default,RockBandContentBody:r(7382).default})},7398:function(t,e,r){"use strict";r.r(e);var n=r(13),c=(r(57),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,c,o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.$taxonomies,o=t.params,l=o.page,e.next=4,r(l).where({draft:{$ne:!0}}).sortBy("date","desc").fetch().catch(Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(l,"",{deep:!0}).all();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))));case 4:return d=e.sent,e.abrupt("return",{slug:l,page:d});case 6:case"end":return e.stop()}}),e)})))()}}),o=r(14),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[Array.isArray(t.page)?r("article",[r("header",[r("h1",[t._v(t._s(t._f("titleize")(t.slug)))])]),r("RockBandBlogList",{attrs:{articles:t.page}})],1):r("RockBandContent",{attrs:{article:t.page}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RockBandContent:r(7383).default,RockBandBlogList:r(7379).default})}}]);