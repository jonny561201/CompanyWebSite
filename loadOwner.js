function loadOwner() {

	$(document).ready(function() {
        $.ajax({
            url : "Owner.txt",
            dataType: "text",
            success : function (data) {
                $("#owner").html(data);
            }
        });
	}); 
}


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
                $('#header1').html(response.Contact.firstHeader);
                $('#paragraph1').html(response.Contact.firstP1);
                $('#lineBreaks1').css("visibility","visible");
                $('#paragraph2').html(response.Contact.secondP1);
                $('#paragraph3').html(response.Contact.thirdP1);
                $('#paragraph4').html(response.Contact.fourthP1);

                // clean up divs
                $('#header4').html("");
                $('#paragraph5').html("");
                $('#paragraph6').html("");

                //remove elements
                // $('#header2').detach();
                // $('#header3').detach();
                // $('#header4').detach();
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
                $('#header1').html(response.Contact.firstHeader);
                $('#paragraph1').html(response.Contact.firstP1);
                $('#lineBreaks1').css("visibility","visible");
                $('#paragraph2').html(response.Contact.firstP1Email);

                // clean up divs
                $('#paragraph3').html("");
                $('#paragraph4').html("");
                $('#paragraph5').html("");
                $('#paragraph6').html("");
                $('#header3').html("");
                $('#header4').html("");
                $('#header5').html("");
                $('#header6').html("");
            }
        });
    });
}