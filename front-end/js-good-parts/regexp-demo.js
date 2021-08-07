Function.prototype.method = function(name,func) {
    this.prototype[name] = func;
    return this;
};

Number.method('integer', function(){
    return Math[this < 0 ? 'ceil':'floor'](this);
});

console.log((-10/3).integer());

String.method('trim',function(){
    // \s是空白符
    // 结尾的g代表匹配多次
    var regex = /^\s+|\s+$/g;
    return this.replace(regex,'\'');
});

console.log('  abc  '.trim());
