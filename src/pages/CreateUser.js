import React from 'react'

function CreateUser() {
  return (
    <div>
      <div className="create-user">

<div className="create-user__top">
  <div className="create-user__logo" />
  <span className="create-user__title">Create Profile</span>
</div>

<div className='create-user__form'>
    
  <img className='create-user__user-img' src='https://randomuser.me/api/portraits/women/30.jpg'/>

  <div className='create-user__input-group'>
    <label>Name</label>
    <input className='create-user__inputText'/>

    
    <div className='create-user__colors'>
    <div className='create-user__color create-user__color--active' style = {{ background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,104,143,1) 60%, rgba(1,110,150,1) 100%'}}/>
    <div className='create-user__color create-user__color' style = {{ background:' linear-gradient(-45deg, rgba(48,2,47,1) 9%, rgba(193,118,227,1) 63%)'}}/>
    <div className='create-user__color create-user__color' style = {{ background:'linear-gradient(135deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}/>
    <div className='create-user__color create-user__color' style = {{ background:'linear-gradient(90deg, rgba(26,173,173,1) 15%, rgba(116,100,219,0.9570203081232493) 74%)'}}/>
    <div className='create-user__color create-user__color' style = {{ background:'linear-gradient(135deg,  rgba(34,193,195,1) 0%, rgba(136,126,81,1) 74%, rgba(144,121,72,1) 100%)'}}/>
    </div>
  </div>

  </div>


<div className="create-user__buttons">
  <button className="create-user__cancel">Cancel</button>
  <button className="create-user__save">Save</button>
</div>

</div>
    </div>
  )
}

export default CreateUser
