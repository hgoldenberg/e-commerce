import React from 'react';
import { Route , Switch } from 'react-router';



export default () => {
  return (
    <div>
      <Switch>
        <Route render={()=> console.log('hola')}/>
      </Switch>
    </div>
  );
};