(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{7388:function(t,e,r){"use strict";r.r(e);var n={props:["articles"]},c=r(13),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.articles?t._l(t.articles,(function(article){return r("article",{staticClass:"mb-4"},[r("figure",[article.image?r("NuxtImg",{staticStyle:{width:"200px",height:"200px","object-fit":"cover"},attrs:{src:article.image,width:"200",height:"200"}}):t._e()],1),r("header",[r("h2",[article.link?r("a",{attrs:{href:article.link,target:"_blank"}},[t._v(t._s(article.title))]):r("NuxtLink",{attrs:{to:article}},[t._v(t._s(article.title))])],1),article.date?r("time",{staticClass:"block text-sm text-gray-500",attrs:{pubdate:"",datetime:article.date}},[t._v(t._s(t._f("toLocaleString")(article.date)))]):t._e()]),article.description&&!article.excerpt?r("div",{staticClass:"prose dark:prose-invert"},[t._v(t._s(article.description))]):article.excerpt?r("NuxtContent",{staticClass:"prose dark:prose-invert",attrs:{document:{body:article.excerpt}}}):r("NuxtContent",{staticClass:"prose dark:prose-invert",attrs:{document:article}})],1)})):r("div",{staticClass:"text-center"},[r("span",{staticClass:"text-2xl text-gray-500"},[t._v("There's nothing to see yet.")])])],2)}),[],!1,null,null,null);e.default=component.exports}}]);