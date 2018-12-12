const rehypePrism = require('@mapbox/rehype-prism');
const rehypeSlug = require('rehype-slug');

const emoji = require('remark-emoji');
const toc = require('remark-toc');

const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')({
    options: {
        hastPlugins: [rehypePrism, rehypeSlug],
        mdPlugins: [toc, emoji],
    },
    extension: /\.(md|mdx)$/,
});

module.exports = withCSS(withMDX());
