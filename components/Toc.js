export default ({ tocItems }) => (
    <section className="toc-container" id="toc">
        <h1>Table of Contents</h1>
        <ul className="toc">
            {tocItems.map(item => (
                <li>
                    <a href={`#${item.id}`}>{item.text}</a>
                </li>
            ))}
        </ul>

        <style jsx>{`
            .toc-container {
                font-size: 20px;
                padding: 3rem 0;
                box-sizing: border-box;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .toc a:hover {
                text-decoration: underline;
            }
        `}</style>
    </section>
);
