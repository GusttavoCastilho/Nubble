import {Appearance, ColorSchemeName, Platform, StatusBar} from 'react-native';
import {AppColorScheme, ThemePreference} from './settingsTypes';
import {palette} from '@theme';
import BootSplash from 'react-native-bootsplash';

function onThemePreference(themePreference: ThemePreference): AppColorScheme {
  if (themePreference === 'system') {
    const colorScheme = Appearance.getColorScheme();

    return colorScheme ? colorScheme : 'light';
  }

  return themePreference;
}

function onSystemChange(
  color: ColorSchemeName,
  themePreference: ThemePreference,
): AppColorScheme | null {
  if (themePreference === 'system') {
    return color ? color : 'light';
  }

  return null;
}

function handleStatusBarColor(appColor: AppColorScheme) {
  StatusBar.setBarStyle(
    appColor === 'light' ? 'dark-content' : 'light-content',
    true,
  );

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(
      appColor === 'dark' ? palette.grayBlack : palette.grayWhite,
    );
  }
}

async function hideSplashScreen() {
  try {
    const isVisible = await BootSplash.isVisible();

    if (isVisible) {
      await BootSplash.hide({fade: true});
    }
  } catch (error) {
    BootSplash.hide();
  }
}

export const settingsService = {
  onThemePreference,
  onSystemChange,
  handleStatusBarColor,
  hideSplashScreen
};
