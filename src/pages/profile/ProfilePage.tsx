import React, { useEffect } from 'react'
import ProfileStore from '../../store/ProfileStore'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import parser from 'html-react-parser'
import { Bar } from 'react-chartjs-2'
import CardsHeader from '../../components/card/CardsHeader'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import { IProfileClubs, IProfileFriends } from '../../interfaces/IStore/ProfileStore'
import Loader from '../../components/loader/Loader'
import NotificationStore from '../../store/NotificationStore'
import './style.scss'

const ProfilePage = () => {
  const { getCurrentProfile, currentProfile, currentProfileClubs, currentProfileFriends, currentProfileFavourites } =
    ProfileStore
  const { loading } = NotificationStore

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    getCurrentProfile(+id)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createPersonalData = (data: any) => {
    return data.confirm ? (
      <span className="personal-info">
        {`${data.confirm} / `} {parser(data.onlineFrom)}
      </span>
    ) : (
      <span className="personal-info">
        {data.sex ? `${data.sex} / ` : ''} {data.age ? `${data.age} / ` : ''}{' '}
        {data.socialMedia && parser(data.socialMedia)} {data.socialMedia && '/'} {parser(data.onlineFrom)}
      </span>
    )
  }

  const findPersonalData = () => {
    if (Object.keys(currentProfile).length > 0) {
      const data: any = {}
      data.onlineFrom = currentProfile.common_info?.[currentProfile.common_info.length - 1]
      data.sex = currentProfile.common_info.find((item) => {
        if (item === 'муж' || item === 'жен') return item
        return ''
      })
      data.age = currentProfile.common_info.find((v) => v.includes('лет'))
      data.confirm = currentProfile.common_info.find((v) => v.includes('Личные данные скрыты'))
      data.socialMedia = currentProfile.common_info.find((item) => {
        if (item.includes('vk.com') || item.includes('youtube.com') || item.includes('twitter.com')) return item
        return ''
      })
      return createPersonalData(data)
    }
  }

  const validUrlForImage = (url: string) => {
    const arr = url.split('/')
    arr[3] = 'preview'
    const validUrl = arr.join('/')
    return `https://dere.shikimori.one${validUrl}`
  }

  const createFavouritesData = () => {
    const favouritesData = [
      ...currentProfileFavourites.animes,
      ...currentProfileFavourites.characters,
      ...currentProfileFavourites.producers,
      ...currentProfileFavourites.people,
      ...currentProfileFavourites.mangas,
      ...currentProfileFavourites.mangakas,
      ...currentProfileFavourites.seyu,
    ]
      .slice(0, 8)
      .map((item, index) => {
        return (
          <NavLink key={item.image} to="/">
            <img src={validUrlForImage(item.image)} alt="profile-favourites" />
          </NavLink>
        )
      })

    return favouritesData.length > 0 ? favouritesData : [<span>Список избранного пуст</span>]
  }

  const pieBGColors = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
  ]
  const pieBRColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ]

  if (loading.getCurrentProfile) return <Loader />

  return (
    <div className="profile container">
      {Object.keys(currentProfile).length > 0 && (
        <div className="first_section">
          <img alt="avatar" src={currentProfile.image?.x160} />
          <div>
            <div className="profile_information">
              <div className="profile_nickname">
                <h3>{currentProfile.nickname}</h3>
                <span>{currentProfile.last_online}</span>
              </div>
              {findPersonalData()}
              <div className="profile_pies">
                <div className="anime-pie">
                  <Bar
                    data={{
                      labels: ['Запланировано', 'Смотрю', 'Просмотрено', 'Отложено', 'Брошено'],
                      datasets: [
                        {
                          label: '',
                          data: currentProfile.stats.statuses.anime.map((item) => item.size),
                          backgroundColor: pieBGColors,
                          borderColor: pieBRColors,
                          borderWidth: 1,
                        },
                      ],
                    }}
                    width={400}
                    height={200}
                    options={{ maintainAspectRatio: false }}
                  />
                </div>
                <div className="manga-pie">
                  <Bar
                    data={{
                      labels: ['Запланировано', 'Смотрю', 'Просмотрено', 'Отложено', 'Брошено'],
                      datasets: [
                        {
                          label: '',
                          data: currentProfile.stats.statuses.manga.map((item) => item.size),
                          backgroundColor: pieBGColors,
                          borderColor: pieBRColors,
                          borderWidth: 1,
                        },
                      ],
                    }}
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="profile_social">
              <div className="profile-clubs">
                <CardsHeader text="Клубы" />
                <div>
                  {currentProfileClubs.length > 0 ? (
                    currentProfileClubs?.slice(0, 6).map((item: IProfileClubs, index) => {
                      return (
                        <NavLink key={item.id} to={`/clubs/${item.id}`}>
                          <img src={`https://dere.shikimori.one${item.logo.x73}`} alt="avatar-clubs" />
                        </NavLink>
                      )
                    })
                  ) : (
                    <span>Не состоит ни в одном из клубов</span>
                  )}
                </div>
              </div>
              <div className="profile-friends">
                <CardsHeader text="Друзья" />
                <div>
                  {currentProfileFriends.length > 0 ? (
                    currentProfileFriends?.slice(0, 12).map((item: IProfileFriends, index) => {
                      return (
                        <NavLink key={item.id} to={`/profile/${item.id}`}>
                          <img src={item.image.x64} alt="avatar-friends" />
                        </NavLink>
                      )
                    })
                  ) : (
                    <span>Нет друзей</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="second_section">
        {currentProfile?.stats?.activity.length && (
          <div className="activity-bar" style={{ width: '400px', height: '400px' }}>
            <Bar
              data={{
                labels: currentProfile.stats.activity.map((item) => moment(+item.name[1] * 1000).format('MMM YYYY')),
                datasets: [
                  {
                    label: 'Активность на сайте',
                    data: currentProfile.stats.activity.map((item) => item.value),
                    backgroundColor: ['rgba(84,231,255,0.8)'],
                    borderColor: ['rgba(84,231,255,1)'],
                  },
                ],
              }}
            />
          </div>
        )}
        <div className="profile-favourites">
          <CardsHeader text="Избранное" />
          <div>{Object.values(currentProfileFavourites).length > 0 && createFavouritesData().map((item) => item)}</div>
        </div>
      </div>
    </div>
  )
}

export default observer(ProfilePage)
