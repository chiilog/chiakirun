var gulp = require( 'gulp' ),
	ejs = require( 'gulp-ejs' );

/* EJS */
gulp.task( 'ejs', function () {
	gulp.src( ['develop/ejs/**/*.ejs', '!develop/ejs/**/_*.ejs'] )
		.pipe( ejs({}, {}, {ext: '.html'}) )
		.pipe( gulp.dest( './develop' ) );
});
