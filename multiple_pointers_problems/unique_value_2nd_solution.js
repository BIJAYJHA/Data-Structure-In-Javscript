uniqueValue=(arr)=>{
    console.log(arr);
    if(arr.length===0){
        return 0;
    }
  let first_pointer=0;
  for(let j=1; j < arr.length; j++){
       if(arr[first_pointer]!==arr[j]){
          first_pointer++;
          arr[first_pointer]=arr[j];
      }
  }
  return first_pointer+1;

}

let answer=uniqueValue([-2,-1,-1,0,1]);
console.log(answer);