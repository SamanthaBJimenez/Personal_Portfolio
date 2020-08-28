import React from 'react';
import project1 from './../ImgFiles/IMG_7873.jpeg';
import project2 from './../ImgFiles/IMG_4717.jpeg';
import project3 from './../ImgFiles/aboutImg.jpeg';

const Projects = () => {
    return (
        <div class="container">
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>Take a look at some of my work below and check back in for updates and new projects in the future.</p>
          </div>
          <div class="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
            <div class="col-lg-4 col-md-6 portfolio-item filter-app" >
              <div class="portfolio-wrap">
                <img src={project1} class="img-fluid" alt=""/>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox vbox-item" title="App 1"><i class="bx bxl-github"></i><p class='github-name'>github</p></a>
                  <a href="portfolio-details.html" title="More Details" class='liveA'><i class="bx bx-window-alt"></i><p class="live-site">live site</p></a>
                </div>
                <div>
                  <p class='project-header'>ZooVio</p>
                </div>
              </div>
            </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-web" >
            <div class="portfolio-wrap">
              <img src={project2} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" class="venobox vbox-item" title="Web 3"><i class="bx bxl-github"></i><p class='github-name'>github</p></a>
                <a href="portfolio-details.html" title="More Details" class='liveA'><i class="bx bx-window-alt"></i><p class='live-site'>live site</p></a>
              </div>
              <div>
                <p class='project-header'>Finstagram</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-app" >
            <div class="portfolio-wrap">
              <img src={project3} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" class="venobox vbox-item" title="App 2"><i class="bx bxl-github"></i><p class='github-name'>github</p></a>
                <a href="portfolio-details.html" title="More Details" class='liveA'><i class="bx bx-window-alt"></i><p class='live-site'>live site</p></a>
              </div>
              <div>
                <p class='project-header'>Tastebuds</p>
              </div>
            </div>
          </div>

          {/* <div class="col-lg-4 col-md-6 portfolio-item filter-card" >
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" class="venobox vbox-item" title="Card 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div> */}

          {/* <div class="col-lg-4 col-md-6 portfolio-item filter-web" >
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" class="venobox vbox-item" title="Web 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app" >
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" class="venobox vbox-item" title="App 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card" >
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" class="venobox vbox-item" title="Card 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card" >
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" class="venobox vbox-item" title="Card 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" >
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" class="venobox vbox-item" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
}

export default Projects;