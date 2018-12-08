import Footer from './Footer';

export default () => (
    <section>
        <header>
            <h1>How to do this in Flutter?</h1>
        </header>

        <h2>
            Cheat sheet for react-native developers. <br />
            Find Flutter alternatives to familiar concepts
        </h2>

        <small>Many examples are not really specific to React Native or Flutter, but rather JavaScript and Dart</small>

        <Footer />

        <style jsx>{`
            h1 {
                font-size: 2em;
            }

            h2 {
                font-size: 1.2em;
                color: white;
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
