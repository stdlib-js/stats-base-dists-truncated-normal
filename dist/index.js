/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace truncatedNormal
*/
var truncatedNormal = {};

/**
* @name pdf
* @memberof truncatedNormal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/truncated-normal/pdf}
*/
setReadOnly( truncatedNormal, 'pdf', require( '@stdlib/stats-base-dists-truncated-normal-pdf/dist' ) );


// EXPORTS //

module.exports = truncatedNormal;
