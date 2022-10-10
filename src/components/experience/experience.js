import React from 'react';
import { data } from './experience_data';

function ExperienceComponent(props) {
  props = props.data
  return (
    <div className='p-3' data-aos='zoom-in'>
      <h4>
        {props.position}
      </h4>
      <h4 style={{ textDecoration: 'underline' }}>
        <b>{props.company_name}</b>
      </h4>
      <h5>
        {props.duration}
      </h5>
      <ul className='bullet-list'>
        {props.desc.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </div>
  )
}


export default function Experience() {
  return (
    <div className='row my-5' id='experience'>
      <h1 className='header'>
        Experience
      </h1>
      {data.map((val, key) => (
        <ExperienceComponent key={key} data={val} />
      ))}
    </div>
  )
}