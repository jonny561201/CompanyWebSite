
function loadOwnerJSON() {
	$(document).ready(function() {
        jQuery.ajax({
            url: "OwnerJson.json",
            dataType:'json',
            success:function(response) {
                highlightButtons('#aboutButton');
                clearText();
                insertImage('CEO-Photo.png');
                $('#header1').html(response.OwnerPage.firstHeader);
                $('#paragraph1').html(response.OwnerPage.firstP1);
                // document.getElementById("lineBreaks").style.visibility="visible";
                $('#lineBreaks1').css("visibility","visible");
                $('#paragraph2').html(response.OwnerPage.secondP1);
                $('#paragraph3').html(response.OwnerPage.thirdP1);
                $('#header4').html(response.OwnerPage.secondHeader);
                $('#lineBreaks4').css("visibility","visible");
                $('#paragraph4').html(response.OwnerPage.firstP2);
            }
        });
	}); 
}

function loadEventsJSON() {
    $(document).ready(function() {
        jQuery.ajax({
            url: "OwnerJson.json",
            dataType:'json',
            success:function(response) {
                highlightButtons('#eventsButton');
                clearText();
                insertEventImages('dsmhack.png', 'KCDC.png', 'DNUG.png', 'Java.png');
                $('#header1').html(response.Events.firstHeader);
                $('#paragraph1').html(response.Events.firstP1);
                $('#paragraph2').html(response.Events.firstP2);
                $('#paragraph3').html(response.Events.firstP3);
                $('#paragraph4').html(response.Events.firstP4);
                $('#lineBreaks1').css("visibility", "visible");
            }
        });
    });
}

function loadHomeJSON() {
    $(document).ready(function() {
        jQuery.ajax({
            url: "OwnerJson.json",
            dataType:'json',
            success:function(response) {
                highlightButtons('#homeButton');
                clearText();
                homePicture();
                $('#header1').html(response.Home.firstHeader);
                $('#lineBreaks1').css("visibility","visible");
                $('#paragraph1').html(response.Home.firstP1);
                $('#paragraph2').html(response.Home.secondP1);
                $('#paragraph3').html(response.Home.thirdP1);

                //remove elements
                $('#header2').css("margin","0px");
                $('#header3').css("margin","0px");
                $('#header4').css("margin","0px");
                $('#header5').css("margin","0px");
                $('#lineBreaks2').css("height","0px");
                $('#lineBreaks3').css("height","0px");
                $('#lineBreaks4').css("height","0px");
                $('#lineBreaks5').css("height","0px");
            }
        });
    });
}

function loadMailJSON() {
    $(document).ready(function() {
        jQuery.ajax({
            url: "OwnerJson.json",
            dataType:'json',
            success:function(response) {
                highlightButtons('#contactButton');
                clearText();
                $('#header1').html(response.Contact.firstHeader);
                $('#paragraph1').html(response.Contact.firstP1);
                $('#lineBreaks1').css("visibility","visible");
                $('#paragraph2').html(response.Contact.secondP1);
                $('#paragraph3').html(response.Contact.thirdP1);
                $('#paragraph4').html(response.Contact.firstP1Email);
                $('#paragraph5').html(response.Contact.fourthP1);

                //remove elements
                $('#header2').css("margin","0px");
                $('#header3').css("margin","0px");
                $('#header4').css("margin","0px");
                $('#header5').css("margin","0px");
                $('#lineBreaks2').css("height","0px");
                $('#lineBreaks3').css("height","0px");
                $('#lineBreaks4').css("height","0px");
                $('#lineBreaks5').css("height","0px");
            }
        });
    }); 
}

function loadHistoryJSON() {
    $(document).ready(function() {
        jQuery.ajax({
            url: "OwnerJson.json",
            dataType: 'json',
            success:function(response) {
                highlightButtons('#historyButton');
                clearText();
                $('#header1').html(response.History.firstHeader);
                $('#lineBreaks1').css("visibility","visible");
                $('#paragraph1').html(response.History.firstP1);
                $('#header2').html(response.History.secondHeader);
                $('#lineBreaks2').css("visibility","visible");
                $('#paragraph2').html(response.History.firstP2);
                $('#header3').html(response.History.thirdHeader);
                $('#lineBreaks3').css("visibility","visible");
                $('#paragraph3').html(response.History.firstP3);
            }
        });
    });
}

function homePicture() {
    var insertPicElement = "<div id='homeImg'><div id='homeMotto'><p>Watch How We Soar!</p></div></div>";
    $('#header1').before(insertPicElement);
    $('#homeImg').css({"margin-right":"20px", "margin-left" : "20px", "margin-top" : "10px", "height" : "300px", "background-size" : "300px", "background" : "url(Fall_Leaves.jpg)", "text-align" : "center"});
    $('#homeMotto').css({"color" : "white", "font-size" : "70px", "font-weight" : "500", "font-family" : "Airstream", "padding-top" : "10%"});
}

function highlightButtons(buttonName) {
    $('button').css({"background" : "transparent"});
    $(buttonName).css({"background-color":"#0099ff"});
}

