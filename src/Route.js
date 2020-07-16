import React, { Component } from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux';
import Login from './pages/Login';
import SignupT from './pages/SignupT';
import SignupS from './pages/Signup';
import Student_Home from './pages/StudentHome';
import Teacher_Home from './pages/Teacher_Home';
import Forgetpass from './pages/ForgetPassword';
import DisplayImage from './pages/DisplayImage';
import DisplayTeacherImage from './pages/DisplayTeacherImage';
import ViewProfile from './pages/ViewProfile';
import ViewTeacherProfile from './pages/ViewTeacherProfile';
import More_Student_Edit from './components/MoreStudentEdit';
import Student_Edit_Screen1 from './components/TeacherEditBio';
export default  class Route extends React.Component{
   render(){
    return(
        <Router>
        <Stack key="root" hideNavBar={true}>
       <Scene key="login" component={Login} title="Login" initial={true} />
       <Scene key="signupT" component={SignupT} title="Register" />
       <Scene key="signupS" component={SignupS} title="Register" />
       <Scene key="fScreen" component={Forgetpass} title="ForgetPassword" />
       <Scene key="S_home" component={Student_Home} title="Student_Home" />
       <Scene key="T_home" component={Teacher_Home} title="Teacher_Home" />
       <Scene key="Display_Image" component={DisplayImage} title="Display_Image" />
       <Scene key="Display_TImage" component={DisplayTeacherImage} title="Display_Teacher_Image" />
       <Scene key="View_Profile" component={ViewProfile} title="ViewProfile" />
       <Scene key="Student_Edit_Screen1" component={ Student_Edit_Screen1} title="Student_Edit_Screen1" />
       <Scene key="View_Teacher_Profile" component={ViewTeacherProfile } title="ViewTeacherProfile" />
       <Scene key="More_Student_Edit" component={More_Student_Edit} title="More_Student_Edit" />
        </Stack>
      </Router>
    )
   }
};