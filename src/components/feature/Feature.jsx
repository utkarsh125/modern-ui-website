import React from 'react'
import './feature.css'


const Feature = ({orientation,title,text}) => {
  return (
    <div className={`${orientation==="vertical"?"gpt3__features-container__feature-vertical" : "gpt3__features-container__feature"}`}>
      <div className={`${orientation==="vertical"?"gpt3__features-container__feature-title-vertical":"gpt3__features-container__feature-title"}`}>
        <div />
        <h1>{title}</h1>
      </div>
      <div className={`${orientation==="vertical"?"gpt3__features-container__feature-text-vertical":"gpt3__features-container__feature-text"}`}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature;