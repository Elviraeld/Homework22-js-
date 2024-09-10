let num = prompt("Istenilen bir eded daxil edin");
let sum = 0;
let a = 100;
while(a < 1000){
    if(a % num == 0 ){
        console.log(a);
        
        sum +=a;
    }
    a++;
}
console.log("Boluneni olan butun 3 reqemli ededlerin cemi:" + sum);
