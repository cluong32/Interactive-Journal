const API_BASE = "http://127.0.0.1:8000/api";

export async function apiRequest(path, options = {}) {
    const response = await fetch(`${API_BASE}${path}`, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw data || { error: "Request failed" };
    }

    return data;
}
