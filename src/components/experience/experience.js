import React from 'react';
import { data } from './experience_data';
import "./index.css";
import { getFormattedDateMonth, getFullDuration } from '../../utils/utils';

function getDuration(start_date, end_date) {
  return `${getFormattedDateMonth(start_date)} - ${getFormattedDateMonth(end_date)}`
}

function ExperienceComponent(props) {
  props = props.data
  return (
    <div className="p-3" data-aos="zoom-in">
      <div className="row">
        <div className="d-flex flex-row align-content-between">
          <div>
            <img className='img-fluid w-75' src={process.env.PUBLIC_URL + props.logo_path} alt="" />
          </div>
          <div>
            <h5 className='h5 fw-bolder'>{props.company_name}</h5>
            <h6 className='h6'>{getFullDuration(props.total_duration)}</h6>
            <h6 className='h6'>{props.location}</h6>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <ul className='experience-list'>
            {props.positions.map((position, idx) => (
              <li key={idx} className='list-item'>
                <div className="position-name fw-bolder">{position.name}</div>
                <span>
                  {getDuration(position.duration.start_date, position.duration.end_date)}
                  <ul className='bullet-list'>
                    {position.description.map((val, idx) => (
                      <li key={idx}>{val}</li>
                    ))}
                  </ul>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    // <div className='p-3' data-aos='zoom-in'>
    //   <h4>
    //     {props.position}
    //   </h4>
    //   <h4 style={{ textDecoration: 'underline' }}>
    //     <b>{props.company_name}</b>
    //   </h4>
    //   <h5>
    //     {props.duration}
    //   </h5>
    //   <ul className='bullet-list'>
    //     {props.desc.map((val, idx) => (
    //       <li key={idx}>{val}</li>
    //     ))}
    //   </ul>
    // </div>
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