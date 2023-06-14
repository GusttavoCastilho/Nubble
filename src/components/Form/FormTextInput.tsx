import React from 'react';

import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

import {TextInput, TextInputProps} from '../TextInput/TextInput';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value}, fieldState: {error}}) => (
        <TextInput
          onChangeText={onChange}
          value={value}
          errorMessage={error?.message}
          {...rest}
        />
      )}
    />
  );
}
