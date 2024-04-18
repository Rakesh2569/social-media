// Discuss.tsx

import React, { useState } from "react";
import "./htmlbot.css";

interface Message {
  id: number;
  text: string;
  sender: string;
}

const Htmlbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "you",
    };
    const updatedMessages = [...messages, userMessage];

    const botResponse = getBotResponse(newMessage.toLowerCase());

    if (botResponse) {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "Sarawsati GrandhalayamBot",
      };
      updatedMessages.push(botMessage);
    }

    setMessages(updatedMessages);
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const getBotResponse = (message: string): string | undefined => {
    switch (message) {
      case "hi":
        return "hello welcome to saraswati grandhalayam";
      case "what is html":
        return "HTML stands for Hypertext Markup Language. It is the standard markup language used to create web pages.";
      case "what are the basic components of an html document":
        return "The basic components include elements, tags, attributes, and text content.";
      case "what is the purpose of html elements?":
        return "HTML elements are used to define the structure and content of web pages.";
      case "what are html tags?":
        return "HTML tags are keywords surrounded by angle brackets (< >) that define the structure of an HTML document.";
      case "what is the syntax for writing html tags?":
        return "The syntax for writing HTML tags is <tagname>content</tagname>, where <tagname> is the name of the tag and content is the text or other elements enclosed within the tag.";
      case "what is the difference between html and html5?":
        return "HTML5 is the latest version of HTML, which includes new features such as native support for multimedia elements, improved semantics, and enhanced APIs.";
        case "html tags":
          return "HTML tags are used to define elements that make up the structure of a web page. They specify how content should be displayed or behave. Some of the most commonly used HTML tags include:\n\n" +
            "<html>: Defines the root of an HTML document.\n" +
            "<head>: Contains metadata and other elements such as <title>, <meta>, and <link>.\n" +
            "<title>: Sets the title of the document displayed in the browser's title bar or tab.\n" +
            "<meta>: Provides metadata about the HTML document, such as character set, viewport, and keywords.\n" +
            "<body>: Contains the visible content of the document.\n" +
            "<div>: Defines a division or section in an HTML document.\n" +
            "<span>: Defines a generic container that does not have any semantic meaning.\n" +
            "<p>: Defines a paragraph.\n" +
            "<a>: Defines a hyperlink.\n" +
            "<img>: Embeds an image in the document.\n" +
            "<ul>: Defines an unordered list.\n" +
            "<ol>: Defines an ordered list.\n" +
            "<li>: Defines a list item.\n" +
            "<h1> to <h6>: Defines headings of different levels.\n" +
            "<table>: Defines a table.\n" +
            "<tr>: Defines a table row.\n" +
            "<td>: Defines a table cell.\n" +
            "<th>: Defines a table header cell.\n" +
            "<form>: Defines a form for user input.\n" +
            "<input>: Defines an input control.\n" +
            "<button>: Defines a clickable button.\n" +
            "<textarea>: Defines a multiline text input control.\n" +
            "<select>: Defines a dropdown list.\n" +
            "<option>: Defines an option in a select list.\n" +
            "<label>: Defines a label for an input element.\n" +
            "<fieldset>: Groups related elements in a form.\n" +
            "<legend>: Defines a caption for a <fieldset> element.\n" +
            "<iframe>: Embeds another HTML page into the current document.\n" +
            "And many more.";

      default:
        return "I am still under development. Use saraswati grandhalayam only for learning.";
    }
  };

  return (
    <div className="container">
      <h1>Chat With Html Bot!</h1>
      <div className="chat-container">
        <div className="messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === "you" ? "you" : "sender"}`}
            >
              <span className="text">{message.text}</span>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input-field"
          />
          <button onClick={handleSendMessage} className="input-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Htmlbot;
