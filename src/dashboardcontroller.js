$(function(){

    setInterval(function(){
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-light_press_webpost/view/",
            dataType: "text",
            success: function (response) {
                if (response === '1'){
                    ans = "On"
                }
                else {
                    ans = "Off"
                }
                console.log(response)
                
                    $('#lightSta').html(`
                    <div class="alert alert-primary" role="alert">
                    light ${ans} 
                    </div>`)
                   
                
               
            },
            fail: function(response) {
                console.log(response)
            }
        });
    },3000)


    setInterval(function(){
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-door_press_webpost/view/",
            dataType: "text",
            success: function (response) {
                if (response === '1'){
                    ans = "Open"
                }
                else {
                    ans = "Close"
                }
                console.log(response)
                
                    $('#doorSta').html(`
                    <div class="alert alert-primary" role="alert">
                    door ${ans} 
                    </div>`)
                   
                
               
            },
            fail: function(response) {
                console.log(response)
            }
        });
    },3000)

    setInterval(function(){
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-air_press_webpost/view/",
            dataType: "text",
            success: function (response) {
                if (response === '1'){
                    ans = "On"
                }
                else {
                    ans = "Off"
                }
                console.log(response)
                
                    $('#airSta').html(`
                    <div class="alert alert-primary" role="alert">
                    air ${ans} 
                    </div>`)
                   
                
               
            },
            fail: function(response) {
                console.log(response)
            }
        });
    },3000)

    setInterval(function(){
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-sound_webpost/view/",
            dataType: "text",
            success: function (response) {
                if (response === '1'){
                    ans = "On"
                }
                else {
                    ans = "Off"
                }
                console.log(response)
                
                    $('#bellSta').html(`
                    <div class="alert alert-primary" role="alert">
                    sound ${ans} 
                    </div>`)
                   
                
               
            },
            fail: function(response) {
                console.log(response)
            }
        });
    },3000)

})