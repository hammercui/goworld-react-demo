import React, { Fragment } from 'react';
import { CopyrightOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import { getServerName } from '@/utils/utils';
import cversion from '../../config/clientVersion';

const { Footer } = Layout;
const FooterView = ({ serverEnv }) => {
  let serverName = getServerName(serverEnv);
  if (serverName) {
    serverName = `(${serverName})`;
  }

  return (
    <Footer style={{ padding: 0 }}>
      <GlobalFooter

        copyright={
          <Fragment>
            {/* Copyright <CopyrightOutlined /> 2019 美嘉科技WEB技术部出品{serverName} */}
            {cversion}
          </Fragment>
        }
      />
    </Footer>
  );
};
export default FooterView;
