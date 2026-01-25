/* 元のURL: https://steamcommunity.com */
Object.seal && [ Object, Array, String, Number ].map( function( builtin ) { Object.seal( builtin.prototype ); } );

