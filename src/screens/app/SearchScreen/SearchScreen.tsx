import React, {useState} from 'react';

import {Icon, Screen, Text, TextInput} from '@components';

export function SearchScreen() {
  const [search, setSearch] = useState('');
  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon name="search" color="gray3" />}
        />
      }>
      <Text>Search Screen</Text>
    </Screen>
  );
}
