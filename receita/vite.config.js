import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
<<<<<<< HEAD
  build: {
    sourcemap: false,
  },
=======
>>>>>>> 3d97896c1f3efb57f08a37350a6b04dc3f2de73a
});
