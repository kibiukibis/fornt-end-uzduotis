function validate()
{
    document.querySelector(".error__firstname").innerHTML = "";
    document.querySelector(".error__lastname").innerHTML = "";

   if( document.myForm.firstname.value == "" )
   {
    document.querySelector(".error__firstname").innerHTML = "Please provide your first name";
      document.myForm.firstname.focus();
     
      return false;
   }
   
   if( document.myForm.lastname.value == "" )
   {
    document.querySelector(".error__lastname").innerHTML = "Please provide your last name";
      document.myForm.lastname.focus();
      return false;
   }
   
   
   return( true );
}

