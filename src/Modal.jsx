const bookDetails = [
  {
    id: 1,
    details:
      "Bu roman AQSh janubidagi irqiy adolatsizlik va bolalikning sof nigohi orqali jamiyatdagi kamsitishlarni ochib beradi. Asarda jasorat, adolat va insoniylik qadriyatlari o‘rganiladi. Scout Finchning ko‘zlari orqali insoniylik va mehr-shafqatning ahamiyati aks ettiriladi.",
  },
  {
    id: 2,
    details:
      "George Orwellning ushbu asari totalitar jamiyatni qorong‘i va kuzatuvga asoslangan boshqaruv orqali tasvirlaydi. Asarda erkinlik va shaxsiylikning yo‘qolishi, soxta haqiqat va propagandaning kuchi haqida ogohlantirishlar berilgan. Har bir qahramonning ichki dunyosi chuqur o‘rganiladi.",
  },
  {
    id: 3,
    details:
      "1920-yillarning Amerikasi fonida boylik, sevgi va yuksalish orzularining soxtaligi ochib beriladi. Jay Gatsby va uning orzulari, shuningdek, jamiyatning sinflararo tafovuti va yolg‘onligi o‘rtasidagi ziddiyat tasvirlangan.",
  },
  {
    id: 4,
    details:
      "Jane Austen bu asarida sevgi, ijtimoiy maqom va insoniy munosabatlarni teran va hazilomuz tarzda tahlil qiladi. Elizabeth Bennet va Mr. Darcy o‘rtasidagi munosabatlar orqali inson qadr-qimmati va o‘zgarishning kuchi ko‘rsatiladi.",
  },
  {
    id: 5,
    details:
      "J.K. Rowlingning mashhur fantastik seriyasi boshlang‘ich qismi. Sehrli dunyoda o‘sib borayotgan yosh sehrgar Harry Potterning do‘stlik, jasorat va o‘zligini topish sarguzashtlari haqidagi hikoya. Bu asar o‘quvchini sehrli olamga olib kiradi.",
  },
  {
    id: 6,
    details:
      "Herman Melville tomonidan yozilgan, dengiz va inson tabiatining murakkabligini o‘rganadigan epik sarguzasht. Kapitan Ahabning oq kitobni ovlashga bo‘lgan qat’iyati va bu obsesiyaning halokatli oqibatlari tasvirlangan.",
  },
  {
    id: 7,
    details:
      "Adolesentsiyaning chalkashliklari, yolg‘izlik va jamiyatga moslashish qiyinchiliklari haqida o‘ziga xos va samimiy roman. Holden Caulfield qahramon sifatida o‘quvchini ichki dunyosi bilan tanishtiradi va yoshlarning qalbiy iztiroblarini ochib beradi.",
  },
  {
    id: 8,
    details:
      "J.R.R. Tolkienning fantastik eposi bo‘lib, unda yomonlik va yaxshilik o‘rtasidagi kurash, qahramonlik va do‘stlik haqida keng qamrovli hikoya so‘zlanadi. Orklar, sehrgarlar va afsonaviy mavjudotlar bilan to‘la sirli o‘lkada sarguzashtlar davom etadi.",
  },
  {
    id: 9,
    details:
      "Aldous Huxley tomonidan yozilgan distopiya janrining klassik namunasi. Kelajakdagi jamiyatda insonlar texnologiya va psixologik nazorat ostida yashaydi. Asar erkinlik, insoniylik va jamiyat tartibining o‘rtasidagi murakkab munosabatlarni tahlil qiladi.",
  },
  {
    id: 10,
    details:
      "Fyodor Dostoevskiyning psixologik trilleri. Raskolnikov ismli yigitning jinoyat sodir etganidan keyin ichki kurashi va gunohning ruhiy og‘irligi tasvirlanadi. Asar axloqiy savollar va inson qalbining chuqur tahliliga asoslangan.",
  },
  {
    id: 11,
    details:
      "Bolalar va kattalar uchun mo‘ljallangan fantastik hikoya. Bilbo Baggins nomli oddiy hobbitning xavf-xatarlar va sehrli mavjudotlar bilan to‘la sarguzashtlari haqida. U jasorat, do‘stlik va o‘zligini kashf etadi.",
  },
  {
    id: 12,
    details:
      "Mary Shelley tomonidan yozilgan gotik roman. Yosh olim Viktor Frankenstein o‘zining yaratgan maxluqining hayotga kelishi va buning oqibatlari haqida. Asar ilm-fan, axloq va insoniylikning chegaralarini o‘rganadi.",
  },
  {
    id: 13,
    details:
      "Paulo Coelho yozgan ruhiy sarguzasht. Yosh cho‘pon Santiago o‘z orzusini amalga oshirish uchun uzoq safarga chiqadi. Asar hayotdagi maqsad, taqdir va o‘zini anglash haqida falsafiy fikrlar beradi.",
  },
  {
    id: 14,
    details:
      "Gotika janridagi mashhur vampir haqidagi roman. Count Dracula va uning insonlarga tahdidi, shuningdek, sevgi va qo‘rqinchning aralashmasi. Asar qorong‘i va sirli atmosferani yaratadi.",
  },
  {
    id: 15,
    details:
      "To‘rt opa-singilning o‘sish davri, sevgi, oilaviy qadriyatlar va qiyinchiliklarga dosh berish haqidagi iliq va samimiy hikoya. Louisa May Alcottning ushbu asari ko‘plab avlodlar uchun doimiy ilhom manbai.",
  },
];

export const Modal = ({ book, isOpen, onClose }) => {
  if (!isOpen || !book) return null;
  const fullDetails = bookDetails.find((item) => item.id === book.id).details;

  return (
    <dialog open className="modal">
      <div className="modal-box relative">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">{book.title}</h3>
        <p className="py-2 italic text-gray-500">{book.author}</p>
        <p className="py-4">{fullDetails}</p>
        <p className="text-sm text-gray-400">Year: {book.year}</p>
      </div>
    </dialog>
  );
};
