import React, { useEffect } from 'react'
import HomepageStore from '../../store/HomepageStore'
import { observer } from 'mobx-react'
import Card from '../../components/card/Card'
import './style.scss'
import Carousel from '../../components/carousel/Carousel'
import CardsHeader from '../../components/card/CardsHeader'

const Homepage = () => {
  const { popularAnime, byRatingAnime, ongoingAnime, thisSeasonAnime, getAllAnime } = HomepageStore
  const nullAnime = !popularAnime && !byRatingAnime && !ongoingAnime && !thisSeasonAnime

  useEffect(() => {
    if (nullAnime) getAllAnime()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="homepage container">
      <Carousel />
      <div className="container">
        <div className="row justify-content-lg-end homepage__main-content">
          <div className="col">
            <CardsHeader text={'популярное'} withArrow={true} />
            <div className="col row flex-wrap align-content-start justify-content-between left-side">
              {!nullAnime &&
                ongoingAnime.map((item: any) => {
                  return <Card {...item} key={item.id} />
                })}
            </div>
            <CardsHeader text={'аниме этого сезона'} withArrow={true} />
            <div className="col row flex-wrap align-content-start justify-content-between left-side">
              {!nullAnime &&
                ongoingAnime.map((item: any) => {
                  return <Card {...item} key={item.id} />
                })}
            </div>
            <CardsHeader text={'ongoing'} withArrow={true} />
            <div className="col row flex-wrap align-content-start justify-content-between left-side">
              {!nullAnime &&
                ongoingAnime.map((item: any) => {
                  return <Card {...item} key={item.id} />
                })}
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 row flex-column">
            <CardsHeader text={'по рейтингу'} />
            {!nullAnime &&
              byRatingAnime.map((item: any) => {
                return <Card {...item} key={item.id} broad={true} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(Homepage)
