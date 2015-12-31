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
                $('#paragraph2').html(response.OwnerPage.secondP1);
                $('#paragraph3').html(response.OwnerPage.thirdP1);
                $('#header4').html(response.OwnerPage.secondHeader);
                $('#paragraph4').html(response.OwnerPage.firstP2);
                $('#paragraph5').html(response.OwnerPage.secondP2);
                $('#paragraph6').html(response.OwnerPage.thirdP2);
            }
        });
	}); 
}