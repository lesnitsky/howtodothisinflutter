export default () => (
    <footer>
        <div className="footer-row credits">
            Built with
            <a href="https://mdxjs.com/" target="_blank">
                <img src="https://mdx-logo.now.sh/" width="70" alt="mdx" />
            </a>
            and
            <a href="https://nextjs.org/" target="_blank">
                <svg height="50" viewBox="0 0 148 90" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
                        fill="white"
                        fillRule="nonzero"
                    />
                </svg>
            </a>
            <a href="https://lesnitsky.dev?utm_soruce=howtodothisinflutter" target="blank" className="lesnitsky-badge">
                <svg id="signoff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1675 670" height="40px">
                    <path
                        fill="#FFF"
                        fill-rule="evenodd"
                        d="M900 520L750 670H338V151L489 0l6 6h1v506h-1l1 1v-1h404v8zm-412-8V15L346 157v498l143-143h-1zm8 8v-1L354 662h391l141-142H496z"
                    ></path>
                    <text y="360" font-family="Myriad Pro" font-size="200">
                        <tspan fill="#FFF" font-family="Montserrat">
                            by
                        </tspan>
                    </text>
                    <text x="580" y="360" font-family="Myriad Pro" font-size="200">
                        <tspan fill="#FFF" font-family="Montserrat">
                            LESNITSKY
                        </tspan>
                    </text>
                </svg>
            </a>
        </div>

        <div className="footer-row">
            Contributions are very welcome!{' '}
            <a href="https://github.com/lesnitsky/howtodothisinflutter" target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 1024 1024"
                    fill="none"
                    className="gh-link"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                        transform="scale(64)"
                        fill="white"
                    />
                </svg>
            </a>
        </div>

        <style jsx>{`
            footer {
                font-size: 0.8em;
                box-sizing: border-box;
                margin-top: 5em;
            }

            .footer-row {
                margin-top: 0.3em;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
            }

            .footer-row > a {
                margin: 0 10px;
            }

            .credits {
                line-height: 0;
            }

            .gh-link {
                margin-left: 0.3em;
            }

            .gh-link:hover > path {
                fill: #cc99cd;
            }

            .lesnitsky-badge {
                background: black;
                display: inline-block;
                padding: 0.2em 1em;
                border-radius: 8px;
            }

            .footer-row > a.lesnitsky-badge {
                margin-left: 0;
            }
        `}</style>
    </footer>
);
