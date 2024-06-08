import React from 'react';
import {ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Post, postService} from '@domain';

import {InfinityScrollList, PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeHeader} from './components/HomeHeader';
import {QueryKeys} from '@infra';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <InfinityScrollList
        renderItem={renderItem}
        flatlistProps={{
          ListHeaderComponent: <HomeHeader />,
        }}
        queryKey={QueryKeys.PostList}
        getList={postService.getList}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
