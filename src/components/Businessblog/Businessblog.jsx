import React from 'react';
import "./Businessblog.css"
import Buinessblog from './Businessblogapi';

const Businessblog = () => {
  return (
  <>
     <div className='container mt-5'>
        <h1 className='fs-3'>For business
</h1>
      <div className="businessblog">
        <div className="row">
        {Buinessblog.map((elem) => {
            const { id, image, title, paragraph, link } = elem;
            return (
              <div className="col-sm-12 col-md-12 col-lg-3 col-3 " key={id}>
                <div className="card">
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{paragraph}</p>
                    <a href={link}>Learn more</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
  </>
 
  );
}

export default Businessblog;
