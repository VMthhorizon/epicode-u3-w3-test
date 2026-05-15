import { Swiper, SwiperSlide } from "swiper/react";

const NewMusicCarousel = () => {
  return (
    <>
      <h1 className="fs-1 fw-bolder text-light text-start">Novità</h1>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        }}
      >
        <SwiperSlide
          style={{ height: 400 }}
          className="d-flex justify-content-between flex-column"
        >
          <div className="my-1 ">
            <h6 className="text-secondary">NUOVA STAZIONE RADIO</h6>
            <h6 className="text-white fs-5">
              Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
            </h6>
          </div>
          <img
            style={{ maxWidth: "500px" }}
            className="carousel-img"
            src="/public/assets/images/1a.png"
          ></img>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: 400 }}
          className="d-flex justify-content-between flex-column"
        >
          <div className="my-1 ">
            <h6 className="text-secondary">NUOVA STAZIONE RADIO</h6>
            <h6 className="text-white fs-5">
              Ecco la nuova casa della musica latina
            </h6>
          </div>
          <img
            className="carousel-img"
            src="/public/assets/images/1b.png"
          ></img>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: 400 }}
          className="d-flex justify-content-between flex-column"
        >
          <div className="my-1 ">
            <h6 className="text-secondary">NUOVA STAZIONE RADIO</h6>
            <h6 className="text-white fs-5">
              Tutto il meglio della musica Club
            </h6>
          </div>
          <img
            className="carousel-img"
            src="/public/assets/images/1c.png"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default NewMusicCarousel;
