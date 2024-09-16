import React from 'react';

import Vehiclesummary from './Vehiclesummary';
import VehicleTable from './VehicleTable';

const App: React.FC = () => {
  return (
    <div className="bg-gray-200">
      
        <Vehiclesummary />
        <VehicleTable />
      </div>
    
  );
};

export default App;
