import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import Pagina1Screen from '../screens/Pagina1Screen';


const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Pagina1" component={Pagina1Screen}/>
            
        </Tab.Navigator>
    );
}


const stack = createStackNavigator();
function MyStack(){
    return(
        <stack.Navigator screenOptions={()=> ({headerShown:false})}>
            <stack.Screen name="Welcome" component={WelcomeScreen}/>
            <stack.Screen name="Bottom" component={MyTabs}/>
        </stack.Navigator>
    )
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>

    );
}