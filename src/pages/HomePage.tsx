function HomePage() {
  const cardCount = 24;

  return (
    <div className="page home-page">
      <div className="page__header">
        <h1 className="page__title">// Home</h1>
      </div>
      <div className="page__content">
        <div className="analytics">
          {Array.from({ length: cardCount }).map((_, index) => (
            <div className="card" key={index}>
              <p className="card__text">{index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
