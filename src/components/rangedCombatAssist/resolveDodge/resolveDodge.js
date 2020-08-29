import React from 'react';
import '../rangedCombatAssist.scss';
import { ResolveDodgeDecreaseButtonClicked, ResolveDodgeIncreaseButtonClicked } from '../../../actions/resolveDodge';
import { rangedCombatAssistMenuButtonClicked, rangedCombatAssistResetButtonClicked } from '../../../actions/rangedCombatAssist';
import { useDispatch, useSelector } from 'react-redux';

export default function ResolveDodge () {
	const currentMenuIndex = useSelector(state => state.rangedCombatAssist.activeMenuIndex)
	const dispatch = useDispatch();
	const dodgeSuccess = useSelector(state => state.resolveCombat.dodgeSuccess);
	const attackerSuccess = useSelector(state => state.resolveCombat.attackerSuccess);
	const attackFailed = attackerSuccess>0 ? false : true;

	return(
		<React.Fragment>
			<div className="menu_nav">
				<div className="menu_button" onClick={() => {
					dispatch(rangedCombatAssistMenuButtonClicked(currentMenuIndex - 1))
				}}>
					&lt;&lt;Previous
				</div>
				<div className="menu_button" onClick={() => {
					dispatch(rangedCombatAssistResetButtonClicked())
				}}>
					Reset
				</div>
				<div className={attackerSuccess ? "menu_button" : "menu_button_disabled"} onClick={() => {
					dispatch(rangedCombatAssistMenuButtonClicked(currentMenuIndex + 1))
				}}>
					Next&gt;&gt;
				</div>
			</div>
			<div className={attackFailed ? "instructions_container" : "hidden"}>
				<p className="instructions">Your attack failed because you had {attackerSuccess} successes.</p>
			</div>

			<div className={attackFailed ? "hidden" : ""}>
				<div className="instructions_container">
					<p className="instructions">Target rolls combat pool dice</p>
					<div className="target_number_container">
						<div className="target_number_label">Target Number</div>
						<div className="target_number">4</div>
					</div>
				</div>
				<div className="instructions_container">
					<p className="instructions">How many successes did they get?</p>
				</div>
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