import React, { useState } from "react";
import BackgroundMusic from "./BackgroundMusic";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const InvitationCard = () => {
  const [language, setLanguage] = useState("marathi");
  const [muted, setMuted] = useState(false);

  const images = [
  { src: "/img/invitationcard.jpg", alt: "Mahalakshmi Devi Invitation Card" },
  { src: "/img/Devee.jpg", alt: "DeMahalakshmi Devi Photo" },
  { src: "/img/MahalakshmiIMG.jpg", alt: "Mahalakshmi Devi Mandir" },
  // Add more images here
];


 const content = {
  marathi: {
    title: "श्री महालक्ष्मी देवीची यात्रा",
    dateRange: "मंगळवार दि. ०६/०५/२०२५ ते शुक्रवार दि. ०९/०५/२०२५ रोजी संपन्न होत आहे.",
    request: "तुमच्या उपस्थितीने हा कार्यक्रम अधिक सुखद आणि अर्थपूर्ण होईल. तरी आपण सहकुटुंब सहपरिवार उपस्थित राहून स्नेहभोजनाचा लाभ घ्यावा ही नम्र विनंती.",
    ourNames: "आपले नम्र:",
    names: [
      "श्रीमती आक्काताई मारुती मगदूम",
      "श्री. तुकाराम मारुती मगदूम",
      "सौ.गीता तुकाराम मगदूम",
      "कु.रोहित तुकाराम मगदूम"
    ],
    laxmi: "लक्ष्मी खेळवणे",
    laxmiDate: "मंगळवार दि. ०६/०५/२०२५ रात्री",
    food: "स्नेह भोजन",
    foodDate: "बुधवार दि. ०७/०५/२०२५ रोजी दुपारी ३:०० पासून",
    addressTitle: "घरचा पत्ता:",
    address: [
      "विठ्ठलाई रोड, (मगदूम वाडी)",
      "मु.पो. कडगांव  ता. गडहिंग्लज, जि. कोल्हापूर"
    ],
    contact: "संपर्क: 9021835116 / 9673878934",
    map: "Google नकाशावर पहा",
    personalMessage: (
      <div className="text-sm text-gray-700 mt-4">
        <p>सप्रेम नमस्कार,</p>
        <p>
          माझ्या वतीने तुम्हाला हे निमंत्रण पाठवित आहे. काही कारणास्तव मी
          स्वत: उपस्थित राहू शकलेलो नाही, तरीही माझ्या मनापासून हे निमंत्रण
          स्वीकारून लक्ष्मीच्या यात्रेसाठी उपस्थित राहावे.
        </p>
      
      </div>
    )
  },
  english: {
    title: "Shree Mahalakshmi Devi Yatra",
    dateRange: "From Tuesday 06/05/2025 to Friday 09/05/2025.",
    request: "We humbly invite you and your family to attend and enjoy the feast.",
    ourNames: "Yours sincerely:",
    names: [
      "Srimati. Akkatai Maruti Magdum",
      "Mr. Tukaram Maruti Magdum",
      "Mrs. Geeta Tukaram Magdum",
      "Mr. Rohit Tukaram Magdum"
    ],
    laxmi: "Laxmi Khelvane",
    laxmiDate: "Tuesday 06/05/2025 Night",
    food: "Feast",
    foodDate: "Wednesday 07/05/2025 from 3:00 PM",
    addressTitle: "Home Address:",
    address: [
      "Vitthalai Road, Magdum Wadi,",
      "Post: Kadgaon, Tal: Gadhinglaj, Dist: Kolhapur"
    ],
    contact: "Contact: 9021835116 / 9673878934",
    map: "View on Google Maps",
    personalMessage: (
      <div className="text-sm text-gray-700 mt-4">
        <p>Dear Sir/Madam,</p>
        <p>
          I am sending this invitation on behalf of myself. Due to certain reasons,
          I will not be able to attend personally, but I humbly request you to accept
          this invitation and join us for the Mahalakshmi Yatra.
        </p>
        <p>Your presence will make this event more joyful and meaningful.</p>
      </div>
    )
  }
};


  const lang = content[language];

  const FadeInSection = ({ children, delay = 0 }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay }}
      >
        {children}
      </motion.div>
    );
  };

  const mapUrl = "https://www.google.com/maps/place/Matru+Pitru+Chaya(+Rohit+Magdum+)";

  return (
    <div className="bg-gradient-to-tr from-yellow-100 to-red-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-pink-50 shadow-xl rounded-2xl w-full max-w-md p-4 text-center space-y-4">
        {/* Background Music */}
       
        <div className="flex justify-end text-xs text-blue-600 mb-2">
          <button onClick={() => setLanguage(language === "marathi" ? "english" : "marathi")}>
            {language === "marathi" ? "Switch to English" : "मराठीत पाहा"}
          </button>
         <BackgroundMusic />
        </div>
         
        <FadeInSection delay={0.1}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000, // Change slide every 2 seconds
              disableOnInteraction: false,
            }}
            className="rounded-md"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-md w-full h-64 object-cover transition-transform hover:scale-110"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <h1 className="text-lg font-bold text-red-700">{lang.title}</h1>
        </FadeInSection>

        <FadeInSection delay={0.4}>
            <p className="text-sm text-gray-700">{lang.personalMessage}</p>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <p className="text-sm text-gray-700">{lang.dateRange}</p>
        </FadeInSection>

        <FadeInSection delay={0.7}>
          <p className="text-sm text-gray-700">{lang.request}</p>
        </FadeInSection>

        <FadeInSection delay={0.9}>
          <div className="text-sm text-pink-800 font-semibold">{lang.ourNames}</div>
          <ul className="text-sm text-gray-800 space-y-1">
            {lang.names.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        </FadeInSection>

        <FadeInSection delay={1.1}>
          <div className="bg-yellow-200 p-2 rounded-md">
            <p className="font-semibold text-pink-600">{lang.laxmi}</p>
            <p className="text-sm">{lang.laxmiDate}</p>
          </div>
        </FadeInSection>

        <FadeInSection delay={1.3}>
          <div className="bg-red-200 p-2 rounded-md">
            <p className="font-semibold text-pink-700">{lang.food}</p>
            <p className="text-sm">{lang.foodDate}</p>
          </div>
        </FadeInSection>

        <FadeInSection delay={1.5}>
          <div className="bg-blue-100 p-2 rounded-md text-sm">
            <p className="font-semibold">{lang.addressTitle}</p>
            {lang.address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={1.7}>
          <p className="text-sm mt-2">{lang.contact}</p>
        </FadeInSection>

        <FadeInSection delay={1.9}>
          {/* Grid Layout for Photo + Map */}
          <div className="grid grid-cols-1 gap-4">
            {/* House Photo */}
            <div className="flex flex-col items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1714573140475!6m8!1m7!1s9oNN0PVcK-5AnNtcyB0MVg!2m2!1d16.250613!2d74.3034185!3f240!4f-10!5f0.7820865974627469"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg mt-4"
              />
            </div>

            {/* Google Map */}
            <div className="flex flex-col items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4923306535254!2d74.3419949750842!3d16.24727888880271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc022f4e455f11d%3A0xc70fc1f42796893e!2sMatru%20Pitru%20Chaya(Rohit%20Magdum)!5e0!3m2!1sen!2sin!4v1714540006702!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>

              {/* Buttons */}
              <div className="flex gap-3 mt-3">
                <div className="mt-3">
            <a
              href="https://maps.app.goo.gl/RHtqf4yHp9sVvfx77"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              {lang.map}
            </a>
              </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};
export default InvitationCard;
