import React from 'react'

function TopScroll() {
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth', display: 'none'});
  }

  return (
    <div>
      <div className="scrollTop" onClick={ scrollTop }>top</div>
    </div>
  )
}

export default TopScroll
