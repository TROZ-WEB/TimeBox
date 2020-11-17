import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUp1 from '../screens/SignUp1';
import SignUp2 from '../screens/SignUp2';
import SignUp3 from '../screens/SignUp3';
import SignUp4 from '../screens/SignUp4';
import SignUp5 from '../screens/SignUp5';
import SignUp6 from '../screens/SignUp6';
import SignUp7 from '../screens/SignUp7';
import SignUp8 from '../screens/SignUp8';
import SignUp9 from '../screens/SignUp9';
import SignUp10 from '../screens/SignUp10';
import SignUp11 from '../screens/SignUp11';
import SignUp12 from '../screens/SignUp12';
import SignUp13 from '../screens/SignUp13';
import SignUp14 from '../screens/SignUp14';

const SignUpNavigator = createStackNavigator({
    SignUp1 : SignUp1,
    SignUp2 : SignUp2,
    SignUp3 : SignUp3,
    SignUp4 : SignUp4,
    SignUp5 : SignUp5,
    SignUp6 : SignUp6,
    SignUp7 : SignUp7,
    SignUp8 : SignUp8,
    SignUp9 : SignUp9,
    SignUp10 : SignUp10,
    SignUp11 : SignUp11,
    SignUp12 : SignUp12,
    SignUp13 : SignUp13,
    SignUp14 : SignUp14,
});

export default createAppContainer(SignUpNavigator);