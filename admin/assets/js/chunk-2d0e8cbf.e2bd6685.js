(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8cbf"],{"8b98":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree-select",{attrs:{allowClear:!0,dropdownStyle:{maxHeight:"220px",overflow:"auto"},treeData:e.deptTreeData},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},u=[],l={name:"DetpInputTree",data:function(){return{deptTreeData:[],value:void 0}},methods:{reset:function(){this.value=""}},mounted:function(){var e=this;this.$get("dept").then(function(t){e.deptTreeData=t.data.rows.children})},watch:{value:function(e){this.$emit("change",e)}}},o=l,r=a("2877"),c=Object(r["a"])(o,n,u,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e8cbf.e2bd6685.js.map