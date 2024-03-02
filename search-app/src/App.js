import './App.css';
import React, {useState,useEffect} from 'react';
import EmojiData from './emoji.json'


function App() {

  const [search,setsearch] = useState('');
  const [data,setdata] = useState([]);

  useEffect(() => {

    const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()))
    console.log(search);
    setdata(newData);

    },[search])


  return (

    <div>
      <center>
        <h1> Emojii Search</h1>
        <br></br>
        <input placeholder='find your emoji' type="text" name='search' value={search} onChange={(e) => setsearch(e.target.value)}/>
      </center>
      {data.map(emoji =><div>

        <br></br>
        <br></br>
        <div class="card">
          <div class="card-body" onClick={ () =>  { window.navigator.clipboard.writeText(emoji.symbol); alert("Emoji Copy")}}>
            {emoji.symbol} { emoji.title}
          </div>
        </div>

      </div>)}


    </div>
   
  );
}

export default App;
