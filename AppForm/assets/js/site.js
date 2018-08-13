


function validateForm(){
	
	//Element variables
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var title = document.getElementById("title");
	var identity = document.getElementById("identity");
	var email = document.getElementById("email");
	
	//Validates First Name
	if(validateNames(firstName.value)){
		//do something
		alert("the name is valid");
	}
	else{
		//do something
		alert("the name is not valid");
	}
	//Validates Last Name
	if(validateNames(lastName.value)){
		//do something
		alert("the last name is valid");
	}
	else{
		//do something
		alert("the last name is not valid")
	}
	//Validates Title
	if(title.value == "Default")
	{
		alert("Title is not valid")
	}else{
		alert("Title is valid");
	}
	//Validate Id and Passport
	if(document.getElementById('id').checked) {
		if(validateSAID(identity.value)){
			//do something
			alert("the SA ID is valid");
		}
		else{
			//do something
			alert("the SA ID is not valid")
		}
	}else if(document.getElementById('passport').checked) {
		//Passportradio button is checked
		if(validatePassport(identity.value)){
			//do something
			alert("the passport is valid");
		}
		else{
			//do something
			alert("the passport is not valid")
		}
	}
	//Validates Email
	if(validateEmail(email.value))
	{
		alert("the email is valid");
	}else{
		alert("the email is not valid");
	}
	
	
}
//Regex Valiadtion for Names
function validateNames(name) {
	  var re = /^[A-Za-z \-]+$/;
	  return re.test(name);
}
//Regex Valiadtion for Email
function validateEmail(email) 
{
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//Regex Valiadtion for South African ID
function validateSAID(said)
{
	var re = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
	return re.test(said);
}
//Regex Valiadtion for Passport
function validatePassport(passport)
{
	var re = /^[A-Z][0-9]{8}$/;
	return re.test(passport);
}