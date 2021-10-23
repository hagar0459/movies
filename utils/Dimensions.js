import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

export const { height, width } = Dimensions.get('window');



export const AppMetrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

};
