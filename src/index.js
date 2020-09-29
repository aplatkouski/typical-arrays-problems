exports.min = function min(array = []) {
    let minimum = 0;
    for (let num of array) {
        if (num < minimum) {
            minimum = num;
        }
    }
    return minimum;
};

exports.max = function max(array = []) {
    let maximum = 0;
    for (let num of array) {
        if (num > maximum) {
            maximum = num;
        }
    }
    return maximum;
};

exports.avg = function avg(array = []) {
    let total = 0;
    for (let num of array) {
        total += num;
    }
    return array.length ? total / array.length : 0;
};
