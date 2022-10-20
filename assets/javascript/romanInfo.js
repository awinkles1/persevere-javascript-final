//  roman numeral converter
let romeo = {
    1: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    2: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    3: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    4: ['', 'M', 'MM', 'MMM']
}

function convertToRoman(num) {
    let x = num.toString().split('')
    if (x.length == 1 && x[0] == 0) {
        return document.getElementById("converted").innerHTML = "this is not a valid input"
    }else if (num > 3999){
        return document.getElementById("converted").innerHTML = "this is not a valid input"
    }
    else if (x.length == 1) {
        return document.getElementById("converted").innerHTML = romeo[1][num]
    } else if (x.length == 2) {
        return document.getElementById("converted").innerHTML = romeo[2][x[0]] + romeo[1][x[1]]
    } else if (x.length == 3) {
        return document.getElementById("converted").innerHTML = romeo[3][x[0]] + romeo[2][x[1]] + romeo[1][x[2]]
    } else if (x.length == 4) {
        return document.getElementById("converted").innerHTML = romeo[4][x[0]] + romeo[3][x[1]] + romeo[2][x[2]] + romeo[1][x[3]]
    }
}


function towns() {
    let romanReturn = document.querySelector("#romanInput").value
    return convertToRoman(romanReturn)
}
townsTeach()
// caesar cipher
function decrypt(str) {
    let regex = /\d/g
    if (regex.test(str) === true) {
        return document.getElementById("deciphered").innerHTML = "Please do not use numbers"
    }
    let w = str.replace(/ /g, '#')
    let z = ['#', '.', '!', '?']
    let x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let x2 = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let y = x.slice(13, x.length).concat(x.slice(0, 13))
    let y2 = x2.slice(13, x2.length).concat(x2.slice(0, 13))
    let go = x.concat(x2).concat(z)
    let bo = y.concat(y2).concat(z)
    let abba = []
    for (let i = 0; i < w.length; i++) {
        abba.push(bo.indexOf(w[i]))
    }
    return document.getElementById('deciphered').innerHTML = abba.map((a) => go[a]).join('').replace(/#/g, ' ')
}
function startDec() {
    let decrypted = document.querySelector("#caesarDec").value
    return decrypt(decrypted)
}

function encrypt(str) {
    let w = str.replace(/ /g, '#')
    let regex = /\d/g

    if (regex.test(w) == true) {
        return document.getElementById("ciphered").innerHTML = "Please do not use numbers"
    }
    let z = ['#', '.', ',', '!', '?']
    let x = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.split('')
    let x2 = 'nopqrstuvwxyzabcdefghijklm'.split('')
    let y = x.slice(13, x.length).concat(x.slice(0, 13))
    let y2 = x2.slice(13, x2.length).concat(x2.slice(0, 13))
    let go = x.concat(x2).concat(z)
    let bo = y.concat(y2).concat(z)
    let abba = []
    for (let i = 0; i < w.length; i++) {
        abba.push(bo.indexOf(w[i]))
    }
    return document.getElementById("ciphered").innerHTML = abba.map((a) => go[a]).join('').replace(/#/g, ' ')
}
function startEn() {
    let encrypted = document.querySelector("#caesarEnc").value
    return encrypt(encrypted)
}

// palindrome
function palindrome(str) {

    let x = str.toUpperCase().replace(/(\W|_)/g, '').split('')
    let y = str.toUpperCase().replace(/(\W|_)/g, '').split('')
    let z = y.reverse()
    if (x.join('') === z.join('')) {
        return document.getElementById("palChecker").innerHTML = true
    } else return document.getElementById("palChecker").innerHTML = false
}
function checkPal() {
    let x = document.getElementById("palindrome").value
    return palindrome(x)
}
