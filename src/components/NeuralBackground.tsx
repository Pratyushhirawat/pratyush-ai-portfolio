import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "../hooks/useTheme";

function generateNodes(count: number, radius: number) {
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * (0.55 + Math.random() * 0.45);
    nodes.push(
      new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta) * 0.6,
        r * Math.cos(phi)
      )
    );
  }
  return nodes;
}

function buildEdges(nodes: THREE.Vector3[], maxDist: number, maxPerNode: number) {
  const positions: number[] = [];
  for (let i = 0; i < nodes.length; i++) {
    let connections = 0;
    for (let j = i + 1; j < nodes.length && connections < maxPerNode; j++) {
      const d = nodes[i].distanceTo(nodes[j]);
      if (d < maxDist) {
        positions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
        connections++;
      }
    }
  }
  return new Float32Array(positions);
}

function NetworkGroup({ accent, accent2 }: { accent: string; accent2: string }) {
  const group = useRef<THREE.Group>(null);
  const { nodes, edgePositions } = useMemo(() => {
    const n = generateNodes(70, 5.4);
    const e = buildEdges(n, 2.1, 3);
    return { nodes: n, edgePositions: e };
  }, []);

  const nodePositions = useMemo(() => {
    const arr = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      arr[i * 3] = n.x;
      arr[i * 3 + 1] = n.y;
      arr[i * 3 + 2] = n.z;
    });
    return arr;
  }, [nodes]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.045;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
    const { pointer } = state;
    group.current.rotation.y += pointer.x * 0.0006;
    group.current.rotation.x += -pointer.y * 0.0004;
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={accent} transparent opacity={0.22} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={accent2} size={0.075} sizeAttenuation transparent opacity={0.9} />
      </points>
    </group>
  );
}

function Sparks({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 220;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.012;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.03} sizeAttenuation transparent opacity={0.5} />
    </points>
  );
}

export default function NeuralBackground() {
  const { theme } = useTheme();
  const accent = theme === "dark" ? "#6C8CFF" : "#4C6EF5";
  const accent2 = theme === "dark" ? "#29E0C9" : "#29B8A6";

  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      className="absolute! inset-0"
    >
      <ambientLight intensity={0.6} />
      <NetworkGroup accent={accent} accent2={accent2} />
      <Sparks color={accent2} />
    </Canvas>
  );
}
