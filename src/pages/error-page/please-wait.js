import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Translate, {translate} from '@docusaurus/Translate';
export default function Hello() {
  return (
    <Layout title="Please Wait" description="Building Page">
    <head><meta name="robots" content="nOiNdeX, NoFolLoW" /></head>
    <main class="container margin-vert--xl">
        <div class="row">
            <div class="col col--6 col--offset-3">
                <h1 class="hero__title"><Translate>under-development</Translate></h1>
            </div>
        </div>
    </main>
    </Layout>
  );
}