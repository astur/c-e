const test = require('ava');
const ce = require('.');

test('name and message', t => {
    const CustomError = ce();
    const BaseError = ce('BaseError', CustomError);
    t.is(new CustomError().name, 'CustomError');
    t.is(new BaseError().name, 'BaseError');
    t.is(new BaseError('test').message, 'test');
    t.true(new BaseError() instanceof Error);
    t.true(new BaseError() instanceof CustomError);
    t.true(new BaseError() instanceof BaseError);
});

test('constructor', t => {
    const MyError = ce('MyError', Error, function(a, b){
        this.message = `${a + b}`;
        this.a = a;
        this.b = b;
    });
    t.is(new MyError(1, 2).message, '3');
    t.is(new MyError(1, 2).a, 1);
    t.is(new MyError(1, 2).b, 2);
});
