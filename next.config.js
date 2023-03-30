const withPlugins = require('next-compose-plugins');
const images = require('remark-images');
const emoji = require('remark-emoji');
const optimizedImages = require('next-optimized-images');

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [images, emoji]
  }
});

module.exports = withPlugins([
 [
   withMDX,
   {
     pageExtensions: ['js', 'jsx', 'md', 'mdx']
   }
 ],
   [optimizedImages]
 ]);