//question no.1 two json have same propperties without order
let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};
let propperty=JSON.stringify(obj1) 
let propperty1=JSON.stringify(obj2)
if(propperty===propperty1){
    console.log(true)
}else{
    console.log(false);}

//question no.2 DISPLY ALL THE COUNTRY FLAGS IN CONSOLE. BY GIVEN API LINK 
let create = new XMLHttpRequest();
create.open("get","https://restcountries.com/v3.1/all",true)
create.send();
create.onloadend=function(){
    let res =create.response
    let result = JSON.parse(res)
    console.log(result);
    for(let i =0;i<result.length;i++){
        console.log(result[i].flags.png)
    }
}

//guestion no.3 SAME API LINK VIA PRINT all COUNTRY NAME ,  REGION, SUB-REGION, AND POPULTION
let create1= new XMLHttpRequest(); 
create1.open("get","https://restcountries.com/v3.1/all",true);
create1.send();
create1.onload=function(){
    let res1=create1.response
    let result1=JSON.parse(res1)
   for(let i=0;i<result1.length;i++){
    console.log("country name:",result1[i].name.common,",",
    "region:" ,result1[i].region,",",
    "sub-region:", result1[i].subregion,",",
    "population:", result1[i].population);
   } 
    } 

