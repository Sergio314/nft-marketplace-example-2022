import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../reducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
