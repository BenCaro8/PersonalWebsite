import { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

export const ROUTE_HOME = '/' as const;
export const ROUTE_ABOUT = '/about' as const;
export const ROUTE_RESUME = '/resume' as const;
export const ROUTE_PROJECTS = '/projects' as const;
export const ROUTE_THEMES = '/themes' as const;
export const ROUTE_THREE = '/three' as const;

export const ROUTES = [
  ROUTE_HOME,
  ROUTE_ABOUT,
  ROUTE_RESUME,
  ROUTE_PROJECTS,
  ROUTE_THEMES,
  ROUTE_THREE,
] as const;

export type Route = (typeof ROUTES)[number];

export type NavOption = {
  label: ReactNode;
  route: Route;
};

export const navOptions: NavOption[] = [
  {
    label: <FormattedMessage id="Routes.home" defaultMessage="Home" />,
    route: ROUTE_HOME,
  },
  {
    label: <FormattedMessage id="Routes.about" defaultMessage="About" />,
    route: ROUTE_ABOUT,
  },
  {
    label: <FormattedMessage id="Routes.resume" defaultMessage="Resume" />,
    route: ROUTE_RESUME,
  },
  {
    label: <FormattedMessage id="Routes.projects" defaultMessage="Projects" />,
    route: ROUTE_PROJECTS,
  },
] as const;

export type SettingsOption = {
  label: ReactNode;
  route?: string;
  component?: ReactNode;
};

export const settingsOptions: SettingsOption[] = [
  {
    label: <FormattedMessage id="Routes.themes" defaultMessage="Themes" />,
    route: '/themes',
  },
] as const;

export const themeColors = [
  '--primary-bg-color',
  '--primary-accent-color',
  '--secondary-accent-color',
  '--primary-gradient-color',
] as const;

type RemovePrefix<S> = S extends `--${infer T}` ? T : never;

export type ThemeColor = RemovePrefix<(typeof themeColors)[number]>;
