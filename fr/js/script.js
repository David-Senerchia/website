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
        { label: 'Accueil', url: indexPrepend + 'index.html' },
        { label: 'Sur moi', url: pagePrepend + 'about.html' },
        { label: 'Développement', url: pagePrepend + 'development.html' },
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
      <a v-for="img in americanFlag" v-bind:href='img.url'><span id='header-name'> <img src='../../img/americanflag.png' id='flag-img' /> <img src='../../img/frenchflag.jpg' id='flag-img' /> <img src='../../img/polishflag.jpg' id='flag-img' /></span></a>
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
      { title: 'The Tools and Tips of Immersive Learning', img: '../../img/travelMap.jpeg', article: pagePrepend + 'The Tools and Tips of Immersive Learning with Revisions.html', description: 'This is based on observations and experimentations from my first 4 months in Poland. When I was studying, I never found anything on the internet teaching how to optimize immersive language learning, so I decided to make an article on it myself. I originally wrote this to be presented at language conferences.' },
    
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
      { title: 'Life in NYC', img: 'img/albums/ny.jpg', album: '', description: 'Albums coming soon!' },
      { title: 'Photoshoots', img: 'img/albums/photoshoots.jpg', album: '', description: 'Albums coming soon!' },
      { title: 'Nature at UNC', img: 'img/albums/unc.jpg', album: 'http://www.christinaharford.com/pdf-to-dashboard/', description: 'Albums coming soon!' },
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
