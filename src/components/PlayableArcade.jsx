import React, { useEffect, useRef, useState } from 'react';
import { X, Trophy, RefreshCw, Zap, Crosshair, Sparkles } from 'lucide-react';
import { playClickSound, playQuestUnlockSound } from '../utils/soundEffects';

const PlayableArcade = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => parseInt(localStorage.getItem('arcade-highscore') || '0', 10));
  const [trophyUnlocked, setTrophyUnlocked] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = Math.min(800, window.innerWidth - 40));
    let height = (canvas.height = 480);

    let shipX = width / 2;
    const bullets = [];
    const targets = [];
    let localScore = 0;
    let isEnded = false;

    const targetNames = [
      { name: 'BUG #404', color: '#ff0055', hp: 1 },
      { name: 'MEMORY LEAK', color: '#9d4edd', hp: 2 },
      { name: 'LAG MONSTER', color: '#ffaa00', hp: 2 },
      { name: 'UNOPTIMIZED MESH', color: '#00fff5', hp: 1 },
    ];

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      shipX = e.clientX - rect.left;
      if (shipX < 20) shipX = 20;
      if (shipX > width - 20) shipX = width - 20;
    };

    const handleClick = () => {
      if (isEnded) return;
      playClickSound();
      bullets.push({ x: shipX, y: height - 40, speed: 10, radius: 4 });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    let spawnTimer = 0;

    const render = () => {
      ctx.fillStyle = '#06070b';
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = 'rgba(0, 255, 245, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Ship
      ctx.save();
      ctx.fillStyle = '#00fff5';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00fff5';
      ctx.beginPath();
      ctx.moveTo(shipX, height - 35);
      ctx.lineTo(shipX - 18, height - 10);
      ctx.lineTo(shipX + 18, height - 10);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Spawn Targets
      spawnTimer++;
      if (spawnTimer % 45 === 0) {
        const template = targetNames[Math.floor(Math.random() * targetNames.length)];
        targets.push({
          x: Math.random() * (width - 120) + 60,
          y: -20,
          speed: 1.5 + Math.random() * 1.5,
          name: template.name,
          color: template.color,
          hp: template.hp,
          width: 90,
          height: 28,
        });
      }

      // Move & Draw Bullets
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.y -= b.speed;
        ctx.save();
        ctx.fillStyle = '#ff0055';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#ff0055';
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (b.y < 0) bullets.splice(i, 1);
      }

      // Move & Draw Targets
      for (let tIdx = targets.length - 1; tIdx >= 0; tIdx--) {
        const t = targets[tIdx];
        t.y += t.speed;

        ctx.save();
        ctx.fillStyle = 'rgba(13, 18, 30, 0.9)';
        ctx.strokeStyle = t.color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = t.color;
        ctx.beginPath();
        ctx.roundRect(t.x - t.width / 2, t.y - t.height / 2, t.width, t.height, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px Orbitron, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(t.name, t.x, t.y + 3);
        ctx.restore();

        // Check collision with bullets
        for (let bIdx = bullets.length - 1; bIdx >= 0; bIdx--) {
          const b = bullets[bIdx];
          if (
            Math.abs(b.x - t.x) < t.width / 2 + 4 &&
            Math.abs(b.y - t.y) < t.height / 2 + 4
          ) {
            bullets.splice(bIdx, 1);
            t.hp -= 1;
            if (t.hp <= 0) {
              targets.splice(tIdx, 1);
              localScore += 100;
              setScore(localScore);
              if (localScore > highScore) {
                setHighScore(localScore);
                localStorage.setItem('arcade-highscore', localScore.toString());
              }
              if (localScore >= 1000 && !trophyUnlocked) {
                setTrophyUnlocked(true);
                playQuestUnlockSound();
              }
              break;
            }
          }
        }

        // Check ground reach
        if (t.y > height - 10) {
          isEnded = true;
          setGameOver(true);
        }
      }

      if (!isEnded) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="hud-panel w-full max-w-4xl p-6 rounded-3xl border-cyan-500/40 relative space-y-4 shadow-[0_0_50px_rgba(0,255,245,0.3)]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Crosshair size={20} />
            </div>
            <div>
              <h3 className="text-xl font-black font-heading cyber-gradient-text tracking-wider">
                BUG BUSTER 3000
              </h3>
              <p className="text-[10px] font-code text-gray-400">AIM WITH MOUSE // CLICK TO FIRE</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-[10px] font-code text-gray-400">CURRENT XP SCORE</div>
              <div className="text-xl font-heading font-black text-cyan-400">{score} XP</div>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-[10px] font-code text-gray-400">HIGH SCORE</div>
              <div className="text-xl font-heading font-black text-amber-400">{highScore} XP</div>
            </div>
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="p-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-cyan-400 transition-all"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-inner flex justify-center bg-black">
          <canvas ref={canvasRef} className="cursor-crosshair block" />

          {trophyUnlocked && (
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/50 text-xs font-code font-bold animate-bounce">
              <Trophy size={14} /> EASTER EGG UNLOCKED! (+1000 XP)
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-6 space-y-4">
              <div className="text-3xl font-black font-heading text-pink-500 tracking-wider">
                GAME OVER
              </div>
              <p className="text-sm font-code text-gray-300">
                FINAL SCORE: <span className="text-cyan-400 font-bold">{score} XP</span>
              </p>
              <button
                onClick={() => {
                  setGameOver(false);
                  setScore(0);
                }}
                className="arcade-btn-primary text-xs"
              >
                <RefreshCw size={16} /> REPLAY MISSION
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayableArcade;
