let s5 = 'ech';
function concat(s1)
{
    return function(s2){
        return function(s3){
            //outer function scope
            return function(s4){
                //local scope
                return s1+s2+s3+s4+s5;
            }
        }
    }
}
console.log("Concatenated string is :");
console.log(concat('w')('e')('b')('t'));