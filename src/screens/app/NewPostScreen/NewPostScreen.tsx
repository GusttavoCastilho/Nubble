import React from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';
import {useCameraRoll} from '@services';
import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const ITEM_WIDTH = SCREEN_WIDTH / 4;

export function NewPostScreen({
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  const {list} = useCameraRoll();

  const renderItem = ({item}: ListRenderItemInfo<string>) => {
    return (
      <Image
        key={item}
        source={{uri: item}}
        style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
      />
    );
  };
  return (
    <Screen canGoBack title="Novo post" noPaddingHorizontal>
      <FlatList
        data={list}
        numColumns={4}
        renderItem={renderItem}
        ListHeaderComponent={
          <Header imageWidth={SCREEN_WIDTH} imageUri={list[0]} />
        }
      />
    </Screen>
  );
}
