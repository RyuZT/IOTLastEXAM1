import React, { useState } from "react";
import "./Home.css";
import img1 from './Image/img1.jpg';
import img2 from './Image/img2.jpeg';
import img3 from './Image/img3.jpg';
import img4 from './Image/img4.jpg';
import img5 from './Image/img5.jpg';
import img6 from './Image/img6.jpg';
import img7 from './Image/img7.jpg';
import img8 from './Image/img8.jpg';
import img9 from './Image/img9.jpg';
import img10 from './Image/img10.jpg';


const images = [
  {
    id: 1,
    url: img1, 
    name: "Uluwatu",
    description:
      "Pura Luhur Uluwatu atau Pura Uluwatu merupakan pura yang berada di wilayah Desa Adat Pecatu, Kecamatan Kuta Selatan, Kabupaten Badung.",
  },
  {
    id: 2,
    url: img2,
    name: " Pura Tanah Lot",
    description:
      "Pura Tanah Lot (aksara Bali: ᬧᬸᬭ​ᬢᬦᬄᬮᭀᬢ᭄) adalah salah satu Pura (Tempat Ibadah Umat Hindu) yang sangat disucikan di Bali, Indonesia. ",
  },
  {
    id: 3,
    url:img3,
    name: "Garuda Wisnu Kencana",
    description:
      "Garuda Wisnu Kencana (GWK) merupakan sebuah patung raksasa karya salah satu pematung Terkenal asal Bali yang bernama Nyoman Nuarta.",
  },
  {
    id: 4,
    url: img4,
    name: "Ulun Danu Beratan",
    description:
      "Pura Ulun Danu dibangun untuk memuja Dewi Danu. Danu dalam bahasa Bali berarti danau, sedangkan dewi Danu adalah ratu air, danau, dan sungai.",
  },
  {
    id: 5,
    url:img5,
    name: "kelingking Beach",
    description:
      "Kelingking beach di Pulau Nusa Penida, Bali adalah salah satu pantai eksotis yang dikenal sebagai surga tersembunyi",
  },
  {
    id: 6,
    url: img6,
    name: "Aling Aling Waterfall",
    description:
      "Air terjun Aling-Aling terletak di Bali Utara dekat Lovina. Salah satu musim gugur terbaik di tengah hijau subur.",
  },
  {
    id: 7,
    url: img7,
    name: "Campuhan Ridge Walk",
    description:
      "Campuhan Ridge Walk merupakan salah satu destinasi wisata yang tak boleh dilewatkan jika sedang berkunjung ke Ubud, Bali.",
  },
  {
    id: 8,
    url: img8,
    name: "Git Git Waterfall",
    description:
      "The highest waterfall in Bali. Gitgit Waterfall is a natural tourist destination that has a height of about 48 meters. ",
  },
  {
    id: 9,
    url: img9,
    name: "Desa Wisata Penglipuran",
    description:
      "Desa Wisata Penglipuran terletak di Kecamatan Bangli, Kabupaten Bangli, Provinsi Bali",
  },
  {
    id: 10,
    url: img10,
    name: "Banyumala Waterfall",
    description:
      "Banyumala Twin Waterfall terletak di Desa Wanagiri, Kecamatan Sukasada, Kabupaten Buleleng, Bali.",
  },
];
function Home() {
  const [items, setItems] = useState(images);

  const moveToEnd = () => {
    const newItems = [...items];
    const firstItem = newItems.shift();
    newItems.push(firstItem);
    setItems(newItems);
  };

  const moveToStart = () => {
    const newItems = [...items];
    const lastItem = newItems.pop();
    newItems.unshift(lastItem);
    setItems(newItems);
  };

  return (
    <div className="container">
  
      <div className="slide">
        {items.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.url})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button className="prev" onClick={moveToStart}>
          <i className="fa-solid fa-arrow-left">🡨</i>
        </button>
        <button className="next" onClick={moveToEnd}>
          <i className="fa-solid fa-arrow-right">🡲</i>
        </button>
      </div>
    </div>
  );
}

export default Home;