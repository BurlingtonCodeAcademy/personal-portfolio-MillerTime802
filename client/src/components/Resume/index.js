import React from 'react';
import "./resume.css";
import NavBar from '../NavBar';
{/* Playing with <li> and flex */ }
export default function Resume() {
    return (


        <div className="resume-center">
            <h1 className="name">Brent Miller</h1>
            <h3>bdm802@gmail.com</h3>
            <h3>802-730-3373</h3>
            <h4 className="h4">Work Experience</h4>
            <li>Food and Beverage Manager - Trapp Family Lodge- September 2016 to August 2020</li>
            <li>Bar Manager - Stowe Mountain Lodge- November 2010 to September 2016 </li>
            <li>Owner - GM Security Group - April 2003 to December 2008</li>
            <a href="/Files/Resume.pdf">Resume Download</a>
            <h4 className="h4">Personal Skills</h4>
            <div className="flex">
                <li>Multitasking</li>
                <li>Leadership</li>
                <li>Driven</li>
            </div>
            <div className="flex">
                <li>Management of large teams</li>
                <li>Compassionate</li>
            </div>
            <div className="flex">
                <li>Javascript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>React</li>
            </div>
            <div className="flex">
                <li>Al things Food and Beverage</li>
            </div>
            <div className="flex">
                <li>A strong understanding of what makes Vermont, Vermont</li>
            </div>
            <p>I hope to join a great team and do what I can to make a positive impact on the business and those around me. </p>
        </div>



    )
}