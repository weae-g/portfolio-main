function AboutPage() {
	return (
		<div className='page about-page'>
			<div className='page__header'>
				<h1 className='page__title'>// About Me</h1>
			</div>
			<div className='page__content'>
				<pre>
					<code>
						<span className='keyword'>const</span> aboutMe{' '}
						<span className='operator'>=</span> {'{'}
						<br />
						&nbsp;&nbsp;<span className='property'>name</span>:{' '}
						<span className='string'>"Ainur"</span>,<br />
						&nbsp;&nbsp;<span className='property'>age</span>:{' '}
						<span className='number'>21</span>,<br />
						&nbsp;&nbsp;<span className='property'>location</span>:{' '}
						<span className='string'>"Kazan, Russia"</span>,<br />
						&nbsp;&nbsp;<span className='property'>profession</span>:{' '}
						<span className='string'>"Web Developer"</span>,<br />
						&nbsp;&nbsp;<span className='property'>interests</span>: [
						<span className='string'>"Coding"</span>,{' '}
						<span className='string'>"Music"</span>], <br />
						&nbsp;&nbsp;<span className='property'>skills</span>: [
						<span className='string'>"JavaScript"</span>,{' '}
						<span className='string'>"React"</span>,{' '}
						<span className='string'>"Vue"</span>,{' '}
						<span className='string'>"CSS"</span>,{' '}
						<span className='string'>"HTML"</span>,{' '}
						<span className='string'>"Node.js"</span>]<br />
						{'}'};
					</code>
				</pre>
				<p className='text'>
					Hello! I'm Ainur, a passionate web developer with a strong background
					in JavaScript (ES6), HTML5, CSS3, and RESTful APIs. I have a diverse
					skill set, with extensive experience in both frontend and backend
					development.
				</p>
				<p className='text'>
					<strong>Frontend:</strong>
				</p>
				<ul className='text'>
					<li>Frameworks: Vue3 (Options API & Composition API), React</li>
					<li>
						UI Frameworks: MUI, Bootstrap, Tailwind, Quasar, Vuetify, Ant Design
					</li>
					<li>CSS Preprocessors: Sass/Scss</li>
					<li>State Managers: Vuex, Redux, Redux Toolkit, Zustand</li>
				</ul>
				<p className='text'>
					<strong>Backend:</strong>
				</p>
				<ul className='text'>
					<li>Frameworks: Express.js, Nest.js</li>
					<li>RESTful API Development</li>
					<li>Databases: PostgreSQL, MS SQL Server</li>
				</ul>
				<p className='text'>
					I primarily write code in Vue3 but am also proficient with React and
					Redux (RTK), and I am ready to switch to React if needed. I have
					experience developing mobile applications using React-Native.
				</p>
				<p className='text'>
					I have a proven track record of developing full-stack applications and
					am capable of quickly learning new technologies and integrating into a
					team.
				</p>
			</div>
		</div>
	)
}

export default AboutPage
