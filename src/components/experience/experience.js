import React from 'react';

function ExperienceComponent(props) {
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
      <div className=''>
        <ExperienceComponent
          company_name='Shiprocket'
          position='Software Enginner Intern'
          duration='January 2022 - Februrary 2022'
          desc={[
            'Implemented custom calendar for scheduling slots which will remove the unnecessary crowd at the warehouses by 90% and help control the number of employees at warehouses.',
            'Worked on automated integration of customer’s shopify stores with shiprocket application which will remove the manual installation process by 70% and reduce workload on sales team by 50%'
          ]}
        />
        <ExperienceComponent
          company_name='Corefactors'
          position='Junior Associate Enginner Intern'
          duration='August 2021 - October 2021'
          desc={[
            'Worked with team on design and development of Customer relationship management Teleduce built using Django.',
            'Implemented UI based feature to make application more interactive which increased customer base by 10%.',
            'Developed a customer portal application from which customer can raise tickets and connect with the agent to resolve issues which reduced the manual work by 20%',
            'Got to learn about Django, cloud infrastructure, CI/CD pipelines, and lead management in CRMs.'
          ]}
        />
      </div>
    </div>
  )
}