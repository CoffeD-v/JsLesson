function f1(callback){
    setTimeout(function(){
        console.log('f1');
    },rand())
}
function f2(callback){
    setTimeout(function(){
        console.log('f2');
    },rand())
}
function f3(callback){
    setTimeout(function(){
        console.log('f3');
    },rand())
}

f1(f1callback);
function f1(f1callback){
    f2(f2callback);

}
f3();
console.log('HELLO PLANET!')