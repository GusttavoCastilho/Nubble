import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {renderHook} from 'test-utils';

import {theme} from '@theme';

import {useAppSafeArea} from '../useAppSafeArea';

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('<UseAppSafeArea />', () => {
  it('when the safe area is less than minimum requirement, it returns the minimum requirement', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 5, bottom: 5} as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });

  it('when the safe area is greater than minimum requirement, it returns the safe area', () => {
    mockedUseSafeAreaInsets.mockImplementation(
      () => ({top: 40, bottom: 40} as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s40);
    expect(result.current.bottom).toEqual(theme.spacing.s40);
  });
});
