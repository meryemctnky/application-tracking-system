import { useTheme } from '../contexts/ThemeContext';

const withTheme = (WrappedComponent) => {
  return (props) => {
    const { theme, toggleTheme } = useTheme();

    return (
      <>
        <WrappedComponent theme={theme} toggleTheme={toggleTheme} {...props} />
      </>
    );
  };
};

export default withTheme;
