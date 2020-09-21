

import Document, { Head, Main, NextScript, Html } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
            <Head>
                <meta charSet="utf-8"/>
                <title>亚振的博客</title>
                <meta name="keywords" content="亚振的博客,drcus 的博客,博客"/>
                <meta name="description" content=""/>
                <link rel="icon" href="/static/favicon.ico" />
                <link href="/static/css/css.css" rel="stylesheet" type="text/css" media="screen" />
            </Head>
            <body className="custom_class">
            <Main />
            <NextScript />
            </body>
            </Html>
        )
    }
}

export default MyDocument
