import { string } from 'prop-types';
import { wfPropsGiftSourceType } from './../dto/staticEnum';
/*
 * @Description:安全模块-非对称加密
 * @version: 1.0.0
 * @Company: sdbean
 * @Author: zhanglu
 * @Date: 2020-04-24 13:56:53
 * @LastEditors: zhanglu
 * @LastEditTime: 2021-01-05 13:19:29
 */
import AppList from '../pages/AppList';
/**
 * @name:获得类型名称
 * @param {cateId}
 * @return:
 */
export function checkNotNull(str: string): boolean {
  if (str == undefined || str == null || str == "") {
    return false;
  }

  return true;
}

export function checkSame(value1, value2): string {
  if (value1 != value2) {
    return `${value1}->${value2}`;
  }
  return "";
};