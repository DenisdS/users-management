import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Photos from '../components/pages/photos/photos'
import Posts from '../components/pages/posts/posts'

const routes = () =>{

  return(
    <Switch>
      <Route exact path='/' component={Photos}/>
      <Route path='/fotos' component={Photos}/>
      <Route path='/posts' component={Posts}/>
    </Switch>
  );
}
export default routes;
