(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2f84d1c"],{"386d":function(e,t,a){"use strict";var n=a("cb7c"),o=a("83a1"),r=a("5f1b");a("214f")("search",1,function(e,t,a,s){return[function(a){var n=e(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=s(a,e,this);if(t.done)return t.value;var i=n(e),l=String(this),c=i.lastIndex;o(c,0)||(i.lastIndex=0);var d=r(i,l);return o(i.lastIndex,c)||(i.lastIndex=c),null===d?-1:d.index}]})},4270:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-range-picker",{key:e.id,ref:"rangeDate",staticStyle:{width:"100%"},on:{change:e.onChange}})},o=[],r={name:"RangeDate",data:function(){return{id:+new Date}},methods:{onChange:function(e,t){this.$emit("change",t)},reset:function(){this.id=+new Date}}},s=r,i=a("2877"),l=Object(i["a"])(s,n,o,!1,null,null,null);t["a"]=l.exports},"710a":function(e,t,a){"use strict";var n=a("c124"),o=a.n(n);o.a},c124:function(e,t,a){},cdf3:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"card-area",attrs:{bordered:!1}},[a("div",{class:e.advanced?"search":null},[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",[a("a-col",{attrs:{md:12,sm:24}},[a("a-form-item",{attrs:{label:"Bean名称",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{model:{value:e.queryParams.beanName,callback:function(t){e.$set(e.queryParams,"beanName",t)},expression:"queryParams.beanName"}})],1)],1),a("a-col",{attrs:{md:12,sm:24}},[a("a-form-item",{attrs:{label:"方法名称",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{model:{value:e.queryParams.methodName,callback:function(t){e.$set(e.queryParams,"methodName",t)},expression:"queryParams.methodName"}})],1)],1)],1),e.advanced?a("a-row",[a("a-col",{attrs:{md:12,sm:24}},[a("a-form-item",{attrs:{label:"方法参数",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{model:{value:e.queryParams.params,callback:function(t){e.$set(e.queryParams,"params",t)},expression:"queryParams.params"}})],1)],1),a("a-col",{attrs:{md:12,sm:24}},[a("a-form-item",{attrs:{label:"执行时间",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("range-date",{ref:"createTime",on:{change:e.handleDateChange}})],1)],1)],1):e._e()],1),a("span",{staticStyle:{float:"right","margin-top":"3px"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.reset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.toggleAdvanced}},[e._v("\n        "+e._s(e.advanced?"收起":"展开")+"\n        "),a("a-icon",{attrs:{type:e.advanced?"up":"down"}})],1)],1)])],1),a("div",[a("div",{staticClass:"operator"},[a("a-button",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"jobLog:delete",expression:"'jobLog:delete'"}],attrs:{type:"primary",ghost:""},on:{click:e.batchDelete}},[e._v("删除")]),a("a-dropdown",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"jobLog:export",expression:"'jobLog:export'"}]},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"export-data",on:{click:e.exprotExccel}},[e._v("导出Excel")])],1),a("a-button",[e._v("\n                    更多操作\n                    "),a("a-icon",{attrs:{type:"down"}})],1)],1)],1),a("a-table",{ref:"TableInfo",attrs:{columns:e.columns,dataSource:e.dataSource,pagination:e.pagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},scroll:{x:1210}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"times",fn:function(t){return[t<500?a("a-tag",{attrs:{color:"green"}},[e._v(e._s(t)+"ms")]):t<1e3?a("a-tag",{attrs:{color:"cyan"}},[e._v(e._s(t)+"ms")]):t<1500?a("a-tag",{attrs:{color:"orange"}},[e._v(e._s(t)+"ms")]):a("a-tag",{attrs:{color:"red"}})]}},{key:"status",fn:function(t){return["0"===t?a("a-tag",{attrs:{color:"green"}},[e._v("成功")]):"1"===t?a("a-tag",{attrs:{color:"orange"}},[e._v("失败")]):a("span",[e._v(e._s(t))])]}},{key:"method",fn:function(t){return[a("a-popover",{attrs:{placement:"topLeft"}},[a("template",{slot:"content"},[a("div",[e._v(e._s(t))])]),a("p",{staticStyle:{width:"200px","margin-bottom":"0"}},[e._v(e._s(t))])],2)]}},{key:"params",fn:function(t){return[a("a-popover",{attrs:{placement:"topLeft"}},[a("template",{slot:"content"},[a("div",{staticStyle:{"max-width":"300px"}},[e._v(e._s(t))])]),a("p",{staticStyle:{width:"80px","margin-bottom":"0"}},[e._v(e._s(t))])],2)]}},{key:"error",fn:function(t){return[a("a-popover",{attrs:{placement:"topLeft"}},[a("template",{slot:"content"},[a("div",{staticStyle:{"max-width":"300px"}},[e._v(e._s(t))])]),a("p",{staticStyle:{width:"180px","margin-bottom":"0"}},[e._v(e._s(t))])],2)]}}])})],1)])},o=[],r=a("cebc"),s=(a("ac4d"),a("8a81"),a("ac6a"),a("386d"),a("6762"),a("2fdb"),a("4270")),i={name:"JobLog",components:{RangeDate:s["a"]},data:function(){return{advanced:!1,dataSource:[],selectedRowKeys:[],filteredInfo:null,sortedInfo:null,paginationInfo:null,queryParams:{},pagination:{pageSizeOptions:["10","20","30","40","100"],defaultCurrent:1,defaultPageSize:10,showQuickJumper:!0,showSizeChanger:!0,showTotal:function(e,t){return"显示 ".concat(t[0]," ~ ").concat(t[1]," 条记录，共 ").concat(e," 条记录")}},loading:!1}},computed:{columns:function(){var e=this.sortedInfo,t=this.filteredInfo;return e=e||{},t=t||{},[{title:"Bean名称",dataIndex:"beanName"},{title:"方法名称",dataIndex:"methodName"},{title:"方法参数",dataIndex:"params",scopedSlots:{customRender:"params"},width:150},{title:"异常信息",dataIndex:"error",scopedSlots:{customRender:"params"},width:180},{title:"耗时",dataIndex:"times",scopedSlots:{customRender:"times"},sorter:!0,sortOrder:"times"===e.columnKey&&e.order},{title:"执行时间",dataIndex:"createTime",sorter:!0,sortOrder:"createTime"===e.columnKey&&e.order},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"},filters:[{text:"成功",value:"0"},{text:"失败",value:"1"}],filterMultiple:!1,filteredValue:t.status||null,onFilter:function(e,t){return t.status.includes(e)}}]}},mounted:function(){this.fetch()},methods:{onSelectChange:function(e){this.selectedRowKeys=e},toggleAdvanced:function(){this.advanced=!this.advanced,this.advanced||(this.queryParams.createTimeFrom="",this.queryParams.createTimeTo="",this.queryParams.params="")},handleDateChange:function(e){e&&(this.queryParams.createTimeFrom=e[0],this.queryParams.createTimeTo=e[1])},batchDelete:function(){if(this.selectedRowKeys.length){var e=this;this.$confirm({title:"确定删除所选中的记录?",content:"当您点击确定按钮后，这些记录将会被彻底删除",centered:!0,onOk:function(){var t=[],a=!0,n=!1,o=void 0;try{for(var r,s=e.selectedRowKeys[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var i=r.value;t.push(e.dataSource[i].logId)}}catch(l){n=!0,o=l}finally{try{a||null==s.return||s.return()}finally{if(n)throw o}}e.$delete("job/log/"+t.join(",")).then(function(){e.$message.success("删除成功"),e.selectedRowKeys=[],e.search()})},onCancel:function(){e.selectedRowKeys=[]}})}else this.$message.warning("请选择需要删除的记录")},exprotExccel:function(){var e,t,a=this.sortedInfo,n=this.filteredInfo;a&&(e=a.field,t=a.order),this.$export("job/log/excel",Object(r["a"])({sortField:e,sortOrder:t},this.queryParams,n))},search:function(){var e,t,a=this.sortedInfo,n=this.filteredInfo;a&&(e=a.field,t=a.order),this.fetch(Object(r["a"])({sortField:e,sortOrder:t},this.queryParams,n))},reset:function(){this.selectedRowKeys=[],this.$refs.TableInfo.pagination.current=this.pagination.defaultCurrent,this.paginationInfo&&(this.paginationInfo.current=this.pagination.defaultCurrent,this.paginationInfo.pageSize=this.pagination.defaultPageSize),this.filteredInfo=null,this.sortedInfo=null,this.queryParams={},this.advanced&&this.$refs.createTime.reset(),this.fetch()},handleTableChange:function(e,t,a){this.paginationInfo=e,this.filteredInfo=t,this.sortedInfo=a,this.fetch(Object(r["a"])({sortField:a.field,sortOrder:a.order},this.queryParams,t))},fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,this.paginationInfo?(this.$refs.TableInfo.pagination.current=this.paginationInfo.current,this.$refs.TableInfo.pagination.pageSize=this.paginationInfo.pageSize,t.pageSize=this.paginationInfo.pageSize,t.pageNum=this.paginationInfo.current):(t.pageSize=this.pagination.defaultPageSize,t.pageNum=this.pagination.defaultCurrent),this.$get("job/log",Object(r["a"])({},t)).then(function(t){var a=t.data,n=Object(r["a"])({},e.pagination);n.total=a.total,e.loading=!1,e.dataSource=a.rows,e.pagination=n})}}},l=i,c=(a("710a"),a("2877")),d=Object(c["a"])(l,n,o,!1,null,"0e40f315",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-b2f84d1c.3fff1ec6.js.map