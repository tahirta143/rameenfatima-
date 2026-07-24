'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.025);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 5, 60);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xb000ff, 4, 60);
    pointLight2.position.set(-10, -10, -5);
    scene.add(pointLight2);

    // 1. Floating Primary Mesh: Torus Knot Wireframe
    const knotGeo = new THREE.TorusKnotGeometry(2.6, 0.65, 140, 36);
    const knotMat = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x3b004f,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.65,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    knotMesh.position.set(6, 2, -2);
    scene.add(knotMesh);

    // 2. Secondary Floating Mesh: Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xb000ff,
      wireframe: true,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.55,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(-7, -4, -4);
    scene.add(icoMesh);

    // 3. Floating Ring Geometry
    const ringGeo = new THREE.RingGeometry(3.8, 4.0, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.set(-5, 5, -8);
    ringMesh.rotation.x = Math.PI / 4;
    scene.add(ringMesh);

    // 4. Particle Dust Field
    const particleCount = 500;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 35;
    }

    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.16,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Parallax & Scroll Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse parallax & scroll
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      scrollY += (targetScrollY - scrollY) * 0.08;

      const scrollProgress = scrollY * 0.0025;

      // Dynamic rotation & floating position based on scroll
      knotMesh.rotation.x = elapsedTime * 0.25 + scrollProgress * 0.7;
      knotMesh.rotation.y = elapsedTime * 0.35 + scrollProgress * 1.1;
      knotMesh.position.y = Math.sin(elapsedTime * 0.8) * 0.6 + 2 - (scrollProgress % 10);
      knotMesh.position.x = 6 + targetX * 1.8;
      knotMesh.scale.setScalar(1 + Math.sin(scrollProgress) * 0.15);

      // Rotate secondary ico mesh
      icoMesh.rotation.x = elapsedTime * 0.2 - scrollProgress * 0.6;
      icoMesh.rotation.z = elapsedTime * 0.3;
      icoMesh.position.y = Math.cos(elapsedTime * 0.7) * 0.7 - 4 + (scrollProgress % 8);
      icoMesh.position.x = -7 - targetY * 1.8;

      // Ring animation
      ringMesh.rotation.z = elapsedTime * 0.15 + scrollProgress * 0.4;
      ringMesh.rotation.y = scrollProgress * 0.2;

      // Particle system movement
      particleSystem.rotation.y = elapsedTime * 0.06 + scrollProgress * 0.3;
      particleSystem.rotation.x = scrollProgress * 0.15;

      // Camera parallax tilt & zoom on scroll
      camera.position.x = targetX * 1.5;
      camera.position.y = -targetY * 1.5 - (scrollProgress % 5);
      camera.lookAt(0, -(scrollProgress % 5), 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-80"
      aria-hidden="true"
    />
  );
}
