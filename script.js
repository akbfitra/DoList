    var toDoListArray = [];

    var form = document.querySelector(".form"); 
    var input = form.querySelector(".formData");
    var ul = document.querySelector(".toDoList"); 
  
   
    form.addEventListener('submit', e => {
      e.preventDefault();
      var itemId = String(Date.now());
      var toDoItem = input.value;
      addItemToDOM(itemId , toDoItem);
      addItemToArray(itemId, toDoItem);
      input.value = '';
    });
    
    ul.addEventListener('click', e => {
      var id = e.target.getAttribute('data-id')
      if (!id) return 
      removeItemFromDOM(id);
      removeItemFromArray(id);
    });
 
    function addItemToDOM(itemId, toDoItem) {    
   
      var li = document.createElement('li')
      li.setAttribute("data-id", itemId);
    
      li.innerText = toDoItem
  
      ul.appendChild(li);
    }
    
    function addItemToArray(itemId, toDoItem) {
      toDoListArray.push({ itemId, toDoItem});
    }
    
    function removeItemFromDOM(id) {
      var li = document.querySelector('[data-id="' + id + '"]');
      ul.removeChild(li);
    }
    
    function removeItemFromArray(id) {
      toDoListArray = toDoListArray.filter(item => item.itemId !== id);
      console.log(toDoListArray);
    }
    
