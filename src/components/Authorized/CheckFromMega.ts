import React from 'react';
import PromiseRender from './PromiseRender';
import { CURRENT } from './renderAuthorize';
import { ok } from 'assert';

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

/**
 * @name: 判断路由是否可进入
 * @msg:
 * @param {type}
 * @return:
 */
export function IsAccessEnable(authority, currentAuthority: number[]): boolean {
  if (!authority) { return true; }

  for (let index = 0, len = currentAuthority.length; index < len; index++) {
    const element = currentAuthority[index];
    //权限是数字
    if (typeof (authority) == 'number') {
      if (element == authority) {
        return true;
      }
    }
    //权限是数组
    else {
      //console.info("数组",authority);
      for (const item of authority) {
        //console.info("数组item",item);
        if (element == item) {
          return true;
        }
      }
    }
  }
  return false;
}

/**
 * 通用权限检查方法 antd自带方案 mega方案
 * Common check permissions method
 * @param { 权限判定 Permission judgment type string |array | Promise | Function } authority
 * @param { 你的权限 Your permission description  type:string} currentAuthority
 * @param { 通过的组件 Passing components } target
 * @param { 未通过的组件 no pass components } Exception
 */
const CheckFromMega = (authority: any, currentAuthority: any, target: any, Exception: any) => {
  if (IsAccessEnable(authority, currentAuthority)) {
    return target;
  }
  return Exception;
};

export default CheckFromMega;
