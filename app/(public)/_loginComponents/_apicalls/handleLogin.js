/**
 * Makes an API request to authenticate the user with given credentials.
 * Sends POST request with user data and handles successful responses.
 * Throws an error for non-successful responses and catches request errors.
 */
import { apiPath } from "@/constants/apiPaths"
export const handleloginapi = async (credentials) => {
    
    try {
        const response = await fetch(`${apiPath.LOGIN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            // Handle different response errors here
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        throw new Error('API request failed');
    }
};