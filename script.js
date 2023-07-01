var cel=document.getElementById('cel');
var kel=document.getElementById('kel');
var fah=document.getElementById('fah');
cel.addEventListener('input',function(){
    let c =this.value ;
    let f= (c*1.8)+32;
    let k = (f-32)/1.8 +273.15;
    // 1.8 x (K - 273) + 32
    fah.value=f;
    kel.value=k;
});
fah.addEventListener('input',function(){
    let f =this.value ;
    let c= (f-32)/1.8;;
    let k =c+273.15;
    cel.value=c;
    kel.value=k;
});
kel.addEventListener('input',function(){
    let k =this.value ;
    
    let c= k-273.15;
    let f= c*1.8+32;
    cel.value=c;
    fah.value=f;
});

