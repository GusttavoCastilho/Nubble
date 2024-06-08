import React from 'react';
import {FlatList, FlatListProps, RefreshControl} from 'react-native';

import {useScrollToTop} from '@react-navigation/native';

import {QueryKeys, usePaginatedList} from '@infra';
import {EmptyList, EmptyListProps} from './components/EmptyList';
import {Page} from '@types';

type ItemTConstraints = {id: number | string};

type Props<ItemT extends ItemTConstraints> = {
  queryKey: QueryKeys;
  getList: Parameters<typeof usePaginatedList<ItemT>>[1];
  renderItem: FlatListProps<ItemT>['renderItem'];
  flatlistProps?: Omit<Partial<FlatListProps<ItemT>>, 'renderItem'>;
  emptyListProps?: Pick<EmptyListProps, 'emptyMessage' | 'errorMessage'>;
};

export function InfinityScrollList<ItemT extends ItemTConstraints>({
  emptyListProps,
  flatlistProps,
  queryKey,
  getList,
  renderItem,
}: Props<ItemT>) {
  const {list, isError, isLoading, refresh, fetchNextPage} = usePaginatedList(
    [queryKey],
    getList,
  );

  const flatListRef = React.useRef<FlatList<ItemT>>(null);
  useScrollToTop(flatListRef);

  return (
    <FlatList
      ref={flatListRef}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.1}
      {...flatlistProps}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refresh} />
      }
      refreshing={isLoading}
      ListEmptyComponent={
        <EmptyList
          loading={isLoading}
          error={isError}
          refetch={refresh}
          {...emptyListProps}
        />
      }
      {...flatlistProps}
      contentContainerStyle={[
        {flex: list.length === 0 ? 1 : undefined},
        flatlistProps?.contentContainerStyle,
      ]}
    />
  );
}
