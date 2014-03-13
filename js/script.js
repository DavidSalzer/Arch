$(document).ready(function () {
    //$("#t3-picture").attr("src", "http://nikwood.co.il/arch3/view%201/output/view%201.html");
    //$("#t3-picture").attr("src", "../HTMLPage.html");
    $("#timeline ul").width(($(".peroid").width() + 2) * $(".peroid").length + 1);
    $("#info-button").on("click touchstart", openInfoPage);
    $("#fun-button").on("click touchstart", openFunPage);
    $(".close-page-btn").on("click", closePage);
});


function openInfoPage(e){
    //openPage("#info-page");  
    openPage("#hotspot-page");  
    
}

function openFunPage(e){
    //e.preventDefault();
    //if($("#fun-page").width()=="0"){
    //    $('#fun-page').animate({width:"90%"});
    //    $(this).animate({left:"90%"});
    //}
    //else{
    //    $('#fun-page').animate({width:"0"});
    //     $(this).animate({left:"0"});
    //}
}

//open hotspot popup
function openHotspot(id){
    console.log(model.hotspot[id]);
}


function showInfo(key){
    
}

function openPage(to){
    $(".page").hide();
    $("header").hide();
    $("#background-blur").fadeIn();
    $(to).fadeIn();
}

function closePage(){
    $(".page").fadeOut();
    $("header").show();
    $("#background-blur").fadeOut();
}
/********* not need*********/
//set hotspot 
function setHotspot(action,key){
    switch(action){
        case "goto": 
                goto(key);
                break;
            case "info":
                showInfo(key);
                break;
    }
}

//go to another view
function goto(key){
    window.location.href = '../../' + key + '/output/' + key + '.html';
}