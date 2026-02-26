// src/components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error?.message || 'Unexpected application error',
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, errorMessage: '' });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="max-w-xl px-6 py-12 mx-auto my-10 text-center bg-white border border-gray-200 rounded-lg shadow-sm">
          <h1 className="mb-3 text-2xl font-semibold text-gray-900">We hit an unexpected error</h1>
          <p className="mb-6 text-sm text-gray-600">
            Please retry this view. If the issue continues, refresh the page.
          </p>
          {this.state.errorMessage ? (
            <p className="mb-6 text-xs text-gray-500 break-words">{this.state.errorMessage}</p>
          ) : null}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={this.handleRetry}
              className="px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded hover:bg-cyan-400"
            >
              Retry
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-4 py-2 text-sm font-medium text-cyan-600 border border-cyan-200 rounded hover:bg-cyan-50"
            >
              Refresh Page
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
