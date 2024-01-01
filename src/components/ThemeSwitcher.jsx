import withTheme from '../hoc/withTheme';
import { BiSun, BiMoon } from 'react-icons/bi';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <button
      className='inline-flex justify-center items-center py-2 text-base font-medium text-center text-indigo-700'
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <BiSun className='h-6 w-6' /> : <BiMoon className='h-6 w-6' />}
    </button>
  );
};

export default withTheme(ThemeSwitcher);
