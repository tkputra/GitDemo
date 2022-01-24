var str = 'Tri kartika putra'
function findLongestWord(str){
    var strSplit = str.split(' ')
    var longestword = 0

    for (var i=0; i<strSplit.lenght; i++){
        if (strSplit[i] < longestword){
            longestword == strSplit[i].length
        }
        console.log(longestword)
    }
    return longestword
}
console.log(longestword)



var tri = 'Tri kartika putra'
var triSplit = tri.split(' ')
console.log(triSplit);
console.log(triSplit.length)