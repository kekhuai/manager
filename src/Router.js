import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" titleStyle={styles.sceneStyle} hideNavBar>
        <Stack key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Stack>
        <Stack key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => { Actions.employeeCreate() }}
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
        </Stack>
      </Stack>
    </Router>
  );
};

const styles = StyleSheet.create({
  sceneStyle: {
    flex: 1,
    textAlign: 'center'
  }
});

export default RouterComponent;
