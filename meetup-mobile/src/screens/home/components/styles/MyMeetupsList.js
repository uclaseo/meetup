import EStylesheet from 'react-native-extended-stylesheet';

const styles = EStylesheet.create({
  root: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'montserratBold',
  },
  meetupCard: {
    height: 200,
    width: 175,
    // Setting marginHorizontal blacks out the iOS simulator
    // marginHorizontal: '1.5%',
    backgroundColor: '#f73859',
  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative',
  },
  meetupCardTitle: {
    // position: 'absolute',
    color: '$whiteColor',
    top: '2%',
    left: '2.5%',
  },
  meetupCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },
  meetupCardMetaName: {
    fontSize: 15,
  },
  meetupCardMetaDate: {
    fontSize: 13,
  },
});

export default styles;
