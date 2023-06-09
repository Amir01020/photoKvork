let d = document
let contentBox = d.querySelector('.contentBox')
let myswiperWraper = d.querySelector('.myswiperWraper')
function photoCrieyt(text1, coment1, video1Src, video2Src, text2, coment2) {
    const box1 = document.createElement('div');
    box1.classList.add('box1');
    const block1 = document.createElement('div');
    block1.classList.add('block');

    const heading1 = document.createElement('h3');
    heading1.textContent = text1;

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = coment1;

    block1.appendChild(heading1);
    block1.appendChild(paragraph1);

    const block2 = document.createElement('div');
    block2.classList.add('block');

    const video1 = document.createElement('img');
    video1.setAttribute('src', video1Src);

    block2.appendChild(video1);

    box1.appendChild(block1);
    box1.appendChild(block2);

    const box2 = document.createElement('div');
    box2.classList.add('box2');

    const block3 = document.createElement('div');
    block3.classList.add('block');

    const video2 = document.createElement('img');
    video2.setAttribute('src', video2Src);

    block3.appendChild(video2);

    const block4 = document.createElement('div');
    block4.classList.add('block');

    const heading2 = document.createElement('h3');
    heading2.textContent = text2;

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = coment2;

    block4.appendChild(heading2);
    block4.appendChild(paragraph2);

    box2.appendChild(block3);
    box2.appendChild(block4);
    contentBox.append(box1)
    contentBox.append(box2)
}
function swipers(imgas, comment, name, star) {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide', 'slayd');

    const elem = document.createElement('div');
    elem.classList.add('elem');

    const imgs = document.createElement('div');
    imgs.classList.add('imgs');

    const img = document.createElement('img');
    img.setAttribute('src', imgas);
    img.setAttribute('alt', '');

    imgs.appendChild(img);

    const coment = document.createElement('div');
    coment.classList.add('coment');

    const vb = document.createElement('div');
    vb.classList.add('vb');

    const h3 = document.createElement('h3');
    h3.textContent = name;

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img');
    star = +star
    for (let i = 0; i < 5; i++) {
        const iconImg = document.createElement('img');
        if (i <= star) {
            iconImg.setAttribute('src', './icon/Frame 945.png');
        }else{
            iconImg.setAttribute('src', './icon/Frame 941.png');
            
        }
        imgDiv.appendChild(iconImg);
    }

    const text = document.createElement('div');
    text.classList.add('text');

    const p = document.createElement('p');
    p.textContent = comment

    text.appendChild(p);

    const span = document.createElement('div');
    span.classList.add('span');

    

    vb.appendChild(h3);
    vb.appendChild(imgDiv);
    vb.appendChild(text);
    vb.appendChild(span);

    coment.appendChild(vb);

    elem.appendChild(imgs);
    elem.appendChild(coment);

    swiperSlide.appendChild(elem);

    // Далее добавляем созданный элемент в нужное место на странице
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.appendChild(swiperSlide);
    myswiperWraper.append(swiperSlide)

}
let comentArr = [

    {
        img: './icon/section-6-rev-1 (1).jpg',
        comment: 'О таком устройстве год назад я мог только мечтать. Назвать его только видеорегистратором язык не поворачивается, потому что это комбо, которое включает все устройства, которые нужны водителю. Лучший видеорегистратор которым когда-либо я пользовался',
        name: 'ИГОРЬ',
        id: '1',
        stars: "5"
    }, {
        img: './icon/section-6-rev-2.jpg',
        comment: 'Очень хороший регик. Видео пишет на отлично, нарезает по 1, 2, 3 минуты, есть в настройках. GPS пока не калибровал. Охраняет на стоянке, уже проверено. Регистратором пользовался не одним, так что сравнивать есть с чем. Все супер. Крепление тоже моща! Регик не дрожит и не отвалится зимой или на солнце.',
        name: 'МАТВЕЙ',
        id: '2',
        stars: "5"
    }, {
        img: './icon/section-6-rev-3.jpg',
        comment: 'Очень качественный регистратор. Купил себе такой пару дней назад. Качество записи отличное! Снимает супер. Звук отличный. Легко снимается и ставится назад. Очень компактный. Зарядка идет в прикуриватель. Качество съемки в ночное и дневное время отличное. В общем спасибо за регистратор я всем доволен.',
        name: 'АЛЕКСАНДР',
        id: '3',
        stars: "5"
    }
]
let arr = [
    {
        box1: {
            text: "Высокое качество видео Super HD",
            coment: "Разрешение записи видео видеорегистратором: Super HD (2304х1296) в 30 к/с. Благодаря продвинутой матрице OmniVision 4689 возможно добиться максимального качества картинки и зафиксировать все необходимые детали на дороге: номера автомобилей, дорожные знаки и сигналы светофора, а также обстоятельства и происшествия. Видео такого высокого качество позволит Вам доказать свою невиновность в случае судебных разбирательств.",
            img: 'https://combo-artway.cheap-stuffs.com/files/combo_artway_1/img/section-2-1.png'

        },
        box2: {
            text: "Сигнатурное обнаружение радарных комплексов",
            coment: "Сигнатурная технология позволяет отсекать ложные срабатывания При включении режима радар-детектора «SMART» устройство определяет не только наличие радарного комплекса на пути, но и его тип: КРЕЧЕТ, ВОКОРТ, КОРДОН и др.",
            img: 'https://combo-artway.cheap-stuffs.com/files/combo_artway_1/img/section-2-2.png'
        },
        id: '1'
    }, {
        box1: {
            text: "HDR",
            coment: "Работа автомобильного видеорегистратора осуществляется, зачастую, в сложных условиях недостаточной освещенности, что может привести к засветке изображения, в том числе номерных знаков. Ещё одной ситуацией, способной испортить видеокартинку, является съёмка дороги в вечернее или ночное время и ослепление камеры регистратора фарами встречных автомобилей. Для преодоления данной проблемы существует встроенная функция HDR. Она обеспечивает особый режим съёмки, при котором камера одновременно делает три кадра с разной выдержкой.",
            img: 'https://combo-artway.cheap-stuffs.com/files/combo_artway_1/img/section-2-3.png'

        },
        box2: {
            text: "GPS-информатор обо всех полицейских камерах с функцией голосового оповещения",
            coment: "GPS-информатор оповещает водителя о приближении к стационарным камерам контроля скорости, камерам контроля полосы движения и проезда на красный свет, системам контроля средней скорости «Автодория», камерам, измеряющим скорость в спину, камерам, проверяющим остановку в неположенном месте, остановку на перекрестке в местах нанесения запрещающей разметки/зебре, мобильных камерах (треногах). Помимо этого, информатор оповещает о скрытых встроенных камерах, о приближении к населенным пунктам и участкам дороги с ограничением скорости, и других. GPS-информатор использует широчайшую базу данных.",
            img: 'https://combo-artway.cheap-stuffs.com/files/combo_artway_1/img/section-2-4.png'
        },
        id: '2'
    }, {
        box1: {
            text: "Широкий угол обзора",
            coment: "Камера видеорегистратора с широким углом обзора 170◦ захватывает соседние и встречные полосы движения, номера движущихся вокруг Вас автомобилей, а также сигналы светофора. Такой угол обзора предоставит наиболее информативную картинку происходящего.",
            img: 'https://combo-artway.cheap-stuffs.com/files/combo_artway_1/img/section-2-5.png'

        },
        box2: {
            text: "Стрелка",
            coment: "Теперь штрафов в вашей жизни будет меньше, а удовольствия от езды за рулём больше! Основное отличие «Стрелки» от прочих радарных комплексов, работающих в К-диапазоне, заключается в принципе подачи очень короткого импульса при низкой мощности, который воспринимается приёмниками электромагнитных сигналов за простую помеху. Высокочувствительные радар-детекторы ARTWAY имеют встроенный дополнительный модуль, который позволяет уверенно обнаруживать комплекс «СТРЕЛКА».",
            img: 'https://combo-artway.cheap-stuffs.com/files/combo_artway_1/img/section-2-6.png'
        },
        id: '1'
    }, {
        box1: {
            text: "OCL",
            coment: "На каком расстоянии вы хотите получать предупреждение от радар-детектора о приближении к точке контроля скорости? Функция OCL позволит водителю выбрать оптимальное значение в диапазоне: 400 / 600 / 800 / 1000 / 1500 м.",
            img: 'https://combo-artway.cheap-stuffs.com/files/combo_artway_1/img/section-2-7.png'

        },
        box2: {
            text: "Голосовое оповещение",
            coment: "Функция голосового оповещения доступно и понятно оповещает водителя о приближении к системам контроля скорости и прочим точкам, заложенным в базу данных GPS-информатора. Данная система позволяет водителю не отвлекаться от дорожного движения и своевременно получать важную информацию о дорожной ситуации, тем самым повышая безопасность на дороге",
            img: 'https://combo-artway.cheap-stuffs.com/files/combo_artway_1/img/section-2-8.png'
        },
        id: '1'
    }
]

for (let i of arr) {
    photoCrieyt(i.box1.text, i.box1.coment, i.box1.img, i.box2.img, i.box2.text, i.box2.coment)
    
}
for(let i of comentArr){
    swipers(i.img, i.comment, i.name, i.stars)
}