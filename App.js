import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./components/HomeScreen";
import MoreInfo from "./components/MoreInfo";
import Order from "./components/Order";
import OrderThanks from "./components/OrderThanks";
import Review from "./components/Review";
import ReviewThanks from "./components/ReviewThanks";

export const App = () => {
  return <AppContainer />;
};

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  MoreInfo: {
    screen: MoreInfo,
    navigationOptions: {
      title: "Details",
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  },
  Order: {
    screen: Order,
    navigationOptions: {
      title: "Order",
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  },
  OrderThanks: {
    screen: OrderThanks,
    navigationOptions: {
      title: "Thank you for your order",
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  },
  Review: {
    screen: Review,
    navigationOptions: {
      title: "Leave review",
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  },
  ReviewThanks: {
    screen: ReviewThanks,
    navigationOptions: {
      title: "Thank you for review",
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default App;
