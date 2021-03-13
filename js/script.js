// function adding(e){
//     const input = document.getElementById('inputs').value;
//     console.log(input);


//     const myList = document.querySelector('.list');
//     const added = document.createElement('li')

//     const textNode = document.createTextNode(input)
//     added.appendChild(textNode);
//     myList.appendChild(added)

// }

// const myBtn = document.getElementById('inputButton');
// myBtn.addEventListener('click', adding)


// function adding(e){
//     // const $input = $('document.getElementById('inputs')')


// }

$('document').ready(function(){

    $('#inputButton').click(function(e){
        e.preventDefault()
        // in js you would usually put the input value first in a new variable, it seems like this is not a practice in JS
        // $('#inputButton').click(function(){
          var newItem =  $('#inputs').val(); 
          console.log(newItem)
          if(newItem !== ''){
              $('.list').append('<li  id="trash" class="fas fa-trash-alt">' + newItem + '</li>')
            //   $('#inputButton').val()='AND....';
            $('#inputs').val('')

          } 


          


            // console.log(newItem)
        // })
        // $('.list').append('<li>' + $input)
    })

    // $('ul').on('click', 'li', function() {
    //     $(this).closest('li').remove();
    // });

    // $deleteButton.on(‘click’, function(){
    //     const $item = $(this).closest(‘li’)
    //     $(this).remove()
    // })
    // /*----- functions -----*/
    // function displayInfo(skill){
    //     const $li = $(`<li><button id=‘deleteButton’ class=‘deleteButton’>X</button>${skill}</li>`)
    //     $ul.append($li)
    // }
    
    
    // $('ul').click(function(e){

    //     console.log(this)
    //     $('.fa-trash-alt').parent('li').fadeOut(200)
    //   })
})






// const $myBtn = $('inputButton');




// $myBtn.on('click',function (evt){
//     console.log(evt.textContent)
//     const $input = $('#inputs').attr('value');
//     console.log($input);

// })