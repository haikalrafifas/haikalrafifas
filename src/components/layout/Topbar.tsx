import Link from 'next/link';

export default function Topbar() {
  return (
    <header className="py-6 px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo + Name */}
        <div className="text-2xl font-bold">
          <Link href="/" className="flex">
            <img src="/assets/images/logo.jpg" width="42" />
            <h1 className="ml-5 mt-1 font-mono">Haikal</h1>
          </Link>
        </div>

        {/* Right: Navigation Links */}
        <div>
          <div className="hidden md:flex space-x-6">
            <Link href="/#/services" className="text-lg">Services</Link>
            <Link href="/projects" className="text-lg">Projects</Link>
            <Link href="/posts" className="text-lg">Blog</Link>
          </div>

          {/* Navbar Mobile */}
          <nav className="md:hidden">
            =
          </nav>
        </div>
      </div>
    </header>
  );
}
