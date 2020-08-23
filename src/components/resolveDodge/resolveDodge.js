import React from 'react';
import './resolveDodge.scss';
import '../combatAssist/combatAssist.scss';
import { ResolveDodgeDecreaseButtonClicked, ResolveDodgeIncreaseButtonClicked } from '../../actions/resolveDodge';
import { combatAssistMenuButtonClicked } from '../../actions/combatAssist'
import { useDispatch, useSelector } from 'react-redux';

export default function ResolveDodge () {
	const currentMenuIndex = useSelector(state => state.rangedCombatAssist.activeMenuIndex)
	const dispatch = useDispatch();
	const dodgeSuccess = useSelector(state => state.resolveCombat.dodgeSuccess);
	const attackerSuccess = useSelector(state => state.resolveCombat.attackerSuccess);
	const attackFailed = attackerSuccess>0 ? false : true;

	return(
		<React.Fragment>
			<div className="menu_button" onClick={() => {
                dispatch(combatAssistMenuButtonClicked(currentMenuIndex - 1))
            }}>
                &lt;&lt;Previous
            </div>
            <div className={attackerSuccess ? "menu_button" : "menu_button_disabled"} onClick={() => {
                dispatch(combatAssistMenuButtonClicked(currentMenuIndex + 1))
            }}>
                Next&gt;&gt;
            </div>
			<div className={attackFailed ? "instructions" : "hidden"}>Your attack failed because you had {attackerSuccess} successes.</div>

			<div className={attackFailed ? "hidden" : ""}>
				<div className="instructions">Target rolls combat pool dice</div>
				<div className="dodge_target_number_container">
					<div className="dodge_target_number_label">Target Number</div>
					<div className="dodge_target_number">4</div>
				</div>
				<div className="instructions">How many successes did they get?</div>
				<div className="success_container">
					<div className="decrease_button" style={{pointerEvents: dodgeSuccess>0?"all":"none"}} onClick={() => {
						dispatch(ResolveDodgeDecreaseButtonClicked())
					}}>&dArr;</div>
					<div className="success_label">{dodgeSuccess}</div>
					<div className="increase_button" onClick={() => {
						dispatch(ResolveDodgeIncreaseButtonClicked())
					}}>&uArr;</div>
				</div>
			</div>
		</React.Fragment>
	)
}