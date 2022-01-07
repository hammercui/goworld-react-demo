/* eslint-disable react/jsx-indent */
/*
 * @Description: 无
 * @version: 1.0.0
 * @Company: sdbean
 * @Author: hammercui
 * @Date: 2018-12-29 16:45:38
 * @LastEditors: zhanglu
<<<<<<< HEAD
 * @LastEditTime: 2021-07-27 17:08:36
=======
 * @LastEditTime: 2021-07-27 17:23:39
>>>>>>> coderCN
 */
import moment from 'moment';
import React from 'react';
import nzh from 'nzh/cn';
import { parse, stringify } from 'qs';
// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');

export function getUUID(len) {
  const strUUID = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
  const strUUID2 = strUUID.replace(/-/g, '');
  return strUUID2.substring(0, len);
}

export function getHtmlDraft(key) {
  var realKey = `html_draft_${key}`;
  if (localStorage.getItem(realKey)) {
    return localStorage.getItem(realKey);
  }
  return '';
}
// 保存html草稿
export function saveHtmlDraft(key, htmlStr) {
  var realKey = `html_draft_${key}`;
  var oldStr = getHtmlDraft(key);
  if (oldStr !== htmlStr) {
    localStorage.setItem(realKey, htmlStr);
    return true;
  }

  if (htmlStr == '') {
    localStorage.setItem(realKey, htmlStr);
  }

  return false;
}

export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

export function getTimeDistance(type) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }

  if (type === 'month') {
    const year = now.getFullYear();
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
    ];
  }

  const year = now.getFullYear();
  return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
}

export function getPlainNode(nodeList, parentPath = '') {
  const arr = [];
  nodeList.forEach(node => {
    const item = node;
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

export function digitUppercase(n) {
  return nzh.toMoney(n);
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  }
  if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
}

function getRenderArr(routes) {
  let renderArr = [];
  renderArr.push(routes[0]);
  for (let i = 1; i < routes.length; i += 1) {
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
    // 是否包含
    const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  return renderArr;
}

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */
export function getRoutes(path, routerData) {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  );
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''));
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes);
  // Conversion and stitching parameters
  const renderRoutes = renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
  return renderRoutes;
}

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

export function getQueryPath(path = '', query = {}) {
  const search = stringify(query);
  if (search.length) {
    return `${path}?${search}`;
  }
  return path;
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}

export function formatWan(val) {
  const v = val * 1;
  if (!v || Number.isNaN(v)) return '';

  let result = val;
  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = (
      <span>
        {result}
        <span
          styles={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            lineHeight: 20,
            marginLeft: 2,
          }}
        >
          万
        </span>
      </span>
    );
  }
  return result;
}

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export function isAntdPro() {
  return window.location.hostname === 'preview.pro.ant.design';
}

/**
 * @name: 获得用于翻页的全新list
 * @msg:
 * @param oldList:旧的列表 payloadList:网络下发列表 count列表总长度
 * @return:
 */
export function genPageList(oldList, payloadList, start, count) {
  // 下发为空
  if (!payloadList || payloadList.length == 0) return [];
  // 使用不可变的思想
  let newList;
  if (oldList === null || oldList === undefined) {
    newList = [];
  } else {
    newList = [...oldList];
  }
  // 新增补充
  const differ = count - newList.length;
  if (differ > 0) {
    for (let i = 0; i < differ; i++) {
      newList.push({});
    }
  }
  // 删除多余
  else if (differ < 0) {
    for (let i = newList.length, end = i + differ; i > end; i--) {
      newList.pop();
    }
  }

  // 深拷贝
  const addList = [...payloadList];
  // 更新
  for (let j = 0, len = addList.length; j < len; j++) {
    const index = start + j;
    if (j >= newList.length) break;
    newList[index] = addList[j];
  }

  return newList;
}

let env = 'coder';

// 获得服务器版本
export function getServerName(serverEnv) {
  if (serverEnv) {
    env = serverEnv;
  } else {
    env = 'prod';
  }

  if (!serverEnv) return '';
  // 生产
  if (serverEnv == 'prod') return '生产版';

  if (serverEnv == 'beta') return '灰度版';

  if (serverEnv == 'coder') return 'coder版';
  // 开发local
  return '本地版';
}

/**
 * @name: 获得开发环境 prod mbeta local
 * @msg:
 * @param {type}
 * @return:
 */
export function globalEnv() {
  return env;
}


/**
 * @name: 检测文件是否是mp4
 * @msg:
 * @param {type}
 * @return:
 */
export function checkIsMp4(fileName) {
  const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
  let isMp4 = false;
  if (fileExtension == 'mp4' || fileExtension == 'MP4') {
    isMp4 = true;
  }
  return isMp4;
}

// 全局草稿
const globalDrafts = {};
// 获得html草稿

// export function getHtmlDraft(key) {
//   var realKey = `html_draft_${key}`;
//   if (localStorage.getItem(realKey)) {
//     return localStorage.getItem(realKey);
//   }
//   return '';
// }
// 保存html草稿
// export function saveHtmlDraft(key, htmlStr) {
//   var realKey = `html_draft_${key}`;
//   var oldStr = getHtmlDraft(key);
//   if (oldStr !== htmlStr) {
//     localStorage.setItem(realKey, htmlStr);
//     return true;
//   }

//   if (htmlStr == '') {
//     localStorage.setItem(realKey, htmlStr);
//   }

//   return false;
// }
