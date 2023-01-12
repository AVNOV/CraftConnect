import React from "react";

type StepperProp = {
  activeStep: number;
  steps: string[];
};

export default function Stepper({ activeStep, steps }: StepperProp) {
  return (
    <div className="flex">
      {steps.map((step, index) => (
        <div key={step} className={`py-2 px-4 text-center`}>
          <div className={`${index < activeStep ? "text-red" : "text-black"}`}>
            {step}
          </div>
          <div className="flex flex-col items-center ">
            <div
              className={`mt-2 w-8 h-8 rounded-full flex items-center justify-center text-white ${
                index < activeStep ? "bg-red" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>

            {/* {index !== steps.length - 1 && (
              <div
                className={`h-1 w-1/2 ${
                  index < activeStep ? "bg-red" : "bg-gray-300"
                }`}
              ></div>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
}
