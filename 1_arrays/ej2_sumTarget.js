function sumTarget(arr, target) {
  const toSearch = new Set();

  for (i = 0; i < arr.length; i++) {
    if (toSearch.has(arr[i])) {
      return [target - arr[i], arr[i]];
    }

    toSearch.add(target - arr[i]);
  }

  return undefined;
}

// test cases
//console.log(sumTarget([2, 7, 1, 5], 9), " == [7,2]");
//console.log(sumTarget([3, -1, 0, 1], 0), " == [1,-1]");
console.log(sumTarget([1, 2, -1, 1, 0], 0), " == [1, 1] o [2,0]");
