import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import StepForm from './Component/StepForm';
import OrderSuccessful from './OrderSuccessful';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StepForm></StepForm>,
    },
    {
      path: "/OrderSuccess",
      element: <OrderSuccessful></OrderSuccessful>
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;