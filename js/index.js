const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
let person_name = document.querySelector(".name")
let job = document.querySelector(".job")
let review_img = document.querySelector(".review_img")
let description = document.querySelector(".description")
let surprise_btn = document.querySelector(".surprise")
let prev_btn = document.querySelector(".prev_btn")
let next_btn = document.querySelector(".next_btn")
let currentitem = 0
window.addEventListener("load", () => {
    show_person(currentitem)
})
next_btn.addEventListener("click", () => {
    currentitem++;
    if (currentitem > reviews.length - 1) { currentitem = 0 }
    show_person(currentitem)
})

prev_btn.addEventListener("click", () => {
    currentitem--;
    if (currentitem < 0) { currentitem = reviews.length - 1 }
    show_person(currentitem)
})
surprise_btn.addEventListener("click", () => {
    currentitem = Math.round(Math.random() * reviews.length)
    show_person(currentitem)
})
function show_person(currentitem) {
    let item = reviews[currentitem]
    person_name.textContent = item.name;
    review_img.src = item.img;
    job.textContent = item.job;
    description.textContent = item.text
}