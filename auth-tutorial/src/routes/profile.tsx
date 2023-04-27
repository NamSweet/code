
import { useContext } from 'react'
import { AuthContext } from '../context/auth-context'

function Profile() {
  const { currentUser, signOut } = useContext(AuthContext)
  
  return(
    <div>
      <h3 className='tx5'>Xin chào {currentUser?.email}</h3>
      <p>Sign In Status: {currentUser && 'active'}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
export default Profile
