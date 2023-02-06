/* Dynamically creation of elements in the horizontal and vertical menu */
const sections = document.querySelectorAll('main > section');
let text = `
    <a href="./dist/resume.pdf" class="btn-resume hide" target="_blank">
        resume
    </a>
    <div class="theme-toggle">
        <svg class="moon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" />
        </svg>
        <svg class="sun" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" />
        </svg>
    </div>
`;

for (let i = sections.length - 1; i > 0; i--) {
    const newText = `
        <div class="item-hide" style="transition-delay:${(sections.length - i) * 200}ms;" >
            <span class="section-index">0${i}.</span><a href="#${sections[i].id}" class="header-link" data-title="${sections[i].id}">${sections[i].id.replace(/-/g, ' ')}</a>
        </div>
    `;
    text = newText + text;
}

document.querySelector('.menu-horizontal-list').innerHTML = document.querySelector('.menu-vertical-list').innerHTML = text;


/* Toggle theme mode */
const darkToggles = document.querySelectorAll('.moon');
const lightToggles = document.querySelectorAll('.sun');

document.querySelectorAll('.theme-toggle').forEach((el) => {
    el.addEventListener('click', () => {
        if (document.body.dataset.theme !== 'light')
            document.body.dataset.theme = 'light';
        else
            document.body.dataset.theme = 'dark';
        coloringSvgPath(document.body.dataset.theme);
        localStorage.setItem('theme', document.body.dataset.theme);

        darkToggles.forEach(async (t) => {
            t.classList.add('clicked');
            await new Promise((res, rej) => setTimeout(res, 500));
            t.classList.remove('clicked');
        });
        lightToggles.forEach(async (t) => {
            t.classList.add('clicked');
            await new Promise((res, rej) => setTimeout(res, 500));
            t.classList.remove('clicked');
        });
    })
});


/* Adding .item-hide on different elements of the sections */
const itemsHero = document.querySelectorAll('#hero > *');
const h2 = document.querySelectorAll('main section h2');

itemsHero.forEach((el, i) => {
    el.style.cssText += `transition-delay:${(i + 1) * 300}ms;`;
    el.classList.add('item-hide');
});

h2.forEach(el => {
    el.style.cssText += `transition-delay:300ms;`;
    el.classList.add('item-hide');
});


/* Adding index number before every h2 section text */
document.querySelectorAll('main section h2').forEach((el, i) => {
    el.innerHTML = `<span class="section-index">0${i + 1}.</span> ${el.innerText}`;
});


/* First time an element .item-hide appear, an entry effect is activate */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('item-show');
    });
});

document.querySelectorAll('.item-hide').forEach(el => observer.observe(el));


/* Scrolling page up or down, it checks how to set the header with classes */
const header = document.querySelector('header');
// const h2 already defined
// const h2 = document.querySelectorAll('main section h2');
const menuHorizontalMovers = document.querySelectorAll('.menu-horizontal-list .header-link');
let oldScroll = newScroll = 0;

window.addEventListener('scroll', () => {
    newScroll = window.pageYOffset;
    if (newScroll >= 100)
        header.classList = newScroll > oldScroll ? 'header-hide' : 'header-show';
    else
        header.classList = '';
    oldScroll = newScroll;

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeightMedian = section.clientHeight / 3;
        if (newScroll > (sectionTop - sectionHeightMedian))
            current = section.getAttribute('id');
    });
    menuHorizontalMovers.forEach(mover => {
        mover.classList.remove('on-site');
        if (mover.dataset.title === current)
            mover.classList.add('on-site');
    });
});


/* Clicking on menu-vertical-burger toggling the menu */
const burger = document.querySelector('.menu-vertical-burger');
const verticalMenu = document.querySelector('.menu-vertical-list');

burger.addEventListener('click', () => {
    burger.classList.toggle('open-burger');
    verticalMenu.classList.toggle('showing-menu');
    document.body.classList.toggle('menu');
});


/* Clicking on an menu-vertical-list elements or logo close the menu */
function closingMenu() {
    document.querySelector('.menu-vertical-burger').classList.remove('open-burger');
    document.querySelector('.menu-vertical-list').classList.remove('showing-menu');
    document.body.classList.remove('menu');
}

document.querySelectorAll('.menu-vertical-list > *').forEach(el => {
    el.addEventListener('click', closingMenu);
});

document.querySelector('.logo').addEventListener('click', closingMenu);


/*
Resizing the screen from sm to md, always close the vertical menu.
Resizing the screen always resize the height of the carousel.
*/
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closingMenu();

    let maxY = 0;
    document.querySelectorAll('.slider-carousel-el').forEach((el) => {
        if (el.offsetHeight > maxY) {
            maxY = el.offsetHeight;
            carousel.style.cssText = 'height: ' + maxY + 'px;';
        }
    });
});


