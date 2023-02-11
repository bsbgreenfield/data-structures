function countZeros(array) {
    let leftIdx = 0;
    let rightIdx = array.length - 1

    while ((rightIdx - leftIdx) >= 2) {
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2)
        let middleVal = array[middleIdx];

        if (middleVal > 0.5) {
            leftIdx = middleIdx
        }
        else {
            rightIdx = middleIdx
        }
    }
    console.log(leftIdx, rightIdx)

    // final array should be one of 4 options, depending on the input array : [1], [0], [1, 1], or [1, 0]
    // we calculate the number of zeros by subtracting the length from the leftmost zero
    // so these if/else statements below check where that leftmost zero is (nowhere, at leftidx, to the right of rightidx, or at right idx), adjust answer accordingly
    if (array[rightIdx] == 1) {
        return (array.length) - (rightIdx + 1)
    }
    else if (array[leftIdx] == 0) {
        return array.length - leftIdx
    }
    else {
        return (array.length) - rightIdx
    }
}

function sortedFrequency(array, val) {
    /**
     * given an array and a value, use two separate 'windows' to find the endpoints of the series of that number
     * possible inital cases: 
     * 1. arr[0] > val or arr[end] < val ------> return 0
     * 2. all indxs = val ----> return arr.length
     * if arr[0] or arr[end] == middleVal at the start, use that as an endpoint
     * otherwise, we need to run two binary searches (to the left and right) to find the endpoints.
     * 
     */

    let leftIdx = 0;
    let rightIdx = array.length - 1
    let leftEnd;
    let rightEnd;

    if (array[leftIdx] > val || array[rightIdx] < val) {
        return -1;
    }
    else if (array[leftIdx] == val && array[rightIdx] == val) {
        return array.length
    }
    // binary search is a go
    else {
        // if other right end or left end is equal to val, set those right away
        if (array[leftIdx] == val) {
            leftEnd = 0
        }
        if (array[rightIdx] == val) {
            rightEnd = rightIdx
        }
        // only have to right right side or left side if we havent already determined left end or right end
        let middleIdx = (Math.floor((rightIdx + leftIdx) / 2))
        if (leftEnd == null) {
            // check to the left
            while (rightIdx - leftIdx > 1) {
                middleIdx = (Math.floor((rightIdx + leftIdx) / 2))

                if (array[rightIdx] > val || array[middleIdx] == val) {
                    rightIdx = middleIdx;
                }
                else if (array[middleIdx] < val) {
                    leftIdx = middleIdx
                }
            }
            leftEnd = rightIdx
        }

        middleIdx = Math.floor((array.length - 1) / 2)

        if (rightEnd == null) {
            // reset vals from last loop
            leftIdx = 0
            rightIdx = array.length - 1
            // check the right 
            while (rightIdx - leftIdx > 1) {
                middleIdx = (Math.floor((rightIdx + leftIdx) / 2))
                if (array[leftIdx] < val || array[middleIdx] == val) {
                    leftIdx = middleIdx;
                }
                else if (array[middleIdx] > val) {
                    rightIdx = middleIdx
                }
            }
            rightEnd = leftIdx
        }
    }

    return rightEnd - leftEnd + 1;
}

function findRotatedIndex(array, val) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2)

    // first check to see which half of the rotated array to search on, narrows our search down by half immediately
    if (array[leftIdx] > val) {
        leftIdx = middleIdx;
    }
    else if (array[rightIdx] < val) {
        rightIdx = middleIdx;
    }

    console.log('left middle right: ', leftIdx, middleIdx, rightIdx)
    while (rightIdx - leftIdx > 0) {
        middleIdx = Math.floor((rightIdx + leftIdx) / 2)
        // switch statement to check if val = any of our defined points
        // slightly worse on memory, slightly better on time complexity
        switch (val) {
            case array[middleIdx]: return middleIdx;
            case array[leftIdx]: return leftIdx;
            case array[rightIdx]: return rightIdx;
            default: break
        }

        if (array[middleIdx] > val) {
            rightIdx = middleIdx - 1;
        }

        else if (array[middleIdx] < val) {
            leftIdx = middleIdx + 1;
        }
    }
    return -1;
}



function findRotatedCount(array) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;

    while (rightIdx - leftIdx > 1){
        let  middleIdx = Math.floor((rightIdx + leftIdx) / 2)

        if (array[leftIdx] > array[middleIdx]){
            rightIdx = middleIdx;
        }
    
        else if (array[rightIdx] < array[middleIdx]){
            leftIdx = middleIdx;
        }

        else {
            return 0;
        }
    }

    return rightIdx;
}
console.log(findRotatedCount([7, 9, 11, 12, 15]))

function findFloor(array, val) {
    /**
     * goal is to get the first value that is less than the given number
     * if arr[right] > val and arr[middle] > val, move right to middle and recalculate middle
     * if arr[middle] < val move left idx to middle
     */
    let leftIdx = 0;
    let rightIdx = array.length - 1;

    if (array[leftIdx] > val) {
        return -1
    }
    else if (array[rightIdx] < val) {
        return array[rightIdx]
    }


    while (rightIdx - leftIdx > 1) {
        let middleIdx = (Math.floor((rightIdx + leftIdx) / 2))
        console.log('middleidx', middleIdx)
        if (array[middleIdx] > val) {
            rightIdx = middleIdx;
            console.log('rightidx', rightIdx)
        }
        else if (array[middleIdx] < val) {
            leftIdx = middleIdx;
            console.log('leftidx', leftIdx)
        }
    }
    return array[leftIdx];
}
