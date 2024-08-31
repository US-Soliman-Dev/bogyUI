"use client"
import "@/styles/home.css";
import { useEffect } from "react";

export default function Home() {

useEffect( () => {

  const el = (el: string | any) => document.querySelector(el);
  const positionEl = el('.bx-article').offsetTop + window.innerHeight / 2

  window.addEventListener( 'scroll' , () => {
    if(window.scrollY >= positionEl ) {
      el('.bx-article').classList.add('move')
    } else {
      el('.bx-article').classList.remove('move')
    }
  })

} , [])


  return (
    <>
      {/* ////////////////////////////////////////////////////// section AA */}
      {/* ////////////////////////////////////////////////////// section AA */}
      <section className="section-a">
        <nav className="navbar ">
          <div className="container">
            <div className="list">
              <div className="logo">
                Boomer<span>UI</span>
              </div>
              <ul>
                <li>home</li>
                <li>about</li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="hero container">
          <article>
            <div>
              <input type="checkbox" id="check1" />
              <label htmlFor="check1">Boomer UI</label>
            </div>
            <div>
              <input type="checkbox" id="check2" />
              <label htmlFor="check2">Boomer UI</label>
            </div>
            <div>
              <input type="checkbox" id="check3" />
              <label htmlFor="check3">Boomer UI</label>
            </div>
            <h1>
              theming support out of the box<span> Boomer UI</span>
            </h1>

            <p>
              Easy UI is a set of React components that help you build beautiful
              and modern web interfaces. Easy UI was built with the design
              system in mind so it comes packed full of useful features like
              theming support out of the box!
            </p>
            <div>
              <button className="">more...</button>
              <button className="">more...</button>
            </div>
          </article>
          <div className="chape">
            <div className="d-1"> BOOMER UI</div>
            <div className="d-2"></div>
            <div className="d-3"></div>
            <div className="d-4">15</div>
            <div className="d-5">10</div>
            <div className="d-6"></div>
            <div className="d-7"></div>
            <div className="d-8"></div>
            <div className="d-9"></div>
            <div className="d-10"></div>
            <div className="d-11"></div>
            <div className="d-12"></div>
            <div className="d-13"></div>
          </div>
        </div>

        <div className="c-card container">
          <h1 className="h">Hello World</h1>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, dolor
            ut, cum amet voluptatum qui beatae suscipit eligendi laborum quia
            adipisci
          </p>
          <button className="b b1">Button 1</button>
          <button className="b b2">Button 2</button>
        </div>
      </section>

      {/* ////////////////////////////////////////////////////// section BB */}
      {/* ////////////////////////////////////////////////////// section BB */}

      <section className="section-b">

        <div className="wavey">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill-opacity="1"
              d="M0,128L80,112C160,96,320,64,480,74.7C640,85,800,139,960,154.7C1120,171,1280,149,1360,138.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="bx-article container">
          <article>
            <div className="fade-in bx bx-design">
              <h2>
                Design
                <div className="wave">
                  <p className="line">aaaaaaaaaa</p>
                </div>
              </h2>
              <p>
                I offer professional high-converting custom website design and
                development for businesses, organizations, and agencies.
              </p>
              <a href="#">
                <span className="icon-plus"></span>
              </a>
            </div>
            
            <div className="fade-in bx bx-Development">
              <h2>
                Development
                <div className="wave">
                  <p className="line">aaaaaaaaaaaaaaaaaaa</p>
                </div>
              </h2>
              <p>
                I usually use WordPress CMS to develop the client site but
                sometime I also do full hand coded website.
              </p>
              <a href="#">
                <span className="icon-plus"></span>
              </a>
            </div>
            <div className="fade-in bx bx-Maintenance">
              <h2>
                Maintenance
                <div className="wave">
                  <p className="line">aaaaaaaaaaaaaaaaaaa</p>
                </div>
              </h2>
              <p>
                For businesses today, website maintenance a top priority. I also
                offer website maintenance service to help my client website’s
                bugs, security, and more.
              </p>
              <a href="#">
                <span className="icon-plus"></span>
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
