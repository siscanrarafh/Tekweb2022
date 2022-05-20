Vue.createApp({
  data() {
    return {
      data_artikel: [],
      bacaan: null,

      judul: "SiscaNAF",
      navbar: {
        a: "Home",
        b: "About",
        c: "Artikel",
        d: "Portofolio",
      },
      nama: "Sisca Nur Arafah Febriyanti",
      keterangan: "Mahasiswi | Sistem Informasi",

      sosial_media: [
        {
          nama: " sisca.nrarafh",
          link: "https://www.instagram.com/sisca.nrarafh/",
          gmb: "fa fa-instagram",
        },
        {
          nama: " siscanrarafh",
          link: "https://github.com/siscanrarafh",
          gmb: "fa fa-github",
        },
      ],

      tabel: {
        nama: "Tabel Keterampilan",
        n: "No.",
        judul_tabel: ["Keterampilan", "Level"],
        data: [
          {
            nama: "HTML",
            skill: "intermediatte",
          },
          {
            nama: "CSS",
            skill: "Advance",
          },
          {
            nama: "Javascript",
            skill: "Advance",
          },
          {
            nama: "Java",
            skill: "intermediatte",
          },
          {
            nama: "Python",
            skill: "Intermediatte",
          },
          {
            nama: "Microsoft Word",
            skill: "Advance",
          },
        ],
      },
      ab: "About Me",
      deskripsi_1: "Hallo, Nama saya Sisca Nur Arafah Febriyanti, biasa dipanggil sisca. Saya sedang menempuh pendidikan S1 di universitas Ahmad Dahlan Yogyakarta dengan prodi Sistem Informasi",
      deskripsi_2: "Saya merupakan mahasiswi angkatan tahun 2020. Saat ini saya sudah berada di semester 4 dan sedang mempelajari cara membuat website portofolio di matakuliah Tekweb Lanjut.",

      portfolio: {
        judul: "My Portofolio",
        data: [
          {
            nama: "HTML",
            skill: "intermediatte",
            src: "img/portofolio/html.png",
          },
          {
            nama: "CSS",
            skill: "Advance",
            src: "img/portofolio/css.png",
          },
          {
            nama: "SPSS",
            skill: "Advance",
            src: "img/portofolio/spss.jpg",
          },
          {
            nama: "QGIS",
            skill: "intermediatte",
            src: "img/portofolio/qgis.jpg",
          },
          {
            nama: "Python",
            skill: "Intermediatte",
            src: "img/portofolio/python.png",
          },
          {
            nama: "Figma",
            skill: "Advance",
            src: "img/portofolio/figma.jpg",
          },
          {
            nama: "SQLyog",
            skill: "Advance",
            src: "img/portofolio/sqlyog.png",
          },
        ],
      },
    };
  },
  methods: {
    //tempat menambahkan fungsi-fungsi
    listArtikel() {
      axios
        .get((src = "../artikel/artikel.json"))
        .then((res) => {
          console.log(res.data);
          this.data_artikel = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    buatMarkdown() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const artikel = urlParams.get("bacaan");
      var converter = new showdown.Converter();
      axios
        .get((src = "../artikel/" + artikel))
        .then((res) => {
          var html = converter.makeHtml(res.data);
          this.bacaan = html;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    //fungsi yang dipanggil oleh vue sebelum mount terjadi
    this.listArtikel(), this.buatMarkdown();
  },
}).mount("#app");
