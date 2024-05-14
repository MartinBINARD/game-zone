import { ReviewProps } from 'src/screens/home';

export type DrawerStackNavigatorParamsList = {
  Gamezone: undefined;
  About: undefined;
};

export type AboutStackParamList = {
  About: undefined;
};

export type HomeStackNavigatorParamsList = {
  Home: undefined;
  ReviewDetails: ReviewProps;
};
