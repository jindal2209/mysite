import React from 'react';
import './skill.css'

function SkillComponent(props) {
  return (
    <div className="grid-item">
      <div className="skill-logo">
        <img src={props.src} alt="img" />
      </div>
      <div className="skill-title">
        {props.name}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className='row my-5' id='skills'>
      <h1 className='header'>
        Skills
      </h1>
      <div className='col-md-6 fst' data-aos='zoom-in'>
        <SkillComponent
          name='C++'
          val='80'
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-line.svg"
        />
        <SkillComponent
          name="Python"
          val='80'
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        />
        <SkillComponent
          name="Javascript"
          val='80'
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
        />
        <SkillComponent
          name='SQL'
          val='60'
          src="https://img.icons8.com/plasticine/100/000000/oracle-pl-sql--v3.png"
        />
        <SkillComponent
          name='AWS'
          val='70'
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
        />
      </div>
      <div className='col-md-6' data-aos='zoom-in'>
        <SkillComponent
          name='Django'
          val='85'
          src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/django/django-original.svg"
        />
        <SkillComponent
          name='React'
          val='70'
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        />
        <SkillComponent
          name='CSS'
          val='60'
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg"
        />
        <SkillComponent
          name='HTML'
          val='80'
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg"
        />
        <SkillComponent
          name='Bootstrap'
          val='80'
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg"
        />
      </div>
    </div>

  )
}


// function PrecentagelBar(props) {
// 	return (
// 		<div className='text-center m-1'>
// 			<img className='m-3' src={props.src} alt={props.name} width='50' height='50' style={{ padding: '5px' }} />

// 			{props.name}
// 		</div>
// 	)
// }

// function PrecentageBar(props) {
// 	var wid = props.val
// 	return (
// 		<div className="row percentageBar">
// 			<div className='col-md-12'>
// 				<div className='row'>
// 					<div className='col-md-12'>
// 						<div className='float-start fw-bold'>
// 							<img src={props.src} alt={props.name} width='30' height='30' style={{ padding: '5px' }} />
// 							{props.name}
// 						</div>
// 						<div className='float-end fw-bold'>{wid}%</div>
// 					</div>
// 				</div>
// 				<div className='row'>
// 					<div className="progress" style={{ padding: 0 }}>
// 						<div
// 							className="progress-bar bg-info" role="progressbar"
// 							style={{ width: `${wid}%`, transition: '0ms ease-out' }}
// 							aria-valuenow={props.val}
// 							aria-valuemin="0"
// 							aria-valuemax="100"></div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// function Skislls() {
// 	return (
// 		<div className='row my-5 pb-5' id='skills'>
// 			<h1 className='header'>
// 				Skills
// 			</h1>
// 			<div className='d-flex flex-wrap flex-row justify-content-start align-items-start' data-aos='zoom-in'>
// 				<PrecentageBar
// 					name='C++'
// 					val='80'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-line.svg"
// 				/>
// 				<PrecentageBar
// 					name="Python"
// 					val='80'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
// 				/>
// 				<PrecentageBar
// 					name="Javascript"
// 					val='80'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
// 				/>
// 				<PrecentageBar
// 					name='SQL'
// 					val='60'
// 					src="https://img.icons8.com/plasticine/100/000000/oracle-pl-sql--v3.png"
// 				/>
// 				<PrecentageBar
// 					name='AWS'
// 					val='70'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
// 				/>
// 				<PrecentageBar
// 					name='Django'
// 					val='85'
// 					src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/django/django-original.svg"
// 				/>
// 				<PrecentageBar
// 					name='React'
// 					val='70'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
// 				/>
// 				<PrecentageBar
// 					name='CSS'
// 					val='60'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg"
// 				/>
// 				<PrecentageBar
// 					name='HTML'
// 					val='80'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg"
// 				/>
// 				<PrecentageBar
// 					name='Bootstrap'
// 					val='80'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg"
// 				/>
// 			</div>
// 		</div>

// 	)
// }


// function Skills() {
// 	return (
// 		<div className='row my-5' id='skills'>
// 			<h1 className='header'>
// 				Skills
// 			</h1>
// 			<div className='col-md-6 fst' data-aos='zoom-in'>
// 				<PrecentageBar
// 					name='C++'
// 					val='80'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-line.svg"
// 				/>
// 				<PrecentageBar
// 					name="Python"
// 					val='80'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
// 				/>
// 				<PrecentageBar
// 					name="Javascript"
// 					val='80'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
// 				/>
// 				<PrecentageBar
// 					name='SQL'
// 					val='60'
// 					src="https://img.icons8.com/plasticine/100/000000/oracle-pl-sql--v3.png"
// 				/>
// 				<PrecentageBar
// 					name='AWS'
// 					val='70'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
// 				/>
// 			</div>
// 			<div className='col-md-6' data-aos='zoom-in'>
// 				<PrecentageBar
// 					name='Django'
// 					val='85'
// 					src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/django/django-original.svg"
// 				/>
// 				<PrecentageBar
// 					name='React'
// 					val='70'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
// 				/>
// 				<PrecentageBar
// 					name='CSS'
// 					val='60'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg"
// 				/>
// 				<PrecentageBar
// 					name='HTML'
// 					val='80'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg"
// 				/>
// 				<PrecentageBar
// 					name='Bootstrap'
// 					val='80'
// 					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg"
// 				/>
// 			</div>
// 		</div>

// 	)
// }