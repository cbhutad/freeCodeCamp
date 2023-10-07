/*Other test cases
 *
 * ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]
 * ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]
 *["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] 
 *[1, "calf", 3, "piglet"], [1, "calf", 3, 4] 
 * [], ["snuffleupagus", "cookie monster", "elmo"]
 * [1, "calf", 3, "piglet"], [7, "filly"] 
 *
 * */

function diffArray(arr1, arr2) {
	const newArr = [];
	for (let i = 0;i < arr1.length;i++) {
		if(arr2.indexOf(arr1[i]) < 0) {
			newArr.push(arr1[i]);
		}
	}
	for (let i = 0;i < arr2.length;i++) {
		if(arr1.indexOf(arr2[i]) < 0) {
			newArr.push(arr2[i]);
		}
	}
	return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
