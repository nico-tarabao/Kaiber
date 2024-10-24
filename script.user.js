// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-09-12
// @description  try to take over the world!
// @author       You
// @match        https://kaiber.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kaiber.ai
// @grant        none
// @updateURL 
// @downloadURL
// ==/UserScript==

(function() {
    'use strict';
    console.log("HI");
    const interval = setInterval(function() {
        if(window.location.href==="https://kaiber.ai/dashboard"){
            var as= [...document.querySelectorAll("a")].filter(x=>x.href.startsWith("https://kaiber.ai/memory"))
            console.log(as.length)
            for(let o = 0;o<as.length;o++){
                const a=as[o]
                const newNode=document.createElement("span")
                newNode.style="color: black";
                //newNode.className="absolute top-2 bg-black bg-opacity-20 backdrop-blur"
                const id=Number("0x"+a.href.split("-")[1].substr(1))//.replace("https://kaiber.ai/memory/","");
                newNode.innerText=id
                const parent=a.parentNode
                if(parent.parentNode.childNodes.length===1){
                    parent.parentNode.insertBefore(newNode, parent.nextSibling)
                }
            }
        }
    }, 2000);
})();
