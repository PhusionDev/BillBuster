import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import BillList from './components/BillList';
import BillCreate from './components/BillCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 10 }}>
      <Scene key="root">
        <Scene
          key="billList"
          component={BillList}
          title="Bills"
          rightTitle="Add Bill"
          onRight={() => Actions.billCreate()}
          initial
        />
        <Scene
          key="billCreate"
          component={BillCreate}
          title="New Bill"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;