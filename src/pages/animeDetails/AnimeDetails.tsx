import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailsPageStore from '../../store/DetailsPageStore'
import { observer } from 'mobx-react'
import './style.scss'
import Comment from '../../components/comment/Comment'
import Button from '../../components/button/Button'
import CardsHeader from '../../components/card/CardsHeader'

const AnimeDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { getCurrentAnime, currentAnime, getComments, animeComments, clearCurrentAnime } = DetailsPageStore
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCurrentAnime(id)
    return () => {
      clearCurrentAnime()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (Object.keys(currentAnime).length > 0) getComments(currentAnime.topic_id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAnime])

  const changeHttpToHttps = () => {
    const src = currentAnime.videos?.[0].player_url.includes('https')
      ? currentAnime.videos?.[0].player_url
      : 'https:' + currentAnime.videos?.[0].player_url.split(':')[1]
    return (
      <div className="rc-player">
        <iframe title="video" src={src as string} />
      </div>
    )
  }

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
      {currentAnime.videos?.[0]?.player_url && changeHttpToHttps()}
      {animeComments && (
        <div className="comments">
          <CardsHeader text="Комментарии" />
          {animeComments.map((item) => (
            <Comment item={item} key={item.created_at} />
          ))}
        </div>
      )}
      <div className="more-comments">
        <Button
          color="red"
          borderRadius="5px"
          text="ЕЩЁ КОММЕНТАРИИ"
          onClick={() => {
            setPage(page + 1)
            getComments(currentAnime.topic_id, `${page + 1}`)
          }}
        />
      </div>
    </div>
  )
}

export default observer(AnimeDetails)
