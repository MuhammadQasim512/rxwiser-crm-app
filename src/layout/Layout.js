import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessInfo from "../pages/BusinessInfo"; 
import PractiseLocation from "../pages/PractiseLocation";
import UserManagement from "../pages/UserManagement";
import Practioners from "../pages/Practioners";
  import Calender from "../pages/calender/Calender";
// import AddContact from "./pages/add/AddContact";
import Client from "../pages/client/Client";
import Shared from "../pages/shared/Shared";
import Contact from "../pages/contact/Contact";
import Referrer from "../pages/referrer/Referrer";
import ThirdParty from "../pages/third-party/ThirdParty";   
import Searchoptions from "../pages/Searchoptions";
import AddNewModal from "../pages/AddNewModal";
import Notes from "../pages/notes/Notes";
import Correspondence from "../pages/correspondence/Correspondence";
import RecordFiles from "../pages/record-files/RecordFiles";
import ClientDiagnoses from "../pages/client-diagnoses/ClientDiagnoses";
import CommunicationActivity from "../pages/communication-activity/CommunicationActivity";
import NewSms from "../pages/new-sms/NewSms";
import NewEmail from "../pages/new-email/NewEmail";
import NewLetter from "../pages/new-letter/NewLetter";
import AdminNotes from "../pages/admin-notes/AdminNotes";
import AdminFiles from "../pages/admin-files/AdminFiles";
import AdminForm from "../pages/admin-form/AdminForm";
import AdminManage from "../pages/admin-manage/AdminManage";
import ProfileClient from "../pages/profile_client/ProfileClient";
import ClientContact from "../pages/client-contact/ClientContact";
import CreateContact from "../pages/create-contact/CreateContact";
import ReferralReceived from "../pages/referral-received/ReferralReceived";
import AppoinmentsRemindar from "../pages/appoinments_remindar/AppoinmentsRemindar";
import ClientTask from "../pages/client_task/ClientTask";
import AppoinmentsClient from "../pages/appoinments_client/AppoinmentsClient";
import AppointmentStatistics from "../pages/appointment_statistics/AppointmentStatistics";
import BillingSetup from "../pages/billing_setup/BillingSetup";
import Insurance from "../pages/insurance/Insurance";
import Invoices from "../pages/invoices/Invoices";
import CreateInvoice from "../pages/create_invoice/CreateInvoice";
import PaymentReceived from "../pages/payment_received/PaymentReceived";

export default function Layout() {

  return (
    <Router>
      <div className="app">
        <Header />       
        <main className="main" id="top">
          <Sidebar />          
          <div className="content">
             <Routes>
             <Route path="/" element={<Calender />} /> 
             
            <Route path="/client" element={<Client />} />
             <Route path="/shared" element={<Shared />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/referrers" element={<Referrer />} />
            <Route path="/third-party" element={<ThirdParty />} />
            
              <Route path="/business_info" element={<BusinessInfo />} /> 
              <Route path="/practise_location" element={<PractiseLocation />} />
              <Route path="/user_management" element={<UserManagement />} />
              <Route path="/select_practitioners" element={<Practioners />} />
              <Route path="/Search_options" element={<Searchoptions />} />
              <Route path="/Add_New_Modal" element={<AddNewModal />} />
              
              <Route path="/notes" element={<Notes />} />
              <Route path="/profile_client" element={<ProfileClient />} />
              <Route path="/client-contact" element={<ClientContact />} />
              <Route path="/create-contact" element={<CreateContact />} />
              <Route path="/referral-received" element={<ReferralReceived />} />
              <Route path="/appoinments-remindar" element={<AppoinmentsRemindar />} />
              <Route path="/client-task" element={<ClientTask />} />
              <Route path="/appoinments_client" element={<AppoinmentsClient />} />
              <Route path="/appointment_statistics" element={<AppointmentStatistics />} />
              <Route path="/billing_setup" element={<BillingSetup />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/create_invoice" element={<CreateInvoice />} />
              <Route path="/payment_received" element={<PaymentReceived />} />
              
              
              <Route path="/correspondence" element={<Correspondence />} />
              <Route path="/record-files" element={<RecordFiles />} />
              <Route path="/client-diagnoses" element={<ClientDiagnoses />} />
              <Route path="/communication-activity" element={<CommunicationActivity />} />
              <Route path="/create-sms" element={<NewSms />} />
              <Route path="/new-email" element={<NewEmail />} />
              <Route path="/create-letter" element={<NewLetter />} />
              <Route path="/admin-notes" element={<AdminNotes />} />
              <Route path="/admin-files" element={<AdminFiles />} />
              <Route path="/admin-form" element={<AdminForm />} />
              <Route path="/admin-manage" element={<AdminManage />} />
              
            </Routes> 
            <Footer />
          </div>
        </main>
      </div>
     </Router>
  );
}

