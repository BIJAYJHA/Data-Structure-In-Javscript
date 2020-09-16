 isSubsequence=(str1, str2)=> {
    var first_string_pointer = 0;
    var second_string_pointer = 0;
    if (!str1) return true;
    while (second_string_pointer < str2.length) {
      if (str2[second_string_pointer] === str1[first_string_pointer]) first_string_pointer++;
      if (first_string_pointer === str1.length) return true;
      second_string_pointer ++;
    }
    return false;
  }

const answer= isSubsequence('hello','hellp world');
console.log(answer);