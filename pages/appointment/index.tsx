import { useState } from "react";
import Stepper from "../../components/Stepper";
import Button from "../../components/Button";
import ReasonAppointmentForm from "../../components/AppointmentForm/Reason";
import Head from "next/head";
import ContactDetailsForm from "../../components/AppointmentForm/ContactDetails";
import ConfirmationAppointmentForm from "../../components/AppointmentForm/Confirmation";
import Image from "next/image";
import confirm_icon from "../../assets/icons/confirm_icon.svg";
import Calendar from "../../components/Calendar";
const steps = ["Rendez-vous", "Motif RDV", "Coordonnées", "Confirmation"];

export default function Appointment() {
  const [activeStep, setActiveStep] = useState(0);
  const [reasonAppointment, setReasonAppointment] = useState("");
  const [description, setDescription] = useState("");
  const [accountInformation, setAccountInformation] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    console.log(reasonAppointment, description, firstName, lastName, email, phone );
  };

  return (
    <>
      <Head>
        <title>CraftConnect</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full flex justify-center items-center">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex mt-10 justify-center items-center">
            <div className="mt-4">
              {activeStep === 0 && <Calendar />}
              {activeStep === 1 && (
                <ReasonAppointmentForm
                  reasonAppointment={reasonAppointment}
                  setReasonAppointment={setReasonAppointment}
                  description={description}
                  setDescription={setDescription}
                />
              )}
              {activeStep === 2 && (
                <ContactDetailsForm
                  accountInformation={accountInformation}
                  setAccountInformation={setAccountInformation}
                  firstName={firstName}
                  setFirstName={setFirstName}
                  lastName={lastName}
                  setLastName={setLastName}
                  email={email}
                  setEmail={setEmail}
                  phone={phone}
                  setPhone={setPhone}
                />
              )}
              {activeStep === 3 && (
                <ConfirmationAppointmentForm
                  reasonAppointment={reasonAppointment}
                  description={description}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  phone={phone}
                />
              )}
              <div className="flex flex-row mt-4 justify-between ">
                <div className="mr-5">
                  {activeStep !== 0 && (
                    <Button onClick={handlePrev}>Précédent</Button>
                  )}
                </div>
                <div>
                  {activeStep !== steps.length - 1 && (
                    <Button onClick={handleNext}>Suivant</Button>
                  )}
                  {activeStep === steps.length - 1 && (
                    <Button onClick={handleSubmit}>
                      <div className="flex flex-row">
                        <Image
                          className="w-4 mr-2 transition-transform duration-700"
                          src={confirm_icon}
                          alt="confirm"
                        />
                        Confirmer
                      </div>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 flex justify-center w-full">
            <Stepper activeStep={activeStep} steps={steps} />
          </div>
        </div>
      </main>
    </>
  );
}
