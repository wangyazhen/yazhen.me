import React from 'react'
import ConfigProvider from 'antd/lib/config-provider'
import zhCN from 'antd/lib/locale/zh_CN'
import App, {Container} from 'next/app'

export default class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render () {
        const {Component, pageProps} = this.props
        return <Container>
            <ConfigProvider locale={zhCN}>
                <Component {...pageProps} />
            </ConfigProvider>
        </Container>
    }
}
