const config = {
    apiPath: process.env.REACT_APP_API_URL || 'http://localhost:3001',
    headers: () => {
        return {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
    }
}

export default config;