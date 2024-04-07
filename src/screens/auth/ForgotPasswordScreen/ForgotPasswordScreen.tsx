import React from 'react';

import {useAuthRequestNewPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Screen, Text, Button, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: `Enviamos as instruções ${'\n'}para seu e-mail`,
  description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
  icon: {
    name: 'messageRound',
    color: 'iconColor',
    fillColor: 'iconFillColor',
  },
};

export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {reset} = useResetNavigationSuccess();

  const {showToast} = useToastService();
  const {requestNewPassword, isLoading} = useAuthRequestNewPassword({
    onSuccess: () => reset(resetParam),
    onError: message => showToast({message, type: 'error'}),
  });

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm({email}: ForgotPasswordSchema) {
    requestNewPassword(email);
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Esqueci minha senha</Text>
      <Text preset="paragraphLarge" mt="s16">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: 'Email é obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's48', mt: 's32'}}
      />

      <Button
        title="Recuperar Senha"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        loading={isLoading}
      />
    </Screen>
  );
}
