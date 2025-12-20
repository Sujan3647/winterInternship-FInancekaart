import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  const partners = [
    { name: "Amazon", logo: "Amazon-Logo.png" },
    { name: "Myntra", logo: "Myntra-Logo.png" },
    { name: "Ajio", logo: "Ajio-Logo.png" },
    { name: "Meesho", logo: "messo-removebg-preview.png" },
    { name: "Tata CLiQ", logo: "Tata-Cliq-logo.png" },
    { name: "Snapdeal", logo: "snapdeal-new-logo.png" },
    { name: "Nykaa", logo: "nikya-removebg-preview.png" },
    { name: "Lenskart", logo: "Lenskart-Logo-2013.png" },
    { name: "Swiggy", logo: "swiggy.jpeg" },
    { name: "Blinkit", logo: "blinkit.jpeg" },
    { name: "BigBasket", logo: "bigbasket.png" },
    { name: "Zepto", logo: "Logo_of_Zepto.png" },
    { name: "Domino's", logo: "dominos-pizza-logo-png_seeklogo-255785-removebg-preview.png" },
    { name: "KFC", logo: "KFC_logo.svg.png" },
    { name: "McDonald's", logo: "macdoaland.jpeg" },
    { name: "Pizza Hut", logo: "pizaa hiut.jpeg" },
    { name: "Burger King", logo: "buiggerking-removebg-preview.png" },
    { name: "Subway", logo: "subway.png" },
    { name: "Starbucks", logo: "Starbucks_Corporation_Logo_2011.svg.png" },
    { name: "Download", logo: "download.png" }
  ];

  return (
    <div className={className}>
      <h5 className="tagline mb-4 md:mb-6 text-center text-n-1/50 text-xs md:text-sm">
       Turning everyday shopping into smart savings
      </h5>
      <div className="relative overflow-hidden py-2 md:py-4">
        <div className="flex animate-scroll-logos gap-4 md:gap-8">
          {/* First set of logos */}
          {partners.map((partner, index) => (
            <div
              className="flex items-center justify-center flex-shrink-0 h-16 md:h-24"
              key={`first-${index}`}
            >
              <img
                src={`/logos/${partner.logo}`}
                alt={partner.name}
                className="h-8 md:h-12 max-w-[100px] md:max-w-[150px] object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              className="flex items-center justify-center flex-shrink-0 h-16 md:h-24"
              key={`second-${index}`}
            >
              <img 
                src={`/logos/${partner.logo}`}
                alt={partner.name}
                className="h-8 md:h-12 max-w-[100px] md:max-w-[150px] object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
