import React from 'react';
import Layout from '@theme/Layout';
import QRCode from 'qrcode.react';
export default function Hello() {
  return (
    <Layout title="字幕组招募" description="">
    <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          height: '60vh',
        }}>
        <div style={{ marginRight: '20px', textAlign: 'left' }}>
        <p></p>
          <h1>字幕组招募告示</h1>
          <p>汐组剪辑岗位长期人手不足，恳请各位有能之士加入汐组！对日语能力不强求。群号 566195047</p>
          <p>请点击下方链接或扫描二维码加入</p>
          <a href="https://qm.qq.com/cgi-bin/qm/qr?k=H-52iaHLS1ippsOZMgKK0vGbrcOJhMlK&jump_from=webapi&authKey=+gt5IGL7pGTYXcn84x24i78She5wlisHIDfo4rxhUzlScO6lB2DJPIPvOTGiuggT" target="_blank" rel="noopener noreferrer">
            加入汐组审核群
          </a>
          <p><QRCode value={'https://qm.qq.com/cgi-bin/qm/qr?k=QWPh0YRHHhcx9fhp_ARqgPQcaOrF7Ooj&jump_from=webapi&qr=1'} size={250} /></p>
        </div>
      </div>
    </Layout>
  );
}
