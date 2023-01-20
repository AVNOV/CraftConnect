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

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    console.log("submit");
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
              {activeStep === 1 && <ReasonAppointmentForm />}
              {activeStep === 2 && <ContactDetailsForm />}
              {activeStep === 3 && <ConfirmationAppointmentForm />}
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
