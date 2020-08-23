import { combineReducers } from 'redux';
import CombatAssistReducer from './combatAssist';
import RangeListReducer from './rangeList';
import SituationModifiersReducer from './situationModifiers';
import SituationModifiersUIReducer from './situationModifiersUI';
import ResolveCombatReducer from './resolveCombat';

const allReducers = combineReducers({
    rangedCombatAssist: CombatAssistReducer,
    rangeList: RangeListReducer,
    modifiers: SituationModifiersReducer,
    modifiersUI: SituationModifiersUIReducer,
    resolveCombat: ResolveCombatReducer
})
export default allReducers