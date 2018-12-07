import 'prismjs/themes/prism-tomorrow.css';

import HelloWorld from '../recipes/hello-world.md';
import Fetch from '../recipes/fetch.md';
import JSON from '../recipes/json.md';
// <EXAMPLE_IMPORT>

export default () => (
    <div className="app">
        <HelloWorld />
        <Fetch />
        <JSON />
        {/* EXAMPLE_USAGE */}

        <style jsx global>{`
            h1 {
                width: 100%;
                color: #cc99cd;
            }

            h1,
            h2 {
                font-family: 'Roboto Slab', serif;
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
        `}</style>
    </div>
);
