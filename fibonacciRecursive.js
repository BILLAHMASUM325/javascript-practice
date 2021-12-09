function fiboncci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return fiboncci(n-1)+fiboncci(n-2);
    }
}
var result = fiboncci(10)
console.log(result)