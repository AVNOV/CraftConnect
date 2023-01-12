import { useState } from "react";
import Stepper from "../../components/Stepper";
import Button from "../../components/Button";
const steps = ["Etape 1", "Etape 2", "Etape 3", "Etape 4"];

export default function Appointment() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4">
        {activeStep === 0 && <p>Contenu de l'étape 1</p>}
        {activeStep === 1 && <p>Contenu de l'étape 2</p>}
        {activeStep === 2 && <p>Contenu de l'étape 3</p>}
        {activeStep === 3 && <p>Contenu de l'étape 4</p>}
      </div>
      <div className="flex flex-row mt-4">
        <div className="mr-5">
          {activeStep !== 0 && <Button onClick={handlePrev}>Précédent</Button>}
        </div>
        <div>
          {activeStep !== steps.length - 1 && (
            <Button onClick={handleNext}>Suivant</Button>
          )}
        </div>
      </div>
      <Stepper activeStep={activeStep} steps={steps} />
    </div>
  );
}
