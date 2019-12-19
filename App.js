import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Components from './src/screens/Components';
import ExpenseScreen from './src/screens/ExpenseScreen';
import BillsScreen from './src/screens/BillsScreen';
import login from './src/screens/loginScreen';
import signUp from './src/screens/signUp'

const navigator = createStackNavigator({
    toHome: Components,  
    expense: ExpenseScreen,
    bills: BillsScreen,
    login: login,
    signUp: signUp
},{
    intialRouteName: 'toHome',
    defaultNavigationOptions: {
      title: 'MExchange'
    }
});

export default createAppContainer(navigator);