"use strict";(()=>{var o=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var v=o(()=>{var d=document.querySelector(".header"),k=document.querySelector(".hero"),l=document.querySelector(".header__menu-btn"),c=document.querySelector(".header__nav"),a=document.querySelector(".overlay"),u="header--sticky",L=document.querySelector(".gallery__carousel"),r=!1;l.addEventListener("click",function(){l.classList.toggle("hidden"),c.classList.toggle("opened"),a.classList.toggle("hidden"),L.style.backdropFilter="none",r=!r});function E(){c.classList.remove("opened"),l.classList.remove("hidden"),a.classList.add("hidden"),L.style.backdropFilter="blur(3rem)",r=!1}a.addEventListener("click",E);window.onscroll=function(t){r&&E()};function S(t){return function(e){if(e.target.classList.contains("header__nav-link")){let s=e.target;s.closest(".header__nav").querySelectorAll(".header__nav-link").forEach(i=>{i!==s&&(i.style.opacity=t)})}}}c.addEventListener("mouseover",S(.5));c.addEventListener("mouseout",S(1));function b(t,e){t.forEach(s=>{s.isIntersecting?d.classList.remove(u):d.classList.add(u)})}var p=new IntersectionObserver(b,{root:null,threshold:.2});p.observe(k)});var g=o(()=>{var m=document.querySelector(".seal"),y=360;m.addEventListener("click",function(){m.style.transform="rotate("+y+"deg)",y+=360})});var f=o(()=>{var C="gallery__wrapper",_="gallery__carousel",A=`${_}-img`,n=`${A}--selected`,N=document.querySelector(`.${C}`),H=document.querySelector(`.${_}`),h=document.querySelectorAll(`.${A}`),O=t=>{let e=t.currentTarget,s=e.src;document.querySelector(`.${n}`).classList.remove(n),e.classList.add(n),N.style.background=`url(${s}) no-repeat center
      center/cover`};h.forEach(t=>{t.addEventListener("click",O)});var R=()=>{h[0].classList.add(n)};R()});v();g();f();})();
