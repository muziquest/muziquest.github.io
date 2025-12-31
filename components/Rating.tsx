export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="rating rating-lg rating-half">
      <input type="radio" name="rating" className="rating-hidden" />
      {Array.from({ length: 10 }).map((_, i) => (
        <input
          type="radio"
          name="rating"
          checked={rating === i + 1}
          className={`mask mask-star-2 mask-half-${(i % 2) + 1}`}
          readOnly
        />
      ))}
    </div>
  );
}
