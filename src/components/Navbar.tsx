import { useAtom } from "jotai";
import searchAtom from "../atoms/searchAtom";

const Navbar = () => {
  const [search, setSearch] = useAtom(searchAtom);

  return (
    <div className="navbar bg-base-200 sticky">
      <div className="flex-1">
        <img className="h-10 ml-4" src="https://pokedex.gabrielrapucci.com.br/_next/image?url=%2Fimages%2Fpokedex.png&w=384&q=75" alt="" />
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search pokemon" value={search} onChange={(e) => setSearch(e.target.value)} className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Luis Resendiz" src="https://avatars.githubusercontent.com/u/80994311?v=4" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between" href="https://github.com/luisresendiz0/" target="_blank">
                Github
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Navbar;