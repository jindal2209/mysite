import React from 'react';
import { data } from './projects_data';

function ProjectComponent(props) {
  props = props.data
  return (
    <div className='py-3 px-2' data-aos='zoom-in'>
      <h5 style={{ textDecoration: 'underline' }}>
        {props.name}
      </h5>
      {props.desc}
      <br />
      {props.available ? props.hosted ? "The project is hosted " : "The project is available " : null}
      {props.available ? <a style={{ color: 'white' }} href={props.link} target='_blank' rel='noreferrer'>here.</a> : null}
    </div>
  )
}

export default function Projects() {
  return (
    <div className='row my-5' id='projects'>
      <h1 className='header'>
        Projects
      </h1>
      {data.map((val, key) => (
        <ProjectComponent key={key} data={val} />
      ))}
    </div>
  )
}