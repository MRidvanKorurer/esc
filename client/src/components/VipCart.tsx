// import React from "react";
// import { AiOutlineEye } from "react-icons/ai";

// const VipCart: React.FC = () => {
//   return (
//     <div className="group relative bg-purple-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 text-white max-w-sm mx-auto">
//       {/* Görsel */}
//       <div className="h-48 overflow-hidden">
//         <img
//           src="https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"
//           alt="Profil"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* İçerik */}
//       <div className="p-4 space-y-2">
//         {/* Başlık */}
//         <h3 className="text-lg font-semibold">Güzellik ve Asalet</h3>

//         {/* Açıklama */}
//         <p className="text-sm leading-snug opacity-90">
//           İstanbul'da elit bir deneyim sunuyorum. İletişime geçmekten çekinmeyin.
//         </p>

//         {/* İlçe */}
//         <p className="text-xs bg-purple-900 inline-block px-3 py-1 rounded-full mt-2">
//           Şişli
//         </p>
//       </div>

//       {/* Hover'da çıkan İncele butonu */}
//       <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
//         <button className="flex items-center gap-1 bg-white text-purple-700 text-xs px-3 py-1 rounded-full shadow hover:bg-gray-100">
//           <AiOutlineEye size={16} />
//           İncele
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VipCart;



import React from "react";
import { AiOutlineEye, AiFillCrown } from "react-icons/ai";

const VipCart: React.FC = () => {
  return (
    <div className="group relative bg-purple-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 text-white max-w-sm mx-auto">
      {/* VIP Rozeti */}
      <div className="absolute top-2 right-2 bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
        <AiFillCrown size={14} />
        VIP
      </div>

      {/* Görsel */}
      <div className="h-48 overflow-hidden">
        <img
          src="https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"
          alt="Profil"
          className="w-full h-full object-cover"
        />
      </div>

      {/* İçerik */}
      <div className="p-4 space-y-2">
        {/* Başlık */}
        <h3 className="text-lg font-semibold">Güzellik ve Asalet</h3>

        {/* Açıklama */}
        <p className="text-sm leading-snug opacity-90">
          İstanbul'da elit bir deneyim sunuyorum. İletişime geçmekten çekinmeyin.
        </p>

        {/* İlçe */}
        <p className="text-xs bg-purple-900 inline-block px-3 py-1 rounded-full mt-2">
          Şişli
        </p>
      </div>

      {/* Hover'da çıkan İncele butonu */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <button className="flex items-center gap-1 bg-white text-purple-700 text-xs px-3 py-1 rounded-full shadow hover:bg-gray-100">
          <AiOutlineEye size={16} />
          İncele
        </button>
      </div>
    </div>
  );
};

export default VipCart;
