import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function Skeleton({ width, height, borderRadius, marginBottom }) {
  (width = '99%'), (height = 150), (borderRadius = 15), (marginBottom = 5);

  return (
    <SkeletonPlaceholder backgroundColor="#E0E0E0">
      <SkeletonPlaceholder.Item
        width={width}
        height={height}
        borderRadius={borderRadius}
        marginBottom={marginBottom}
      />
      <SkeletonPlaceholder.Item
        width={width}
        height={height}
        borderRadius={borderRadius}
        marginBottom={marginBottom}
      />
      <SkeletonPlaceholder.Item
        width={width}
        height={height}
        borderRadius={borderRadius}
        marginBottom={marginBottom}
      />
      <SkeletonPlaceholder.Item
        width={width}
        height={height}
        borderRadius={borderRadius}
        marginBottom={marginBottom}
      />
      <SkeletonPlaceholder.Item
        width={width}
        height={height}
        borderRadius={borderRadius}
        marginBottom={marginBottom}
      />
    </SkeletonPlaceholder>
  );
}
