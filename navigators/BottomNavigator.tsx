import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Pagina1Screen from '../screens/Pagina1Screen';


const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Pagina1" component={Pagina1Screen}/>
            
        </Tab.Navigator>
    );
}

export default function BottomTab(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>

    );
}