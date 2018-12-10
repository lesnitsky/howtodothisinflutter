import React, { Component } from 'react';
import Head from 'next/head';
import 'prismjs/themes/prism-tomorrow.css';

import Description from '../components/Description';
import Toc from '../components/Toc';
import Footer from '../components/Footer';
import BackToToc from '../components/BackToToc';

import HelloWorld from '../recipes/hello-world.md';
import Fetch from '../recipes/fetch.md';
import JSON from '../recipes/json.md';
import StatefullComponent from '../recipes/statefull-component.md';
import PureComponent from '../recipes/pure-component.md';
import Arrays from '../recipes/arrays.md';
import MakeAppFullscreen from '../recipes/make-app-fullscreen.md';
// <EXAMPLE_IMPORT>

export default class App extends Component {
    state = {
        toc: [],
        backToTocVisible: false,
    };

    render() {
        return (
            <div className="app">
                <Head>
                    <title>How to do this in Flutter?</title>
                </Head>

                <Description />
                <Toc tocItems={this.state.toc} />

                <HelloWorld />
                <PureComponent />
                <StatefullComponent />
                <MakeAppFullscreen />
                <Arrays />
                <Fetch />
                <JSON />
                {/* EXAMPLE_USAGE */}

                <BackToToc isVisible={this.state.backToTocVisible} />

                <section className="footer-container">
                    <Footer />
                    <p>
                        MIT © <a href="https://twitter.com/lesnitsky_a">Andrei Lesnitsky</a>
                    </p>
                </section>

                <style jsx global>{`
                    body {
                        margin: 0;
                        background: #212121;
                        color: white;
                        font-family: 'Roboto Slab', serif;
                    }

                    h1 {
                        color: #cc99cd;
                    }

                    h2 {
                        color: #6196cc;
                    }

                    h1,
                    h2 {
                        width: 100%;
                    }

                    .app {
                        width: 90%;
                        margin: 0 auto;
                    }

                    .app > div {
                        display: flex;
                        flex-wrap: wrap;
                    }

                    pre[class*='language-'] {
                        border-radius: 10px;
                        margin-bottom: 20px;
                    }

                    pre[class*='language-'],
                    code[class*='language-'] {
                        font-family: 'Fira Code', monospace;
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
        this.setState({
            toc: Array.from(document.querySelectorAll('.app > div > h1')).reduce((items, node) => {
                const text = node.textContent;
                const id = text.split(' ').join('-');

                node.id = id;

                const item = {
                    text,
                    id,
                };

                return [...items, item];
            }, []),
        });

        const toc = document.querySelector('.toc-container');

        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => {
                const tocBottom = toc.offsetTop + toc.offsetHeight;

                if (window.scrollY >= tocBottom && !this.state.backToTocVisible) {
                    console.log('v');
                    this.setState({ backToTocVisible: true });
                }

                if (window.scrollY < tocBottom && this.state.backToTocVisible) {
                    console.log('nv');
                    this.setState({ backToTocVisible: false });
                }
            });
        });
    }
}
