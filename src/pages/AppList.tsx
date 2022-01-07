/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable lines-between-class-members */
/* eslint-disable prefer-template */
/* eslint-disable react/sort-comp */
import React, { Fragment } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Card, Button, message } from 'antd';
import { router } from 'umi';
import { getAuthority } from '@/utils/authority';
import { IsAccessEnable } from './../components/Authorized/CheckFromMega';
import * as styles from './Applist.less';

const apps = [
	{
		name: 'magister',
		route: '/',
		routeId: ""
	},
];

export default class AppsLayout extends React.Component {

	handleRedirect = (path, enable) => {
		if (enable) { router.replace(path); }
		else {
			message.error("没有当前app的访问权限!");
		}
	};

	render() {
		return (
			<PageHeaderWrapper title="App列表">
				<Card>
					<div style={{ display: 'flex' }}>
						{apps.map((item, key) => {
							const enable = IsAccessEnable(item.routeId, getAuthority());
							const iconClassName = enable ? styles.icon : styles.grayIcon;
							return (
								<div key={key} style={{ margin: 24 }}>
									<img
										className={iconClassName}
										onClick={() => this.handleRedirect(item.route, enable)}
										src={item.icon}
									/>
								</div>
							);
						})}
					</div>
				</Card>
			</PageHeaderWrapper>
		);
	}
}
