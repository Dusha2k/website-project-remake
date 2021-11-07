import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

import Arrow from '../../assets/icons/arrow_up.svg'
import logo from '../../assets/img/logo.png'
import Telegram from '../../assets/icons/telegram.svg'
import Github from '../../assets/icons/github.svg'
import Vk from '../../assets/icons/vk.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__arrow" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
          <span dangerouslySetInnerHTML={{ __html: Arrow }}></span>
        </div>
        <div className="footer__wrapper">
          <img src={logo} alt="logo" />
          <div className="icons">
            <NavLink to={'/'}>Главная</NavLink>
            <NavLink to={'/'}>Аниме</NavLink>
            <span dangerouslySetInnerHTML={{ __html: Telegram }} />
            <span dangerouslySetInnerHTML={{ __html: Github }} />
            <span dangerouslySetInnerHTML={{ __html: Vk }} />
          </div>
          <div>
            This website is made
            <br />
            by Dusha2k with love
            <br />
            The design is not mine
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
