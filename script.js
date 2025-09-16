const themes = document.getElementsByClassName('themes');

for (const theme of themes) {
    theme.addEventListener("click", () => {

        if (theme.dataset.theme === 'light') {
            themes[1].classList.remove('d-none');
            localStorage.setItem('theme', 'dark');
        }
        if (theme.dataset.theme === 'dark') {
            themes[0].classList.remove('d-none');
            localStorage.setItem('theme', 'light');
        }
        
        theme.classList.toggle('d-none');
        document.body.classList.toggle('dark');
    })
}

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.remove('dark');
    themes[0].classList.remove('d-none');
    themes[1].classList.add('d-none');
}
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themes[0].classList.add('d-none');
    themes[1].classList.remove('d-none');
}

const currentPage = window.location.pathname;
const contactPage = '/portfolio/contact.html';

if (currentPage !== contactPage) {
    let currentLocation = window.scrollY;
    window.addEventListener("scroll", () => {
        const backToTop = document.getElementsByClassName('back-to-top')[0];
        const topNav = document.getElementsByTagName('nav')[0];

        if (window.scrollY > 16 || window.scrollY > currentLocation) {
            backToTop.classList.remove("d-none");
            topNav.classList.remove("d-none");
        } else {
            backToTop.classList.add("d-none");
            topNav.classList.add("d-none");
        }
        currentLocation = window.scrollY;
    })
}

const radios = document.getElementsByTagName("input");
for (r of radios) {
    const id = r.value;
    r.addEventListener("change", function () {
        const allblogs = document.getElementsByClassName("blog-content");

        if (id == "all") {
            for (a of allblogs) {
                a.classList.remove("d-none");
            }
        }
        else {
            for (a of allblogs) {
                a.classList.add("d-none");
            }
            let datasetName = "data-category=" + id;
            let blogs = document.querySelectorAll('[' + datasetName + ']');

            for (b of blogs) {
                b.classList.remove("d-none");
            }
        }
    });
}

const resumeCV = '/portfolio/resume.html';
if (currentPage === resumeCV) {
    const dl_cv_btn = document.querySelector('.download-cv');
    dl_cv_btn.addEventListener('click', () => {
        window.open('Win Win Maw_cv.pdf', '_blank');
    });
}


const resumePage = '/portfolio/resume.html';
if (currentPage === resumePage) {
    const dl_btn = document.querySelector('.download-resume');
    dl_btn.addEventListener('click', () => {
        window.open('Win Win Maw.pdf', '_blank');
    });
}


const resumeJpPage = '/portfolio/resume.html';
if (currentPage === resumeJpPage) {
    const dl_btn = document.querySelector('.download-jp-cv');
    dl_btn.addEventListener('click', () => {
        window.open('履歴書（ウィンウィンモー） IT.docx', '_blank');
    });
}