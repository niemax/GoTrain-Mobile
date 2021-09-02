import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function WelcomeNameSkeleton() {
  return (
    <SkeletonPlaceholder
      style={{ justifyContent: 'center', alignItems: 'center' }}
      backgroundColor="#E0E0E0"
    >
      <SkeletonPlaceholder.Item width="60%" height={50} borderRadius={15} />
    </SkeletonPlaceholder>
  );
}
