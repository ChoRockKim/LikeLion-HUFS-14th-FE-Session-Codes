import './profile.css'
import MyProfile from './MyProfile/MyProfile'
import Neighbor from './Neighbor/Neighbor'

export default function Profile() {
    return (
        <div className='list-right-container'>
            <MyProfile/>
            <Neighbor/>

          </div>
    )
}