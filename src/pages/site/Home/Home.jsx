import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [inpVal, setInpVal] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      if (inpVal != "") {
        setData([
          ...res.data.filter((item) =>
            item.title.toLowerCase().includes(inpVal.trim().toLowerCase())
          )
        ]);
      } else {
        setData([...res.data]);
      }
    });
  },[inpVal]);
  return (
    <div className="home">
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white d-flex flex-column align-items-center w-100">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container flex-column px-4 px-lg-5 mt-5">
          <div className="inp-icn d-flex w-100 justify-content-center gap-2">
            <input
              value={inpVal}
              onChange={(e) => setInpVal(e.target.value)}
              className="mb-5 p-2 w-50 rounded-3 "
              placeholder="Aradiginiz urunu yaz"
              type="search"
            />{" "}
            <i className="fa-solid fa-magnifying-glass mt-3 "></i>
          </div>

          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((item, index) => (
              <div className="col-3 mb-5">
                <div className="card h-100  ">
                  <img
                    className="card-img-top"
                    height="300px"
                    src={item.image}
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{item.title}</h5>
                      {item.price}
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link
                        className="btn btn-outline-dark mt-auto"
                        to={`details/${item.id}`}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
