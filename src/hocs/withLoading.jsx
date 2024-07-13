export const withLoading = (WrappedComponent) => {
    return ({ loading, error, ...props }) => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return <WrappedComponent {...props} />;
    };
};