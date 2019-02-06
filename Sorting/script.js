// helpers
function generateRandomArray(count, min = 0, max = 1000) {
    let array = new Array(count);
    for (let i = 0; i < count; i++) {
        array[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return array;
}

function generateSortedArray(count) {
    let array = new Array(count);
    for (let i = 0; i < count; i++) {
        array[i] = i;
    }
    return array;
}

function swap(array, i1, i2){
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
}

let sameRandomArray = generateRandomArray(1000);
let sameSortedArray = generateSortedArray(1000);

// sorting functions
function bubbleSort(arr) {
    // copy the array so the original array won't get changed
    let array = arr.slice();
    
    if (array.length < 2)
        return array;
    
    let swapped = false;
    let currEndIndex = array.length - 1;
    console.log("bubble sort started");
    let startTime = new Date();
    
    while (currEndIndex != 1) {

        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
        
        // if nothing swapped this round, it means the array is sorted
        if (!swapped)
            break;
        
        currEndIndex--;
        swapped = false;
    }
    
    let endTime = new Date();
    console.log(`time used: ${endTime - startTime} ms`);
    console.log("bubble sort finished"); 
    return array;
}


function selectionSort(arr) {
    let array = arr.slice();
    if (array.length < 2)
        return array;

    let currStartIndex = 0;

    console.log("selection sort started");
    let startTime = new Date();

    while (currStartIndex != array.length - 2){

        let smallestIndex = currStartIndex;
        for (let i = currStartIndex; i < array.length; i++){
            if (array[i] < array[smallestIndex]){
                smallestIndex = i;
            }
        }

        // swap with currStartIndex
        swap(array, currStartIndex, smallestIndex);
        currStartIndex++;
    }

    let endTime = new Date();
    console.log(`time used: ${endTime - startTime} ms`);
    console.log("selection sort finished"); 

    return array;
}


function insertionSort(arr){
    let array = arr.slice();
    if (array.length < 2)
        return array;

    console.log("insertion sort started");
    let startTime = new Date();

    for (let i = 1; i < array.length; i++){
        for (let j = i; j > 0; j--){
            if (array[j] < array[j-1]){
                swap(array, j, j-1);
            }
        }
    }

    let endTime = new Date();
    console.log(`time used: ${endTime - startTime} ms`);
    console.log("insertion sort finished"); 

    return array;
}


function heapSort(arr){
    let array = arr.slice();
    if (array.length < 2)
        return array;

    console.log("heap sort started");
    let startTime = new Date();
    
}


