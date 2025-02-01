import { Component } from "react";

interface MyState {
  error: string | null;
  hasError: boolean;
  children?: React.ReactNode;
}

class ErrorBoundary extends Component<Readonly<MyState>> {
  children: React.ReactNode;

  state: MyState = {
    error: null,
    hasError: false,
  };
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(
      `the error is : ${error}`,
      `error information is : ${errorInfo}`
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center h-screen bg-gray-100 flex items-center justify-center">
          <h1 className="bg-white p-10 px-20 rounded-lg text-red-500">
            Ohh, Something went wrong.
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
