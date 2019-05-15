if (isIndex()) {
  var indexPrepend = '';
  var pagePrepend = '';
}
else {
  var indexPrepend = '../';
  var pagePrepend = '';
}

$(window).scroll(function(){
    if ($(window).scrollTop() >= 0) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
});

function alignItems() {
  figure = parseInt($('.website').css('width'), 10);
  pic = parseInt($('.design-img').css('width'), 10);
  finalWidth = String((figure - pic) / 2) + 'px';
  $('.website-title').css('margin-left', finalWidth);
  $('.website-description').css('margin-left', finalWidth);
  $('.website-description').css('margin-right', finalWidth);
}

function disableAndEnableImgs(mode) {
  if (mode == 'disable') {
    $('figcaption').removeClass('figcaption-cls')
    $('img').removeClass('img-cls')
  }
  else {
    $('figcaption').addClass('figcaption-cls')
    $('img').addClass('img-cls')
  }
}

$(document).ready(function() {
  alignItems();
});

$(window).resize(function() {
  alignItems();
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    $('#open-button').css("display", 'none');
    $('#close-button').css("display", 'block');
    $('#header-description').css("display", 'none');
    disableAndEnableImgs('disable');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('#open-button').css("display", 'block');
    $('#close-button').css("display", 'none');
    $('#header-description').css("display", 'block');
    disableAndEnableImgs('enable');
}


Vue.component('page-list', {
  template: `<div id="mySidenav" class="sidenav">
    <a v-for="page in pages" v-bind:href='page.url'>{{ page.label }}</a>
  </div>
  `,
  data: function () {
    var data = {
      pages: [
        { label: 'Accueil', url: indexPrepend + 'fr/index.html' },
        { label: 'À Propos de Moi', url: pagePrepend + 'about.html' },
        { label: 'Développement', url: pagePrepend + 'development.html' },
        { label: 'La Photographie iPhone', url: pagePrepend + 'photography.html' },
        { label: 'Écrits', url: pagePrepend + 'writing.html' },
        { label: 'CV', url: pagePrepend + 'CV.html' },
        { label: 'Contact', url: pagePrepend + 'contact.html' },
      ]
    };
    return data;
  },
});

Vue.component('banner', {
  template: `<div id='index-header' class='header-strip'>
    <span id="header-info">
      <span id='header-description'>
        <a v-for="index in indexPage" v-bind:href='index.url'>{{ index.label }} </a>
      </span>
    </span>
    <i id="open-button" class="menu-icon fa fa-bars fa-2x" aria-hidden="true" onclick="openNav()"></i>
    <i id="close-button" class="menu-icon fa fa-times fa-2x" aria-hidden="true" onclick="closeNav()"></i>
  </div>
  `,
  data: function () {
    var data = {
      developerPage: [
        { label: 'Developer', url: pagePrepend + 'development.html' },
      ],
      photographerPage: [
        { label: 'Photographer', url: pagePrepend + 'photography.html' },
      ],
      designPage: [
        { label: 'Designer', url: pagePrepend + 'design.html' },
      ],
      indexPage: [
        { label: 'David Senerchia', url: indexPrepend + 'index.html' },
      ],
      americanFlag: [ 
        { flag: '../../img/americanflag.png', url: indexPrepend + 'index.html' },
      ],
      frenchFlag: [
        { flag: '../../img/frenchflag.jpg', url: indexPrepend + 'index.html' },
      ],
      polishFlag: [
        { flag: '../../img/polishflag.jpg', url: indexPrepend + 'index.html' },
      ]
    };
    return data;
  },
});

new Vue({
  el: '#my-projects',
  data: {
    projects: [
      { title: 'Huffman Encoding', url: 'https://github.com/cgharford/huffman-encoding', description: 'This is an implementation of the Huffman Encoding written in java for my Algorithms course. I wrote the methods in the SimpleHuffProcessor.java file.' },
      { title: 'Safe Cracker', url: 'https://github.com/cgharford/safe-cracker', description: 'This program is a bluetooth peripheral that simulates a sensor tag to crack open a safe. It was written in JavaScript and uses bleno.'},
      { title: 'Bluetooth Peripheral', url: 'https://github.com/cgharford/bluetooth-peripheral', description: ' Bluetooth peripheral written in JavaScript that uses the bleno library to connect to low level devices and provide read/subscribe characteristics.'},
      { title: 'Weep', url: 'https://github.com/cgharford/weep', description: 'A key space searching algorithm that systematically generates and tests combinations from a table based on probabilities. My code is in ptw_searcher.cc.'},
      { title: 'Threaded Prod/Con', url: 'https://github.com/cgharford/threaded-producer-consumer-system', description: 'This program implements a producer/consumer system using threads and buffers. It was written in C for my Operating Systems course.'},
      { title: 'Sushi Restaurant Simulator', url: 'https://github.com/cgharford/sushi-restaurant-simulator', description: 'This is a my first major project that I worked on for my OOP class. It was written in Java and represents a sushi restaurant.'},
      { title: 'Non-Randomness', url: 'https://github.com/cgharford/non-randomness', description: 'Finds the seed and key from a random number generator. This was written in C for my security course.'},
      { title: 'Salted Password Cracker ', url: 'https://github.com/cgharford/salted-password-cracker', description: 'This python program cracks passwords with salted hashes offline. This was written for my security course.'},
      { title: 'Online Password Cracker', url: 'https://github.com/cgharford/online-password-cracker', description: 'This program attempts to crack an online password program. It was written in python for my security class.'},
      { title: 'Mnemonics Generator', url: 'https://github.com/cgharford/mnemonic-password-generator', description: 'This program generates mnemonic passwords from the lines of a file read in. It was written in python for my security class.'},
      { title: 'Pipelined Prod/Con', url: 'https://github.com/cgharford/pipelined-producer-consumer-system', description: 'This program implements a producer/consumer system using piping. It was written in C for my Operating Systems course.'},
      { title: 'Distributed Shell', url: 'https://github.com/cgharford/client-server-distributed-shell', description: 'This program is a client-server distributed command shell interpreter written in C for my Operating Systems course.'},
      { title: 'Linux Shell', url: 'https://github.com/cgharford/linux-shell', description: ' This is a basic linux command line interpreter in C that I wrote for my Operating Systems course. '},
      { title: 'C Labs', url: 'https://github.com/cgharford/c-labs', description: 'These are small projects I wrote in C for my Computer Organization course.'},
      { title: 'MIPS Assembly Labs', url: 'https://github.com/cgharford/mips-assembly-labs', description: 'These are small assembly projects I wrote in MIPS for my Computer Organization course.'},
      { title: 'Graphs and Hashing', url: 'https://github.com/cgharford/graphs-and-hashing', description: 'This is an implementation of graphs and hashing that I wrote for my data structures class.'},
      { title: 'Min Max Heap', url: 'https://github.com/cgharford/min-max-heap', description: 'This is a min-max heap that I implemented for my data structures class.'},
      { title: 'External Sort', url: 'https://github.com/cgharford/external-sort', description: 'This is an external sorting algorithm that I wrote for my data structures class.'},
      { title: 'Stacks and Queues', url: 'https://github.com/cgharford/stacks-and-queues', description: 'This is an implementation of stacks and queues that I wrote for my data structures class.'},
    ]
  }
});

new Vue({
  el: '#my-writing',
  data: {
    writing: [
      { title: 'The Tools and Tips of Immersive Learning', img: '../../img/travelMap.jpeg', article: pagePrepend + 'The Tools and Tips of Immersive Learning with Revisions.html', description: 'Cet article est basé sur des observations et essais de mes 4 premiers mois en Pologne. Pendent que j\'étudiais, je n\'ai jamais rien trouvé sur internet au sujet d\'apprentissage immersif optimal des langues étrangères, donc j\'ai décidé faire un artile sur le sujet moi-même. À l\'origine, je l\'ai fait afin d\'être presenté aux conférences linguistiques. ' },
    
    ]
    
//     websites: [
//       { title: 'Police-related Deaths', img: 'img/designs/police-deaths.png', demo: 'http://www.christinaharford.com/policedeaths', git: 'https://github.com/cgharford/educational-slider', description: 'Data-driven nodejs app to explore the statistics between police related deaths. '},
//       { title: 'Educational Slider', img: 'img/designs/educational-slider.png', demo: 'http://www.christinaharford.com/educational-slider/', git: 'https://github.com/cgharford/educational-slider', description: 'Educational slider on the outer space pictures taken by NASA.' },
//       { title: 'Senate Dashboard', img: 'img/designs/senate-seats-dashboard.png', demo: 'http://www.christinaharford.com/senate-seats-dashboard/', git: 'https://github.com/cgharford/senate-seats-dashboard', description: 'Data visualization for contested and noncontested seats in US Senate.' },
//       { title: 'Powering A Nation', img: 'img/designs/powering-a-nation.png', demo: 'http://www.christinaharford.com/powering-a-nation', git: 'https://github.com/cgharford/powering-a-nation', description: 'My first website that I coded from scratch. The images and videos were resources provided to me for a class project and I do not own them.' },
//       { title: 'Pet Dashboard', img: 'img/designs/pet-dashboard.png', demo: 'http://www.christinaharford.com/pet-dashboard/', git: 'https://github.com/cgharford/pet-dashboard', description: 'This is a data driven dashboard about pets that I created for a multimedia course.' },
//       { title: 'Election 2016', img: 'img/designs/presidential-election-2016.png', demo: 'http://www.christinaharford.com/presidential-election-2016/', git: 'https://github.com/cgharford/presidential-election-2016', description: 'API integration project focusing on the 2016 presidential election.' },
//       { title: 'Happy New Resolution', img: 'img/designs/happy-new-resolution.png', demo: 'http://www.christinaharford.com/happy-new-resolution/', git: 'https://github.com/cgharford/happy-new-resolution', description: 'Data visualization using D3 for 2015 New Years Resolutions.' },
//       { title: 'Blue Wave Labs', img: 'img/designs/blue-wave-labs.png', demo: 'http://www.bluewavelabs.com/', git: '', description: 'Website redesign for Blue Wave Labs consulting company made with my sister at Pearl Hacks.' },
//       { title: 'Tar Heel Trauma', img: 'img/designs/tar-heel-trauma.png', demo: 'http://tarheeltrauma.azurewebsites.net/', git: 'https://github.com/cgharford/educational-patient-games', description: 'Collection of children\'s safety games made for UNC hospital. My team worked on the burn prevention game for a class project.' },
//       { title: 'PDF to Dashboard', img: 'img/designs/pdf-to-dashboard.png', demo: 'http://www.christinaharford.com/pdf-to-dashboard/', git: 'https://github.com/cgharford/pdf-to-web-dashboard', description: 'I was given a PDF and asked to re-create the exact design for the web using HTML, CSS, and JavaScript.' },
//     ]
  }
});

new Vue({
  el: '#my-albums',
  data: {
    albums: [
      { title: 'Kiev', img: '../../img/kiev/kiev1.jpeg', album: 'kiev.html', description: '' },
      { title: 'Varsovie', img: '../../img/warszawa/warsaw1.jpg', album: 'warszawa.html', description: '' },
      { title: 'Pays Baltes', img: '../../img/baltic/baltic1.jpg', album: 'baltics.html', description: '' },
      { title: 'L\'Islande', img: '../../img/iceland/ice1.jpeg', album: 'iceland.html', description: '' },
      { title: 'Le Café dans les Cafés Européens', img: '../../img/coffee/coffee1.jpeg', album: 'coffee.html', description: '' },
      { title: 'Raleigh', img: '../../img/raleigh/raleigh1.jpeg', album: 'raleigh.html', description: '' },

    ]
  }
});

new Vue({
  el: '#kiev-album',
  data: {
    photos: [
      { title: '', img: '../../img/kiev/kiev1.jpeg', photo: '../../img/kiev/kiev1.jpeg', description: '' },
      { title: '', img: '../../img/kiev/kiev2.jpeg', photo: '../../img/kiev/kiev2.jpeg', description: '' },
      { title: '', img: '../../img/kiev/kiev4.jpg', photo: '../../img/kiev/kiev4.jpg', description: '' },
      { title: '', img: '../../img/kiev/kiev5.jpeg', photo: '../../img/kiev/kiev5.jpeg', description: '' },
      { title: '', img: '../../img/kiev/kiev6.jpg', photo: '../../img/kiev/kiev6.jpg', description: '' },
    ]
  }
});

new Vue({
  el: '#warszawa-album',
  data: {
    photos: [
      { title: '', img: '../../img/warszawa/warsaw1.jpg', photo: '../../img/warszawa/warsaw1.jpg', description: '' },
      { title: '', img: '../../img/warszawa/warsaw2.jpg', photo: '../../img/warszawa/warsaw2.jpg', description: '' },
      { title: '', img: '../../img/warszawa/warsaw3.jpg', photo: '../../img/warszawa/warsaw3.jpg', description: '' },
      { title: '', img: '../../img/warszawa/warsaw4.jpeg', photo: '../../img/warszawa/warsaw4.jpeg', description: '' },
      { title: '', img: '../../img/warszawa/warsaw5.jpeg', photo: '../../img/warszawa/warsaw5.jpeg', description: '' },
      { title: '', img: '../../img/warszawa/warsaw6.jpeg', photo: '../../img/warszawa/warsaw6.jpeg', description: '' },
      { title: '', img: '../../img/warszawa/warsaw7.jpeg', photo: '../../img/warszawa/warsaw7.jpeg', description: '' },
      { title: '', img: '../../img/warszawa/warsaw8.jpeg', photo: '../../img/warszawa/warsaw8.jpeg', description: '' },
      { title: '', img: '../../img/warszawa/warsaw11.jpeg', photo: '../../img/warszawa/warsaw11.jpeg', description: '' },
      { title: '', img: '../../img/warszawa/warsaw12.jpg', photo: '../../img/warszawa/warsaw12.jpg', description: '' },
    ]
  }
});

new Vue({
  el: '#baltic-album',
  data: {
    photos: [
      { title: '', img: '../../img/baltic/baltic1.jpg', photo: '../../img/baltic/baltic1.jpg', description: '' },
      { title: '', img: '../../img/baltic/baltic2.jpeg', photo: '../../img/baltic/baltic2.jpeg', description: '' },
      { title: '', img: '../../img/baltic/baltic3.jpg', photo: '../../img/baltic/baltic3.jpg', description: '' },
      { title: '', img: '../../img/baltic/baltic4.jpg', photo: '../../img/baltic/baltic4.jpg', description: '' },
      { title: '', img: '../../img/baltic/baltic5.jpeg', photo: '../../img/baltic/baltic5.jpeg', description: '' },
      { title: '', img: '../../img/baltic/baltic6.jpeg', photo: '../../img/baltic/baltic6.jpeg', description: '' },
      { title: '', img: '../../img/baltic/baltic7.jpeg', photo: '../../img/baltic/baltic7.jpeg', description: '' },
      { title: '', img: '../../img/baltic/baltic9.jpeg', photo: '../../img/baltic/baltic9.jpeg', description: '' },
      { title: '', img: '../../img/baltic/baltic10.jpg', photo: '../../img/baltic/baltic10.jpg', description: '' },
    ]
  }
});

new Vue({
  el: '#iceland-album',
  data: {
    photos: [
      { title: '', img: '../../img/iceland/ice1.jpeg', photo: '../../img/iceland/ice1.jpeg', description: '' },
      { title: '', img: '../../img/iceland/ice2.jpeg', photo: '../../img/iceland/ice2.jpeg', description: '' },
      { title: '', img: '../../img/iceland/ice3.png', photo: '../../img/iceland/ice3.png', description: '' },
      { title: '', img: '../../img/iceland/ice4.jpeg', photo: '../../img/iceland/ice4.jpeg', description: '' },
      { title: '', img: '../../img/iceland/ice5.jpeg', photo: '../../img/iceland/ice5.jpeg', description: '' },
      { title: '', img: '../../img/iceland/ice6.jpeg', photo: '../../img/iceland/ice6.jpeg', description: '' },
      { title: '', img: '../../img/iceland/ice7.jpeg', photo: '../../img/iceland/ice7.jpeg', description: '' },
      { title: '', img: '../../img/iceland/ice8.jpeg', photo: '../../img/iceland/ice8.jpeg', description: '' },
      { title: '', img: '../../img/iceland/ice9.jpg', photo: '../../img/iceland/ice9.jpg', description: '' },
      { title: '', img: '../../img/iceland/ice10.jpeg', photo: '../../img/iceland/ice10.jpeg', description: '' },
      { title: '', img: '../../img/iceland/ice11.jpeg', photo: '../../img/iceland/ice11.jpeg', description: '' },
    ]
  }
});

new Vue({
  el: '#coffee-album',
  data: {
    photos: [
      { title: '', img: '../../img/coffee/coffee1.jpeg', photo: '../../img/coffee/coffee1.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee2.jpg', photo: '../../img/coffee/coffee2.jpg', description: '' },
      { title: '', img: '../../img/coffee/coffee3.jpg', photo: '../../img/coffee/coffee3.jpg', description: '' },
      { title: '', img: '../../img/coffee/coffee4.jpeg', photo: '../../img/coffee/coffee4.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee24.JPG', photo: '../../img/coffee/coffee24.JPG', description: '' },
      { title: '', img: '../../img/coffee/coffee5.jpeg', photo: '../../img/coffee/coffee5.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee6.jpeg', photo: '../../img/coffee/coffee6.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee7.jpeg', photo: '../../img/coffee/coffee7.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee8.jpeg', photo: '../../img/coffee/coffee8.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee9.jpeg', photo: '../../img/coffee/coffee9.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee10.jpeg', photo: '../../img/coffee/coffee10.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee11.jpeg', photo: '../../img/coffee/coffee11.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee12.jpg', photo: '../../img/coffee/coffee12.jpg', description: '' },
      { title: '', img: '../../img/coffee/coffee13.jpeg', photo: '../../img/coffee/coffee13.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee14.jpg', photo: '../../img/coffee/coffee14.jpg', description: '' },
      { title: '', img: '../../img/coffee/coffee15.jpeg', photo: '../../img/coffee/coffee15.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee16.jpeg', photo: '../../img/coffee/coffee16.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee17.jpeg', photo: '../../img/coffee/coffee17.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee18.jpeg', photo: '../../img/coffee/coffee18.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee19.jpeg', photo: '../../img/coffee/coffee19.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee20.jpeg', photo: '../../img/coffee/coffee20.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee21.jpeg', photo: '../../img/coffee/coffee21.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee22.jpeg', photo: '../../img/coffee/coffee22.jpeg', description: '' },
      { title: '', img: '../../img/coffee/coffee23.jpeg', photo: '../../img/coffee/coffee23.jpeg', description: '' },
    ]
  }
});

new Vue({
  el: '#raleigh-album',
  data: {
    photos: [
      { title: '', img: '../../img/raleigh/raleigh1.jpeg', photo: '../../img/raleigh/raleigh1.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh2.jpeg', photo: '../../img/raleigh/raleigh2.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh3.jpeg', photo: '../../img/raleigh/raleigh3.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh4.jpeg', photo: '../../img/raleigh/raleigh4.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh5.jpeg', photo: '../../img/raleigh/raleigh5.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh6.jpeg', photo: '../../img/raleigh/raleigh6.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh7.jpeg', photo: '../../img/raleigh/raleigh7.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh8.jpeg', photo: '../../img/raleigh/raleigh8.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh9.jpeg', photo: '../../img/raleigh/raleigh9.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh10.jpeg', photo: '../../img/raleigh/raleigh10.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh11.jpeg', photo: '../../img/raleigh/raleigh11.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh12.jpeg', photo: '../../img/raleigh/raleigh12.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh13.jpeg', photo: '../../img/raleigh/raleigh13.jpeg', description: '' },
      { title: '', img: '../../img/raleigh/raleigh14.jpeg', photo: '../../img/raleigh/raleigh14.jpeg', description: '' },
    ]
  }
});

new Vue({
  el: '#header'
});

if (!isIndex()) {
  $('#header-info').css("display", "block");
}
else {
  $('#header-info').css("display", "none");
}
