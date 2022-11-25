

  var person={
    first_name:"johnny",
     last_name: "johnson",
   phone:"703-3424-1111"
};

//for(let i=0; i < person.){



// for in
  var person={
    first_name:"johnny",
     last_name: "johnson",
   phone:"703-3424-1111"
};
for (var property in person) {
     console.log(JSON.stringify(person));
}

//for of
let salaries = {
    john:"100",
    pete:"200",
    mary:"300",
};
for(var key of Object.keys(salaries)){
    console.log(JSON.stringify(salaries));   
 }

 //foreach
var fruits = { 
     apple :"300",
     orange:"100",
   cherry:"200"
};
Object.entries(fruits).forEach(([key, value]) =>{
console.log(JSON.stringify(fruits))
})



let myresume = {
  Basics:"                                                                                     ",
    name: "DivyaUdhayakumar",
    label: "",
    picture: "",
    email: "testuser@gmail.com",
    phone: "8975654321",
    degree: "BCA",
    website: "http://divyaudhayakumar.com",
    address:"                                             ",
    location:"78 KK Nagar",
    postalCode: "633421",
      city: "Trichy",
      countryCode: "IND)",
      region: "Tamil Nadu",    
    profiles: "                  ",
        network: "divyaudhayakumar@twiter.com",
        "username": "DivyaUdhay",
        "url": "http://DivyaUdhay.com",
      work: "                    ",
    company: "Gomsharkglobal.llp",
      position: "Auditing",
      website: "http://Domsharkglobal.com",
      startDate: "1994-06-01",
      endDate: " still running",

      
  education:"                 ",
          institution: "kumaran collage of arts and science",
      area: "Trichy",
            startDate: "2011-06-04",
      endDate: "2014-05-18",
      gpa: "8.2",
      courses:"BCA",
      
     
  skills:"                           ",
      skillname: "C++",
      level: "assistant",
      keywords:"C++",
     
  languages: "                    ",
      language: "ENGLISH,TAMIL,KANNADAM",
      fluency: "ENGLISH",
  interests: "                        ",
      name: "Liatening music,Drawing",
      sports:"batmitton"
};
console.log(JSON.stringify(myresume));