import React, { Component } from 'react';
import Head from 'next/head';
import 'prismjs/themes/prism-tomorrow.css';

import Description from '../components/Description';
import Footer from '../components/Footer';
import BackToToc from '../components/BackToToc';
import Examples from '../recipes/index.md';

export default class App extends Component {
    state = {
        backToTocVisible: false,
    };

    render() {
        return (
            <div className="app">
                <Head>
                    <title>How to do this in Flutter?</title>
                </Head>

                <Description />

                <div className="examples-container">
                    <Examples />
                </div>

                <BackToToc isVisible={this.state.backToTocVisible} />

                <section className="footer-container">
                    <Footer />
                    <p>
                        MIT © <a href="https://lesnitsky.dev">Lesnitsky</a>
                    </p>
                </section>

                <style jsx global>{`
                    body {
                        margin: 0;
                        background: #212121;
                        color: white;
                        font-family: 'Roboto Slab', serif;
                    }

                    h1,
                    h2 {
                        color: #cc99cd;
                    }

                    h3 {
                        color: #6196cc;
                    }

                    h1,
                    h2 {
                        width: 100%;
                    }

                    blockquote {
                        border-left: 2px dotted gray;
                        margin: 0;
                        padding: 0 1em;
                        color: gray;
                    }

                    .app {
                        width: 90%;
                        margin: 0 auto;
                    }

                    .examples-container > div > div {
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .examples-container > div > div > * {
                        width: 100%;
                    }

                    .toc-container > h2:empty {
                        display: none;
                    }

                    pre[class*='language-'] {
                        border-radius: 10px;
                        margin-bottom: 20px;
                    }

                    code {
                        background: #2d2d2d;
                        padding: 0.5em;
                    }

                    code[class*='language-'] {
                        padding: 0;
                    }

                    pre[class*='language-'],
                    code[class*='language-'] {
                        font-family: 'Fira Code', monospace;
                        font-size: 0.95em;
                    }

                    a {
                        text-decoration: none;
                        color: #6196cc;
                    }

                    a:visited {
                        color: #6196cc;
                    }

                    .footer-container {
                        font-size: 24px;
                        padding: 2em 0;
                    }

                    .footer-container > p {
                        font-size: 0.6em;
                    }
                `}</style>
            </div>
        );
    }

    componentDidMount() {
        const toc = document.querySelector('.toc-container');

        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => {
                const tocBottom = toc.offsetTop + toc.offsetHeight;
                if (window.scrollY >= tocBottom && !this.state.backToTocVisible) {
                    this.setState({ backToTocVisible: true });
                }
                if (window.scrollY < tocBottom && this.state.backToTocVisible) {
                    this.setState({ backToTocVisible: false });
                }
            });
        });
    }
}
