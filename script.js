const sections = document.querySelectorAll('.section');
const progressBar = document.querySelector('.progress');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentSectionIndex = 0;

function updateProgressBar() {
    const progress = (currentSectionIndex / (sections.length - 1)) * 100;
    progressBar.style.width = progress + '%';
}

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
    currentSectionIndex = index;
    updateProgressBar();
}

prevButton.addEventListener('click', () => {
    if (currentSectionIndex > 0) {
        scrollToSection(currentSectionIndex - 1);
    }

    nextButton.innerHTML = "Next"
});

nextButton.addEventListener('click', () => {
    if (currentSectionIndex >= 5)
        window.location.href = "card.html"    

    if (currentSectionIndex < sections.length - 1) {
        scrollToSection(currentSectionIndex + 1);
    }

    if (currentSectionIndex == 5) {
        nextButton.innerHTML = "Go"
    }

    else {
        nextButton.innerHTML = "Next"
    }
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionIndex = index;
            updateProgressBar();
        }
    });
});

function popUp(index) {
    htmls = [
        `<p>Hello😅toh ye program aise hi bnaye the aur ye wala code jyada acha bnaye nhi hai kuch normal sa hi hai🥲.aise hi bnaye the kyuki kuch baat karna tha nhi toh tum toh waise busy hi rehti hai 😅.khair mereko tum btayi nhi🤷.</p>`,
        `<p>Ki tum zoo se kab nikli mereko toh newspaper mein article dekh kar pta chala🤣par ye photo use Kiya tha woh log mereko samaj nhi aa raha hai isse better photo nhi tha wo log ke pass mere se le leta😅</p>`, 
        `<p>Ye dekh ye photo bhi acha hi hai waise😅cute toh lag rahi hai no 🧐 doubt🙂par khush mat tum sirf cute ho😅masoom ya shareef nhi 🤣shareef insaan ko dekhna hai toh aage dekho</p>`, 
        `<p>ye dekh ye hota hai perfect insaan😛shareef cute masumiyat ka statue ek dum bhagwan ka roop😅aur tereko sharam nhi aata itna masum sa bacha ko bigad Rahi h 🥲 bhagwan maaf nhi karenge🤣Tereko idea bhi hai</p>`, 
        `<p>Dekh itna pyara bacha cute maa ke aankho ka tara😮‍💨.Hum kuch nhi bol rahe hai tum khud dekho aur decide karo😊itna cute cuteness ka ganga beh raha hai masumiyat shehad ki tarah tapak raha hai aur tum aise bacha ko bigad rahi hai😤waise...</p>`, 
        `<p>Mazak hta hum jante hai abhi life me bahut zyada problem chal raha hai aur sab tension mein hai aur tereko bhi stress hai mereko bhi.Dekh hum jante hai tum kar legi 🤗 tension mat le .ye sab mera department hai stress ka😅.ye program hum bnaye the matlab iss tarah ka program tum pehle dekh chuki thi par kya kare😅ek baat bolna tha jaldi aur utna time hai nhi abhi mere pass ek Naya project bnaye scratch se bahut time lagta hai 🥲Par woh sab hta mereko tumse ye baat phir se puchna tha aur mereko lag toh Raha hai hi ki hum Aaj phir se royenge aur ro ke so jayenge par 😅himmat karke puch rahe hai.click next🙏</p>`
    ]

    Swal.fire({
        html: htmls[index],
    });
}


Swal.fire({
    html: `<p>Toh aa hi gyi 😅Mera Maan toh nhi kar Raha tha tumko password Dene ka 🥲par chalo ab aa gyi hai toh dekh lo aur jawab do😅.rules same hai click photos for message ✉️
    </p>`
})
