import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DAppRedirect = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // L'URL complète de la DApp (pour l'ouverture dans un nouvel onglet)
  const dappUrl = window.location.origin + '/dapp/';

  useEffect(() => {
    let isMounted = true;
    
    // Fonction pour vérifier si le serveur DApp répond
    const checkDappServer = () => {
      fetch('/dapp', { 
        method: 'HEAD',
        // Éviter que le navigateur ne mette en cache la réponse
        headers: { 'Cache-Control': 'no-cache' },
        // Court timeout pour ne pas bloquer trop longtemps
        signal: AbortSignal.timeout(3000)
      })
        .then(response => {
          if (!isMounted) return;
          if (response.ok) {
            // Le serveur répond, on peut rediriger
            window.location.href = '/dapp/';
          } else {
            setError(true);
            setIsLoading(false);
          }
        })
        .catch(err => {
          if (!isMounted) return;
          console.error('Erreur de connexion au serveur DApp:', err);
          setError(true);
          setIsLoading(false);
        });
    };
    
    // Lancer la vérification
    checkDappServer();
    
    // Timeout de sécurité
    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setError(true);
        setIsLoading(false);
      }
    }, 5000);
    
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  // Fonction pour ouvrir la DApp dans un nouvel onglet
  const openDappInNewTab = () => {
    window.open('http://localhost:3002', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-lg mx-auto p-6 glassmorphism">
        <h1 className="text-3xl font-bold mb-4">FIELD DApp</h1>
        
        {isLoading ? (
          <>
            <p className="mb-8">Tentative de connexion au serveur DApp...</p>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          </>
        ) : error ? (
          <>
            <div className="bg-red-500/20 text-red-300 p-4 rounded-lg mb-6">
              <p className="font-bold mb-2">Serveur DApp non disponible</p>
              <p>Le serveur DApp n'est pas démarré ou n'est pas accessible pour le moment.</p>
            </div>
            
            <div className="flex flex-col gap-4 mt-6">
              <button 
                onClick={openDappInNewTab}
                className="btn-primary w-full py-3"
              >
                Essayer d'ouvrir dans un nouvel onglet
              </button>
              
              <Link to="/" className="px-4 py-2 bg-accent/50 hover:bg-accent/70 rounded-lg transition-all w-full block">
                Retour à l'accueil
              </Link>
            </div>
            
            <div className="mt-8 text-left bg-accent/30 p-4 rounded-lg">
              <p className="font-bold mb-2">Comment résoudre ce problème :</p>
              <p className="mb-4 text-sm">Pour utiliser la DApp, le serveur backend doit être démarré.</p>
              <div className="bg-black/40 p-3 rounded text-xs font-mono mb-2">
                cd /Users/thomaslambert/Documents/Field-united
              </div>
              <div className="bg-black/40 p-3 rounded text-xs font-mono">
                npm start
              </div>
            </div>
          </>
        ) : (
          <p>Redirection en cours...</p>
        )}
      </div>
    </div>
  );
};

export default DAppRedirect; 