import 'prismjs/themes/prism-tomorrow.css';

import Description from '../components/Description';

import HelloWorld from '../recipes/hello-world.md';
import Fetch from '../recipes/fetch.md';
import JSON from '../recipes/json.md';
// <EXAMPLE_IMPORT>

export default () => (
    <div className="app">
        <Description />
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
                width: 100%;
                color: #cc99cd;
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
        `}</style>
    </div>
);
