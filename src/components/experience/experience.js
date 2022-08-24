import React from 'react';
import { data } from './experience_data';

function ExperienceComponent(props) {
  props = props.data
  return (
    <div className='py-3 px-2' data-aos='zoom-in'>
      <h4>
        {props.position}
      </h4>
      <h5 style={{ textDecoration: 'underline' }}>
        <b>{props.company_name}</b>
      </h5>
      <h6>
        {props.duration}
      </h6>
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
      <div>
        {data.map((val, key) => (
          <ExperienceComponent key={key} data={val} />
        ))}
      </div>
    </div>
  )
}