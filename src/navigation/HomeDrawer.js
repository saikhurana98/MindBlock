import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Screen from "../screens";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = "MainModule";

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      drawerType="slide"
      backBehavior="initialRoute"
      screenOptions={{
        gestureEnabled: true,
        swipeEnabled: true,
      }}
      drawerStyle={{ width: "100%" }}
      drawerContent={(props) => <CustomDrawer />}
    >
      <Drawer.Screen name="MainModule" component={Screen.MainModule} />
      {/* <Drawer.Screen name="Learning" component={Screen.Home} />
      <Drawer.Screen name="Transactions" component={Screen.Transactions} /> */}
      
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
