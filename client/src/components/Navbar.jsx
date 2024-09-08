import React from 'react'
import Image from 'next/image'
import {useSession, signOut} from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()
    return (
      <header>
        <nav className="logo">
          <label>ToDo App</label>

          <div className="sign-out" onClick={()=> signOut()}>
          <Image className="profile-pic" width={50} height={50} src={session.user.image} alt="profile picture"/>
          </div>
        </nav>
      </header>
    );
}

export default Navbar
