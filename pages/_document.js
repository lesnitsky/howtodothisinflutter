import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130596321-1" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
    
                        gtag('config', 'UA-130596321-1');
                    `,
                        }}
                    />
                    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet" />
                    <link href="https://unpkg.com/firacode@1.205.0/distr/fira_code.css" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script async defer src="https://buttons.github.io/buttons.js" />
                </body>
            </html>
        );
    }
}
