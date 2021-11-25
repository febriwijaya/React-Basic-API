import React from 'react'
import { useState, useEffect } from 'react';
import Footer from './Footer'
import Navbar from './Navbar'
import Fade from 'react-reveal/Fade';

export default function Assignment() {
  const [todos, setTodos] = useState([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/articles')
      .then((response) => response.json())
      .then((data) => setTodos(data))
  })

  return (
    <div>
      <Navbar />
      <h2 className="text-center my-3">React Assign 4</h2>
      {
        todos.map((todo, index) => (
          <div className="container">
            <Fade bottom delay={index * 500}>
              <div className="card my-3">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div key={index} className="mb-3">
                        <h2 className="text-primary">{todo.title}</h2>
                        <p>{todo.body.slice(0, 200)}[............]</p>
                        <p>{todo.date}</p>
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                          See More
                          </button>
                        <div class="collapse my-2" id="collapseExample">
                          <div class="card card-body">
                            <p>{todo.body}</p>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        ))
      }
      <Footer />
    </div>
  )
}
