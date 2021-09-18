import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function Skeleton() {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}
      >
        <View style={{ width: 180, height: 160, borderRadius: 20, marginTop: 8 }} />
        <View style={{ width: 180, height: 160, borderRadius: 20, marginTop: 8 }} />
        <View style={{ width: 180, height: 160, borderRadius: 20, marginTop: 8 }} />
        <View style={{ width: 180, height: 160, borderRadius: 20, marginTop: 8 }} />
        <View style={{ width: 180, height: 160, borderRadius: 20, marginTop: 8 }} />
        <View style={{ width: 180, height: 160, borderRadius: 20, marginTop: 8 }} />
      </View>
    </SkeletonPlaceholder>
  );
}
