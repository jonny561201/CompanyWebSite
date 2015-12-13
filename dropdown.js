obj.dd.on('click', function(event){
	$(this).toggleClass('active');
	return false;
});

$(function(){

	var drop = new DropDown($('#dd'));
	$(document).click(function(){
		$('.AboutDropDownWrapper').removeClass('active');
	});

});