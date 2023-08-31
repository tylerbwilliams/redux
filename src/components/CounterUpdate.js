
import { useSelector, useDispatch } from 'react-redux';
import { selectIsEnabled } from '../slices/isEnabled';
import { increment, decrement, addAmount } from '../slices/counter';
import MyComponent from './MyComponent';

export default function CounterUpdate() {
    const isEnabled = useSelector(selectIsEnabled);
    const dispatch = useDispatch();
    const onIncrement = () => dispatch(increment());
    const onDecrement = () => dispatch(decrement());
    const addTen = () => dispatch(addAmount(10));
    return <MyComponent>
        <h2>Update</h2>
        <p>
            <button disabled={!isEnabled} onClick={onIncrement}>+ Increment</button>
            <button disabled={!isEnabled} onClick={onDecrement}>- Decrement</button>
        </p>
        <p>
            <button disabled={!isEnabled} onClick={addTen}>+10 Increase</button>
        </p>
    </MyComponent>
}
