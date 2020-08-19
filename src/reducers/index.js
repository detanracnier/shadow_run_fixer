import { combineReducers } from 'redux';
import CombatAssistReducer from './combatAssist';
import RangeListReducer from './rangeList';
import SituationModifiersReducer from './situationModifiers';
import SituationModifiersUIReducer from './situationModifiersUI';

const allReducers = combineReducers({
    combatAssist: CombatAssistReducer,
    rangeList: RangeListReducer,
    modifiers: SituationModifiersReducer,
    modifiersUI: SituationModifiersUIReducer,
})
export default allReducers