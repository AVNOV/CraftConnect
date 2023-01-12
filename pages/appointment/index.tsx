import { useState } from "react";
import Stepper from "../../components/Stepper";
import Button from "../../components/Button";
import ReasonAppointmentForm from "../../components/AppointmentForm/Reason";
import Head from "next/head";
const steps = ["Rendez-vous", "Motif", "Coordonnées", "Confirmation"];

export default function Appointment() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
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
              {activeStep === 0 && <p>Contenu de l'étape 1</p>}
              {activeStep === 1 && <ReasonAppointmentForm />}
              {activeStep === 2 && <p>Contenu de l'étape 3</p>}
              {activeStep === 3 && <p>Contenu de l'étape 4</p>}
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
