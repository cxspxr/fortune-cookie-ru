const fortune = require('cookie-fortune-ru');

document.querySelector('#fortune').innerHTML = JSON.parse(fortune.get());
