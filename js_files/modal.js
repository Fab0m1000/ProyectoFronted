//select modal
const modal_box = document.querySelector('#modalBox');
const btn_openModal = document.querySelector('#btn-openModal');
const btn_closeModal = document.querySelector('#btn-closeModal');

//open modal
btn_openModal.addEventListener('click', function(e){
  /* console.log('haz hecho clic'); */
    modal_box.style.display='block';
});

//close modal
btn_closeModal.addEventListener('click', function(e){
    modal_box.style.display='none';
});

//close modal when user clicks outside the modal window
window.onclick = function(event){
  if(event.target == modal_box){
    modal_box.style.display='none';
  }
}