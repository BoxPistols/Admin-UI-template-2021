"use strict";
const btn = document.querySelector(".button");
const content = document.querySelector(".content");
const nav = document.querySelector(".nav");
const title = document.querySelector(".title");

btn.onclick = function () {
	content.classList.toggle("isOpen");
	nav.classList.toggle("isClose");
	title.classList.toggle("isClose");
};
