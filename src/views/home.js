import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from 'https://github.com/Snithik-Productions/Savos/blob/e60ba14efac8ce2e7e2a571f962fc52e3291bc5e/src/components/navbar8.js'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Savos Cinema Theaters</title>
        <meta property="og:title" content="Savos Cinema Theaters" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Movies</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">Events</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Movies</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Events</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">
              <span>Book now</span>
              <br></br>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text111">Snithik Productions</span>
          </Fragment>
        }
        logoSrc="/group%208-1500h.png"
        link1Url="https://snithikproductions.myportfolio.com/"
        link2Url="https://snithikproductions.myportfolio.com/"
        link3Url="https://snithikproductions.myportfolio.com/"
        link5Url="https://snithikproductionsofficial.myportfolio.com/contact"
        linkUrlPage1="https://snithikproductions.myportfolio.com/"
        linkUrlPage2="https://snithikproductions.myportfolio.com/"
        linkUrlPage3="https://snithikproductions.myportfolio.com/"
        linkUrlPage4="https://snithikproductionsofficial.myportfolio.com/contact"
        page1ImageSrc="/untitled-1-1400w.png"
        page2ImageSrc="/untitled-11-1400w.png"
        page4ImageSrc="/untitled-2-1400w.png"
        page1Description={
          <Fragment>
            <span className="home-text112">
              Welcome to Savos Cinema Theatre
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text113">
              Explore the latest movies showing at Savos
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text114">
              Check out upcoming events and special screenings
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text115">Get in touch with us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text116">Explore Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text117">Snithik Productions</span>
          </Fragment>
        }
        textUrl="https://www.youtube.com/@SnithikProductions/featured"
        content1={
          <Fragment>
            <span className="home-text118">
              Experience the magic of movies at SAVOS, where every film comes to
              life on the big screen.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text119">
              Welcome to SAVOS Cinema Theatres
            </span>
          </Fragment>
        }
        buttonUrl="https://www.youtube.com/@SnithikProductions/featured"
        image1Src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHRoZWF0cmV8ZW58MHx8fHwxNzMyMzQ0NDkzfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1612934622902-d3ad43c407b9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHx0aGVhdHJlfGVufDB8fHx8MTczMjM0NDQ5M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image3Src="/1c9404744343cc0246b8663bfcf981f8-1500w.jpg"
        image4Src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHRoZWF0cmV8ZW58MHx8fHwxNzMyMzQ0NDkzfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image6Src="https://images.unsplash.com/photo-1508778552286-12d4c6007799?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHRoZWF0cmV8ZW58MHx8fHwxNzMyMzQ0NDkzfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image9Src="/-1x-1-1500w.jpg"
        image10Src="https://images.unsplash.com/photo-1502033491742-0e11fb057e16?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHx0aGVhdHJlfGVufDB8fHx8MTczMjM0NDUxNXww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image11Src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5fHx0aGVhdHJlfGVufDB8fHx8MTczMjM0NDUxNXww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image12Src="https://images.unsplash.com/photo-1503645054687-9dea1ba502b8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM5fHx0aGVhdHJlfGVufDB8fHx8MTczMjM0NDUxNXww&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text120">Comfortable Seating</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text121">Immersive Sound System</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text122">Concession Stand</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1509606674268-3c9117451da1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHx0aGVhdHJlfGVufDB8fHx8MTczMjM0NDUxNXww&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature2ImgSrc="/b9b8aa832f3e93e4c464387d8dda9daa-1400w.jpg"
        feature1Description={
          <Fragment>
            <span className="home-text123">
              Relax in our plush seats while enjoying your favorite movies
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text124">
              Immerse yourself in the latest blockbusters with our
              state-of-the-art sound system
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text125">
              Enjoy a wide selection of snacks and beverages at our concession
              stand
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text126">Book Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text127">
              Experience the magic of cinema at SAVOS. Reserve your seats today.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text128">Book Your Tickets Now!</span>
          </Fragment>
        }
      ></CTA26>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text129">Standard Ticket</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text130">VIP Ticket</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text131">Family Ticket</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text132">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text133">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text134">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text135">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text136">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text139">Ticket Pricing</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text140">$10</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text141">$20</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text142">$30</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text143">Buy Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text144">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text145">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text146">Buy Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text147">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text148">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text149">Buy Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text150">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text151">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text152">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text153">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text155">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text157">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text158">One standard movie ticket</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text159">Valid for one person</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text160">Valid for any movie showing</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text161">VIP movie experience</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text162">
              Complimentary popcorn and drink
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text163">Priority seating</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text165">
              Admission for two adults and two children
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text166">
              Valid for any family-friendly movie
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text167">
              Includes snacks for the whole family
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text182">Choose a Movie</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text183">Select Showtime</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text184">Purchase Tickets</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text185">Enjoy the Movie</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text186">
              Browse through our selection of the latest movies and choose the
              one you want to watch.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Pick a showtime that fits your schedule from the available
              options.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text188">
              Secure your seats by purchasing tickets online or at the cinema.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text189">
              Sit back, relax, and enjoy the cinematic experience at Savos
              Theatre!
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text190">
              I love coming to Savos for the latest blockbusters. The sound
              quality and screen size make every movie experience unforgettable.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text191">
              As a film critic, I have high standards for cinemas. Savos never
              disappoints with its comfortable seating and excellent projection
              quality.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text192">
              Savos is my go-to place for a fun movie night with friends. The
              concession stand offers a great variety of snacks, and the staff
              is always friendly.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text193">
              Bringing my family to Savos is always a treat. The kids love the
              special screenings, and I appreciate the clean facilities and
              family-friendly atmosphere.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text194">
              Read what our satisfied customers have to say about their
              experience at Savos Cinema Theatre.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text195">What Our Customers Say</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text198">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Emily Brown</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text200">Movie Enthusiast</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text201">Film Critic</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text202">Regular Visitor</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text203">Family Moviegoer</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text204">
              We would love to hear from you. Reach out to us for any inquiries
              or feedback.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text206">Main Theatre Location</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text207">Secondary Theatre Location</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text208">
              123 Example Street, City, Country
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              456 Sample Avenue, Town, Country
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text210">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text211">Movies</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text212">Events</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text213">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text214">FAQ</span>
          </Fragment>
        }
        logoSrc="/group%208-1500h.png"
        termsLink={
          <Fragment>
            <span className="home-text215">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text216">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text217">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
