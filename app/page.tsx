import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>
        <span className="badge badge-primary">New</span> 2025 Reamp ▶
      </h1>
      <p>
        My playlist for the year 2025. <Link href="/2025">Read more</Link>
      </p>
      <div className="divider" />
      <h1>📀 Rotation</h1>
      <p>I'm currently looping these!</p>
      <div className="divider" />
      <h1>⏭️ Up Next</h1>
      <p>I wanna try these out!</p>
      <div className="divider" />
      <h1>🪐 Archived</h1>
      <p>Cool stuff I already explored.</p>
    </>
  );
}
