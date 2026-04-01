import { useState } from "react";
import moonpigAppLogo from "./assets/moonpig-app.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section
      id="center"
      className="flex grow flex-col items-center justify-center gap-[25px] max-lg:gap-[18px] max-lg:px-5 max-lg:pb-6 max-lg:pt-8"
    >
      <div className="relative aspect-square w-full max-w-[170px]">
        <img
          src={moonpigAppLogo}
          className="h-full w-full object-contain"
          alt="Moonpig app"
        />
      </div>
      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-brand-interaction px-3 py-2 font-sans text-base font-bold text-inverted transition-colors duration-300 hover:bg-brand-interaction-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus-ring"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </section>
  );
}

export default App;
