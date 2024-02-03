import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
	return (
		<>
			<div
				className='navbar is-fixed-top is-black pr-1'
				role='navigation'
				aria-label='main navigation'
			>
				<div className='navbar-brand'>
					<Link
						className='navbar-item'
						to={`${BASE_URL}`}
					>
						<span className='icon-text'>
							<span className='icon'>
								<FontAwesomeIcon
									icon={faCircleCheck}
									size='lg'
									className='pr-1 pt-1'
									shake
								/>
							</span>
							<span className='subtitle has-text-white'>My Awesome Todo</span>
						</span>
					</Link>

					<a
						role='button'
						className='navbar-burger'
						aria-label='menu'
						aria-expanded='false'
					>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
					</a>
				</div>
				<div className='navbar-menu'>
					<div className='navbar-end'>
						<div className='buttons'>
							<button className='navbar-item button outlined has-text-weight-bold'>
								Login
							</button>
							<button className='navbar-item button has-text-weight-bold is-success'>
								Sign up
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
