import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../assets/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {appConstant} from '../helper/appConstant';
import {normalize} from '../helper/responsiveScreen';
import SvgIcons from '../assets/svgIcons';
import axios from 'axios';
import MovieListView from '../components/movieListView';
import moment from 'moment';
import {Rating} from 'react-native-ratings';
import {CustomRatingBar} from '../components/customeRating';
import {RouteName} from '../helper/routeName';

const Awards = ({navigation}) => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(appConstant.baseUrl);
      if (res.status === 200) {
        setMovieData(res.data.results);
      } else {
        Alert.alert('MovieDemo', 'Something went wrong');
      }
    } catch (error) {
      console.log('catch error was......', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.bgColor}}>
      <View style={{marginVertical: wp(2), marginHorizontal: wp(4)}}>
        <View style={styles.subView}>
          <Text style={styles.size32}>{appConstant.topMovies}</Text>
          <SvgIcons.SearchIcon width={wp(7)} height={wp(7)} />
        </View>

        <FlatList
          data={movieData}
          style={{marginTop: wp(5)}}
          contentContainerStyle={styles.scroll}
          renderItem={({item, index}) => (
            <MovieListView
              isTop
              item={item}
              index={index}
              onMoviePress={() =>
                navigation.navigate(RouteName.detailMovie, {
                  data: movieData,
                  movieItem: item,
                  movieIndex: index,
                })
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Awards;

const styles = StyleSheet.create({
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  size32: {
    fontFamily: 'Inter-Bold',
    color: colors.white,
    fontSize: normalize(32),
  },
  scroll: {marginVertical: wp(4), paddingBottom: wp(20)},
});
