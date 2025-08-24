const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery"); //викликаємо галерею щоб далі хімічити над нею

const galleryToInsert = images //стоврюємо змінну яка буде містити вже перебрані готові рядки               меп у нас перебирає масив і до кожного його лб'єкта застосовує фунцію яку ми вкжемо, у нашому випадку це додавання в нтмл отакого рядка для кожної картинки.
  .map(
    //для кожної картинки буде забиратися певне посилання з її об'єкту         //за допомогою дата сорс ховаємо до карманчика маленького зображення велике щоб воно могло його діставати при кліку
    (image) => `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"                 
      data-source="${image.original}"         
      alt="${image.description}"
    />
  </a>
</li>
`
  )
  .join(""); //додаємо джоін щоб перетворити масив рядків на рядки

gallery.insertAdjacentHTML("beforeend", galleryToInsert); //вставляємо всі ті рядки готові через змінну

const instance = // використовуємо метод з об'єкту безіклайтбокс, що показує модалку              // до модалки додаємо і вставляємо нтмльку, поки що з пустим срс. це робиться щоб по сто разів потім ця нтмлька не стоврювалась при кожному кліку. буде мусорить память мб.
  basicLightbox.create(`                              
    <img class="modal-image" src="" width="1112" height="640"/>       
`);

gallery.addEventListener("click", (event) => {
  //додаємо слухача подій до галереї (цей батьківський елемент ловитиме всі кліки усередині нього(навіть по полям)) івент це у нас об'єкт який містить у собі інфу про місце що клікнули.
  event.preventDefault(); //(щоб не перекидувало на іншу сторінку і тд)
  const activeImage = event.target; //витягуємо з об'єкта івент інфу про клікнуте місце(елемент) щоб надалі з ним працювати
  if (activeImage.nodeName !== "IMG") {
    //перевірка. якщо тег клікнутого елемента це не імдж то ігноруємо клік, виходимо з функції.
    return;
  }

  const largeImageURL = activeImage.dataset.source; //  якщо клік по імдж то переходимо сюди. тут створюємо окрему змінну яка містить в собі посилання на велике зображення клікнутого елмента
  console.log(largeImageURL);

  const modalImage = instance.element().querySelector(".modal-image"); //створюємо змінну що витягує з нашого файлу селектор з ім'ям моділ-імедж (це у нас клас до нового посилання на велику картинку)

  modalImage.src = largeImageURL; //у срс модал імедж підставляємо посилання з дата сорсу (на велику картинку)

  instance.show(); // метод з об'єкта інстанс що показує і ховає модалку.
});
