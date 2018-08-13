import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import BillList from './components/BillList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 10 }}>
      <Scene key="root" hideNavBar>
        <Scene
          key="billList"
          component={BillList}
          title="Bills"
          rightTitle="Add Bill"
          //onRight={() => Actions.billCreate()}
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;