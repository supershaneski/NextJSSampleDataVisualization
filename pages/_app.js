import App from 'next/app';
import Head from 'next/head';
// Base CSS Style
import '../style/app.css';

export default function MyApp({ Component, pageProps }) {
    const siteTitle = process.env.siteTitle;
    return (
        <>
        <Head>
            <title>{ siteTitle }</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component { ...pageProps } />
        </>
    )
}

MyApp.getInitialProps = async (appContext) => {
    // get pageprops
    const appProps = await App.getInitialProps(appContext);
    return {
        ...appProps
    }
}