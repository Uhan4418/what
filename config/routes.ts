﻿export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/welcome',
          },
          {
            path: '/welcome',
            name: 'welcome',
            icon: 'smile',
            component: './Welcome',
          },
          {
            path: '/admin',
            name: 'admin',
            icon: 'crown',
            component: './Admin',
            authority: ['admin'],
            routes: [
              {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Welcome',
                authority: ['admin'],
              },
            ],
          },
          {
            path: '/wechat',
            name: '微信登录',
            icon: 'smile',
            component: './WechatLogin',
          },
          {
            path: '/tic-tac-toe',
            name: '三连棋小游戏',
            icon: 'smile',
            component: './TicTacToe',
          },
          {
            path: '/hiddensidebar',
            name: '不展示侧边栏demo',
            icon: 'smile',
            component: './hiddensidebar',
            // hideChildrenInMenu: true,
            // hideInMenu: true,
            // routes: [
            //   {
            //     path: '/admin/sub-page',
            //     name: 'sub-page',
            //     icon: 'smile',
            //     component: './Welcome',
            //     hideInMenu: true,
            //     // authority: ['admin'],
            //   },
            // ],
          },
          {
            path: '/tablecoms',
            name: '表格组件库',
            icon: 'smile',
            routes: [
              {
                path: '/tablecoms',
                redirect: '/tablecoms/tablePro',
              },
              {
                path: '/tablecoms/tablePro',
                name: 'ProTable基础使用',
                icon: 'setting',
                component: './TableComs/ProTable',
              },
              {
                path: '/tablecoms/ResizableTable',
                name: 'ResizableTable',
                icon: 'setting',
                component: './TableComs/ResizableTable',
              },
            ],
          },
          {
            path: '/reactdemos',
            name: 'React Demos',
            icon: 'smile',
            routes: [
              {
                path: '/reactdemos',
                redirect: '/reactdemos/uncontrolledcom',
              },
              {
                path: '/reactdemos/communication',
                name: '组件通信',
                icon: 'smile',
                routes: [
                  {
                    path: '/reactdemos/communication/propscom',
                    name: 'props通信',
                    component: './reactdemos/communication/propscom',
                  },
                  {
                    path: '/reactdemos/communication/contextcom',
                    name: 'context通信',
                    component: './reactdemos/communication/contextcom',
                  },
                  {
                    path: '/reactdemos/communication/contextdemos/contextdynamic',
                    name: '动态context',
                    component: './reactdemos/communication/contextdemos/contextwithDynamic',
                  },
                  {
                    path: '/reactdemos/communication/contextdemos/contextUpdateInCom',
                    name: '在嵌套组件中更新Context',
                    component: './reactdemos/communication/contextdemos/contextUpdateInCom',
                  },
                ],
              },
              {
                path: '/reactdemos/refsdemos',
                name: 'Refs',
                icon: 'setting',
                routes: [
                  {
                    path: '/reactdemos/refsdemos/addrefsfordom',
                    name: '为DOM元素添加ref',
                    component: './reactdemos/refsdemos/addrefsfordom',
                    icon: 'setting', //  icon在次层级已不生效
                  },
                  {
                    path: '/reactdemos/refsdemos/addrefsforclass',
                    name: '为class组件添加ref',
                    component: './reactdemos/refsdemos/addrefsforclass',
                    icon: 'setting', //  icon在次层级已不生效
                  },
                  {
                    path: '/reactdemos/refsdemos/refswithfc',
                    name: 'Refs与函数组件',
                    component: './reactdemos/refsdemos/refswithFC',
                    icon: 'setting', //  icon在次层级已不生效
                  },
                  {
                    path: '/reactdemos/refsdemos/callbackrefs',
                    name: '回调Refs(过时)',
                    component: './reactdemos/refsdemos/callbackrefs',
                    icon: 'setting', //  icon在次层级已不生效
                  },
                ],
              },
              {
                path: '/reactdemos/errorBoundariesDemo',
                name: '错误边界',
                icon: 'setting',
                component: './reactdemos/errorBoundariesDemo',
              },
              {
                path: '/reactdemos/fragmentdemos',
                name: 'Fragment的使用',
                icon: 'setting',
                routes: [
                  {
                    path: '/reactdemos/fragmentdemos/fragmentcommon',
                    name: 'Fragment的用法',
                    component: './reactdemos/fragmentdemos/fragmentcommon',
                  },
                  {
                    path: '/reactdemos/fragmentdemos/fragmentusebykey',
                    name: '带key的fragment',
                    component: './reactdemos/fragmentdemos/fragmentusebykey',
                  },
                ],
              },
              {
                path: '/reactdemos/controlledcom',
                name: '受控组件',
                icon: 'smile',
                component: './reactdemos/controlledcom',
              },
              {
                path: '/reactdemos/uncontrolledcom',
                name: '非受控组件',
                icon: 'smile',
                component: './reactdemos/uncontrolledcom',
              },
              {
                path: '/reactdemos/formdemo',
                name: 'form表单',
                icon: 'table',
                component: './reactdemos/formdemo',
              },
              {
                path: '/reactdemos/stateUpgrade',
                name: '状态提升',
                icon: 'setting',
                component: './reactdemos/stateUpgrade',
              },
              {
                name: '代码分割',
                icon: 'setting',
                routes: [
                  {
                    path: '/reactdemos/lazyRender',
                    name: '懒加载',
                    component: './reactdemos/lazyrender',
                    icon: 'setting', //  icon在次层级已不生效
                  },
                  {
                    path: '/reactdemos/errorboundaries',
                    name: '异常捕获边界',
                    component: './reactdemos/errorboundaries',
                  },
                  {
                    path: '/reactdemos/codeDiving',
                    name: '路由代码分割',
                    component: './reactdemos/codeDiving',
                  },
                ],
              },
              // {
              //   path: '/reactdemos/gridmanagerreact',
              //   name: 'GridManagerReact',
              //   icon: 'setting',
              //   component: './reactdemos/GridManagerReact',
              // },
              // {
              //   path: '/reactdemos/reactdatagrid',
              //   name: 'reactDataGrid',
              //   icon: 'setting',
              //   component: './reactdemos/reactDataGrid',
              // },
            ],
          },
          {
            name: 'Ant Demos',
            icon: 'SmileOutlined',
            path: '/demos',
            routes: [
              {
                path: '/demos',
                redirect: '/demos/drawerdemo',
              },
              {
                path: '/demos/drawerdemo',
                name: 'Collapse demo1',
                icon: 'smile',
                component: './drawerdemo',
              },
              {
                path: '/demos/tableadddata',
                name: '表格添加',
                icon: 'smile',
                component: './tableadddata',
              },
              {
                path: '/demos/moduleconfig',
                name: 'Collapse demo2',
                icon: 'smile',
                component: './moduleconfig',
              },
              {
                path: '/demos/formdemo',
                name: '表单demo',
                icon: 'smile',
                component: './formdemo',
              },
              {
                path: '/demos/authoritydemo',
                name: '权限例子',
                icon: 'smile',
                component: './authoritydemo',
              },
              {
                path: '/demos/jsxdemo',
                name: 'jsx例子',
                icon: 'smile',
                component: './jsxdemo',
              },
              {
                path: '/demos/reactdemo',
                name: 'react小例子',
                icon: 'smile',
                component: './reactdemo',
              },
              {
                path: '/demos/uploadfile',
                name: '表单文件上传',
                icon: 'smile',
                component: './uploadfile',
              },
              {
                path: '/demos/movingColumns',
                name: '表格表头移动增加宽度',
                icon: 'smile',
                component: './tablecolumnMoving',
              },
              {
                path: '/demos/resizabletables',
                name: '表格列伸缩',
                icon: 'smile',
                component: './resizeTableColumns',
              },
              {
                path: '/demos/columnssorttables',
                name: '表格列排序选择',
                icon: 'smile',
                component: './TableColumnsSorter',
              },
              {
                path: '/demos/resizablecolumns',
                name: '表格列伸缩(完善)',
                icon: 'smile',
                component: './antComponents/ResizableColumns',
              },
            ],
          },
          {
            name: 'ProComponents',
            icon: 'SmileOutlined',
            path: '/procomponents',
            routes: [
              {
                path: '/procomponents',
                redirect: '/procomponents/statisticCard',
              },
              {
                name: '指标卡+ProCard',
                icon: 'BarChartOutlined',
                path: '/procomponents/statisticCard',
                routes: [
                  {
                    path: '/procomponents/statisticCard',
                    redirect: '/procomponents/statisticCard/statisticcardbaseuse',
                  },
                  {
                    name: '基础使用',
                    path: '/procomponents/statisticCard/statisticcardbaseuse',
                    component: './procomponents/staticCardBaseUse',
                  },
                  {
                    name: 'StaticCard',
                    path: '/procomponents/statisticCard/staticcard',
                    component: './procomponents/staticCard',
                  },
                  {
                    name: 'mini进度条',
                    path: '/procomponents/statisticCard/miniprogeress',
                    component: './procomponents/staticCardOnlyProgress',
                  },
                  {
                    name: 'mini面积图',
                    path: '/procomponents/statisticCard/miniarea',
                    component: './procomponents/staticCardOnlyMiniArea',
                  },
                  {
                    name: '折线图',
                    path: '/procomponents/statisticCard/linechart',
                    component: './procomponents/staticCardOnlyChart',
                  },
                  {
                    name: '环形图',
                    path: '/procomponents/statisticCard/ringchart',
                    component: './procomponents/staticCardOnlyRing',
                  },
                  {
                    name: '总分/主次关系(环形图)',
                    path: '/procomponents/statisticCard/statisticCardwithring',
                    component: './procomponents/staticCardWithRing',
                  },
                  {
                    name: '环形图plus',
                    path: '/procomponents/statisticCard/ringchartplus',
                    component: './procomponents/staticCardRing',
                  },
                  {
                    name: '面积图',
                    path: '/procomponents/statisticCard/areachart',
                    component: './procomponents/staticCardOnlyArea',
                  },
                  {
                    name: '柱状图',
                    path: '/procomponents/statisticCard/columnchart',
                    component: './procomponents/staticCardOnlyColumn',
                  },
                  {
                    name: 'ChartTable',
                    path: '/procomponents/statisticCard/charttable',
                    component: './procomponents/staticCardTable',
                  },
                  {
                    name: '卡片布局',
                    path: '/procomponents/statisticCard/cardlayout',
                    component: './procomponents/staticCardLayout',
                  },
                  {
                    name: 'TabPaneCard基本使用',
                    path: '/procomponents/statisticCard/tabpanebase',
                    component: './procomponents/staticProCardBaseTabPane',
                  },
                  {
                    name: '高级表格列伸缩',
                    icon: 'SolutionOutlined',
                    path: '/protable/protableresizable',
                    component: './procomponents/ProTableResizable',
                    exact: false,
                  },
                ],
              },
              {
                name: '高级表格',
                icon: 'SolutionOutlined',
                path: '/procomponents/protable',
                routes: [
                  {
                    name: '基础demo',
                    icon: 'FileDoneOutlined',
                    path: '/protable/baseprotable',
                    component: './procomponents/baseprotable',
                    exact: false,
                  },
                  {
                    name: '受控模式',
                    icon: 'FileDoneOutlined',
                    path: '/protable/controlledmode',
                    component: './procomponents/controlledmode',
                    exact: false,
                  },
                  {
                    name: '可编辑ProTable',
                    icon: 'SolutionOutlined',
                    path: '/protable/editableprotable',
                    component: './procomponents/editableProTable',
                    exact: false,
                  },
                  {
                    name: '表格轮询',
                    icon: 'SolutionOutlined',
                    path: '/protable/tablepolling',
                    component: './procomponents/tablepolling',
                    exact: false,
                  },
                  {
                    name: 'ToolBar自定义',
                    icon: 'SolutionOutlined',
                    path: '/protable/toolbarcustom',
                    component: './procomponents/toolbarcustom',
                    exact: false,
                  },
                  {
                    name: 'ValueType_数字类',
                    icon: 'SolutionOutlined',
                    path: '/protable/valuetypenumber',
                    component: './procomponents/valuetype_number',
                    exact: false,
                  },
                  {
                    name: 'ValueType_样式类',
                    icon: 'SolutionOutlined',
                    path: '/protable/valuetypestyle',
                    component: './procomponents/valuetype_style',
                    exact: false,
                  },
                  {
                    name: '高级表格列伸缩',
                    icon: 'SolutionOutlined',
                    path: '/protable/protableresizable',
                    component: './procomponents/ProTableResizable',
                    exact: false,
                  },
                ],
              },
              {
                name: '高级表单',
                icon: 'SolutionOutlined',
                path: '/proform',
                routes: [
                  {
                    name: '高级表单和可编辑表格',
                    icon: 'SolutionOutlined',
                    path: '/proform/proformweditable',
                    component: './procomponents/proformWeditable',
                  },
                  {
                    name: '高级表单的layout切换',
                    icon: 'SolutionOutlined',
                    path: '/proform/proformlayout',
                    component: './procomponents/proformlayout',
                  },
                  {
                    name: '自定义表单提交按钮',
                    icon: 'SolutionOutlined',
                    path: '/proform/customform',
                    component: './procomponents/customform',
                  },
                  {
                    name: '表单展开方式的控制',
                    icon: 'SolutionOutlined',
                    path: '/proform/showproform',
                    component: './procomponents/proformvisibleorsetvisible',
                    exact: false,
                  },
                ],
              },
            ],
          },
          {
            name: '高级表格',
            icon: 'SolutionOutlined',
            path: '/protable',
            routes: [
              {
                path: '/protable',
                redirect: '/protable/controlledmode',
              },
              {
                name: '基础demo',
                icon: 'FileDoneOutlined',
                path: '/protable/baseprotable',
                component: './procomponents/baseprotable',
                exact: false,
              },
              {
                name: '受控模式',
                icon: 'FileDoneOutlined',
                path: '/protable/controlledmode',
                component: './procomponents/controlledmode',
                exact: false,
              },
              {
                name: '可编辑ProTable',
                icon: 'SolutionOutlined',
                path: '/protable/editableprotable',
                component: './procomponents/editableProTable',
                exact: false,
              },
              {
                name: '表格轮询',
                icon: 'SolutionOutlined',
                path: '/protable/tablepolling',
                component: './procomponents/tablepolling',
                exact: false,
              },
              {
                name: 'ToolBar自定义',
                icon: 'SolutionOutlined',
                path: '/protable/toolbarcustom',
                component: './procomponents/toolbarcustom',
                exact: false,
              },
              {
                name: 'ValueType_数字类',
                icon: 'SolutionOutlined',
                path: '/protable/valuetypenumber',
                component: './procomponents/valuetype_number',
                exact: false,
              },
              {
                name: 'ValueType_样式类',
                icon: 'SolutionOutlined',
                path: '/protable/valuetypestyle',
                component: './procomponents/valuetype_style',
                exact: false,
              },
              {
                name: '高级表格列伸缩',
                icon: 'SolutionOutlined',
                path: '/protable/protableresizable',
                component: './procomponents/ProTableResizable',
                exact: false,
              },
              {
                name: '高级表格列设置',
                icon: 'SolutionOutlined',
                path: '/protable/procolumnsorter',
                component: './procomponents/ProColumnSorter',
                exact: false,
              },
            ],
          },
          {
            name: '高级表单',
            icon: 'SolutionOutlined',
            path: '/proform',
            routes: [
              {
                path: '/proform',
                redirect: '/proform/proformWeditable',
              },
              {
                name: '高级表单和可编辑表格',
                icon: 'SolutionOutlined',
                path: '/proform/proformweditable',
                component: './procomponents/proformWeditable',
              },
              {
                name: '高级表单的layout切换',
                icon: 'SolutionOutlined',
                path: '/proform/proformlayout',
                component: './procomponents/proformlayout',
              },
              {
                name: '自定义表单提交按钮',
                icon: 'SolutionOutlined',
                path: '/proform/customform',
                component: './procomponents/customform',
              },
              {
                name: '表单展开方式的控制',
                icon: 'SolutionOutlined',
                path: '/proform/showproform',
                component: './procomponents/proformvisibleorsetvisible',
                exact: false,
              },
            ],
          },
          {
            name: 'list.table-list',
            icon: 'table',
            path: '/list',
            component: './ListTableList',
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
