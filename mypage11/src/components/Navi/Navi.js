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
                    <li class="depth2"><a href="#MyPage">My Page</a></li>
                    <li class="depth2"><a href="#MySkill">My Skill</a></li>
                    <li class="depth2"><a href="#MyProject">My Project</a></li>
                    <li class="depth2"><a href="#Contact">Contact</a></li> 
                </ul>
            </header>
        </div>
    );
}

export default Navi;