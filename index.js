const inherits = require('util').inherits;

module.exports = (
    name = 'CustomError',
    parent = Error,
    constructor = function(message){
        this.message = message;
    },
) => {
    function _err(...args){
        constructor.apply(this, args);
        Error.captureStackTrace(this, _err);
    }
    inherits(_err, parent);
    _err.prototype.name = name;
    Object.defineProperty(_err, 'name', {value: name, configurable: true});
    return _err;
};
