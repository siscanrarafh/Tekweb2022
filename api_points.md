``` 
<!--  Tabel Users -->

GET: /users

data: [
{
"Id": "1",
"Nama": "Sisca Nur Arafah Febriyanti",
"keterangan": "Mahasiswi | Sistem Informasi",
"Ig_url": "https://www.instagram.com/sisca.nrarafh/",
"Github_url": "https://github.com/siscanrarafh",
"Avatar_url": "https://siscanaf.my.id/img/sisca.jpeg",
"Tentang saya": "Hallo, Nama saya Sisca Nur Arafah Febriyanti, biasa dipanggil sisca. Saya sedang menempuh pendidikan S1 di universitas Ahmad Dahlan Yogyakarta dengan prodi Sistem Informasi.Saya merupakan mahasiswi angkatan tahun 2020. Saat ini saya sudah berada di semester 4 dan sedang mempelajari cara membuat website portofolio di matakuliah Tekweb Lanjut."
},
{
"Id": "0",
"Nama": "Sisca Nur AF",
"keterangan": "Mahasiswi | Sistem Informasi",
"Ig_url": "https://www.instagram.com/sisca.nrarafh/",
"Github_url": "https://github.com/siscanrarafh",
"Avatar_url": "https://siscanaf.my.id/img/sisca.jpeg",
"Tentang saya": ""
}
]


GET: /users/[1]

data:{
"Id": "1",
"Nama": "Sisca Nur Arafah Febriyanti",
"keterangan": "Mahasiswi | Sistem Informasi",
"Ig_url": "https://www.instagram.com/sisca.nrarafh/",
"Github_url": "https://github.com/siscanrarafh",
"Avatar_url": "https://siscanaf.my.id/img/sisca.jpeg",
"Tentang saya": "Hallo, Nama saya Sisca Nur Arafah Febriyanti, biasa dipanggil sisca. Saya sedang menempuh pendidikan S1 di universitas Ahmad Dahlan Yogyakarta dengan prodi Sistem Informasi.Saya merupakan mahasiswi angkatan tahun 2020. Saat ini saya sudah berada di semester 4 dan sedang mempelajari cara membuat website portofolio di matakuliah Tekweb Lanjut."
}

POST: /users

data:{
"id": "2",
"Nama": "Elviana bellva",
"keterangan": "Mahasiswi | Sistem Informasi",
"Ig_url": "https://www.instagram.com/sisca.nrarafh/",
"Github_url": "https://github.com/siscanrarafh",
"Avatar_url": "https://siscanaf.my.id/img/sisca.jpeg",
"Tentang saya": "Hallo, Nama saya Sisca Nur Arafah Febriyanti, biasa dipanggil sisca. Saya sedang menempuh pendidikan S1 di universitas Ahmad Dahlan Yogyakarta dengan prodi Sistem Informasi.Saya merupakan mahasiswi angkatan tahun 2020. Saat ini saya sudah berada di semester 4 dan sedang mempelajari cara membuat website portofolio di matakuliah Tekweb Lanjut."
}

PUT: /users[2]

data:{
"Id": "2",
"Nama": "sxeskie alexandra",
"keterangan": "Mahasiswi | Sistem Informasi",
"Ig_url": "https://www.instagram.com/sisca.nrarafh/",
"Github_url": "https://github.com/siscanrarafh",
"Avatar_url": "https://siscanaf.my.id/img/sisca.jpeg",
"Tentang saya": "Hallo, Nama saya Sisca Nur Arafah Febriyanti, biasa dipanggil sisca. Saya sedang menempuh pendidikan S1 di universitas Ahmad Dahlan Yogyakarta dengan prodi Sistem Informasi.Saya merupakan mahasiswi angkatan tahun 2020. Saat ini saya sudah berada di semester 4 dan sedang mempelajari cara membuat website portofolio di matakuliah Tekweb Lanjut."
}


<!--  Tabel Artikel -->

GET: /artikel

data:[
{
"Id": "1",
"Tittle": "Yogyakarta",
"Content": "Kota Yogyakarta atau yang sering disebut kota jogja. Merupakan kota yang sangat Istimewa.",
"Autor": "Sisca Nur Arafah"
},
{
"Id": "2",
"Tittle": "Rasi Bintang",
"Content": "Rasi bintang adalah sekelompok bintang yang tampak berhubungan membentuk suatu konfigurasi khusus.",
"Autor": "Sisca Nur Arafah"
},
{
"Id": "3",
"Tittle": "Bulan",
"Content": "Bulan adalah satelit alami Bumi satu-satunya dan merupakan satelit terbesar kelima dalam Tata Surya.",
"Autor": "Sisca Nur Arafah"
},
{
"Id": "4",
"Tittle": "Laut",
"Content": "laut adalah sistem perairan samudra berair asin yang saling terhubung di Bumi yang dianggap sebagai satu samudra global atau sebagai beberapa samudra utama.",
"Autor": "Sisca Nur Arafah"
},
{
"Id": "5",
"Tittle": "Borobudur",
"Content": "Candi Borobudur (bahasa Jawa: ꦕꦤ꧀ꦝꦶ\u200bꦧꦫꦧꦸꦝꦸꦂ, translit. Candhi Båråbudhur) adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia.",
"Autor": "Sisca Nur Arafah"
}
]


GET: /artikel/[1]
data:{
"Id": "1",
"Tittle": "Yogyakarta",
"Content": "Kota Yogyakarta atau yang sering disebut kota jogja. Merupakan kota yang sangat Istimewa.",
"Autor": "Sisca Nur Arafah"
}

POST: /artikel

data:{
"Id" : "6"
"Tittle": "Exo",
"Content": "Exo adalah salah satu boyband asal korea selatan.",
"Autor": "Sisca Nur Arafah Febriyanti"
}


PUT: /artikel/[2]

data:{
"Id": "6",
"Tittle": "Nct",
"Content": "Nct merupakan boyband asal korea selatan yang beranggotakan 23 orang",
"Autor": "Sisca Nur Arafah F"
}


<!--  Tabel Portofolio -->

GET: /portofolio

data:[
{
"ID": "1",
"Tittle": "HTML",
"Description": "intermediatte"
},
{
"ID": "3",
"Tittle": "SPSS",
"Description": "Advance"
},
{
"ID": "4",
"Tittle": "QGIS",
"Description": "intermediatte"
},
{
"ID": "5",
"Tittle": "Python",
"Description": "Intermediatte"
},
{
"ID": "6",
"Tittle": "Figma",
"Description": "Advance"
},
{
"ID": "7",
"Tittle": "SQLyog",
"Description": "Advance"
},
{
"ID": "8",
"Tittle": "Microsoft Excel",
"Description": "Advance"
}
]


GET: /portofolio/[1]

data:{
"ID": "1",
"Tittle": "HTML",
"Description": "intermediatte"
}


POST: /portofolio

data:{
"ID": "8",
"Tittle": "Microsoft Excel",
"Description": "Advance"
}

PUT: /portofolio/[2]

data:{
"ID": "8",
"Tittle": "Photoshop",
"Description": "Intermediatte"
}

```
