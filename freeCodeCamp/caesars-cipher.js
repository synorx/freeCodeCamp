function rot13(str) {
let newArr = [];
let na =[];

    for (let i = 0; i< str.length; i++) {
        if ( 64 < str.charCodeAt([i]) &&  str.charCodeAt([i]) <= 77){
     newArr.push(str.charCodeAt([i])+13);
        } else if (77 < str.charCodeAt([i]) && str.charCodeAt([i]) < 91 ) {
            newArr.push(str.charCodeAt([i])-13);
        } else {
            newArr.push(str.charCodeAt([i]));
        }
}

newArr.map(x =>  {
    na.push(String.fromCharCode(x))
 });
return na.join('');
}

rot13("SERR PBQR PNZC");