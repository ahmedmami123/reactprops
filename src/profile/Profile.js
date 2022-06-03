import React from 'react'
import Main from './Main'
import PropTypes from 'prop-types';
function Profile({fullName,Bio,profession,handleAlert}) {
  return (
    <div>
        <h1>{fullName}</h1>
        <h1>{Bio}</h1>
        <h1>{profession}</h1>
        <Main fullName={fullName}>
    <img src="data:image/png;base64,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"/>

        </Main>
        <button onClick={()=>handleAlert(fullName)}>click here to show name</button>
    </div>
  )
}
Profile.defaultProps = {
    fullName: "Rahul",
    Bio: "deepblue",
    profession: "45"
  }

  Profile.propTypes = {
    fullName: PropTypes.string,
    Bio:PropTypes.string,
    profession:PropTypes.string
  };
export default Profile