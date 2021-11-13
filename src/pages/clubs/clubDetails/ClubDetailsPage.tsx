import React, { useEffect, useState } from 'react'
import ClubDetailsStore from '../../../store/ClubDetailsStore'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import parser from 'html-react-parser'
import { getRequest } from '../../../api/Request'
import ClubNavbar from '../../../components/clubNavbar/ClubNavbar'
import './style.scss'

const ClubDetailsPage = () => {
  const { getCurrentClub, currentClub } = ClubDetailsStore
  const { id } = useParams<{ id: string }>()
  const [style, setStyle] = useState<any>()

  useEffect(() => {
    getCurrentClub(+id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Получение кастомных стилей
  useEffect(() => {
    if (Object.values(currentClub).length > 0) {
      getRequest(`styles/${currentClub.style_id}`).then((res: any) => setStyle(res.data))
    }
  }, [currentClub])

  //Установка кастомных стилей
  useEffect(() => {
    if (style) {
      const myStyle = document.createElement('style')
      document.head.appendChild(myStyle)
      myStyle.innerHTML = style.compiled_css ? style.compiled_css : ''
    }
    return () => {
      const myStyle: any = document.getElementsByName('style')
      myStyle.innerHTML = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [style])
  return (
    <>
      {Object.values(currentClub).length > 0 && (
        <div className="club container l-page">
          <h1>{currentClub.name}</h1>
          <div className="menu">
            <div className="l-content">
              <div>
                {currentClub.name}
                <div>{currentClub.description_html && parser(currentClub?.description_html)}</div>
              </div>
            </div>
            <div className="r-menu">
              <ClubNavbar club={currentClub} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default observer(ClubDetailsPage)
