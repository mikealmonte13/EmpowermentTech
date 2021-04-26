// * Sir function, variables at objects po sir ginamit ko
function personalInfo() {
  var _Name = { firstName: "Angelo Mike Ryan", MI: "C.", lastName: "Almonte" };
  var _Info = { age: 17, gender: "Male", address: "San Jose Del Monte, Bulacan", school: "STI College San Jose Del Monte", strand: "ICT-MAWD", yr: "12" };
  var _Label = { a: "Age: ", g: "Gender: ", loc: "Location: ", s: "School: ", str: "Strand: ", grade: "Grade Level: " };

  document.getElementById("name").innerHTML = "<br/>" + "My name is " + _Name.firstName + " " + _Name.MI + " " + _Name.lastName;
  document.getElementById("info").innerHTML = _Label.a + _Info.age + "<br/>" + _Label.g + _Info.gender + "<br/>" + _Label.loc + _Info.address;
  document.getElementById("school").innerHTML = _Label.grade + _Info.yr + "<br/>" + _Label.str + _Info.strand + "<br/>" + _Label.s + _Info.school;
}

$(function () {
  personalInfo();
});
