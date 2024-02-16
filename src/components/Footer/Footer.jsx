import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={`p-5 has-background-black ${style.footer}`}>
            <div className='content has-text-centered'>
                <p className='title'>
                    <span className='has-text-success'>M</span>
                    ade
                    <span className='has-text-success'>W</span>ith{' '}
                    <span className='icon has-text-success'>
                        <FontAwesomeIcon
                            icon={faHeart}
                            beat
                        />
                    </span>{' '}
                    <br />
                    <span className='subtitle'>- @El_Gemmy</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
