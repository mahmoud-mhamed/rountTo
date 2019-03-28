function roundTo(num,fraction=2){
    num +='';
    var dot=num.indexOf('.');
    var trunc=Math.trunc(num);
    if (trunc==0 && num < 0 && fraction!=0){
        trunc='-'+trunc;
    }

    var newNum='';
    for (var i = 0; i < fraction && i < ((num.length - (trunc+'').length) -1); i++) {
        newNum += num[dot+1+i];
    }
    return newNum*1==0?trunc:trunc+'.'+newNum;
}