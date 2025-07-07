/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

import useThemeMode, {themeInitMode } from './useThemeMode';
import type {ThemeModeActionType, ThemeModeStateType} from './useThemeMode';

const ThemeModeStateContext = createContext<ThemeModeStateType>(themeInitMode)
const ThemeModeActionContext = createContext<ThemeModeActionType | null>(null)

interface ThemeModeProviderProps {
  children: ReactNode
}

const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const { states, actions } = useThemeMode()

  return (
    <ThemeModeStateContext.Provider value={states}>
      <ThemeModeActionContext.Provider value={actions}>{children}</ThemeModeActionContext.Provider>
    </ThemeModeStateContext.Provider>
  )
}

export const useThemeModeProviderState = () => {
  const states = useContext(ThemeModeStateContext)
  if (states === undefined) {
    throw new Error('useThemeModeProviderState should be used within ThemeModeProvider')
  }
  return states
}

export const useThemeModeProviderAction = () => {
  const dispatch = useContext(ThemeModeActionContext)

  if (!dispatch) {
    throw new Error('useThemeModeProviderState must be used within ThemeModeProvider')
  }

  return dispatch
};

export default ThemeModeProvider;