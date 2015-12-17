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