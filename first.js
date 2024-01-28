let f3=document.getElementById("back");
function setbg(){
    let w=window.innerWidth;
    let h=window.innerHeight;
    if ((w*3408/4000.0) < h)
    {
        let neww=(h-(w*3408)/4000.0)/2.0;
        let f1=document.getElementById("f1");
        let f2=document.getElementById("f2");
       
        f3.style.top= (neww+"px");
        neww=neww+100;
        f1.style.height= (neww + "px");
        f2.style.height= (neww + "px"); 
    }
}
function imgrand(){
    f3.style.opacity="100%";
    let st="polygon(0% 0%";
    setInterval(horror, 50);
    function horror(){
        let y1=Math.floor(Math.random()*100);
        let x1=Math.floor(Math.random()*100);
        st=st.concat(", "+x1+"% "+y1+"%");
        f3.style.clipPath=st+")";
    }
}
function anotherfunc(y, idd){
    let iterations=0;
    let x=document.getElementById(idd);
    x.style.opacity="100%";
    let inter=setInterval(func, 30);
    function func()
    {
        letters="abcdefghijklmnopqrstuvwxyz";
        x.innerHTML=x.innerHTML.split("").map(
            (letter, index) =>{
                if (index<iterations) return y[index];
                return letters[Math.floor(Math.random()*26)];
            }
        ).join("");
        iterations+=1/2;
        if (iterations==y.length) 
        {
            x.innerHTML=y; 
            clearInterval(inter);
        }
    }
}
function callfirststatement(){
    anotherfunc("Intruder detected!!", "base");   
}
console.log("Hello World");
window.onresize=setbg;
window.onload=function(){
    setbg();
    callfirststatement();
    setTimeout(imgrand, 9000);
}


























function thirdfunc(idd){
    let z=document.getElementById(idd);
    const inter=setInterval(func, 15);
    let i=0;
    function func(){
        z.style.opacity=(100-i*1.25)+"%";
        i++;
        if (i==80) {clearInterval(inter); }
    }
}