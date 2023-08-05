const Footer = () => {
  return (
    <>
    <footer className="w-full mt-20 bg-slate-200">
      <div className="container mx-auto">
        <div className="flex flex-row mx-64">
          <div className="text-left mt-20 w-[70%] mx-4">
            <h1 className="flex flex-row mb-3">
              <p className="text-bold text-blue-800 font-bold text-2xl">W</p>
              <p className="text-bold  font-bold text-2xl">eb</p>
              <p className="text-bold text-blue-800 font-bold text-2xl">S</p>
              <p className="text-bold  font-bold text-2xl">ite</p>
            </h1>
            <p className="text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="mt-20 w-[15%] text-left mx-4">
            <h1 className="text-slate-700 font-semibold mb-4 ">About Us</h1>
            <ul>
              <li className="text-slate-600">Our Team</li>
              <li className="text-slate-600">Pitch a Story</li>
              <li className="text-slate-600">Our Resources</li>
              <li className="text-slate-600">Privacy</li>
              <li className="text-slate-600">Polygraph Sutid</li>
            </ul>
          </div>
          <div className="mt-20 w-[15%] text-left mx-4">
            <h1 className="text-slate-700 font-semibold mb-4 ">Follow Us</h1>
            <ul>
              <li className="text-slate-600">Twitter</li>
              <li className="text-slate-600">Instagram</li>
              <li className="text-slate-600">Facebook</li>
              <li className="text-slate-600">Youtube</li>
              <li className="text-slate-600">Tiktok</li>
              <li className="text-slate-600">Mastodon</li>
              <li className="text-slate-600">RSS</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-200 w-full mt-14 mb-6">
          <p className="text-center">SiteName &copy;2023. All rights reserved</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer