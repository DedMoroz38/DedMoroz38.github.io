let modalWindow = document.querySelector('[name="window"]');
let images = document.querySelectorAll('[name="img"]');
let body = document.querySelector('body');
images.forEach(element => {
    element.addEventListener('click', (e)=>{
        modalWindow.classList.add("info__images-box-index");
        body.classList.add("dark");
        let id = e.target.id;
        modalWindow.innerHTML = '';
        modalWindow.innerHTML += 
              `<div class="big_image_box">
              <img class="modalImage" src="./images/index/infoImg${id}.png" name="img" id="1" alt="">
              <button onClick="remove()" class="cross">x</button>
          </div>`;
    });
}); 
function remove(){
    modalWindow.innerHTML = '';
}
