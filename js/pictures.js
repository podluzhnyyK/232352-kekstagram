'use strict';
var picture = document.querySelector('#picture-template');

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!'];


for (var i = 0; i <= 25; i++) {
    var photos = {
        'url': 'photos/{{i}}.jpg',
        'likes': 'getRandom(15, 200)',
        'comments': 'comments[getRandom(1, 7)]'
    }
};

for (var i = 0; i < 25; i++) {
  var element = picture.content.cloneNode(true);
  
}
