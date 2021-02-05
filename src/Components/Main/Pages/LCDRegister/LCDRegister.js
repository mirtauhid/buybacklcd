import React from 'react';
import Multistep from 'react-multistep';
import StepOne from '../StepOne/StepOne';
import StepThree from '../StepThree/StepThree';
import StepTwo from '../StepTwo/StepTwo';

const LCDRegister = () => {
    const steps = [
        { name: 'StepOne', component: <StepOne /> },
        { name: 'StepTwo', component: <StepTwo /> },
        { name: 'StepThree', component: <StepThree /> }
    ];
    <Multistep showNavigation={true} steps={steps} />
    return (
        <div>

        </div>
    );
};

export default LCDRegister;