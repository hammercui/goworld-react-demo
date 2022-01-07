/*
 * @Description:安全模块-非对称加密
 * @version: 1.0.0
 * @Company: sdbean
 * @Author: zhanglu
 * @Date: 2020-04-24 13:56:53
 * @LastEditors: zhanglu
 * @LastEditTime: 2021-04-13 10:41:30
 */
import moment from 'moment-timezone'
/**
 * @name:获得moment
 * @param value: moment
 * @return:
 */
export function getTimeMoment(value) {
  if (value != null) {
    value = moment(value).tz("Asia/Shanghai");
  }
  return value;
};

/**
 * @name:获得string
 * @param value: moment
 * @return:
 */
export function getTimeStr(value) {
  if (value == "0000-00-00 00:00:00") {
    return "0000-00-00 00:00:00";
  }
  if (value != null && value != undefined) {
    return moment(value).tz("Asia/Shanghai").format('YYYY-MM-DD HH:mm:ss')
  }
  return "";
};

export function getDayStrFromMoment(value) {
  if (value == "0000-00-00 00:00:00") {
    return "0000-00-00 00:00:00";
  }
  if (value != null && value != undefined) {
    return moment(value).tz("Asia/Shanghai").format('YYYY-MM-DD')
  }
  return "";
};

export function getHMSStr(value) {
  if (value == "00:00:00") {
    return "00:00:00";
  }
  if (value != null && value != undefined) {
    return moment(value).tz("Asia/Shanghai").format('HH:mm:ss')
  }
  return "";
};


/**
 * @name:获得moment
 * @param value: string
 * @return:
 */
export function getTimeStrToMoment(value) {
  if (value != null) {
    value = moment(value).tz("Asia/Shanghai");

  }
  return value;
};

export function getDayStr() {
  let now = moment().locale('zh-cn').format('YYYY-MM-DD');
  return now;
};

export function getNow() {
  return moment().tz("Asia/Shanghai");
}

export function getNowStr() {
  return moment().tz("Asia/Shanghai").format('YYYY-MM-DD HH:mm:ss');
}
