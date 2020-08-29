import React from 'react';
import '../combatAssist/combatAssist.scss';
import { combatAssistMenuButtonClicked } from '../../actions/combatAssist'
import { useDispatch, useSelector } from 'react-redux';

export default function ResolveDamage () {
	const currentMenuIndex = useSelector(state => state.rangedCombatAssist.activeMenuIndex)
	const dispatch = useDispatch();
	const dodgeSuccess = useSelector(state => state.resolveCombat.dodgeSuccess);
    const attackerSuccess = useSelector(state => state.resolveCombat.attackerSuccess);
    const resistDamageSuccess = useSelector(state => state.resolveCombat.resistDamageSuccess);
    const totalSuccess = attackerSuccess-(dodgeSuccess+resistDamageSuccess)
    const damageChart = ["no","Light (1)","Moderate (3)","Serious (6)","Deadly (10)"];
    const weaponDamage = useSelector(state => state.resolveCombat.weaponDamage);
    if (Number.isInteger(weaponDamage)){
        var damageValue = weaponDamage+1;
        var adjustDamage = Math.floor(totalSuccess/2);
        damageValue += adjustDamage;
        damageValue = damageValue < 0 ? 0 : damageValue;
        damageValue = damageValue > 4 ? 4 : damageValue;
    }

	return(
		<React.Fragment>
			<div className="menu_button" onClick={() => {
                dispatch(combatAssistMenuButtonClicked(currentMenuIndex - 1))
            }}>
                &lt;&lt;Previous
            </div>
            <div className="menu_button_disabled">
                Next&gt;&gt;
            </div>
            <div className="instructions">Your {attackerSuccess} {attackerSuccess>1 ? "successes" : "success"}<br />
            - Your targets {dodgeSuccess} dodge {dodgeSuccess>1 ? "successes" : "success"}<br />
            - Your targets {resistDamageSuccess} damage resist {resistDamageSuccess>1 ? "successes" : "success"}<br />
            Leaves you with {totalSuccess} {totalSuccess>1 ? "successes" : "success"}</div>
            <div className={totalSuccess > 1 ? "instructions" : "hidden"}>For every +2 successes you have your damage was raise one level</div>
            <div className={totalSuccess < -1 ? "instructions" : "hidden"}>For every -2 successes you have your damage was lowered one level</div>
        <div className="instructions">Your target takes {(isNaN(weaponDamage)) ? "your weapon raiting in" : damageChart[damageValue]} damage</div>

		</React.Fragment>
	)
}