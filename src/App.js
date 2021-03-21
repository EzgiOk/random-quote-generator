import React, { useState } from "react";

function App(){

    const [quotes, setQuotes] = useState({
        quoteText:"",
        quoteAuthor:""
    });
    

    async function handleClick(){

        const url = "https://api.quotable.io/random";

        try {
            const res = await fetch(url);
            const data  = await res.json();
            setQuotes({quoteText: data.content, quoteAuthor: data.author})
            
        }catch(err){
            console.error(err);
        }
        

}
window.onload = handleClick;

    return <div id="quote-box">
        <div className="text-auto">
        <p className="textItem" id="text">{quotes.quoteText}</p>
        <p id="author">-{quotes.quoteAuthor}</p>
        <button className="tweetQuote"><a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">Twitter</a></button>
        <button onClick={handleClick} id="new-quote">New quote</button>
        </div>
    </div>
}


export default App;