import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Error caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong. <button onClick={() => this.setState({ hasError: false })}>Retry</button></div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
