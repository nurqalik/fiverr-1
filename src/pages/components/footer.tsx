const Footer = () => {
  return (
    <>
    <footer className="w-full mt-20 bg-slate-200">
      <div className="container mx-auto pb-2 md:pb-4">
        <div className="flex flex-row mx-6 md:mx-64">
          <div className="text-left mt-10 md:mt-20 w-[70%] mx-4">
            <h1 className="flex flex-row mb-3">
              <p className="text-bold text-blue-800 font-bold text-sm md:text-2xl">W</p>
              <p className="text-bold  font-bold text-sm md:text-2xl">eb</p>
              <p className="text-bold text-blue-800 font-bold text-sm md:text-2xl">S</p>
              <p className="text-bold  font-bold text-sm md:text-2xl">ite</p>
            </h1>
            <p className="text-slate-600 text-xs md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="mt-10 md:mt-20 w-[15%] text-left mx-4">
            <h1 className="text-slate-700 font-semibold mb-4 text-sm md:text-base">About Us</h1>
            <ul>
              <li className="text-slate-600 text-xs">Our Team</li>
              <li className="text-slate-600 text-xs">Pitch a Story</li>
              <li className="text-slate-600 text-xs">Our Resources</li>
              <li className="text-slate-600 text-xs">Privacy</li>
              <li className="text-slate-600 text-xs">Polygraph Sutid</li>
            </ul>
          </div>
          <div className="mt-10 md:mt-20 w-[15%] text-left mx-4">
            <h1 className="text-slate-700 font-semibold mb-4 text-sm md:text-base">Follow Us</h1>
            <ul>
              <li className="text-slate-600 text-xs">Twitter</li>
              <li className="text-slate-600 text-xs">Instagram</li>
              <li className="text-slate-600 text-xs">Facebook</li>
              <li className="text-slate-600 text-xs">Youtube</li>
              <li className="text-slate-600 text-xs">Tiktok</li>
              <li className="text-slate-600 text-xs">Mastodon</li>
              <li className="text-slate-600 text-xs">RSS</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-200 w-full mt-4 md:mt-14">
          <p className="text-center text-sm md:text-base">SiteName &copy;2023. All rights reserved</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer