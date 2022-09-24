var arr = [];
var fname = document.getElementById("name");
var btn = document.getElementById("submit-btn");
var fatherName = document.getElementById("father_name")
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var stdCnic = document.getElementById("std_cnic");
var father_cnic = document.getElementById("father_cnic");
var date_of_birth = document.getElementById("date_of_birth");
var address = document.getElementById("address");
var city = document.getElementById("city")
var value = city.value
var course = document.getElementById("course");
var courseValue = course.value;
var gender = document.getElementById("gender");
var genderValue = gender.value;
var phoneRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
btn.addEventListener("click", function () {
    let selectedCity = city.options[city.selectedIndex].text
    let selectedCourse = course.options[course.selectedIndex].text
    let selectedGender = gender.options[gender.selectedIndex].text
     var quailfication = document.getElementById("qualification").value;
    
    var selectedQua;
    if(quailfication === "Matric"){
        selectedQua = document.getElementById("matric").value;
        console.log(selectedQua)
    }

    event.preventDefault();
    if (fname.value === "") {
        swal("Invalid Name");
        fname.focus();
    }
    else if (fatherName.value === "") {
        swal("Invalid Father Name");
        fatherName.focus();

    }
    else if (!email.value.match(emailRegex)) {
        swal("You have entered an invalid email address!")
        email.focus();
    }
    else if (!phoneRegex.test(phone.value)) {
        swal("invalid phone number")
        phone.focus();
    }
    else if(stdCnic.value === ""){
        swal("invalid CNIC number")
        stdCnic.focus();
    }
    else if (father_cnic.value === "") {
        swal("Invalid Father CNIC number")
        father_cnic.focus();
    }
    else if (date_of_birth.value === "") {
        swal("Invalid date of birth")
        date_of_birth.focus();
    }
    else if (address.value === "") {
        swal("Invalid address")
        address.focus();
    }
    
  
   let person = [
    {
        name : fname.value,
        f_name: fatherName.value,
        email: email.value,
        phone : phone.value,
        stdCnic : stdCnic.value,
        f_cnic : father_cnic.value,
        DOB : date_of_birth.value,
        address : address.value,
        city : selectedCity ,
        course :selectedCourse,
        gender : selectedGender,
        quailfication : selectedQua
    }
   ]
    console.log(person)
    localStorage.setItem("persons", JSON.stringify(person))
})
function admin() {
    arr = localStorage.getItem("persons")
   console.log(arr)
   document.write(arr);
}

