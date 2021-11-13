import React, { useEffect, useState } from 'react'
import ClubDetailsStore from '../../../store/ClubDetailsStore'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import parser from 'html-react-parser'
import { getRequest } from '../../../api/Request'
import ClubNavbar from '../../../components/clubNavbar/ClubNavbar'
import CardsHeader from '../../../components/card/CardsHeader'
import { NavLink } from 'react-router-dom'
import Comment from '../../../components/comment/Comment'
import Button from '../../../components/button/Button'
import NotificationStore from '../../../store/NotificationStore'
import Loader from '../../../components/loader/Loader'
import './style.scss'

const ClubDetailsPage = () => {
  const { getCurrentClub, currentClub, getCommentsClub, clubComments, clearCommentsClub } = ClubDetailsStore
  const { id } = useParams<{ id: string }>()
  const [style, setStyle] = useState<any>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { loading } = NotificationStore

  useEffect(() => {
    getCurrentClub(+id)

    return () => {
      clearCommentsClub()
      setStyle(null)
      const myStyle = document.head.getElementsByTagName('style')
      myStyle[0].innerHTML = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Получение кастомных стилей
  useEffect(() => {
    if (Object.values(currentClub).length > 0 && !loading.getCurrentClub) {
      getRequest(`styles/${currentClub.style_id}`).then((res: any) => setStyle(res.data))
      getCommentsClub(currentClub.topic_id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentClub])

  //Установка кастомных стилей
  useEffect(() => {
    if (style) {
      const myStyle = document.head.getElementsByTagName('style')
      myStyle[0].innerHTML = style.compiled_css ? style.compiled_css : ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [style])

  if (loading.getCurrentClub || loading.getCommentsClub) return <Loader />

  return (
    <>
      {Object.values(currentClub).length > 0 && (
        <div className="club container l-page">
          <h1>{currentClub.name}</h1>
          <div className="menu">
            <div className="l-content">
              <div>
                {currentClub.name}
                <div>{currentClub.description_html ? parser(currentClub?.description_html) : 'Нет описания'}</div>
              </div>
            </div>
            <div className="r-menu">
              <ClubNavbar club={currentClub} />
            </div>
          </div>
          {currentClub.images.length > 0 && (
            <div className="clubs-images">
              <NavLink to={`clubs/${currentClub.id}/images`}>
                <CardsHeader text={`Картинки (${currentClub.images.length})`} />
              </NavLink>
              <div>
                {currentClub.images.slice(0, 20).map((item) => (
                  <img key={item.original_url} src={item.original_url} alt={`${item.id}`} />
                ))}
              </div>
            </div>
          )}
          <div className="clubs-comments">
            <CardsHeader text="Комментарии" />
            <div className="comments-list">
              {clubComments.length > 0
                ? clubComments.map((item) => <Comment key={item.created_at} item={item} />)
                : 'Нет комментариев'}
            </div>
            <div className="more-comments">
              {clubComments.length >= 10 && (
                <Button
                  color="red"
                  borderRadius="5px"
                  text="ЕЩЁ КОММЕНТАРИИ"
                  onClick={() => {
                    setCurrentPage(currentPage + 1)
                    getCommentsClub(currentClub.topic_id, `${currentPage + 1}`)
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default observer(ClubDetailsPage)
