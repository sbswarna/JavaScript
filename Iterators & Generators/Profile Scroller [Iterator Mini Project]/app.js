//creating some data

const data = [
  {
    name: "A",
    age: "35",
    gender: "Male",
    dp: "https://randomuser.me/api/portraits/men/50.jpg",
    location: "L",
    email: "abc@gmail.com",
  },
  {
    name: "B",
    age: "22",
    gender: "Female",
    dp: "https://randomuser.me/api/portraits/women/50.jpg",
    location: "F",
    email: "def@outlook.com",
  },
  {
    name: "C",
    age: "25",
    gender: "Female",
    dp: "https://randomuser.me/api/portraits/women/80.jpg",
    location: "C",
    email: "ghi@outlook.com",
  },
  {
    name: "D",
    age: "27",
    gender: "Male",
    dp: "https://randomuser.me/api/portraits/men/44.jpg",
    location: "N",
    email: "jkl@yahoo.com",
  },
  {
    name: "E",
    age: "32",
    gender: "Male",
    dp: "https://randomuser.me/api/portraits/men/40.jpg",
    location: "B",
    email: "mno@gmail.com",
  },
  {
    name: "F",
    age: "35",
    gender: "Female",
    dp: "https://randomuser.me/api/portraits/women/20.jpg",
    location: "S",
    email: "pqr@yahoo.com",
  },
];

//profile iterator
function profileIterator(profiles) {
  let profile = 0;

  return {
    next: function () {
      return profile < profiles.length
        ? { value: profiles[profile++], done: false }
        : { done: true };
    },
  };
}

const it = profileIterator(data);

document.getElementById("next").addEventListener("click", nextProfile);
nextProfile();

function nextProfile() {
  const currentProfile = it.next().value;
  //console.log(currentProfile);
  if (currentProfile === undefined) {
    window.location.reload();
  } else {
    document.querySelector(".image").innerHTML = `
  <ul class="list-group"> 
    <li class="list-group-item"><img src="${currentProfile.dp}" alt="${currentProfile.name}'s image">
    </li>
  </ul>
  `;

    document.querySelector(".profile").innerHTML = `
  <ul class="list-group"> 
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Email: ${currentProfile.email}</li>
  </ul>
  `;
  }
}
