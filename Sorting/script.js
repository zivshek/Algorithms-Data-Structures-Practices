// helper functions
function generateRandomArray(count, min, max) {
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

// sorting functions
function bubbleSort(array) {
    
    if (array.length < 2)
        return array;
    
    let swapped = false;
    let currEndIndex = array.length - 1;
    console.log("bubble sort started");
    let startTime = new Date();
    
    while (currEndIndex != 1) {

        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                
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


function selectionSort(array) {
    
}
