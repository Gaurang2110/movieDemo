import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {colors} from '../assets/colors';
import {appConstant} from '../helper/appConstant';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import SvgIcons from '../assets/svgIcons';
import {normalize} from '../helper/responsiveScreen';
import moment from 'moment';
import {CustomRatingBar} from './customeRating';

const MovieListView = ({item, index, onMoviePress, isTop}) => {
  return (
    <TouchableOpacity onPress={onMoviePress} style={styles.mainView}>
      <View style={{width: wp(40), height: wp(50)}}>
        <Image
          source={{uri: appConstant.imgPath + item?.poster_path}}
          style={{width: '100%', height: '100%'}}
          borderTopLeftRadius={wp(4)}
          borderBottomLeftRadius={wp(4)}
        />
      </View>
      <View style={styles.subView}>
        {isTop && index === 0 && (
          <View style={styles.goldView}>
            <SvgIcons.GoldIcon />
            <Text style={styles.size14}>{appConstant.thisWeek}</Text>
          </View>
        )}
        <Text style={styles.size16}>{item.title}</Text>
        <Text style={styles.dateView}>
          {moment(item?.release_date).format('YYYY')}
        </Text>

        <CustomRatingBar defaultRating={item?.vote_average} />
      </View>
    </TouchableOpacity>
  );
};

export default MovieListView;

const styles = StyleSheet.create({
  mainView: {
    width: wp(90),
    flexDirection: 'row',
    alignItems: 'center',
    height: wp(50),
    borderRadius: wp(4),
    backgroundColor: colors.lightBgClr,
    marginVertical: wp(2),
  },
  subView: {paddingHorizontal: wp(4), justifyContent: 'center'},
  goldView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp(2),
  },
  size14: {
    fontFamily: 'Inter-Medium',
    fontSize: normalize(14),
    color: colors.lightText,
    paddingLeft: wp(2),
  },
  size16: {
    color: colors.white,
    fontFamily: 'Inter-SemiBold',
    fontSize: normalize(16),
    width: wp(40),
  },
  dateView: {
    paddingVertical: wp(2),
    color: colors.lightText,
    fontFamily: 'Inter-Medium',
  },
});
