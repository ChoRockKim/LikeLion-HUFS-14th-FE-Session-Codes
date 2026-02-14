import './App.css'
import List from './components/List/List'
import Profile from './components/Profile/Profile'

function App() {

  var title = "LikeLion HUFS"

  return (
    <>
      {/* 여긴 nav바 부분임 */}
      <div className='navbar'>
        <span className='navbar-title'>{title} 블로그</span>
      </div>
      
      {/* 글 부분임 */}
      <div className='list-main-container'>
        <div className='list-title'><h2>새 글 리스트</h2></div>
          
        <div className='list-inner-container'>
          <div className='list-left-container'>
            <List/>
            <List/>
            <List/>
          </div>

          <Profile/>
        </div>
      </div>

    </>
  )
}



export default App
