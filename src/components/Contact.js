import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto text-center md:mt-7 sm:mx-7 md:mx-12 lg:mx-32 xl:mx-56">
        <div id="contact" className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">Contact Me</h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            Let's connect
          </p>
        </div>

        <div className="rounded-xl bg-darkblue p-6 md:p-8 lg:p-10 lg:rounded-2xl">
          <div className="max-w-lg mx-auto">
            <h2
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="text-2xl lg:text-3xl text-dark-orange font-medium mb-6"
            >
              Get In Touch
            </h2>

            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-5 mb-8 justify-center"
            >
              <SocialHandles />
            </div>

            <div className="grid gap-6 mb-8">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="false"
                className="flex gap-4 items-center p-4 bg-opacity-10 bg-white rounded-lg transition-transform hover:scale-105"
              >
                <div className="bg-dark-orange p-3 rounded-full">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Phone</h3>
                  <p className="text-white text-lg">{ContactData.phone}</p>
                </div>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="150"
                data-aos-once="false"
                className="flex gap-4 items-center p-4 bg-opacity-10 bg-white rounded-lg transition-transform hover:scale-105"
              >
                <div className="bg-dark-orange p-3 rounded-full">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <a
                    href={`mailto:${ContactData.email}`}
                    className="text-white text-lg hover:text-dark-orange transition-colors"
                  >
                    {ContactData.email}
                  </a>
                </div>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="false"
                className="flex gap-4 items-center p-4 bg-opacity-10 bg-white rounded-lg transition-transform hover:scale-105"
              >
                <div className="bg-dark-orange p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-white text-lg">{ContactData.address}</p>
                </div>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="false"
              className="text-center mt-8"
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

export default Contact;
