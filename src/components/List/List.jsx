import './List.css'

export default function List() {

  return(
      <div className='list'>
        <div className='list-user'>
            <img className='list-user-img' src="../../../public/dummy-image.png" alt=""/>
        <span>아기사자</span></div>
        <h3>안녕하세요. 아기사자입니다.</h3>
        <p>집에 가고 싶어요. 종강주세요.</p>
        <p style={{color : 'gray'}}>2026년 1월 1일</p>
      </div>
  )
}