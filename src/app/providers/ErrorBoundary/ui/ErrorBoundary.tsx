import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorThrower } from 'widgets/ErrorThrower';

interface ErrorBoundaryProps {
    children: ReactNode
}
interface ErrorBoundaryState {
    hasError: boolean
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Suspense fallback="">
                    <ErrorThrower />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
