import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailsPageStore from '../../store/DetailsPageStore'
import { observer } from 'mobx-react'
import './style.scss'

const AnimeDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { getCurrentAnime, currentAnime } = DetailsPageStore
  useEffect(() => {
    getCurrentAnime(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container cur-anime">
      {currentAnime && (
        <div className="row cur-anime__info">
          <img className="col-lg-3" src={`https://shikimori.one/${currentAnime.image?.original}`} alt="bg" />
          <div className="col-lg-9 full-info">
            <h3>{currentAnime.russian}</h3>
            <div className="descr">{currentAnime.description?.replace(/\[(?!\d+\])[^[\]]+\]/g, '')}</div>
            <div className="lists">
              <ul>
                <li>
                  <span>Тип: </span>
                  {currentAnime.kind?.toUpperCase()}
                </li>
                <li>
                  <span>{currentAnime.status === 'released' ? 'Дата выхода: ' : 'Выпускается с '}</span>
                  {currentAnime.released_on ? currentAnime.released_on : currentAnime.aired_on}
                </li>
                <li>
                  <span>Статус: </span>
                  {currentAnime.status === 'released' ? 'Вышло' : 'Онгоинг'}
                </li>
                <li>
                  <span>Жанры: </span>
                  {currentAnime.genres?.map((item, index) => {
                    if (index > 2) return null
                    return index === 2 ? item.russian : item.russian + ','
                  })}
                </li>
              </ul>
              <ul>
                <li>
                  <span>Просмотров: </span>
                  {currentAnime.rates_statuses_stats?.map((item, index) => (index === 1 ? item.value : ''))}
                </li>
                <li>
                  <span>Оценка: </span>
                  {currentAnime.score}
                </li>
                <li>
                  <span>Длительность: </span>
                  {currentAnime.duration} мин.
                </li>
                <li>
                  <span>Рейтинг: </span>
                  {currentAnime.rating?.toUpperCase()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default observer(AnimeDetails)