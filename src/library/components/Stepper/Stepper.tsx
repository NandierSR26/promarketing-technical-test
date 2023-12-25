'use client';

import React, { useState } from 'react'
import { Step, StepLabel, Stepper } from '@mui/material'
import { steps } from '@/shared/constants';
import style from './Stepper.module.css'

export const StepperComponent = () => {

  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    if(currentStep >= 3) return;
    setCurrentStep(currentStep+1);
  }

  const handlePrevious = () => {
    if(currentStep <= 1) return;
    setCurrentStep(currentStep-1);
  }

  return (
    <div>
      <Stepper activeStep={currentStep - 1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="flex justify-center items-center gap-52 mt-10">
        <button className={style['btn-previous']} onClick={handlePrevious}>
          Anterior
        </button>

        <button className={style['btn-next']} onClick={handleNext}>
          Siguente
        </button>
      </div>
    </div>
  )
}
