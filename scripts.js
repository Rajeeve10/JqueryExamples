$(document).ready(function(){

	$("#addEmployees").validate({
		 rules:{
			empname:{
				required:true,
				minlength:4
			}
		 }
	 })

	$('.btnrowAddDelete').click(function(){
		

		
  		var empName = $('.txtName').val();
  		var empLocation = $('.txtLocation').val();
  		var empSalary = $('.txtSalary').val();
  		$('.TableAddDelete tbody').append("<tr><td>"+empName+"</td><td>"+empLocation+"</td><td>"+empSalary+"</td><td><button type='button' class='btndeleterowadded btn'>Delete</button><button type='button' class='btnEdit btn'>Edit</button></td></tr>");
          $(".txtName").val("");
                    $(".txtLocation").val("");
                    $(".txtSalary").val("");
                    $(".txtName").focus();
	
    });
      
    $(document).on('click', 'button.btndeleterowadded', function(){
     	$(this).closest('tr').remove();
     	return false;
 	});


	 $(document).on('click', 'button.btnEdit', function(){
		var currentRow=$(this).closest("tr"); 
		var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
		 var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
         var col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
         var data=col1+"\n"+col2+"\n"+col3;
         $(".txtName").val(col1);
         $(".txtLocation").val(col2);
		 $(".txtSalary").val(col3);
		 $(this).closest('tr').remove();
	 });

	
 
});