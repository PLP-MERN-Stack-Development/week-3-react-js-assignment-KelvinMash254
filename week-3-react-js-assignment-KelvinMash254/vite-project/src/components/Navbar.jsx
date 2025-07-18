import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-4 py-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold">PLP Task Manager</h1>
      <Button variant="secondary" size="sm" onClick={toggleTheme}>
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </Button>
    </nav>
  );
};

export default Navbar;
