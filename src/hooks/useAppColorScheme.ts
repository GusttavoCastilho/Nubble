import {useSettingsService} from '@services';
import {useEffect} from 'react';
import {Appearance} from 'react-native';

/**
 * Hook that listens to changes in the system color scheme.
 */
export function useAppColorScheme() {
  const {onSystemChange} = useSettingsService();

  useEffect(() => {
    onSystemChange(Appearance.getColorScheme());
  }, [onSystemChange]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      onSystemChange(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, [onSystemChange]);
}
