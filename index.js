'use strict';

var deepEqual = require('deep-equal');

function deepCompare(instance, nextProps, nextState) {
  return (
    !deepEqual(instance.props, nextProps) ||
    !deepEqual(instance.state, nextState)
  );
}

module.exports = deepCompare;
