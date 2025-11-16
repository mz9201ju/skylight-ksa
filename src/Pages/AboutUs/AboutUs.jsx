import AboutSkylightSection from "./Sections/AboutSkylightSection";
import WhyChooseSkylightSection from "./Sections/WhyChooseSkylightSection";
import MeetLeadershipSection from "./Sections/MeetLeadershipSection";
import OurCoreValuesSection from "./Sections/OurCoreValuesSection";
import ContactUsCTASection from "./Sections/ContactUsCTASection";

export default function AboutUs() {
    return (
        <div style={{ backgroundColor: "#0E151F", width: "100%", overflow: "hidden" }}>
            <AboutSkylightSection />
            <WhyChooseSkylightSection />
            <MeetLeadershipSection />
            <OurCoreValuesSection />
            <ContactUsCTASection />
        </div>
    );
}
