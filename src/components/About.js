import React from 'react';
import profile from '../assets/profile.JPG';
import { DiReact, DiJavascript1, DiMongodb, DiMysql, DiNodejs } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr"

const icons = [DiReact, DiJavascript1, DiMongodb, DiMysql, DiNodejs, GrGraphQl]

function About() {
 return (
     <div>
     <main className={"container-fluid font"}>
        <div className={"row col-12 p-4 p-md-5 mb-4 text-dark rounded"}>
          <div className={"col-3"}>
              <img alt= "Priscilla Sürereker" className={"img-fluid rounded-circle img-thumbnail"} src={profile} width="370" height="370"/>
          </div>
          <div className="col-10 col-md-8 px-0">
            <h1 className={"display-8 fst-italic text-header font-smaller "}>About me</h1>
            <p className={"my-6 lead text-dark fw-bold"}>
                Hi, I'm Priscilla Sürereker, I am Inovative, adaptible, curious, quick-study, and I am eager to learn new technologies.
                I recently graduated with the University of Miami's Full Stack Engineering Program, and am looking for work in my new field as a junior full-stack dev.
            </p>
            <h1 className={"display-8 fst-italic text-header font-smaller"}>Technologies:</h1>
            <div className={"py-1 mt-auto text-dark text-center"}>
            <h1 className={"row text-center"}>
            <i class="fab fa-node-js icon"></i>
            <h3 className={"icon"}>Mongo DB</h3>
            <i class="fab fa-react icon"></i>
            <h3 className={"icon"}>MySQL</h3>
            <i class="fab fa-html5 icon"></i>
            </h1>
            </div>
            {icons.map((icon, index) => {return <h3 key={`icon-${index}`}>{icon}<icon/></h3>})}   
            
            <div className="row col-12 biginfo">
            <div className="col-6  px-0 bg-light text-center info">
            <h1 className={"display-8 fst-italic text-header font-smaller "}>Education</h1>
            <p className={"my-6 lead text-dark fw-bold"}>
            <hr></hr>
            <h4>Full Stack Engineer</h4>
            <h6>University of Miami [August, 2021</h6>
            </p>
          </div>
           <div className="col-6  px-0 bg-light text-center">
           <h1 className={"display-8 fst-italic text-header font-smaller "}>Work Exerience</h1>
            <p className={"my-6 lead text-dark fw-bold"}>
            <h4>Commercial Sales Manager - Restaurant and Hospitality Channel </h4>
            <h6>National Power & Gas [May 2018-Present]</h6>
            <hr></hr>
            <h4>Director of Sales and Business Development </h4>
            <h6>Nutraw Farms [Jan 2013-May 2018]</h6>
            <hr></hr>
            <h4>Sales and Operations Manager</h4>
            <h6>Anne Fontaine Paris [March 2009-March 2013]</h6>
            </p>


           </div>


            </div>
            
          
          
          
          </div> 


          
            


        </div>
       </main>
     </div>  
 )
}

export default About;