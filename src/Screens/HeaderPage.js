import React from 'react';


function HeaderPage(){
	
	return(<div>
	
			<header>
				<button className='head nav-head'>Sumit Dhakad</button>
				<div className='nav'>
					<a href='#home'>Home</a><br/>
					<a href='#about-me'>About me</a><br/>
					<a href='#highlight'>Highlight</a><br/>
					<a href='#all-skills'>All skills</a><br/>
					<a href='#experience'>Experience</a><br/>
					<a href='#projects'>Projects</a><br/>
					<a href='#contacts'>Contacts</a><br/>
				</div>
			</header>
			
			<section id='home' style={{'background-image':'url("/img/Back.jpg")'}}>
				<h2 className='hero-head'>A self taught</h2>
				<h2 className='hero-head'>Full Stack Web Developer</h2>
			</section>
			
			<section id='about-me'>
				<h3 className='section-head'>ABOUT ME</h3>
				
				<p>A Full Stack Web Developer, who always wants to seek knowledge about 
				new technologies and ideas..</p>
			</section>
			<section id='highlight'>
				<h3 className='section-head'>HIGHLIGHTS</h3>
				
				<p>Machine Learning</p>
				<p>Deep Learning</p>
				<p>Django</p>
				<p>MySQL</p>
				<p>React</p>
			</section>
			<section id='all-skills'>
				<h3 className='section-head'>ALL SKILLS</h3>

				<div className='sub-section'>
					<div>
						<p>Python</p>
						<p>Keras</p>
						<p>Sk-learn</p>
						<p>Pandas</p>
						<p>Numpy</p>
						<p>Matplotlib</p>
						<p>Django</p>
						<p>Djangorestframework</p>
					</div>

					<div>
						<p>React</p>
						<p>HTML5</p>
						<p>CSS3</p>
						<p>JavaScript</p>
						<p>GSAP3</p>
						<p>Pygame</p>
						<p>C++</p>
						<p>Swift</p>
					</div>
				</div>

			</section>
			
			<section id='experience'>
				<h3 className='section-head'>EXPERIENCE</h3>
				<p>lkasdjfl;jaSDLKFJJ</p>
			</section>

			<section id='projects'>
				<h3 className='section-head'>PROJECTS</h3>
				<p>lkasdjfl;jaSDLKFJJ</p>
			</section>
			
			<section id='contacts'>
				<h3 className='section-head'>CONTACTS</h3>
				<p>lkasdjfl;jaSDLKFJJ</p>
			</section>
									
		</div>)
}

export default HeaderPage;
