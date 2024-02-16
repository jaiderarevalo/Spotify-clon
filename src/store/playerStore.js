import { create } from "zustand";
/* NO SE NECESITA ENGLOBAR NADA CON ZUSTAND */
export  const usePlayerStore = create((set)=>({
    isPlaying:false,
    currentMusic:{playlist:null,song:null,songs:[]},
    volume:1,
    setVolume:(volume) => set({ volume}),
    setIsPlaying:(isPlaying) =>set({isPlaying}),/* no olvidar el set de aca */
    setCurrentMusic:(currentMusic)=> set({currentMusic})
})) /* el album,cancion y la lista de canciones */
/* SOLO ESTE CODIGO ENGLOBA EL ESTADO DE LA CANCIÓN */