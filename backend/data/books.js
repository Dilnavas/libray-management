const books = [
  {
    isbn: '9781593275846',
    title: 'Harry Potter',
    subtitle: 'A Modern Introduction to Programming',
    author: '	J. K. Rowling',
    published: '26 June 1997',
    publisher: 'Bloomsbury UK',
    pages: 472,
    description:
      "Harry Potter is a film series based on the eponymous novels by J. K. Rowling. The series is distributed by Warner Bros. and consists of eight fantasy films, beginning with Harry Potter and the Philosopher's Stone and culminating with Harry Potter and the Deathly Hallows ",
    image:
      'https://i2.wp.com/hobrf.com/wp-content/uploads/2018/09/71sH3vxziLL.jpg?resize=360%2C523&ssl=1',
    price: 500,
  },
  {
    isbn: '9781449331818',
    title: 'Soul',
    subtitle:
      'After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.',
    author: 'Pete Docter',
    published: '11 October 2020',
    publisher: 'Disney',
    pages: 254,
    description:
      "Joe is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz -- and he's good. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul.",
    website:
      'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/',
    image: 'https://i.redd.it/tdtw34myd9v51.jpg',
    price: 700,
  },
  {
    isbn: '9781449365035',
    title: 'Onward',
    subtitle:
      'Onward is a 2020 American computer-animated urban fantasy adventure film',
    author: 'Dan Scanlon',
    published: 'February 21, 2020',
    publisher: '	Kori Rae',
    pages: 460,
    description:
      "In a suburban fantasy world, two teenage elf brothers, Ian and Barley Lightfoot, go on a journey to discover if there is still a little magic left out there in order to spend one last day with their father, who died when they were too young to remember him. Like any good quest, their journey is filled with magic spells, cryptic maps, impossible obstacles and unimaginable discoveries. When the boys' fearless mom, Laurel, realizes that her sons are missing, she teams up with the legendary winged-lion-scorpion former warrior -- The Manticore -- and heads off to find them. Perilous curses aside, this one magical day could mean more than any of them ever dreamed.",
    image:
      'https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg?region=0%2C0%2C540%2C810',
    price: 400,
  },
  {
    isbn: '9781491950296',
    title: 'Luca',
    subtitle:
      'Robust Web Architecture with Node, HTML5, and Modern JS Libraries',
    author: 'Enrico Casarosa',
    published: 'june 07 2021',
    publisher: 'Disney',
    pages: 254,
    description:
      "Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water's surface.",
    website: 'http://chimera.labs.oreilly.com/books/1234000000262/index.html',
    image:
      'https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg',
    price: 800,
  },
  {
    isbn: '9781593277574',
    title: 'Raya and the lost dragon',
    subtitle: 'The Definitive Guide for JavaScript Developers',
    author: 'Nicholas C. Zakas',
    published: '2016-09-03T00:00:00.000Z',
    publisher: 'Disney Pictures',
    pages: 352,
    description:
      'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.',
    website: 'https://leanpub.com/understandinges6/read',
    image:
      'https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg',
    price: 900,
  },
  {
    isbn: '9781491904244',
    title: 'Inside Out',
    subtitle: 'ES6 & Beyond',
    author: 'Kyle Simpson',
    published: '2015-12-27T00:00:00.000Z',
    publisher: 'Pixar Movies',
    pages: 278,
    description:
      'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the You Don’t Know JS series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.',
    website:
      'https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond',
    image:
      'https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg',
    price: 700,
  },
  {
    isbn: '9781449325862',
    title: 'Trolls',
    subtitle: 'A Working Introduction',
    author: 'Richard E',
    published: '2013-08-02T00:00:00.000Z',
    publisher: '20th Century Fox',
    pages: 234,
    description:
      "From the creators of Shrek comes the most smart, funny, irreverent animated comedy of the year, DreamWorks' Trolls. This holiday season, enter a colorful, wondrous world populated by hilariously unforgettable characters and discover the story of the overly optimistic Trolls, with a constant song on their lips, and the comically pessimistic Bergens, who are only happy when they have trolls in their stomach. Featuring original music from Justin Timberlake, and soon-to-be classic mash-ups of songs from other popular artists, the film stars the voice talents of Anna Kendrick, Justin Timberlake, Russell Brand, James Corden, Kunal Nayyar, Ron Funches, Icona Pop, Gwen Stefani, and many more. DreamWorks' TROLLS is a fresh, broad comedy filled with music, heart and hair-raising adventures. In November of 2016, nothing can prepare you for our new Troll world.—20th Century Fox",
    website: 'http://chimera.labs.oreilly.com/books/1230000000561/index.html',
    image:
      'https://i.pinimg.com/originals/ef/75/96/ef7596d640fef36a8f193a7239c70115.jpg',
    price: 500,
  },
  {
    isbn: '9781449337711',
    title: 'Coco',
    subtitle: 'Harnessing the Power of the Web',
    author: 'Glenn Block',
    published: '2014-04-07T00:00:00.000Z',
    publisher: 'Piar',
    pages: 538,
    description:
      "Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the Land of the Dead, where he learns about his great-great-grandfather who was a legendary singer.",
    website: 'http://chimera.labs.oreilly.com/books/1234000001708/index.html',
    image:
      'https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg',
    price: 800,
  },
]

export default books
