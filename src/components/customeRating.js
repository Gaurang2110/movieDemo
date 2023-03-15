import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {IconImage} from '../assets/iconImage';
import {ratingData} from '../helper/constant';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../assets/colors';

export const CustomRatingBar = ({defaultRating, ratingStyle}) => {
  return (
    <View style={[styles.ratingBarStyle, ratingStyle]}>
      {ratingData.map((item, key) => {
        return (
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.imageStyle}
              source={
                item <= defaultRating ? IconImage.fillStar : IconImage.star
              }
            />

            {/* <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  width: 20,
                  height: 40,
                }}
                onPress={() => onStarClick(item, true)}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  width: 20,
                  height: 40,
                }}
                onPress={() => onStarClick(item, false)}
              />
            </View> */}
          </View>
        );
      })}
      <Text
        style={{paddingHorizontal: wp(2), color: colors.white, fontSize: 10}}>
        {`${defaultRating} / ${ratingData.length}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingBarStyle: {
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBg,
    paddingVertical: wp(2),
    marginTop: wp(10),
  },
  imageStyle: {
    width: 8,
    height: 8,
    resizeMode: 'cover',
    marginLeft: wp(1),
  },
});
