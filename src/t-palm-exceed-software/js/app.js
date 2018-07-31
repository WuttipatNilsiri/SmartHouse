$(function () {

    var URL = "http://ecourse.cpe.ku.ac.th/exceed/api/tpalm-"
    
    var ImgDir = "./assets/images/progress/"

    // var arrayImgA = ["ashes/100.png","ashes/80.png","ashes/60.png","ashes/40.png","ashes/20.png","ashes/0.png"] 
    // var arrayImgB = ["coconut/100.png","coconut/80.png","coconut/60.png","coconut/40.png","coconut/20.png","coconut/0.png"] 
    // var arrayImgC = ["seed/100.png","seed/90.png","seed/80.png","seed/70.png","seed/60.png","seed/50.png","seed/40.png","seed/30.png","seed/20.png","seed/10.png","seed/0.png"] 
    // var arrayImgD = ["soil/100.png","soil/90.png","soil/80.png","soil/70.png","soil/60.png","soil/50.png","soil/40.png","soil/30.png","soil/20.png","soil/10.png","soil/0.png"] 

    var keyIsOn = "isOn" 

    var keyVolumeA = "volumeA" 
    var keyVolumeB = "volumeB" 
    var keyVolumeC = "volumeC" 
    var keyVolumeD = "volumeD" 

    var keyCount = "count" 
    var keyNumBox = "numBox" 

    var keyGateOutA = "gateOutA" 
    var keyGateOutB = "gateOutB" 
    var keyGateOutC = "gateOutC" 
    var keyGateOutD = "gateOutD" 

    var keyGateIn = "gateIn" 

    setInterval(function(){ 

        $.ajax({ 
            type: "GET", 
            url: URL + keyIsOn + "/view/", 
            dataType: "text", 
            success: function (response) { 

                $

                console.log(response) 

            }, 
            fail: function(response) { 
                console.log(response) 
            } 
        }); 

        $.ajax({ 
            
            type: "GET", 
            url: URL + keyVolumeA + "/view/", 
            dataType: "text", 
            success: function (response) { 
                console.log(response) 
                var newSrc = ImgDir + `ashes/${response*10}.png`
                console.log(newSrc);
                $("#prgAsh").attr("src", newSrc);
                if(response <= 0){
                    alert("ขึ้ถ่าน หมดแล้ว")
                }
            }, 
            fail: function(response) { 
                console.log(response) 
            } 
        }) 

        $.ajax({ 
            type: "GET", 
            url: URL + keyVolumeB + "/view/", 
            dataType: "text", 
            success: function (response) { 
                console.log(response) 
                $("#prgCoconut").attr("src", ImgDir + `coconut/${response*10}.png`);
                if(response <= 0){
                    alert("กากมะพร้าว หมดแล้ว")
                }
            }, 
            fail: function(response) { 
                console.log(response) 
            } 
        }) 

        $.ajax({ 
            type: "GET", 
            url: URL + keyVolumeC + "/view/", 
            dataType: "text", 
            success: function (response) { 
                console.log(response) 
                $("#prgSeed").attr("src", ImgDir + `seed/${response*10}.png`);
                if(response <= 0){
                    alert("เมล็ด หมดแล้ว")
                }
            }, 
            fail: function(response) { 
                console.log(response) 
            } 
        }) 


        $.ajax({ 
            type: "GET", 
            url: URL + keyVolumeD + "/view/", 
            dataType: "text", 
            success: function (response) { 
                console.log(response) 
                $("#prgSoil").attr("src", ImgDir + `soil/${response*10}.png`);
                if(response <= 0){
                    alert("ดิน หมดแล้ว")
                } 
            }, 
            fail: function(response) { 
                console.log(response) 
            } 
        }) 

        $.ajax({ 
            type: "GET", 
            url: URL + keyCount + "/view/", 
            dataType: "text", 
            success: function (response) { 
                console.log(response) 
            }, 
            fail: function(response) { 
                console.log(response) 
            } 
        }) 

        $.ajax({ 
            type: "GET", 
            url: URL + keyNumBox + "/view/", 
            dataType: "text", 
            success: function (response) { 
                $('#display').html(`${response} กระถาง`)
                console.log("Num Box"+response) 
            }, 
            fail: function(response) { 
                console.log(response) 
            } 
        }) 

    

       

    },5000,timeout=3000) 

    $('#startBtn').on('click',function(){
        
        $.ajax({ 
            type: "POST",
            url: URL+keyIsOn+"/set/",
            data: {
                value: 1
            },
            dataType:"text",
            success:function(response){
                console.log(response + " 1")
            } 
        })
        

    })
    $('#stopBtn').on('click',function(){
        
        $.ajax({ 
            type: "POST",
            url: URL+keyIsOn+"/set/",
            data: {
                value: 0
            },
            dataType:"text",
            success:function(response){
                console.log(response + " 0")
            } 
        })
        

    })


})
