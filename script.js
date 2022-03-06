const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

const male = {
  sunday:"Kwasi",
  monday:"Kwadwo",
  tuesday:"Kwabena",
  wednesday:"Kwaku",
  thursday:"Yaw",
  friday:"Kofi",
  saturday:"Kwame",
}

const female = {
  sunday:"Akosua",
  monday:"Adwoa",
  tuesday:"Abenaa",
  wednesday:"Akua",
  thursday:"Yaa",
  friday:"Afua",
  saturday:"Ama",
}


const form = document.getElementById('form')


form.addEventListener('submit', function (event) {
  event.preventDefault();
  const gender = document.querySelector('input[name="gender"]:checked').value
  const dob = document.getElementById('DOB').value
  const result = document.getElementById('result')
  const date = new Date(dob)
  const day = date.getDay()
  const dayOfTheWeek = days[day]


  if(gender === 'male') {
    result.textContent = "Your Akan Name is " + male[dayOfTheWeek]
  } else if (gender === 'female') {
    result.textContent = "Your Akan Name is " + female[dayOfTheWeek] 
  }
   

})