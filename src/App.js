// import logo from './codechef.svg';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { sendForm } from 'emailjs-com'

function closeMenu() {
	document.getElementById('check').click();
}

function closeMenuKey(event) {
	if (event.keyCode === 27)
		document.getElementById('check').click();
}

function changeScrollWidth(event) {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
		height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
		scrolled = (winScroll / height) * 100;
	document.getElementById("scrollPos").style.width = scrolled + "%";
}

function Navbar() {
	return (
		<nav>
			<input type="checkbox" id="check" />
			<label htmlFor="check" className="checkbtn" onKeyPress={() => closeMenuKey()}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</label>
			<label className="logo"><a href="#home" style={{ color: 'white' }}>Shubham Jindal</a></label>
			<ul style={{ 'listStyleType': 'none' }}>
				<li className="center">
					<div>
						<img src={process.env.PUBLIC_URL + "/myimg.png"} alt="Avatar" />
					</div>
					<div style={{ fontSize: 'x-large', fontWeight: 'bolder', padding: '5px 0' }}>
						Shubham Jindal
					</div>
					<div>
						<a href="https://github.com/jindal2209" target="_blank" rel="noreferrer">
							<i className="fab fa-github"></i>
						</a>
						<a href="https://www.linkedin.com/in/shubham-jindal-116431193" target="_blank" rel="noreferrer">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</li>
				<li><a href="#home" onClick={() => closeMenu()}><i className="fas fa-home"></i> Home</a></li>
				<li><a href="#about" onClick={() => closeMenu()}><i className="fas fa-user"></i> About</a></li>
				<li><a href="#skills" onClick={() => closeMenu()}><i className="fas fa-lightbulb"></i> Skills</a></li>
				<li><a href="#experience" onClick={() => closeMenu()}><i className="fas fa-id-card"></i> Experience</a></li>
				<li><a href="#projects" onClick={() => closeMenu()}><i className="fas fa-file-alt"></i> Projects</a></li>
				<li><a href="#contact" onClick={() => closeMenu()}><i className="fas fa-id-card-alt"></i> Contact</a></li>
			</ul>
			<div className='scrollPos' id='scrollPos'></div>
		</nav>
	)
}

