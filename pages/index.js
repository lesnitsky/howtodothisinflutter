import React, { Component } from 'react';
import 'prismjs/themes/prism-tomorrow.css';

import Description from '../components/Description';
import Toc from '../components/Toc';

import HelloWorld from '../recipes/hello-world.md';
import Fetch from '../recipes/fetch.md';
import JSON from '../recipes/json.md';
// <EXAMPLE_IMPORT>

export default class App extends Component {
    state = {
        toc: [],
    };

    render() {
        return (
            <div className="app">
                <Description />
                <Toc tocItems={this.state.toc} />

                <HelloWorld />
                <Fetch />
                <JSON />
                {/* EXAMPLE_USAGE */}

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
    }
}
