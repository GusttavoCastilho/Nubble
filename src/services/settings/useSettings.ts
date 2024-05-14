import {create} from 'zustand';
import {AppColorScheme, SettingsStore, ThemePreference} from './settingsTypes';
import {persist} from 'zustand/middleware';
import {storage} from '../storage';
import {settingsService} from './settingsService';

const useSettings = create<SettingsStore>()(
  persist(
    (set, get) => ({
      appColor: 'light',
      themePreference: 'system',
      showOnboarding: true,

      onSystemChange: color => {
        const updatedAppTheme = settingsService.onSystemChange(
          color,
          get().themePreference,
        );

        if (updatedAppTheme) {
          set({appColor: updatedAppTheme});
        }
      },

      setThemePreference: newThemePreference => {
        const updatedAppTheme =
          settingsService.onThemePreference(newThemePreference);

        set({appColor: updatedAppTheme});
      },
      finishOnboarding: () => set({showOnboarding: false}),
    }),
    {name: '@Settings', storage},
  ),
);

export function useAppColor(): AppColorScheme {
  return useSettings(state => state.appColor);
}

export function useThemePreference(): ThemePreference {
  return useSettings(state => state.themePreference);
}

export function useShowOnboarding(): boolean {
  return useSettings(state => state.showOnboarding);
}

export function useSettingsService(): Pick<
  SettingsStore,
  'setThemePreference' | 'onSystemChange' | 'finishOnboarding'
> {
  const setThemePreference = useSettings(state => state.setThemePreference);

  const onSystemChange = useSettings(state => state.onSystemChange);

  const finishOnboarding = useSettings(state => state.finishOnboarding);

  return {setThemePreference, onSystemChange, finishOnboarding};
}
