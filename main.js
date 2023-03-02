let array=[1,2,3,4,5,6,7,8,9,10,11];
function oddNum(array){
	count=0;
	for(i=0; i<array.length; i++){
		if(array[i]%2!=0){
		count++;
	}
  }
	return count;
}
console.log(oddNum(array));



