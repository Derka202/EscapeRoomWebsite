function adjustHeaderMargin() {
    console.log('Adjusting header margin...');
    const nav = document.querySelector('nav');
    const wrapper = document.getElementById('page-content');
    if (nav && wrapper) {
        wrapper.style.paddingTop = nav.offsetHeight + 'px';
    }
}

window.addEventListener('DOMContentLoaded', adjustHeaderMargin);
window.addEventListener('load', adjustHeaderMargin);
window.addEventListener('resize', adjustHeaderMargin);