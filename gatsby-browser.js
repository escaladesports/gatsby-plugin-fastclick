'use strict';

var _reactFastclick = require('react-fastclick');

var _reactFastclick2 = _interopRequireDefault(_reactFastclick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onInitialClientRender = () => {
	(0, _reactFastclick2.default)();
};