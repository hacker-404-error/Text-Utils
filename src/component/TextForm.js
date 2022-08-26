import React, { useState } from "react";

export default function TextForm(props) {

    const rmExtra = () => {
        console.log("Extra Space Removed");
        setText(text.replace(/ +(?= )/g,""))
      }
    const handleRevClick = () => {
        console.log("Reverse Text");
        let newText = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newText += text[i];
        }
        setText(newText);
    };
    const handleClClick = () => {
        console.log("Clear Text");
        let newText = "";
        setText(newText);
        setVowvel("");
        setconso("");
    };
    const handleLoClick = () => {
        console.log("Lower case button is Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleUpClick = () => {
        console.log("Upper case button is Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
        const count = text.match(/[aeiou]/gi).length;
        setVowvel("You have "+count + " no of vowels");
    };
    const handleCopy = ()=> {
        console.log("Text Copied")
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const vowelCheck = ()=>{
        const count = text.match(/[aeiou]/gi).length;
        const conso = text.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
        setVowvel("Total Number of Vowels: "+count);
        setconso("Total Number of consonents: "+conso);
    }
    const [text, setText] = useState("");
    const [vowvel, setVowvel] = useState("");
    const [conso, setconso] = useState("");

    //  text = "I am updating the text"; //This is a Wrong Way;
    //  setText("I am updating the text");
    return (
        <>
            <div className="container">
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        placeholder="Enter your Text Here...."
                        id="myBox"
                        rows="10"
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>
                    Convert to Upper Case
                </button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>
                    Convert to Lower Case
                </button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleClClick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleRevClick}>
                    Reverse Text
                </button>
                <button className="btn btn-primary mx-2 my-3" onClick={rmExtra}>
                    Remove Extra Space
                </button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>
                    Copy text
                </button>
                <button className="btn btn-primary mx-2 my-3" onClick={vowelCheck}>
                    Number Of Vowel
                </button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(" ").length} characters and {text.length} words
                </p>
                <p>{0.008 * text.split(" ").length} Mins Read</p>
                <h2>Preview</h2>
                <p>{vowvel}</p>
                <p>{conso}</p>
            </div>
        </>
    );
}
