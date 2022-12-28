import * as THREE from "three";
import {
  Canvas,
  extend,
  useFrame,
  useThree,
  useLoader,
} from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useLocation, useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/img/3d/강릉.jpg");
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  const navigate = useNavigate();

  // 3d 매쉬 클릭으로 이동 시킴 우리는 각각의 이미지 or 맵화면으로
  const handlePointerDown = (e) => {
    console.log(e);
    navigate("/suggest");
  };
  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      onPointerDown={handlePointerDown}
      onClick={handlePointerDown}
    >
      <boxBufferGeometry />
      {/* <meshPhysicalMaterial map={texture} /> */}
      <meshPhysicalMaterial color="blue" opacity={1} transparent wireframe />
    </mesh>
  );
};
const BackGround = (props) => {
  const location = useLocation();
  const name = location.state.threeName;
  console.log(name);
  const texture = useLoader(THREE.TextureLoader, `/img/3d/${name}.jpg`);
  const { gl } = useThree();

  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);

  return <primitive attach="background" object={formatted.texture} />;
};

function Three() {
  // const location = useLocation();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Snowfall
        // Changes the snowflake color
        color="white"
        // Applied to the canvas element
        // style={{ background: "#7c74ab" }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      />
      <Canvas style={{ background: "black" }} camera={{ position: [6, 6, 6] }}>
        <Suspense fallback={null}>
          <Box position={[0, 1, 0]} />
        </Suspense>
        <BackGround></BackGround>
        <pointLight />
        {/* <ambientLight intensity={0.2} /> */}
        {/* <axesHelper args={[5]} /> */}
        <Orbit />
      </Canvas>
    </div>
  );
}
export default Three;
