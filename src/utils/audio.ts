/**
 * Web Audio API synthesizer for realistic, soft paper page turn sound effects.
 * Requires no external audio files, works offline, and respects mute state.
 */

class PageSoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    // Load initial mute state from localStorage if available
    const saved = localStorage.getItem("parabek_sound_muted");
    if (saved !== null) {
      this.isMuted = saved === "true";
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    localStorage.setItem("parabek_sound_muted", String(muted));
  }

  public toggleMute(): boolean {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  private initContext(): AudioContext | null {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public playFlipSound(): void {
    if (this.isMuted) return;

    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const duration = 0.18; // 180ms paper flip
      const sampleRate = ctx.sampleRate;
      const bufferSize = sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);

      // Generate soft filtered noise simulating paper rustle
      for (let i = 0; i < bufferSize; i++) {
        const t = i / bufferSize;
        // Natural noise with gentle envelope shape
        const envelope = Math.sin(Math.PI * t) * Math.pow(1 - t, 0.5);
        data[i] = (Math.random() * 2 - 1) * envelope;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;

      // Bandpass filter to make noise sound like crisp paper slide
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1200, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + duration);
      filter.Q.setValueAtTime(1.5, ctx.currentTime);

      // Main gain envelope
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.03);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      noiseSource.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      noiseSource.start();
    } catch {
      // Ignore autoplay errors or audio context block
    }
  }
}

export const soundEngine = new PageSoundEngine();
