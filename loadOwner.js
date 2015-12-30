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
                $('#paragraph1').html(response.OwnerPage.firstParagraph);
            }
        });
	}); 
}