function About() {
	return (
		<div className='row flex justify-content-center align-items-center' id="about">
			<div className='col-md-6' data-aos='zoom-in'>
				<div className='row'>
					<div className='col-md-12'>
						<span className='h1 fw-bold'>
							Hello,<br /> My name is Shubham Jindal.
						</span>
						<br />
						<div className='h3 pb-5'>
							I am a Web Developer and a competitive programmer.
							I code in C++, Python and JavaScript. I also ❤️ hacking.
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<a className="introLinks" href="https://www.codechef.com/users/shubham7811" target="_blank" rel="noreferrer">
							<svg
								// className='fas'
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
								width="1em"
								height="1em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									// fill="#ffffff"
									d="M11.257.004c-.37.01-.735.04-1.1.095c-.54.054-1.08.325-1.675.595c-.757.324-1.515.649-2.218.703c-1.19.378-1.568.919-1.892 1.351c0 .054-.054.108-.054.108c-.433.865-.487 1.73-.325 2.595c.162.541.378 1.029.54 1.515c.38 1.028.758 2 .92 3.136c.163.325.324.757.432 1.19c.27.865.542 1.838 1.353 2.595l.006-.003c.017.019.03.04.048.057l.021-.01l-.02-.584c.648-.974 1.566-1.623 2.864-1.893c.52-.11 1.081-.15 1.663-.128a8.773 8.773 0 0 1 1.798.236c1.46.378 2.595 1.136 2.65 1.785c.027.354.04.695.032 1.036c0 .064-.004.128-.007.193l.136.068a.639.639 0 0 0 .206-.19l.003-.003l.006-.008c.04-.054.075-.124.11-.194c.02-.037.038-.086.056-.129c.205-.462.362-1.153.538-1.963c.054-.27.11-.487.163-.703c.433-.973 1.027-1.838 1.622-2.65c.973-1.35 1.892-2.595 1.784-4.055c-1.784-3.461-4.272-4.002-5.57-4.272c-.216-.054-.323-.054-.485-.108c-1.338-.244-2.494-.396-3.605-.365zM16.3 14.383a9.86 9.86 0 0 0-.032-.983c-.054-.703-1.19-1.46-2.704-1.838a9.536 9.536 0 0 0-1.744-.236a6.761 6.761 0 0 0-1.555.128c-1.244.27-2.216.92-2.811 1.892l.051 1.431c.667-.355 1.733-.874 3.14-1c.065-.005.136-.005.204-.009c.117-.013.266-.044.444-.044c1.607 0 3.268.534 4.877 1.648c.039-.274.06-.549.07-.823l.045.023c.002-.063.014-.127.015-.19zM11.256.058c.124-.004.254.01.379.011c-.23-.002-.459.003-.687.016c.103-.006.205-.024.308-.027zm.498.015a16.569 16.569 0 0 0 0 0zM10.44.13c-.076.009-.153.013-.229.024c-.817.117-1.774.701-2.75 1.045c.355-.132.714-.296 1.075-.45c.54-.27 1.135-.541 1.621-.595c.094-.014.189-.013.283-.024zm-.229.24c.162 0 .379 0 .541.054a.995.995 0 0 0-.37-.014a1.174 1.174 0 0 1 .316.068c.58 1-.426 5.279-.679 8.149c.156 1.027.314 1.996.463 2.72c-.703-1.784-1.406-4.921-1.515-7.354c-.054-.973.001-1.839.218-2.487C9.4.855 9.725.423 10.21.369zm3.136.27c-.81 2.11-.918 6.11-.972 7.354c-.054.54 0 1.73.054 2.595c0 .216.054.432.054.649c0-.217-.054-.379-.054-.595c-.433-3.244-.974-7.136.918-10.002zm3.352.379c-.27 2.162-1.405 3.19-1.783 5.3c-.108 1.676-.325 3.622-.379 5.298c-.054-1.676 0-3.46.27-5.245c.27-1.838.865-3.677 1.892-5.353zM6.32 1.45zm.21.197a.856.856 0 0 1 .6.236l-.014-.007c.133.092.266.209.393.384c-.204.968.255 3.032.04 4.67c.076 1.548.071 3.18.849 4.459c-.98-1.51-1.176-3.438-1.322-5.236c-.113-1.09-.204-2.097-.464-2.903c-.144-.305-.269-.575-.384-.822c-.024-.037-.044-.079-.07-.114a.582.582 0 0 1-.162-.377c0-.054.053-.162.108-.162c.054-.054.161-.056.215-.11a1.013 1.013 0 0 1 .21-.018zm-1.347.613c-.06.02-.092.041-.14.061c.177-.034.362.034.52.318c-.188.892.436 3.369.428 5.104c.313 1.848.55 3.85 1.572 5.115c-1.19-1.351-1.676-3.73-2.054-5.731c-.325-1.568-.596-2.92-1.136-3.352c-.054-.108-.108-.163-.108-.271c0-.162 0-.379.108-.595c-.277.634-.405 1.267-.37 1.901a3.844 3.844 0 0 1 .37-1.901c0-.054.054-.054.054-.108c.012-.016.031-.035.044-.051a.878.878 0 0 1 .226-.257c.055-.061.096-.12.159-.182c-.053.056-.088.11-.134.165c.027-.018.052-.037.084-.052a.49.49 0 0 1 .377-.164zm-.377.164c-.004.007-.008.01-.012.018l.037-.03l-.025.012zm14.76 1.134l-.005.015c.038-.005.075-.017.113-.015c-.037-.002-.076.01-.115.02c-.863 2.642-1.887 5.284-2.911 7.926a.018.018 0 0 1-.002.003c-.087.465-.234.884-.54 1.19c.433-.487.486-1.191.54-2.056c.054-.811.054-1.676.487-2.542c0-.053.001-.105.053-.159l.001-.002c.097-.353.202-.689.317-1.018c.418-1.29 1.14-3.166 2.013-3.34c.016-.006.034-.019.05-.022zM8.374 16.21l-.324.108c.162.217.27.38.378.433a.784.784 0 0 0 .379.108c.054 0 .161 0 .215-.054l.812-.27c.054 0 .108-.054.162-.054c.108 0 .162 0 .27.054l.271.27l.27-.054c-.108-.162-.27-.323-.378-.377c-.108-.054-.217-.11-.379-.11h-.108l-.866.325h-.161c-.109 0-.216 0-.27-.054c-.054-.054-.163-.162-.271-.325zm-2.596.541c-.27.162-.649.433-1.19.649c-.54.216-.973.433-1.19.649c-.215.216-.323.432-.323.649c0 .108.054.163.162.217c.054.054.163.054.217.108c.757.324 1.514.702 2.216 1.08c.109.054.217.163.272.217c.054.054.107.054.161.054c.109 0 .27-.053.378-.162c.108-.108.163-.217.163-.325c0-.108-.055-.161-.163-.215c0 0-.433-.217-1.19-.541a11.967 11.967 0 0 1-1.188-.595c.162-.27.486-.487.973-.703c.54-.216.92-.433 1.081-.595c.054-.054.054-.108.054-.162a.412.412 0 0 0-.108-.217a.415.415 0 0 0-.27-.108zm11.247 0a.408.408 0 0 0-.216.108c-.054.108-.109.163-.109.217v.054c.162.162.38.27.704.378c.27.054.54.163.811.217c.324.108.54.27.649.486v.055c0 .054-.109.162-.325.27c-.108.054-.325.217-.595.433c-.27.162-.433.323-.595.377c-.216.109-.378.217-.432.326c-.054.054-.054.107-.054.161c0 .108.054.108.108.216s.162.11.216.11c.054 0 .108-.056.162-.056c.27-.162.65-.378 1.082-.757c.486-.378.865-.648 1.082-.81c.216-.108.323-.217.323-.38c0-.053 0-.161-.108-.215c-.378-.433-.918-.702-1.567-.919c-.108-.054-.27-.109-.595-.163c-.162-.054-.325-.108-.433-.108zm-2.974.81c-.27 0-.487.056-.649.218c-.216.162-.27.432-.216.757c0 .27.108.486.27.703c.162.216.379.325.595.325c.162 0 .27-.056.433-.11c.27-.162.379-.432.379-.918c0-.379-.109-.649-.271-.81a.915.915 0 0 0-.541-.164zm-4.488.055c-.27 0-.486.055-.648.217c-.217.162-.27.432-.216.757c0 .27.107.486.27.702s.378.326.594.326c.163 0 .271-.056.433-.11c.27-.162.378-.432.378-.918c0-.433-.108-.703-.27-.81a.915.915 0 0 0-.54-.164zm0 .65c.163 0 .271.108.271.27c0 .162-.163.27-.27.27c-.163 0-.27-.108-.27-.27s.107-.27.27-.27zm4.38.054c.162 0 .271.107.271.27c0 .108-.109.27-.27.27c-.163 0-.27-.108-.27-.27c0-.163.107-.27.27-.27zm-2.703 2.108l.162.324a.947.947 0 0 0 .216.271c.054.054.163.162.27.162h.109c.108 0 .161 0 .215-.054c.054-.054.164-.054.218-.108l.161-.162c.054-.054.108-.109.108-.163c.054-.054.054-.108.108-.162c0-.054.054-.108.054-.108c-.054.108-.162.216-.216.324c-.108.054-.161.163-.27.163c-.107.054-.216.054-.324.054s-.216 0-.27-.054c-.108 0-.163-.054-.217-.108l-.162-.163c-.054-.054-.108-.162-.162-.216zm-.866 1.028c-1.136 0-1.838 1.514-3.46.162c-.432 2.65 2.758 2.866 4.11 1.73c.92-.81.648-1.946-.65-1.892zm2.866 0c-1.297-.054-1.568 1.082-.648 1.893c1.351 1.135 4.54.918 4.108-1.731c-1.622 1.352-2.27-.162-3.46-.162z"
									className="color626262 svgShape"
								></path>
							</svg>

						</a>
						<a className="introLinks" href="https://www.hackerrank.com/shubham7811" target="_blank" rel="noreferrer">
							<i className="fab fa-hackerrank"></i>
						</a>
						<a className="introLinks" href="https://www.linkedin.com/in/shubham-jindal-116431193" target="_blank" rel="noreferrer">
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a className="introLinks" href="https://www.github.com/jindal2209" target="_blank" rel="noreferrer">
							<i className="fab fa-github"></i>
						</a>
						<a className="introLinks" href="#contact">
							<i className="fas fa-id-card-alt"></i>
						</a>
					</div>
				</div>
			</div>
			<div className='col-md-6 py-5' data-aos="zoom-in">
				<img className='img img-fluid' src={process.env.PUBLIC_URL + "/develop.gif"} alt="" />
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

function PrecentageBar(props) {
	var wid = props.val
	return (
		<div className="row percentageBar">
			<div className='col-md-12'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='float-start fw-bold'>
							<img src={props.src} alt={props.name} width='30' height='30' style={{ padding: '5px' }} />
							{props.name}
						</div>
						<div className='float-end fw-bold'>{wid}%</div>
					</div>
				</div>
				<div className='row'>
					<div className="progress" style={{ padding: 0 }}>
						<div
							className="progress-bar bg-info" role="progressbar"
							style={{ width: `${wid}%`, transition: '0ms ease-out' }}
							aria-valuenow={props.val}
							aria-valuemin="0"
							aria-valuemax="100"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

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


function Skills() {
	return (
		<div className='row my-5' id='skills'>
			<h1 className='header'>
				Skills
			</h1>
			<div className='col-md-6 fst' data-aos='zoom-in'>
				<PrecentageBar
					name='C++'
					val='80'
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-line.svg"
				/>
				<PrecentageBar
					name="Python"
					val='80'
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
				/>
				<PrecentageBar
					name="Javascript"
					val='80'
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
				/>
				<PrecentageBar
					name='SQL'
					val='60'
					src="https://img.icons8.com/plasticine/100/000000/oracle-pl-sql--v3.png"
				/>
				<PrecentageBar
					name='AWS'
					val='70'
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
				/>
			</div>
			<div className='col-md-6' data-aos='zoom-in'>
				<PrecentageBar
					name='Django'
					val='85'
					src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/django/django-original.svg"
				/>
				<PrecentageBar
					name='React'
					val='70'
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
				/>
				<PrecentageBar
					name='CSS'
					val='60'
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg"
				/>
				<PrecentageBar
					name='HTML'
					val='80'
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg"
				/>
				<PrecentageBar
					name='Bootstrap'
					val='80'
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg"
				/>
			</div>
		</div>

	)
}

function ProjectComponent(props) {
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

function Projects() {
	return (
		<div className='row my-5' id='projects'>
			<h1 className='header'>
				Projects
			</h1>
			<div className=''>
				<ProjectComponent
					name='URL Shortener'
					desc='A URL shortener using hashing.'
					link='https://bitny.herokuapp.com/'
					hosted={true}
					available={true}
				/>
				<ProjectComponent
					name='Algolizer'
					desc='An application showing visulization of various algorithms like sorting, backtracking, graphs, heaps tries.'
					link='https://jindal2209.github.io/Algolizer/'
					hosted={true}
					available={true}
				/>
				<ProjectComponent
					name='Text Editor Auto Suggestion'
					desc='A text editor that also provides suggestion based on previous text entered by the user. Data Structures used Tries, Maps, Graphs.'
					link='https://jindal2209.github.io/Text_Editor_Auto_Suggestion/'
					hosted={true}
					available={true}
				/>
				<ProjectComponent
					name='Transaction Settlement'
					desc='An application that allows consumers to split expenses with friends similar to split-wise. Implemented using heaps. Implemented heap data structure in java-script.'
					link='https://jindal2209.github.io/transaction_settlement_splitwise/'
					hosted={true}
					available={true}
				/>
				<ProjectComponent
					name='Customer Portal'
					desc='A customer portal application from which customer can raise tickets and connect with the agent to resolve issues.'
					hosted={true}
					available={false}
				/>
				<ProjectComponent
					name='Student Result Consolidation System'
					desc='An application that parses the PDF and stores the data in data-base. Back-end is developed using Django and front-end is developed using React. User can enter the enrollment number and check his/her results along with some data visualization using graphs and charts.'
					link='https://github.com/jindal2209/SRCS_Frontend'
					hosted={false}
					available={true}
				/>
				<ProjectComponent
					name='College Website'
					desc='Created REST APIs for the college website using Django and Django-REST-Framework'
					link='http://www.bpitindia.com/'
					hosted={true}
					available={true}
				/>
				<ProjectComponent
					name='Todo Application'
					desc='A to-do application to create and keep notes of daily tasks.'
					link='https://todowo.herokuapp.com/'
					hosted={true}
					available={true}
				/>
			</div>
		</div>
	)
}

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

function Experience() {
	return (
		<div className='row my-5' id='experience'>
			<h1 className='header'>
				Experience
			</h1>
			<div className=''>
				<ExperienceComponent
					company_name='Shiprocket'
					position='Software Enginner Intern'
					duration='January 2022 - Present'
					desc={[
						'Working with fullfilment team in front-end development using Angular.'
					]}
				/>
				<ExperienceComponent
					company_name='Corefactors'
					position='Junior Associate Enginner Intern'
					duration='August 2021 - October 2021'
					desc={[
						'Worked with team on design and development of Customer relationship management Teleduce built using Django.',
						'Implemented some UI based feature to make application more interactive.',
						'Developed a customer portal application from which customer can raise tickets and connect with the agent to resolve issues.',
						'Got to learn about Django, cloud infrastructure, CI/CD pipelines, and lead management in CRMs.'
					]}
				/>
			</div>
		</div>
	)
}

function Contact() {
	function handleSubmit(event) {
		event.preventDefault();
		sendForm('service_6ebkcfa', 'template_hplii1x', event.target, 'user_IhOvwPmZx03tapCaAwqBf')
			.then(() => {
				alert("message sent successfully. ")
				event.target.reset();
			})
			.catch((error) => {
				alert(error.text)
			})
	}

	return (
		<div className='row my-5' id='contact' >
			<h1 className='header'>
				Contact
			</h1>
			<div className='col-md-6 px-3 py-3' style={{ textAlign: 'left' }} data-aos='zoom-in'>
				<h3>
					Lets talk about work
				</h3>
				<i className="fas fa-globe-asia"></i>Address: New Delhi,India
				<br />
				<i className="fas fa-envelope"></i>Email: shubham7811@yahoo.com
			</div>
			<div className='col-md-6' data-aos='fade-up'>
				<div className='col-md-6' data-aos='zoom-in'>
					<form onSubmit={(e) => handleSubmit(e)}>
						<input className='textInput my-2' type="text" name="name" placeholder="Name" required="" />
						<br />
						<input className='textInput my-2' type="email" name="email" placeholder="Email Address" required="" />
						<br />
						<textarea className='textInput my-2' name="message" placeholder="Message" required=""></textarea>
						<br />
						<input className='customBtn' type="submit" value="Send" />
						<br /><br />
					</form>
				</div>
			</div>
		</div >
	)
}

function Footer() {
	return (
		<footer className="footer">
			{/* Shubham Jindal, &#169; Copyright 2021 */}
			<h6><b>Shubham Jindal</b></h6>
		</footer>
	)
}

function App() {
	useEffect(() => {
		document.addEventListener('keydown', closeMenuKey);
		document.addEventListener('scroll', changeScrollWidth)
		AOS.init();
	}, [])

	return (
		<>
			<div id='home'></div>
			<Navbar />
			<div className='container'>
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</div>
			<Footer />
		</>
	);
}

export default App;