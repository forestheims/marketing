import { useTheme } from '../../context/themeProvider';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer>
      <p>{theme.darkMode && 'dark mode on'}</p>
    </footer>
  );
}
