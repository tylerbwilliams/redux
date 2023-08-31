
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, setDarkTheme, setLightTheme } from '../slices/theme';
import MyComponent from './MyComponent';

export default function ThemeControl() {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();
    const setThemeToLight = () => dispatch(setLightTheme());
    const setThemeToDark = () => dispatch(setDarkTheme());
    return <MyComponent>
        <h2>Theme</h2>
        <p>Set Your Theme to <button onClick={setThemeToLight}>Light</button> or <button onClick={setThemeToDark}>Dark</button></p>
        <p>Current Theme Is: {theme}</p>
    </MyComponent>
}
