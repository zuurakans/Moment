const hours=document.querySelector('.hour');
const minutes=document.querySelector('.minute');
const seconds=document.querySelector(".second")

function showTime(){
  let hour=new Date().getHours();
  let minute=new Date().getMinutes();
  let second=new Date().getSeconds();

  hour=hour<10 ? "0"+ hour:hour
  minute=minute<10 ? "0"+ minute:minute
  second=second<10 ? "0"+ second:second


  hours.innerText=hour
  minutes.innerText=minute
  seconds.innerText=second

  setTimeout(showTime,1000)
}

showTime();

// Getting data

function getQuotes() {
  const quotes = './db.json';
  fetch(quotes)
    .then(res => res.json())
    .then(data => { 
      console.log(data);
      
    });
}
getQuotes();