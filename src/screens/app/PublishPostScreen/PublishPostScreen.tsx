import React, {useState} from 'react';
import {Dimensions, Image} from 'react-native';

import {Button, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';
import {usePostCreate} from '@domain';
import {useToastService} from '@services';

const IMAGE_WIDTH = Dimensions.get('screen').width / 2;

export function PublishPostScreen({
  navigation,
  route,
}: AppScreenProps<'PublishPostScreen'>) {
  const [description, setDescription] = useState('');

  const imageUri = route.params.imageUri;

  const {showToast} = useToastService();

  const {createPost, isLoading} = usePostCreate({
    onSuccess: () => {
      navigation.navigate('AppTabNavigator', {screen: 'HomeScreen'});
      showToast({message: 'Foto publicada!', type: 'success'});
    },
  });

  function publishPost() {
    createPost({description, imageUri});
  }

  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{uri: route.params.imageUri}}
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_WIDTH,
          alignSelf: 'center',
          marginTop: 20,
        }}
      />

      <Text preset="headingSmall" mt="s32" mb="s10">
        Escreva uma legenda
      </Text>

      <TextInput
        placeholder="Digite aqui..."
        value={description}
        onChangeText={setDescription}
        containerProps={{borderWidth: 0}}
      />

      <Button
        title="Publicar post"
        mt="s56"
        onPress={publishPost}
        loading={isLoading}
        disabled={description.length < 1}
      />
    </Screen>
  );
}
