import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "grinning",
  "😉": "winking",
  "🤣": "Rolling on the floor laughing",
  "😍": "heart eyes",
  "😔": "sad",
  "😘": "blowing a kiss"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emojiInput, setEmoji] = useState("");
  const [emojiMeaning, setEmojiMeaning] = useState(
    "Translation will appear here!"
  );
  function inputHandler(event) {
    var userInput = event.target.value;
    setEmoji(userInput);
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry, we don't have that emoji in our database.";
    }
    setEmojiMeaning(meaning);
  }

  function emojiClick(emoji) {
    console.log("Clicked", emoji);
    var clickEmojiMeaning = emojiDictionary[emoji];
    if (clickEmojiMeaning === undefined) {
      clickEmojiMeaning = "Sorry, we don't have that emoji in our database.";
    }
    setEmoji(emoji);
    setEmojiMeaning(clickEmojiMeaning);
  }
  return (
    <div className="App">
      <h1> Understand Emojis! </h1>
      <input onChange={inputHandler} placeholder="Enter the emoji"></input>
      <br />
      <br />
      <div id="emoji"> {emojiInput} </div>
      <h4 id="meaning"> {emojiMeaning} </h4>
      <h4> Or, try out from this set of Emotions </h4>
      {emojis.map((item) => {
        return <span onClick={() => emojiClick(item)}>{item}</span>;
      })}
    </div>
  );
}
