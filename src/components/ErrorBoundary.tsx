import React, { Component, PropsWithChildren, ReactNode } from 'react';

// Props Interface
interface Props {
  children?: PropsWithChildren<unknown>;
}

// State Interface
interface State {
  hasError: boolean;
  error: Error | null;
}

// Component
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error: Error, info: unknown): void {
    this.setState({ hasError: true, error });
    // This could log to sentry or another error reporting tool
    console.error(error, info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <>
          <span>Something went wrong</span>
          <div>{this.state.error}</div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
