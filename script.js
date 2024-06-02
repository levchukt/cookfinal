let cotlety_btn = document.querySelector('.cotlety')
let ryba_btn = document.querySelector('.ryba')
let tynec_btn = document.querySelector('.tynec')
let kurka_btn = document.querySelector('.kyrka')
let potato_btn = document.querySelector('.potato')
let kaprese_btn = document.querySelector('.kaprese')


let info = document.querySelector('.info')
let recipes_cnt = document.querySelector('.recipes')

cotlety_btn.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Курячі котлети з сиром та грибами</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">500 г курячого фаршу</li>
                    <li class="recipe_item">100 г твердого сиру</li>
                    <li class="recipe_item">200 г печериць</li>
                    <li class="recipe_item">1 цибулина</li>
                    <li class="recipe_item">1 яйце</li>
                    <li class="recipe_item">2 зубчики часнику</li>
                    <li class="recipe_item">3 ст. л. панірувальних сухарів</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Цибулю та часник дрібно нарізати. Гриби нарізати скибочками</li>
                    <li class="recipe_item">Розігріти сковороду з рослинною олією та обсмажити цибулю до золотистого кольору. Додати
                        часник і гриби, смажити ще 5
                        хвилин</li>
                    <li class="recipe_item">Змішати курячий фарш, яйце, тертий сир, обсмажені гриби з цибулею та часником, сіль та
                        перець</li>
                    <li class="recipe_item">З фаршу сформувати котлети, обваляти їх у панірувальних сухарях</li>
                    <li class="recipe_item">Розігріти сковороду з вершковим маслом та обсмажити котлети з обох боків до золотистої
                        скоринки</li>
                    <li class="recipe_item">Додати трохи води або вершків на сковороду, накрити кришкою та тушкувати котлети на
                        повільному вогні 15-20 хвилин</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

ryba_btn.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Риба, запечена з овочами</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">500 г філе білої риби</li>
                    <li class="recipe_item">200 г помідорів</li>
                    <li class="recipe_item">1 цукіні</li>
                    <li class="recipe_item">1 цибулина</li>
                    <li class="recipe_item">1 баклажан</li>
                    <li class="recipe_item">1 болгарський перець</li>
                    <li class="recipe_item">2 ст. л. оливкової олії</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Рибу нарізати порційними шматками, посолити, поперчити та скропити лимонним соком.</li>
                    <li class="recipe_item">Овочі нарізати кубиками</li>
                    <li class="recipe_item">У форму для запікання викласти рибу, а зверху - овочі</li>
                    <li class="recipe_item">Полити оливковою олією та посипати травами</li>
                    <li class="recipe_item">Запікати в духовці, розігрітій до 200°C, протягом 20-25 хвилин</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})


tynec_btn.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Салат з тунцем та квасолею</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">1 банка консервованого тунця</li>
                    <li class="recipe_item">1 банка консервованої квасолі</li>
                    <li class="recipe_item">1 огірок</li>
                    <li class="recipe_item">1 помідор</li>
                    <li class="recipe_item">1 цибулина</li>
                    <li class="recipe_item">2 ст. л. лимонного соку</li>
                    <li class="recipe_item">1/4 склянки оливкової олії</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Злити рідину з тунця та квасолі</li>
                    <li class="recipe_item">Нарізати огірок, помідор та цибулю кубиками</li>
                    <li class="recipe_item">У великій мисці змішати тунець, квасолю, огірок, помідор, цибулю (якщо використовуєте), оливкову олію, лимонний сік, часник, сіль та перець</li>
                    <li class="recipe_item">Добре перемішати та подавати</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})
kurka_btn.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Салат з куркою та грибами</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">200 г вареної курячої грудки</li>
                    <li class="recipe_item">200 г печериць</li>
                    <li class="recipe_item">1/4 склянки майонезу</li>
                    <li class="recipe_item">1 болгарський перець</li>
                    <li class="recipe_item">1 цибулина</li>
                    <li class="recipe_item">1 ст. л. лимонного соку</li>
                    <li class="recipe_item">Сіль та перець за смаком</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Нарізати курячу грудку кубиками, а печериці, цибулю та болгарський перець - скибочками</li>
                    <li class="recipe_item">У великій мисці змішати курячу грудку, печериці, цибулю, болгарський перець, майонез, гірчицю, лимонний сік, сіль та перець</li>
                    <li class="recipe_item">Добре перемішати та подавати</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})



potato_btn.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Картопля по селянські</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">1 кг картоплі</li>
                    <li class="recipe_item">2-3 цибулі</li>
                    <li class="recipe_item">2-3 моркви</li>
                    <li class="recipe_item">2-3 столові ложки рослинної олії або свинячої жиру</li>
                    <li class="recipe_item">Сіль та перець за смаком</li>
                    <li class="recipe_item">Свіжі зелені трави для прикраси (петрушка, кріп тощо, за бажанням)</li>

                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Почистіть картоплю, моркву та цибулю. Наріжте картоплю на кубики або кружечки, а моркву та цибулю - соломкою або кубиками.</li>
                    <li class="recipe_item">Розігрійте олію або жир у великій сковороді на середньому вогні.</li>
                    <li class="recipe_item">Додайте нарізану цибулю та моркву до розігрітої олії або жиру і смажте, помішуючи, до того часу, поки овочі не стануть м'якими та золотистими (це займе близько 5-7 хвилин).</li>
                    <li class="recipe_item">Додайте нарізану картоплю до сковороди з цибулею та морквою. Підсмажте її разом з іншими овочами, періодично помішуючи, щоб уникнути пригоряння, до того часу, поки картопля не стане м'якою (близько 15-20 хвилин).</li>
                    <li class="recipe_item">Під час смаження додайте сіль та перець за смаком.</li>
                    <li class="recipe_item">Після того, як картопля готова, приберіть сковороду з вогню.</li>
                    <li class="recipe_item">Прикрасьте картоплю по селянськи свіжими зеленими травами, такими як петрушка або кріп.</li>
                    <li class="recipe_item">Подавайте гарячою як основну страву або гарнір до м'ясних або рибних страв.</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})


kaprese_btn.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Капрезе</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">Свіжі помідори (найкраще використовувати спелі помідори різних кольорів для красивого вигляду)і</li>
                    <li class="recipe_item">Моцарела (можна взяти кульки моцарели або зрізати її на тонкі пластини)</li>
                    <li class="recipe_item">Свіжа базиліка</li>
                    <li class="recipe_item">Оливкова олія екстра-класу</li>
                    <li class="recipe_item">Бальзамічний оцет (за бажанням)</li>
                    <li class="recipe_item">Сіль та свіжомелений чорний перець</li>

                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Почистіть помідори і наріжте їх на тонкі кружечки або пластинки.</li>
                    <li class="recipe_item">Покладіть кружечки (або пластинки) помідорів на сервірувальну тарілку або плоский дисплей для подачі.</li>
                    <li class="recipe_item">Поруч з помідорами розмістіть кульки моцарели або тонкі пластини моцарели.</li>
                    <li class="recipe_item">Вирвіть листочки базиліка та розмістіть їх на кружечках помідорів та моцарели.</li>
                    <li class="recipe_item">Злегка полийте оливковою олією кожен шар (помідори, моцарела, базилік). .</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})
