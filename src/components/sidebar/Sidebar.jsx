import React, { useContext, useState } from 'react';
import './sidebar.css';
import { assets } from '../../assets/assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent, previousPrompts, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt='Menu icon'
        />

        <div onClick={() => newChat()} className='new_chat'>
          <img src={assets.plus_icon} alt='Plus icon' />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className='recent'>
            <p className='recent_title'>Recent</p>
            {previousPrompts.map((item, index) => {
              return (
                <div key={index} onClick={() => loadPrompt(item)} className='recent_entry'>
                  <img src={assets.message_icon} alt='Message icon' />
                  <p>{item.slice(0,18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className='bottom'>
        <div className='bottom_item recent_entry'>
          <img src={assets.question_icon} alt='Help icon' />
          {extended ? <p>Help</p> : null}
        </div>

        <div className='bottom_item recent_entry'>
          <img src={assets.history_icon} alt='History icon' />
          {extended ? <p>Query History</p> : null}
        </div>

        <div className='bottom_item recent_entry'>
          <img src={assets.setting_icon} alt='Settings icon' />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
