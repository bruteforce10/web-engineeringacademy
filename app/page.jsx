import ContentSection from "./component/ContentSection";
import FeatureSection from "./component/FeatureSection";
import Header from "./component/Header";
import InvestSection from "./component/InvestSection";
import BonusSection from "./component/BonusSection";
import TestimoniSection from "./component/TestimoniSection";
import VoucherSection from "./component/VoucherSection";
import BuySection from "./component/BuySection";
import FaqSection from "./component/FaqSection";
import VideoSection from "./component/VideoSection";

const data = {
  listFeatures: {
    list: [
      "Bonus All in One SOP Kontraktor",
      "Bayar sekali akses selamanya",
      "Database akan terus update",
      "Bonus berisi software pendukung",
      "Akses ke 106GB+ file Database Berisi gambar 2D/3D, dokumen proyek, Ebook, software, dll",
    ],
    description:
      "Dengan adanya Database Teknik Sipil, Anda tidak perlu repot-repot mencari referensi gambar atau file lainnya. Tentunya akan sangat membantu dan menghemat waktu Anda. Akan kami upayakan untuk terus update agar Database ini menjadi lengkap untuk kebutuhan anda!",
  },
  invest: {
    hashtag: ["#IlmuUntukMasaDepan", "#database_lengkap", "#akses_life_time"],
    title: "Investasi Terbaik ✨",
    description:
      "Menurut pepatah, investasi terbaik adalah memperbanyak Ilmu pengetahuan. Anda dapat memperoleh pengetahuan dengan membaca lebih banyak buku, mengikuti pelatihan, seminar, dan produk yang kami tawarkan. Tujuannya adalah untuk meningkatkan wawasan dan keterampilan Anda di bidang sipil dan arsitektur.",
  },
  bonus: {
    description:
      "Kami yakin Anda sudah tidak sabar untuk memilikinya, tapi sebelum itu silahkan cek bonus tambahan dari kami. Semua bonusakan semakin membantu  Anda dalam melakukan pekerjaan anda",
  },
  content: {
    subTitle: "Menjadikan database File terlengkap!",
    title: "🔥CONTOH SEBAGIAN KECIL DARI ISI GUDANG FILE DATABASE INI🔥",
    listContent: [
      {
        description:
          "Kumpulan gambar 2D dan 3D dalam format AutoCAD dan Sketchup yang dapat Anda edit dan sesuaikan sesuai kebutuhan. Termasuk berbagai desain seperti rumah, ruko, cafe, serta objek-objek seperti furniture, kamar mandi, bedroom, livingroom, dan lainnya. Cocok untuk referensi atau bahan ajar.",
        list: [
          "Ribuan gambar 3D Sketchup",
          "Ratusan Family Revit",
          "Gambar Rumah DWG",
          "Gambar Ruko DWG",
          "Gambar Rumah Sakit DWG",
          "Gambar Stadion",
          "Gambar Sekolah",
          "Gambar Shop Drawing",
          "Gambar Details Autocad",
          "Gambar Cafe 2D & 3D",
          "Gambar Klinik 2D & 3D",
          "Gambar Bandara",
          "Gambar Apartemen",
          "Gambar Mall",
          "Gambar Bank",
          "Gambar Hotel",
          "Gambar Details Pondasi",
          "Gambar Details Plat Lantai",
          "Gambar Details Kolom",
          "Gambar Details Balok",
          "Gambar Details Tangga",
          "Dll",
        ],
      },
      {
        description:
          "Kumpulan tutorial penggunaan dan studi kasus software teknik sipil dalam format ebook dan video yang dapat dengan mudah anda pelajari",
        list: [
          "Tutorial Sketchup",
          "Tutorial Autocad",
          "Tutorial Revit",
          "Tutorial Etabs",
          "Tutorial Plaxis",
          "Tutorial Lumion",
          "Tutorial Enscape",
          "Dll",
        ],
      },
      {
        description:
          "Berbagai kumpulan ebook pembelajaran teknik sipil dan arsitektur dalam tema ilmu sipil umum, pondasi, mekanika, rekayasa gempa, struktur, dll dalam format PDF",
        list: [
          "Ebook Struktur",
          "Ebook Bahan dan Material",
          "Ebook Struktur Kayu",
          "Ebook Struktur Baja",
          "Ebook Ketahanan Gempa",
        ],
      },
      {
        description:
          "Kumpulan modul kuliah Teknik Sipil seperti fisika dasar, rakayasa hidrologi, dll",
        list: [
          "Modul Fisika Dasar",
          "Modul Rekayasa Hidrologi",
          "Modul Mekanika Tanah",
          "Modul Mekanika Fluida",
          "Modul Struktur Beton",
          "Modul Struktur Baja",
          "Modul Geoteknik",
          "Modul Rekayasa Lalu Lintas",
          "Modul Analisis Struktur",
          "Modul Perencanaan Geometrik Jalan",
          "Modul Teknik Lingkungan",
          "Modul Hidrologi Terapan",
          "Modul Perancangan Pondasi",
          "Modul Manajemen Proyek Konstruksi",
          "Modul Teknik Pengukuran dan Pemetaan",
          "Modul Analisis Struktur Jembatan",
          "Modul Rekayasa Transportasi",
          "Modul Struktur Kayu",
          "Modul Hidrolika",
          "Modul Rekayasa Sumber Daya Air",
        ],
      },
      {
        description:
          "dilengkapi dengan panduan install yang mudah dengan note dan video cara install",
        list: [
          "Autocad",
          "Sketchup",
          "Enscape",
          "Vray",
          "Lumion",
          "3Ds Max",
          "SAP 2000",
          "Etabs",
          "Revit",
          "Midas",
          "Office",
          "Stads Pro",
          "Minescape",
          "Civil 3D",
          "Surfer",
          "Chief Architecture",
          "Photoshop",
          "Dll",
        ],
      },
      {
        description:
          "Kumpulan contoh format excel Teknik SIpil seperti format hitung volume, laporan struktur, RAB, form monitoring, form pelaksanaan proyek, dll",
        list: [
          "Format Hitung Volume",
          "Format Hitungan RAB",
          "Format Hitungan Struktur",
        ],
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <FeatureSection data={data} />
      <VideoSection />
      <InvestSection data={data.invest} />
      <ContentSection data={data.content} />
      <BonusSection data={data.bonus.description} />
      <TestimoniSection />
      <VoucherSection />
      <BuySection />
      <FaqSection />
    </main>
  );
}
