let st="clip-path: polygon(0% 0%";
setInterval(horror, 50);
function horror(){
    let x=document.getElementById("back");
    let y1=Math.floor(Math.random()*100);
    let x1=Math.floor(Math.random()*100);
    
    st=st.concat(", "+x1+"% "+y1+"%");
    x.style=st+");";
}