import * as React from 'react';

interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  return(
        <div className='container mx-auto p-2'>
            <div className='bg-banner my-8 rounded-xl bg-cover'>
                
                <h2 className='text-white text-center text-4xl pb-4'>
                    URL Shortener
                </h2>

            </div>
        </div>
  ) ;
};

export default FormContainer;
