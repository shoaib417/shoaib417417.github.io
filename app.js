const textareaa=document.getElementById('prin');
const abouttextareaa=document.getElementById('prinn');
const curser=document.getElementById('movingcurser');
const aboutcurser=document.getElementById('aboutmovingcurser');
const phrase=['a Developer.','an Engineering Student.'];
let printingele='';
var i=0;
var j=0;
let bool=true;
let flag=true;
let timee=100;
function curserhide()
{
    curser.style.display="none";  
    aboutcurser.style.display="none";
}
function cursershow()
{
    curser.style.display="inline";  
    aboutcurser.style.display="inline";
}

function typewriter()
{
    textareaa.innerHTML=printingele;
    abouttextareaa.innerHTML=printingele;
    timee=100;
    if(i<phrase.length)
    {
        if(bool && j<phrase[i].length)
        {
            printingele=printingele+phrase[i][j];
            if(j<=phrase[i].length)
            {
                j++;
            }
            if(j==phrase[i].length)
            {
                bool=false;
            }
        }
        if((bool==false) && j>=0)
        {
            if(j==phrase[i].length-1)
            {
                timee=2000;
            }
            printingele=printingele.substring(0,j);
            j--;
            if(j==-1)
            {
                bool=true;
                j=0;
                i++;
            }
            
        }

    }
    if(i==phrase.length)
    {
        i=0;
    }
    if(timee==2000)
    {
        setTimeout(curserhide,400); 
        setTimeout(cursershow,500);   
        setTimeout(curserhide,900); 
        setTimeout(cursershow,1000); 
        setTimeout(curserhide,1400); 
        setTimeout(cursershow,1500);
    }
    setTimeout(typewriter,timee);

}
typewriter();
window.addEventListener('scroll',function()
{
    let navbar=document.querySelector('navi');
    let colo1=document.querySelector('a');
    if(window.pageYOffset>50)
    {
        navbar.classList.add('sticky');
        colo1.classList.add('sticky');
        colo2.classList.add('sticky');
        colo3.classList.add('sticky');
        colo4.classList.add('sticky');
        colo5.classList.add('sticky');
        colo6.classList.add('sticky');
    }
    else
    {
        navbar.classList.remove('sticky');
        colo1.classList.remove('sticky');
        colo2.classList.remove('sticky');
        colo3.classList.remove('sticky');
        colo4.classList.remove('sticky');
        colo5.classList.remove('sticky');
        colo6.classList.remove('sticky');
    }
});
function resumeopen() {
    console.log("link");
    window.open('https://drive.google.com/file/d/1q0rQ8t-ssv15zMJK2WCtKOjOu7jt3uQL/view?usp=sharing', '_blank');
}
function certificationsopen() {
    console.log("link");
    window.open('https://www.hackerrank.com/shoaib417417?hr_r=1', '_blank');    
}




const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});

function openNav() 
{
    document.getElementById("myNav").style.width = "100%";
}
  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() 
{
    document.getElementById("myNav").style.width = "0%";
}

