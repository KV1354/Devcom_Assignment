let d=false;
function playdespacito()
{
    if (d==true) return;
    d=true;
    let w1="d3G3b3d4D4b3B3b3--------------d3G3b3---D4---d4---e4---G4---d4----G4-----d4-----G4---------------G3d4----e3D4----d3b3-d3G3--b3-d3b3-d3G3d4D4b3a3b3-d3g3--b3-d3b3-d3g3d4D4b3a3d4-G3a3--d4-G3d4-G3a3d4D4---2D4e4-----G3d4--e3D4--d3b3--G3b3-D4-d4e4-d4-D4-b3a3-g3--d4--d4-----------d4-a3-d4-a3-d4-a3-d4---e4D4---b3-G3-G3b3D4-d4D4d4D4--d4D4-b3-----b3b3b3b3-d4D4d4D4--d4e4-a3-----a3a3a3a3-d4a3d4a3-d4-e4e4D4";
    let w="b3-d3G3--b3-d3b3-d3G3d4D4b3a3b3-d3g3--b3-d3b3-d3g3d4D4b3a3d4-G3a3--d4-G3d4-G3a3d4D4---2D4e4";
    let w2="------------------------------------------------------------------------------------------3b1G2b2----------------3g1d2g2----------------3d2a2d3----------------3a1e2a2---------------3b1G2b2----------------3g1d2g2----------------3d2a2d3----------------3a1e2a2---------------b1--2G2b2--2G2b2-b1--2G2b2--2G2b2-g1--2d2g2--2d2g2-g1--2d2g2--2d2g2-d2--2a2d3--2a2d3-d2--2a2d3--2a2d3-a1--2e2a2--2e2a2-a1--2e2a2--2e2a2-3b1G2b2-----------------3g1d2g2------------------3d2a2d3-------------------3a1e2a2-";
    let w11="b3-G3-G3b3D4-d4D4d4D4--d4D4-b3-----b3b3b3b3-d4D4d4D4--d4e4-a3-----a3a3a3a3-d4a3d4a3-d4-e4e4D4";
    let w21="3b1G2b2-----------------3g1d2g2------------------3d2a2d3-------------------3a1e2a2-"
    let u="2D4e4";
    let i=0, j1=w1.length, j2=w2.length, r=0;
    setInterval(playd, 125);
    function playd()
    { 
        
        let kee=[];
          
        if (i>(j1-1)) {clearInterval; d=false;}
        if (r> (j2-1)) clearInterval;
        if (w1[i]>='1' && w1[i]<='9') 
        {
            let no=w1[i];
            i++;
            for (let k=1; k<=no; k++)
            {
                if (w1[i]==w1[i].toUpperCase())
                { 
                    let ke=w1[i]+"b"+w1[i+1];
                    kee.push(ke);    
                    i+=2;
                }
                else 
                {
                    let ke=w1[i]+w1[i+1];
                    kee.push(ke); 
                    i+=2;
                }
            }
        }
        else if (w1[i]!='-')
        {
            if (w1[i]==w1[i].toUpperCase()) 
            { 
                let ke=w1[i]+"b"+w1[i+1];
                kee.push(ke);
                i+=2;
            }
            else 
            {
                let ke=w1[i]+w1[i+1];
                kee.push(ke); 
                i+=2;
            }
        } 
        else {
            i++;
        }
        if (w2[r]>='1' && w2[r]<='9') 
        {
            
            let no=w2[r];
            r++;
            for (let k=1; k<=no; k++)
            {
                if (w2[r]==w2[r].toUpperCase())
                { 
                    let ke=w2[r]+"b"+w2[r+1];
                    kee.push(ke);    
                    r+=2;
                }
                else 
                {
                    let ke=w2[r]+w2[r+1];
                    kee.push(ke); 
                    r+=2;
                }
            }
        }
        else if (w2[r]!='-')
        {
            if (w2[r]==w2[r].toUpperCase()) 
            { 
                let ke=w2[r]+"b"+w2[r+1];
                kee.push(ke);
                r+=2;
            }
            else 
            {
                let ke=w2[r]+w2[r+1];
                kee.push(ke);
                playkey(kee);  
                r+=2;
            }
        } 
        else r++;
        playkey(kee);
    }   
}