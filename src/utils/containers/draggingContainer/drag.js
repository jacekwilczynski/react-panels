import {
  ABORT,
  DRAG,
  RECEIVE_VALUES,
  RELEASE,
  START
} from 'utils/containers/DraggingContainer';
import subReducers from './drag/subReducers';

const reducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_VALUES:
      return {
        initialValues: action.values,
        currentValues: action.values,
        previousEvent: null
      };
    case START:
      return { ...state, previousEvent: action.event };
    case DRAG: {
      const movementX = action.event.pageX - state.previousEvent.pageX;
      const movementY = action.event.pageY - state.previousEvent.pageY;
      return {
        ...state,
        currentValues: subReducers[action.method](
          state.currentValues,
          movementX,
          movementY
        ),
        previousEvent: action.event
      };
    }
    case RELEASE:
      return { ...state, previousEvent: null };
    case ABORT:
      return {
        ...state,
        currentValues: state.initialValues,
        previousEvent: null
      };
    default:
      return state;
  }
};

export default reducer;

export const getValues = state => state.currentValues;
