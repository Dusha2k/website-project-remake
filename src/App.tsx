import React from 'react'
import Header from './layouts/Header/Header'
import { observer } from 'mobx-react'
import Homepage from './pages/homepage/Homepage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AnimeDetails from './pages/animeDetails/AnimeDetails'

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Homepage} exact={true} />
          <Route path="/animes/:id" component={AnimeDetails} exact />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default observer(App)
