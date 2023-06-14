import React from 'react';

import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

import {
  PasswordInput,
  PasswordInputProps,
} from '../PasswordInput/PasswordInput';

export function FormPasswordTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value}, fieldState: {error}}) => (
        <PasswordInput
          onChangeText={onChange}
          value={value}
          errorMessage={error?.message}
          {...rest}
        />
      )}
    />
  );
}
