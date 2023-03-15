import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SvgIcons from '../assets/svgIcons';
import {appConstant} from '../helper/appConstant';
import {IconImage} from '../assets/iconImage';
import {normalize} from '../helper/responsiveScreen';
import {colors} from '../assets/colors';
import moment from 'moment';
import {CustomRatingBar} from '../components/customeRating';
import MovieListView from '../components/movieListView';
import {RouteName} from '../helper/routeName';

const MovieInfo = ({navigation, route}) => {
  const [tradingData, setTradingData] = useState([]);
  const {data, movieItem, movieIndex} = route?.params;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const trading = data.filter(item => item?.title !== movieItem?.title);
    setTradingData(trading);
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.bgColor}}>
      <ScrollView
        style={{}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: appConstant.imgPath + movieItem?.backdrop_path}}
          style={{
            width: '100%',
            height: hp(50),
            ...StyleSheet.absoluteFillObject,
          }}
        />
        <Image
          style={[StyleSheet.absoluteFillObject, {height: hp(90)}]}
          source={IconImage.light}
        />
        <View style={{marginHorizontal: wp(4)}}>
          <TouchableOpacity
            style={{marginTop: wp(15)}}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <SvgIcons.BackIcon width={wp(5)} height={wp(5)} />
          </TouchableOpacity>
          <View style={{marginTop: hp(20)}}>
            {movieIndex === 0 && (
              <Text style={styles.size14}>{appConstant.thisWeek}</Text>
            )}

            <View style={styles.textContainer}>
              {movieIndex === 0 && <SvgIcons.GoldIcon />}
              <View style={{paddingLeft: wp(2)}}>
                <Text style={styles.size32}>{movieItem.title}</Text>
                <Text style={styles.date}>
                  {moment(movieItem?.release_date).format('YYYY')}
                </Text>
                <Text style={styles.size20}>{movieItem.overview}</Text>
                <CustomRatingBar
                  defaultRating={movieItem.vote_average}
                  ratingStyle={styles.rating}
                />
              </View>
            </View>
          </View>

          <Text style={styles.trading}>{appConstant.alsoTrading}</Text>

          <FlatList
            contentContainerStyle={{flexGrow: 1}}
            data={tradingData}
            renderItem={({item, index}) => (
              <MovieListView
                item={item}
                index={index}
                onMoviePress={() => {}}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieInfo;

const styles = StyleSheet.create({
  size14: {
    fontFamily: 'Inter-Medium',
    fontSize: normalize(14),
    color: colors.lightText,
    paddingLeft: wp(2),
  },
  textContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop: wp(2),
  },
  size32: {
    color: colors.white,
    fontFamily: 'Inter-Bold',
    fontSize: normalize(32),

    width: wp(60),
  },
  date: {
    paddingVertical: wp(2),
    color: colors.lightText,
    fontFamily: 'Inter-Medium',
  },
  size20: {
    color: colors.white,
    fontSize: normalize(14),
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
  },
  rating: {
    marginTop: wp(4),
    width: wp(50),
    justifyContent: 'center',
  },
  trading: {
    marginTop: wp(5),
    color: colors.white,
    fontFamily: 'Inter-bold',
    fontSize: normalize(24),
  },
});
