document.write("connected");
function lay1(arg, arg1=-1){
    var x=new Audio("piano-mp3/"+arg.toUpperCase()+".mp3");
    x.play();
    let kee=0;
    setInterval(change, 100);
    let y=document.getElementById(arg);
    y.style.backgroundColor= "green";
    y.style.backgroundImage= "none";
    y.style.borderWidth="1.25vh 0vw 0.05vh 0.25vw";
    function change(){

        if (kee==0) {
            y.style.backgroundColor= "rgb(230,230,230)";
            y.style.borderWidth="1vh 0vw 1vh 0.25vw";
            kee=1;
        }
        else clearInterval;

    }
}
function lay2(arg){
    var x=new Audio("piano-mp3/"+arg+".mp3");
    x.play();
    let kee=0;
    setInterval(change, 100);
    let y=document.getElementById(arg);
    y.style= "background-color: green; background-image: none";
    y.style.borderWidth="1.25vh 0vw 0.05vh 0.05vw";
    function change(){

        if (kee==0) {
           
            y.style= "background-image: url('Photos/blackkeybg.png')";
            y.style.borderWidth="1vh 0vw 1vh 0.25vw";
            kee=1;
        }
        else clearInterval;

    }
}
function lay3(arg){
    var x=new Audio("piano-mp3/"+arg.toUpperCase()+".mp3");
    x.play();
    let kee=0;
    setInterval(change, 100);
    let y=document.getElementById(arg);
    y.style.backgroundColor= "green";
    y.style.backgroundImage= "none";
    y.style.borderWidth="1.25vh 0vw 0.05vh 0.25vw";
    function change(){

        if (kee==0) {
            y.style.backgroundColor= "rgb(230,230,230)";
            y.style.borderWidth="1vh 0vw 1vh 0.5vw";
            kee=1;
        }
        else clearInterval;

    }
}function lay4(arg){
    var x=new Audio("piano-mp3/"+arg.toUpperCase()+".mp3");
    x.play();
    let kee=0;
    setInterval(change, 100);
    let y=document.getElementById(arg);
    y.style.backgroundColor= "green";
    y.style.backgroundImage= "none";
    y.style.borderWidth="1.25vh 0vw 0.05vh 0.25vw";
    function change(){

        if (kee==0) {
            y.style.backgroundColor= "rgb(230,230,230)";
            y.style.borderWidth="1vh 0.25vw 1vh 0.25vw";
            kee=1;
        }
        else clearInterval;

    }
}
function moused(arg){
    let x=document.getElementById(arg);
    x.style.width= "35vw";
    x.style.opacity="100%";
}
function mousedout(arg){
    let x=document.getElementById(arg);
    x.style.width= "27.5vw";
    x.style.opacity= "80%";
}
function playkey(arg)
{
    let p=0; let q;
    for(p=0; p<arg.length; p++)
    {
        if (arg[p].length==2) var x=new Audio("piano-mp3/"+arg[p].toUpperCase()+".mp3");
        else var x=new Audio("piano-mp3/"+arg[p]+".mp3");
        x.play();
    }
    let kee=0;
    setInterval(change, 125);
    for(p=0; p<arg.length; p++)
    {
        let y=document.getElementById(arg[p]);
        if (arg[p].length==2)
        {
            y.style.backgroundColor= "green";
            y.style.backgroundImage= "none";
            y.style.borderWidth="1.25vh 0vw 0.05vh 0.25vw";
        }
        else
        {
            y.style= "background-color: green; background-image: none";
            y.style.borderWidth="1.25vh 0vw 0.05vh 0.05vw";
        }

    }
    function change()
    {
        if (kee==0) 
        {
            
            for(p=0; p<arg.length; p++)
            {
                let y=document.getElementById(arg[p]);
                if (arg[p].length==2)
                {

                    y.style.backgroundColor= "rgb(230,230,230)";
                    y.style.borderWidth="1vh 0vw 1vh 0.25vw";
                }
                else
                {
                    y.style= "background-image: url('Photos/blackkeybg.png')";
                    y.style.borderWidth="1vh 0vw 1vh 0.25vw";
                }

            }
            kee=1;
        }
        else clearInterval;
    }

















}
if (arg2!=-1) {
    if (arg2.length==3) {
        var x2=new Audio("piano-mp3/"+arg2+".mp3");
    }
    else var x2=new Audio("piano-mp3/"+arg2.toUpperCase()+".mp3");
    x2.play();
}
if (arg3!=-1) {
    if (arg3.length==3) {
        var x3=new Audio("piano-mp3/"+arg3+".mp3");
    }
    else var x3=new Audio("piano-mp3/"+arg3.toUpperCase()+".mp3");
    x3.play();
}
if (arg4!=-1) {
    if (arg4.length==3) {
        var x4=new Audio("piano-mp3/"+arg4+".mp3");
    }
    else var x4=new Audio("piano-mp3/"+arg4.toUpperCase()+".mp3");
    x4.play();
}
if (arg5!=-1) {
    if (arg5.length==3) {
        var x5=new Audio("piano-mp3/"+arg5+".mp3");
    }
    else var x5=new Audio("piano-mp3/"+arg5.toUpperCase()+".mp3");
    x5.play();
}
if (arg6!=-1) {
    if (arg6.length==3) {
        var x6=new Audio("piano-mp3/"+arg6+".mp3");
    }
    else var x6=new Audio("piano-mp3/"+arg6.toUpperCase()+".mp3");
    x6.play();
}