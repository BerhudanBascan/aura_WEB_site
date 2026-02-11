import React, { useState } from 'react';
import { ImageSize, GenerationStatus } from '../types';
import { generateProductConcept } from '../services/gemini';
import { Wand2, Download, RefreshCw, Layers, Box, Type, Palette } from 'lucide-react';

const DesignStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<ImageSize>(ImageSize.OneK);
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setStatus(GenerationStatus.LOADING);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateProductConcept(prompt, size);
      setGeneratedImage(imageUrl);
      setStatus(GenerationStatus.SUCCESS);
    } catch (e) {
      console.error(e);
      setStatus(GenerationStatus.ERROR);
    }
  };

  return (
    <section id="studio" className="min-h-screen bg-[#111] text-white flex flex-col pt-20">
      
      {/* Tool Header */}
      <div className="border-b border-white/10 bg-[#111] px-8 py-4 flex justify-between items-center sticky top-20 z-30">
        <div className="flex items-center gap-4">
           <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center">
              <Box size={16} className="text-white" />
           </div>
           <div>
              <h2 className="text-sm font-medium uppercase tracking-widest">AURA Atelier</h2>
              <p className="text-[10px] text-white/40">v2.0 • Powered by Gemini</p>
           </div>
        </div>
        <div className="flex gap-4">
           <button className="text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors">Save Draft</button>
           <button className="text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors">Reset</button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-80px)]">
        
        {/* Left: Configuration Panel */}
        <div className="w-full md:w-[400px] border-r border-white/10 bg-[#151515] p-8 overflow-y-auto custom-scrollbar">
           
           <div className="space-y-8">
              {/* Prompt Input */}
              <div>
                 <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-400 mb-4">
                    <Type size={12} /> Concept Prompt
                 </label>
                 <textarea 
                   value={prompt}
                   onChange={(e) => setPrompt(e.target.value)}
                   placeholder="Describe your vision (e.g., 'Matte black shampoo bottle with gold foil serif typography')..."
                   className="w-full h-40 bg-[#0a0a0a] border border-white/10 rounded-lg p-4 text-sm text-white focus:border-brand-500 focus:outline-none transition-colors resize-none font-mono leading-relaxed placeholder:text-white/20"
                 />
              </div>

              {/* Settings */}
              <div>
                 <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-400 mb-4">
                    <Layers size={12} /> Render Settings
                 </label>
                 
                 <div className="grid grid-cols-1 gap-4">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-4">
                       <span className="text-xs text-white/60 block mb-3">Output Resolution</span>
                       <div className="grid grid-cols-3 gap-2">
                          {[ImageSize.OneK, ImageSize.TwoK, ImageSize.FourK].map((s) => (
                            <button
                              key={s}
                              onClick={() => setSize(s)}
                              className={`py-2 text-[10px] uppercase tracking-wider rounded border transition-all ${
                                size === s 
                                  ? 'bg-white text-black border-white' 
                                  : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>

              {/* Action */}
              <button 
                onClick={handleGenerate}
                disabled={status === GenerationStatus.LOADING || !prompt}
                className="w-full py-5 bg-brand-500 text-white text-xs uppercase tracking-[0.2em] hover:bg-brand-400 disabled:opacity-50 transition-all flex items-center justify-center gap-3 rounded-lg mt-8"
              >
                {status === GenerationStatus.LOADING ? (
                  <>
                    <RefreshCw className="animate-spin" size={16} /> Rendering...
                  </>
                ) : (
                  <>
                    <Wand2 size={16} /> Generate Concept
                  </>
                )}
              </button>
           </div>
        </div>

        {/* Center: Canvas */}
        <div className="flex-1 bg-[#050505] relative flex items-center justify-center p-12 overflow-hidden">
           {/* Grid Background */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           
           {status === GenerationStatus.IDLE && (
              <div className="text-center opacity-30">
                 <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Palette size={32} />
                 </div>
                 <p className="text-sm font-mono uppercase tracking-widest">Workspace Ready</p>
              </div>
           )}

           {status === GenerationStatus.LOADING && (
              <div className="relative z-10 text-center">
                 <div className="w-20 h-20 border-t-2 border-l-2 border-brand-500 rounded-full animate-spin mx-auto mb-6"></div>
                 <p className="text-xs font-mono uppercase tracking-widest text-brand-500 animate-pulse">Processing Assets...</p>
              </div>
           )}

           {status === GenerationStatus.SUCCESS && generatedImage && (
              <div className="relative group max-w-2xl w-full">
                 <img 
                   src={generatedImage} 
                   className="w-full h-auto rounded shadow-2xl border border-white/10"
                   alt="Generated Concept"
                 />
                 <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={generatedImage} download className="p-3 bg-black/80 backdrop-blur text-white rounded hover:bg-brand-500 transition-colors">
                       <Download size={16} />
                    </a>
                 </div>
              </div>
           )}
        </div>

      </div>
    </section>
  );
};

export default DesignStudio;