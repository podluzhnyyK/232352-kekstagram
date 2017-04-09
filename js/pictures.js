'use strict';

// скрыли форму
document.querySelector('.upload-overlay').classList.add('invisible');
var picture = document.querySelector('#picture-template');
var overlay = document.querySelector('.gallery-overlay');

var pictures = [];

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
  document.querySelector('.gallery-overlay-image').src = photos.url;
  document.querySelector('.picture-likes').textContent = photos.likes;
  document.querySelector('.picture-comments').textContent = photos.comments;
}

function showImage(data) {
  document.querySelector('.gallery-overlay-image').src = data.url;
  document.querySelector('.likes-count').textContent = data.likes;
  document.querySelector('.comments-count').textContent = data.comments;
}

showImage(pictures[0]);

overlay.clasList.remove('invisible');
