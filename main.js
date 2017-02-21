(function () {

    var arr = [2, 10, 5, 7, 11, 20, 3, 8];

    // Bubble Sort
    Array.prototype.bubbleSort = function () {
        var arr = this,
            tmp;

        for(var i = 0; i < arr.length; i++) {
            for(var j = 0; j < arr.length; j++) {
                if(arr[i] < arr[j]) {
                    tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
    };


})();