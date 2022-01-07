/*
 * @Description: 无
 * @version: 1.0.0
 * @Company: sdbean
 * @Author: hammercui
 * @Date: 2019-01-16 15:37:22
 * @LastEditors: zhanglu
 * @LastEditTime: 2021-03-06 09:01:18
 */
import appCng from './router.app.cng';

export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  
      // account个人页
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
          },
        ],
      },
      // 404错误
      {
        component: '404',
      },
];
