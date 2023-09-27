import React from 'react';
import Gitprofile from './componunt/Gitprofile';


function App() {
  return (
    <div className="bg-[#a06df3fa] h-[110vh]">
    
      <header className="p-4 text-slate-800 text-center">
        <h1 className="text-3xl font-semibold">GitHub User Profile</h1>
      </header>
      <main className="p-4">
        <Gitprofile />
      </main>
    </div>
  );
}

export default App;
