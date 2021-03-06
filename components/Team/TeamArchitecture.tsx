import React, { forwardRef } from "react";
import dataTeam from "../../data/Team/team-architecture.json";
import HeadingSection from "../HeadingSection/HeadingSection";


const TeamArchitecture = ({ title, tagline, children }) => (
  <section className="white-bg" id="team" >
    <div className="container">
      <div className="row">
        <HeadingSection title={title} tagline={tagline} classAppend={undefined} font={undefined} children={undefined} />
      </div>
    </div>
    <div className="container">
      <div className="row mt-10 startup-member">
        {dataTeam.map((member, i) => (
          <div
            className="col-md-4"
            key={member.id}
            data-aos={"fade-up"}
            data-aos-delay={`${i}00`}
            data-aos-duration={700}
          >
            <div className="member text-center">
              <div className="team-member-container">
                <img
                  src={"../../public/assets/images/" + member.image}
                  className="img-fluid"
                  alt="team-01"
                />
                <div className="member-caption">
                  <div className="member-description text-center">
                    <div className="member-description-wrap">
                      <ul className="member-icons">
                        {member.social.map((item) => (
                          <li className="social-icon" key={item.id}>
                            <a href={item.link}>
                              <i className={`icofont-${item.icon}`}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="white-bg pt-20 pb-20 box-shadow-hover">
                <h4 className="member-title text-uppercase">{member.name}</h4>
                <p className="member-subtitle">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section >
);

export default TeamArchitecture;
