let checked = false;
document.querySelector(".model_telephone__box2").addEventListener("click", ()=>{
    if(checked){
        body.classList.remove("block_scroll");
    } else {
        body.classList.add("block_scroll");
    }
    checked = !checked;
});
////////////////////
let header = document.querySelector('.top');
// const first = document.querySelector('.first');
// const headerHeight = header.offsetHeight;
// const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance > lastScrollTop) {
		header.classList.remove('header--fixed');
		// first.style.marginTop = null;
	} else {
		header.classList.add('header--fixed');
		// first.style.marginTop = `${headerHeight}px`;
	}

	if (scrollDistance === 0) {
		header.classList.remove('header--fixed');
		// first.style.marginTop = null;
	}

	lastScrollTop = scrollDistance;
});