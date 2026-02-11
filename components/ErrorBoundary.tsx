import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center bg-brand-50 px-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-brand-900 rounded-sm flex items-center justify-center mx-auto mb-8">
              <span className="text-white font-serif text-3xl italic">A</span>
            </div>
            <h1 className="text-3xl font-serif text-brand-900 mb-4">Something went wrong</h1>
            <p className="text-brand-500 text-sm font-light leading-relaxed mb-8">
              We apologise for the inconvenience. Please try refreshing the page or return to the home page.
            </p>
            <Link
              to="/"
              onClick={() => this.setState({ hasError: false, error: null })}
              className="inline-block bg-brand-900 text-white px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
