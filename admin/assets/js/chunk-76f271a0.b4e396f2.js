(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76f271a0"],{"38ac":function(t,a,e){},5150:function(t,a,e){"use strict";var s=e("38ac"),n=e.n(s);n.a},"9b4d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-modal",{attrs:{centered:!0,keyboard:!1,footer:null,width:750,title:"用户信息"},on:{cancel:t.handleCancleClick},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("a-layout",{staticClass:"user-info"},[e("a-layout-sider",{staticClass:"user-info-side"},[e("a-avatar",{attrs:{shape:"square",size:115,icon:"user",src:"static/avatar/"+t.userInfoData.avatar}})],1),e("a-layout-content",{staticClass:"user-content-one"},[e("p",[e("a-icon",{attrs:{type:"user"}}),t._v("\n                账户："+t._s(t.userInfoData.username)+"\n            ")],1),e("p",{attrs:{title:t.userInfoData.roleName}},[e("a-icon",{attrs:{type:"star"}}),t._v("\n                角色："+t._s(t.userInfoData.roleName?t.userInfoData.roleName:"暂无角色")+"\n            ")],1),e("p",[e("a-icon",{attrs:{type:"skin"}}),t._v("\n                性别："+t._s(t.sex)+"\n            ")],1),e("p",[e("a-icon",{attrs:{type:"phone"}}),t._v("\n                电话："+t._s(t.userInfoData.mobile?t.userInfoData.mobile:"暂未绑定电话")+"\n            ")],1),e("p",[e("a-icon",{attrs:{type:"mail"}}),t._v("\n                邮箱："+t._s(t.userInfoData.email?t.userInfoData.email:"暂未绑定邮箱")+"\n            ")],1)]),e("a-layout-content",{staticClass:"user-content-two"},[e("p",[e("a-icon",{attrs:{type:"home"}}),t._v("\n                部门："+t._s(t.userInfoData.deptName?t.userInfoData.deptName:"暂无部门信息")+"\n            ")],1),e("p",["1"===t.userInfoData.status?e("a-icon",{attrs:{type:"smile"}}):e("a-icon",{attrs:{type:"frown"}}),t._v("\n                状态：\n                "),"0"===t.userInfoData.status?[e("a-tag",{attrs:{color:"red"}},[t._v("锁定")])]:"1"===t.userInfoData.status?[e("a-tag",{attrs:{color:"cyan"}},[t._v("有效")])]:[t._v("\n                    "+t._s(t.userInfoData.status)+"\n                ")]],2),e("p",[e("a-icon",{attrs:{type:"clock-circle"}}),t._v("\n                创建时间："+t._s(t.userInfoData.createTime)+"\n            ")],1),e("p",[e("a-icon",{attrs:{type:"login"}}),t._v("\n                最近登录："+t._s(t.userInfoData.lastLoginTime)+"\n            ")],1),e("p",{attrs:{title:t.userInfoData.description}},[e("a-icon",{attrs:{type:"message"}}),t._v("\n                描述："+t._s(t.userInfoData.description)+"\n            ")],1)])],1)],1)},n=[],r={name:"UserInfo",props:{userInfoVisiable:{require:!0,default:!1},userInfoData:{require:!0}},computed:{show:{get:function(){return this.userInfoVisiable},set:function(){}},sex:function(){switch(this.userInfoData.ssex){case"0":return"男";case"1":return"女";case"2":return"保密";default:return this.userInfoData.ssex}}},methods:{handleCancleClick:function(){this.$emit("close")}}},o=r,i=(e("5150"),e("2877")),u=Object(i["a"])(o,s,n,!1,null,"7b76e860",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-76f271a0.b4e396f2.js.map