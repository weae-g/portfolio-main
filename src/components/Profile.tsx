import React from 'react'
import { FaTelegram, FaGithub } from 'react-icons/fa'
import Typewriter from './Typewriter'

const Profile: React.FC = () => {
	const texts = [
		'Fullstack-разработчик',
		'Tech enthusiast',
		'Music lover',
		'Im always learning something new.',
	]

	return (
		<div className='profile'>
			<div className='profile__header'>
				<p>Profile</p>
			</div>
			<div className='profile__content'>
				<div className='profile__image'>
					<img src='/panda.png' alt='profile' />
				</div>
				<div className='profile__body'>
					<p className='profile__name'>Khamidullin Ainur</p>
					<Typewriter texts={texts} speed={100} />
					<div className='profile__socials'>
						<a href='https://t.me/weae-g' className='profile__social-link'>
							<FaTelegram />
						</a>
						<a
							href='https://github.com/weae-g'
							className='profile__social-link'
						>
							<FaGithub />
						</a>
					</div>
					{/* <div className="language">
            <div className="language__item">
              <img src="/rus.png" alt="Russian" />
            </div>
            <div className="language__item">
              <img src="/eng.png" alt="English" />
            </div>
          </div> */}
				</div>
			</div>
		</div>
	)
}

export default Profile
