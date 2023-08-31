
import { useSelector } from 'react-redux';
import { selectTheme } from '../slices/theme';

export default function MyComponent({ children }) {
    const theme = useSelector(selectTheme);
    return <div className={`component ${theme}`}>
        {children}
    </div>
}
