import React from 'react'
import Star from '../../assets/icons/star-solid.svg'
import './style.scss'
import { observer } from 'mobx-react'
import { ICardProps } from '../../interfaces/IComponents/Card'
import cn from 'classnames'
import { useHistory } from 'react-router-dom'

const Card = ({ id, episodes, episodes_aired, image, russian, score, broad = false, customClass }: ICardProps) => {
  const history = useHistory()
  const animeEpisodes = () => {
    if (episodes === 0) {
      return `${episodes_aired} / ?`
    } else if (episodes_aired === 0) {
      return `${episodes} / ${episodes}`
    } else {
      return `${episodes_aired} / ${episodes}`
    }
  }

  const handleClick = (currId: number) => {
    history.push(`/animes/${currId}`)
  }

  return !broad ? (
    <div className={cn('card-wrapper', broad ? 'broad-wrapper' : '', customClass)} onClick={() => handleClick(id)}>
      <div className="card-wrapper__img" style={{ backgroundImage: `url(https://shikimori.one${image.original})` }}>
        <span className="series">{animeEpisodes()}</span>
        <div>
          <span className="svg-icon" dangerouslySetInnerHTML={{ __html: Star }} />
          {score}
        </div>
      </div>
      <div className="card-wrapper__title">{russian}</div>
    </div>
  ) : (
    <div className={cn('card-wrapper', broad ? 'broad-wrapper' : '', customClass)} onClick={() => handleClick(id)}>
      <div className="card-wrapper__img" style={{ backgroundImage: `url(https://shikimori.one${image.original})` }}>
        <div className="top-side__card">
          <span className="series">{animeEpisodes()}</span>
          <div>
            <span className="svg-icon" dangerouslySetInnerHTML={{ __html: Star }} />
            {score}
          </div>
        </div>
        <div className="card-wrapper__title">{russian}</div>
      </div>
    </div>
  )
}

export default observer(Card)
