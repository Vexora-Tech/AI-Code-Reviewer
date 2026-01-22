function NavBar() {
  return (
    <>
      <nav>
        <div className="bg-gray-500 h-14 text-gray-50 flex items-center p-2 justify-between">
          <div className="flex flex-row items-center">
            <i>
              <img
                className="h-10"
                src="https://cdn.prod.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d65_646e018a72c2bebff3ba41c2_mailchimp_logo_icon_214765.png"
                alt=""
              />
            </i>
            <span className="text-2xl text-gray-900 cursor-pointer">
              Code Mate
            </span>
          </div>
          <div className="flex justify-between w-60 cursor-pointer">
            <span className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-black">
              Home
            </span>
            <span className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-black">
              Contact
            </span>
            <span className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-black">
              About
            </span>
          </div>
          <div className="flex gap-1 border border-black ml-4">
            <input
              className="flex outline-0  p-1 text-gray-200"
              type="text"
              placeholder="Search..."
            />
            <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 p-1">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
