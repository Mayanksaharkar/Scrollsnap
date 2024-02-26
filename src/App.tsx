import { useState } from "react";

import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { ScrollManager } from "./ScrollManager";

function App() {
  const [section, setSection] = useState(0);

  return (
    <div className='h-screen w-screen'>
      <MotionConfig>
        <Canvas>
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager onSectionChange={setSection} section={section} />

            <Scroll html>
              <section className='w-screen h-screen bg-blue-400'>
                Section 1
              </section>
              <section className='w-screen h-screen bg-red-400'>
                Section 2
              </section>
              <section className='w-screen h-screen bg-yellow-400'>
                Section 3
              </section>
              <section className='w-screen h-screen bg-cyan-400'>
                Section 4
              </section>
            </Scroll>
          </ScrollControls>
        </Canvas>
        {/* <Cursor /> */}
      </MotionConfig>
    </div>
  );
}

export default App;
