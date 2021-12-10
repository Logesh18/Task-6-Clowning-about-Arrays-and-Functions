/********************1-Greatest Numbers******************************/
function greatestOfTwoNumbers(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
 }
 /***********************2-Finding Lenthy Word************************/
 function findScaryWord(a)
 {
      if(a.length!=0){
           var dict={};
           for(let i=0;i<a.length;i++){
          
                dict[a[i]]=a[i].length;
          
           }
           let maxvalue = Object.entries(dict).sort((x,y)=>y[1]-x[1])[0]
           console.log(maxvalue[1]);
           for(let i=0;i<a.length;i++)
           {
                if(maxvalue[1]==a[i].length)
                {
                    return a[i]; 
                }
           }
      }
      return "Empty Array";
 } 
  /***********************3-Net Price************************/
 function netPrice(v){
    let sum=0;
    if(v.length!=0){
        for(let i=0;i<v.length;i++)
        {
             sum+=parseInt(v[i]);
        }
    }    
    return sum;

}
/***********************3.1-Generic Sum************************/
function add(v){
    if(typeof v =="string"){
         return v.length;
    }
    else if(typeof v =="number"){
         return v;
    }
    else{
         return 1;
    }

}
function sumOfArray(a){
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
       sum=sum+parseInt(add(a[i]));
    }
    return sum;
}
/******************4-Mid-point ***************** */

function midpoint(v){
    let sum=0;
    if(v.length!=0){
        for(let i=0;i<v.length;i++)
        {
            sum=sum+parseInt(add(v[i]));
        }
    }
    return sum/v.length;
}
/****************4.1-Array of numbers **************** */
function midPointOfLevels(v){
    let sum=0;
    for(let i=0;i<v.length;i++)
    {
        sum+=parseInt(v[i]);
    }
    return sum/v.length;
}
/****************4.2-Array of strings **************** */
function averageWordLength(v){
    let sum=0;
    for(let i=0;i<v.length;i++)
    {
         console.log(v[i].length);
         sum=sum+parseInt(v[i].length);
    }
    return sum/v.length;
}
/****************4.3-A generic avg() **************** */
function genericavg(a){
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
       sum=sum+parseInt(add(a[i]));
    }
    return sum/a.length;
}
/*****************5-Unique arrays ********************* */
function uniqueArray(v){
    let uniquewords = v.filter((w, index) => {
     return v.indexOf(w) === index;
     });
     return uniquewords;
 }
 /*********************6-Find elements********** */
 function searchElement(a,s){
    /* if(a.indexOf(s)!=-1){
       return "true";
    }
    return "false"; */
    for(let i=0;i<a.length;i++)
    {
         if(a[i]===s){
             return "true";
         }
    }
    return "false";
}
/***********7-Count repeated elements ************* */
function howManyTimesElementRepeated(a,s){
    let c=0;
    for(let i=0;i<a.length;i++)
    {
        if(a[i]===s){
            c+=1;
        }   
    }
    return c;
}
/*********8-Product of adjacent numbers ********** */
function nMinMultiply(arr, asize, n)
{
    let copy_arr = [...arr];
    let minarr=[];
    copy_arr.sort((a, b) => a - b);
    console.log(copy_arr);
    for (let i = 0; i < asize; ++i) {
        if (arr[i] < copy_arr[n])
            minarr[i]=arr[i];
    }
    console.log(minarr.reduce((a, b)=> a*b, 1));
    return parseInt(minarr.reduce((a, b)=> a*b, 1));
}
function findIndex(m){
    let v=Math.max.apply(null,m);
    return m.indexOf(v);
}
function maximumProduct(matrix){
    let sum;
    let v=[];
    let h=[];
    let d;
    for (let i=0;i < matrix.length;i++){
        sum=0;
        for(let j=0;j <matrix[i].length;j++){
            sum=sum+matrix[i][j];
        }
        h[i]=parseInt(sum);
    }
    for (let i=0;i < matrix.length;i++){
        sum=0;
        for(let j=0;j <matrix[i].length;j++){
            sum=sum+matrix[j][i];
        }
        v[i]=parseInt(sum);
    }
    let dict={"hm":findIndex(h),"vm":findIndex(v)};
    console.log(h);
    console.log(v);
    console.log(dict);
    console.log(h[dict["hm"]],v[dict["vm"]]);
    nMinMultiply(matrix[dict["hm"]],matrix[dict["hm"]].length,matrix[dict["hm"]].length-4);
    console.log(matrix.map(d => d[dict["hm"]]));
    if(h[dict["hm"]]>v[dict["vm"]])
    {
        d=nMinMultiply(matrix[dict["hm"]],matrix[dict["hm"]].length,matrix[dict["hm"]].length-4);
        return  parseInt(matrix[dict["hm"]].reduce((a, b)=> a*b, 1))/d;
    }
    else{
        d=nMinMultiply(matrix.map(d => d[dict["vm"]]),matrix[dict["vm"]].length,matrix[dict["vm"]].length-4);
        t=matrix.map(t => t[dict["vm"]]).reduce((a, b)=> a*b, 1);
        return t/d;
    }
}
/*******************8.1-Product of diagonals ********************* */
function maximumProductOfDiagonals(matrix){
    let m=1;
    for (let i=0;i < matrix.length;i++){
        for(let j=0;j <matrix[i].length;j++){
             if(i==j){
                 m=m*matrix[i][j];
             }
        }
    }
    return m;
}