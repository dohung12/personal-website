import { useState, createContext, useContext } from 'react';

export function createCtx<A>(defaultValue: A) {
  type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = createContext({
    theme: defaultValue,
    setTheme: defaultUpdate,
  });
  function Provider(props: React.PropsWithChildren<{}>) {
    const [theme, setTheme] = useState(defaultValue);
    return <ctx.Provider value={{ theme, setTheme }} {...props} />;
  }
  return [ctx, Provider] as const;
}

// usage
const [ctx, ThemeProvider] = createCtx('light');

const useThemeContext = () => {
  return useContext(ctx);
};

export { useThemeContext, ThemeProvider };
