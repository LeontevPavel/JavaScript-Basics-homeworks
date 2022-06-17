
function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length != arr2.length) return result = false;

  function compareItem(item, i) {
    return item === arr2[i];
  }

  return result = arr1.every(compareItem);
}

console.log(compareArrays([1, 45], [1, 4]));


function multipleThree(item) {
	return item % 3 === 0 && item !=0;
}

function positive(item) {
	return item > 0;	
}

function multiplication(item) {
	return item * 10;
}

function advancedFilter(arr) {
  let resultArr = arr.filter(multipleThree).filter(positive).map(multiplication);
	return resultArr;
}			
