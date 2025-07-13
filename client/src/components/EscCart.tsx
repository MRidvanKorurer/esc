// import React from "react";
// import { TbClockHour10 } from "react-icons/tb";

// const EscCart: React.FC = () => {
//   return (
//     <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col sm:flex-row">
//       {/* Sol taraf (1/3) */}
//       <div className="sm:w-1/3 w-full relative">
//         <img
//           src="https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"
//           alt="Profil"
//           className="w-full object-cover h-40 sm:h-full sm:rounded-l-xl"
//         />
//         <div className="absolute bottom-2 right-2 bg-purple-600 bg-opacity-80 text-white text-xs px-2 py-0.5 rounded-full shadow-md backdrop-blur">
//           Kadıköy
//         </div>
//       </div>

//       {/* Sağ taraf (2/3) */}
//       <div className="sm:w-2/3 w-full p-4 flex flex-col justify-between gap-y-2">
//         {/* Tarih */}
//         <div className="flex items-center text-gray-500 text-xs">
//           <TbClockHour10 className="mr-2 text-purple-600" size={16} />
//           <span>6 gün önce</span>
//         </div>

//         {/* Başlık */}
//         <h3 className="text-lg font-semibold text-gray-800 leading-snug">
//           Güzellik ve Zarafet
//         </h3>

//         {/* Açıklama */}
//         <p className="text-gray-600 text-sm leading-snug line-clamp-2">
//           İstanbul’da kaliteli zaman geçirmek isteyenler için elit ve özel bir
//           deneyim sunuyorum. İletişim kurmaktan çekinmeyin.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default EscCart;



import React from "react";
import { TbClockHour10 } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";

const EscCart: React.FC = () => {
  return (
    <div className="group relative max-w-3xl mx-auto bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col sm:flex-row">
      {/* Sol taraf (1/3) */}
      <div className="sm:w-1/3 w-full relative">
        <img
          src="https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"
          alt="Profil"
          className="w-full object-cover h-40 sm:h-full sm:rounded-l-xl"
        />
        <div className="absolute bottom-2 right-2 bg-purple-600 bg-opacity-80 text-white text-xs px-2 py-0.5 rounded-full shadow-md backdrop-blur">
          Kadıköy
        </div>
      </div>

      {/* Sağ taraf (2/3) */}
      <div className="sm:w-2/3 w-full p-4 flex flex-col justify-between gap-y-2">
        {/* Tarih */}
        <div className="flex items-center text-gray-500 text-xs">
          <TbClockHour10 className="mr-2 text-purple-600" size={16} />
          <span>6 gün önce</span>
        </div>

        {/* Başlık */}
        <h3 className="text-lg font-semibold text-gray-800 leading-snug">
          Güzellik ve Zarafet
        </h3>

        {/* Açıklama */}
        <p className="text-gray-600 text-sm leading-snug line-clamp-2">
          İstanbul’da kaliteli zaman geçirmek isteyenler için elit ve özel bir
          deneyim sunuyorum. İletişim kurmaktan çekinmeyin.
        </p>
      </div>

      {/* Hover'da Görünen "İncele" Butonu */}
      <div className="absolute bottom-4 cursor-pointer right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <button className="flex items-center gap-1 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow hover:bg-purple-700">
          <AiOutlineEye size={16} />
          İncele
        </button>
      </div>
    </div>
  );
};

export default EscCart;
