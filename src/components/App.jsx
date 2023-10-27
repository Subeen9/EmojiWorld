import React from "react";
import Card from './Card'
import emojipedia from "../emojipedia";
function Mapemoji(emojis){
  return(
    <Card
    key = {emojis.id}// React  requires key value  which must be unique identifier
    emojiIcon = {emojis.emoji}
    emojiName = {emojis.name}
    description = {emojis.meaning}
    />
  )
}
function App() {
  return (
    <div>
      <h1>
        <span>EmojiWorld</span>
      </h1>

      <dl className="dictionary">
       { emojipedia.map(Mapemoji)};
       
   
      </dl>
    </div>
  );
}

export default App;
