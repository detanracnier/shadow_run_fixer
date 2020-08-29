import React from 'react';
import '../rangedCombatAssist.scss';
import { rangedCombatAssistMenuButtonClicked, rangedCombatAssistResetButtonClicked } from '../../../actions/rangedCombatAssist';
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
    var adjustDamage = null;
    if (Number.isInteger(weaponDamage)){
        var damageValue = weaponDamage+1;
        adjustDamage = Math.round(totalSuccess/2);
        damageValue += adjustDamage;
        damageValue = damageValue < 0 ? 0 : damageValue;
        damageValue = damageValue > 4 ? 4 : damageValue;
    } else {
        adjustDamage = Math.round(totalSuccess/2);
    }

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
                <div className="menu_button_disabled">
                    Next&gt;&gt;
                </div>
            </div>
            <div className="instructions_container">
                <p className="instructions">Your {attackerSuccess} {attackerSuccess>1 ? "successes" : "success"}<br />
                - Your targets {dodgeSuccess} dodge {dodgeSuccess>1 ? "successes" : "success"}<br />
                - Your targets {resistDamageSuccess} damage resist {resistDamageSuccess>1 ? "successes" : "success"}<br />
                Leaves you with {totalSuccess} {totalSuccess>1 ? "successes" : "success"}</p>
            </div>
            <div className={totalSuccess > 1 ? "instructions_container" : "hidden"}>
                <p className="instructions">For every +2 successes you have your damage was raised one level</p>
            </div>
            <div className={totalSuccess < -1 ? "instructions_container" : "hidden"}>
                <p className="instructions">For every -2 successes you have your damage was lowered one level</p>
            </div>
            <div className="instructions_container">
            <p className="instructions">Your target takes {(Number.isInteger(weaponDamage)) ? damageChart[damageValue] : "your weapon raiting in"} damage
                {(Number.isInteger(weaponDamage)) ? "" : adjustDamage > 0 ? " staged up " + adjustDamage : adjustDamage < 0 ? " staged down " + adjustDamage : ""}
            </p>
            </div>
		</React.Fragment>
	)
}