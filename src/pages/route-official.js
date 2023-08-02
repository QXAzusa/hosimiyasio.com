import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="官方网站入口选择" description="Contact Page">
    <head><meta name="robots" content="noindex, nofollow" /></head>
    <main class="container margin-vert--xl">
        <div class="row">
            <div class="col col--6 col--offset-3">
                <h1 class="hero__title">官网入口选择</h1>
                <h1 class="hero__subtitle"><a href='https://link.hosimiyasio.com/?target=https://hosimiyasio-official.com/'>原版</a></h1>
                <h1 class="hero__subtitle"><a href='https://mirror-official.hosimiyasio.com'>镜像</a></h1>
            </div>
        </div>
    </main>
    </Layout>
  );
}
