import React from "react";
import "./aboutus.css";

function Aboutus() {
  return (
    <div className="wrapper">
      <div className="container">
        <input type="radio" name="slide" id="c1" defaultChecked />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
              <h4>Vilbert Jhovan</h4>
              <p>Tidak ada jalan yang terlalu mudah</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4>Calvin Yoananda</h4>
              <p>Selama masih hidup, Aku punya kesempatan tak terbatas</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4>Samuel Nicholas</h4>
              <p>
                Jangan pernah memberi bekal kehidupan kepada orang, karena
                kehidupan tidak bisa dimakan, mending kasih bekal nasi uduk biar
                kenyang
              </p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card">
          <div className="row">
            <div className="icon">4</div>
            <div className="description">
              <h4>New technologies</h4>
              <p>Space engineering becomes more and more advanced</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c5" />
        <label htmlFor="c5" className="card">
          <div className="row">
            <div className="icon">5</div>
            <div className="description">
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Aboutus;
