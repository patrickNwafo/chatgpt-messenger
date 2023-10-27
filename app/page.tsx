import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HopePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="InfoText">&quot;Explain Something to me&quot;</p>
            <p className="InfoText">
              &quot;What is the difference between a dog and a cat&quot;
            </p>
            <p className="InfoText">
              &quot;What is the color of the sun?&quot;
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="InfoText">Change the ChatGPT Model to use</p>
            <p className="InfoText">
              Messeges are stored in Firebase&apos; Firestore
            </p>
            <p className="InfoText">
              Hot Toast notification when ChatGPT is thinking!
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="InfoText">
              May occationally generate incorrect information
            </p>
            <p className="InfoText">
              May occationally produce harmful intructions or biased content
            </p>
            <p className="InfoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HopePage;
