import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useRef, useState } from 'react';

export default function Home() {
  const [audioPlayed, setAudioPlayed] = useState(false);
  const refAnimationInstance = useRef(null);
  const getInstance = (instance: null) => {
    refAnimationInstance.current = instance;
  };
  let audio =
    typeof Audio != 'undefined' ? new Audio('/partyhorn.wav') : undefined;

  const startAudio = () => {
    if (audio !== undefined) audio.play();
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    audioPlayed ? null : startAudio();
    setAudioPlayed(true);
    animateConfetti();
  };

  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const getAnimationSettings = (origA: number, origB: number) => {
    return {
      startVelocity: 30,
      spread: 360,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(origA, origB),
        y: Math.random() - 0.2,
      },
    };
  };

  const animateConfetti = () => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tea Guy Tom</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7079545215675025"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '36vh',
          }}
        >
          <a
            style={{
              fontSize: '1.1em',
              fontWeight: '600',
              maxWidth: '350px',
              textAlign: 'center',
            }}
            href="https://www.youtube.com/@teaguytom"
          >
            Click below to celebrate{' '}
            <span style={{ fontWeight: '800' }}>TeaguyTom</span> hitting{' '}
            <span style={{ fontWeight: '800' }}>100</span> Youtube Subscribers
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2em',
          }}
        >
          <form onSubmit={handleSubmit}>
            <ReactCanvasConfetti
              refConfetti={getInstance}
              style={{
                position: 'fixed',
                pointerEvents: 'none',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
              }}
            />
            <button
              style={{ padding: '1.2em', fontSize: '1.4em', fontWeight: 800 }}
            >
              🎉 Celebrate 🎉
            </button>
          </form>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2em',
          }}
        >
          <a
            style={{ fontSize: '.8em' }}
            href="https://www.youtube.com/@teaguytom"
          >
            Visit{' '}
            <span style={{ fontWeight: '800' }}>
              TeaguyTom{"'"}s Youtube Page
            </span>{' '}
            here
          </a>
        </div>
      </div>
    </div>
  );
}
