import React from 'react'
import { observer } from 'mobx-react'
import './style.scss'
import logo from '../../assets/img/logo.png'
import { getRequest } from '../../api/Request'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  const randomAnime = async () => {
    const random: any = await getRequest('animes?order=random').then((res) => res.data)
    history.push(`/animes/${random[0].id}`)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="row wrapper align-content-center justify-content-between">
          <img onClick={() => history.push('/')} className="header__logo" src={logo} alt="logo" />
          <div className="header__navbar row align-content-center justify-content-between">
            <div onClick={() => history.push('/')}>
              <span>Главная</span>
            </div>
            <div>
              <span>Аниме</span>
            </div>
            <div onClick={() => randomAnime()}>
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
