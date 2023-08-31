
import { useSelector } from 'react-redux';
import { selectCounter } from '../slices/counter';
import MyComponent from './MyComponent';

export default function CounterView() {
    const counter = useSelector(selectCounter);
    return <MyComponent>
        <h2>View</h2>
        <p>The Value Of Counter Is: {counter}</p>
    </MyComponent>
}
