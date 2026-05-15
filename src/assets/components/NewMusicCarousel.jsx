import { Swiper, SwiperSlide } from "swiper/react";

const NewMusicCarousel = () => {
  return (
    <>
      <h1 className="fs-1 fw-bolder text-light text-start mb-3">Novità</h1>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
        }}
      >
        <SwiperSlide
          style={{ height: 320 }}
          className="d-flex justify-content-between flex-column"
        >
          <div className="my-1">
            <h6 className="text-secondary small fw-bold">
              NUOVA STAZIONE RADIO
            </h6>
            <h6 className="text-white fs-5">
              Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
            </h6>
          </div>
          <img
            className="w-100 rounded-3 object-fit-cover"
            style={{ height: "200px" }}
            alt="Apple Music Chill"
            src="/public/assets/images/1a.png"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ height: 320 }}
          className="d-flex justify-content-between flex-column"
        >
          <div className="my-1">
            <h6 className="text-secondary small fw-bold">
              NUOVA STAZIONE RADIO
            </h6>
            <h6 className="text-white fs-5">
              Ecco la nuova casa della musica latina
            </h6>
          </div>
          <img
            className="w-100 rounded-3 object-fit-cover"
            style={{ height: "200px" }}
            src="/public/assets/images/1b.png"
            alt="Musica Latina"
          />
        </SwiperSlide>
        {/* <SwiperSlide
          style={{ height: 320 }}
          className="d-flex justify-content-between flex-column"
        >
          <div className="my-1">
            <h6 className="text-secondary small fw-bold">
              NUOVA STAZIONE RADIO
            </h6>
            <h6 className="text-white fs-5">
              Tutto il meglio della musica Club
            </h6>
          </div>
          <img
            className="w-100 rounded-3 object-fit-cover"
            style={{ height: "200px" }}
            src="/public/assets/images/1c.png"
            alt="Musica Club"
          />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};
export default NewMusicCarousel;
