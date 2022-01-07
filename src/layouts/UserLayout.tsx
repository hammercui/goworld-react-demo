import React, { Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { CopyrightOutlined } from '@ant-design/icons';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import { connect } from 'dva';
import styles from './UserLayout.less';
import logo from '../assets/logo.png';
import Footer from './Footer';
import { getServerName } from '@/utils/utils';

const links = [
  {
    key: 'help',
    title: formatMessage({ id: 'layout.user.link.help' }),
    href: '',
  },
  {
    key: 'privacy',
    title: formatMessage({ id: 'layout.user.link.privacy' }),
    href: '',
  },
  {
    key: 'terms',
    title: formatMessage({ id: 'layout.user.link.terms' }),
    href: '',
  },
];

const copyright = (
  <Fragment>
    {/* Copyright <CopyrightOutlined /> 2019 美嘉科技WEB技术部出品 */}
  </Fragment>
);

@connect(({ global }) => ({
  serverEnv: global.serverEnv,
}))
class UserLayout extends React.PureComponent<any> {
  // @TODO title
  // getPageTitle() {
  //   const { routerData, location } = this.props;
  //   const { pathname } = location;
  //   let title = 'Ant Design Pro';
  //   if (routerData[pathname] && routerData[pathname].name) {
  //     title = `${routerData[pathname].name} - Ant Design Pro`;
  //   }
  //   return title;
  // }
  componentDidMount() {
    const { dispatch, serverEnv } = this.props;
    if (!serverEnv) {
      dispatch({ type: 'global/fetchServerEnv' });
    }
  }

  render() {
    const { children, serverEnv } = this.props;
    return (
      // @TODO <DocumentTitle title={this.getPageTitle()}>
      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>MAGISTER ADMIN · {getServerName(serverEnv)}  </span>
              </Link>
            </div>
            {/* <div className={styles.desc}>本系统是美嘉科技所有产品不可分割的一部分</div> */}
          </div>
          {children}
        </div>
        {/* <GlobalFooter links={links} copyright={copyright} serverEnv={serverEnv} /> */}
        <Footer serverEnv={serverEnv} />
      </div>
    );
  }
}

export default UserLayout;
