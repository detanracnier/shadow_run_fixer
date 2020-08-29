import React from 'react';
import './dropdownList.scss';
import { useDispatch } from 'react-redux';

export default function DropdownList (props) {
    const dispatch = useDispatch();
    const modifierList = props.modifierList;
    const optionSelected = props.optionSelected;
    const dropdownAction = props.dropdownAction;

    return(
        <form>
            <select className="modfiers_dropdown_list" onChange={(event) => {
                const value = event.currentTarget.value;
                const text = event.currentTarget[event.currentTarget.selectedIndex].text;
                dispatch(dropdownAction(value,text))
            }}>
                {modifierList.map(modifier => {
                    return (
                        <option
                        selected={modifier.description === optionSelected ? true : false}
                        value={modifier.value}
                        key={modifier.label}
                        >{modifier.description}</option>
                    )
                })}
            </select>
        </form>
    )
}