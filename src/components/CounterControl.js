
import { useSelector, useDispatch } from 'react-redux';
import { selectIsEnabled, toggleIsEnabled } from '../slices/isEnabled';
import MyComponent from './MyComponent';

export default function CounterControl() {
    const isEnabled = useSelector(selectIsEnabled);
    const dispatch = useDispatch();
    const toggleEnabled = () => dispatch(toggleIsEnabled());
    return <MyComponent>
        <h2>Control</h2>
        <p>Disable The Counter Control: <button onClick={toggleEnabled}>
            {isEnabled ? 'Disable' : 'Enable'}
        </button></p>
    </MyComponent>
}
