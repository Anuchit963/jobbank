let nid = document.getElementById("nid").value.trim();
let fname = document.getElementById("fname").value.trim();
let lname = document.getElementById("lname").value.trim();
let year = document.getElementById("year").value;
let school = document.getElementById("school").value;
let gender = document.querySelector('input[name="genderRad"]:checked');
let days = document.getElementById("workDays").value.trim();
if(!nid || !fname || !lname || !year || !school || !gender || !days){
	alert("Please fill all fields!");
  return false;

}
function checkNID() {
let nid = (document.getElementById("nid").value).trim();
if (isNaN(nid) || nid.length !== 13) {
	return false;
	} else {
	return true;
}
}

function checkWorkDays() {
let num = document.getElementById("workDays").value.trim();
	if (isNaN(num)) {
		return false;
	}
		num = parseInt(num);
	if (num <= 1 || num > 6) {
		return false;
	}
return true;
}

function validateForm(){
	if(!checkNID()){
		alert("Invalid value for National ID!");
			document.getElementById("nid").focus();
		return false;
		}else{
		if(!checkWorkDays()){
			alert("Invalid value for days of work!");
				document.getElementById("workDays").focus();
	return false;
		}else{
		if(!checkGender()){
			alert("Please select gender!");
	return false;
		}else{
		let total = payRateCalculate();
			alert("Your weekly pay is " + total + " THB");
	return false;
			}
		}
	}
}