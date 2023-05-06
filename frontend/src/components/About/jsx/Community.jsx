import React from 'react'
import "../css/CommunityStyles.css" ;

const Community = () => {
  return (
    <>
    <div className='community_section'>
         <h1>Community Benefits</h1>
    </div> 
  <div className='community_card'>
  <div className="card1">
      <div className="inner">
        <p className="title">You get benefits of being associated with a great student community.</p>
      </div>
  </div>
  <div className="card2">
      <div className="inner">
        <p className="title">Your outreach widens across not just your campus but other campuses too.</p>     
      </div>
  </div>
  <div className="card3">
      <div className="inner">
        <p className="title">A new event always adds to our experience arsenal where we get to explore a new beginning to something unknown.</p>
      </div>
  </div>
  </div>
    </>
  )
}

export default Community