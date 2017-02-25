module.exports = {
	plugins: [
		require('postcss-import')({}),
		require('postcss-custom-properties')({}),
		require('postcss-nested')({}),
		require('postcss-custom-media')({}),
		require('autoprefixer')({
			browsers: 'last 2 versions, ie 9'
		}),
		require('cssnano')({})
	]
}
