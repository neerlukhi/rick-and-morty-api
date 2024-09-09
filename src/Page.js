import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import './style.css'

function Page() {

  const [rec, setrec] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => setrec(response.data.results))
  }, [])
  console.log(rec)


  return (

    <>
      <div className="heading">
        <h1 className="">The Rick And Morty</h1>
      </div>

      {/* <div className="container d-flex flex-wrap">
        {
          rec.map((value, index) => {
            return (
              <div className="card col-md-5 ">
                <div className="row">
                  <div className="col-md-4">
                    <img src={value.image} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{value.name}</h5>
                      <div className="">
                        <p><span style={{ backgroundColor: value.status === 'Alive' ? 'green' : value.status === 'Dead' ? 'red' : 'grey' }}></span> <h6> {value.status} - {value.species} </h6> </p>
                      </div>
                      <div className="">
                        <span></span>
                        <a href="" className="card-text">{value.origin.name}</a>
                      </div>
                      <div className="">
                        <span></span>
                        <a href="" className="card-text">{value.location.name}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div> */}

      <div className="card-main">
        <div className="container">
          <div className="row">
            {
              rec.map((item, index) => {
                return (
                  <div className="col-lg-6 col-md-12">
                    <div className="inner d-flex">
                      <div className="imges">
                        <img src={item.image} alt="" />
                      </div>
                      <div className='right-content'>
                        <div className="title">
                          <a href="#"><h5 className='m-0'>{item.name}</h5></a>
                          <p> <span className='status' style={{ backgroundColor: item.status == 'Alive' ? 'green' : item.status == 'Dead' ? 'red' : 'gray' }}></span> {item.status} - {item.species}</p>
                        </div>
                        <div className='sec2'>
                          <span className='d-block'>Last known location:</span>
                          <a href="#">{item.origin.name}</a>
                        </div>
                        <div className="sec2">
                          <span className='d-block'>First seen in:</span>
                          <a href="#" className='m-0'>{item.location.name}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      </>
      )
}

export default Page;