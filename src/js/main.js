
import "./slider.js";



function pageLoaded() {
  localStorage.clear();
  const container = document.querySelector(".output");
  container.innerHTML = localStorage.getItem('books');

  const apiKey = "AIzaSyDZhaHR0ZJZG0yGQifAm5qN1oRmHWRWKeo";
  const apiURL = "https://www.googleapis.com/books/v1/volumes?"; 
  const moreBtn = document.querySelector('.moreBooks');
  const placeHolder = document.createElement('img');
  placeHolder.src = "./images/placeholder.png";



//параметры запроса
  let query = {
    q: "",
    key: apiKey,
    printType: 'books',
    langRestrict: 'en',
    filter:'paid-ebooks',
    maxResults: '6', 
    startIndex: '0'

   }

let params = new URLSearchParams(query)


  function sendRequest() {
    
    fetch(`${apiURL}${params.toString()}`)
    
    .then(response => {

        return response.json();
      })

      .then(data => {
        handleResponse(data);

      })
  }

  function handleResponse(data) {
    
//записываем необходимые данные для карточки
    data.items.forEach((item) => {
      let bookCover = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHolder;
      let bookAuthor = (item.volumeInfo.authors) ? item.volumeInfo.authors : "Author is unknown";
      let bookTitle = item.volumeInfo.title;
      let stars =  (item.volumeInfo.averageRating) ? item.volumeInfo.averageRating : " ";
      let ratings = (item.volumeInfo.ratingsCount) ? item.volumeInfo.ratingsCount + " " + "reviews": " ";
      let bookDescription = (item.volumeInfo.description) ? item.volumeInfo.description : "No description";
      let bookPrice = (item.saleInfo.listPrice) ? '$' + " " + item.saleInfo.listPrice.amount : " ";

 // определяем процент заполнения звезд рейтинга на основании полученых данных
      const starTotal = 5;
      const starPercentage = (stars / starTotal) * 100;
      const starPercentageRounded = (Math.round(starPercentage / 10) * 10);
     
 
    

   //создаем карточки
      let book = document.createElement("div");
      book.innerHTML = `<div class="card">
      <img class="card-image" loading="lazy" src="${bookCover}"></img>
      <div style="margin-left:36px">
      <div class="card-author">${bookAuthor}</div>
      <div class="card-title">${bookTitle}</div>
      <div class="card-rating">
      <div class="stars-outer"><div class="stars-inner" style="width:${starPercentageRounded}%"></div></div>${ratings}</div>
      <div class="card-description">${bookDescription}</div>
      <p class="card-price">${bookPrice}</p>
      <button class="button addNumber">BUY NOW</button>
      </div>
      </div>`

     
      container.appendChild(book);
      localStorage.setItem('books',container.innerHTML)
      moreBtn.style.display = "block";



       
//добавляем и убираем книгу из корзины покупок
 
      function addToCart(event) {
        let cart = document.querySelector('.inCart');


        if (event.target.matches('.addNumber')){
          event.preventDefault();
            cart.style.display = "block"
            cart.innerText ++; 
            event.target.innerText = "IN THE CART"
            event.target.classList.remove('addNumber');     
            event.target.classList.add('minus');
                       
       
        }else if(event.target.matches('.minus')){
            cart.innerHTML--;
            event.target.innerText = "BUY NOW" 
            event.target.classList.remove('minus');
            event.target.classList.add('addNumber');
           
        }
       
      }      

 book.addEventListener('click', addToCart);
  
    })
    
          
  }

//кнопка загрузки остального контента

function loadMore(){
  
  let startIndex = query.startIndex;
  let maxResults = query.maxResults
  
  if('URLSearchParams' in window){ 
    if(startIndex == 0 ){
      startIndex = maxResults;

    }
   if(startIndex == maxResults){
      query.startIndex = 12;
    }

    if(startIndex > maxResults){
      query.startIndex += 6;
    }
 

  params.set("startIndex", `${startIndex++}`)
   
  window.history.replaceState({}, '', `${location.pathname}?${params}`);
  sendRequest();

  }
}
  
  moreBtn.addEventListener('click', loadMore);



//навешиваем событие на кнопки , меняя параметры поиска
  const parameters = ["subject:Architecture", "subject:Art", "subject:Biography & Autobiography",  "subject:Business",
  "subject:Crafts & Hobbies", "subject:Drama", "subject:Fiction", "subject:Cooking", "subject:Health & Fitness", "subject:History",
  "subject:Humor","subject:Poetry", "subject:Psychology", "subject:Science", "subject:Technology", "subject:Travel"]

  let buttons = document.querySelectorAll('li');
  let lastClicked = buttons[0];

  for( let i = 0; i < buttons.length; i++ ){
    
   buttons[i].addEventListener('click', function(){
      lastClicked.classList.remove('pressed');
      this.classList.add('pressed'); 
      this.firstChild.style.color = '#1C2A39';
      updateDisplay();  
      params.set('q', `${parameters[i++]}`);
      lastClicked = this;
      sendRequest(); 
    });
  }



  

  function updateDisplay() {

    while (container.firstChild) {
      container.removeChild(container.firstChild);
     moreBtn.style.display = "none";
    }
}

}



document.addEventListener("DOMContentLoaded", pageLoaded);




 


