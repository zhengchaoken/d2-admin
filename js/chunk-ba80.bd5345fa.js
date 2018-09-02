(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba80"],{2487:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",[t("template",{slot:"header"},[n._v("多选")]),t("d2-crud",{attrs:{columns:n.columns,data:n.data,"selection-row":""},on:{"selection-change":n.handleSelectionChange}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:n.code}})],1),t("template",{slot:"footer"},[t("d2-link-btn",{attrs:{title:"文档",link:"http://app.d3collection.cn/d2-admin-doc/lastest/zh/ecosystem-d2-crud/"}})],1)],2)},d=[],s=(t("cadf"),t("551c"),t("097d"),t("6c9f")),o=t.n(s),c="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      selection-row\n      @selection-change=\"handleSelectionChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ]\n    }\n  },\n  methods: {\n    handleSelectionChange (selection) {\n      console.log(selection)\n    }\n  }\n}\n<\/script>",l={data:function(){return{doc:o.a,code:c,columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},methods:{handleSelectionChange:function(n){console.log(n)}}},r=l,i=t("2877"),m=Object(i["a"])(r,a,d,!1,null,null,null);m.options.__file="index.vue";e["default"]=m.exports},"6c9f":function(n,e){n.exports="`D2 Crud` 组件提供了多选的支持，只需要配置 `selection-row` 属性即可实现多选。之后由 `selection-change` 事件来管理选择项发生变化时触发的事件，它会传入 `selection` 。代码如下：\n"}}]);
//# sourceMappingURL=chunk-ba80.bd5345fa.js.map