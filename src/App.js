import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Cubes } from './Components/Cubes';
import { FPV } from './Components/FPV';
import Ground from './Components/Ground';
import { Menu } from './Components/Menu';
import { Player } from './Components/Player';
import { TextureSelector } from './Components/TextureSelector';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100,100,20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
