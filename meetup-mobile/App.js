import React from 'react';
import { Font } from 'expo';
import { Text, View } from 'react-native';
import Colors from './constants/Colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import { HomeScreen } from './src/screens';
import { cachedFonts } from './helpers';

EStyleSheet.build(Colors)





// import { Font } from 'expo';

// export const cachedFonts = (fonts) => {
//   fonts.map(font => Font.loadAsync(font));
// };







export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentDidMount() {
    // await cachedFonts([
    //   {
    //     montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    //   },
    //   {
    //     montserratLight: require('./assets/fonts/Montserrat-Bold.ttf'),
    //   },
    //   {
    //     montserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
    //   },
    //   {
    //     montserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    //   },
    // ])

    // this._loadAssetAsync();

    // await cachedFonts([
    //   { montserrat: require('./assets/fonts/Montserrat-Regular.ttf') },
    // ])
    // this.setState({ fontLoaded: true });

    await Font.loadAsync({
      'montserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  // async _loadAssetAsync() {
  //   const fontAssets = cachedFonts([
  //     {
  //       montserrat: require('./assets/fonts/Montserrat-Regular.ttf')
  //     },
  //     {
  //       montserratBold: require('./assets/fonts/Montserrat-Bold.ttf')
  //     },
  //     {
  //       montserratLight: require('./assets/fonts/Montserrat-Light.ttf')
  //     },
  //     {
  //       montserratMedium: require('./assets/fonts/Montserrat-Medium.ttf')
  //     },
  //   ])
  //   await Promise.all(fontAssets);
  //   this.setState({ fontLoaded: true });
  // }

  render() {
    if (!this.state.fontLoaded) {
      return (
        null
      )
    }
    return (
      <HomeScreen />
    )
  }
}
