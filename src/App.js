import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Article from './Article';
import Nav from './Nav';

function App() {
  const [title, setTitle] = useState('WEB');
  const [sub, setSub] = useState('World Wide Web');  
  const [subject, setSubject] = useState({
    // title : 'WEB', sub : 'World Wide Web'
    title, sub
  });

  const [mode, setMode] = useState('read');
  const [welcome, setWelcome] = useState({
    title : 'Welcome', desc : 'Welcome React'
  });
  let _title, _desc = null;
  const [key, setKey] = useState(null);

  if(mode === 'welcome'){
    _title = welcome.title;
    _desc = welcome.desc;
  }
  else if(mode === 'read'){
    if(key === 'HTML'){
      _title = key;
      _desc = 'this is mark-up language';
    }
    else if(key == 'CSS'){
      _title = key;
      _desc = 'this is cascading style sheet';
    }
    else if(key == 'Javascript'){
      _title = key;
      _desc = 'this is interpret language';
    }
  }


  return(
    <div>
      <Header 
        title={subject.title}
        sub={subject.sub}
        onChangePage={()=>{
          setMode('welcome');
        }}
      />
      <Nav 
        onChangePage={(key)=>{
          setMode('read');
          setKey(key);
        }}
      />
      <Article
        title={_title}
        desc={_desc}
      />
    </div>
  );
}

export default App;
