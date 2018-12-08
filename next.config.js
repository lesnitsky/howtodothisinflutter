const rehypePrism = require('@mapbox/rehype-prism');
const withMDX = require('@zeit/next-mdx')({
    options: {
        hastPlugins: [rehypePrism],
    },
    extension: /\.(md|mdx)$/,
});
const withCSS = require('@zeit/next-css');

module.exports = {
    ...withCSS(withMDX()),
    assetPrefix: process.env.NODE_ENV === 'production' ? '/howtodothisinflutter' : '',
};
