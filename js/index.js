const btns = document.querySelectorAll('[data-modal]')
const modal = document.querySelector('.modal')
const close = document.querySelector('[data-close]')
const slides = document.querySelectorAll('.offer__slide');
const prev = document.querySelector('.offer__slider-prev');
const next = document.querySelector('.offer__slider-next');
const current = document.querySelector('#current');
const total = document.querySelector('#total');
const tabs = document.querySelectorAll('.tabcontent')
const tabs_btn = document.querySelectorAll('.tabheader__item')
const gender_btns = document.querySelectorAll('#gender .calculating__choose-item')
const acts = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const res_view = document.querySelector('#res_view')

btns.forEach(btn => {
        btn.onclick = () => {
                modal.classList.add('show')
        }
});
close.onclick = () => {
        modal.classList.remove('show')
}

function tabsShow(idx) {
        tabs.forEach((tab) => tab.classList.add('hide' , 'fade'))
        tabs[idx].classList.remove('hide')
}

tabsShow(0)

tabs_btn.forEach((btn , idx) => {
        btn.onclick = () => {
                tabsShow(idx)
                document.querySelector('.tabheader__item_active').classList.remove('tabheader__item_active')
                btn.classList.add('tabheader__item_active')
        }
})

let slideIndex = 1;

function slidesShow(n) {
        if (n > slides.length) {
                slideIndex = 1;
        } 

        if (n < 1) {
                slideIndex = slides.length;
        }

        slides.forEach((slide) => {
                slide.classList.add('hide');
		slide.classList.add('fade')
        });

        slides[slideIndex - 1].classList.remove('hide');

        if (slideIndex > 10) {
                current.innerHTML = slideIndex;
        } else {
                current.innerHTML = `0${slideIndex}`;
    }
}

slidesShow(slideIndex);

next.onclick = () => {
        slideIndex++;
        slidesShow(slideIndex);
};

prev.onclick = () => {
        slideIndex--;
        slidesShow(slideIndex);
};

total.innerHTML = slides.length 
if (slideIndex > 10) {
        current.innerHTML = slideIndex;
} else {
        current.innerHTML = `0${slideIndex}`;
}

let deadline = '2024-06-16 00:00'
let deadlineNewYear = '2024-12-31 23:59'

function getRemainigTime(endTime) {
    const t = Date.parse(endTime) - Date.now(),
        days = Math.floor((t / 1000) / 60 / 60 / 24),
        hours = Math.floor((t / 1000) / 60 / 60 % 24),
        minutes = Math.floor((t / 1000) / 60 % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }

}
function setTimer(endTime, selector) {
    const t = document.querySelector(selector),
        days = t.querySelector('#days'),
        hours = t.querySelector('#hours'),
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds'),
        interval = setInterval(updateTimer, 1000)


function updateTimer() {
    const t = getRemainigTime(endTime)

    if (t.t <= 0) {
		clearInterval(interval)   
		days.innerHTML = 0
		hours.innerHTML = 0 
		minutes.innerHTML = 0
		seconds.innerHTML = 0
		confetti({
				particleCount: 300,
				startVelocity: 50,
				spread: 500,
				origin: {
						x: Math.random(),
						y: Math.random() - 0.2
				}
		});
	}

	days.innerHTML = t.days
	hours.innerHTML = t.hours
	minutes.innerHTML = t.minutes
	seconds.innerHTML = t.seconds

    }

}


setTimer(deadline, '.timer.two')
setTimer(deadlineNewYear, '.timer.one')



const user_data = {
	gender: 'woman',
	act: 'small'
}

gender_btns.forEach(btn => {
	btn.onclick = () => {
		user_data.gender = btn.getAttribute('data-gender')
		gender_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
		btn.classList.add('calculating__choose-item_active')
	}
})
inputs.forEach(inp => {
        inp.onkeyup = () => {
                user_data[inp.id] = inp.value
        }
})
acts.forEach(btn => {
	btn.onclick = () => {
		acts.forEach(item => item.classList.remove('calculating__choose-item_active'))
		btn.classList.add('calculating__choose-item_active')
        const act = +btn.getAttribute('data-act')

        let result = 0

        if (user_data.gender === 'women') {
            result = 655.1 + (9.563 * user_data.weight) + (1.85 * user_data.height) - (4.676 * user_data.age)
        } else {
            result = 66.5 + (13.75 * user_data.weight) + (5.003 * user_data.height) - (6.775 * user_data.age)
        }
        
        res_view.innerHTML = Math.round(result * act)
	}
})
const scrool_one = document.querySelector('#scrool_one') 
const scrool_two = document.querySelector('#scrool_two')
scrool_one.onclick = () => {
    var desiredHeight = 3400; 

    window.scrollTo({
        top: desiredHeight,
        behavior: "smooth"
    });
} 
scrool_two.onclick = () => {
    var desiredHeight = 1100; 

    window.scrollTo({
        top: desiredHeight,
        behavior: "smooth"
    });
} 
