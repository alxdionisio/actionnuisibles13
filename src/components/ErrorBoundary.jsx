import React from 'react';

/**
 * Affiche une erreur au lieu d’un écran blanc si React plante (ex. erreur de chargement d’asset en prod).
 */
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div style={{
          padding: '2rem',
          maxWidth: '600px',
          margin: '2rem auto',
          fontFamily: 'system-ui, sans-serif',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '8px',
        }}>
          <h1 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem', color: '#b91c1c' }}>
            Une erreur est survenue
          </h1>
          <p style={{ margin: 0, color: '#7f1d1d', fontSize: '0.875rem' }}>
            {this.state.error.message}
          </p>
          <p style={{ margin: '1rem 0 0', fontSize: '0.8125rem', color: '#6b7280' }}>
            Rechargez la page ou vérifiez que le déploiement utilise bien le dossier <strong>dist</strong> (après <code>npm run build</code>).
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
