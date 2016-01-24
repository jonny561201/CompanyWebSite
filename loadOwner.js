
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
                $('#paragraph5').html(response.OwnerPage.secondP2);
                $('#paragraph6').html(response.OwnerPage.thirdP2);
                $('#lineBreaks7').css("visibility","visible");
                $('#header7').html(response.OwnerPage.thirdHeader);
                $('#paragraph7').html(response.OwnerPage.firstP3);
            }
        });
	}); 
}

function loadNewsJSON() {
    $(document).ready(function() {
        jQuery.ajax({
            url: "OwnerJson.json",
            dataType:'json',
            success:function(response) {
                highlightButtons('#homeButton');
                clearText();
                
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
                $('#paragraph4').html(response.Contact.fourthP1);

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

function socialMediaButtons() {
    var insertList = $("<div id='tester'><ul><li class='socialMediaList'><a id='linkedin' href='https://www.linkedin.com/in/jon-graf-05725a6?trk=hp-identity-name'></a></li>" +
        "<li class='socialMediaList'><a id='email' href='mailto:jongraf1@gmail.com?Subject=Soaring%20Leaf%20Solutions'></a></li>" + 
        "<li class='socialMediaList'><a id='github' href='https://github.com/jonny561201'></a></li></ul></div>");

    $('#header1').before(insertList);        
    $('.socialMediaList').css({"display" : "inline"});
    $('#tester').css({"margin-left" : "auto", "margin-right" : "auto", "padding-top" : "5px", "padding-bottom" :"25px", "width" : "125px", "height" : "43px"});
    $('#linkedin').css({"background" : "url('linkedin_icon.png')", "background-size" : "43px 43px", "display" : "inline-block", "width" : "43px", "height" : "43px"});
    $('#email').css({"background" : "url('email_icon.png')", "background-size" : "40px 40px", "display" : "inline-block", "width" : "40px", "height" : "40px"});
    $('#github').css({"background" : "url('github_icon.png')", "background-size" : "40px 40px", "display" : "inline-block", "width" : "40px", "height" : "40px"});
}

function clearText() {
    if ($('#CEOpic').length != 0) {
        $('#tester').remove();
        $('#CEOpic').remove();
        $('#CEOName').remove();
        $('#CEOTitle').remove();
        $('.socialMediaList').remove();
    }
    $('.insesrtText').html("");
    $('.breaks').css({"visibility" : "hidden", "height" : "8px"});
    $('#header1').css({"margin-top" : "10px", "padding-top" : "7%"}); 
    $().css({"margin-top" : "10px", "margin-bottom" : "10px"});
    $('.headers').html("");
}