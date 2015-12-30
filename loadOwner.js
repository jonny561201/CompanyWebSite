function loadOwner() {

	$(document).ready(function() {
        $.ajax({
            url : "Owner.txt",
            dataType: "text",
            success : function (data) {
                $(".owner").html(data);
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
                $('#history').html(response.OwnerPage.firstHeader );
                // $('#result2').html(response.second );
                // $('#result3').html(response.third);
            }
        });
	}); 
}