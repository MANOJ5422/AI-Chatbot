export default function RatingStars() {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s}>⭐</span>
        ))}
      </div>
    );
  }
  