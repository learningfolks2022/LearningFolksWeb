import React from "react";
import Testimonial1 from "../../../img/banner/testimonial1.jpeg";
import Testimonial2 from "../../../img/banner/testimonial2.jpeg";
import Testimonial3 from "../../../img/banner/testimonial3.jpeg";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const HomeBanner6 = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\nbody {\n\tfont-family: "DM Sans", sans-serif;\n}\nh3 {\n\tcolor: #000;\n\tfont-size: 26px;\n\tfont-weight: 400;\n\tposition: relative;\n\tmargin: 0 0 50px 0;\n\ttext-transform: uppercase;\n\tdisplay: inline-block;\n}\nh3::after {\n\tcontent: "";\n\twidth: 50%;\n\tposition: absolute;\n\theight: 4px;\n\tborder-radius: 1px;\n\tbackground: #5895ff;\n\tleft: 0;\n\tbottom: -20px;\n}\n.carousel {\n\tmargin: 50px auto;\n}\n.carousel .carousel-item {\n\tcolor: #999;\n\toverflow: hidden;\n    min-height: 120px;\n\tfont-size: 13px;\n}\n.carousel .media {\n\tposition: relative;\n\tpadding: 0 0 0 20px;\n\tmargin-left: 20px;\n}\n.carousel .media img {\n\twidth: 75px;\n\theight: 75px;\n\tdisplay: block;\n\tborder-radius: 50%;\n\tbox-shadow: 0 2px 4px rgba(0,0,0,0.2);\n    border: 2px solid #fff;\n}\n.carousel .testimonial {\n    color: #fff;\n    position: relative;    \n    background: #9b9b9b;\n\tpadding: 15px;\n\tmargin: 0 0 20px 20px;\n}\n.carousel .testimonial::before, .carousel .testimonial::after {\n\tcontent: "";\n\tdisplay: inline-block;\n\tposition: absolute;\n\tleft: 0;\n\tbottom: -20px;\n}\n.carousel .testimonial::before {\n    width: 20px;\n    height: 20px;\n\tbackground: #9b9b9b;\n\tbox-shadow: inset 12px 0 13px rgba(0,0,0,0.5);\n}\n.carousel .testimonial::after {\n    width: 0;\n    height: 0;\n    border: 10px solid transparent;\n    border-bottom-color: #fff;\n    border-left-color: #fff;\n}\n.carousel .carousel-item .row > div:first-child .testimonial {\n\tmargin: 0 20px 20px 0;\n}\n.carousel .carousel-item .row > div:first-child .media {\n\tmargin-left: 0;\n}\n.carousel .testimonial p {\n\ttext-indent: 40px;\n    line-height: 21px;\n\tmargin: 0;\n}\n.carousel .testimonial p::before {\n\tcontent: "\\201D";\n  \tfont-family: "DM Sans", sans-serif;\n    color: #fff;\n    font-weight: bold;\n    font-size: 68px;\n    line-height: 70px;\n    position: absolute;\n    left: -25px;\n    top: 0;\n}\n.carousel .overview {\n\tpadding: 3px 0 0 15px;\n}\n.carousel .overview .details {\n\tpadding: 5px 0 8px;\n}\n.carousel .overview b {\n\ttext-transform: uppercase;\n\tcolor: #5895ff;\n}\n.carousel-control-prev, .carousel-control-next {\n\twidth: 30px;\n\theight: 30px;\n    background: #666;\n    text-shadow: none;\n\ttop: 4px;\n}\n.carousel-control-prev i, .carousel-control-next i {\n\tfont-size: 16px;\n}\n.carousel-control-prev {\n\tleft: auto;\n\tright: 40px;\n}\n.carousel-control-next {\n\tleft: auto;\n}\n.carousel-indicators {\n\tbottom: -80px;\n}\n.carousel-indicators li, .carousel-indicators li.active {\n\twidth: 17px;\n    height: 17px;\n\tborder-radius: 0;\n\tmargin: 1px 5px;\n  \tbox-sizing: border-box;\n}\n.carousel-indicators li {\t\n    background: #e2e2e2;\n    border: 4px solid #fff;\n}\n.carousel-indicators li.active {\n\tcolor: #fff;\n    background: #5895ff;\n    border: 5px double;    \n}\n.star-rating li {\n\tpadding: 0 2px;\n}\n.star-rating i {\n\tfont-size: 14px;\n\tcolor: #ffdc12;\n}\n',
        }}
      />
      <div className="container-lg">
        <div className="row">
          <div className="col-sm-12">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <h3>
                Customer <b>Testimonials</b>
              </h3>
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>
                          Joining Learning Folks gave me insights of this technical world and it’s opportunities.
                        </p>
                      </div>
                      <div className="media">
                        <img src={Testimonial1} className="mr-3" alt="" />
                        <div className="media-body">
                          <div className="overview">
                            <div className="name">
                              <b>Paula Wilson</b>
                            </div>
                            <div className="details">
                              Media Analyst / SkyNet
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>
                          Associating with Learning Folks, it’s agreat experience to have a great network of learners and experienced people.
                        </p>
                      </div>
                      <div className="media">
                        <img src={Testimonial2} className="mr-3" alt="" />
                        <div className="media-body">
                          <div className="overview">
                            <div className="name">
                              <b>Antonio Moreno</b>
                            </div>
                            <div className="details">
                              Web Developer / SoftBee
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam eu sem tempor, varius quam at, luctus dui.
                          Mauris magna metus, dapibus nec turpis vel, semper
                          malesuada ante.
                        </p>
                      </div>
                      <div className="media">
                        <img
                          src="/examples/images/clients/3.jpg"
                          className="mr-3"
                          alt=""
                        />
                        <div className="media-body">
                          <div className="overview">
                            <div className="name">
                              <b>Michael Holz</b>
                            </div>
                            <div className="details">
                              Web Developer / DevCorp
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>
                          Vestibulum quis quam ut magna consequat faucibu. Eget
                          mi suscipit tincidunt. Utmtc tempus dictum.
                          Pellentesque virra. Quis quam ut magna consequat
                          faucibus quam.
                        </p>
                      </div>
                      <div className="media">
                        <img
                          src="/examples/images/clients/4.jpg"
                          className="mr-3"
                          alt=""
                        />
                        <div className="media-body">
                          <div className="overview">
                            <div className="name">
                              <b>Mary Saveley</b>
                            </div>
                            <div className="details">
                              Graphic Designer / MarsMedia
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam eu sem tempor, varius quam at, luctus dui.
                          Mauris magna metus, dapibus nec turpis vel, semper
                          malesuada ante.
                        </p>
                      </div>
                      <div className="media">
                        <img
                          src="/examples/images/clients/5.jpg"
                          className="mr-3"
                          alt=""
                        />
                        <div className="media-body">
                          <div className="overview">
                            <div className="name">
                              <b>Martin Sommer</b>
                            </div>
                            <div className="details">
                              SEO Analyst / RealSearch
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>
                          Vestibulum quis quam ut magna consequat faucibu. Eget
                          mi suscipit tincidunt. Utmtc tempus dictum.
                          Pellentesque virra. Quis quam ut magna consequat
                          faucibus quam.
                        </p>
                      </div>
                      <div className="media">
                        <div className="media-left d-flex mr-3">
                          <img src="/examples/images/clients/6.jpg" alt="" />
                        </div>
                        <div className="media-body">
                          <div className="overview">
                            <div className="name">
                              <b>John Williams</b>
                            </div>
                            <div className="details">
                              Web Designer / UniqueDesign
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Carousel controls */}
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-chevron-left" />
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner6;
