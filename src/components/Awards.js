import React, { useState, useEffect } from "react";

import '../css-components/awards.css'
import card1 from '../images/award1.jpg'
import card2 from '../images/award2.jpg'
import card3 from '../images/award3.jpg'
import { PopUp } from "./PopUp";
import '../css-components/certificates.css'
import JsonData from '../data/data.json'

export const Awards = (props) => {
 


  
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);








  
  return (

    <div id="awards" className='text-center'>
      {props.data
        ? props.data.map((d, i) => (


          <article class="card" key={`${d.title}-${i}`}  >
            <header class="card__thumb">
              <a><img src={card1} /></a>
            </header>
            <div class="card__body">
              <div class="card__category"><a ><b>A w a r d</b></a></div>
              <h2 class="card__title"><a >{d.title}</a></h2>
              <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                more
              </button>
              <div className='row'>

      <PopUp data={landingPageData.Awards}/>
              </div>
              {/* <div class="card__subtitle">more </div> */}
              <p class="card__description">
                {d.description}
              </p>
            </div>
            <footer class="card__footer">
              <span class="icon ion-clock"></span> 10 mins ago
              <span class="icon ion-chatbox"></span><a href="#"> 145 comments</a>
            </footer>
          </article>
        ))
        : "loading"}




    </div>

  )
}
