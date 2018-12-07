import 'prismjs/themes/prism-tomorrow.css';

import Fetch from '../recipes/fetch.md';

export default () => (
    <div className="app">
        <Fetch />

        <style jsx global>{`
            h1 {
                width: 100%;
            }

            .app {
                width: 70%;
                margin: 0 auto;
            }

            .app > div {
                display: flex;
                flex-wrap: wrap;
            }

            h1 {
                color: #cc99cd;
            }
        `}</style>
    </div>
);
