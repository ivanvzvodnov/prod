/* eslint-disable i18next/no-literal-string */
import { useDispatch } from 'react-redux';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';
import { Button } from '@/shared/ui/Button';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { increment, decrement } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={handleInc}>
                Increment
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDec}>
                Decrement
            </Button>
        </div>
    );
};
