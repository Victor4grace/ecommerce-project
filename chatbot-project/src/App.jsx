import { useState } from 'react'

import './App.css'


 function ChatBot(){

        return (
          <div>
          <input placeholder= "Send a message to Chatbot" size = "30" />
          <button>Send</button>

          </div>

        );
      }


      function ChatMessage({message,sender}){
        // const message = props.message
        // const sender = props.sender

        // const {message, sender} = props

        // if(sender === 'robot'){
        //   return (
        //     <div>
        //   <img  src = "robot.png" width = "50"/>
        //   {message}
        //   </div>
        // )}

        return (
          <div>
            {sender === 'robot' && <img src = "robot.png" width = "50" /> }

            {message}

            {sender === 'user' && <img src="user.png" width = "50" />}  

          </div>
        );
      }



 function App(){
      
        return(
          <div>
          {ChatBot()}
          <ChatBot />

          <ChatMessage
           message = "get me todays date" 
           sender ="user"
           />
          <ChatMessage
            message ="Today is September 3"
            sender = "robot"
             />
          <ChatMessage
            message = "flip a coin for me"
            sender ="user"
            />
          <ChatMessage
            message ="Sure! You got tails"
            sender = "robot" 
            />
        </div>
        );
      

      }


export default App
