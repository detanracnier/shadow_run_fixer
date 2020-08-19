import React from 'react';
import { useDispatch } from 'react-redux';
import './menuBar.scss';

export default function MenuBar(props) {
    const dispatch = useDispatch();
    const menuButtonClicked = props.menuButtonClicked;
    const currentMenuIndex = props.currentMenuIndex;
    const menuList = props.menuList;

    return(
        <React.Fragment>
            <button className="menu_button" disabled={currentMenuIndex === 0 ? true : false} onClick={() => {
                dispatch(menuButtonClicked(currentMenuIndex - 1))
            }}>
                &lt;&lt;Previous
            </button>
            <button className="menu_button" disabled={currentMenuIndex + 1 === menuList.length ? true : false} onClick={() => {
                dispatch(menuButtonClicked(currentMenuIndex + 1))
            }}>
                Next&gt;&gt;
            </button>
        </React.Fragment>
    )
}