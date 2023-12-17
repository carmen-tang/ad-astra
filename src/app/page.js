import Image from 'next/image'
import Sidebar from './components/Sidebar'
import Today from './components/Today'
import Pinned from './components/Pinned'
import Profile from './components/Profile'

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-h-screen bg-[#88bea3] text-stone-500 font-['Inter'] tracking-tight font-regular">
        <div className="max-w-screen-2xl mx-auto bg-white p-3 sm:grid sm:grid-cols-[auto_minmax(0,1fr)] shadow-2xl shadow-[#98bcce]">
          <Sidebar />
          <div className="xl:flex">
            <Today />
            <Pinned />
            <Profile />
          </div>
        </div>
        <footer className="text-sm p-12 text-center text-white bg-[#88bea3">
          Made with 💜 by Carmen Tang
        </footer>
      </div>
    </main>
  )
}

export default Home;