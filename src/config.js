const config = {
    apiPath: process.env.REACT_APP_API_URL || 'https://coffee-api-9lij.onrender.com',
    headers: () => {
        return {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
    }
}

export default config;