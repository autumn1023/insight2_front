webpackJsonp([10],{"5aMw":function(t,e){},Fwg8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("INCx"),r=a.n(i),s=(a("7+uW"),a("mw3O"),a("X2Oc")),n=a("diDo"),l=(a("OBUd"),a("eMjc")),o=a.n(l),c=a("l9mu"),v=a.n(c),u=a("38N9"),d=a.n(u),m={data:function(){return{static_config:n.b,viewvul:{}}},created:function(){var t=this;if(this.$route.query.id)return console.log(this.$route.query),void this.$axios.get(" /api/paper/get?id="+this.$route.query.id,{}).then(function(e){t.viewvul=e.data});this.$route.params.id||this.$router.push("/n_paper"),this.viewvul=this.$route.params},filters:{getDateDiff_timestamp:function(t){return Object(s.e)(t)},formatDate:function(t){var e=new Date(r()(1e3*t));return Object(s.c)(e,"yyyy-MM-dd HH:mm:ss")},statusNameFilter:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"其他";n.b[e][t];return n.b[e][t]?n.b[e][t]:a}},methods:{doPrint:function(){d()({printable:"vul_report",type:"html",targetStyles:["*"]})},getPdf:function(){var t=this.viewvul.vul_name;o()(document.querySelector("#vul_report"),{allowTaint:!0}).then(function(e){var a=e.width,i=e.height,r=a/592.28*841.89,s=i,n=0,l=592.28/a*i,o=e.toDataURL("image/jpeg",1),c=new v.a("","pt","a4");if(s<r)c.addImage(o,"JPEG",0,0,595.28,l);else for(;s>0;)c.addImage(o,"JPEG",0,n,595.28,l),n-=841.89,(s-=r)>0&&c.addPage();c.save(t+".pdf")})}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-tickets"}),t._v(" 文章详情\n      ")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"block",attrs:{id:"vul_report"}},[a("el-row",[a("span",{staticClass:"vuln-title"},[t._v(t._s(t.viewvul.vul_name))]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"data-content-green",attrs:{type:"text"}},[t._v(t._s(t.viewvul.title))]),t._v(" "),a("hr",{staticStyle:{"margin-top":"20px","margin-bottom":"0px","background-color":"#606266",height:"1px"}}),t._v(" "),a("br")]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form",{staticStyle:{width:"100%"},attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"作者"}},[a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v(t._s(t.viewvul.author))])]),t._v(" "),a("el-form-item",{attrs:{label:"发布时间"}},[a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v(t._s(t._f("formatDate")(t.viewvul.publish_time)))])])],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form",{attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"分类"}},[a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v(t._s(t.viewvul.category_name))])]),t._v(" "),a("el-form-item",{attrs:{label:"修改时间"}},[a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v(t._s(t._f("formatDate")(t.viewvul.modify_time)))])])],1)],1)],1),t._v(" "),a("hr",{staticStyle:{"margin-top":"20px","margin-bottom":"20px","background-color":"#606266",height:"1px"}}),t._v(" "),a("div",{staticStyle:{width:"60%"}},[a("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(1==t.viewvul.content_type?t.marked(t.filterXSS(t.viewvul.md_raw_content)):t.viewvul.content)}})])],1)])])},staticRenderFns:[]};var _=a("VU/8")(m,p,!1,function(t){a("5aMw"),a("cM6L")},"data-v-c1b24354",null);e.default=_.exports},cM6L:function(t,e){}});