// react
import React from "react";

/**
 * @name ErrorBoundary
 * @description Error Boundary Component
 * @returns Custom JSX if the children has error
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong in the Feature, Please re-load your application
          or contact support to resolve the issue.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
