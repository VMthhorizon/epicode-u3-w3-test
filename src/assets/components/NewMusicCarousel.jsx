import { Swiper, SwiperSlide } from "swiper/react";

const NewMusicCarousel = () => {
  return (
    <>
      <h1 className="fs-1 fw-bolder text-light text-start mb-3">Novità</h1>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        breakpoints={{
          // Da 768px in su (Desktop / Tablet)
          768: {
            slidesPerView: 1.5, // Ti consiglio 2.2 così vedi un pezzetto della terza slide anche su desktop!
            spaceBetween: 25,
          },
        }}
      >
        {/* SLIDE 1 */}
        <SwiperSlide
          style={{ height: 400 }}
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
            className="w-100 rounded-3 object-fit-fill"
            style={{ height: "280px" }} // Blocchiamo l'altezza dell'immagine per sicurezza
            src="/public/assets/images/1a.png" // CORRETTO: rimosso /public
            alt="Apple Music Chill"
          />
        </SwiperSlide>

        {/* SLIDE 2 */}
        {/* <SwiperSlide
          style={{ height: 400 }}
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
            style={{ height: "280px" }}
            src="/assets/images/1b.png" // CORRETTO: rimosso /public
            alt="Musica Latina"
          />
        </SwiperSlide> */}

        {/* SLIDE 3 */}
        {/* <SwiperSlide
          style={{ height: 300 }}
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
            style={{ height: "280px" }}
            src="/assets/images/1c.png" // CORRETTO: rimosso /public
            alt="Musica Club"
          />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};
export default NewMusicCarousel;
