!function () {
    var view = document.querySelector('#topNavBarStick')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            window.addEventListener('scroll', () => {
                if (scrollY > 0) {
                    this.active()
                }
                else {
                    this.remove()
                }
            })
        },
        active: function () {
            this.view.classList.add('active')
        },
        remove: function () {
            this.view.classList.remove('active')
        }
    }
    controller.init(view)
}.call()