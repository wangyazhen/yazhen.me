// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
            <Head>
                <meta charSet="utf-8"/>
                <title>亚振的博客</title>
                <meta name="keywords" content="亚振的博客,drcus 的博客,博客"/>
                <meta name="description" content=""/>
                <link rel="icon" href="/static/img/favicon.ico" />
                <link href="/static/css/css.css" rel="stylesheet" type="text/css" media="screen" />
                <script src="/static/js/browser-polyfill.min.js"/>
            </Head>
            <body className="custom_class">
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}