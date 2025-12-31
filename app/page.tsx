import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>
        <span className="badge badge-primary">New</span> 2025 Reamp ▶
      </h1>
      <p>
        <Link href="/2025">Read more</Link>
      </p>
    </>
  );
}
