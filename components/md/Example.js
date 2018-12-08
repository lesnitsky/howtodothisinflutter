export default ({ children, reactnative, flutter }) => (
    <div className="example-container">
        {reactnative ? <h2>React Native</h2> : null}
        {flutter ? <h2>Flutter</h2> : null}

        {children}
        <style jsx>{`
            .example-container {
                flex-basis: 50%;
                box-sizing: border-box;
                max-width: 50%;
                padding-right: 10px;
            }

            @media only screen and (max-width: 1100px) {
                .example-container {
                    flex-basis: 100%;
                    max-width: 100%;
                }
            }

            .example-container + .example-container {
                padding-right: 0;
                padding-left: 10px;
            }
        `}</style>
    </div>
);
