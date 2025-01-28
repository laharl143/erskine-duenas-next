export default function Home() {
  return (
    <div>
      <nav id="desktop-nav">
        <div class="logo">Erskine Duenas</div>
        <div>
          <ul class="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div class="logo">Erskine Duenas</div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li>
              <a href="#about" onclick="toggleMenu()">
                About
              </a>
            </li>
            <li>
              <a href="#experience" onclick="toggleMenu()">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onclick="toggleMenu()">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onclick="toggleMenu()">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div class="section__pic-container">
          <img
            src="./assets/erskine-profile-pic.png"
            alt="Erskine Duenas profile picture"
          />
        </div>
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="title">Erskine Duenas</h1>
          <p class="section__text__p2">Full Stack Developer</p>
          <div class="btn-container">
            <button
              class="btn btn-color-2"
              onclick="window.open('./assets/erskine_resume.pdf')"
            >
              Download CV
            </button>
            <button
              class="btn btn-color-1"
              onclick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn profile"
              class="icon"
              onclick="location.href='https://www.linkedin.com/in/erskine-duenas'"
            />
            <img
              src="./assets/github.png"
              alt="My Github profile"
              class="icon"
              onclick="location.href='https:github.com/laharl143'"
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
          <div class="section__pic-container">
            <img
              src="./assets/erskine-about-pic.png"
              alt="Profile picture"
              class="about-pic"
            />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  class="icon"
                />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Full Stack Development
                </p>
              </div>
              <div class="details-container">
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  class="icon"
                />
                <h3>Education</h3>
                <p>
                  B.S. Electronics and Communication Engineering
                  <br />
                  <span></span>
                </p>
              </div>
            </div>
            <div class="text-container">
              <p>
                I am a developer with 2 years plus of professional experience as
                a Full-Stack Software Engineer, specializing in Back-End
                Development. I am a quick learner with a self-learning attitude.
                I view myself as a "lifelong learner," eager to deepen my
                understanding of technological advancements and stay updated
                with the latest technologies. I'm keen on embracing discomfort
                and regularly learning something new.
              </p>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>
      <section id="experience">
        <p class="section__text__p1">Explore My</p>
        <h1 class="title">Experience</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h2 class="experience-sub-title">Programming / Frameworks</h2>
              <div class="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Java</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>
                      Python&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>React.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Express.js&nbsp;&nbsp;&nbsp;</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Spring Boot</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>
                      Vue.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>
                      Jest&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </h3>
                    <p>Experienced</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="details-container">
              <h2 class="experience-sub-title">DevOps</h2>
              <div class="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>
                      Docker&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Kubernetes</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Jenkins&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>
                      AWS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#projects'"
        />
      </section>
      <section id="projects">
        <p class="section__text__p1">Browse My Recent</p>
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src="./assets/project-1.png"
                  alt="Project 1"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Project One</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src="./assets/project-2.png"
                  alt="Project 2"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Project Two</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src="./assets/project-3.png"
                  alt="Project 3"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Project Three</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#contact'"
        />
      </section>
      <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <img
              src="./assets/email.png"
              alt="Email icon"
              class="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:erskine.duenas@gmail.com">
                erskine.duenas@gmail.com
              </a>
            </p>
          </div>
          <div class="contact-info-container">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              class="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/erskine-duenas">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div class="nav-links-container">
            <ul class="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2025 Erskine Duenas. All Rights Reserved.</p>
      </footer>
      <script src="script.js"></script>
    </div>
  );
}
