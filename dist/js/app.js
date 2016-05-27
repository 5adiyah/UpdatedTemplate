(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "2a8b39b3eb0e43f0252a7a246c28b3967e67a8d1";

},{}],2:[function(require,module,exports){
var apiKey = require('./../../.env').apiKey;

exports.user = function(userName, getName, getEmail, getLocation, getPic){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    var name = response;
    var userName = getName(name);
    var userEmail = getEmail(name);
    var userLocation = getLocation(name);
    var userpic = getPic(name);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.repos = function(userName, getRepo){
  $.get('https://api.github.com/users/'+ userName + '/repos?type=all?access_token=' + apiKey).then(function(response){
    getRepo(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


///repos?type=all
//'https://api.github.com/users/5adiyah/repos?type=all?access_token=c3f10787852e13130c83b02a6f04521eabaa9c6c'

},{"./../../.env":1}],3:[function(require,module,exports){
var user = require('./../app/js/app.js').user;
var repos = require('./../app/js/app.js').repos;

var getName = function(name){
  $('#userName').text(name.name);
  console.log(name.name);
};

var getEmail = function(name){
  $('#userEmail').text(name.email);
  console.log(name.email);
};

var getLocation = function(name){
  $('#userLocation').text(name.location);
  console.log(name.location);
};

var getPic = function(name){
  $('#userPic').html("<img src='"+ name.avatar_url + "' />");
  console.log(name.avatar_url);
};

var getRepoName = function(name){
  name.forEach(function(repoName, i){
    var part1 = '<br> <a id="num';
    var part2 = '" class="repoName" href="';
    var part3 = '">';
    var part4 = '</a>';
    $('#userRepos').append(part1 + i + part2 + repoName.html_url + part3 + repoName.name + part4);
    if(repoName.description != ""){
      $('#num' + i).append('<p id="description"> &nbsp; &nbsp; '+ repoName.description + '</p>');
    }
  });
};


$(document).ready(function(){
  $("form#usernameForm").submit(function(event) {
    event.preventDefault();
    var userName = $("input#username").val(); //put this back
    user(userName, getName, getEmail, getLocation, getPic);
    repos(userName, getRepoName);
    $('.userInput').hide();
    $('.userInfo').show();
    $('.repo').hide();
    $('.emailForm').hide();

  $('.usrButton').click(function(){
    $('.userInput').show();
    $('.userInfo').hide();
    $('.repo').hide();
    $('.emailForm').hide();
  });

  $('.ghButton').click(function(){
    $('.userInput').hide();
    $('.userInfo').hide();
    $('.emailForm').hide();
    $('.repo').show();
  });

  $('.emailButton').click(function(){
    $('.userInput').hide();
    $('.userInfo').hide();
    $('.repo').hide();
    $('.emailForm').show();
  });

  });



});

},{"./../app/js/app.js":2}]},{},[3]);
