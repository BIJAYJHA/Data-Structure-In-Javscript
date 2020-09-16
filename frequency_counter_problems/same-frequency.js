
 sameFrequency=(num1,num2)=>{
    num1=num1.toString();
    num2=num2.toString();
   

    if(num1.length===1 && num2.length===1){
        if(num1!==num2){
            return false;
        }else{
            return true;
        }
    }

    let frequency1={};
    let frequency2={};
    for(let char of num1){
        frequency1[char]=(frequency1[char]||0)+1;

    }

    for(let char of num2){
        frequency2[char]=(frequency2[char]||0)+1;
    }
  

    for(let key in frequency1){
        if(frequency2[key]===undefined && frequency1[key]!==frequency2[key]){
            return false;
        }
    }
    return true;

}

const answer= sameFrequency(34,14);

console.log(answer)