let log=0;
function Zap(){
log++;
let i=document.getElementById("inp-rez").textContent;
  return i;
}

c0.onclick = function(){
  if(log==0){
    alert(0);
  }else{
    let s= Zap()+0;
    document.getElementById("inp-rez").innerHTML = s;
  }

}
c1.onclick = function(){
    let s = Zap()+1;
    document.getElementById("inp-rez").innerHTML = s;
}
c2.onclick = function(){
    let s = Zap()+2;
    document.getElementById("inp-rez").innerHTML = s;
}
c3.onclick = function(){
    let s = Zap()+3;
    document.getElementById("inp-rez").innerHTML = s;
}
c4.onclick = function(){
    let s= Zap()+4;
    document.getElementById("inp-rez").innerHTML = s;
}
c5.onclick = function(){
    let s = Zap()+5;
    document.getElementById("inp-rez").innerHTML = s;
}
c6.onclick = function(){
    let s = Zap()+6;
    document.getElementById("inp-rez").innerHTML = s;
}
c7.onclick = function(){
    let s = Zap()+7;
    document.getElementById("inp-rez").innerHTML = s;
}
c8.onclick = function(){
    let s = Zap()+8;
    document.getElementById("inp-rez").innerHTML = s;
}
c9.onclick=function(){
    let s = Zap()+9;
    document.getElementById("inp-rez").innerHTML = s;
}

let pref="c";
for(let i=0; i<10; i++){
    let s=pref+String(i);
    let obj=document.getElementById(s);
    obj.onclick=function(){
        let sum=Zap()+i;
        document.getElementById("inp-rez").innerHTML=sum;
    }
}
p.onclick=function(){
    let sum=Zap();
    if(sum[sum.length-1]=="+"|sum[sum.length-1]=="-"|sum[sum.length-1]=="*"|sum[sum.length-1]=="/"){

    }else{
        sum=sum+"+";
        document.getElementById("inp-rez").innerHTML=sum;

    }
}
m.onclick=function(){
    let sum=Zap();
    if(sum[sum.length-1]=="+"|sum[sum.length-1]=="-"|sum[sum.length-1]=="*"|sum[sum.length-1]=="/"){

    }else{
        sum=sum+"-";
        document.getElementById("inp-rez").innerHTML=sum;

    }
}
d.onclick=function(){
    let sum=Zap();
    if(sum[sum.length-1]=="+"|sum[sum.length-1]=="-"|sum[sum.length-1]=="*"|sum[sum.length-1]=="/"){

    }else{
        sum=sum+"/";
        document.getElementById("inp-rez").innerHTML=sum;

    }
}
y.onclick=function(){
    let sum=Zap();
    if(sum[sum.length-1]=="+"|sum[sum.length-1]=="-"|sum[sum.length-1]=="*"|sum[sum.length-1]=="/"){

    }else{
        sum=sum+"*";
        document.getElementById("inp-rez").innerHTML=sum;

    }
}
rez.onclick=function Rez(){
    document.getElementById('inp-rez').innerHTML= eval(Zap());
}
clear.onclick = function(){
     document.getElementById('inp-rez').innerHTML="";
}