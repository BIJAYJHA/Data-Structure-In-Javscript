 anagram=(str1,str2)=>{

  console.log(str1,str2);
  if((str1.length!==str2.length) || (str1==='' && str2!=='')||(str1!=='' && str2==='')){
      return false;
  }
  if(str1==='' && str2===''){
      return true;
  }
  let str1frequencyValue={};
  let str2frequencyValue={};

  for(let char of str1){
      str1frequencyValue[char]=(str1frequencyValue[char] || 0) +1;
  }
  for(let char of str2){
    str2frequencyValue[char]=(str2frequencyValue[char] || 0) +1;
}
console.log(str1frequencyValue);
console.log(str2frequencyValue);

for(let key in str1frequencyValue){
    if(str1frequencyValue[key]!==str2frequencyValue[key]){
        return false;
    }
}

return true;
 }

const answer=anagram("","");
console.log("answer====>",answer);