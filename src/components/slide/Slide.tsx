const Slide = ({ count, slideList, slideRef, handleSlider }: any) => {
  return (
    <>
      <ul ref={slideRef} className="slideWrap">
        {slideList.map((slide: any) => (
          <li key={slide.id}>
            <img src={slide.src} alt={slide.alt} />
          </li>
        ))}
      </ul>
      <div className="inner">
        <div className="pagination">
          {slideList.map((button: any) => (
            <button
              type="button"
              key={button.id}
              onClick={() => {
                handleSlider(button.id);
              }}
              className={button.id === count ? "active" : ""}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;
