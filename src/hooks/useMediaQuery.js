import { useMediaQuery } from 'react-responsive';

export const useIsSmall = () => useMediaQuery({ query: '(min-width: 480px)' });
export const useIsMedium = () => useMediaQuery({ query: '(min-width: 768px)' });
