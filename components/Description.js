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

            <script src="https://platform.twitter.com/widgets.js"></script>
            <a
                style={{ opacity: 0 }}
                href="https://twitter.com/lesnitsky_dev?ref_src=twsrc%5Etfw"
                class="twitter-follow-button"
                data-size="large"
                data-show-screen-name="false"
                data-lang="en"
                data-show-count="true"
            >
                Follow @lesnitsky_a
            </a>
        </header>

        <h2>
            Flutter and dart cheat sheet
            <br />
        </h2>

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
                margin-right: 0.5em;
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
