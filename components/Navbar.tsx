export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-white text-xl font-bold tracking-wide">
          Harsh Kohli
        </h1>

        <button className="text-white border border-red-600 px-5 py-2 rounded-full hover:bg-red-600 transition">
          Contact
        </button>
      </div>
    </nav>
  );
}
