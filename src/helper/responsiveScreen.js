import React from "react";
import { Dimensions, Platform } from "react-native";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
export const isTablet = viewportHeight / viewportWidth < 1.6;
export const isiPAD = viewportHeight / viewportWidth < 1.6;
const scale = viewportWidth / 375;
export function normalize(size) {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        if (isiPAD) {
            return Math.round(newSize) - wp(1);
        }
        return Math.round(newSize);
    }
    if (isTablet) {
        return Math.round(newSize) - wp(1);
    }
    return Math.round(newSize);
}