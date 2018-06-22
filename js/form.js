function formSubmit() {
    firstNameValidation();
    fullNameValidation();
    designationValidation();
    employeeCodeValidation();
    bloodGroupValidation();
    emailValidation();
    phoneNumberValidation();
}

function firstNameValidation() {
    var firstName = $('#firstname').val();
    console.log(firstName);
    if(firstName == "")
        HasError("firstNameError", "firstname", "Field Required");
    else
        NoError("firstname", "firstNameError");
}

function fullNameValidation() {
    var fullName = $('#fullname').val();
    if(fullName == "")
        HasError("fullNameError", "fullname", "Field Required");
    else
        NoError("fullname", "fullNameError");
}

function designationValidation() {
    var designation = $('#designation').val();
    if(designation == "")
        HasError("designationError", "designation", "Select Suitable Option");
    else
        NoError("designation", "desginationError");
}

function employeeCodeValidation() {
    var employeeCode = $('#employeeCode').val();
    var check = employeeCode.match(/[0-9] {6,7}/);
    if(check == null)
        HasError("employeeCodeError", "employeeCode", "Employee Code has only numbers");
    else
        NoError("employeeCode", "employeeCodeError");
}

function bloodGroupValidation(){
    var bloodGroup = $("#bloodGroup").val();
    if(bloodGroup == "")
        HasError("bloodGroupError","bloodGroup","Enter valid blood group");
    else
        NoError("bloodGroup","bloodGroupError");
}

function emailValidation(){
    var email = $("#email").val();
    var result=email.match(/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/);
    if(result == null)
        HasError("emailError","email","Enter valid Virtusa Email Id");
    else
        NoError("email","emailError");
}

function phoneNumValidate(){
    var phone = $("#mobileNumber").val();
    var result = phone.match(/^[1-9][0-9]{9}/);
    if(result == null){
        HasError("mobileNumberError","mobileNumber","Enter a valid Mobile Number");
    }
    else{
        NoError("mobileNumber","mobileNumberError");
    }
    phone=$("#emergencyContactNumber").val();
    result =  phone.match(/^[1-9][0-9]{9}/);
    if(result == null)
        HasError("emergencyContactNumberError","emergencyContactNumber","Enter a valid Mobile Number")
    else
        NoError("emergencyContactNumber","emergencyContactNumberError");
}

function HasError(spanElementId, InputFieldId, message) {
    $("#"+spanElementId).removeClass("spanHide");
    $("#"+spanElementId).html(message);
    $("#"+InputFieldId).css("border-color","red");
}

function NoError(spanElementId, InputFieldId, message) {
    $("#"+spanElementId).hide();
    $("#"+InputFieldId).css("border-color","green");
}
