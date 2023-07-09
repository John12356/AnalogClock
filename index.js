const hour=document.querySelector('.hour');
const min=document.querySelector('.min');
const sec=document.querySelector('.sec');
const time=document.querySelector('.time');

const rotate=6;
const setAnalog= () =>{
    let day =new Date();
    let h=day.getHours()*30;
    let m=day.getMinutes()*rotate;
    let s=day.getSeconds()*rotate;

    

    hour.style.transform=`rotateZ(${h+m/12}deg)`;
    min.style.transform=`rotateZ(${m}deg)`;
    sec.style.transform=`rotateZ(${s}deg)`;
    // console.log(5)
};
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d=["Sunday","Monday","tuesday","wednesday","thursday","friday","saturday"];
const setTime =()=>{
    let day =new Date();
    let hh=day.getHours();
    let mm=day.getMinutes();
    let ss=day.getSeconds();
    let days=d[day.getDay()];
    let month = months[day.getMonth()];

    let date=day.getDate();
    var ampm= 'AM';
    if(hh>12){
        hh=hh-12;
        ampm= 'PM';
    } 
    time.innerHTML=`
    <h1 class=set-time>${hh}:${mm}:${ss} ${ampm}<h1>
    <div class=dates>
        <h3 class=set-date>${days} ,  ${month}<h3>
        <h3 class=dat>${date}</h3>
    </div>
    `
}
setAnalog();
setTime();
setInterval(setAnalog,1000);
setInterval(setTime,1000);
const switchBtn=document.getElementsByClassName('change-mode')[0];


const switchMode =(evt) =>{
    if(switchBtn.textContent=== "Dark Mode"){
        switchBtn.textContent="Light Mode";
        document.documentElement.classList.toggle("dark");
    }
    else{
        switchBtn.textContent="Dark Mode";
        document.documentElement.classList.toggle("dark");
    }
};
switchBtn.addEventListener("click",switchMode,false);




let themeNow ="Dark Mode"
if(themeNow){
    document.documentElement.setAttribute("data-theme",themeNow);
    switchBtn.textContent=themeNow;
}

