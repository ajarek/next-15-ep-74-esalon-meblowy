"use client";
import Image from "next/image";



const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full  p-8 ">
       
        <div className="relative w-[400px] max-lg:w-full  h-[400px] max-lg:h-300px flex flex-col shadow-lg overflow-hidden  ">
                  <Image
                    src="/images/about.png"
                    alt="O nas"
                    fill
                    className="object-cover w-full h-auto rounded-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center md:text-left mb-6">O nas</h1>
          <p className=" mb-4">
            Jesteśmy firmą z pasją do drewna i designu. Od lat tworzymy meble, które łączą w sobie
            tradycję, jakość i nowoczesny styl. Nasze produkty są ręcznie wykonane z najwyższej
            jakości materiałów, co gwarantuje ich trwałość i unikalny charakter.
          </p>
          <p className=" mb-4">
            Wierzymy, że meble to nie tylko elementy wyposażenia wnętrz, ale również inwestycja na
            lata. Dlatego każdy nasz produkt jest starannie zaprojektowany i wykonany z dbałością o
            detale.
          </p>
          <p className=" mb-4">
            Nasza oferta obejmuje szeroki wybór mebli do domu i biura, w tym stoły, krzesła, szafy,
            łóżka i wiele innych. Wszystkie nasze meble są dostępne online, a my dostarczamy je
            bezpośrednio pod Twoje drzwi.
          </p>
          <p className="">
            Zapraszamy do zapoznania się z naszą ofertą i dołączenia do grona zadowolonych klientów!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;