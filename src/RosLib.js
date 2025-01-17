/**
 * @fileOverview
 * @author Russell Toris - rctoris@wpi.edu
 */

/**
 * If you use roslib in a browser, all the classes will be exported to a global variable called ROSLIB.
 *
 * If you use nodejs, this is the variable you get when you require('roslib')9
 */
var ROSLIB = this.ROSLIB || {
  REVISION : '1.1.0'
};

var assign = require('object-assign');

// Add core components
assign(ROSLIB, require('./core'));

assign(ROSLIB, require('./actionlib'));

module.exports = ROSLIB;
