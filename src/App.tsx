import React from 'react'
import Header from './layouts/Header/Header'
import { observer } from 'mobx-react'
import Homepage from './pages/homepage/Homepage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AnimeDetails from './pages/animeDetails/AnimeDetails'
import ProfilePage from './pages/profile/ProfilePage'
import moment from 'moment'
import Footer from './layouts/Footer/Footer'
import { defaults } from 'react-chartjs-2'

const App = (): JSX.Element => {
  moment.locale('ru')
  defaults.color = '#fff'
  defaults.scale.grid.display = false

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/animes/:id" component={AnimeDetails} exact />
          <Route path="/profile/:id" component={ProfilePage} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default observer(App)
