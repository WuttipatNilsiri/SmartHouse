$(function(){
    
    $('#light').on('click', function () { 

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-light_press_webpost/view/",
            dataType: "text",
            
            success: function (response) {
                console.log("Server light value : " + response)
               
                var serverData = response

                if (serverData === '0') {
                    var valueToSend = 1
                }
        
                else {
                    var valueToSend = 0
                }

                
                
        
                console.log("to Send Light : " + valueToSend)
                
                $.ajax({
                    type: "POST",
                    url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-light_press_webpost/set/",
                    data: {
                        value: valueToSend
                    },
                    dataType: "text",
                    success: function (response) {


                       
                        
                        console.log(response)
                    },
                    fail: function(response) {
                        console.log(response)
                    }
        
                });
                
               
            },

            fail: function(response) {
                console.log(response)
            }

        });

        
    })

    $('#air').on('click', function () { 

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-air_press_webpost/view/",
            dataType: "text",
            
            success: function (response) {
                console.log("Server Air value : " + response)
               
                var serverData = response

                

                if (serverData === '0') {
                    var valueToSend = 1
                }
        
                else {
                    var valueToSend = 0
                }
                
        
                console.log("to Send Air : " + valueToSend)
                
                $.ajax({
                    type: "POST",
                    url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-air_press_webpost/set/",
                    data: {
                        value: valueToSend
                    },
                    dataType: "text",
                    success: function (response) {
                        
                        console.log(response)
                    },
                    fail: function(response) {
                        console.log(response)
                    }
        
                });
                
               
            },

            fail: function(response) {
                console.log(response)
            }

        });
        
    })

    $('#door').on('click', function () { 


        
        
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-door_press_webpost/view/",
            dataType: "text",
            
            success: function (response) {
                console.log("Server Door value : " + response)
               
                var serverData = response

                

                if (serverData === '0') {
                    var valueToSend = 1
                }
        
                else {
                    var valueToSend = 0
                }
                
        
                console.log("to Send Door : " + valueToSend)
                
                $.ajax({
                    type: "POST",
                    url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-door_press_webpost/set/",
                    data: {
                        value: valueToSend
                    },
                    dataType: "text",
                    success: function (response) {
                        
                        console.log(response)
                    },
                    fail: function(response) {
                        console.log(response)
                    }
        
                });
                
               
            },

            fail: function(response) {
                console.log(response)
            }

        });
        
    })

    $('#bell').on('click', function () { 


        
        
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-sound_webpost/view/",
            dataType: "text",
            
            success: function (response) {
                console.log("Server bell value : " + response)
               
                var serverData = response

                

                if (serverData === '0') {
                    var valueToSend = 1
                }
        
                else {
                    var valueToSend = 0
                }
                
        
                console.log("to Send bell : " + valueToSend)
                
                $.ajax({
                    type: "POST",
                    url: "http://ecourse.cpe.ku.ac.th:1515/api/tpalm-sound_webpost/set/",
                    data: {
                        value: valueToSend
                    },
                    dataType: "text",
                    success: function (response) {
                        
                        console.log(response)
                    },
                    fail: function(response) {
                        console.log(response)
                    }
        
                });
                
               
            },

            fail: function(response) {
                console.log(response)
            }

        });
        
    })

})