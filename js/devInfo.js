'use strict';

let teamMembersSection = document.getElementById('teamMembers');

let devNames = ['Mohammad Khalil', 'Yasseen Saeed', 'Wasem idrees', 'Hassan Hamdan', 'Heba Al-Taweel', 'Hasnaa Al-Habahbeh'];
let devImage = ['./img/devs/Mohd.jpg', './img/devs/Yaseen.jpg', './img/devs/Waseem.jpg', './img/devs/Hassan.jpg', './img/devs/Heba.jpg', './img/devs/Hasnaa.jpg'];
let devMajor = ['Architect from Al-Quds College, 2013 ', 'Electrical Engineer from The Hashimate University, 2021 ', 'Software Engineering from BAU University', 'Geologist from Al-Yarmouk University', 'Biology', 'Electrical Engineer from The University of Jordan, 2021'];
let devFacts = [' I have good experience in IT and Designing, becoming a programer in 2021 Inshallah', 'Becoming artificial intelligence programmer in 2022', 'I i want to become a web developer developer', 'I Am Currently Working On Completing my Professional Programmer Track To Become Full Stack Developer', 'Bioinformatics lover with belief in continuous learning In each day. With every line of code , I strive to make the web a beautiful place.', 'I like cats'];
let gitHubLink = ['https://github.com/moegts', 'https://github.com/yaseen1998', 'https://github.com/WasemIdres', 'https://github.com/HassanHamdanDev', 'https://github.com/hebahome', 'https://github.com/hasnaa38'];



//--------> Constructor function <--------
function TeamMembers(name, image, major, facts, gitHubAcc) {
  this.name = name;
  this.image = image;
  this.major = major;
  this.facts = facts;
  this.gitHubAcc = gitHubAcc;
  TeamMembers.all.push( this );
}

TeamMembers.all = [];

//--------> Creating objects <--------

for (let i=0; i<devNames.length; i++) {
  new TeamMembers (devNames[i], devImage[i], devMajor[i], devFacts[i], gitHubLink[i]);
}

//--------> Rendering each object <--------

function render() {
  for (let i=0; i<devNames.length; i++) {
    let memberDiv = document.createElement('div');
    memberDiv.className = 'memberDiv';
    teamMembersSection.appendChild(memberDiv);

    let memberImage = document.createElement('img');
    memberImage.src = TeamMembers.all[i].image;
    memberDiv.appendChild(memberImage);

    let memberDiv1 = document.createElement('div1');
    memberDiv1.className = 'memberDiv1';
    memberDiv.appendChild(memberDiv1);

    let memberName = document.createElement('h2');
    memberName.textContent =TeamMembers.all[i].name;
    memberDiv1.appendChild(memberName);

    let memberMajor = document.createElement('p');
    memberMajor.textContent = TeamMembers.all[i].major;
    memberDiv1.appendChild(memberMajor);

    let memberFacts = document.createElement('p');
    memberFacts.textContent = TeamMembers.all[i].facts;
    memberDiv1.appendChild(memberFacts);

    let memberGHA = document.createElement('a');
    memberGHA.href = TeamMembers.all[i].gitHubAcc;
    memberDiv1.appendChild(memberGHA);

    let memberGHButton = document.createElement('button');
    memberGHButton.textContent = 'GitHub';
    memberGHA.appendChild(memberGHButton);
  }

}

render();
