import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <title>How to do this in Flutter</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <style>{`body { margin: 0; background: #212121; color: white; font-family: sans-serif; }`}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
