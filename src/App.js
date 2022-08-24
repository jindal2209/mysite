import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'aos/dist/aos.css'
import AOS from 'aos';

// components
import Skills from './components/skill/skill';
import About from './components/about/about';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';
import Experience from './components/experience/experience';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

// utils
import { closeMenuKey, changeScrollWidth } from './utils/utils';

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
