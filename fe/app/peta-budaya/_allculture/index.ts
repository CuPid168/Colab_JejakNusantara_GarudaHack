const allCulture = [
  {
    provinsi: "Aceh",
    kategori: "Budaya",
    nama: "Tari Saman",
    deskripsi:
      "Sebuah tarian suku Gayo yang biasanya ditampilkan untuk merayakan peristiwa-peristiwa penting dalam adat. Syair dalam tarian ini menggunakan Bahasa Gayo.",
    foto: "assets/saman.jpg",
    latitude: 5.5583,
    longitude: 95.5322,
  },
  {
    provinsi: "Aceh",
    kategori: "Budaya",
    nama: "Peusijuek",
    deskripsi:
      "Ritual pemberian berkah dalam tradisi masyarakat Aceh. Dalam ritual ini, air yang telah dicampur dengan daun pandan, jeruk purut, dan beras kunyit dipercikkan kepada orang yang diberkati sebagai lambang kesejahteraan, keselamatan, dan kedamaian.",
    foto: "assets/peusijuek.jpg",
    latitude: 5.5583,
    longitude: 95.5135,
  },
  {
    provinsi: "Aceh",
    kategori: "Makanan",
    nama: "Mie Aceh",
    deskripsi:
      "Mie kuning tebal dengan irisan daging sapi, daging kambing atau makanan laut (udang dan cumi) yang disajikan dengan kuah kari yang gurih dan pedas.",
    foto: "assets/mieAceh.jpg",
    latitude: 5.5583,
    longitude: 95.3543,
  },
  {
    provinsi: "Aceh",
    kategori: "Makanan",
    nama: "Kuah Pliek U",
    deskripsi:
      "Gulai khas Aceh yang menggunakan `pliek u (ampas kelapa tua yang telah difermentasi) sebagai bumbu utamanya, biasanya berisi berbagai sayuran seperti daun melinjo, nangka muda, dan kacang panjang.",
    foto: "assets/kuahPliek.jpeg",
    latitude: 5.5583,
    longitude: 95.3135,
  },
  {
    provinsi: "Aceh",
    kategori: "Wisata",
    nama: "Masjid Raya Baiturrahman",
    deskripsi:
      "Masjid ini dibangun pada tahun 1879 dan merupakan simbol agama, budaya, semangat, kekuatan, perjuangan dan nasionalisme rakyat Aceh. Kemudian masjid ini adalah landmark Kota Banda Aceh sejak era Kesultanan Aceh dan Aceh saat ini. ",
    foto: "assets/rayaBaiturrahman.jpeg",
    latitude: 5.5583,
    longitude: 95.3351,
  },
  {
    provinsi: "Aceh",
    kategori: "Wisata",
    nama: "Museum Tsunami Aceh",
    deskripsi:
      "Museum yang dibangun untuk mengenang korban dan yang selamat dari bencana gempa dan tsunami Samudra Hindia pada tahun 2004, sekaligus sebagai pusat pendidikan dan tempat penampungan darurat jika terjadi bencana serupa.",
    foto: "assets/museumTsunamiAceh.jpg",
    latitude: 5.5583,
    longitude: 95.3125,
  },
  {
    provinsi: "Aceh",
    kategori: "Alat Musik",
    nama: "Rapai",
    deskripsi:
      "Alat musik pukul yang terbuat dari kulit binatang dan kayu. Rapai sering digunakan untuk mengiringi tarian dan upacara adat.",
    foto: "assets/rapai.jpg",
    latitude: 5.5583,
    longitude: 95.1235,
  },
  {
    provinsi: "Aceh",
    kategori: "Alat Musik",
    nama: "Serune Kalee",
    deskripsi:
      "Alat musik tiup tradisional Aceh yang telah lama berkembang. Biasanya dimainkan bersamaan dengan Rapai dan Geundrang pada acara-acara hiburan, tarian, dan penyambutan tamu kehormatan.",
    foto: "assets/seruneKalee.jpeg",
    latitude: 5.1325,
    longitude: 95.1235,
  },
  {
    provinsi: "Sumatra Utara",
    kategori: "Makanan",
    nama: "Arsik",
    deskripsi:
      "Ikan mas dimasak dengan bumbu kuning khas Batak, berbahan andaliman, lengkuas, bawang, dan asam cikala. Rasanya pedas segar dan aromatik. Arsik menjadi hidangan wajib dalam pesta adat Batak sebagai simbol keseimbangan dan keberuntungan.",
    foto: "assets/arsik.jpg",
    latitude: 3.5794,
    longitude: 98.6822,
  },
  {
    provinsi: "Sumatra Utara",
    kategori: "Makanan",
    nama: "Saksang",
    deskripsi:
      "Daging babi atau kerbau yang dimasak dengan darahnya sendiri, dicampur rempah khas Batak termasuk andaliman dan serai. Hidangan ini memiliki rasa kuat dan pedas, disajikan pada pesta adat atau acara penting dalam budaya Batak.",
    foto: "assets/saksang.jpg",
    latitude: 3.5794,
    longitude: 98.5313,
  },
  {
    provinsi: "Sumatra Utara",
    kategori: "Budaya",
    nama: "Mangalahat Horbo",
    deskripsi:
      "Tradisi menyembelih kerbau sebagai bentuk penghormatan dalam upacara adat Batak. Dagingnya dibagikan kepada keluarga dan tamu. Tradisi ini menandakan kekuatan, kehormatan, dan status sosial pemilik hajatan dalam struktur adat masyarakat Batak.",
    foto: "assets/mangalahatHorbo.jpg",
    latitude: 3.5794,
    longitude: 98.5313,
  },
  {
    provinsi: "Sumatra Utara",
    kategori: "Budaya",
    nama: "Mangulosi",
    deskripsi:
      "Upacara pemberian ulos kepada orang yang dihormati, biasanya dilakukan saat pernikahan atau kelahiran. Ulos melambangkan doa, restu, dan kasih sayang. Prosesi ini menjadi bentuk pelestarian nilai budaya dan solidaritas dalam masyarakat Batak.",
    foto: "assets/mangulosi.jpg",
    latitude: 3.5794,
    longitude: 98.3125,
  },
  {
    provinsi: "Sumatra Utara",
    kategori: "Alat Musik",
    nama: "Gondang Batak",
    deskripsi:
      "Ansambel musik tradisional Batak yang terdiri dari gondang (gendang), taganing, sarune (seruling), dan ogung (gong). Digunakan untuk mengiringi upacara adat, tari, dan ritual spiritual. Irama gondang menjadi penghubung antara manusia dan roh leluhur.",
    foto: "assets/gondangBatak.jpg",
    latitude: 3.5794,
    longitude: 98.5315,
  },
  {
    provinsi: "Sumatra Utara",
    kategori: "Alat Musik",
    nama: "Hasapi",
    deskripsi:
      "Alat musik petik mirip kecapi dari kayu dan senar logam. Menghasilkan suara lembut untuk mengiringi lagu daerah dan nyanyian Batak. Hasapi digunakan dalam pertunjukan gondang atau secara solo untuk menyampaikan rasa dan cerita budaya Batak.",
    foto: "",
    latitude: 3.5794,
    longitude: 98.5312,
  },
  {
    provinsi: "Sumatra Utara",
    kategori: "Wisata",
    nama: "Danau Toba",
    deskripsi:
      "Danau vulkanik terbesar di Asia Tenggara, terbentuk dari letusan supervolcano. Di tengahnya terdapat Pulau Samosir, pusat budaya Batak. Danau ini menawarkan pemandangan alam luar biasa, wisata budaya, serta ketenangan spiritual yang mendalam.",
    foto: "",
    latitude: 2.5694,
    longitude: 98.34654,
  },
  {
    provinsi: "Sumatra Utara",
    kategori: "Wisata",
    nama: "Istana Maimun",
    deskripsi:
      "Peninggalan Kesultanan Deli di Medan, memadukan arsitektur Melayu, Eropa, dan Timur Tengah. Dikenal akan warna kuning emas khas Melayu dan nilai sejarah tinggi. Kini menjadi museum dan destinasi edukatif budaya di jantung Kota Medan.",
    foto: "",
    latitude: 3.5794,
    longitude: 98.6822,
  },
  {
    provinsi: "Sumatra Barat",
    kategori: "Makanan",
    nama: "Rendang",
    deskripsi:
      "Masakan daging sapi dimasak lama dengan santan dan bumbu rempah-rempah. Rasanya kaya, pedas, dan gurih. Rendang adalah simbol kehormatan dan sering dihidangkan dalam acara adat Minangkabau serta telah mendunia sebagai makanan terenak.",
    foto: "",
    latitude: -0.9492,
    longitude: 100.3541,
  },
  {
    provinsi: "Sumatra Barat",
    kategori: "Makanan",
    nama: "Dendeng Balado",
    deskripsi:
      "Irisan daging sapi tipis yang digoreng kering lalu dilumuri sambal balado pedas. Teksturnya renyah dan cita rasanya kuat. Dendeng balado biasa disajikan dalam perayaan, hari besar, atau sebagai oleh-oleh khas Padang yang populer.",
    foto: "",
    latitude: -0.23492,
    longitude: 100.423,
  },
  {
    provinsi: "Sumatra Barat",
    kategori: "Budaya",
    nama: "Malam Bainai",
    deskripsi:
      "Upacara menjelang pernikahan, di mana tangan calon pengantin wanita dihias inai merah. Disertai nyanyian, tarian, dan petuah adat. Tradisi ini menjadi simbol restu dan penghormatan terhadap perempuan yang akan memasuki kehidupan rumah tangga.",
    foto: "",
    latitude: -0.34,
    longitude: 100.124,
  },
  {
    provinsi: "Sumatra Barat",
    kategori: "Budaya",
    nama: "Upacara Turun Mandi",
    deskripsi:
      "Tradisi menyambut kelahiran bayi dalam budaya Minang. Bayi dimandikan di sungai sebagai simbol penyucian, diiringi doa dan pemberian nama. Upacara ini mempererat hubungan keluarga dan menanamkan nilai adat sejak usia dini.",
    foto: "",
    latitude: -0.9345,
    longitude: 100.4135,
  },
  {
    provinsi: "Sumatra Barat",
    kategori: "Alat Musik",
    nama: "Saluang",
    deskripsi:
      "Seruling bambu khas Minang yang dimainkan dengan teknik tiupan tanpa henti (circular breathing). Suaranya melankolis dan sering digunakan mengiringi nyanyian tradisional atau pertunjukan randai. Saluang mencerminkan kedalaman emosi dan filosofi Minangkabau.",
    foto: "",
    latitude: -0.352,
    longitude: 100.3512,
  },
  {
    provinsi: "Sumatra Barat",
    kategori: "Alat Musik",
    nama: "Talempong",
    deskripsi:
      "Alat musik pukul berupa gong kecil yang disusun dalam barisan. Dimainkan dalam pertunjukan tari, upacara adat, dan pesta rakyat. Talempong mengatur ritme dan menjadi elemen utama dalam musik tradisional Minangkabau bersama gandang dan saluang.",
    foto: "",
    latitude: -0.3125,
    longitude: 100.12432,
  },
  {
    provinsi: "Sumatra Barat",
    kategori: "Wisata",
    nama: "Jam Gadang",
    deskripsi:
      "Ikon Kota Bukittinggi yang dibangun sejak era kolonial Belanda. Menara jam ini memiliki arsitektur unik dan bernilai sejarah. Menjadi pusat wisata dan titik kumpul warga, dikelilingi taman, pasar, serta tempat kuliner khas Minangkabau.",
    foto: "",
    latitude: -0.6134,
    longitude: 100.6536,
  },
  {
    provinsi: "Sumatra Barat",
    kategori: "Wisata",
    nama: "Lembah Harau",
    deskripsi:
      "Lembah yang diapit tebing granit menjulang hingga 100 meter, dengan sawah hijau dan air terjun alami. Terletak di Kabupaten Lima Puluh Kota. Cocok untuk wisata alam, panjat tebing, dan menikmati ketenangan khas pedesaan Minang.",
    foto: "",
    latitude: 0.455,
    longitude: 100.6429,
  },
  {
    provinsi: "Riau",
    kategori: "Makanan",
    nama: "Gulai Ikan Patin",
    deskripsi:
      "Ikan patin dimasak dalam kuah santan kuning dengan bumbu rempah dan asam gelugur. Rasanya gurih dan sedikit asam. Gulai ini merupakan makanan istimewa khas Melayu Riau yang sering disajikan dalam acara keluarga atau perayaan adat.",
    foto: "",
    latitude: 0.4632,
    longitude: 101.6534,
  },
  {
    provinsi: "Riau",
    kategori: "Makanan",
    nama: "Asam Pedas Baung",
    deskripsi:
      "Masakan ikan baung yang dimasak dengan kuah pedas asam, menggunakan cabai, tomat, dan belimbing wuluh. Hidangan ini khas daerah pesisir sungai, menggambarkan cita rasa Melayu yang kuat dan penggunaan hasil alam secara bijaksana.",
    foto: "",
    latitude: 0.50731,
    longitude: 101.5321,
  },
  {
    provinsi: "Riau",
    kategori: "Budaya",
    nama: "Tepuk Tepung Tawar",
    deskripsi:
      "Upacara adat untuk memberikan doa dan restu pada orang yang akan menempuh hal penting seperti pernikahan atau pindah rumah. Dilakukan dengan menabur tepung beras dan air bunga sebagai lambang kesucian, harapan baik, dan keselamatan.",
    foto: "",
    latitude: 0.5071,
    longitude: 101.44217,
  },
  {
    provinsi: "Riau",
    kategori: "Budaya",
    nama: "Pantun Melayu",
    deskripsi:
      "Sastra lisan khas masyarakat Melayu Riau yang digunakan dalam komunikasi, pendidikan, hingga upacara adat. Pantun mencerminkan kecerdasan berbahasa dan nilai moral. Tradisi ini diwariskan turun-temurun sebagai warisan budaya yang sangat dijunjung tinggi.",
    foto: "",
    latitude: 0.5071,
    longitude: 101.421,
  },
  {
    provinsi: "Riau",
    kategori: "Alat Musik",
    nama: "Gambus",
    deskripsi:
      "Alat musik petik mirip gitar dengan bentuk lengkung, dimainkan dalam musik Melayu klasik dan religi. Suaranya lembut dan melodius. Gambus kerap digunakan dalam pesta adat atau pertunjukan syair, mencerminkan pengaruh budaya Arab dalam Melayu Riau.",
    foto: "",
    latitude: 0.5071,
    longitude: 101.453,
  },
  {
    provinsi: "Riau",
    kategori: "Alat Musik",
    nama: "Gendang Nobat",
    deskripsi:
      "Gendang tradisional yang dimainkan saat upacara kebesaran kerajaan Melayu. Irama gendang ini bersifat sakral, mengiringi pengangkatan raja atau upacara adat istana. Gendang nobat menunjukkan kemegahan budaya istana di masa kejayaan Melayu.",
    foto: "",
    latitude: 0.5345,
    longitude: 101.5324,
  },
  {
    provinsi: "Riau",
    kategori: "Wisata",
    nama: "Istana Siak Sri Indrapura",
    deskripsi:
      "Istana peninggalan Kerajaan Siak yang megah dan berarsitektur Eropa-Melayu. Menyimpan koleksi kerajaan, seperti meriam, alat musik, dan singgasana. Istana ini menjadi simbol kejayaan Melayu Riau dan objek wisata sejarah yang sangat terkenal.",
    foto: "",
    latitude: 0.3512,
    longitude: 102.6424,
  },
  {
    provinsi: "Riau",
    kategori: "Wisata",
    nama: "Bono Sungai Kampar",
    deskripsi:
      "Fenomena gelombang pasang yang membentuk ombak besar di muara Sungai Kampar. Terjadi beberapa kali dalam sebulan dan menjadi daya tarik wisatawan, terutama peselancar. Lokasinya unik karena menawarkan pengalaman berselancar di sungai.",
    foto: "",
    latitude: 0.5431,
    longitude: 103.5467,
  },
  {
    provinsi: "Kepulauan Riau",
    kategori: "Makanan",
    nama: "Lakse",
    deskripsi:
      "Mie tebal dari tepung sagu yang disajikan dengan kuah santan berbumbu rempah. Lakse biasa disajikan saat lebaran atau acara keluarga. Kuliner ini mencerminkan perpaduan budaya Melayu pesisir dan tradisi kuliner berbasis hasil laut dan sagu.",
    foto: "",
    latitude: 0.5346,
    longitude: 104.65343,
  },
  {
    provinsi: "Kepulauan Riau",
    kategori: "Makanan",
    nama: "Mie Lendir",
    deskripsi:
      "Mie kuning yang disiram kuah kental dari kacang tanah, ubi, dan rempah-rempah. Dilengkapi tauge, telur rebus, dan cabai. Dinikmati saat sarapan atau sore hari, mie ini menjadi makanan merakyat yang mudah ditemukan di Kepulauan Riau.",
    foto: "",
    latitude: 0.35238,
    longitude: 104.54363,
  },
  {
    provinsi: "Kepulauan Riau",
    kategori: "Budaya",
    nama: "Gurindam Dua Belas",
    deskripsi:
      "Karya sastra Melayu klasik dari Raja Ali Haji yang berisi nasihat moral dan spiritual. Dianggap sebagai pedoman hidup masyarakat Melayu. Gurindam ini dilantunkan dalam acara adat dan pendidikan, menjadi simbol kecerdasan budaya Kepri yang berakar kuat.",
    foto: "",
    latitude: 0.64653,
    longitude: 104.124,
  },
  {
    provinsi: "Kepulauan Riau",
    kategori: "Budaya",
    nama: "Zikir Berzanji",
    deskripsi:
      "Tradisi keagamaan Melayu yang dilantunkan dalam bentuk pujian terhadap Nabi Muhammad SAW. Dibacakan saat maulid, khitanan, atau syukuran. Budaya ini menyatukan unsur spiritual dan estetika, mencerminkan keharmonisan antara Islam dan budaya lokal.",
    foto: "",
    latitude: 0.4534,
    longitude: 104.4578,
  },
  {
    provinsi: "Kepulauan Riau",
    kategori: "Alat Musik",
    nama: "Gendang Melayu",
    deskripsi:
      "Gendang besar yang dimainkan dalam orkes gambus atau zapin. Irama gendang menjadi pengatur tempo tarian dan syair. Dipakai dalam acara adat, pernikahan, hingga festival budaya. Gendang mencerminkan dinamika dan semangat budaya Melayu Kepulauan.",
    foto: "",
    latitude: 0.9068,
    longitude: 104.3462,
  },
  {
    provinsi: "Kepulauan Riau",
    kategori: "Alat Musik",
    nama: "Marwas",
    deskripsi:
      "Alat musik pukul kecil, mirip rebana, digunakan dalam musik zapin. Suaranya cepat dan ritmis, mengiringi gerakan tari atau zikir. Marwas adalah unsur penting dalam kesenian Melayu yang menggabungkan tradisi Arab dengan budaya lokal.",
    foto: "",
    latitude: 0.9068,
    longitude: 104.5321,
  },
  {
    provinsi: "Kepulauan Riau",
    kategori: "Wisata",
    nama: "Pulau Penyengat",
    deskripsi:
      "Pulau bersejarah di Tanjungpinang, pusat Kerajaan Riau-Lingga. Terdapat Masjid Raya Sultan Riau, benteng, dan makam Raja Ali Haji. Pulau ini menjadi situs budaya penting bagi warisan Melayu dan literasi Islam di Nusantara.",
    foto: "",
    latitude: 0.9329,
    longitude: 104.5345,
  },
  {
    provinsi: "Kepulauan Riau",
    kategori: "Wisata",
    nama: "Jembatan Barelang",
    deskripsi:
      "Ikon Batam yang menghubungkan beberapa pulau besar. Dibangun dengan desain megah, jembatan ini menjadi simbol kemajuan dan aksesibilitas antarwilayah. Pemandangannya indah, menjadikannya destinasi favorit untuk foto dan menikmati matahari terbenam.",
    foto: "",
    latitude: 0.9634,
    longitude: 104.975754,
  },
  {
    provinsi: "Jambi",
    kategori: "Makanan",
    nama: "Gulai Tepek Ikan",
    deskripsi:
      "Ikan giling dicampur sagu, dibentuk pipih, lalu dimasak dalam kuah gulai kuning berbumbu kunyit dan santan. Rasanya gurih dan sedikit pedas. Gulai ini sering disajikan pada acara adat dan hari besar masyarakat Jambi.",
    foto: "",
    latitude: -1.6116,
    longitude: 103.57347,
  },
  {
    provinsi: "Jambi",
    kategori: "Makanan",
    nama: "Tempoyak",
    deskripsi:
      "Fermentasi daging durian yang dimasak bersama ikan patin, cabai, dan bawang. Rasanya asam, pedas, dan khas. Tempoyak menjadi ciri kuliner tradisional Jambi yang memanfaatkan hasil alam dan diwariskan secara turun-temurun di berbagai daerah.",
    foto: "",
    latitude: -1.6116,
    longitude: 103.6743,
  },
  {
    provinsi: "Jambi",
    kategori: "Budaya",
    nama: "Tari Sekapur Sirih",
    deskripsi:
      "Tarian penyambutan tamu agung yang melambangkan keramahan dan penghormatan masyarakat Jambi. Penari membawa sirih dalam cawan kuningan. Tari ini kerap ditampilkan dalam acara resmi, budaya, maupun prosesi adat daerah.",
    foto: "",
    latitude: -1.6116,
    longitude: 103.8329,
  },
  {
    provinsi: "Jambi",
    kategori: "Budaya",
    nama: "Kenduri Sko",
    deskripsi:
      "Upacara adat masyarakat Kerinci untuk pelantikan depati (pemimpin adat). Diisi dengan pidato adat, doa, dan makan bersama. Kenduri Sko menjadi bentuk penghormatan terhadap sistem adat dan kearifan lokal yang dijaga secara turun-temurun.",
    foto: "",
    latitude: -2.0833,
    longitude: 101.4667,
  },
  {
    provinsi: "Jambi",
    kategori: "Alat Musik",
    nama: "Gambus Jambi",
    deskripsi:
      "Alat musik petik yang dimainkan untuk mengiringi lagu Melayu atau zikir. Suaranya lembut dan syahdu. Gambus mencerminkan pengaruh budaya Islam dalam musik tradisional Jambi dan tetap lestari dalam acara religi dan adat.",
    foto: "",
    latitude: -1.6116,
    longitude: 103.6096,
  },
  {
    provinsi: "Jambi",
    kategori: "Alat Musik",
    nama: "Sekdu",
    deskripsi:
      "Alat musik tiup dari bambu yang menghasilkan nada lembut dan melodi sederhana. Digunakan dalam hiburan rakyat atau upacara adat tertentu. Sekdu menjadi bagian dari ekspresi seni masyarakat pedesaan di wilayah Jambi bagian barat dan Kerinci.",
    foto: "",
    latitude: -1.6116,
    longitude: 103.63462,
  },
  {
    provinsi: "Jambi",
    kategori: "Wisata",
    nama: "Candi Muaro Jambi",
    deskripsi:
      "Kompleks candi Buddha terbesar di Sumatera yang dibangun pada abad ke-7. Terletak di tepi Sungai Batanghari. Situs ini merupakan pusat pendidikan dan keagamaan pada masa lalu, serta menjadi warisan budaya nasional yang penting.",
    foto: "",
    latitude: -1.6033,
    longitude: 103.7744,
  },
  {
    provinsi: "Jambi",
    kategori: "Wisata",
    nama: "Danau Kerinci",
    deskripsi:
      "Danau vulkanik di kaki Gunung Raja, dikelilingi perbukitan dan desa tradisional. Menawarkan pemandangan indah, budaya masyarakat adat Kerinci, serta potensi wisata agro dan ekowisata. Tempat ini menjadi ikon alam Jambi yang memikat.",
    foto: "",
    latitude: -2.0722,
    longitude: 101.3905,
  },
  {
    provinsi: "Bengkulu",
    kategori: "Makanan",
    nama: "Pendap",
    deskripsi:
      "Ikan laut dibungkus daun talas dan dimasak dengan kelapa parut, bawang, dan cabai. Dikukus hingga beraroma khas. Pendap adalah makanan tradisional Bengkulu yang kaya rasa dan sering disajikan dalam acara adat atau hari besar.",
    foto: "",
    latitude: -3.8004,
    longitude: 102.2655,
  },
  {
    provinsi: "Bengkulu",
    kategori: "Makanan",
    nama: "Lempuk Durian",
    deskripsi:
      "Makanan manis dari durian matang yang dimasak hingga mengental seperti dodol. Rasanya legit dan aromanya kuat. Lempuk menjadi oleh-oleh khas Bengkulu yang populer, terutama saat musim durian tiba di berbagai wilayah provinsi ini.",
    foto: "",
    latitude: -3.8004,
    longitude: 102.5426,
  },
  {
    provinsi: "Bengkulu",
    kategori: "Budaya",
    nama: "Tabot",
    deskripsi:
      "Tradisi tahunan masyarakat Bengkulu keturunan India-Persia untuk memperingati wafatnya cucu Nabi Muhammad SAW, Husein bin Ali. Diiringi bunyi dol, arak-arakan, dan ritual adat. Tabot adalah peristiwa budaya dan religi yang sangat meriah.",
    foto: "",
    latitude: -3.853728,
    longitude: 102.26554,
  },
  {
    provinsi: "Bengkulu",
    kategori: "Budaya",
    nama: "Tari Andun",
    deskripsi:
      "Tarian tradisional sebagai bagian dari ritual mencari jodoh. Ditampilkan oleh muda-mudi saat pesta rakyat atau pernikahan. Gerakannya dinamis dan berpasangan, menggambarkan keceriaan dan kehidupan sosial masyarakat pesisir Bengkulu.",
    foto: "",
    latitude: -3.3152,
    longitude: 102.643321,
  },
  {
    provinsi: "Bengkulu",
    kategori: "Alat Musik",
    nama: "Dol Bengkulu",
    deskripsi:
      "Alat musik pukul berbentuk seperti drum besar, dimainkan secara berkelompok. Digunakan dalam Festival Tabot dan berbagai acara budaya. Suaranya keras dan ritmis, menciptakan semangat serta menjadi identitas musik tradisional masyarakat Bengkulu.",
    foto: "",
    latitude: -3.4526,
    longitude: 102.6433,
  },
  {
    provinsi: "Bengkulu",
    kategori: "Alat Musik",
    nama: "Serunai",
    deskripsi:
      "Alat musik tiup dari bambu atau kayu, menghasilkan nada-nada tinggi yang digunakan dalam iringan tari atau acara adat. Serunai mencerminkan unsur melankolis dalam musik tradisional Bengkulu dan sering dikombinasikan dengan dol atau rebana.",
    foto: "",
    latitude: -3.8004,
    longitude: 102.53231,
  },
  {
    provinsi: "Bengkulu",
    kategori: "Wisata",
    nama: "Benteng Marlborough",
    deskripsi:
      "Peninggalan kolonial Inggris yang megah di tepi pantai Bengkulu. Dibangun pada abad ke-18 sebagai pusat pertahanan. Kini menjadi situs sejarah yang menyimpan koleksi artefak dan panorama menarik ke Samudra Hindia.",
    foto: "",
    latitude: -3.6542,
    longitude: 102.4613,
  },
  {
    provinsi: "Bengkulu",
    kategori: "Wisata",
    nama: "Pantai Panjang",
    deskripsi:
      "Pantai ikonik di Kota Bengkulu yang membentang hingga 7 kilometer. Dikenal dengan pasir putih, ombak sedang, dan deretan pohon cemara. Menjadi lokasi favorit wisatawan untuk bersantai, berolahraga, dan menikmati matahari terbenam.",
    foto: "",
    latitude: -3.4361,
    longitude: 102.5624,
  },
  {
    provinsi: "Sumatera Selatan",
    kategori: "Makanan",
    nama: "Pempek",
    deskripsi:
      "Olahan ikan tenggiri dan sagu yang dibentuk, direbus lalu digoreng, disajikan dengan cuko (saus asam pedas manis). Pempek merupakan ikon kuliner Palembang dan disantap di berbagai kesempatan, dari camilan hingga sajian hari besar.",
    foto: "",
    latitude: -2.65423,
    longitude: 104.54324,
  },
  {
    provinsi: "Sumatera Selatan",
    kategori: "Makanan",
    nama: "Laksan",
    deskripsi:
      "Irisan pempek lenjer yang disajikan dalam kuah santan gurih berbumbu rempah. Rasanya lembut dan beraroma khas. Laksan biasa dihidangkan saat sarapan atau perayaan keluarga, mencerminkan kekayaan kuliner Palembang berbasis ikan dan santan.",
    foto: "",
    latitude: -2.4623,
    longitude: 104.64316,
  },
  {
    provinsi: "Sumatera Selatan",
    kategori: "Budaya",
    nama: "Tabot",
    deskripsi:
      "Tradisi tahunan masyarakat Bengkulu keturunan India-Persia untuk memperingati wafatnya cucu Nabi Muhammad SAW, Husein bin Ali. Diiringi bunyi dol, arak-arakan, dan ritual adat. Tabot adalah peristiwa budaya dan religi yang sangat meriah.",
    foto: "",
    latitude: -2.3416,
    longitude: 104.6547,
  },
  {
    provinsi: "Sumatera Selatan",
    kategori: "Budaya",
    nama: "Sedekah Rame",
    deskripsi:
      "Tradisi masyarakat desa untuk mensyukuri hasil panen dan meminta keberkahan. Disertai doa, makan bersama, serta pertunjukan seni tradisional. Upacara ini mempererat hubungan sosial dan mencerminkan nilai gotong royong masyarakat agraris Sumatera Selatan.",
    foto: "",
    latitude: -2.567,
    longitude: 104.7862,
  },
  {
    provinsi: "Sumatera Selatan",
    kategori: "Alat Musik",
    nama: "Gambus Palembang",
    deskripsi:
      "Alat musik petik mirip gitar dengan sentuhan nada Arab. Digunakan untuk mengiringi lagu-lagu Melayu dan syair religius. Gambus mencerminkan perpaduan budaya lokal dan pengaruh Timur Tengah dalam tradisi musik Sumatera Selatan.",
    foto: "",
    latitude: -2.85421,
    longitude: 104.5747,
  },
  {
    provinsi: "Sumatera Selatan",
    kategori: "Alat Musik",
    nama: "Kolintang Kayu",
    deskripsi:
      "Alat musik pukul dari bilah kayu yang disusun dan dipukul menghasilkan nada melodis. Digunakan dalam pertunjukan tradisional dan pengiring tarian. Kolintang menggambarkan harmoni musik rakyat yang sederhana namun sarat makna.",
    foto: "",
    latitude: -2.541574,
    longitude: 104.754542,
  },
  {
    provinsi: "Sumatera Selatan",
    kategori: "Wisata",
    nama: "Jembatan Ampera",
    deskripsi:
      "Ikon Kota Palembang yang membentang di atas Sungai Musi. Dibangun pada era Soekarno, jembatan ini menghubungkan dua bagian kota dan menjadi simbol kemajuan serta daya tarik wisata, terutama saat malam hari dengan pencahayaan indah.",
    foto: "",
    latitude: -2.3146,
    longitude: 104.7534,
  },
  {
    provinsi: "Sumatera Selatan",
    kategori: "Wisata",
    nama: "Pulau Kemaro",
    deskripsi:
      "Pulau kecil di tengah Sungai Musi, terkenal dengan pagoda dan kisah legenda cinta Tan Bun An dan Siti Fatimah. Menjadi tempat wisata religi dan budaya Tionghoa, ramai dikunjungi saat Cap Go Meh dan Imlek.",
    foto: "",
    latitude: -2.64137,
    longitude: 104.7537,
  },
  {
    provinsi: "Bangka Belitung",
    kategori: "Makanan",
    nama: "Lempah Kuning",
    deskripsi:
      "Ikan laut dimasak dalam kuah kuning berbumbu nanas, kunyit, dan cabai. Rasanya segar, pedas, dan sedikit asam. Lempah kuning adalah ikon kuliner Bangka Belitung yang menggambarkan kekayaan laut dan selera khas masyarakat Melayu.",
    foto: "",
    latitude: -2.1754,
    longitude: 106.12357,
  },
  {
    provinsi: "Bangka Belitung",
    kategori: "Makanan",
    nama: "Kemplang",
    deskripsi:
      "Kerupuk dari ikan tenggiri yang dipanggang, bukan digoreng. Bertekstur renyah dan ringan, biasa disantap sebagai camilan atau pelengkap makanan. Kemplang menjadi oleh-oleh favorit dari Bangka dan merepresentasikan tradisi olahan laut daerah ini.",
    foto: "",
    latitude: -2.7534,
    longitude: 106.7431,
  },
  {
    provinsi: "Bangka Belitung",
    kategori: "Budaya",
    nama: "Nganggung",
    deskripsi:
      "Tradisi membawa dulang berisi makanan ke masjid atau rumah tetangga untuk dimakan bersama dalam acara keagamaan atau sosial. Tradisi ini mencerminkan semangat kebersamaan, gotong royong, dan solidaritas dalam kehidupan masyarakat Bangka Belitung",
    foto: "",
    latitude: -2.1643,
    longitude: 106.7423,
  },
  {
    provinsi: "Bangka Belitung",
    kategori: "Budaya",
    nama: "Perang Ketupat",
    deskripsi:
      "Upacara adat masyarakat Belinyu yang dilakukan sebagai ungkapan syukur dan tolak bala. Masyarakat saling melempar ketupat secara simbolik. Tradisi ini menjadi atraksi budaya yang unik dan menggambarkan warisan spiritual masyarakat pesisir.",
    foto: "",
    latitude: -1.7423,
    longitude: 105.7709,
  },
  {
    provinsi: "Bangka Belitung",
    kategori: "Alat Musik",
    nama: "Rebana Bangka",
    deskripsi:
      "Alat musik pukul berbentuk bundar dengan lapisan kulit di salah satu sisinya. Digunakan untuk mengiringi zikir, shalawat, dan pertunjukan seni Islam. Rebana merefleksikan perpaduan budaya Melayu dan pengaruh keagamaan yang kuat di masyarakat.",
    foto: "",
    latitude: -2.1287,
    longitude: 106.1187,
  },
  {
    provinsi: "Bangka Belitung",
    kategori: "Alat Musik",
    nama: "Dambus",
    deskripsi:
      "Dambus merupakan salah satu ikon alat musik Bangka Belitung yang paling populer. Berjenis alat musik petik seperti gitar, Dambus memiliki keunikan pada bagian kepalanya yang seringkali dihiasi dengan ukiran berbentuk kepala rusa atau kijang. Alat musik ini terbuat dari kayu, seperti kayu nangka atau ludai, dengan badan yang menyerupai buah labu dibelah dua. Dambus biasanya memiliki 3 hingga 12 senar dan dimainkan untuk mengiringi nyanyian dan tarian Melayu, terutama dalam kesenian Musik Dambus.",
    foto: "",
    latitude: -2.5312,
    longitude: 106.6542,
  },
  {
    provinsi: "Bangka Belitung",
    kategori: "Wisata",
    nama: "Pantai Tanjung Tinggi",
    deskripsi:
      "Pantai berpasir putih dengan batu granit besar yang ikonik, terkenal lewat film Laskar Pelangi. Air lautnya jernih dan cocok untuk berenang atau fotografi. Salah satu destinasi utama wisata bahari di Belitung yang sangat memesona.",
    foto: "",
    latitude: -2.6411,
    longitude: 107.5683,
  },
  {
    provinsi: "Bangka Belitung",
    kategori: "Wisata",
    nama: "Museum Timah Pangkalpinang",
    deskripsi:
      "Museum yang menyimpan sejarah panjang pertambangan timah di Bangka Belitung. Menampilkan peralatan tambang, dokumen, dan artefak. Menjadi tempat edukatif dan bersejarah yang penting, mengingat tambang timah adalah tulang punggung ekonomi daerah",
    foto: "",
    latitude: -2.7856,
    longitude: 106.8574,
  },
  {
    provinsi: "Lampung",
    kategori: "Makanan",
    nama: "Seruit",
    deskripsi:
      "Olahan ikan bakar yang dicampur sambal terasi, tempoyak (fermentasi durian), dan lalapan. Makanan ini simbol kebersamaan, karena biasa disantap beramai-ramai. Seruit adalah ikon kuliner tradisional Lampung yang mencerminkan cita rasa khas masyarakatnya.",
    foto: "",
    latitude: -5.5475,
    longitude: 105.57254,
  },
  {
    provinsi: "Lampung",
    kategori: "Makanan",
    nama: "Gulai Taboh",
    deskripsi:
      "Sayur santan kental berisi kacang-kacangan, daun melinjo, rebung, dan ikan laut atau udang. Rasanya gurih dan kaya rempah. Gulai ini sering disajikan dalam acara keluarga atau adat sebagai wujud kelimpahan dan kehangatan.",
    foto: "",
    latitude: -5.45,
    longitude: 105.9786,
  },
  {
    provinsi: "Lampung",
    kategori: "Budaya",
    nama: "Sekura Cakak Buah",
    deskripsi:
      "Tradisi topeng Sekura dalam Festival Cakak Buah saat Idul Fitri. Warga berdandan unik dan beradu buah (saling memukul secara simbolis). Tradisi ini mempererat silaturahmi dan merefleksikan nilai budaya, keceriaan, dan persaudaraan. ",
    foto: "",
    latitude: -5.45,
    longitude: 105.78967,
  },
  {
    provinsi: "Lampung",
    kategori: "Budaya",
    nama: "Adat Sai Batin dan Pepadun",
    deskripsi:
      "Dua sistem adat utama di Lampung, masing-masing dengan struktur sosial, upacara, dan pakaian adat berbeda. Adat ini mengatur kehidupan masyarakat, seperti pernikahan, pewarisan, dan gelar kehormatan. Jadi identitas budaya Lampung yang kuat.",
    foto: "",
    latitude: -5.45,
    longitude: 105.97647,
  },
  {
    provinsi: "Lampung",
    kategori: "Alat Musik",
    nama: "Gamolan",
    deskripsi:
      "Alat musik pukul dari bambu seperti kolintang. Memiliki bilah nada dan dimainkan dalam pertunjukan musik tradisional. Gamolan adalah warisan budaya Lampung yang telah diakui UNESCO sebagai alat musik tertua khas wilayah Sumatera bagian selatan.",
    foto: "",
    latitude: -5.7634,
    longitude: 105.125,
  },
  {
    provinsi: "Lampung",
    kategori: "Alat Musik",
    nama: "Serdam",
    deskripsi:
      "Alat musik tiup bambu kecil mirip suling. Ditiup melodius dan digunakan dalam pengiring lagu atau pertunjukan tari. Serdam mencerminkan sisi lembut dari ekspresi seni masyarakat Lampung, sering dimainkan secara tunggal untuk menenangkan hati.",
    foto: "",
    latitude: -5.45,
    longitude: 105.4637,
  },
  {
    provinsi: "Lampung",
    kategori: "Wisata",
    nama: "Taman Nasional Way Kambas",
    deskripsi:
      "Kawasan konservasi gajah Sumatera yang dilindungi. Wisatawan dapat menyaksikan pelatihan gajah, edukasi lingkungan, dan melihat satwa liar. Taman ini menjadi ikon pelestarian satwa khas Sumatera dan daya tarik wisata edukatif dan ekologis.",
    foto: "",
    latitude: -5.0933,
    longitude: 105.8573,
  },
  {
    provinsi: "Lampung",
    kategori: "Wisata",
    nama: "Pahawang Island",
    deskripsi:
      "Pulau dengan air laut jernih dan terumbu karang indah, cocok untuk snorkeling dan diving. Terletak di Teluk Lampung, destinasi ini menawarkan pesona laut tropis, pantai putih, dan kekayaan biota bawah laut yang memikat wisatawan.",
    foto: "",
    latitude: -5.5898,
    longitude: 105.17542,
  },
  {
    provinsi: "Banten",
    kategori: "Makanan",
    nama: "Rabeg",
    deskripsi:
      "Masakan berbahan daging kambing dengan bumbu rempah kuat seperti lada, bawang, dan cengkih. Cita rasanya gurih pedas khas Timur Tengah. Rabeg merupakan peninggalan kuliner Kesultanan Banten yang masih populer hingga kini.",
    foto: "",
    latitude: -6.1,
    longitude: 106.53871,
  },
  {
    provinsi: "Banten",
    kategori: "Makanan",
    nama: "Sate Bandeng",
    deskripsi:
      "Ikan bandeng tanpa duri diolah dengan bumbu kelapa dan rempah, lalu dibakar seperti sate. Rasanya gurih, manis, dan bertekstur lembut. Hidangan ini menjadi simbol kuliner Banten dan sering disajikan saat acara penting.",
    foto: "",
    latitude: -6.757,
    longitude: 106.583429,
  },
  {
    provinsi: "Banten",
    kategori: "Budaya",
    nama: "Ubung-ubung",
    deskripsi:
      "Seni pertunjukan teater tradisional yang mirip dengan lenong, diiringi oleh gamelan dan sering kali mengangkat cerita-cerita rakyat atau kehidupan sehari-hari dengan sentuhan komedi.",
    foto: "",
    latitude: -6.75347,
    longitude: 106.8591,
  },
  {
    provinsi: "Banten",
    kategori: "Budaya",
    nama: "Pepe-Pepean",
    deskripsi:
      "Tradisi masyarakat Baduy Luar untuk mengenang leluhur dengan berkeliling kampung sambil membawa obor. Ritual ini dilaksanakan malam hari dan menjadi simbol penghormatan terhadap alam dan spiritualitas lokal.",
    foto: "",
    latitude: -6.5891,
    longitude: 106.9876,
  },
  {
    provinsi: "Banten",
    kategori: "Alat Musik",
    nama: "Angklung Buhun",
    deskripsi:
      "Angklung dari bambu tua yang dimainkan oleh masyarakat adat Baduy. Digunakan dalam ritual dan upacara tradisional. Suaranya khas dan sakral, mencerminkan kesederhanaan serta kearifan lokal masyarakat pedalaman Banten.",
    foto: "",
    latitude: -6.974,
    longitude: 106.9875,
  },
  {
    provinsi: "Banten",
    kategori: "Alat Musik",
    nama: "Rampak Bedug",
    deskripsi:
      "Alat musik pukul besar yang digunakan di masjid dan acara tradisional. Di Banten, bedug tidak hanya untuk penanda waktu salat, tetapi juga bagian dari kesenian rakyat seperti tabuhan pengiring debus dan rampak bedug.",
    foto: "",
    latitude: -6.5452,
    longitude: 106.9986,
  },
  {
    provinsi: "Banten",
    kategori: "Wisata",
    nama: "Pantai Anyer",
    deskripsi:
      "Pantai berpasir putih dengan panorama laut Selat Sunda. Cocok untuk berenang dan bermain air. Keindahannya menjadikan Anyer sebagai destinasi wisata favorit keluarga di Banten sejak era kolonial Belanda.",
    foto: "",
    latitude: -6.0494,
    longitude: 105.9221,
  },
  {
    provinsi: "Banten",
    kategori: "Wisata",
    nama: "Benteng Speelwijk",
    deskripsi:
      "Benteng peninggalan Belanda di Kota Banten Lama. Dikelilingi kanal dan tembok tebal, menjadi saksi sejarah kolonialisme. Lokasi ini sering dikunjungi wisatawan pencinta sejarah dan budaya masa lampau.",
    foto: "",
    latitude: -6.0354,
    longitude: 106.634,
  },
  {
    provinsi: "DKI Jakarta",
    kategori: "Makanan",
    nama: "Kerak Telor",
    deskripsi:
      "Makanan ikonik Betawi berbahan telur bebek, beras ketan, dan serundeng kelapa. Dimasak di atas wajan arang hingga garing. Kerak telor identik dengan perayaan budaya Jakarta dan sering dijajakan di festival.",
    foto: "",
    latitude: -6.13566,
    longitude: 106.7545,
  },
  {
    provinsi: "DKI Jakarta",
    kategori: "Makanan",
    nama: "Soto Betawi",
    deskripsi:
      "Soto khas Betawi dengan kuah santan atau susu, diisi daging sapi dan jeroan. Rasanya gurih dan kaya rempah. Hidangan ini mencerminkan kekayaan kuliner masyarakat urban Betawi yang dipengaruhi berbagai budaya.",
    foto: "",
    latitude: -6.776,
    longitude: 106.974673,
  },
  {
    provinsi: "DKI Jakarta",
    kategori: "Budaya",
    nama: "Ondel-Ondel",
    deskripsi:
      "Boneka raksasa berwajah merah dan biru, diarak saat perayaan adat atau penyambutan tamu. Simbol pelindung dari roh jahat. Ondel-ondel menjadi ikon budaya Betawi yang kerap tampil dalam pertunjukan jalanan.",
    foto: "",
    latitude: -6.68488,
    longitude: 106.79554,
  },
  {
    provinsi: "DKI Jakarta",
    kategori: "Budaya",
    nama: "Palang Pintu",
    deskripsi:
      "Tradisi Betawi saat pernikahan, berupa adu pantun dan silat antara pihak mempelai pria dan penjaga mempelai wanita. Palang pintu mencerminkan humor, keahlian bela diri, dan kehangatan adat Betawi dalam menjalin relasi.",
    foto: "",
    latitude: -6.63573,
    longitude: 106.86499,
  },
  {
    provinsi: "DKI Jakarta",
    kategori: "Alat Musik",
    nama: "Gambang Kromong",
    deskripsi:
      "Gabungan alat musik tradisional Tionghoa dan Betawi seperti gambang, kromong, gong, dan suling. Digunakan untuk mengiringi lagu-lagu rakyat. Musik ini mencerminkan akulturasi budaya yang hidup di masyarakat Jakarta.",
    foto: "",
    latitude: -6.68458,
    longitude: 106.9852,
  },
  {
    provinsi: "DKI Jakarta",
    kategori: "Alat Musik",
    nama: "Tanjidor",
    deskripsi:
      "Ansambel musik tiup warisan Belanda, dimainkan masyarakat Betawi dalam acara perayaan. Instrumennya mirip marching band, namun dibawakan dengan irama khas. Tanjidor mencerminkan adaptasi lokal terhadap budaya Eropa.",
    foto: "",
    latitude: -6.27645,
    longitude: 106.864,
  },
  {
    provinsi: "DKI Jakarta",
    kategori: "Wisata",
    nama: "Monumen Nasional (Monas)",
    deskripsi:
      "Tugu setinggi 132 meter di jantung Jakarta, simbol perjuangan kemerdekaan. Dikelilingi taman luas dan museum sejarah. Monas menjadi ikon ibu kota sekaligus tempat wisata edukatif bagi semua kalangan.",
    foto: "",
    latitude: -6.9785,
    longitude: 106.7843,
  },
  {
    provinsi: "DKI Jakarta",
    kategori: "Wisata",
    nama: "Kota Tua Jakarta",
    deskripsi:
      "Kawasan berarsitektur kolonial Belanda dengan museum, kafe, dan pelataran sejarah. Menjadi pusat wisata budaya yang menampilkan jejak Batavia tempo dulu. Cocok untuk berjalan santai sambil mengenal sejarah Jakarta.",
    foto: "",
    latitude: -6.1363,
    longitude: 106.8143,
  },
  {
    provinsi: "Jawa Barat",
    kategori: "Makanan",
    nama: "Sate Maranggi",
    deskripsi:
      "Sate daging sapi khas Purwakarta, dibumbui kecap, bawang, dan ketumbar, lalu dibakar hingga beraroma harum. Rasanya manis-gurih dan juicy. Biasanya disajikan dengan nasi atau ketan serta sambal oncom yang khas.",
    foto: "",
    latitude: -6.9034,
    longitude: 107.6186,
  },
  {
    provinsi: "Jawa Barat",
    kategori: "Makanan",
    nama: "Mie Kocok Bandung",
    deskripsi:
      "Mie kuning disajikan dengan kikil, bakso, dan kuah kaldunya yang gurih. Dilengkapi tauge, seledri, dan bawang goreng. Hidangan khas Bandung ini cocok dinikmati hangat, menggambarkan selera kuliner Sunda yang kaya rasa.",
    foto: "",
    latitude: -6.9034,
    longitude: 107.6186,
  },
  {
    provinsi: "Jawa Barat",
    kategori: "Budaya",
    nama: "Seren Taun",
    deskripsi:
      "Ritual adat panen masyarakat Sunda di Kuningan dan Cianjur. Menyampaikan syukur kepada Sang Hyang atas hasil bumi, diiringi upacara dan seni tradisi. Seren Taun menjadi simbol keharmonisan manusia dengan alam.",
    foto: "",
    latitude: -6.9034,
    longitude: 107.6186,
  },
  {
    provinsi: "Jawa Barat",
    kategori: "Budaya",
    nama: "Ngabako",
    deskripsi:
      "Tradisi petani tembakau di Garut dan sekitarnya saat mengolah tembakau secara bersama-sama. Diselingi hiburan seperti kacapi suling dan tembang Sunda. Tradisi ini memperkuat ikatan sosial dan menjaga budaya bertani.",
    foto: "",
    latitude: -7.2185,
    longitude: 107.9048,
  },
  {
    provinsi: "Jawa Barat",
    kategori: "Alat Musik",
    nama: "Angklung",
    deskripsi:
      "Alat musik dari bambu yang dibunyikan dengan digoyang. Tiap angklung menghasilkan satu nada, sehingga dimainkan berkelompok. Warisan budaya takbenda UNESCO ini menggambarkan kolaborasi, harmoni, dan kreativitas masyarakat Sunda.",
    foto: "",
    latitude: -6.9034,
    longitude: 107.6186,
  },
  {
    provinsi: "Jawa Barat",
    kategori: "Alat Musik",
    nama: "Kecapi Suling",
    deskripsi:
      "Perpaduan alat petik (kecapi) dan tiup (suling) yang menghasilkan musik lembut dan meditatif. Sering mengiringi tembang Sunda. Musik ini mencerminkan nuansa ketenangan dan keindahan batin dalam budaya Jawa Barat.",
    foto: "",
    latitude: -6.9034,
    longitude: 107.6186,
  },
  {
    provinsi: "Jawa Barat",
    kategori: "Wisata",
    nama: "Kawah Putih Ciwidey",
    deskripsi:
      "Danau kawah vulkanik berair kehijauan dengan kabut mistis dan aroma belerang. Dikelilingi hutan pegunungan yang sejuk. Kawah Putih menjadi destinasi favorit untuk wisata alam dan fotografi di Bandung Selatan.",
    foto: "",
    latitude: -7.1652,
    longitude: 107.4022,
  },
  {
    provinsi: "Jawa Barat",
    kategori: "Wisata",
    nama: "Taman Wisata Alam Gunung Tangkuban Parahu",
    deskripsi:
      "Gunung dengan kawah aktif dan legenda Sangkuriang. Pengunjung bisa menikmati pemandangan kawah, belerang, dan wisata edukatif geologi. Tempat ini menyatukan keindahan alam dan cerita rakyat yang melegenda.",
    foto: "",
    latitude: -6.7712,
    longitude: 107.6046,
  },
  {
    provinsi: "Jawa Tengah",
    kategori: "Makanan",
    nama: "Gudeg",
    deskripsi:
      "Olahan nangka muda dimasak dengan santan dan gula merah hingga manis legit. Disajikan dengan telur, ayam, dan sambal krecek. Gudeg menjadi ikon kuliner Yogyakarta dan Solo yang mencerminkan kehalusan rasa masyarakat Jawa.",
    foto: "",
    latitude: -7.0,
    longitude: 110.42,
  },
  {
    provinsi: "Jawa Tengah",
    kategori: "Makanan",
    nama: "Tahu Gimbal",
    deskripsi:
      "Tahu goreng disajikan dengan bakwan udang (gimbal), lontong, kol, dan tauge, disiram bumbu kacang. Hidangan khas Semarang ini menawarkan kombinasi gurih, manis, dan renyah yang menggugah selera.",
    foto: "",
    latitude: -6.9922,
    longitude: 110.4203,
  },
  {
    provinsi: "Jawa Tengah",
    kategori: "Budaya",
    nama: "Grebeg Maulud",
    deskripsi:
      "Tradisi Keraton Yogyakarta dan Surakarta yang memperingati Maulid Nabi. Gunungan hasil bumi diarak dan diperebutkan warga sebagai simbol berkah. Tradisi ini menampilkan kekayaan budaya dan spiritualitas masyarakat Jawa.",
    foto: "",
    latitude: -7.0,
    longitude: 110.42,
  },
  {
    provinsi: "Jawa Tengah",
    kategori: "Budaya",
    nama: "Sekaten",
    deskripsi:
      "Perayaan tahunan di alun-alun keraton yang menampilkan gamelan sekaten, pasar malam, dan ritual keagamaan. Merupakan perpaduan antara dakwah Islam dan budaya Jawa, yang diwariskan sejak masa Wali Songo.",
    foto: "",
    latitude: -7.0,
    longitude: 110.42,
  },
  {
    provinsi: "Jawa Tengah",
    kategori: "Alat Musik",
    nama: "Gamelan Jawa",
    deskripsi:
      "Ansambel musik tradisional dengan instrumen gong, saron, kendang, dan gender. Digunakan dalam upacara adat, tari, dan wayang. Gamelan mencerminkan filosofi harmoni dan keseimbangan dalam kehidupan masyarakat Jawa.",
    foto: "",
    latitude: -7.0,
    longitude: 110.42,
  },
  {
    provinsi: "Jawa Tengah",
    kategori: "Alat Musik",
    nama: "Rebab",
    deskripsi:
      "Alat musik gesek berdawai dua, dimainkan untuk mengiringi tembang dan wayang. Rebab memiliki suara melankolis yang mendalam, menggambarkan nuansa rasa dan kehalusan dalam seni tradisi Jawa Tengah.",
    foto: "",
    latitude: -7.0,
    longitude: 110.42,
  },
  {
    provinsi: "Jawa Tengah",
    kategori: "Wisata",
    nama: "Candi Borobudur",
    deskripsi:
      "Candi Buddha terbesar di dunia, warisan dunia UNESCO, dengan relief dan stupa megah. Terletak di Magelang, menjadi pusat wisata religi, budaya, dan sejarah yang mengagumkan. Destinasi utama wisata Jawa Tengah.",
    foto: "",
    latitude: -7.6074,
    longitude: 110.2038,
  },
  {
    provinsi: "Jawa Tengah",
    kategori: "Wisata",
    nama: "Dieng Plateau",
    deskripsi:
      "Dataran tinggi vulkanik dengan kawah, telaga warna, dan candi-candi kuno. Udara dingin dan pemandangan magis menjadikan Dieng tempat ideal untuk refleksi dan eksplorasi budaya spiritual Jawa kuno.",
    foto: "",
    latitude: -7.2995,
    longitude: 109.9149,
  },
  {
    provinsi: "Daerah Istimewa Yogyakarta",
    kategori: "Makanan",
    nama: "Gudeg",
    deskripsi:
      "Olahan nangka muda dimasak dengan santan, daun jati, dan gula merah hingga kering. Disajikan dengan ayam, telur, dan sambal krecek. Rasa manis gurihnya khas, menjadikan gudeg ikon kuliner tradisional khas Yogyakarta yang melegenda.",
    foto: "",
    latitude: -7.7956,
    longitude: 110.3695,
  },
  {
    provinsi: "Daerah Istimewa Yogyakarta",
    kategori: "Makanan",
    nama: "Bakpia Pathok",
    deskripsi:
      "Kue isi kacang hijau yang dibungkus adonan tepung lembut. Kini tersedia dalam berbagai varian rasa. Bakpia menjadi oleh-oleh wajib dari Yogyakarta, mencerminkan perpaduan pengaruh budaya Tionghoa dan adaptasi lokal masyarakat Jawa.",
    foto: "",
    latitude: -7.7956,
    longitude: 110.3695,
  },
  {
    provinsi: "Daerah Istimewa Yogyakarta",
    kategori: "Budaya",
    nama: "Sekaten",
    deskripsi:
      "Tradisi keraton untuk memperingati Maulid Nabi Muhammad SAW. Dirayakan dengan pasar malam, gamelan pusaka, dan arak-arakan gunungan. Sekaten mencerminkan perpaduan antara budaya Islam dan adat Jawa yang dilestarikan sejak era Kesultanan Mataram.",
    foto: "",
    latitude: -7.7956,
    longitude: 110.3695,
  },
  {
    provinsi: "Daerah Istimewa Yogyakarta",
    kategori: "Budaya",
    nama: "Upacara Labuhan",
    deskripsi:
      "Ritual persembahan ke laut atau gunung oleh Keraton Yogyakarta. Bertujuan memohon keselamatan kepada penguasa alam gaib. Dilakukan di Gunung Merapi dan Pantai Parangkusumo, mencerminkan kearifan lokal dan spiritualitas masyarakat Jawa.",
    foto: "",
    latitude: -7.7956,
    longitude: 110.3695,
  },
  {
    provinsi: "Daerah Istimewa Yogyakarta",
    kategori: "Alat Musik",
    nama: "Gamelan Jawa",
    deskripsi:
      "Ansambel musik tradisional terdiri dari gong, kendang, saron, dan bonang. Digunakan dalam wayang, tari, dan upacara keraton. Gamelan memiliki filosofi mendalam tentang harmoni dan keseimbangan dalam hidup menurut ajaran Jawa klasik.",
    foto: "",
    latitude: -7.7956,
    longitude: 110.3695,
  },
  {
    provinsi: "Daerah Istimewa Yogyakarta",
    kategori: "Alat Musik",
    nama: "Rebab",
    deskripsi:
      "Alat musik gesek berdawai dua, sering dimainkan dalam gamelan. Suaranya lirih dan ekspresif, digunakan untuk mengiringi tembang dan tari tradisional. Rebab menjadi simbol kelembutan dan ekspresi rasa dalam budaya musik Jawa.",
    foto: "",
    latitude: -7.7956,
    longitude: 110.3695,
  },
  {
    provinsi: "Daerah Istimewa Yogyakarta",
    kategori: "Wisata",
    nama: "Keraton Yogyakarta",
    deskripsi:
      "Istana resmi Kesultanan Yogyakarta yang masih aktif. Menampilkan arsitektur Jawa, museum budaya, dan kegiatan tradisional keraton. Menjadi pusat pelestarian budaya dan simbol pemerintahan khas DIY yang memadukan sistem kerajaan dan republik.",
    foto: "",
    latitude: -7.8059,
    longitude: 110.3659,
  },
  {
    provinsi: "Daerah Istimewa Yogyakarta",
    kategori: "Wisata",
    nama: "Candi Prambanan",
    deskripsi:
      "Kompleks candi Hindu terbesar di Indonesia, dibangun pada abad ke-9. Terdiri dari candi utama (Siwa, Brahma, Wisnu) dan penuh relief kisah Ramayana. Diakui UNESCO, Prambanan adalah simbol warisan spiritual dan arsitektur Jawa kuno.",
    foto: "",
    latitude: -7.752,
    longitude: 110.4915,
  },
  {
    provinsi: "Jawa Timur",
    kategori: "Makanan",
    nama: "Rawon",
    deskripsi:
      "Sup daging sapi berkuah hitam dari kluwek, berpadu rempah khas Jawa Timur. Rasanya gurih, kaya, dan sedikit pahit. Rawon biasanya disajikan dengan nasi, sambal, dan telur asin, menjadi ikon kuliner Surabaya.",
    foto: "",
    latitude: -7.2575,
    longitude: 112.7521,
  },
  {
    provinsi: "Jawa Timur",
    kategori: "Makanan",
    nama: "Rujak Cingur",
    deskripsi:
      "Campuran sayur, buah, tempe, tahu, lontong, dan irisan cingur (hidung sapi), disiram bumbu petis hitam. Rujak khas Surabaya ini menyajikan rasa kompleks dan unik yang menggambarkan keberanian rasa masyarakat setempat.",
    foto: "",
    latitude: -7.2575,
    longitude: 112.7521,
  },
  {
    provinsi: "Jawa Timur",
    kategori: "Budaya",
    nama: "Ludruk",
    deskripsi:
      "Teater rakyat berbahasa Jawa khas Jawa Timur, menampilkan kisah keseharian dengan humor dan pesan moral. Diiringi musik gamelan dan tari remo, ludruk menjadi sarana hiburan dan kritik sosial yang merakyat.",
    foto: "",
    latitude: -7.2575,
    longitude: 112.7521,
  },
  {
    provinsi: "Jawa Timur",
    kategori: "Budaya",
    nama: "Reog Ponorogo",
    deskripsi:
      "Kesenian spektakuler dengan topeng singa besar (barong), penari warok, dan jathilan. Reog mencerminkan kekuatan, keberanian, dan kearifan lokal. Pertunjukan ini berasal dari Ponorogo dan dikenal secara nasional.",
    foto: "",
    latitude: -7.8767,
    longitude: 111.4782,
  },
  {
    provinsi: "Jawa Timur",
    kategori: "Alat Musik",
    nama: "Angklung Caruk",
    deskripsi:
      "Angklung khas Banyuwangi yang dimainkan berpasangan sebagai adu kreativitas musik. Suaranya harmonis dan dinamis. Tradisi ini mencerminkan semangat kompetisi sehat dan kekompakan dalam budaya masyarakat Osing.",
    foto: "",
    latitude: -8.2144,
    longitude: 114.3608,
  },
  {
    provinsi: "Jawa Timur",
    kategori: "Alat Musik",
    nama: "Terbang Gede",
    deskripsi:
      "Rebana besar digunakan dalam tradisi Islam dan seni hadrah di Jawa Timur. Dipukul dengan ritme cepat dalam pertunjukan religi dan perayaan adat. Terbang Gede memperlihatkan peran musik dalam spiritualitas masyarakat.",
    foto: "",
    latitude: -7.2575,
    longitude: 112.7521,
  },
  {
    provinsi: "Jawa Timur",
    kategori: "Wisata",
    nama: "Gunung Bromo",
    deskripsi:
      "Gunung berapi aktif dengan pemandangan kawah dan lautan pasir yang memesona. Disakralkan oleh masyarakat Tengger, Bromo menjadi tujuan wisata alam dan budaya paling ikonik di Jawa Timur.",
    foto: "",
    latitude: -7.9424,
    longitude: 112.9531,
  },
  {
    provinsi: "Jawa Timur",
    kategori: "Wisata",
    nama: "Pulau Madura – Bukit Jaddih",
    deskripsi:
      "Bukit kapur bekas tambang dengan panorama putih memukau dan kolam biru alami. Destinasi unik ini jadi favorit wisatawan lokal, menggambarkan keindahan tersembunyi di balik kerasnya alam Madura.",
    foto: "",
    latitude: -7.0326,
    longitude: 112.8727,
  },
  {
    provinsi: "Bali",
    kategori: "Makanan",
    nama: "Ayam Betutu",
    deskripsi:
      "Ayam utuh dibumbui base genep (rempah Bali), dibungkus daun pisang, lalu dipanggang atau dikukus hingga meresap. Rasanya pedas dan aromatik. Hidangan ini sering disajikan dalam upacara adat dan perayaan keluarga.",
    foto: "",
    latitude: -8.4095,
    longitude: 115.1889,
  },
  {
    provinsi: "Bali",
    kategori: "Makanan",
    nama: "Lawar",
    deskripsi:
      "Campuran sayuran, daging cincang, kelapa parut, dan bumbu khas Bali. Ada lawar putih (non-darah) dan lawar merah (dengan darah). Disajikan saat upacara adat, mencerminkan keseimbangan spiritual dan budaya Bali.",
    foto: "",
    latitude: -8.4095,
    longitude: 115.1889,
  },
  {
    provinsi: "Bali",
    kategori: "Budaya",
    nama: "Ngaben",
    deskripsi:
      "Upacara kremasi umat Hindu Bali untuk mengembalikan roh ke alam spiritual. Dilaksanakan meriah dengan iringan gamelan dan prosesi simbolis. Ngaben mencerminkan filosofi hidup dan kematian dalam ajaran Hindu Dharma.",
    foto: "",
    latitude: -8.4095,
    longitude: 115.1889,
  },
  {
    provinsi: "Bali",
    kategori: "Budaya",
    nama: "Melasti",
    deskripsi:
      "Ritual penyucian diri dan alam semesta menjelang Nyepi. Umat membawa pratima ke laut untuk disucikan. Tradisi ini menggambarkan hubungan manusia, alam, dan Sang Pencipta dalam harmoni sakral masyarakat Bali.",
    foto: "",
    latitude: -8.4095,
    longitude: 115.1889,
  },
  {
    provinsi: "Bali",
    kategori: "Alat Musik",
    nama: "Gamelan Gong Kebyar",
    deskripsi:
      "Ansambel musik khas Bali dengan tempo dinamis dan hentakan cepat. Digunakan dalam tari kebyar dan upacara adat. Musik ini mencerminkan semangat dan kekuatan ekspresi seni masyarakat Bali.",
    foto: "",
    latitude: -8.4095,
    longitude: 115.1889,
  },
  {
    provinsi: "Bali",
    kategori: "Alat Musik",
    nama: "Ceng-Ceng",
    deskripsi:
      "Alat musik logam kecil berbentuk simbal, dimainkan dengan cara diketukkan cepat. Menghasilkan suara ritmis dalam pertunjukan tari dan upacara. Ceng-Ceng memperkuat dinamika gamelan dan nuansa sakral seni Bali.",
    foto: "",
    latitude: -8.4095,
    longitude: 115.1889,
  },
  {
    provinsi: "Bali",
    kategori: "Wisata",
    nama: "Pura Ulun Danu Beratan",
    deskripsi:
      "Pura ikonik di tepi Danau Beratan, dikelilingi kabut dan pegunungan. Tempat pemujaan Dewi Danu, dewi air dan kesuburan. Menjadi simbol keharmonisan spiritual dan keindahan alam Bali yang damai.",
    foto: "",
    latitude: -8.2752,
    longitude: 115.1669,
  },
  {
    provinsi: "Bali",
    kategori: "Wisata",
    nama: "Pantai Kuta",
    deskripsi:
      "Pantai berpasir putih dengan ombak ideal untuk berselancar. Pusat wisata internasional Bali dengan panorama matahari terbenam yang memesona. Kuta mencerminkan pesona tropis dan semangat pariwisata Pulau Dewata.",
    foto: "",
    latitude: -8.723,
    longitude: 115.1681,
  },
  {
    provinsi: "Nusa Tenggara Barat",
    kategori: "Makanan",
    nama: "Ayam Taliwang",
    deskripsi:
      "Ayam kampung muda dibakar dengan bumbu khas Lombok berbahan cabai, bawang, dan terasi. Rasanya pedas gurih dan menggugah selera. Ayam Taliwang menjadi ikon kuliner Lombok yang mencerminkan cita rasa berani dan khas.",
    foto: "",
    latitude: -8.5833,
    longitude: 116.1167,
  },
  {
    provinsi: "Nusa Tenggara Barat",
    kategori: "Makanan",
    nama: "Beberuk Terong",
    deskripsi:
      "Sambal segar dari terong ungu mentah, tomat, dan cabai, disajikan sebagai lalapan. Rasanya pedas segar dan cocok menemani ayam bakar atau ikan. Hidangan ini mencerminkan kesederhanaan dan kekayaan rasa lokal NTB.",
    foto: "",
    latitude: -8.5833,
    longitude: 116.1167,
  },
  {
    provinsi: "Nusa Tenggara Barat",
    kategori: "Budaya",
    nama: "Peresean",
    deskripsi:
      "Tradisi adu ketangkasan dua pria menggunakan rotan (penjalin) dan perisai kulit. Diiringi musik tradisional, Peresean menggambarkan nilai sportivitas, keberanian, dan penghormatan dalam budaya Sasak Lombok.",
    foto: "",
    latitude: -8.5833,
    longitude: 116.1167,
  },
  {
    provinsi: "Nusa Tenggara Barat",
    kategori: "Budaya",
    nama: "Begawe",
    deskripsi:
      "Upacara adat suku Sasak yang dilaksanakan saat pernikahan atau panen raya. Disertai prosesi adat, musik, dan tarian tradisional. Begawe mencerminkan semangat gotong royong dan kekompakan masyarakat pedesaan NTB.",
    foto: "",
    latitude: -8.5833,
    longitude: 116.1167,
  },
  {
    provinsi: "Nusa Tenggara Barat",
    kategori: "Alat Musik",
    nama: "Gendang Beleq",
    deskripsi:
      "Gendang besar yang dimainkan dalam barisan, dipukul sambil berjalan. Digunakan dalam upacara adat, penyambutan, dan festival. Gendang Beleq mencerminkan semangat kebersamaan dan kebanggaan budaya Sasak.",
    foto: "",
    latitude: -8.5833,
    longitude: 116.1167,
  },
  {
    provinsi: "Nusa Tenggara Barat",
    kategori: "Alat Musik",
    nama: "Suling Rarak",
    deskripsi:
      "Suling bambu kecil dengan suara lembut, sering dimainkan dalam pertunjukan tradisional. Digunakan untuk mengiringi tarian atau nyanyian daerah. Suling ini menciptakan nuansa tenang khas alam dan budaya NTB.",
    foto: "",
    latitude: -8.5833,
    longitude: 116.1167,
  },
  {
    provinsi: "Nusa Tenggara Barat",
    kategori: "Wisata",
    nama: "Pantai Senggigi",
    deskripsi:
      "Pantai eksotis di Lombok Barat dengan pasir putih dan laut biru jernih. Cocok untuk berenang, snorkeling, dan menikmati matahari terbenam. Senggigi merupakan gerbang utama wisata bahari NTB sebelum ke Gili.",
    foto: "",
    latitude: -8.514,
    longitude: 116.0594,
  },
  {
    provinsi: "Nusa Tenggara Barat",
    kategori: "Wisata",
    nama: "Gunung Rinjani",
    deskripsi:
      "Gunung tertinggi kedua di Indonesia, dengan kawah dan danau Segara Anak yang indah. Destinasi favorit pendaki dan pecinta alam. Rinjani juga memiliki makna spiritual bagi masyarakat sekitar sebagai gunung suci.",
    foto: "",
    latitude: -8.4116,
    longitude: 116.4674,
  },
  {
    provinsi: "Nusa Tenggara Timur",
    kategori: "Makanan",
    nama: "Se'i",
    deskripsi:
      "Irisan daging sapi atau babi yang diasap dengan teknik tradisional, menghasilkan aroma khas dan tekstur lembut. Se'i adalah makanan populer di NTT dan sering disajikan dengan sambal luat dan bunga pepaya.",
    foto: "",
    latitude: -10.1818,
    longitude: 123.597,
  },
  {
    provinsi: "Nusa Tenggara Timur",
    kategori: "Makanan",
    nama: "Jagung Bose",
    deskripsi:
      "Jagung putih yang dimasak hingga lembut dan sering menjadi makanan pokok pengganti nasi, terutama di daerah Timor. Biasanya disantap dengan lauk pauk seperti sei, ikan, atau sayuran.",
    foto: "",
    latitude: -10.1818,
    longitude: 123.597,
  },
  {
    provinsi: "Nusa Tenggara Timur",
    kategori: "Budaya",
    nama: "Ritus Pasola",
    deskripsi:
      "Upacara adat perang-perangan berkuda antara dua kelompok pria yang saling melempar lembing kayu. Tradisi masyarakat Sumba ini diadakan untuk merayakan musim tanam padi, memohon kesuburan tanah, dan kesejahteraan.",
    foto: "",
    latitude: -9.6667,
    longitude: 119.8333,
  },
  {
    provinsi: "Nusa Tenggara Timur",
    kategori: "Budaya",
    nama: "Tari Bonet",
    deskripsi:
      "Tarian tradisional suku Dawan yang dibawakan secara melingkar sambil menyanyikan pantun atau puisi. Tari Bonet sering ditampilkan dalam upacara adat seperti kelahiran, pernikahan, atau kematian, melambangkan kebersamaan dan persatuan.",
    foto: "",
    latitude: -10.1818,
    longitude: 123.597,
  },
  {
    provinsi: "Nusa Tenggara Timur",
    kategori: "Alat Musik",
    nama: "Sasando",
    deskripsi:
      "Alat musik petik khas Pulau Rote yang terbuat dari daun lontar dan bilah bambu. Sasando menghasilkan suara merdu seperti harpa dan sering dimainkan dalam upacara adat atau hiburan.",
    foto: "",
    latitude: -10.1818,
    longitude: 123.597,
  },
  {
    provinsi: "Nusa Tenggara Timur",
    kategori: "Alat Musik",
    nama: "Foy Doa",
    deskripsi:
      "Alat musik tiup ganda dari bambu kecil yang dimainkan dengan teknik mengalirkan udara secara kontinu. Foy Doa sering dimainkan oleh anak-anak dan remaja, menghasilkan melodi yang indah dan menenangkan.",
    foto: "",
    latitude: -10.1818,
    longitude: 123.597,
  },
  {
    provinsi: "Nusa Tenggara Timur",
    kategori: "Wisata",
    nama: "Danau Kelimutu",
    deskripsi:
      "Danau kawah gunung berapi di Flores yang terkenal dengan tiga warna airnya yang dapat berubah-ubah: merah, biru, dan putih. Keunikan fenomena alam ini menjadikan Kelimutu destinasi yang memukau.",
    foto: "",
    latitude: -8.7699,
    longitude: 121.8213,
  },
  {
    provinsi: "Nusa Tenggara Timur",
    kategori: "Wisata",
    nama: "Taman Nasional Komodo",
    deskripsi:
      "Situs Warisan Dunia UNESCO yang menjadi habitat asli komodo, kadal terbesar di dunia. Terdiri dari beberapa pulau seperti Pulau Komodo, Rinca, dan Padar, tempat ini menawarkan pemandangan savana, pantai pink, dan keindahan bawah laut.",
    foto: "",
    latitude: -8.5414,
    longitude: 119.4975,
  },
  {
    provinsi: "Kalimantan Barat",
    kategori: "Makanan",
    nama: "Pengkang",
    deskripsi:
      "Ketan isi ebi (udang kering) yang dibungkus daun pisang dan dibakar. Disajikan dengan sambal kerang. Makanan ini populer di Pontianak dan sekitarnya, menjadi camilan atau bekal perjalanan yang menggambarkan keunikan kuliner Melayu dan Dayak.",
    foto: "",
    latitude: -0.0261,
    longitude: 109.3427,
  },
  {
    provinsi: "Kalimantan Barat",
    kategori: "Makanan",
    nama: "Bubur Pedas Sambas",
    deskripsi:
      "Bubur dari beras tumbuk, dimasak dengan beragam sayur, rempah, dan daun-daunan. Rasanya gurih dan aromatik. Disajikan saat Ramadan atau acara adat. Kuliner ini mencerminkan kekayaan cita rasa masyarakat Sambas yang bernuansa tradisional.",
    foto: "",
    latitude: 1.35,
    longitude: 109.3,
  },
  {
    provinsi: "Kalimantan Barat",
    kategori: "Budaya",
    nama: "Naik Dango",
    deskripsi:
      "Perayaan syukur masyarakat Dayak Kanayatn atas panen padi. Diisi dengan ritual adat, tarian, dan pameran budaya. Tradisi ini memperkuat solidaritas, menjaga kelestarian budaya, dan menghormati roh leluhur serta alam yang memberi kehidupan.",
    foto: "",
    latitude: -0.0261,
    longitude: 109.3427,
  },
  {
    provinsi: "Kalimantan Barat",
    kategori: "Budaya",
    nama: "Robo-robo",
    deskripsi:
      "Tradisi masyarakat Melayu Sambas untuk mengenang kedatangan Raja Sambas pertama. Dilaksanakan dengan doa bersama, tabur bunga di sungai, dan syukuran. Merupakan wujud penghormatan terhadap leluhur serta sarana menjaga nilai budaya dan keagamaan.",
    foto: "",
    latitude: 1.35,
    longitude: 109.3,
  },
  {
    provinsi: "Kalimantan Barat",
    kategori: "Alat Musik",
    nama: "Sapek",
    deskripsi:
      "Alat musik petik tradisional Dayak, bentuknya mirip gitar kecil. Suaranya halus dan digunakan untuk mengiringi tarian atau nyanyian tradisional. Sapek mencerminkan kreativitas dan nilai estetika suku Dayak dalam kehidupan spiritual dan seni.",
    foto: "",
    latitude: -0.0261,
    longitude: 109.3427,
  },
  {
    provinsi: "Kalimantan Barat",
    kategori: "Alat Musik",
    nama: "Tuma",
    deskripsi:
      "Alat musik pukul dari bambu atau kayu, digunakan dalam upacara adat Dayak. Dentumannya menjadi pengiring tari perang atau upacara penyambutan. Tuma berperan penting dalam menjaga irama sekaligus membangkitkan semangat dan suasana sakral.",
    foto: "",
    latitude: -0.0261,
    longitude: 109.3427,
  },
  {
    provinsi: "Kalimantan Barat",
    kategori: "Wisata",
    nama: "Taman Nasional Danau Sentarum",
    deskripsi:
      "Merupakan kawasan rawa dan danau musiman yang menjadi surga keanekaragaman hayati. Terletak di Kapuas Hulu, cocok untuk wisata alam dan budaya Dayak. Rumah bagi ikan endemik, burung liar, dan tradisi nelayan lokal yang masih lestari.",
    foto: "",
    latitude: 0.8167,
    longitude: 112.2,
  },
  {
    provinsi: "Kalimantan Barat",
    kategori: "Wisata",
    nama: "Tugu Khatulistiwa",
    deskripsi:
      "Ikon Pontianak yang menandai garis khatulistiwa. Di sini, wisatawan bisa menyaksikan fenomena unik matahari tepat di atas kepala saat kulminasi. Tugu ini menjadi simbol geografis sekaligus destinasi edukatif yang menarik wisatawan domestik dan asing.",
    foto: "",
    latitude: 0.0,
    longitude: 109.337,
  },
  {
    provinsi: "Kalimantan Tengah",
    kategori: "Makanan",
    nama: "Juhu Umbut Rotan",
    deskripsi:
      "Masakan khas Dayak dari rotan muda yang direbus bersama rempah-rempah. Rasanya sedikit pahit namun gurih. Sering disajikan dengan ikan bakar atau nasi. Makanan ini menggambarkan kearifan lokal dalam mengolah hasil hutan yang berlimpah.",
    foto: "",
    latitude: -1.8642,
    longitude: 113.8449,
  },
  {
    provinsi: "Kalimantan Tengah",
    kategori: "Makanan",
    nama: "Kalumpe",
    deskripsi:
      "Sayur daun singkong yang ditumbuk halus, dimasak dengan santan, terasi, bawang, dan cabai. Rasanya gurih pedas dan biasa disantap dengan nasi. Kalumpe merupakan hidangan khas Dayak yang penuh gizi dan mudah ditemukan di rumah-rumah warga.",
    foto: "",
    latitude: -1.8642,
    longitude: 113.8449,
  },
  {
    provinsi: "Kalimantan Tengah",
    kategori: "Budaya",
    nama: "Tiwah",
    deskripsi:
      "Upacara adat suku Dayak Ngaju untuk memuliakan roh leluhur dengan memindahkan tulang ke tempat khusus. Prosesi ini diiringi tari, musik, dan sesaji. Tiwah mencerminkan kepercayaan Kaharingan dan pentingnya hubungan manusia dengan leluhur.",
    foto: "",
    latitude: -1.8642,
    longitude: 113.8449,
  },
  {
    provinsi: "Kalimantan Tengah",
    kategori: "Budaya",
    nama: "Tari Giring-Giring",
    deskripsi:
      "Tarian tradisional Dayak Ma'anyan menggunakan bambu kecil berlonceng sebagai alat musik. Gerakannya menggambarkan semangat kerja dan kebersamaan. Ditampilkan saat upacara adat, penyambutan, atau festival budaya untuk melestarikan warisan leluhur.",
    foto: "",
    latitude: -1.8642,
    longitude: 113.8449,
  },
  {
    provinsi: "Kalimantan Tengah",
    kategori: "Alat Musik",
    nama: "Garantung",
    deskripsi:
      "Alat musik pukul mirip gamelan dari logam, terdiri dari bilah nada yang ditata horizontal. Digunakan dalam upacara adat dan pertunjukan tari. Garantung menjadi simbol ekspresi budaya Dayak yang sarat makna dalam musik dan ritual.",
    foto: "",
    latitude: -1.8642,
    longitude: 113.8449,
  },
  {
    provinsi: "Kalimantan Tengah",
    kategori: "Alat Musik",
    nama: "Kacapi Dayak",
    deskripsi:
      "Alat musik petik dari kayu dan senar logam. Digunakan untuk mengiringi syair atau tarian adat. Suaranya lembut dan menenangkan. Kacapi memainkan peran penting dalam menyampaikan cerita rakyat dan puisi tradisional secara musikal.",
    foto: "",
    latitude: -1.8642,
    longitude: 113.8449,
  },
  {
    provinsi: "Kalimantan Tengah",
    kategori: "Wisata",
    nama: "Taman Nasional Tanjung Puting",
    deskripsi:
      "Habitat orangutan terbesar di dunia, terletak di Kotawaringin Barat. Wisatawan dapat menyusuri sungai dengan klotok dan menyaksikan kehidupan liar. Taman ini adalah simbol konservasi satwa endemik dan edukasi lingkungan tropis Kalimantan Tengah.",
    foto: "",
    latitude: -2.871,
    longitude: 111.9167,
  },
  {
    provinsi: "Kalimantan Tengah",
    kategori: "Wisata",
    nama: "Bukit Tangkiling",
    deskripsi:
      "Terletak di Palangka Raya, bukit ini dikenal sebagai tempat meditasi spiritual dan pendakian ringan. Dikelilingi hutan dan memiliki pemandangan kota dari atas. Juga terdapat kompleks ziarah religi yang dihormati oleh warga setempat.",
    foto: "",
    latitude: -2.2084,
    longitude: 113.8829,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Makanan",
    nama: "Soto Banjar",
    deskripsi:
      "Soto khas suku Banjar ini memakai ayam kampung, ketupat, perkedel, dan telur rebus. Kuah beningnya kaya rempah seperti cengkeh, kayu manis, dan kapulaga. Disajikan hangat, soto ini menjadi sajian utama saat acara keluarga maupun adat.",
    foto: "",
    latitude: -3.3167,
    longitude: 114.59,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Makanan",
    nama: "Ketupat Kandangan",
    deskripsi:
      "Ketupat disajikan dengan ikan gabus atau patin yang dimasak dalam kuah santan berbumbu kunyit, serai, dan bawang. Rasanya gurih dan aromatik. Makanan ini biasa dihidangkan saat Lebaran atau acara adat di Hulu Sungai dan Kandangan.",
    foto: "",
    latitude: -2.8722,
    longitude: 115.2972,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Makanan",
    nama: "Gangan Asam Banjar",
    deskripsi:
      "Sup ikan berkuah bening asam segar dari asam jawa, dilengkapi irisan nanas, cabai, dan timun. Biasanya menggunakan ikan haruan. Gangan asam menjadi hidangan khas sehari-hari masyarakat Banjar karena cita rasanya menyegarkan dan menyehatkan.",
    foto: "",
    latitude: -3.3167,
    longitude: 114.59,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Budaya",
    nama: "Tari Baksa Kembang",
    deskripsi:
      "Tarian ini ditampilkan oleh penari wanita yang membawa bunga bogam sebagai simbol keindahan dan penyambutan. Gerakannya lembut dan anggun. Tarian ini sering ditampilkan saat menyambut tamu penting atau acara pernikahan adat Banjar.",
    foto: "",
    latitude: -3.3167,
    longitude: 114.59,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Budaya",
    nama: "Baayun Anak",
    deskripsi:
      "Tradisi masyarakat Banjar untuk mengayunkan bayi atau anak kecil sambil dibacakan doa dan syair. Bertujuan mendoakan kesehatan dan keselamatan anak. Acara ini biasanya dilaksanakan massal di masjid saat Maulid Nabi Muhammad SAW.",
    foto: "",
    latitude: -3.3167,
    longitude: 114.59,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Budaya",
    nama: "Madihin",
    deskripsi:
      "Seni sastra lisan khas Banjar berbentuk pantun spontan yang dibawakan oleh satu orang seniman dengan iringan rebana. Biasanya berisi sindiran, dakwah, atau humor. Madihin sering tampil dalam acara pernikahan, pengajian, dan pertunjukan budaya.",
    foto: "",
    latitude: -3.3167,
    longitude: 114.59,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Alat Musik",
    nama: "Kurung-Kurung",
    deskripsi:
      "Alat musik tradisional dari bambu yang dimainkan dengan dipukul ke tanah atau benda keras. Digunakan dalam upacara tanam padi oleh suku Dayak Meratus. Bunyi yang dihasilkan menjadi pengiring kegiatan pertanian dan upacara spiritual.",
    foto: "",
    latitude: -3.3167,
    longitude: 114.59,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Alat Musik",
    nama: "Panting",
    deskripsi:
      "Alat musik petik khas Banjar berbentuk seperti mandolin kecil. Biasanya dimainkan untuk mengiringi lagu tradisional dan pertunjukan Madihin. Suaranya ringan dan bernada ceria. Panting adalah bagian penting dari identitas musik rakyat Banjar.",
    foto: "",
    latitude: -3.3167,
    longitude: 114.59,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Alat Musik",
    nama: "Serunai Banjar",
    deskripsi:
      "Alat musik tiup dari kayu dengan lubang nada di tubuhnya. Suaranya nyaring dan sering digunakan dalam arak-arakan pengantin serta pertunjukan budaya. Serunai juga kerap dijumpai dalam pertunjukan tari dan musik tradisional Melayu Banjar.",
    foto: "",
    latitude: -3.3167,
    longitude: 114.59,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Wisata",
    nama: "Pasar Terapung Lok Baintan",
    deskripsi:
      "Pasar tradisional di atas Sungai Martapura di mana pedagang menjual hasil bumi dari atas perahu. Aktivitas jual beli dimulai sejak fajar. Pasar ini menjadi simbol ekonomi sungai dan daya tarik budaya masyarakat Banjar.",
    foto: "",
    latitude: -3.3175,
    longitude: 114.619,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Wisata",
    nama: "Loksado dan Pegunungan Meratus",
    deskripsi:
      "Kawasan perbukitan yang dihuni suku Dayak Meratus. Dikenal karena keindahan alam, air terjun Haratai, dan atraksi bamboo rafting. Loksado juga memiliki balai adat (rumah panjang) dan ritual spiritual yang masih lestari hingga kini.",
    foto: "",
    latitude: -2.8596,
    longitude: 115.34,
  },
  {
    provinsi: "Kalimantan Selatan",
    kategori: "Wisata",
    nama: "Museum Wasaka",
    deskripsi:
      "Museum sejarah perjuangan rakyat Kalimantan Selatan yang terletak di Banjarmasin. Namanya singkatan dari 'Waja Sampai Ka Puting', semangat juang masyarakat Banjar. Bangunannya berbentuk rumah adat, menyimpan senjata, dokumen, dan pakaian pejuang.",
    foto: "",
    latitude: -3.3194,
    longitude: 114.5886,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Makanan",
    nama: "Nasi Bekepor",
    deskripsi:
      "Nasi khas Kutai yang dimasak dengan santan dan rempah seperti serai dan bawang merah. Biasanya disajikan bersama ikan asin atau daging masak bumi hangus (mirip semur). Nasi ini menjadi sajian kerajaan Kesultanan Kutai pada zaman dahulu.",
    foto: "",
    latitude: -0.5021,
    longitude: 117.1478,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Makanan",
    nama: "Sate Payau",
    deskripsi:
      "Sate daging rusa yang dibumbui rempah khas lalu dibakar hingga empuk. Sate ini merupakan hidangan khas suku Dayak dan sering disajikan dalam upacara adat atau perayaan panen. Kini mulai sulit ditemukan karena rusa termasuk hewan dilindungi.",
    foto: "",
    latitude: -0.5021,
    longitude: 117.1478,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Makanan",
    nama: "Sayur Asam Kutai",
    deskripsi:
      "Berbeda dari sayur asem Jawa, versi Kutai memakai ikan gabus, terong, dan nanas, dengan kuah bening berasa asam segar. Dimasak bersama daun kemangi, makanan ini populer sebagai hidangan rumahan dan perjamuan adat di daerah pesisir Kutai.",
    foto: "",
    latitude: -0.5021,
    longitude: 117.1478,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Budaya",
    nama: "Erau",
    deskripsi:
      "Festival budaya tahunan Kesultanan Kutai di Tenggarong. Dimeriahkan dengan prosesi adat, tari-tarian, musik, hingga pesta rakyat. Erau berasal dari kata 'eroh' yang berarti ramai. Tradisi ini merupakan bentuk penghormatan kepada leluhur dan raja.",
    foto: "",
    latitude: -0.4262,
    longitude: 116.9922,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Budaya",
    nama: "Belian",
    deskripsi:
      "Ritual penyembuhan dan penolak bala oleh suku Dayak Benuaq. Dilakukan oleh seorang belian (dukun) dengan mantra, musik, dan tarian sakral. Ritual ini dipercaya menghubungkan manusia dengan roh leluhur dan alam semesta untuk kesembuhan jiwa-raga.",
    foto: "",
    latitude: -0.5021,
    longitude: 117.1478,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Budaya",
    nama: "Hudoq",
    deskripsi:
      "Tari topeng tradisional suku Dayak Modang dan Bahau. Penari mengenakan topeng besar menyeramkan, mewakili roh leluhur dan pelindung tanaman. Tarian ini dilakukan saat menanam padi, sebagai permohonan agar hasil panen melimpah dan bebas hama.",
    foto: "",
    latitude: -0.5021,
    longitude: 117.1478,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Alat Musik",
    nama: "Sampe (Sape')",
    deskripsi:
      "Alat musik petik khas Dayak Kenyah, berbentuk seperti gitar dengan ukiran khas. Suaranya lembut dan mendalam. Sampe dimainkan untuk mengiringi tari Dayak, hiburan keluarga, maupun upacara adat seperti pernikahan dan panen raya.",
    foto: "",
    latitude: -0.5021,
    longitude: 117.1478,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Alat Musik",
    nama: "Kadire",
    deskripsi:
      "Alat musik tiup dari bambu berbentuk seruling panjang, biasa digunakan dalam upacara adat dan hiburan rakyat. Suaranya lembut dan melankolis, digunakan untuk menyampaikan cerita atau mengiringi tarian sakral dalam budaya Dayak di pedalaman.",
    foto: "",
    latitude: -0.5021,
    longitude: 117.1478,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Alat Musik",
    nama: "Gendang Dayak",
    deskripsi:
      "Gendang kayu berlapis kulit binatang, dimainkan dengan tangan. Fungsinya sebagai pengiring upacara adat, tarian, dan komunikasi antarkampung. Ritme gendang disesuaikan dengan konteks: pengusiran roh jahat, penyambutan tamu, atau pengumuman penting.",
    foto: "",
    latitude: -0.5021,
    longitude: 117.1478,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Wisata",
    nama: "Pulau Derawan",
    deskripsi:
      "Destinasi wisata bahari dengan pantai berpasir putih dan laut jernih. Terkenal sebagai habitat penyu hijau, ubur-ubur tak menyengat, dan diving spot kelas dunia. Pulau ini sering menjadi tujuan utama wisatawan lokal dan mancanegara.",
    foto: "",
    latitude: 2.2743,
    longitude: 118.2393,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Wisata",
    nama: "Desa Budaya Pampang",
    deskripsi:
      "Desa adat suku Dayak Kenyah yang terletak di Samarinda. Wisatawan dapat menyaksikan pertunjukan tari tradisional, melihat rumah lamin, serta mengenal kehidupan dan kerajinan masyarakat Dayak. Lokasi ini jadi pusat pelestarian budaya Dayak urban.",
    foto: "",
    latitude: -0.4079,
    longitude: 117.1643,
  },
  {
    provinsi: "Kalimantan Timur",
    kategori: "Wisata",
    nama: "Taman Nasional Kutai",
    deskripsi:
      "Kawasan konservasi hutan tropis yang menjadi habitat orangutan liar. Pengunjung dapat menjelajahi hutan, menyusuri sungai, dan melihat flora-fauna langka. Lokasinya di dekat Sangatta, dan menjadi contoh hutan dataran rendah Kalimantan yang masih asli.",
    foto: "",
    latitude: 0.5,
    longitude: 117.25,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Makanan",
    nama: "Nasi Subut",
    deskripsi:
      "Nasi berwarna ungu alami dari ubi ungu dan nasi putih yang dicampur parutan kelapa serta sedikit garam. Disajikan dengan ikan asin, sambal, dan lauk lainnya. Nasi ini populer di daerah Tidung dan sering hadir saat perayaan adat.",
    foto: "",
    latitude: 2.8333,
    longitude: 117.65,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Makanan",
    nama: "Ikan Asam Pedas Tidung",
    deskripsi:
      "Masakan khas Suku Tidung yang memakai ikan laut atau ikan air tawar, dimasak dengan kuah asam pedas dari belimbing wuluh dan cabai. Rasanya segar dan berempah, sering disajikan sebagai menu utama dalam acara adat dan keluarga.",
    foto: "",
    latitude: 2.8333,
    longitude: 117.65,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Makanan",
    nama: "Kapah Singgang",
    deskripsi:
      "Hidangan laut khas pesisir Kalimantan Utara, berupa kerang atau ikan yang dibumbui kunyit, bawang putih, dan jahe, lalu dipanggang. Makanan ini populer di Tarakan dan Nunukan, menggambarkan gaya hidup bahari masyarakat Kalimantan Utara.",
    foto: "",
    latitude: 2.8333,
    longitude: 117.65,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Budaya",
    nama: "Upacara Adat Iraw Tengkayu",
    deskripsi:
      "Perayaan budaya masyarakat Tidung di Tarakan yang dilakukan setiap dua tahun. Berisi arak-arakan perahu hias, tarian, dan ritual syukuran laut. Upacara ini melambangkan rasa syukur dan doa agar hasil laut melimpah dan selamat dari bencana.",
    foto: "",
    latitude: 3.3213,
    longitude: 117.6083,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Budaya",
    nama: "Tarian Japin Tembung",
    deskripsi:
      "Tari tradisional yang menggambarkan keharmonisan masyarakat pesisir Kalimantan Utara. Gerakannya lemah gemulai dan berpasangan. Diiringi musik gambus, tarian ini berkembang dari pengaruh budaya Melayu dan Islam, ditampilkan saat pernikahan atau festival.",
    foto: "",
    latitude: 2.8333,
    longitude: 117.65,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Budaya",
    nama: "Tarian Jugit",
    deskripsi:
      "Tarian Dayak Lundayeh yang menggambarkan kehidupan masyarakat pedalaman, seperti berburu, bertani, dan meramu. Biasanya dibawakan berkelompok oleh laki-laki dan perempuan dengan kostum tradisional dan iringan alat musik seperti sampe dan gong.",
    foto: "",
    latitude: 2.8333,
    longitude: 117.65,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Alat Musik",
    nama: "Sampe (Sape')",
    deskripsi:
      "Alat musik petik dari suku Dayak yang memiliki bentuk panjang dengan ukiran khas. Ditarik menggunakan jari untuk menghasilkan melodi lembut. Digunakan untuk mengiringi tarian atau sebagai hiburan pribadi masyarakat Dayak di pedalaman Kaltara.",
    foto: "",
    latitude: 2.8333,
    longitude: 117.65,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Alat Musik",
    nama: "Gendang Dayak Lundayeh",
    deskripsi:
      "Gendang ini digunakan dalam berbagai acara adat seperti penyambutan tamu, upacara panen, atau pernikahan. Dimainkan berirama cepat sebagai pengiring tari dan ritual. Biasanya terbuat dari kayu keras dan kulit binatang hutan.",
    foto: "",
    latitude: 2.8333,
    longitude: 117.65,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Alat Musik",
    nama: "Gong Besar",
    deskripsi:
      "Gong logam yang digantung dan dipukul untuk menandai dimulainya acara atau bagian penting dalam upacara adat. Suaranya bergema dalam jarak jauh, menjadikannya simbol penting dalam komunikasi dan ritus spiritual suku Dayak dan Tidung.",
    foto: "",
    latitude: 2.8333,
    longitude: 117.65,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Wisata",
    nama: "Pulau Sapi",
    deskripsi:
      "Pulau kecil di perairan Tarakan yang memiliki pasir putih, terumbu karang, dan spot snorkeling. Sering dijadikan lokasi piknik dan rekreasi oleh warga lokal. Airnya jernih, cocok untuk ekowisata bahari dan fotografi bawah laut.",
    foto: "",
    latitude: 3.3213,
    longitude: 117.6083,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Wisata",
    nama: "Long Bawan (Krayan)",
    deskripsi:
      "Wilayah perbatasan dengan Malaysia yang dikenal dengan keindahan alam pegunungan dan pertanian organik seperti beras adan. Desa ini dihuni suku Dayak Lundayeh dan masih memegang teguh tradisi serta sistem pertanian berkelanjutan secara turun-temurun.",
    foto: "",
    latitude: 3.9031,
    longitude: 115.7003,
  },
  {
    provinsi: "Kalimantan Utara",
    kategori: "Wisata",
    nama: "Hutan Mangrove Tarakan",
    deskripsi:
      "Area konservasi mangrove terbesar di kota Tarakan, sekaligus tempat wisata edukasi dan ekowisata. Pengunjung bisa menyusuri jembatan kayu di tengah hutan mangrove sambil melihat monyet bekantan, burung liar, dan menikmati udara segar alami.",
    foto: "",
    latitude: 3.3213,
    longitude: 117.6083,
  },
  {
    provinsi: "Gorontalo",
    kategori: "Makanan",
    nama: "Binte Biluhuta (Milu Siram)",
    deskripsi:
      "Sup jagung khas Gorontalo yang berisi jagung manis serut, udang, ikan cakalang, dan kelapa parut. Kuahnya gurih dan asam segar. Binte Biluhuta adalah simbol persatuan suku Gorontalo dan sering disajikan pada acara penting.",
    foto: "",
    latitude: 0.5457,
    longitude: 123.0594,
  },
  {
    provinsi: "Gorontalo",
    kategori: "Makanan",
    nama: "Ilabulo",
    deskripsi:
      "Olahan sagu yang dicampur ayam cincang, telur, santan, dan rempah, lalu dibungkus daun pisang dan dikukus. Teksturnya kenyal, gurih, dan kaya rasa. Ilabulo sering dianggap sebagai 'pepes-nya Gorontalo' dan disantap sebagai camilan atau lauk.",
    foto: "",
    latitude: 0.5457,
    longitude: 123.0594,
  },
  {
    provinsi: "Gorontalo",
    kategori: "Budaya",
    nama: "Mopotilolo",
    deskripsi:
      "Tradisi penyambutan tamu penting atau pemimpin baru di suatu daerah. Diiringi doa adat dan simbolisasi penerimaan masyarakat Gorontalo terhadap kedatangan tokoh tersebut. Mopotilolo menunjukkan nilai-nilai kekerabatan, penghormatan, dan keterbukaan.",
    foto: "",
    latitude: 0.5457,
    longitude: 123.0594,
  },
  {
    provinsi: "Gorontalo",
    kategori: "Budaya",
    nama: "Modudu",
    deskripsi:
      "Ritual memandikan bayi yang dilakukan pada usia 40 hari. Dilakukan oleh keluarga dan tetua adat dengan doa-doa. Tradisi ini menjadi bentuk syukur sekaligus perlindungan terhadap bayi agar tumbuh sehat dan jauh dari gangguan roh jahat.",
    foto: "",
    latitude: 0.5457,
    longitude: 123.0594,
  },
  {
    provinsi: "Gorontalo",
    kategori: "Alat Musik",
    nama: "Polopalo",
    deskripsi:
      "Alat musik pukul berbentuk tabung bambu yang menghasilkan bunyi ritmis saat dipukul ke tubuh pemain. Biasanya dimainkan berkelompok sebagai pengiring tarian dan lagu rakyat. Suaranya kuat, unik, dan digunakan dalam acara adat dan pertunjukan budaya.",
    foto: "",
    latitude: 0.5457,
    longitude: 123.0594,
  },
  {
    provinsi: "Gorontalo",
    kategori: "Alat Musik",
    nama: "Gambusi",
    deskripsi:
      "Alat musik petik mirip gitar, dipengaruhi budaya Arab. Digunakan untuk mengiringi lagu-lagu tradisional Gorontalo, terutama dalam acara keagamaan dan pernikahan. Suara gambusi lembut dan mendalam, menciptakan suasana sakral dan khidmat.",
    foto: "",
    latitude: 0.5457,
    longitude: 123.0594,
  },
  {
    provinsi: "Gorontalo",
    kategori: "Wisata",
    nama: "Benteng Otanaha",
    deskripsi:
      "Benteng peninggalan abad ke-16 di atas bukit Kota Gorontalo. Dibangun dari pasir, batu kapur, dan putih telur. Pemandangan dari atas mencakup Danau Limboto dan kota. Tempat ini menyimpan nilai sejarah dan simbol perjuangan rakyat Gorontalo.",
    foto: "",
    latitude: 0.5284,
    longitude: 123.0619,
  },
  {
    provinsi: "Gorontalo",
    kategori: "Wisata",
    nama: "Danau Limboto",
    deskripsi:
      "Danau air tawar terbesar di Gorontalo, dulunya menjadi jalur kapal kerajaan. Kini menjadi lokasi wisata dan penelitian ekosistem. Dikelilingi sawah dan kampung nelayan, dan sering menjadi lokasi festival budaya serta pengamatan burung liar.",
    foto: "",
    latitude: 0.5971,
    longitude: 123.0292,
  },
  {
    provinsi: "Sulawesi Utara",
    kategori: "Makanan",
    nama: "Tinutuan (Bubur Manado)",
    deskripsi:
      "Bubur khas Manado berbahan nasi, labu kuning, bayam, kangkung, dan daun kemangi. Disajikan tanpa daging, cocok untuk vegetarian. Rasanya gurih segar, sering dinikmati saat sarapan bersama sambal roa dan perkedel jagung.",
    foto: "",
    latitude: 1.4748,
    longitude: 124.8421,
  },
  {
    provinsi: "Sulawesi Utara",
    kategori: "Makanan",
    nama: "Rica-Rica",
    deskripsi:
      "Sambal rica-rica merupakan bumbu dasar pedas khas Minahasa. Umumnya digunakan untuk mengolah ayam, ikan, atau daging. Rasanya sangat pedas, berpadu dengan jeruk nipis dan rempah segar. Hidangan ini mencerminkan selera kuliner berani orang Minahasa.",
    foto: "",
    latitude: 1.4748,
    longitude: 124.8421,
  },
  {
    provinsi: "Sulawesi Utara",
    kategori: "Budaya",
    nama: "Tari Kabasaran",
    deskripsi:
      "Tarian perang tradisional Minahasa, dibawakan oleh penari pria berpakaian merah dan bersenjata tombak atau pedang. Gerakannya tegas dan gagah. Kabasaran awalnya digunakan untuk menjaga desa dan kini dilestarikan dalam festival budaya dan upacara.",
    foto: "",
    latitude: 1.4748,
    longitude: 124.8421,
  },
  {
    provinsi: "Sulawesi Utara",
    kategori: "Budaya",
    nama: "Upacara Tulude",
    deskripsi:
      "Perayaan syukur masyarakat Sangihe atas berkat kehidupan setahun terakhir. Dimeriahkan dengan prosesi adat, doa, dan pemotongan kue tamo. Tulude juga mempererat ikatan sosial antarwarga dan menegaskan identitas budaya Sangihe yang religius dan komunal.",
    foto: "",
    latitude: 2.7667,
    longitude: 125.75,
  },
  {
    provinsi: "Sulawesi Utara",
    kategori: "Alat Musik",
    nama: "Kolintang",
    deskripsi:
      "Alat musik pukul dari kayu ringan yang disusun seperti xylophone. Memiliki suara nyaring dan merdu. Kolintang digunakan dalam pertunjukan seni, upacara adat, bahkan musik modern. Asalnya dari suku Minahasa dan kini dikenal secara nasional.",
    foto: "",
    latitude: 1.4748,
    longitude: 124.8421,
  },
  {
    provinsi: "Sulawesi Utara",
    kategori: "Alat Musik",
    nama: "Salude",
    deskripsi:
      "Alat musik petik tradisional suku Sangir-Talaud, dibuat dari kayu dan senar logam. Bentuknya menyerupai gitar kecil. Salude biasa dimainkan untuk mengiringi lagu rakyat, pujian, dan pengantar tidur anak-anak di kepulauan utara Sulawesi.",
    foto: "",
    latitude: 1.4748,
    longitude: 124.8421,
  },
  {
    provinsi: "Sulawesi Utara",
    kategori: "Wisata",
    nama: "Taman Laut Bunaken",
    deskripsi:
      "Destinasi selam kelas dunia dengan keanekaragaman terumbu karang dan biota laut. Terletak di Teluk Manado, taman laut ini cocok untuk snorkeling dan diving. Bunaken menjadi ikon wisata bahari Indonesia yang terkenal hingga mancanegara.",
    foto: "",
    latitude: 1.6242,
    longitude: 124.7797,
  },
  {
    provinsi: "Sulawesi Utara",
    kategori: "Wisata",
    nama: "Danau Tondano",
    deskripsi:
      "Danau terbesar di Sulawesi Utara, dikelilingi pegunungan dan sawah. Menyuguhkan panorama sejuk dan cocok untuk wisata keluarga. Terdapat rumah makan terapung dan warung ikan bakar di sekeliling danau, menjadikannya favorit wisata kuliner alam.",
    foto: "",
    latitude: 1.1578,
    longitude: 124.908,
  },
  {
    provinsi: "Sulawesi Tengah",
    kategori: "Makanan",
    nama: "Kaledo (Kaki Lembu Donggala)",
    deskripsi:
      "Sup tulang kaki sapi dengan sumsum, berasal dari Donggala. Kuahnya bening, gurih, dan sedikit asam dari perasan jeruk nipis. Dinikmati dengan nasi atau singkong rebus. Kaledo merupakan simbol kekayaan kuliner khas Sulteng yang unik dan ikonik.",
    foto: "",
    latitude: -0.8906,
    longitude: 119.8732,
  },
  {
    provinsi: "Sulawesi Tengah",
    kategori: "Makanan",
    nama: "Uta Dada",
    deskripsi:
      "Masakan ayam bakar khas suku Kaili, dimasak dengan santan, kemiri, dan rempah-rempah. Daging ayam yang empuk berpadu dengan kuah kental beraroma gurih. Hidangan ini biasa disajikan dalam acara keluarga, syukuran, dan hajatan tradisional.",
    foto: "",
    latitude: -0.8906,
    longitude: 119.8732,
  },
  {
    provinsi: "Sulawesi Tengah",
    kategori: "Budaya",
    nama: "Mombowa Tumpe",
    deskripsi:
      "Tradisi masyarakat Banggai dalam mengantar telur burung maleo secara adat ke pemimpin atau raja sebagai simbol penghormatan dan kesuburan. Prosesi diiringi tarian, musik, dan upacara adat yang sarat makna ekologis dan spiritualitas lokal.",
    foto: "",
    latitude: -1.7,
    longitude: 122.9,
  },
  {
    provinsi: "Sulawesi Tengah",
    kategori: "Budaya",
    nama: "Tari Dero",
    deskripsi:
      "Tari pergaulan dari suku Pamona yang dilakukan secara berkelompok dan berputar searah. Biasanya ditampilkan dalam pesta adat atau panen. Tarian ini mencerminkan semangat kebersamaan, keakraban, dan keharmonisan antaranggota komunitas masyarakat tradisional.",
    foto: "",
    latitude: -0.8906,
    longitude: 119.8732,
  },
  {
    provinsi: "Sulawesi Tengah",
    kategori: "Alat Musik",
    nama: "Ganda",
    deskripsi:
      "Gendang tradisional suku Kaili yang dimainkan dengan tangan, sering digunakan untuk mengiringi tarian atau ritual adat. Terbuat dari kayu dan kulit hewan, ganda memiliki suara ritmis kuat yang menambah energi dalam pertunjukan budaya.",
    foto: "",
    latitude: -0.8906,
    longitude: 119.8732,
  },
  {
    provinsi: "Sulawesi Tengah",
    kategori: "Alat Musik",
    nama: "Pare’e",
    deskripsi:
      "Alat musik bambu ditiup seperti seruling, digunakan oleh masyarakat Lore dan Pamona. Suaranya lembut dan digunakan dalam hiburan atau pengiring lagu-lagu rakyat. Pare’e mencerminkan kesederhanaan namun sarat nilai seni masyarakat pedalaman.",
    foto: "",
    latitude: -0.8906,
    longitude: 119.8732,
  },
  {
    provinsi: "Sulawesi Tengah",
    kategori: "Wisata",
    nama: "Danau Poso",
    deskripsi:
      "Danau tertua ketiga di Indonesia dengan air jernih kebiruan, terletak di pegunungan. Dikelilingi desa adat dan kebun cengkeh. Tempat ini cocok untuk ekowisata, rekreasi, dan mengenal budaya suku Pamona yang masih terjaga.",
    foto: "",
    latitude: -2.062,
    longitude: 120.7303,
  },
  {
    provinsi: "Sulawesi Tengah",
    kategori: "Wisata",
    nama: "Lembah Bada (Lore Lindu)",
    deskripsi:
      "Lembah arkeologis yang menyimpan patung megalitikum berusia ribuan tahun. Terletak di Taman Nasional Lore Lindu. Tempat ini menyimpan jejak sejarah prasejarah dan menjadi tujuan wisata budaya dan edukasi yang mendunia.",
    foto: "",
    latitude: -1.8239,
    longitude: 120.2514,
  },
  {
    provinsi: "Sulawesi Selatan",
    kategori: "Makanan",
    nama: "Coto Makassar",
    deskripsi:
      "Sup daging sapi berkuah kental berbumbu kacang, bawang putih, lengkuas, dan ketumbar. Disajikan bersama ketupat dan sambal tauco. Hidangan legendaris ini berasal dari Makassar dan menjadi sajian penting dalam jamuan adat serta keseharian masyarakat.",
    foto: "",
    latitude: -5.1477,
    longitude: 119.4327,
  },
  {
    provinsi: "Sulawesi Selatan",
    kategori: "Makanan",
    nama: "Pallubasa",
    deskripsi:
      "Mirip Coto, namun menggunakan parutan kelapa sangrai dalam kuahnya. Daging sapi atau jeroan direbus lama agar empuk. Disajikan dengan nasi dan telur mentah yang dicampur dalam kuah panas. Khas Makassar, Pallubasa punya cita rasa lebih gurih dan dalam.",
    foto: "",
    latitude: -5.1477,
    longitude: 119.4327,
  },
  {
    provinsi: "Sulawesi Selatan",
    kategori: "Budaya",
    nama: "Upacara Rambu Solo'",
    deskripsi:
      "Ritual pemakaman suku Toraja yang berlangsung berhari-hari. Melibatkan penyembelihan kerbau, tarian adat, prosesi adat, dan penguburan di tebing atau gua. Upacara ini menjadi bentuk penghormatan terakhir sekaligus simbol status sosial keluarga almarhum.",
    foto: "",
    latitude: -2.9734,
    longitude: 119.8978,
  },
  {
    provinsi: "Sulawesi Selatan",
    kategori: "Budaya",
    nama: "Ma’giri",
    deskripsi:
      "Tradisi Bugis yang dilakukan oleh seorang Bissu (pendeta androgini) untuk memanggil roh leluhur. Dilakukan dengan tarian trans dan tusukan benda tajam. Ma’giri merupakan bagian dari kepercayaan Bugis kuno dan sakral dalam prosesi spiritual.",
    foto: "",
    latitude: -5.1477,
    longitude: 119.4327,
  },
  {
    provinsi: "Sulawesi Selatan",
    kategori: "Alat Musik",
    nama: "Keso-Keso",
    deskripsi:
      "Alat musik gesek dari Sulawesi Selatan yang mirip rebab, terbuat dari kayu dan kulit hewan. Memiliki dua senar dan menghasilkan nada sendu. Keso-keso biasa dimainkan untuk mengiringi tembang Bugis dan pertunjukan kesenian adat.",
    foto: "",
    latitude: -5.1477,
    longitude: 119.4327,
  },
  {
    provinsi: "Sulawesi Selatan",
    kategori: "Alat Musik",
    nama: "Jalappa",
    deskripsi:
      "Alat musik pukul dari logam berbentuk seperti simbal kecil. Digunakan dalam upacara adat dan iringan tari tradisional. Dentingannya kuat dan tajam, menandai momen penting dalam prosesi budaya atau pertunjukan Bugis-Makassar.",
    foto: "",
    latitude: -5.1477,
    longitude: 119.4327,
  },
  {
    provinsi: "Sulawesi Selatan",
    kategori: "Wisata",
    nama: "Tana Toraja",
    deskripsi:
      "Wilayah pegunungan dengan tradisi kematian yang unik. Wisatawan dapat melihat rumah tongkonan, makam batu, dan upacara Rambu Solo’. Toraja juga dikenal akan pemandangan alamnya yang indah dan kaya warisan budaya.",
    foto: "",
    latitude: -2.9734,
    longitude: 119.8978,
  },
  {
    provinsi: "Sulawesi Selatan",
    kategori: "Wisata",
    nama: "Pantai Bira",
    deskripsi:
      "Pantai berpasir putih di Kabupaten Bulukumba. Airnya jernih biru kehijauan, cocok untuk berenang, snorkeling, dan diving. Pantai ini juga terkenal sebagai tempat pembuatan perahu pinisi — warisan budaya maritim Bugis yang mendunia.",
    foto: "",
    latitude: -5.617,
    longitude: 120.37,
  },
  {
    provinsi: "Sulawesi Tenggara",
    kategori: "Makanan",
    nama: "Sinonggi",
    deskripsi:
      "Makanan pokok khas suku Tolaki, terbuat dari tepung sagu yang dimasak kental dan kenyal. Disantap bersama sayur dan ikan kuah asam pedas. Sinonggi menggambarkan ketergantungan masyarakat pesisir terhadap sagu sebagai sumber karbohidrat utama.",
    foto: "",
    latitude: -3.9961,
    longitude: 122.5181,
  },
  {
    provinsi: "Sulawesi Tenggara",
    kategori: "Makanan",
    nama: "Kabuto",
    deskripsi:
      "Olahan singkong parut yang difermentasi lalu dikukus, disajikan dengan kelapa parut dan gula merah. Makanan ini dulunya pengganti nasi saat paceklik. Kini menjadi camilan tradisional yang digemari di perkampungan masyarakat Buton dan sekitarnya.",
    foto: "",
    latitude: -4.6667,
    longitude: 122.6333,
  },
  {
    provinsi: "Sulawesi Tenggara",
    kategori: "Budaya",
    nama: "Tari Lulo",
    deskripsi:
      "Tarian pergaulan dari suku Tolaki. Penari bergandengan tangan membentuk lingkaran dan menari mengikuti irama gendang. Tarian ini menjadi simbol persatuan dan sering dimainkan dalam pesta rakyat atau penyambutan tamu kehormatan.",
    foto: "",
    latitude: -3.9961,
    longitude: 122.5181,
  },
  {
    provinsi: "Sulawesi Tenggara",
    kategori: "Budaya",
    nama: "Karia’a",
    deskripsi:
      "Upacara adat peralihan gadis menjadi dewasa, dilakukan oleh suku Tolaki. Diiringi doa, tari-tarian, dan pemberian petuah. Karia’a merupakan momen penting dalam kehidupan perempuan, melambangkan kesiapan memasuki kehidupan rumah tangga.",
    foto: "",
    latitude: -3.9961,
    longitude: 122.5181,
  },
  {
    provinsi: "Sulawesi Tenggara",
    kategori: "Alat Musik",
    nama: "Gambus Buton",
    deskripsi:
      "Alat musik petik dari Buton, bentuknya mirip gitar dan dipengaruhi budaya Timur Tengah. Digunakan untuk mengiringi syair keagamaan, zikir, atau pertunjukan tari tradisional. Suaranya lembut dan religius, sangat khas dalam kesenian Buton.",
    foto: "",
    latitude: -4.6667,
    longitude: 122.6333,
  },
  {
    provinsi: "Sulawesi Tenggara",
    kategori: "Alat Musik",
    nama: "Ore-Ore",
    deskripsi:
      "Alat musik tiup tradisional suku Tolaki dari bambu kecil. Menghasilkan nada tinggi dan dimainkan dalam acara adat atau hiburan rakyat. Ore-ore biasa dimainkan bersama alat musik ritmis lainnya dalam pertunjukan kesenian lokal Sulawesi Tenggara.",
    foto: "",
    latitude: -3.9961,
    longitude: 122.5181,
  },
  {
    provinsi: "Sulawesi Tenggara",
    kategori: "Wisata",
    nama: "Wakatobi",
    deskripsi:
      "Taman Nasional laut terkenal dengan keindahan terumbu karang dan biota lautnya. Tempat ini menjadi surga bagi penyelam dari seluruh dunia dan simbol konservasi laut Indonesia. Terdiri dari empat pulau utama: Wangi-Wangi, Kaledupa, Tomia, Binongko.",
    foto: "",
    latitude: -5.8333,
    longitude: 123.5,
  },
  {
    provinsi: "Sulawesi Tenggara",
    kategori: "Wisata",
    nama: "Benteng Keraton Buton",
    deskripsi:
      "Benteng batu terbesar di dunia menurut UNESCO. Terletak di Kota Baubau, dulunya pusat pemerintahan Kesultanan Buton. Selain panorama laut yang indah, tempat ini menyimpan sejarah kerajaan Islam lokal dan budaya Buton yang masih lestari.",
    foto: "",
    latitude: -5.4623,
    longitude: 122.6074,
  },
  {
    provinsi: "Sulawesi Barat",
    kategori: "Makanan",
    nama: "Jepa",
    deskripsi:
      "Makanan pokok masyarakat Mandar yang terbuat dari singkong parut yang dipipihkan lalu dipanggang. Disajikan bersama ikan teri goreng atau kuah ikan. Jepa mencerminkan kearifan lokal dalam mengolah hasil bumi sebagai sumber energi sehari-hari.",
    foto: "",
    latitude: -2.714,
    longitude: 118.9142,
  },
  {
    provinsi: "Sulawesi Barat",
    kategori: "Makanan",
    nama: "Bau Peapi",
    deskripsi:
      "Masakan ikan khas Mandar yang dimasak dalam kuah kuning asam pedas. Menggunakan ikan laut segar, kunyit, serai, dan tomat. Rasanya segar dan kaya rempah, sering disajikan dalam acara adat dan perjamuan keluarga besar.",
    foto: "",
    latitude: -2.714,
    longitude: 118.9142,
  },
  {
    provinsi: "Sulawesi Barat",
    kategori: "Budaya",
    nama: "Sayyang Pattuqduq",
    deskripsi:
      "Tradisi menunggang kuda yang dihias meriah oleh anak yang telah khatam Al-Qur'an. Diiringi musik rebana dan arak-arakan keliling kampung. Tradisi ini menggabungkan nilai Islam dan budaya Mandar dalam bentuk penghormatan dan syukur.",
    foto: "",
    latitude: -2.714,
    longitude: 118.9142,
  },
  {
    provinsi: "Sulawesi Barat",
    kategori: "Budaya",
    nama: "Passandeq",
    deskripsi:
      "Tradisi pelayaran nelayan Mandar menggunakan perahu sandeq untuk menangkap ikan di laut lepas. Passandeq juga menjadi simbol ketangguhan, keberanian, dan kecintaan masyarakat Mandar terhadap laut. Kini dilombakan dalam Festival Sandeq tahunan.",
    foto: "",
    latitude: -2.714,
    longitude: 118.9142,
  },
  {
    provinsi: "Sulawesi Barat",
    kategori: "Alat Musik",
    nama: "Gongga Lima",
    deskripsi:
      "Alat musik pukul tradisional suku Mandar yang terdiri dari lima gong kecil. Digunakan dalam upacara adat dan pertunjukan tari. Suaranya harmonis dan ritmis, mencerminkan kesatuan dan kekompakan dalam budaya musik tradisional Mandar.",
    foto: "",
    latitude: -2.714,
    longitude: 118.9142,
  },
  {
    provinsi: "Sulawesi Barat",
    kategori: "Alat Musik",
    nama: "Pakkacaping",
    deskripsi:
      "Alat musik petik dari Mandar, dimainkan untuk mengiringi syair atau puisi adat. Bentuknya mirip kecapi, terbuat dari kayu dengan senar logam. Permainannya biasanya bersifat solo, menggambarkan refleksi, cinta, dan kisah kehidupan.",
    foto: "",
    latitude: -2.714,
    longitude: 118.9142,
  },
  {
    provinsi: "Sulawesi Barat",
    kategori: "Wisata",
    nama: "Pantai Dato’ Majene",
    deskripsi:
      "Pantai berpasir putih dengan batu karang besar yang menjorong ke laut. Cocok untuk berenang, memancing, atau sekadar menikmati matahari terbenam. Lokasinya dekat pusat kota, menjadikannya destinasi favorit warga lokal dan wisatawan.",
    foto: "",
    latitude: -3.5385,
    longitude: 118.9409,
  },
  {
    provinsi: "Sulawesi Barat",
    kategori: "Wisata",
    nama: "Air Terjun Limbong Kamandang",
    deskripsi:
      "Terletak di Mamasa, air terjun ini berada di kawasan pegunungan yang sejuk dan hijau. Dikelilingi hutan pinus dan jalur trekking. Tempat ini menjadi destinasi alam sekaligus lokasi menenangkan untuk menikmati keindahan Sulawesi Barat.",
    foto: "",
    latitude: -2.9698,
    longitude: 119.38,
  },
  {
    provinsi: "Maluku",
    kategori: "Makanan",
    nama: "Papeda",
    deskripsi:
      "Makanan pokok dari sagu yang dimasak hingga menjadi bubur kental dan lengket. Disantap dengan ikan kuah kuning dan sayuran. Papeda mencerminkan tradisi pangan masyarakat pesisir yang menggantungkan hidup pada hasil laut dan sagu.",
    foto: "",
    latitude: -3.65,
    longitude: 128.1667,
  },
  {
    provinsi: "Maluku",
    kategori: "Makanan",
    nama: "Ikan Asar",
    deskripsi:
      "Ikan cakalang atau tongkol yang diasap di atas bara api hingga kering. Aromanya khas dan tahan lama. Biasanya disajikan dengan sambal colo-colo dan nasi. Hidangan ini mencerminkan keahlian nelayan Maluku dalam mengawetkan hasil tangkapan laut.",
    foto: "",
    latitude: -3.65,
    longitude: 128.1667,
  },
  {
    provinsi: "Maluku",
    kategori: "Budaya",
    nama: "Pela Gandong",
    deskripsi:
      "Tradisi persaudaraan antardesa di Maluku yang berbeda agama atau suku. Mengikat dua kampung sebagai saudara kandung secara adat. Pela Gandong menjadi simbol toleransi dan persatuan, serta diwariskan turun-temurun melalui upacara dan perjanjian sakral.",
    foto: "",
    latitude: -3.65,
    longitude: 128.1667,
  },
  {
    provinsi: "Maluku",
    kategori: "Budaya",
    nama: "Cakalele",
    deskripsi:
      "Tari perang tradisional Maluku yang dibawakan oleh pria dengan pakaian perang, parang, dan perisai. Menggambarkan keberanian dan semangat juang. Tari ini ditampilkan saat upacara adat atau penyambutan tamu sebagai bentuk kebanggaan identitas budaya.",
    foto: "",
    latitude: -3.65,
    longitude: 128.1667,
  },
  {
    provinsi: "Maluku",
    kategori: "Alat Musik",
    nama: "Tifa",
    deskripsi:
      "Alat musik pukul berbentuk tabung kayu berlapis kulit. Umumnya dimainkan untuk mengiringi tari Cakalele atau upacara adat. Bunyi tifa menghentak kuat dan ritmis, digunakan untuk menyatukan semangat dalam komunitas atau saat acara sakral.",
    foto: "",
    latitude: -3.65,
    longitude: 128.1667,
  },
  {
    provinsi: "Maluku",
    kategori: "Alat Musik",
    nama: "Totobuang",
    deskripsi:
      "Sekelompok gong kecil yang disusun horizontal dan dipukul dengan stik kayu. Digunakan dalam orkes tradisional Maluku untuk mengiringi tarian dan lagu daerah. Totobuang mencerminkan pengaruh budaya Melayu dan kekayaan musikal lokal Maluku.",
    foto: "",
    latitude: -3.65,
    longitude: 128.1667,
  },
  {
    provinsi: "Maluku",
    kategori: "Wisata",
    nama: "Pantai Ora",
    deskripsi:
      "Terletak di Pulau Seram, pantai ini terkenal dengan air laut jernih, pasir putih, dan bungalow terapung. Cocok untuk snorkeling, diving, atau sekadar bersantai. Ora sering dijuluki 'Maldives-nya Indonesia' karena keindahannya yang luar biasa.",
    foto: "",
    latitude: -2.9926,
    longitude: 129.2133,
  },
  {
    provinsi: "Maluku",
    kategori: "Wisata",
    nama: "Benteng Amsterdam",
    deskripsi:
      "Peninggalan kolonial Belanda di Ambon yang dibangun pada abad ke-17. Benteng ini menjadi saksi sejarah rempah-rempah di Maluku. Dari atas benteng, pengunjung dapat melihat panorama Teluk Ambon dan mengenang masa penjajahan Eropa di Indonesia.",
    foto: "",
    latitude: -3.6267,
    longitude: 128.1693,
  },
  {
    provinsi: "Maluku Utara",
    kategori: "Makanan",
    nama: "Gohu Ikan",
    deskripsi:
      "Sering disebut 'sashimi-nya Ternate,' gohu ikan adalah potongan ikan mentah (biasanya tuna), dibumbui perasan jeruk, bawang merah, cabe rawit, dan minyak kelapa panas. Rasanya segar dan pedas, biasa disajikan sebagai hidangan pembuka khas pesisir.",
    foto: "",
    latitude: 0.7693,
    longitude: 127.3653,
  },
  {
    provinsi: "Maluku Utara",
    kategori: "Makanan",
    nama: "Papeda Kuah Kuning",
    deskripsi:
      "Papeda disajikan dengan ikan tongkol atau mubara yang dimasak dalam kuah kuning berbumbu kunyit dan rempah. Teksturnya kenyal, berpadu dengan rasa gurih dan asam segar. Makanan ini mencerminkan budaya pangan berbasis sagu dan laut.",
    foto: "",
    latitude: 0.7693,
    longitude: 127.3653,
  },
  {
    provinsi: "Maluku Utara",
    kategori: "Budaya",
    nama: "Fagogoru",
    deskripsi:
      "Filosofi hidup orang Maluku Utara, khususnya suku Tobelo-Galela, tentang kerja keras, persatuan, dan hormat pada leluhur. Nilai ini diwujudkan dalam kehidupan sehari-hari, seperti gotong royong, penyelesaian sengketa, dan upacara adat komunitas.",
    foto: "",
    latitude: 0.7693,
    longitude: 127.3653,
  },
  {
    provinsi: "Maluku Utara",
    kategori: "Budaya",
    nama: "Tari Soya-Soya",
    deskripsi:
      "Tarian perang tradisional dari Ternate yang menggambarkan semangat kepahlawanan rakyat melawan penjajah. Dibawakan oleh pria dengan pedang dan perisai, diiringi musik tifa dan gong. Sering ditampilkan dalam penyambutan dan festival budaya daerah.",
    foto: "",
    latitude: 0.7693,
    longitude: 127.3653,
  },
  {
    provinsi: "Maluku Utara",
    kategori: "Alat Musik",
    nama: "Tifa Maluku Utara",
    deskripsi:
      "Tifa di Maluku Utara memiliki bunyi khas yang digunakan untuk mengiringi tari Soya-Soya dan upacara adat. Dibuat dari kayu dan kulit rusa, tifa menciptakan ritme yang membangkitkan semangat dan kohesi sosial dalam komunitas adat.",
    foto: "",
    latitude: 0.7693,
    longitude: 127.3653,
  },
  {
    provinsi: "Maluku Utara",
    kategori: "Alat Musik",
    nama: "Nafiri",
    deskripsi:
      "Alat musik tiup dari kerang laut besar yang ditiup menghasilkan suara keras dan bergema. Digunakan sebagai alat komunikasi atau penanda waktu dalam kegiatan adat atau kerajaan. Nafiri memiliki makna spiritual dan status simbol dalam masyarakat.",
    foto: "",
    latitude: 0.7693,
    longitude: 127.3653,
  },
  {
    provinsi: "Maluku Utara",
    kategori: "Wisata",
    nama: "Kepulauan Morotai",
    deskripsi:
      "Pulau bersejarah yang menjadi pangkalan militer Sekutu saat Perang Dunia II. Kini terkenal dengan pantai pasir putih, diving spot, dan situs sejarah. Morotai adalah surga tropis yang menyatukan keindahan alam dan peninggalan sejarah global.",
    foto: "",
    latitude: 2.25,
    longitude: 128.5,
  },
  {
    provinsi: "Maluku Utara",
    kategori: "Wisata",
    nama: "Benteng Oranje",
    deskripsi:
      "Benteng peninggalan Belanda di Ternate yang dibangun pada awal abad ke-17. Menjadi pusat pemerintahan VOC di Maluku Utara. Kini difungsikan sebagai situs wisata sejarah dan museum yang menyimpan artefak rempah dan peninggalan kolonial.",
    foto: "",
    latitude: 0.7933,
    longitude: 127.3916,
  },
  {
    provinsi: "Papua Barat",
    kategori: "Makanan",
    nama: "Ikan Bakar Manokwari",
    deskripsi:
      "Ikan tongkol dibakar lalu disajikan dengan sambal khas dari cabai rawit, bawang merah, dan tomat mentah yang dihaluskan kasar. Rasanya pedas segar dan sangat populer di Manokwari. Cocok disantap bersama papeda atau nasi putih hangat.",
    foto: "",
    latitude: -0.8667,
    longitude: 134.0667,
  },
  {
    provinsi: "Papua Barat",
    kategori: "Makanan",
    nama: "Sagu Lempeng",
    deskripsi:
      "Makanan pokok masyarakat pesisir Papua Barat. Terbuat dari sagu yang dibakar menjadi lempengan padat, sering disantap dengan ikan kuah kuning. Teksturnya padat dan sedikit kenyal, mencerminkan pola makan masyarakat berbasis pangan lokal non-beras.",
    foto: "",
    latitude: -0.8667,
    longitude: 134.0667,
  },
  {
    provinsi: "Papua Barat",
    kategori: "Budaya",
    nama: "Tarian Salai",
    deskripsi:
      "Tarian tradisional suku Arfak yang menggambarkan kehidupan masyarakat, seperti berburu dan bercocok tanam. Ditampilkan dengan gerakan dinamis, busana dari daun dan bulu burung. Salai sering ditampilkan dalam acara adat dan penyambutan tamu resmi.",
    foto: "",
    latitude: -0.8667,
    longitude: 134.0667,
  },
  {
    provinsi: "Papua Barat",
    kategori: "Budaya",
    nama: "Upacara Injak Piring Arfak",
    deskripsi:
      "Ritual pernikahan suku Arfak, di mana mempelai wanita menginjak piring sebagai simbol kesiapan membangun rumah tangga. Diiringi tarian dan nyanyian adat, prosesi ini mencerminkan kepercayaan, nilai keluarga, dan kesakralan ikatan pernikahan adat.",
    foto: "",
    latitude: -0.8667,
    longitude: 134.0667,
  },
  {
    provinsi: "Papua Barat",
    kategori: "Alat Musik",
    nama: "Tifa Papua Barat",
    deskripsi:
      "Alat musik pukul berbentuk tabung dari kayu dan kulit rusa. Tifa dimainkan dalam upacara adat, tarian, dan pertunjukan budaya. Bunyi ritmisnya membangkitkan semangat kolektif dan menjadi simbol komunikasi spiritual dalam masyarakat Papua Barat.",
    foto: "",
    latitude: -0.8667,
    longitude: 134.0667,
  },
  {
    provinsi: "Papua Barat",
    kategori: "Alat Musik",
    nama: "Triton",
    deskripsi:
      "Alat musik tiup dari cangkang kerang laut besar. Digunakan untuk memanggil warga, memulai upacara, atau sebagai simbol penghubung manusia dengan alam. Triton menggambarkan kedekatan masyarakat pesisir dengan laut dan lingkungan sekitarnya.",
    foto: "",
    latitude: -0.8667,
    longitude: 134.0667,
  },
  {
    provinsi: "Papua Barat",
    kategori: "Wisata",
    nama: "Raja Ampat",
    deskripsi:
      "Gugusan pulau di Papua Barat yang dikenal sebagai surga bawah laut dunia. Memiliki ratusan spot diving dan snorkeling, biota laut eksotik, serta pemandangan alam luar biasa. Raja Ampat adalah ikon wisata kelas dunia Indonesia bagian timur.",
    foto: "",
    latitude: -0.5833,
    longitude: 130.8333,
  },
  {
    provinsi: "Papua Barat",
    kategori: "Wisata",
    nama: "Pegunungan Arfak",
    deskripsi:
      "Terletak di Manokwari, pegunungan ini memiliki hutan hujan, danau, dan budaya lokal suku Arfak. Cocok untuk ekowisata, trekking, dan pengamatan burung cenderawasih. Arfak juga menyimpan rumah adat kaki seribu yang unik dan ramah lingkungan.",
    foto: "",
    latitude: -0.9167,
    longitude: 134.05,
  },
  {
    provinsi: "Papua",
    kategori: "Makanan",
    nama: "Papeda dengan ikan kuah kuning",
    deskripsi:
      "Papeda dari sagu disajikan dengan ikan kuah kuning berbumbu kunyit, jeruk nipis, dan cabai. Kombinasi tekstur kenyal dan cita rasa asam-gurih mencerminkan khasnya kuliner pesisir Papua.",
    foto: "",
    latitude: -2.5744,
    longitude: 140.707,
  },
  {
    provinsi: "Papua",
    kategori: "Makanan",
    nama: "Udang selingkuh",
    deskripsi:
      "Udang air tawar khas Wamena, dipanggang sederhana dengan sedikit garam. Rasanya manis alami, kaya protein, disajikan hangat dengan nasi atau sambal colo‑colo khas Papua tengah.",
    foto: "",
    latitude: -4.095,
    longitude: 138.8752,
  },
  {
    provinsi: "Papua",
    kategori: "Budaya",
    nama: "Tradisi Ararem",
    deskripsi:
      "Prosesi pemberian mas kawin masyarakat Biak berupa hadiah simbolis. Diiringi doa serta tari adat, Ararem menegaskan solidaritas keluarga dan nilai budaya pernikahan di Papua.",
    foto: "",
    latitude: -0.9,
    longitude: 135.8,
  },
  {
    provinsi: "Papua",
    kategori: "Budaya",
    nama: "Festival Danau Sentani",
    deskripsi:
      "Festival tahunan di sekitar Danau Sentani, menampilkan parade perahu adat, tarian, musik, dan ritual masyarakat lokal sebagai bentuk syukur dan pelestarian budaya.",
    foto: "",
    latitude: -2.5975,
    longitude: 140.4075,
  },
  {
    provinsi: "Papua",
    kategori: "Alat Musik",
    nama: "Tifa Papua",
    deskripsi:
      "Alat musik pukul dari kayu keras dan kulit hewan, digunakan dalam upacara adat, sambutan tamu, dan tarian ritual, seperti Cenderawasih dan Yospan.",
    foto: "",
    latitude: -2.5744,
    longitude: 140.707,
  },
  {
    provinsi: "Papua",
    kategori: "Alat Musik",
    nama: "Triton",
    deskripsi:
      "Kerang besar yang ditiup menghasilkan suara gema. Awalnya alat penanda atau komunikasi adat, kini juga berfungsi sebagai alat musik simbolik masyarakat pesisir Papua.",
    foto: "",
    latitude: -2.5744,
    longitude: 140.707,
  },
  {
    provinsi: "Papua",
    kategori: "Wisata",
    nama: "Teluk Cenderawasih",
    deskripsi:
      "Taman nasional laut di perbatasan Papua Tengah–Papua, habitat hiu paus dan terumbu karang, destinasi selam dengan keanekaragaman laut eksotik.",
    foto: "",
    latitude: -2.0,
    longitude: 135.0,
  },
  {
    provinsi: "Papua",
    kategori: "Wisata",
    nama: "Gunung Puncak Jaya",
    deskripsi:
      "Puncak tertinggi di Indonesia (4.884 m), berada di jajaran Jayawijaya, terkenal bagi pendaki dunia dan simbol kebanggaan alam Papua.",
    foto: "",
    latitude: -4.0833,
    longitude: 137.1667,
  },
  {
    provinsi: "Papua Tengah",
    kategori: "Makanan",
    nama: "Papeda dan Ikan Kuah Kuning",
    deskripsi:
      "Papeda terbuat dari sagu yang dimasak menjadi bubur kenyal. Di Papua Tengah, makanan ini disantap dengan ikan mujair atau nila berkuah kuning, dimasak bersama kunyit, serai, dan jeruk nipis. Rasanya gurih dan menyegarkan.",
    foto: "",
    latitude: -3.9961,
    longitude: 136.3333,
  },
  {
    provinsi: "Papua Tengah",
    kategori: "Makanan",
    nama: "Sagu Bakar (Sagu Bol)",
    deskripsi:
      "Sagu digulung menjadi bola kecil lalu dibakar atau dipanggang. Umumnya disantap bersama kelapa parut, sayur daun ubi, atau ikan asap. Makanan ini praktis dibawa bepergian dan menjadi sumber energi utama masyarakat pedalaman Papua Tengah.",
    foto: "",
    latitude: -3.9961,
    longitude: 136.3333,
  },
  {
    provinsi: "Papua Tengah",
    kategori: "Budaya",
    nama: "Barapen (Bakar Batu)",
    deskripsi:
      "Tradisi memasak bersama di tanah menggunakan batu panas. Makanan seperti babi, ubi, dan sayur dimasak dalam lubang tanah. Barapen adalah simbol kebersamaan, syukur, dan penyambutan tamu dalam upacara adat suku Dani dan sekitarnya.",
    foto: "",
    latitude: -4.095,
    longitude: 138.8752,
  },
  {
    provinsi: "Papua Tengah",
    kategori: "Budaya",
    nama: "Festival Lembah Baliem",
    deskripsi:
      "Digelar di Wamena setiap Agustus, festival ini menampilkan simulasi perang antar suku, tarian tradisional, dan lomba karapan babi. Tujuannya melestarikan budaya asli suku Dani, Lani, dan Yali serta menarik wisatawan dari seluruh dunia.",
    foto: "",
    latitude: -4.095,
    longitude: 138.8752,
  },
  {
    provinsi: "Papua Tengah",
    kategori: "Alat Musik",
    nama: "Tifa Papua",
    deskripsi:
      "Tifa berbentuk tabung kayu berlapis kulit hewan, dimainkan dengan tangan. Digunakan untuk mengiringi tarian perang, upacara adat, dan penyambutan tamu. Tifa menciptakan ritme kuat yang membangkitkan semangat dan kekompakan dalam komunitas adat.",
    foto: "",
    latitude: -3.9961,
    longitude: 136.3333,
  },
  {
    provinsi: "Papua Tengah",
    kategori: "Alat Musik",
    nama: "Suling Bambu",
    deskripsi:
      "Alat musik tiup sederhana dari bambu, menghasilkan nada lembut dan melodius. Digunakan dalam ritual adat, lagu rakyat, dan pertunjukan budaya. Suling bambu mencerminkan kedekatan masyarakat Papua Tengah dengan alam dan kehidupan spiritual.",
    foto: "",
    latitude: -3.9961,
    longitude: 136.3333,
  },
  {
    provinsi: "Papua Tengah",
    kategori: "Wisata",
    nama: "Lembah Baliem",
    deskripsi:
      "Terletak di Wamena, lembah ini dihuni oleh suku Dani dan dikelilingi pegunungan. Dikenal karena budaya tradisionalnya yang masih lestari, seperti rumah honai, pakaian koteka, dan sistem pertanian khas. Cocok untuk wisata budaya dan alam.",
    foto: "",
    latitude: -4.095,
    longitude: 138.8752,
  },
  {
    provinsi: "Papua Tengah",
    kategori: "Wisata",
    nama: "Pegunungan Jayawijaya",
    deskripsi:
      "Pegunungan tertinggi di Indonesia dengan Puncak Jaya yang diselimuti es abadi. Dikenal di kalangan pendaki dunia, kawasan ini juga menjadi rumah bagi flora-fauna endemik dan suku-suku asli yang hidup harmonis dengan alam sekitar.",
    foto: "",
    latitude: -4.0833,
    longitude: 137.1667,
  },
  {
    provinsi: "Papua Pegunungan",
    kategori: "Makanan",
    nama: "Bakar Batu (Barapen)",
    deskripsi:
      "Makanan hasil tradisi memasak di lubang tanah dengan batu panas. Ubi, sayur, dan daging babi dimasak bersama. Bakar batu dilakukan dalam perayaan adat sebagai bentuk syukur, kebersamaan, dan penyambutan tamu penting.",
    foto: "",
    latitude: -4.095,
    longitude: 138.8752,
  },
  {
    provinsi: "Papua Pegunungan",
    kategori: "Makanan",
    nama: "Udang Selingkuh",
    deskripsi:
      "Udang air tawar besar yang memiliki capit seperti kepiting, khas wilayah pegunungan Wamena. Biasanya direbus atau dibakar tanpa banyak bumbu. Rasanya manis dan gurih, disajikan dengan sambal atau sayur lokal dalam acara adat atau jamuan.",
    foto: "",
    latitude: -4.095,
    longitude: 138.8752,
  },
  {
    provinsi: "Papua Pegunungan",
    kategori: "Budaya",
    nama: "Rumah Honai",
    deskripsi:
      "Rumah tradisional suku Dani, berbentuk bundar dan beratap ilalang, tahan dingin pegunungan. Digunakan untuk tidur, berkumpul, atau menyimpan barang berharga. Honai mencerminkan nilai kebersamaan dan filosofi hidup masyarakat Papua Pegunungan.",
    foto: "",
    latitude: -4.095,
    longitude: 138.8752,
  },
  {
    provinsi: "Papua Pegunungan",
    kategori: "Budaya",
    nama: "Festival Budaya Lembah Baliem",
    deskripsi:
      "Perayaan budaya tahunan yang menampilkan perang-perangan adat, tari-tarian suku Dani, Lani, dan Yali, serta lomba tradisional seperti panahan dan karapan babi. Festival ini menarik wisatawan dan menjadi sarana pelestarian identitas lokal.",
    foto: "",
    latitude: -4.095,
    longitude: 138.8752,
  },
  {
    provinsi: "Papua Pegunungan",
    kategori: "Alat Musik",
    nama: "Tifa Pegunungan",
    deskripsi:
      "Tifa khas wilayah pegunungan memiliki ukuran lebih kecil dan ringan, terbuat dari kayu lokal dan kulit binatang. Digunakan dalam tari perang dan upacara adat, menciptakan irama kuat yang mengiringi gerakan dan semangat kolektif.",
    foto: "",
    latitude: -4.095,
    longitude: 138.8752,
  },
  {
    provinsi: "Papua Pegunungan",
    kategori: "Alat Musik",
    nama: "Pikon",
    deskripsi:
      "Alat musik tiup dari bambu kecil, dimainkan dengan teknik getaran mulut. Suaranya mirip siulan, digunakan untuk hiburan pribadi, pengiring nyanyian, atau saat berburu. Pikon mencerminkan kreativitas musik masyarakat pedalaman Papua Pegunungan.",
    foto: "",
    latitude: -4.095,
    longitude: 138.8752,
  },
  {
    provinsi: "Papua Pegunungan",
    kategori: "Wisata",
    nama: "Lembah Baliem",
    deskripsi:
      "Dikelilingi pegunungan tinggi, lembah ini dihuni suku Dani yang masih memegang tradisi nenek moyang. Wisatawan dapat melihat kehidupan adat, rumah honai, serta sistem pertanian khas pegunungan yang unik dan menarik secara budaya.",
    foto: "",
    latitude: -4.095,
    longitude: 138.8752,
  },
  {
    provinsi: "Papua Pegunungan",
    kategori: "Wisata",
    nama: "Danau Habema",
    deskripsi:
      "Danau tertinggi di Indonesia, berada di kawasan Pegunungan Jayawijaya. Dikelilingi padang rumput dan kabut tipis, danau ini memiliki keindahan mistis. Merupakan tempat sakral bagi suku Dani dan lokasi trekking favorit para pendaki.",
    foto: "",
    latitude: -4.398,
    longitude: 138.7456,
  },
  {
    provinsi: "Papua Selatan",
    kategori: "Makanan",
    nama: "Sagu Lempeng",
    deskripsi:
      "Sagu dibakar menjadi lempengan padat dan kering, disantap bersama ikan asap, sambal, atau kelapa parut. Makanan pokok masyarakat pesisir dan pedalaman Papua Selatan ini mencerminkan kearifan lokal dalam mengolah sagu sebagai sumber utama karbohidrat.",
    foto: "",
    latitude: -8.4608,
    longitude: 140.3377,
  },
  {
    provinsi: "Papua Selatan",
    kategori: "Makanan",
    nama: "Ikan Asap Kuah",
    deskripsi:
      "Ikan hasil tangkapan sungai seperti ikan gabus diasapi, lalu dimasak dalam kuah rempah ringan. Disajikan bersama papeda atau sagu bakar. Hidangan ini umum dijumpai di Merauke dan mencerminkan pengaruh budaya Marind dan perairan sekitar.",
    foto: "",
    latitude: -8.4608,
    longitude: 140.3377,
  },
  {
    provinsi: "Papua Selatan",
    kategori: "Budaya",
    nama: "Tradisi Tifa-Tifa Marind",
    deskripsi:
      "Tradisi berkumpulnya warga Marind sambil memainkan tifa, bernyanyi, dan berdansa dalam lingkaran. Tifa-Tifa menjadi bentuk syukur, ekspresi sukacita, serta sarana sosial yang mempererat hubungan antaranggota suku dan generasi muda.",
    foto: "",
    latitude: -8.4608,
    longitude: 140.3377,
  },
  {
    provinsi: "Papua Selatan",
    kategori: "Budaya",
    nama: "Upacara Bakar Batu Marind",
    deskripsi:
      "Seperti daerah pegunungan, masyarakat Marind di Papua Selatan juga memiliki tradisi bakar batu. Biasanya dilakukan saat penyambutan tamu, pernikahan, atau panen. Upacara ini menjadi simbol berbagi, kehormatan, dan kerjasama komunitas.",
    foto: "",
    latitude: -8.4608,
    longitude: 140.3377,
  },
  {
    provinsi: "Papua Selatan",
    kategori: "Alat Musik",
    nama: "Tifa Marind",
    deskripsi:
      "Alat musik pukul dari kayu dan kulit binatang, dimainkan untuk mengiringi tarian dan nyanyian adat. Bentuknya panjang dan ramping, menghasilkan suara ritmis kuat yang menciptakan suasana semangat saat upacara dan pertemuan adat.",
    foto: "",
    latitude: -8.4608,
    longitude: 140.3377,
  },
  {
    provinsi: "Papua Selatan",
    kategori: "Alat Musik",
    nama: "Karinding Papua (Serupa Pikon)",
    deskripsi:
      "Alat musik tiup mini dari bambu tipis. Menghasilkan suara mendesis yang dimainkan untuk hiburan pribadi atau dalam ritual spiritual. Meski sederhana, alat ini sarat makna dan sering digunakan dalam komunikasi tradisional di pedalaman Papua Selatan.",
    foto: "",
    latitude: -8.4608,
    longitude: 140.3377,
  },
  {
    provinsi: "Papua Selatan",
    kategori: "Wisata",
    nama: "Taman Nasional Wasur",
    deskripsi:
      "Terletak di Merauke, dikenal sebagai 'Serengeti-nya Papua.' Memiliki padang rumput luas, rawa, dan hutan dataran rendah. Menjadi habitat burung migran, kanguru pohon, dan buaya. Cocok untuk ekowisata dan pengamatan satwa langka.",
    foto: "",
    latitude: -8.65,
    longitude: 140.65,
  },
  {
    provinsi: "Papua Selatan",
    kategori: "Wisata",
    nama: "Pantai Lampu Satu",
    deskripsi:
      "Pantai berpasir putih di Merauke dengan mercusuar peninggalan Belanda. Menjadi tempat favorit warga lokal untuk menikmati matahari terbenam. Pantai ini juga menjadi simbol ujung paling timur Indonesia dan lokasi perayaan nasional tahunan.",
    foto: "",
    latitude: -8.5083,
    longitude: 140.4079,
  },
  {
    provinsi: "Papua Barat Daya",
    kategori: "Makanan",
    nama: "Papeda Ikan Kuah Kuning",
    deskripsi:
      "Makanan utama dari sagu yang dimasak menjadi bubur lengket. Disajikan bersama ikan laut seperti tongkol atau mubara dalam kuah kuning berbumbu kunyit dan rempah. Papeda mencerminkan kebiasaan makan sehat masyarakat pesisir Sorong dan sekitarnya.",
    foto: "",
    latitude: -0.8833,
    longitude: 131.25,
  },
  {
    provinsi: "Papua Barat Daya",
    kategori: "Makanan",
    nama: "Ikan Bakar Sambal Colo-Colo",
    deskripsi:
      "Ikan segar hasil tangkapan laut Papua Barat Daya dibakar langsung di atas bara, disajikan dengan sambal colo-colo khas Maluku-Papua. Rasa gurih ikan berpadu dengan sambal asam pedas menciptakan kelezatan sederhana yang digemari masyarakat lokal.",
    foto: "",
    latitude: -0.8833,
    longitude: 131.25,
  },
  {
    provinsi: "Papua Barat Daya",
    kategori: "Budaya",
    nama: "Tradisi Noken Suku Moi",
    deskripsi:
      "Tas rajut dari kulit kayu yang digunakan untuk membawa hasil kebun, bayi, atau barang pribadi. Noken melambangkan ketekunan dan tanggung jawab perempuan Papua, serta telah diakui UNESCO sebagai warisan budaya takbenda dunia.",
    foto: "",
    latitude: -0.8833,
    longitude: 131.25,
  },
  {
    provinsi: "Papua Barat Daya",
    kategori: "Budaya",
    nama: "Tari Yospan",
    deskripsi:
      "Tarian pergaulan khas Tanah Papua yang mencampurkan gerak Yosim dan Pancar. Diiringi tifa dan lagu ceria, tarian ini mencerminkan semangat persahabatan, kebersamaan, dan sukacita generasi muda, sering ditampilkan dalam penyambutan tamu.",
    foto: "",
    latitude: -0.8833,
    longitude: 131.25,
  },
  {
    provinsi: "Papua Barat Daya",
    kategori: "Alat Musik",
    nama: "Tifa Sorong",
    deskripsi:
      "Alat musik pukul dari kayu berlubang, bagian atasnya ditutup kulit rusa. Dipukul untuk mengiringi tari Yospan, lagu adat, atau upacara penting. Suaranya tajam dan menghentak, jadi pusat ritme dalam pertunjukan seni Papua Barat Daya.",
    foto: "",
    latitude: -0.8833,
    longitude: 131.25,
  },
  {
    provinsi: "Papua Barat Daya",
    kategori: "Alat Musik",
    nama: "Suling Bambu Papua",
    deskripsi:
      "Suling dari bambu tipis, memiliki suara lembut dan mendayu. Digunakan untuk mengiringi nyanyian atau meditasi spiritual. Alat ini masih digunakan masyarakat pedalaman untuk berkomunikasi atau mengungkapkan perasaan melalui nada melankolis.",
    foto: "",
    latitude: -0.8833,
    longitude: 131.25,
  },
  {
    provinsi: "Papua Barat Daya",
    kategori: "Wisata",
    nama: "Kepulauan Raja Ampat (bagian Sorong)",
    deskripsi:
      "Meskipun sebagian besar masuk Papua Barat, sebagian wilayah Raja Ampat berada di Papua Barat Daya, seperti Kota Sorong sebagai pintu masuk utama. Dikenal dengan keanekaragaman laut tertinggi di dunia, jadi destinasi diving dan snorkeling populer.",
    foto: "",
    latitude: -0.47,
    longitude: 130.82,
  },
  {
    provinsi: "Papua Barat Daya",
    kategori: "Wisata",
    nama: "Taman Wisata Alam Sorong",
    deskripsi:
      "Kawasan hutan tropis di pinggiran Kota Sorong yang menyajikan keindahan alam, jalur trekking, dan habitat burung cenderawasih. Cocok untuk wisata edukatif dan pengenalan ekosistem hutan Papua kepada pengunjung lokal maupun mancanegara.",
    foto: "",
    latitude: -0.8833,
    longitude: 131.25,
  },
];

export default allCulture;
