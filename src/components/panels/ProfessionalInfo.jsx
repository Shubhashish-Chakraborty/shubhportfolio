import React, { useState } from "react";
import DownIcon from "@/components/ui/DownIcon";
import Right from "@/components/ui/Right";
import FolderIcon from "@/components/ui/FolderIcon";
import MailIcon from "@/components/ui/MailIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";
import Tab from "@/components/Tabs/Tab";
import MainDashboard from "@/components/dashboards/MainDashboard";

const ProfessionalInfo = ({ category, h1, h2, h3 }) => {
  const [activePanel, setActivePanel] = useState("h1");

  const renderContent = () => {
    switch (category) {
      case "professional-info":
        switch (activePanel) {
          case "h1":
            return (
              <MainDashboard
                link="https://www.linkedin.com/in/Shubhashish-Chakraborty"
                number={2}
                h1="Full Stack Developer at Nuvance Technologies"
                // l1="- Built 2 responsive React.js apps with 100% browser compatibility"
                // l2="- Improved UI integration and user experience"
                // l3="- Ensured clean, maintainable code"
                // l4="- Created documentation, boosting team efficiency"
                // h2="Full Stack Developer at Nuvance Technologies"
                // l5="- Built 5 responsive web apps using HTML, CSS, and JavaScript"
                // l6="- Ensured compatibility across all devices"
                // l7="- Delivered 5 projects ahead of schedule"
                // l8="- Earned a letter of recommendation for outstanding performance."
              />
            );
          case "h2":
            return (
              <MainDashboard
                number={23}
                h1="Primary Stack"
                l1="- Next.js, TypeScript"
                l2="- PostgreSQL, Prisma"
                h2="Frontend"
                l5="- Tailwind CSS, React.js"
                l6="- HTML, CSS, JavaScript"
                h3="Backend"
                l9="- Node.js, Express.js"
                l10=""
                h4="Languages"
                l13="- Python, C++"
                l14="- JavaScript, Bash" 
              />
            );
          case "h3":
            return (
              <MainDashboard
                number={15}
                h1="Core Soft Skills"
                l1="- Active Listening"
                l2="- Critical Thinking"
                l3="- Problem Solving"
                l4="- Decision Making"
                h2="Interpersonal Skills"
                l5="- Teamwork"
                l6="- Leadership Qualities"
                l7="- Flexibility"
                l8="- Adaptability"
              />
            );
          case "mail":
            return (
              <MainDashboard
                number={7}
                h1="Mail"
                l1="- shubhashish147@gmail.com"
                l2="- Active for contact"
                l3="- Response time: 24-48 hours"
                l4="- Preferred for professional inquiries"
              />
            );
          case "contact":
            return (
              <MainDashboard
                number={7}
                h1="// Phone"
                l1="- +91-8602061128"
                l2="- Reachable during business hours"
                l3="- Available via WhatsApp"
                l4="- Best time to call: 5 PM - 12 PM (IST)"
              />
            );
          default:
            return null;
        }

      case "personal-info":
        switch (activePanel) {
          case "h1":
            return (
              <MainDashboard
                number={7}
                h1="Personal Bio"
                l1="- Hello, I am Shubhashish Chakraborty"
                l2="- Undergraduate Student"
                l3="- Pursuing B.Tech in Computer Science"
                l4="- Bhilai, Chhattisgarh"
              />
            );
          case "h2":
            return (
              <MainDashboard
                number={6}
                h1="Personal Interests"
                l1="- Music"
                l2="- Coding"
                l4="- Travelling"
              />
            );
          case "h3":
            return (
              <MainDashboard
                number={7}
                h1="Qualifications"
                l1="- "
                l2="- "
                l3="- "
                l4="- "
              />
            );
          case "mail":
            return (
              <MainDashboard
                number={7}
                h1="Mail"
                l1="- shubhashish147@gmail.com"
                l2="- Active for contact"
                l3="- Response time: 24-48 hours"
                l4="- Preferred for professional inquiries"
              />
            );
          case "contact":
            return (
              <MainDashboard
                number={7}
                h1="Phone"
                l1="- +91-8602061128"
                l2="- Reachable during business hours"
                l3="- Available via WhatsApp"
                l4="- Best time to call: 5 PM - 12 PM (IST)"
              />
            );
          default:
            return null;
        }

      case "hobbies-info":
        switch (activePanel) {
          case "h1":
            return (
              <MainDashboard
                number={6}
                h1="Favorite Sports"
                l1="- Basketball"
                l2="- Cricket"
                l4="- Badminton"
              />
            );
          case "h2":
            return (
              <MainDashboard
                number={5}
                h1="Favorite Games"
                l2="- PC Games"
                l4="- Hahahaha"
              />
            );
          case "h3":
            return (
              <MainDashboard
                number={15}
                h1="Favorite Movies"
                l1="- Veer-Zaara"
                l2="- Animal"
                l3="- All Kind of Horror movies!"
                h2="Favourite Series"
                l5="- Money Heist"
                l6="- Lucifer"
                l7="- Elite"
                l8="- The Family Man"
              />
            );
          case "mail":
            return (
              <MainDashboard
                number={7}
                h1="Mail"
                l1="- shubhashish147@gmail.com"
                l2="- Active for contact"
                l3="- Response time: 24-48 hours"
                l4="- Preferred for professional inquiries"
              />
            );
          case "contact":
            return (
              <MainDashboard
                number={7}
                h1="Phone"
                l1="- +91-8602061128"
                l2="- Reachable during business hours"
                l3="- Available via WhatsApp"
                l4="- Best time to call: 5 PM - 12 PM (IST)"
              />
            );
          default:
            return null;
        }

      default:
        return null;
    }
  };

  const getTabText = () => {
    switch (activePanel) {
      case "h1":
        return h1;
      case "h2":
        return h2;
      case "h3":
        return h3;
      case "mail":
        return "Mail";
      case "contact":
        return "Contact";
      default:
        return "Experience";
    }
  };

  return (
    <main className="flex flex-row h-full">
      <aside className="w-[259px] border-r border-white h-full">
        <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2">{category}</div>
        </div>
        <div className="h-[110px] flex flex-col justify-evenly items-start ">
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom ${
              activePanel === "h1" ? "text-white-custom" : ""
            }`}
            onClick={() => setActivePanel("h1")}
          >
            <div className="pl-2 flex justify-center items-center">
              {activePanel === "h1" ? <DownIcon /> : <Right />}
            </div>
            <div className="pl-2 flex justify-center items-center">
              <FolderIcon />
            </div>
            <div className="pl-2">{h1}</div>
          </div>
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom ${
              activePanel === "h2" ? "text-white-custom" : ""
            }`}
            onClick={() => setActivePanel("h2")}
          >
            <div className="pl-2 flex justify-center items-center">
              {activePanel === "h2" ? <DownIcon /> : <Right />}
            </div>
            <div className="pl-2 flex justify-center items-center">
              <FolderIcon />
            </div>
            <div className="pl-2">{h2}</div>
          </div>
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom ${
              activePanel === "h3" ? "text-white-custom" : ""
            }`}
            onClick={() => setActivePanel("h3")}
          >
            <div className="pl-2 flex justify-center items-center">
              {activePanel === "h3" ? <DownIcon /> : <Right />}
            </div>
            <div className="pl-2 flex justify-center items-center">
              <FolderIcon />
            </div>
            <div className="pl-2">{h3}</div>
          </div>
        </div>
        <div className="flex flex-row text-white-custom border-y border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2">Contacts</div>
        </div>
        <div className="h-[70px] flex flex-col justify-evenly items-start border-b border-white">
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom ${
              activePanel === "mail" ? "text-white-custom" : ""
            }`}
            onClick={() => setActivePanel("mail")}
          >
            <div className="pl-2 flex justify-center items-center">
              {activePanel === "mail" ? <DownIcon /> : <Right />}
            </div>
            <div className="pl-2 flex justify-center items-center">
              <MailIcon />
            </div>
            <div className="pl-2">Mail</div>
          </div>
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom ${
              activePanel === "contact" ? "text-white-custom" : ""
            }`}
            onClick={() => setActivePanel("contact")}
          >
            <div className="pl-2 flex justify-center items-center">
              {activePanel === "contact" ? <DownIcon /> : <Right />}
            </div>
            <div className="pl-2 flex justify-center items-center">
              <PhoneIcon />
            </div>
            <div className="pl-2">Contact</div>
          </div>
        </div>
      </aside>
      <div>
        <div>
          <Tab text={getTabText()} />
        </div>
        <div>{renderContent()}</div>
      </div>
    </main>
  );
};

export default ProfessionalInfo;
