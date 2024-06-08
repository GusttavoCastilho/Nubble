import React from 'react';

import {InfinityScrollList, PressableBox, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import {Dimensions, Image, ListRenderItemInfo} from 'react-native';
import {PostReaction, postReactionService} from '@domain';
import {QueryKeys} from '@infra';

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = 24;
const ITEM_MARGIN = 8 * 2;

const ITEM_WIDTH =
  (SCREEN_WIDTH - SCREEN_PADDING * 2 - ITEM_MARGIN) / NUM_COLUMNS;

export function FavoriteScreen({
  navigation,
}: AppTabScreenProps<'FavoriteScreen'>) {
  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <PressableBox
        onPress={() =>
          navigation.navigate('PostCommentScreen', {
            postId: item.post.id,
            postAuthorId: item.author.id,
            showPost: true,
          })
        }>
        <Image
          source={{uri: item.post.imageURL}}
          style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
        />
        <Text mt="s4" semiBold>
          {item.author.username}
        </Text>
      </PressableBox>
    );
  }

  return (
    <Screen flex={1} title="Favoritos">
      <InfinityScrollList
        renderItem={renderItem}
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        flatlistProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {columnGap: ITEM_MARGIN},
          contentContainerStyle: {rowGap: SCREEN_PADDING},
        }}
        emptyListProps={{
          emptyMessage: 'Não há favoritos',
          errorMessage: 'erro ao carregar favoritos',
        }}
      />
    </Screen>
  );
}
