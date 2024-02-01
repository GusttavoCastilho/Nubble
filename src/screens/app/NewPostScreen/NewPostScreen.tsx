import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {PermissionManager, Screen} from '@components';
import {AppTabScreenProps} from '@routes';
import {useCameraRoll, usePermission} from '@services';
import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const ITEM_WIDTH = SCREEN_WIDTH / 4;

export function NewPostScreen({
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  const [selectedImage, setSelectedImage] = useState('');
  const permission = usePermission('photoLibrary');
  const {photoList, fetchNextPage} = useCameraRoll(
    permission.status === 'granted',
    setSelectedImage,
  );

  const flatListRef = useRef<FlatList>(null);

  function onSelectedImage(image: string) {
    setSelectedImage(image);
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }

  const renderItem = ({item}: ListRenderItemInfo<string>) => {
    return (
      <Pressable onPress={() => onSelectedImage(item)}>
        <Image
          key={item}
          source={{uri: item}}
          style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
        />
      </Pressable>
    );
  };
  return (
    <PermissionManager
      permissionName="photoLibrary"
      description="Permita o Nubble acessar as imagens da sua galeria">
      <Screen canGoBack title="Novo post" noPaddingHorizontal>
        <FlatList
          ref={flatListRef}
          data={photoList}
          numColumns={4}
          renderItem={renderItem}
          onEndReached={fetchNextPage}
          onEndReachedThreshold={0.1}
          ListHeaderComponent={
            <Header imageWidth={SCREEN_WIDTH} imageUri={selectedImage} />
          }
        />
      </Screen>
    </PermissionManager>
  );
}
