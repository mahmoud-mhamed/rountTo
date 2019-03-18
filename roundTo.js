function roundTo(num,fraction=2){
    var dot=num.indexOf('.');
    var trunc=Math.trunc(num);

    var newNum='';
    for (var i = 0; i < fraction && i < ((num.length - (trunc+'').length) -1); i++) {
        newNum += num[dot+1+i];
    }
    return newNum*1==0?trunc:trunc+'.'+newNum;
}