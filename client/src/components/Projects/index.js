//importing react,css and exporting Projects
import React from 'react';
import "./projects.css";

export default function Projects() {
  return (
    <div className="pjct-center">
      <h1 className="head">Check out these sweet projects!</h1>
      <h4>Does your company website need a sort of functioning Tic Tac Toe game?</h4>
      <h4>What about a buggy hack job of a text adventure game?</h4>
      <h4>If so, I am your man</h4>
      {/* using _blank so it opens a new tab */}
      <li className="pjct-space"><a target="_blank" href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-matheus-brendan">Tic Tac Toe</a></li>
      <img classname="pjct-img" src="/images/tic.jpg" alt="Tic Tac Toe" width="238" ></img>
      <li><a target="_blank" href="https://github.com/BurlingtonCodeAcademy/guess-the-number-MillerTime802">Number guessing game</a></li>
      <li><a target="_blank" href="https://github.com/BurlingtonCodeAcademy/zorkington-brent-ben">Text adventure game</a></li>

    </div>
  );
}