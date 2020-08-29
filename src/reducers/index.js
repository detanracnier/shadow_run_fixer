import { combineReducers } from 'redux';
import RangedCombatAssistReducer from './rangedCombatAssist';
import RangeListReducer from './rangeList';
import SituationModifiersReducer from './situationModifiers';
import SituationModifiersUIReducer from './situationModifiersUI';
import ResolveCombatReducer from './resolveCombat';

const allReducers = combineReducers({
    rangedCombatAssist: RangedCombatAssistReducer,
    rangeList: RangeListReducer,
    modifiers: SituationModifiersReducer,
    modifiersUI: SituationModifiersUIReducer,
    resolveCombat: ResolveCombatReducer
})
export default allReducers