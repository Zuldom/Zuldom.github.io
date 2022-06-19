// const clock = document.querySelector("#clock");

// function diff(){
//     const crismas = new Date("2022-12-25");
//     const today = new Date();

//     const diffday = crismas - today;

//     const diffDay1 = String(Math.floor(diffday / (1000 * 60 * 60 * 24))).padStart(3, "0");
//   const diffHour = String(Math.floor((diffday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
//   const diffMinutes = String(Math.floor((diffday % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
//   const diffseconds = String(Math.floor((diffday % (1000 % 60)) / 1000)).padStart(2, "0");
  
//   clock.innerText = `${diffDay1}d ${diffHour}h ${diffMinutes}m ${diffseconds}s`;
// }

// diff();
// setInterval(diff, 1000);



function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = (`${hours}h ${minutes}d ${seconds}s`);
}

getClock();
setInterval(getClock, 1000);