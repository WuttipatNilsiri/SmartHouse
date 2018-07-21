$(function(){
    
    var URL = "http://ecourse.cpe.ku.ac.th/exceed/api/tpalm-"

    var arrayImgA = ["ขี้เถ้า100%.png","ขี้เถ้า80%.png","ขี้เถ้า60%.png","้ขี้เถ้า40%.png","ขี้เถ้า20%.png","ขี้เถ้า0%.png"]
    var arrayImgB = ["กาก100%.png","กาก80%.png","กาก60%.png","กาก40%.png","กาก20%.png","กาก0%.png"]
    var arrayImgC = ["เมล็ด100%.png","เมล็ด80%.png","เมล็ด60%.png","เมล็ด40%.png","เมล็ด20%.png","เมล็ด0%.png"]
    var arrayImgD = ["ดิน100%.png","ดิน80%.png","ดิน60%.png","ดิน40%.png","ดิน20%.png","ดิน0%.png"]
    
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
                $("#imgA").attr("src",arrayImgA[response]);
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
                $("#imgB").attr("src",arrayImgB[response]);
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
                $("#imgC").attr("src",arrayImgC[response]);
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
                $("#imgD").attr("src",arrayImgD[response]);
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
                console.log(response)
            },
            fail: function(response) {
                console.log(response)
            }
        })

        $.ajax({
            type: "GET",
            url: URL + keyGateOutA + "/view/",
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
            url: URL + keyGateOutB + "/view/",
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
            url: URL + keyGateOutC + "/view/",
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
            url: URL + keyGateOutD + "/view/",
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
            url: URL + keyGateIn  + "/view/",
            dataType: "text",
            success: function (response) {
                console.log(response)
            },
            fail: function(response) {
                console.log(response)
            }
        })

    },5000,timeout=10000)
})