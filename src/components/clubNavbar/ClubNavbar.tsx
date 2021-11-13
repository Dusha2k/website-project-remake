import React from 'react'
import { IClubDetails } from '../../interfaces/IStore/ClubDetailsStore'
import './style.scss'
import CardsHeader from '../card/CardsHeader'
import { NavLink } from 'react-router-dom'

type ClubProps = {
  club: IClubDetails
}

const ClubNavbar = ({ club }: ClubProps) => {
  return (
    <div className="club-navbar">
      <div className="club-navbar__image">
        <img src={`https://dere.shikimori.one${club.logo.original}`} alt="club-avatar" />
      </div>
      {club.animes.length > 0 && (
        <div className="club-navbar__widgets">
          <NavLink to={`/clubs/${club.id}/animes`}>
            <CardsHeader text={`Аниме (${club.animes.length})`} />
          </NavLink>
          <div>
            {club.animes.slice(0, 12).map((item) => {
              return (
                <NavLink key={item.name} to={`/animes/${item.id}`}>
                  <img src={`https://shikimori.one${item.image.original}`} alt={item.name} />
                </NavLink>
              )
            })}
          </div>
        </div>
      )}
      {club.mangas.length > 0 && (
        <div className="club-navbar__widgets">
          <NavLink to={`/clubs/${club.id}/mangas`}>
            <CardsHeader text={`Манга (${club.mangas.length})`} />
          </NavLink>
          <div>
            {club.mangas.slice(0, 12).map((item) => {
              return (
                <NavLink key={item.id} to={`/mangas/${item.id}`}>
                  <img src={`https://shikimori.one${item.image.original}`} alt={item.name} />
                </NavLink>
              )
            })}
          </div>
        </div>
      )}
      {club.characters.length > 0 && (
        <div className="club-navbar__widgets">
          <NavLink to={`/clubs/${club.id}/characters`}>
            <CardsHeader text={`Персонажи (${club.characters.length})`} />
          </NavLink>
          <div>
            {club.characters.slice(0, 12).map((item) => {
              return (
                <NavLink key={item.id} to={`/characters/${item.id}`}>
                  <img src={`https://shikimori.one${item.image.original}`} alt={item.name} />
                </NavLink>
              )
            })}
          </div>
        </div>
      )}
      {club.members.length > 0 && (
        <div className="club-navbar__widgets">
          <NavLink to={`/clubs/${club.id}/members`}>
            <CardsHeader text={`Участники (${club.members.length})`} />
          </NavLink>
          <div>
            {club.members.slice(0, 12).map((item) => {
              return (
                <NavLink key={item.id} to={`/profile/${item.id}`}>
                  <img className="member-img" src={item.image.x64} alt={item.image.x64} />
                </NavLink>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default ClubNavbar
