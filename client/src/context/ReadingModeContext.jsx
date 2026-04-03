import { createContext, useContext, useMemo, useState } from 'react';

const ReadingModeContext = createContext(null);

export const ReadingModeProvider = ({ children }) => {
  const [readingMode, setReadingMode] = useState(false);

  const value = useMemo(
    () => ({ readingMode, setReadingMode, toggleReadingMode: () => setReadingMode((prev) => !prev) }),
    [readingMode]
  );

  return <ReadingModeContext.Provider value={value}>{children}</ReadingModeContext.Provider>;
};

export const useReadingMode = () => {
  const context = useContext(ReadingModeContext);
  if (!context) throw new Error('useReadingMode must be used within ReadingModeProvider');
  return context;
};
