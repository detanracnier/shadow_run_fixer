import React from 'react';
import TargetNumber from '../targetNumber/targetNumber';
import DropdownList from './dropdownList';
import modifiersAiming from '../../../data/modifiersAiming.json';
import modifiersAttacker from '../../../data/modifiersAttacker.json';
import modifiersRecoil from '../../../data/modifiersRecoil.json';
import modifiersTarget from '../../../data/modifiersTarget.json';
import modifiersVisibility from '../../../data/modifiersVisibility.json';
import { rangedCombatAssistMenuButtonClicked, rangedCombatAssistResetButtonClicked } from '../../../actions/rangedCombatAssist';
import {
	recoilDropdownChanged,
	recoilMultiplierClicked,
	attackerMovementDropdownChanged,
	attackerStunDropdownChanged,
	attackerWoundDropdownChanged,
	attackerMeleeDropdownChanged,
	attackerAimDropdownChanged,
	targetCoverClicked,
	targetMovementDropdownChanged,
	visibilityDropdownChanged,
	lowLightClicked,
	thermographicClicked,
	smartlinkClicked,
	smartgogglesClicked,
	lasersightClicked,
} from '../../../actions/situationModifiers';
import { useSelector, useDispatch } from 'react-redux';
import '../rangedCombatAssist.scss';



export default function SituationModifiers() {
	const currentMenuIndex = useSelector(state => state.rangedCombatAssist.activeMenuIndex)
	const dispatch = useDispatch();
	const modifierUI = useSelector(state => state.modifiersUI);

	const handleVisionValue = (visionValues, lowlight, thermo ) => {
		if(thermo){ return visionValues[1] };
		if(lowlight){ return visionValues[0] };
		return visionValues[2]
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
				<div className="menu_button" onClick={() => {
					dispatch(rangedCombatAssistMenuButtonClicked(currentMenuIndex + 1))
				}}>
					Next&gt;&gt;
				</div>
			</div>
			<div className="instructions_container">
                <p className="instructions">Select which modifiers apply</p>
				<TargetNumber />
			</div>
			<div className='primary_container'>
				<p>Situation Modifiers</p>
				<table>
					<thead className="no_height">
						<th></th>
						<th id="dropdown_width"></th>
						<th></th>
						<th></th>
					</thead>
					<tbody>
						<tr>
							<td className='keep-left'>Recoil</td>
							<td>
								<DropdownList
									modifierList={modifiersRecoil}
									optionSelected={modifierUI.recoilDropdown}
									dropdownAction={recoilDropdownChanged}
								/>
							</td>
							<td>
								<input checked={modifierUI.recoilMultiplier} className="display_inline" type="checkbox" id="recoil_multiplier" onClick={() => {
									dispatch(recoilMultiplierClicked())
								}}></input><p className="display_inline" >I am using a Heavy Weapon</p>
							</td>
							<td></td>
						</tr>
						<tr>
							<td className='keep-left'>Attacker Movement</td>
							<td>
								<DropdownList
									modifierList={modifiersAttacker.filter(modifier => modifier.type === "movement")}
									optionSelected={modifierUI.attackerMovementDropdown}
									dropdownAction={attackerMovementDropdownChanged}
								/>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td className='keep-left'>Attacker Stunned</td>
							<td>
								<DropdownList
									modifierList={modifiersAttacker.filter(modifier => modifier.type === "damaged (stun)")}
									optionSelected={modifierUI.attackerStunDropdown}
									dropdownAction={attackerStunDropdownChanged}
								/>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td className='keep-left'>Attacker Wounded</td>
							<td>
								<DropdownList
									modifierList={modifiersAttacker.filter(modifier => modifier.type === "damaged (wound)")}
									optionSelected={modifierUI.attackerWoundDropdown}
									dropdownAction={attackerWoundDropdownChanged}
								/>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td className='keep-left'>Attacker in Melee</td>
							<td>
								<DropdownList
									modifierList={modifiersAttacker.filter(modifier => modifier.type === "melee")}
									optionSelected={modifierUI.attackerMeleeDropdown}
									dropdownAction={attackerMeleeDropdownChanged}
								/>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td className='keep-left'>Attacker Aiming</td>
							<td>
								<DropdownList
									modifierList={modifiersAiming}
									optionSelected={modifierUI.attackerAimDropdown}
									dropdownAction={attackerAimDropdownChanged}
								/>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td className='keep-left'>Target Movement</td>
							<td>
								<DropdownList
									modifierList={modifiersTarget}
									optionSelected={modifierUI.targetMovementDropdown}
									dropdownAction={targetMovementDropdownChanged}
								/>
							</td>
							<td>
								<input checked={modifierUI.targetCover} className="display_inline" type="checkbox" id="target_cover" onClick={() => {
									dispatch(targetCoverClicked())
								}}></input><p className="display_inline" >Target is in cover</p>
							</td>
							<td></td>
						</tr>
						<tr>
							<td className='keep-left'>Visibility</td>
							<td>
								<form>
									<select className="modfiers_dropdown_list" onChange={(event) => {
										const visionValuesString = event.currentTarget.value;
										const visionValues = visionValuesString.split(",");
										const text = event.currentTarget[event.currentTarget.selectedIndex].text;
										const value = handleVisionValue(visionValues,modifierUI.lowLight,modifierUI.thermographic);
										dispatch(visibilityDropdownChanged(value,text))
									}}>
										{modifiersVisibility.map(modifier => {
											return(
												<option
												selected={modifier.description === modifierUI.visibilityDropdown ? true : false}
												value={modifier.value}
												key={modifier.label}
												>{modifier.description}</option>
											)
										})}
									</select>
								</form>
							</td>
							<td>
								<input checked={modifierUI.lowLight} className="display_inline" type="checkbox" id="low_light" onClick={() => {
									const visionValues = modifiersVisibility.filter(modifier => modifier.description === modifierUI.visibilityDropdown)[0].value;
									const value = handleVisionValue(visionValues,!modifierUI.lowLight,modifierUI.thermographic);
									dispatch(lowLightClicked(value))
								}}></input><p className="display_inline" >I have low-light vision</p>
							</td>
							<td>
								<input checked={modifierUI.thermographic} className="display_inline" type="checkbox" id="thermographic" onClick={() => {
									const visionValues = modifiersVisibility.filter(modifier => modifier.description === modifierUI.visibilityDropdown)[0].value;
									const value = handleVisionValue(visionValues,modifierUI.lowLight,!modifierUI.thermographic);
									dispatch(thermographicClicked(value))
								}}></input><p className="display_inline" >I have thermograpic vision</p>
							</td>
						</tr>
						<tr>
							<td className='keep-left'>Equipment</td>
							<td>
								<input checked={modifierUI.smartlink} className="display_inline" type="checkbox" id="smartlink" onClick={() => {
									dispatch(smartlinkClicked())
								}}></input><p className="display_inline" >I have a smartlink gun</p>
							</td>
							<td>
								<input checked={modifierUI.smartgoggles} className="display_inline" type="checkbox" id="smartgoggles" onClick={() => {
									dispatch(smartgogglesClicked())
								}}></input><p className="display_inline" >I have smartlink goggles</p>
							</td>
							<td>
								<input checked={modifierUI.lasersight} className="display_inline" type="checkbox" id="lasersight" onClick={() => {
									dispatch(lasersightClicked())
								}}></input><p className="display_inline" >I have a lasersight</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</React.Fragment>
	)
}

