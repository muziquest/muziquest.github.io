export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <input
          key={i}
          type="radio"
          name="rating"
          checked={Math.round(rating / 2) - 1 === i}
          className={`mask mask-star-2`}
          readOnly
        />
      ))}
    </div>
  );
}
