import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const usePlaylistIdStore = create(
  persist(
    (set) => ({
      playlistId: 22,
      setPlaylistId: (playlistId) => {
        console.log(playlistId + '로 set할래')
        set({ playlistId: playlistId });
      },
    }),
    {
      name: 'playlistId',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)