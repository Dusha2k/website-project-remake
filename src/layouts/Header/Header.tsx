import React from 'react'
import { observer } from 'mobx-react'
import './style.scss'
import logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper row align-content-center justify-content-between">
          <img className="header__logo" src={logo} alt="logo" />
          <div className="header__navbar row align-content-center justify-content-between">
            <div>
              <span>Главная</span>
            </div>
            <div>
              <span>Аниме</span>
            </div>
            <div>
              <span>Случайное аниме</span>
            </div>
            {/*<div>Главная</div>*/}
          </div>
          <div className="header__input row align-content-center justify-content-center">
            <input type="text" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default observer(Header)
