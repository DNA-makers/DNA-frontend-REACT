function AdminPage() {
    
    const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

    if (!isAuthenticated) {
        return null;
    }

    return (
        <h1>Hello world!</h1>
    )
}

export default AdminPage;