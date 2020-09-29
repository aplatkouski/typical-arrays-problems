exports.min = function min(array = []) {
    return array.length ? Math.min(...array) : 0;
};

exports.max = function max(array = []) {
    return array.length ? Math.max(...array) : 0;
};

exports.avg = function avg(array = []) {
    return array.length ? array.reduce(function (acc, val) {return acc + val;},
        0) / array.length : 0;
};
