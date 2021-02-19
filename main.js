function checkPalindrome(inputString) {

  //convert string(inputString) to an array
    let reversed = inputString.split('')
  //reverse this array
                              .reverse()
 //resest string (convert reversed array to string)                            
                              .join('');
    if(inputString == reversed) {
        return true ;
    } else {
        return false ;
    }
    
    }

console.log(checkPalindrome('aabaa'))
