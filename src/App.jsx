import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { notificationsAtom } from './atoms'


function App() {
  return (
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
  )
  
}

function MainApp () {
  const notificationCount = useRecoilValue(notificationsAtom)

  return (
    <div>
      <button>Home</button>
      
      <button>My Network ()</button>
      <button>Jobs ()</button>
      <button>Messaging ()</button>
      <button>Notifications ({notificationCount >=100 ? "99+" : notificationCount})</button>

      <button>Me</button>

    </div>
  )

}

export default App
