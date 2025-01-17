import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'


function App() {
  return (
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
  )
  
}

function MainApp () {
  const notificationCount = useRecoilValue(notificationsAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const networkCount = useRecoilValue(networkAtom);
  const messagingCount= useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      
      <button>My Network ({networkCount >=100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount >=100 ? "99+" : jobsCount})</button>
      <button>Messaging ({messagingCount >=100 ? "99+" : messagingCount})</button>
      <button>Notifications ({notificationCount >=100 ? "99+" : notificationCount})</button>

      <button>Me({totalNotificationCount})</button>

    </div>
  )

}

export default App
