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

        return arr;
    };

    // Insertion Sort
    Array.prototype.insertionSort = function () {
        var arr = this,
            j, tmp;

        for(var i = 1; i < arr.length; i++) {
            j = i - 1;

            while(arr[j] > arr[j + 1] && j >= 0) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                j--;
            }
        }

        return arr;
    };

    // Selection Sort
    Array.prototype.selectionSort = function () {
        var arr = this,
            tmp, min;

        for(var i = 0; i < arr.length - 1; i++) {
            min = i;

            for(var j = i + 1; j < arr.length; j++) {
                if(arr[j] < min) {
                    min = arr[j];
                }
            }

            tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }

        return arr;
    };

    console.log(arr.insertionSort());
})();