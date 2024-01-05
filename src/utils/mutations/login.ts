export default async function login(values: any) {
    const env = process.env.NODE_ENV;
    const API_URL = process.env.REACT_APP_API_URL;

    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        body: JSON.stringify(values),
    });

    return res.json();
}