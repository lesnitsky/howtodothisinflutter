export default ({ isVisible }) => (
    <a
        href="#toc"
        className="back-to-toc"
        style={{
            transform: `translateY(${isVisible ? 0 : 200}%)`,
        }}
    >
        <span>⏫</span> ToC
        <style jsx>{`
            .back-to-toc {
                position: fixed;
                bottom: 1em;
                right: 1em;
                padding: 1em;
                align-self: flex-end;
                background: #424141;
                transition: transform 0.3s;
                color: white;
                border-radius: 8px;
            }
        `}</style>
    </a>
);
