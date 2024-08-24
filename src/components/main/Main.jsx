import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt='User icon' />
      </div>

      <div className='main_container'>

        {!showResult
        ?<>
                <div className='greet'>
          <p><span>Hello, User.</span></p>
          <p>How can I help you today?</p>
        </div>

        <div className='cards'>
          <div className='card'>
            <p>How to create Chat-GPT clone project?</p>
            <img src={assets.code_icon} alt='Code icon' />
          </div>

          <div className='card'>
            <p>How to Course out Java study plan?</p>
            <img src={assets.bulb_icon} alt='Bulb icon' />
          </div>

          <div className='card'>
            <p>How to prepare yourself to become a Cyber-Security Engineer?</p>
            <img src={assets.compass_icon} alt='Compass icon' />
          </div>

          <div className='card'>
            <p>Which Programming language to study to become a "Jack of all Trades" in IT Industry?</p>
            <img src={assets.message_icon} alt='Message icon' />
          </div>
        </div>
        </>
        :<div className='result'>
          <div className='result_title'>
            <img src={assets.user_icon} />
            <p>{recentPrompt}</p>
          </div>
          <div className='result_data'>
            <img src={assets.gemini_icon} />
            {loading
            ?<div className='loader'>
              <hr/>
              <hr/>
              <hr/>
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
          </div>
        </div>
        }
        


        <div className='main_bottom'>
          <div className='search_box'>
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter your prompt" />
            <div>
              <img src={assets.gallery_icon} alt='Gallery icon' />
              <img src={assets.mic_icon} alt='Microphone icon' />
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt='Send icon' />: null}
            </div>
          </div>
          <p className='bottom_info'>Gemini may display inaccurate info, including people, etc, so double-check its responses. Please do not share any confidential information in your prompts.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
