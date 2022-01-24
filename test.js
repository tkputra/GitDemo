var input = "testing ada lagi aja"
var inputSplit = input.split(' ')

console.log(inputSplit)
console.log(inputSplit.length)




var panjang = input.length
console.log(panjang)

function hasilMod(panjang){
    return panjang % 2
}

var x = hasilMod(panjang)

if (x == 0) {
    console.log(input, 'adalah genap')
}

else {
    console.log(input,'adalah ganjil')
}

