let hrElement;
let counter = 1;

function droplets(dropletB){
    

        for (let i = 0; i < counter; i++) {
            if (dropletB === true){
                console.log("reached dropletB")
                hrElement = document.createElement("HR");
                hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
                hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
                hrElement.style.animationDelay = Math.random() * 5 + "s";
              
                document.getElementById('rain').appendChild(hrElement);
            }else{
                document.getElementById('rain').innerHTML=''
            }
        }
        

    
  
  }

  export default droplets;


export const Clouds = ()=>{
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray'
}


export const Clear = () => {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'
}

export const Rain = () => {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'
}
