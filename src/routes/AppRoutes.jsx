import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/About/AboutPage.jsx";
import LearnMoreSchool from "../pages/School/learnMoreSchool.jsx";
import SignupPage from "../pages/Auth/SignUp/SignupPage.jsx";
import EmailVerificationPage from "../pages/Email/Verification/EmailVerificationPage.jsx";
// import FamilyMembershipPage from "../pages/FamilyMembershipPage";
// import EventsPage from "../pages/EventsPage";
// import MembersDirectoryPage from "../pages/MembersDirectoryPage";
// import AccountPage from "../pages/AccountPage";
// import GuidesPage from "../pages/GuidesPage";
// import GuideDetailPage from "../pages/GuideDetailPage";
// import ConstitutionPage from "../pages/ConstitutionPage";
// import DashboardPage from "../pages/DashboardPage";
// import BottomNavPage from "../pages/BottomNavPage";
// import PalettePage from "../pages/PalettePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/school" element={<LearnMoreSchool />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/verify-email" element={<EmailVerificationPage />} />
      {/* <Route path="/family-membership" element={<FamilyMembershipPage />} /> */}
      {/* <Route path="/events" element={<EventsPage />} /> */}
      {/* <Route path="/directory" element={<MembersDirectoryPage />} /> */}
      {/* <Route path="/account" element={<AccountPage />} /> */}
      {/* <Route path="/guides" element={<GuidesPage />} /> */}
      {/* <Route path="/guide-detail" element={<GuideDetailPage />} /> */}
      {/* <Route path="/constitution" element={<ConstitutionPage />} /> */}
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      {/* <Route path="/bottom-nav" element={<BottomNavPage />} /> */}
      {/* <Route path="/palette" element={<PalettePage />} /> */}
    </Routes>
  );
}

export default AppRoutes;
