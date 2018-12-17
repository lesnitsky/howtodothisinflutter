import Footer from './Footer';

export default () => (
    <section>
        <header>
            <h1>How to do this in Flutter?</h1>

            <div className="github-button-container">
                <a
                    className="github-button"
                    href="https://github.com/lesnitsky/howtodothisinflutter"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star lesnitsky/howtodothisinflutter on GitHub"
                >
                    Star
                </a>
            </div>
        </header>

        <h2>
            Cheat sheet for react native developers. <br />
            Find Flutter alternatives to familiar concepts
        </h2>

        <small>Many examples are not really specific to React Native or Flutter but rather JavaScript and Dart</small>

        <p>
            You might also want to check out{' '}
            <a href="https://flutter.io/docs/get-started/flutter-for/react-native-devs">
                flutter for react native devs
            </a>
        </p>

        <Footer />

        <style jsx>{`
            header {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
            }

            .github-button-container {
                line-height: 1em;
                height: 28px;
            }

            .github-button-container > a {
                visibility: hidden;
            }

            h1 {
                width: auto;
                font-size: 2em;
                margin-right: 0.5em;
            }

            h2 {
                font-size: 1.2em;
                color: white;
                margin-top: 1.5em;
            }

            section {
                min-height: 100vh;
                font-size: 24px;
                display: flex;
                justify-content: center;
                align-item: center;
                flex-direction: column;
                padding: 2em 0;
                box-sizing: border-box;
            }

            small {
                color: gray;
                border-left: 3px solid gray;
                padding-left: 20px;
            }
        `}</style>
    </section>
);
