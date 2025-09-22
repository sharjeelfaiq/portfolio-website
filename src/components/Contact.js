import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto md:mt-7 sm:mx-7 md:mx-12 lg:mx-32 xl:mx-56">
        {/* Section Header */}
        <div
          id="contact"
          className="flex flex-col items-center w-full mb-6 text-center"
        >
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            Contact Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            Let's connect
          </p>
        </div>

        {/* Contact Card */}
        <div className="rounded-xl bg-darkblue p-6 md:p-8 lg:p-10 lg:rounded-2xl">
          <div className="max-w-lg mx-auto">
            <h2
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="text-2xl lg:text-3xl text-dark-orange font-medium mb-6 text-center"
            >
              Get In Touch
            </h2>

            {/* Social Handles */}
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-5 mb-8 justify-center"
            >
              <SocialHandles />
            </div>

            {/* Contact Details */}
            <div className="grid gap-6 mb-8">
              {[
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  value: ContactData.phone,
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: ContactData.email,
                  isLink: true,
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Location",
                  value: ContactData.address,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay={idx * 150}
                  data-aos-once="false"
                  className="flex gap-4 items-center p-4 bg-opacity-10 bg-white rounded-lg transition-transform hover:scale-105"
                >
                  <div className="bg-dark-orange p-3 rounded-full flex-shrink-0">
                    {React.cloneElement(item.icon, {
                      className: "text-white text-xl",
                    })}
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    {item.isLink ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-white text-lg hover:text-dark-orange transition-colors break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-lg break-words">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex justify-center mt-8"
            >
              <a
                href={`mailto:${ContactData.email}`}
                className="inline-block font-medium text-white bg-dark-orange border-0 py-3 px-8 focus:outline-none hover:scale-110 hover:bg-orange-600 transition duration-500 rounded-xl text-lg"
                target="_blank"
                rel="noreferrer"
              >
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
