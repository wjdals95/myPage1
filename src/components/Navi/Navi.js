import React from 'react';
import './Navi.css'

function Navi() {
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").classList.remove('active')
  } else {
    document.getElementById("nav").classList.add('active')
  }
  prevScrollpos = currentScrollPos;
}
    return (
        <div>
            <header id="nav">
                <h1><a href=""><img src="./img/mylogo.svg" alt="" /></a></h1>
                <ul class="depth1">
                    <li class="depth2"><a href="#sec1">섹션1</a></li>
                    <li class="depth2"><a href="#sec2">섹션2</a></li>
                    <li class="depth2"><a href="#sec2">섹션2</a></li>
                    <li class="depth2"><a href="#sec4">섹션4</a></li> 
                </ul>
            </header>
        </div>
    );
}

export default Navi;