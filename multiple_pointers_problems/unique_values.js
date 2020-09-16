uniqueValue=(arr)=>{
    console.log(arr);
    if(arr.length===0){
        return 0;
    }
  let first_pointer=0;
  let second_pointer=1;
  while(second_pointer!==arr.length){
      if(arr[first_pointer]===arr[second_pointer]){
          second_pointer++;
      }else if(arr[first_pointer]!==arr[second_pointer]){
          first_pointer++;
          arr[first_pointer]=arr[second_pointer];
          second_pointer++;
      }
  }
  return first_pointer+1;

}

let answer=uniqueValue([-2,-1,-1,0,1]);
console.log(answer);