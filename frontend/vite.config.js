import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import fs from 'fs';
import path from 'path';

// Détecte si le serveur DApp est en cours d'exécution
const isDappServerRunning = () => {
  try {
    const response = fetch('http://localhost:3002', {
      method: 'HEAD', 
      timeout: 1000
    });
    return true;
  } catch (e) {
    return false;
  }
};

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  server: {
    port: 3000,
    open: true,
    // Proxy disabled since dapp has been integrated into frontend
    /* 
    proxy: {
      '/dapp': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dapp/, ''),
        configure: (proxy, _options) => {
          // Augmenter le délai d'attente avant de déclarer une erreur
          proxy.options.proxyTimeout = 5000;
          proxy.options.timeout = 5000;
          
          proxy.on('error', (err, req, res) => {
            console.log('Proxy error:', err);
            
            // Si c'est une requête d'API, renvoyer une réponse JSON d'erreur
            if (req.headers.accept && req.headers.accept.includes('application/json')) {
              res.writeHead(503, { 
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store'
              });
              res.end(JSON.stringify({ 
                error: 'DApp server is not running',
                code: 'ECONNREFUSED'
              }));
            } 
            // Pour les requêtes HTML, renvoyer une page d'erreur simple
            else if (req.headers.accept && req.headers.accept.includes('text/html')) {
              res.writeHead(503, { 
                'Content-Type': 'text/html',
                'Cache-Control': 'no-cache, no-store'
              });
              res.end(`
                <html>
                  <head>
                    <title>DApp Server Not Available</title>
                    <style>
                      body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: #111; color: #fff; padding: 40px; }
                      .container { max-width: 500px; margin: 0 auto; background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; }
                      h1 { color: #ff4d4d; }
                      a { color: #4d9eff; text-decoration: none; }
                      a:hover { text-decoration: underline; }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                      <h1>DApp Server Not Available</h1>
                      <p>The DApp server is not running. Please start it with:</p>
                      <pre>cd /Users/thomaslambert/Documents/Field-united && npm start</pre>
                      <p><a href="/">Return to Main Website</a></p>
                    </div>
                  </body>
                </html>
              `);
            }
            // Pour les autres requêtes, renvoyer une erreur 503
            else {
              res.writeHead(503, {
                'Cache-Control': 'no-cache, no-store'
              });
              res.end();
            }
          });
        }
      }
    }
    */
  },
  resolve: {
    alias: {
      // Removed 'shared' alias since it's now part of frontend
      'frontend': path.resolve(__dirname, '.'),
      '@profile': path.resolve(__dirname, 'src')
    }
  }
}); 