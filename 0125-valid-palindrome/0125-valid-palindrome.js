/**
 * @param {string} s
 * @return {boolean}
 */

 function isAlphaNumeric(char) {
    const code = char.toLowerCase().charCodeAt(0);
    return (
        (code >= 97 && code <= 122) ||
        (code >= 48 && code <= 57)
    );
}


var isPalindrome = function(s) {
    let left = 0;
    let right = s.length-1;
    
    while(left<right){
         if(!(isAlphaNumeric(s[left]))){
            left++
         }else if(!(isAlphaNumeric(s[right]))){
                right--
            }
        else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }else {
            left++;
            right--;
        }
    }
    return true

};
