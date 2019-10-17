function sumAll(arr) {

var sumOfArray = 0;
var lowNumber, highNumber;

if(arr[0] <= arr[1]){
  lowNumber = arr[0];
  highNumber = arr[1];
}else{
  lowNumber = arr[1];
  highNumber = arr[0];
}


for(let i = lowNumber; i <= highNumber; i++){
  sumOfArray += i;
}

console.log(sumOfArray);

  return sumOfArray;

}

sumAll([1, 4]);
//39 min 27 sec
