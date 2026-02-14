import '../profile.css'

export default function Neighbor() {
    return(
        <>
            <div className='neighbor-list-container'>
                <div className='neighbor-nav-btn'>
                    <div style={{borderRight : '1px solid gray'}}>내 소식</div>
                    <div style={{borderRight : '1px solid gray'}}>내 활동</div>
                    <div>이웃 목록</div>
                </div>

                <div className='neighbor-list'>
                    <div className='neighbor-search'>이웃검색</div>

                    {[1,2,3,4,5,6,7,8].map(()=>{
                        return(
                            <>
                            <div className='neighbor-profile'>
                                <img className='neighbor-profile-img' src='../../../public/dummy-image.png'>
                                </img>
                                <span style={{display : 'block', fontSize : '17px'}}>
                                    아기사자</span>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}