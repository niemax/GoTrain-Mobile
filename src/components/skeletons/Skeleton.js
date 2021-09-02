import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function Skeleton({ length, width, height, borderRadius, marginBottom }) {
  (width = '47%'), (height = 200), (borderRadius = 15), (marginBottom = 5);

  return (
    <SkeletonPlaceholder backgroundColor="#E0E0E0">
      {Array.from(Array(length)).map((_, index) => (
        <SkeletonPlaceholder.Item
          key={index.toString()}
          width={width}
          height={height}
          borderRadius={borderRadius}
          marginBottom={marginBottom}
        />
      ))}
    </SkeletonPlaceholder>
  );
}
