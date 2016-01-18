var express = require( 'express' );
var app = express();
var http = require( 'http' ).Server( app );
var port = process.env['PORT'] || 8080;

app.use( express.static( __dirname + '/' ) );

app.get( '/', function( req, res ) {
  res.sendFile( __dirname + '/janechesterportfolio/janechesterportfolio.html' );
 } );

http.listen( port, function() {
  console.log( 'Listening for connections' );
} );