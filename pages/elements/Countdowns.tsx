import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import CountdownOne from "../../components/Countdown/CountdownOne";
import CounterOne from "../../components/Counters/CounterOne";
import CounterTwo from "../../components/Counters/CounterTwo";
import CountersThree from "../../components/Counters/CountersThree";
import FooterOne from "../../components/Footer/FooterOne";

const Countdowns = () => (
  <Loader>
    <HeaderOne type={undefined} />
    <PageTitleWidget title="Countdowns" />
    <CountersThree type={undefined} />
    <CounterOne bg="dark-bg" type={undefined} />
    <section className="dark-bg pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="countdown-container-white mt-0 mb-0">
              <CountdownOne font={undefined} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <CounterTwo type="wide" bg={undefined} />
    <CounterOne bg="parallax-bg-4 fixed-bg" type="wide" />
    <FooterOne />
  </Loader>
);

export default Countdowns;
