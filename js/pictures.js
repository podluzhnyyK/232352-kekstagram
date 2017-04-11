'use strict';

// скрыли форму
document.querySelector('.upload-overlay').classList.add('invisible');
var pictureTemplate = document.querySelector('#picture-template');
var overlay = document.querySelector('.gallery-overlay');
var overlayUpload = document.querySelector('.upload-overlay');
var picturesContainer = document.querySelector('.pictures');

var fragment = document.createDocumentFragment();

var MAX_PICTURES = 25;

var pictures = [];

overlayUpload.classList.add('invisible');

var getRandom = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!'];


for (var i = 0; i <= MAX_PICTURES; i++) {
  var photos = {
    'url': 'photos/' + (i + 1) + '.jpg',
    'likes': getRandom(15, 200),
    'comments': comments[getRandom(1, 7)]
  };
  pictures.push(photos);
}

for (i = 0; i < MAX_PICTURES; i++) {
  var newElement = pictureTemplate.content.cloneNode(true);

  newElement.querySelector('img').src = pictures[i].url;
  newElement.querySelector('.picture-likes').textContent = pictures[i].likes;
  newElement.querySelector('.picture-comments').textContent = pictures[i].comments;

  fragment.appendChild(newElement);
}

picturesContainer.appendChild(fragment);

var showImage = function (data) {
  document.querySelector('.gallery-overlay-image').src = data.url;
  document.querySelector('.likes-count').textContent = data.likes;
  document.querySelector('.comments-count').textContent = data.comments;
}

showImage(pictures[4]);

overlay.classList.remove('invisible');
