import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Food Analyzer' },
  { to: '/profile', label: 'My Profile' },
  { to: '/health', label: 'Health Dashboard' },
  { to: '/suggestions', label: 'Food Suggestions' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-emerald-400 transition hover:text-emerald-300"
        >
          NutriTrack
        </NavLink>
        <ul className="flex flex-wrap gap-1 sm:gap-2">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
