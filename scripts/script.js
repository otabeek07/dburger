const product = {
    crazy: {
        name: 'Crazy',
        price: 31000,
        img: 'images/products/burger-1.png',
        amount: 0,
        get totalPrice() {
            return this.amount * this.price
        }
    },
    light: {
        name: 'Light',
        price: 26000,
        img: 'images/products/burger-2.png',
        amount: 0,
        get totalPrice() {
            return this.amount * this.price
        }
    },
    cheeseburger: {
        name: 'CheeseBurger',
        price: 29000,
        img: 'images/products/burger-3.png',
        amount: 0,
        get totalPrice() {
            return this.amount * this.price
        }
    },
    dburger: {
        name: 'dBurger',
        price: 24000,
        img: 'images/products/burger-4.png',
        amount: 0,
        get totalPrice() {
            return this.amount * this.price
        }
    }
}


const productBtns = document.querySelectorAll('.wrapper__list-btn'),
    basketBtn = document.querySelector('.wrapper__navbar-btn'),
    basketModal = document.querySelector('.wrapper__navbar-basket'),
    closeBasketModal = document.querySelector('.wrapper__navbar-close'),
    basketChecklist = document.querySelector('.wrapper__navbar-checklist'),
    basketBtnCount = document.querySelector('.wrapper__navbar-count'),
    btnCard = document.querySelector('.wrapper__navbar-bottom'),
    totalPriceBasket = document.querySelector('.wrapper__navbar-totalprice'),
    modalChecklist = document.querySelector('.modal'),
    modalOverlay = document.querySelector('.overlay'),
    closeModalBtn = document.querySelector('.close__modal'),
    modalContent = document.querySelector('.content'),
    modalOrder = document.querySelector('.modal__order')


productBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        plusOrMinus(btn)
    })
})

function plusOrMinus(btn) {
    //closest() берет ближайшего родителя обращается по селекторам 
    let parent = btn.closest('.wrapper__list-card'),
        parentId = parent.getAttribute('id')
    product[parentId].amount++
    basket()
}

function basket() {
    const productArray = []
    for (const key in product) {
        const po = product[key]
        const productCard = document.querySelector(`#${po.name.toLowerCase()}`),
            parentIndecator = productCard.querySelector('.wrapper__list-count')
        if (po.amount) {
            productArray.push(po)
            parentIndecator.classList.add('active')
            parentIndecator.innerHTML = po.amount
        }

    }
}