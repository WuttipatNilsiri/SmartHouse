$(function(){

    setInterval(function(){
        $.ajax({
            type: "GET",
            url: "http://exceed.srakrn.me/api/jacky-group/view/",
            dataType: "text",
            success: function (response) {
                console.log(response)
                if (temp !== response){
                    $('#log').append(`
                    <div class="alert alert-primary" role="alert">
                    ${response} 
                    </div>`)
                    $('#log').animate({scrollTop: $('#log').prop('scrollHeight')});
                    temp = response
                }
               
            },
            fail: function(response) {
                console.log(response)
            }
        });
    },3000)

})