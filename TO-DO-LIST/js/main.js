$(document).ready(function() {
    
    //add new task
    $('.add').click(function(){
        var myValue = $(this).prev().val();
        
        if(myValue.length > 0 ){
            
            $('.added-tasks').append('<li class="added-task-items">'+myValue+'<span class="fa fa-remove" onclick="clickCounter1()"></span><span class="fa fa-check" onclick="clickCounter()"></span></li>');
             $('.add-task').val('');
        }  
    });
    

    //delete one task
    $('.added-tasks').on('click','.fa-remove',function(){
        var question = confirm('Are you sure, that you want to delete this task?');
        if(question) {
             $(this).parent().remove();
                $('.filter-tasks-input').val('');
        }     
    });
    
    //task done
    $('.added-tasks').on('click','.fa-check',function() {
        $(this).parent().addClass('text-success font-weight-bold done');
    }); 
   

    //clear all tasks
    $('.clear-tasks').click(function(){
        var ques = confirm('Do you want to delete all tasks?');
        if(ques){
            $(this).prev().empty();
        }
       
    });
    
    //filter tasks
    $('.filter-tasks-input').keyup(function(){
        var inputValue = $(this).val().toLowerCase();
        $('.added-tasks li').filter(function(){
            var tekst = $(this).text().toLowerCase();
            if(tekst.indexOf(inputValue) < 0) {
                 $(this).hide();
            } else{
                $(this).show();
            }
        });
    });
    

    $(function(){
        $('.added-tasks').html(localStorage.getItem("todolist"));
      })();
});

