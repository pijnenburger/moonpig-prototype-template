import { useState } from "react";
import {
  PrimaryButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@moonpig/launchpad-components";
import greetzLogo from "./assets/GreetzLogo.svg";
import moonpigLogo from "./assets/moonpig-app.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section
      id="center"
      className="flex grow flex-col items-center justify-center gap-6 max-lg:gap-5 max-lg:px-5 max-lg:pb-6 max-lg:pt-8"
    >
      <Tabs defaultValue="moonpig" className="w-full max-w-md">
        <TabList ariaLabel="Brand">
          <Tab value="moonpig">Moonpig</Tab>
          <Tab value="greetz">Greetz</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="moonpig">
            <div className="relative mx-auto aspect-square w-full max-w-[170px] pt-6">
              <img
                src={moonpigLogo}
                className="h-full w-full object-contain"
                alt="Moonpig"
              />
            </div>
          </TabPanel>
          <TabPanel value="greetz">
            <div className="relative mx-auto aspect-square w-full max-w-[170px] pt-6">
              <img
                src={greetzLogo}
                className="h-full w-full object-contain"
                alt="Greetz"
              />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <PrimaryButton onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </PrimaryButton>
    </section>
  );
}

export default App;
