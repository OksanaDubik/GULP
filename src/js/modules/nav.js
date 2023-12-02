function nav() {
    const activePage = document.querySelectorAll(".header-nav__list li a")

    activePage.forEach((el) => {
        el.addEventListener('click', function (event) {
            const activeClass = document.querySelectorAll(".active")
            if (activeClass.length > 0) {
                activeClass.forEach(elem => {
                    elem.classList.remove("active")
                })
            }
            event.currentTarget.classList.add('active')
        })
    })
}

export default nav;