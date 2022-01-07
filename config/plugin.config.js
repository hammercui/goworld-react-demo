/*
 * @Description: antd 插件配置
 * @version: 1.0.0
 * @Company: sdbean
 * @Author: hammercui
 * @Date: 2018-12-29 16:45:38
 * @LastEditors: hammercui
 * @LastEditTime: 2020-06-09 11:25:13
 */

import MergeLessPlugin from 'antd-pro-merge-less';
import AntDesignThemePlugin from 'antd-theme-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import path from 'path';

export default config => {
  // 将所有 less 合并为一个供 themePlugin使用
  const outFile = path.join(__dirname, '../.temp/ant-design-pro.less');
  const stylesDir = path.join(__dirname, '../src/');

  config.plugin('merge-less').use(MergeLessPlugin, [
    {
      stylesDir,
      outFile,
    },
  ]);

  config.plugin('ant-design-theme').use(AntDesignThemePlugin, [
    {
      antDir: path.join(__dirname, '../node_modules/antd'),
      stylesDir,
      varFile: path.join(__dirname, '../node_modules/antd/lib/style/themes/default.less'),
      mainLessFile: outFile, //     themeVariables: ['@primary-color'],
      indexFileName: 'index.html',
    },
  ]);

  config.plugin('case-sensitive-paths').use(CaseSensitivePathsPlugin, [
    {
      debug: true,
      useBeforeEmitHook: true,
    },
  ]);
};
