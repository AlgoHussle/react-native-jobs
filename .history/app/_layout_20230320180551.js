import { stack } from 'expo-router';


const Layout = stack({
    Home: HomeScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
});