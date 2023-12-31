import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import storage from 'local-storage-fallback';

import Nav from './Components/Nav';
import LandingPage from './Components/LandingPage';


//These are the styles that need to be changed when we move to dark theme.
const DarkTheme = createGlobalStyle`
body{
  background-color: ${props =>
    props.theme.mode === 'dark' ? '#121212' : '#f9f9f9'};
  color: ${props => 
    props.theme.mode === 'dark' ? '#f9f9f9' : '#111'};
  }
}
#about{
  background-color: ${props =>
    props.theme.mode === 'dark' ? '#121212' : '#fff'};
}
.icon{
  color:${props => 
    props.theme.mode === 'dark' ? '#f9f9f9' : '#111'};
  }
}
.icon:hover{
  color:${props => 
    props.theme.mode === 'dark' ? '#e04f62;transition: all 0.5s ease;' : '#e04f62;transition: all 0.5s ease;'};
  }
.article-details,.post-title{
  color: ${props => 
    props.theme.mode === 'dark' ? '#d9dedc' : '#111'};
  }
}
.header{
  background-color:${props => 
    props.theme.mode === 'dark' ? '#1F1F1F' : '#fff'};
  }
}
.logo-nav a,.projects p,.home-title,.blogs-title,.projects-title, .about-title, .contact-title{
  color: ${props => 
    props.theme.mode === 'dark' ? '#f9f9f9' : '#111'};
  }
}

.category{
  background-color:${props => 
    props.theme.mode === 'dark' ? 'rgb(92,92,92)' : '#fff'};
  color: ${props => 
    props.theme.mode === 'dark' ? 'white' : 'black'};
  }
}
.contact{
  background-color:${props => 
    props.theme.mode === 'dark' ? 'rgb(41,41,41)' : '#fff'};

}
.gif{
  display:${props =>
  props.theme.mode === 'dark' ? '' : ''}
}
}
`

function App() {

  const historyTheme = () =>{
    const prevTheme = storage.getItem('theme')
    return prevTheme ? JSON.parse(prevTheme) : "dark"
  }
  
  const [theme,setTheme] = useState(historyTheme);

  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme));
  }, [theme])

  const themeToggler =() =>{
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={{mode:`${theme}`}}>
      <>
      <DarkTheme/>
    <Router>
    <div className="App">
      <Nav themeSetter={() =>{themeToggler()}} theme={theme}/>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
    </ThemeProvider>
  );
}

export default App;