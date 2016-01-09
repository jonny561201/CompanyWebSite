
function loadOwnerJSON() {
	$(document).ready(function() {
        jQuery.ajax({
            url: "OwnerJson.json",
            dataType:'json',
            success:function(response) {
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

function loadMailJSON() {
    $(document).ready(function() {
        jQuery.ajax({
            url: "OwnerJson.json",
            dataType:'json',
            success:function(response) {
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
            }
        });
    }); 
}

function loadEmailJSON() {
    $(document).ready(function() {
        jQuery.ajax({
            url: "OwnerJson.json",
            dataType:'json',
            success:function(response) {
                clearText();
                $('#header1').html(response.Contact.firstHeader);
                $('#paragraph1').html(response.Contact.firstP1);
                $('#lineBreaks1').css("visibility","visible");
                $('#paragraph2').html(response.Contact.firstP1Email);
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

function clearText() {
    $('#paragraph1').html("");
    $('#paragraph2').html("");
    $('#paragraph3').html("");
    $('#paragraph4').html("");
    $('#paragraph5').html("");
    $('#paragraph6').html("");
    $('#paragraph7').html("");
    $('#lineBreaks1').css("visibility","hidden");
    $('#lineBreaks2').css("visibility","hidden");
    $('#lineBreaks3').css("visibility","hidden");
    $('#lineBreaks4').css("visibility","hidden");
    $('#lineBreaks5').css("visibility","hidden");
    $('#lineBreaks6').css("visibility","hidden");
    $('#lineBreaks7').css("visibility","hidden");
    $('#header1').html("");
    $('#header2').html("");
    $('#header3').html("");
    $('#header4').html("");
    $('#header5').html("");
    $('#header6').html("");
    $('#header7').html("");
}