/* Creating elements for carousel from data */
const projects = [
    {
        title: 'boolflix',
        img: 'boolflix.png',
        description: 'Landing page that echoes the style of netflix. Through AJAX calls, API calls with the TMDB server are handled.',
        technologies: ['HTML', 'CSS', 'JS', 'Vue'],
        viewport: 'large screen',
        urlRepo: 'https://github.com/francesco-allera/vue-boolflix',
        urlSite: 'https://francesco-allera.github.io/vue-boolflix/'
    },
    {
        title: 'digital ocean replica',
        img: 'digital-ocean.png',
        description: 'Front-end replica of Digital Ocean landing page. Project created using Bootstrap\'s container->row->columns system, and developed from a mobile first perspective, so responsive on all devices.',
        technologies: ['HTML', 'CSS'],
        viewport: 'all screens',
        urlRepo: 'https://github.com/francesco-allera/html-css-digitalocean',
        urlSite: 'https://francesco-allera.github.io/html-css-digitalocean/'
    },
    {
        title: 'boolzapp',
        img: 'boolzapp.png',
        description: 'Reproduction of the WhatsApp web page application. Try chatting with quasi-artificial intelligence.',
        technologies: ['HTML', 'CSS', 'JS', 'Vue'],
        viewport: 'tablet or bigger screen',
        urlRepo: 'https://github.com/francesco-allera/vue-boolzapp',
        urlSite: 'https://francesco-allera.github.io/vue-boolzapp/'
    },
    {
        title: 'mid term project',
        img: 'mid-term-proj.png',
        description: 'Mid-course project in which, through all the front-end technologies learned, a predefined graphical mockup was to be replicated.',
        technologies: ['HTML', 'CSS', 'SASS', 'JS', 'Vue'],
        viewport: 'large screen',
        urlRepo: 'https://github.com/francesco-allera/proj-html-vuejs',
        urlSite: 'https://francesco-allera.github.io/proj-html-vuejs/'
    },
    {
        title: 'spotify web replica',
        img: 'spotify.png',
        description: 'Front-end replica of the Spotify Web landing page. Project developed on Flexbox responsive system with a mobile first perspective, so it\'s responsive on all devices.',
        technologies: ['HTML', 'CSS'],
        viewport: 'all screens',
        urlRepo: 'https://github.com/francesco-allera/html-css-spotifyweb',
        urlSite: 'https://francesco-allera.github.io/html-css-spotifyweb/'
    },
    {
        title: 'my burger',
        img: 'burger.png',
        description: 'First large project developed using JavaScript. Responsive on all devices. Try to order your own fake burger, but watch the price!',
        technologies: ['HTML', 'CSS', 'JS'],
        viewport: 'all screens',
        urlRepo: 'https://github.com/francesco-allera/js-burger',
        urlSite: 'https://francesco-allera.github.io/js-burger/'
    },
    {
        title: 'hubspot',
        img: 'hubspot.png',
        description: 'First large HTML and CSS based on the Hubspot page.',
        technologies: ['HTML', 'CSS'],
        viewport: 'large screen',
        urlRepo: 'https://github.com/francesco-allera/html-css-hubspot',
        urlSite: 'https://francesco-allera.github.io/html-css-hubspot/'
    }
];
const carousel = document.querySelector('.slider-carousel');

projects.forEach(async (el, i) => {
    carousel.innerHTML += `
        <div class="slider-carousel-el ${i === 0 ? 'active' : ''}" style="z-index:${i === 0 ? 1 : 0}">
            <img src="./dist/img/${el.img}" alt="${el.title}">
            <h3>${el.title}</h3>
            <p>${el.description}</p>
            <p>
                <small>Technologies used: ${el.technologies.join(', ')}.</small>
            </p>
            <p>See the
                <a href="${el.urlRepo}" target="_blank">
                    <strong><u>code</u></strong>
                </a>
                or
                <a href="${el.urlSite}" target="_blank">
                    <strong><u>try it</u></strong>
                </a>
                (${el.viewport})
            </p>
        </div>
    `;
});


/* Slider with child one on top each other */
const left = document.querySelector('.slider-left');
const right = document.querySelector('.slider-right');
let projectChild = 1;

async function going(movement) {
    projectChild += movement;
    if (projectChild > projects.length) projectChild = 1;
    if (projectChild < 1) projectChild = projects.length;

    const active = document.querySelector('.slider-carousel-el.active');
    const next = document.querySelector('.slider-carousel-el:nth-child(' + projectChild + ')');

    active.classList.remove('active');
    active.style.cssText = 'z-index: 0;';
    await new Promise((res, rej) => setTimeout(res, 200));
    next.style.cssText = 'z-index: 1;';
    next.classList.add('active');
}

left.addEventListener('click', () => going(-1));
right.addEventListener('click', () => going(1));


