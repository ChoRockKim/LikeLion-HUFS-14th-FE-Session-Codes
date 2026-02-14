import '../profile.css'

export default function MyProfile() {

    return (
        <>
            <div className='my-profile'>
                <div className='profile-title'>
                    <img src="../../../public/dummy-image.png" alt="" />
                    <div className='profile-name'>
                        <div style={{fontSize : '18px'}}>아기사자</div>
                        <div style={{fontSize : '14px', color : 'rgba(0,0,0,0.5)'}}>오늘 0명 방문</div>
                    </div>
                </div>
                <div className='profile-nav-btn'>
                    <div>내 프로필</div>
                    <div style={{borderLeft : '1px solid rgba(255,255,255,0.5)'}}>글 쓰기</div>
                </div>
            </div>
        </>
    )
}