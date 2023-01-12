const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "CEO",
        img: "images/member-1.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member1"
    },
    {
        id: 2,
        name: "Jadon Sancho",
        job: "UX Designer",
        img: "images/member-2.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member2"
    },
    {
        id: 3,
        name: "Sara Jones",
        job: "Frontend Developer",
        img: "images/member-3.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member3"
    },
    {
        id: 4,
        name: "Marcus Maguire",
        job: "Backend Developer",
        img: "images/member-4.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member4"
    },
    {
        id: 5,
        name: "Reece James",
        job: "Full-Stack Developer",
        img: "images/member-5.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member5"
    },
    {
        id: 6,
        name: "Anna Smith",
        job: "UI Designer",
        img: "images/member-6.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member6"
    },
    {
        id: 7,
        name: "Scott Robertson",
        job: "Web Developer",
        img: "images/member-7.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member7"
    },
    {
        id: 8,
        name: "John Kane",
        job: "Web Developer",
        img: "images/member-8.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member8"
    },
    {
        id: 9,
        name: "Samantha James",
        job: "Web Designer",
        img: "images/member-9.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member9"
    }
]

const leftBtn = document.querySelector('[data-left-button]');

const rightBtn = document.querySelector('[data-right-button]');

const btnSurpriseMe = document.querySelector('[data-bottom-button]');


const profilePhoto = document.querySelector('[data-profile-photo]');

const profileName = document.querySelector('[data-profile-name]');

const profileJob = document.querySelector('[data-profile-job]');

const profileDesc = document.querySelector('[data-profile-desc]');

let index = 0;


function setReviews() {
    if (index >= 0 && index <= 8) {
        profilePhoto.setAttribute("src", reviews[index].img);
        profileName.innerHTML = reviews[index].name;
        profileJob.innerHTML = reviews[index].job;
        profileDesc.innerHTML = reviews[index].text;
    }
}


window.addEventListener("DOMContentLoaded", setReviews);

leftBtn.addEventListener('click', () => {
    index--;
    if (index < 0)
        index = 8;

    setReviews();
})


rightBtn.addEventListener('click', () => {
    index++;
    if (index > 8)
        index = 0;

    setReviews();
})

btnSurpriseMe.addEventListener('click', () => {
    index = Math.floor(Math.random() * 9);

    setReviews();
})