/* Automate the slider with going(+1) every 5 seconds, it stops if mouseover it and restarts if mouseout */
const slider = document.querySelector('.slider');

function automateSlide() {
    let timing;
    function timer() {
        timing = setInterval(() => right.click(), 5000);
    }

    slider.addEventListener('mouseover', () => clearInterval(timing));
    slider.addEventListener('mouseout', () => timer());

    going(0);
    timer();
}


/* Launching the automate slider the first time it appears on screen */
let launchingSlider = false;

const observerSlider = new IntersectionObserver((sliders) => {
    sliders.forEach(el => {
        if (el.isIntersecting && !launchingSlider) {
            launchingSlider = true;
            automateSlide();
        }
    });
});

document.querySelectorAll('.slider').forEach(el => observerSlider.observe(el));



/*  */
const pointers = document.querySelectorAll('footer .pointer');

const observerFooter = new IntersectionObserver(footer => {
    footer.forEach((el) => {
        if (el.isIntersecting)
            pointers.forEach(el2 => el2.style.cssText = 'opacity:0;visibility:hidden;');
    });
});

document.querySelectorAll('footer').forEach(el => observerFooter.observe(el));


/* svg>path setted on color, mouseenter turn their colors back, mouseleave reset the white */
function coloringSvgPath(theme) {
    let color = theme === 'dark' ? '#fff' : '#000';
    document.querySelectorAll('ul.skills-list li').forEach((el) => {
        const paths = el.querySelectorAll(':is(path, circle)');

        paths.forEach(path => path.style.cssText = 'fill:'+ color + ';');

        el.addEventListener('mouseenter', () => paths.forEach(path => path.style.cssText = ''));
        el.addEventListener('mouseleave', () => paths.forEach(path => path.style.cssText = 'fill:'+ color + ';'));
    });
}


/* Handling the form-mail */
function validateName(str) {
    const regex = /^[a-zA-Z ]{3,30}$/;
    return regex.test(str);
}
function validateEmail(str) {
    // const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(str);
}
function validating(HTMLel, validation, event) {
    if (validation) {
        event.preventDefault();
        return HTMLel.classList.add('required');
    }
    HTMLel.classList.remove('required');
}

const naming = document.querySelector('.form-mail input[name="name"]');
const email = document.querySelector('.form-mail input[name="email"]');
const subject = document.querySelector('.form-mail input[name="subject"]');
const msg = document.querySelector('.form-mail textarea[name="message"]');

document.querySelector('.form-mail .btn-mail').addEventListener('click', e => {
    validating(naming, !validateName(naming.value), e);
    validating(email, !validateEmail(email.value), e);
    validating(subject, subject.value.length <= 5, e);
    validating(msg, msg.value.length <= 10, e);
});


/* Typewriting on #hero (launched on window 'load') */
function typewriting() {
    const intro = document.getElementById('intro');
    const dot = document.getElementById('dot');
    const words = ['Front-End', 'Back-End', 'Full Stack Web Developer'];
    let idxWords = idxStr = 0;

    const writing = setInterval(() => {
        intro.innerText = words[idxWords].slice(0, idxStr);

        if (idxWords === words.length - 1 && idxStr === words[words.length - 1].length) {
            clearInterval(writing);
            setTimeout(() => dot.innerText = '.', 250);
        } else {
            if (idxStr === -words[idxWords].length) {
                idxWords++;
                idxStr = 0;
            } else {
                if (idxStr < 0 && idxStr > -words[idxWords].length) idxStr--;
                if (idxStr === words[idxWords].length) idxStr = -1;
                if (idxStr >= 0 && idxStr < words[idxWords].length) idxStr++;
            }
        }
    }, 200);
}


/*
Getting the default or previously choised theme, and apply it.
Opacing #loader, after transition body and #app get displayed, finally #loader removed.
Getting the max height from every carousel child, then the carousel parent get that height.
Coloring the svg path on all .skills-list
After 2 seconds, launching the typewriting() for #hero.
*/
window.addEventListener('load', async () => {
    if (localStorage.getItem('theme'))
        document.body.dataset.theme = localStorage.getItem('theme');
    else
        document.body.dataset.theme = 'dark';
    coloringSvgPath(document.body.dataset.theme);

    document.getElementById('loader').style.cssText = 'opacity:0;';
    await new Promise((res, rej) => setTimeout(res, 250));
    document.body.classList.remove('menu');
    document.getElementById('app').style.cssText = '';
    document.getElementById('loader').remove();

    let maxY = 0;
    document.querySelectorAll('.slider-carousel-el').forEach((el) => {
        if (el.offsetHeight > maxY) {
            maxY = el.offsetHeight;
            carousel.style.cssText = 'height: ' + maxY + 'px;';
        }
    });

    await new Promise((res, rej) => setTimeout(res, 2000));
    typewriting();
});
