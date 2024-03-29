import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          {}
          <meta charSet="utf-8" />
          <title>
            Demo React Hooks - A demo on how to use react hooks for forms
          </title>
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          {}
          <meta
            name="description"
            content="Using context, state, effect, and custom hooks, you can build reusable state logic across components and only keep UI concerns inside your components"
          />
          <meta
            name="image"
            property="og:image"
            content="https:
          />
          {}
          <meta
            name="og:title"
            content="Demo React Hooks - A demo on how to use react hooks for forms"
          />
          <meta
            name="og:description"
            content="Using context, state, effect, and custom hooks, you can build reusable state logic across components and only keep UI concerns inside your components"
          />
          <meta
            name="og:image"
            content="https:
          />
          <meta name="og:url" content="https:
          <meta
            name="og:site_name"
            content="Demo React Hooks - A demo on how to use react hooks for forms"
          />
          <meta name="og:type" content="website" />
          <meta
            name="keywords"
            content="react hooks reactjs javascript components"
          />
          <meta
            name="horangi-verify"
            content="440ab2c8-7266-4902-833a-797d26198956"
          />
          <style>{`body { margin: 0 } `}</style>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
export default MyApp;
