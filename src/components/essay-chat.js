import React, {useEffect, useState} from "react";
import '../css/essay-chat.css'
import axios from "axios";

const EssayChat = () => {

  const [textareaValue, setTextareaValue] = useState('');
  useEffect(() => {
    const request = {
      content: 'how to send the data using ajax communication',
      fullname: 'John Doe',
      email: 'johndoe@outlook.com'
    }
    axios.post('/rating/set-rating', request)
      .then(response => {
        console.log("DDDDD ", response);
        const chatContainer = document.getElementById('chat_container');
        chatContainer.innerHTML ='';
        chatContainer.innerHTML += chatStripe(true, response.data.data, generateUniqueId());
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response)
        }
      })
  }, [])

  let loadInterval;


  const loader = (element) => {
    element.textContent = '';

    //every 300ms  it will add '.'
    loadInterval = setInterval(() => {
      element.textContent += '.';

      //resetting textContent
      if (element.textContent === '....') {
        element.textContent = '';
      }
    }, 300);
  }



  const typeText = (element, text) => {
    let index = 0;

    let interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }



  const generateUniqueId = () => {
    const timeStamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timeStamp}-${hexadecimalString}`
  }


  const chatStripe = (isAi, value, uniqueId) => {
    return (
      `
        <div class="wrapper ${isAi ? 'ai' : 'user'}">
          <div class="chat">
            <div class="profile">
              <img src="${isAi ? "/bot.svg" : '/user.svg'}" 
                alt="${isAi ? 'bot' : 'user'}" />
            </div>
            <div class="message ${isAi ? 'message-ai' : 'message-user'}" id=${uniqueId}>${value}</div>
          </div>
        </div>
      `
    )
  }


  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const setNewTextareaValue = (txt) => {
    setTextareaValue(txt);
  };


  const handleSubmit =  (e) => {
    e.preventDefault();
    let p = '';
    if (e.type === 'keyup') p = e.target.value;
    else if (e.type === 'submit') p = e.target[0].value;
    if (p.trim() !== '') {
      const chatContainer = document.getElementById('chat_container');
      chatContainer.innerHTML += chatStripe(false, textareaValue, generateUniqueId());
      setNewTextareaValue('');
    //User's chat stripe
    // setChatHistory(chatHistory + chatStripe(false, userQuestion, generateUniqueId()));
    // form.reset();
    //
    // //BotChat stripe
    // const uniqueId = generateUniqueId();
    // chatContainer.innerHTML += chatStripe(true, " ", uniqueId);
    // chatContainer.scrollTop = chatContainer.scrollHeight;
    //
    // const messageDiv = document.getElementById(uniqueId);
    //
    // loader(messageDiv);

    //Fetch data from server
    // const response = await fetch(serverApi, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     prompt: data.get('prompt')
    //   }),
    // })

    //Clear interval and add empty string to message div
    // clearInterval(loadInterval);
    // messageDiv.innerHTML = '';

    // if (response.ok) {
    //   const data = await response.json();
    //   const parsedData = data.bot.trim();
    //
    //   typeText(messageDiv, parsedData);
    // } else {
    //   const err = response.text();
    //   messageDiv.innerHTML = "Something went wrong!";
    //   console.log(err);
    // }
  }
}



  return (
    <div className="chat-app">
      <div id="chat_container">
      </div>
      <form onSubmit={handleSubmit} onKeyUp={ (e) => { if (e.keyCode === 13 && !e.shiftKey) { handleSubmit(e) }}}>
        <textarea id="message" rows="4" cols="1" placeholder="Ask anything..." onChange={handleTextareaChange} value={textareaValue}></textarea>
        <button type="submit">
          <img src="/send.svg" alt="send message" />
        </button>
      </form>
    </div>
  )
}




export default EssayChat;
