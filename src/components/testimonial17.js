import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text28">
                  What Our Customers Say
                </span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text32">
                  Read what our satisfied customers have to say about their
                  experience at Savos Cinema Theatre.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text29">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Movie Enthusiast
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text35">
                        I love coming to Savos for the latest blockbusters. The
                        sound quality and screen size make every movie
                        experience unforgettable.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Film Critic
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        As a film critic, I have high standards for cinemas.
                        Savos never disappoints with its comfortable seating and
                        excellent projection quality.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            David Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            Regular Visitor
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text34">
                        Savos is my go-to place for a fun movie night with
                        friends. The concession stand offers a great variety of
                        snacks, and the staff is always friendly.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text36">
                            Emily Brown
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Family Moviegoer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text27">
                        Bringing my family to Savos is always a treat. The kids
                        love the special screenings, and I appreciate the clean
                        facilities and family-friendly atmosphere.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Position: undefined,
  author3Position: undefined,
  author3Name: undefined,
  review4: undefined,
  author1Alt: 'John Doe Image Alt Text',
  heading1: undefined,
  author3Alt: 'David Johnson Image Alt Text',
  author4Alt: 'Emily Brown Image Alt Text',
  author2Alt: 'Jane Smith Image Alt Text',
  author1Name: undefined,
  author2Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1535997018565-142937b9e38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjM0MzY3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  review2: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjM0MzY3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1701542035295-5cae8114b741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjM0MzY3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1461800919507-79b16743b257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjM0MzY3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: undefined,
  review3: undefined,
  review1: undefined,
  author4Name: undefined,
  author2Name: undefined,
}

Testimonial17.propTypes = {
  author4Position: PropTypes.element,
  author3Position: PropTypes.element,
  author3Name: PropTypes.element,
  review4: PropTypes.element,
  author1Alt: PropTypes.string,
  heading1: PropTypes.element,
  author3Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author2Position: PropTypes.element,
  author1Src: PropTypes.string,
  review2: PropTypes.element,
  author4Src: PropTypes.string,
  content1: PropTypes.element,
  author3Src: PropTypes.string,
  author2Src: PropTypes.string,
  author1Position: PropTypes.element,
  review3: PropTypes.element,
  review1: PropTypes.element,
  author4Name: PropTypes.element,
  author2Name: PropTypes.element,
}

export default Testimonial17
