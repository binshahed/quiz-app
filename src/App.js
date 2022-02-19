import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import AddQuiz from './components/AddQuiz/AddQuiz'
import Quiz from './components/Quiz/Quiz'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'

function App () {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Quiz />
          </Route>
          <Route path='/register'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/quiz'>
            <Quiz />
          </Route>
          <Route path='/addquiz'>
            <AddQuiz />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
