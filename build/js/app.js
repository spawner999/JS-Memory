!function r(e,a,i){function t(s,o){if(!a[s]){if(!e[s]){var c="function"==typeof require&&require;if(!o&&c)return c(s,!0);if(n)return n(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var l=a[s]={exports:{}};e[s][0].call(l.exports,function(r){var a=e[s][1][r];return t(a?a:r)},l,l.exports,r,e,a,i)}return a[s].exports}for(var n="function"==typeof require&&require,s=0;s<i.length;s++)t(i[s]);return t}({1:[function(r,e,a){var i=r("./../js/helper.js").gallery,t=r("./../js/helper.js").card,n=function(){this.cards=12,this.pairsLeft=6,this.previousCard=""};n.prototype.createGame=function(){$("body").append(i);for(var r=0;6>r;r++){var e=t.replace("%id%",r);$(".gallery").append(e),$(".gallery").append(e)}},n.prototype.turn=function(r,e){r===e?(this.pairsLeft-=1,$("."+r).off("click")):setTimeout(function(){$("."+r).find(".card").removeClass("flipped"),$("."+e).find(".card").removeClass("flipped")},700),this.previousCard=""},a.Game=n},{"./../js/helper.js":2}],2:[function(r,e,a){var i='<div class="gallery"></div>';a.gallery=i;var t='<div class="memory %id%"><div class="card"><div class="face front"></div><div class="face back"></div></div></div>';a.card=t},{}],3:[function(r,e,a){var i=r("./../js/game.js").Game;$(document).ready(function(){$("#newgame").submit(function(r){r.preventDefault(),console.log("loal");var e=new i;e.createGame(),$(".memory").click(function(){return $(this).find(".card").addClass("flipped"),""===e.previousCard?e.previousCard=$(this).attr("class").split(" ")[1]:e.turn(e.previousCard,$(this).attr("class").split(" ")[1]),!1})})})},{"./../js/game.js":1}]},{},[3]);