import React from "react";
import { FaCar, FaHotel, FaUmbrellaBeach } from "react-icons/fa";

const OtherServices = () => {
  return (
    <section className="hidden xl:flex flex-col gap-7 ">
      <div
        className="w-68 bg-cover bg-center text-white flex-1 flex max-h-64 rounded-xl bg-placeholder flex-shrink-0"
        style={{
          backgroundImage:
            "url('https://avatars.mds.yandex.net/i?id=2a0000017a053cf641c234bb6389806b0523-4284974-images-thumbs&n=13')",
        }}
      >
        <div className="flex flex-col gap-1 mt-auto ml-4 mb-6">
          <FaCar className="w-6 h-6" />
          <span className="font-bold text-xl">CAR RENTALS</span>
        </div>
      </div>
      <div
        className="w-68 bg-cover bg-center text-white flex-1 flex max-h-64 rounded-xl bg-placeholder flex-shrink-0"
        style={{
          backgroundImage:
            "url('https://www.hotel-birnbacher-hof.de/wp-content/gallery/vitarium/Schwimmbecken-Vitarium-RottalTerme.jpg')",
        }}
      >
        <div className="flex flex-col gap-1 mt-auto ml-4 mb-6">
          <FaHotel className="w-6 h-6" />
          <span className="font-bold text-xl">HOTELS</span>
        </div>
      </div>
      <div
        className="w-68 bg-cover bg-center text-white flex-1 flex max-h-64 rounded-xl bg-placeholder flex-shrink-0"
        style={{
          backgroundImage:
            "url('https://www.stonewoodgrill.com/zupload/library/89/-100-2048x1070-0.jpg?ztv=20180522184655')",
        }}
      >
        <div className="flex flex-col gap-1 mt-auto ml-4 mb-6">
          <FaUmbrellaBeach className="w-6 h-6" />
          <span className="font-bold text-xl">TRAVEL PACKAGES</span>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