function insertImage(imgSrc) {
    if ($('#CEOpic').length == 0) {
        var insertElement = $("<img></img>").attr({src: imgSrc, id: 'CEOpic'});
        var insertName = $("<p>Jonathon M. Graf</p>").attr({id: 'CEOName'});
        var insertTitle = $("<p>CEO - Venture Capitalist</p>").attr({id: 'CEOTitle'});      

        $('#header1').before(insertElement);
        $('#header1').before(insertName);
        $('#header1').before(insertTitle);
        socialMediaButtons();
        $('#header1').css({"padding-top" : "3%"});
        $('#CEOName').css({"text-align" : "center", "font-weight" : "bold", "font-size" : "115%", "padding-top" : "1%", "margin-bottom" : "5px"});
        $('#CEOTitle').css({"text-align" : "center", "font-size" : "85%", "font-weight" : "bold", "color" : "gray"});
        $('#CEOpic').css({height: "150px", display: "block", "margin-right" : "auto", "margin-left" : "auto", "margin-top" : "2%"});
    }
}

function insertEventImages(eventImg1, eventImg2, eventImg3, eventImg4) {
    if ($('#Event1').length == 0) {
        var insertEventImg1 = $("<img></img>").attr({src: eventImg1, id: 'EventImg1'});
        var insertEventImg2 = $("<img></img>").attr({src: eventImg2, id: 'EventImg2'});
        var insertEventImg3 = $("<img></img>").attr({src: eventImg3, id: 'EventImg3'});      
        var insertEventImg4 = $("<img></img>").attr({src: eventImg4, id: 'EventImg4'});

        var insertEventName1 = $("<p>DSM Hack</p>").attr({id: 'EventText1'});
        var insertEventName2 = $("<p>KCDC</p>").attr({id: 'EventText2'});
        var insertEventName3 = $("<p>IA .Net User Group</p>").attr({id: 'EventText3'});
        var insertEventName4 = $("<p>CIJUG</p>").attr({id: 'EventText4'});

        $('#paragraph1').before(insertEventImg1);
        $('#paragraph2').before(insertEventImg2);
        $('#paragraph3').before(insertEventImg3);
        $('#paragraph4').before(insertEventImg4);

        $('#paragraph1').before(insertEventName1);
        $('#paragraph2').before(insertEventName2);
        $('#paragraph3').before(insertEventName3);
        $('#paragraph4').before(insertEventName4);

        $('#EventImg1').css({height: "125px", display: "block", "margin-right" : "auto", "margin-left" : "auto", "margin-top" : "2%"});
        $('#EventImg2').css({height: "125px", display: "block", "margin-right" : "auto", "margin-left" : "auto", "margin-top" : "2%"});
        $('#EventImg3').css({height: "125px", display: "block", "margin-right" : "auto", "margin-left" : "auto", "margin-top" : "2%"});
        $('#EventImg4').css({height: "125px", display: "block", "margin-right" : "auto", "margin-left" : "auto", "margin-top" : "2%"});
        $('#EventText1').css({"text-align" : "center", "font-size" : "85%", "font-weight" : "bold", "color" : "gray"});
        $('#EventText2').css({"text-align" : "center", "font-size" : "85%", "font-weight" : "bold", "color" : "gray"});
        $('#EventText3').css({"text-align" : "center", "font-size" : "85%", "font-weight" : "bold", "color" : "gray"});
        $('#EventText4').css({"text-align" : "center", "font-size" : "85%", "font-weight" : "bold", "color" : "gray"});
    }
}


function socialMediaButtons() {
    var insertList = $("<div id='tester'><ul><li class='socialMediaList'><a id='linkedin' href='https://www.linkedin.com/in/jon-graf-05725a6?trk=hp-identity-name'></a></li>" +
        "<li class='socialMediaList'><a id='email' href='mailto:jongraf1@gmail.com?Subject=Soaring%20Leaf%20Solutions'></a></li>" + 
        "<li class='socialMediaList'><a id='github' href='https://github.com/jonny561201'></a></li></ul></div>");

    $('#header1').before(insertList);        
    $('.socialMediaList').css({"display" : "inline"});
    $('#tester').css({"margin-left" : "auto", "margin-right" : "auto", "padding-top" : "5px", "padding-bottom" :"25px", "width" : "150px", "height" : "43px"});
    $('#linkedin').css({"background" : "url('linkedin_icon.png')", "background-size" : "40px 40px", "margin-right" : "5px", "margin-left" : "5px", "display" : "inline-block", "width" : "40px", "height" : "40px"});
    $('#email').css({"background" : "url('email_icon.png')", "background-size" : "40px 40px", "display" : "inline-block", "margin-right" : "5px", "margin-left" : "5px", "width" : "40px", "height" : "40px"});
    $('#github').css({"background" : "url('github_icon.png')", "background-size" : "40px 40px", "display" : "inline-block","margin-right" : "5px", "margin-left" : "5px", "width" : "40px", "height" : "40px"});
}

function clearText() {
    if ($('#CEOpic').length != 0) {
        $('#tester').remove();
        $('#CEOpic').remove();
        $('#CEOName').remove();
        $('#CEOTitle').remove();
        $('.socialMediaList').remove();
    }
    if($('#homeImg').length != 0) {
        $('#homeImg').remove();
    }
    if($('#EventImg1').length != 0) {
        $('#EventImg1').remove();
        $('#EventImg2').remove();
        $('#EventImg3').remove();
        $('#EventImg4').remove();
        $('#EventText1').remove();
        $('#EventText2').remove();
        $('#EventText3').remove();
        $('#EventText4').remove();
    }
    $('.insesrtText').html("");
    $('.breaks').css({"visibility" : "hidden", "height" : "8px"});
    $('#header1').css({"margin-top" : "10px", "padding-top" : "7%"}); 
    $('.headers').css({"margin-top" : "10px", "margin-bottom" : "10px"});
    $('.headers').html("");
}