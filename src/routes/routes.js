import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Photos from '../pages/photos'
import Posts from '../pages/posts'

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
