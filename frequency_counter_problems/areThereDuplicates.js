areThereDuplicates=(...args)=>{

    const arguments=[...args];

    let argumentsFrequency={};

    for(let i=0; i< arguments.length; i++){
        console.log(arguments[i]);

        argumentsFrequency[arguments[i]]=(argumentsFrequency[arguments[i]]||0)+1;

    }
    console.log(argumentsFrequency);
    for(let key in argumentsFrequency){
        if(argumentsFrequency[key] > 1){
            return true;
        }
    }
    return false;
}

const answer=areThereDuplicates('a','b','c','a');

console.log(answer);