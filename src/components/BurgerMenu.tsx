import React from 'react'
import {
	FaHome,
	FaUser,
	FaMailBulk,
	FaBook,
	FaTelegram,
	FaGithub,
	FaComment,
} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

interface BurgerMenuProps {
	isOpen: boolean
	onClose: () => void
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
	const location = useLocation()
	const currentPath = location.pathname

	const handleMenuClick = () => {
		onClose()
	}

	const renderMenuItem = (to: string, icon: JSX.Element, text: string) => (
		<li
			className={`burger-menu__item ${
				currentPath === to ? 'burger-menu__item--active' : ''
			}`}
			onClick={handleMenuClick}
		>
			<Link to={to} className='burger-menu__link'>
				{icon}
				<span className='burger-menu__text'>{text}</span>
			</Link>
		</li>
	)

	return (
		<div className={`burger-menu ${isOpen ? 'open' : ''}`}>
			<div className='burger-menu__content'>
				<button className='burger-menu__close' onClick={onClose}>
					&times;
				</button>
				<div className='burger-menu__profile'>
					<div className='profile__image'>
						<img src='/panda.png' alt='profile' />
					</div>
					<div className='burger-menu__body'>
						<p className='profile__name'>Khamidullin Ainur</p>
						<div className='profile__socials'>
							<a href='https://t.me/sadwoe' className='profile__social-link'>
								<FaTelegram />
							</a>
							<a
								href='https://github.com/ezy4me'
								className='profile__social-link'
							>
								<FaGithub />
							</a>
						</div>
					</div>
				</div>
				<ul className='burger-menu__list'>
					{renderMenuItem(
						'/',
						<FaHome className='burger-menu__icon' />,
						'Home'
					)}
					{renderMenuItem(
						'/about',
						<FaUser className='burger-menu__icon' />,
						'About'
					)}
					{renderMenuItem(
						'/projects',
						<FaBook className='burger-menu__icon' />,
						'Projects'
					)}
					{renderMenuItem(
						'/feedback',
						<FaComment className='burger-menu__icon' />,
						'Feedback'
					)}
					{renderMenuItem(
						'/contact',
						<FaMailBulk className='burger-menu__icon' />,
						'Contact'
					)}
				</ul>
			</div>
		</div>
	)
}

export default BurgerMenu
