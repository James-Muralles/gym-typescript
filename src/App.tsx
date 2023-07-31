import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";




function App() {
  // using enums useState<string>('home') becomes useState<SelectedPage>(SelectedPage.Home)
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <div className="app bg-gray-20">
    <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}

    />
    </div>
  )

}

export default App
