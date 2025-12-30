export default function Home() {
  return (
    <div className="drawer">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <main className="min-h-full p-5 lg:px-120">
          <article className="min-w-full prose">
            <h1>2025 List</h1>
            <label htmlFor="my-drawer-1" className="btn drawer-button">
              Open drawer
            </label>
          </article>
        </main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-1" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
