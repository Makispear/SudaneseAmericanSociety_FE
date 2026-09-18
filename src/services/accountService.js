import API_URL from "../services/api.js";

export async function createAccount(data) {
  const response = await fetch(`${API_URL}/api/accounts/createAccount`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let payload = {};
  try {
    payload = await response.json();
  } catch {
    payload = {};
  }

  if (!response.ok) {
    throw new Error(
      payload?.message || "Unable to create your account right now.",
    );
  }

  return payload;
}

export const loginUser = async (credentials) => {
  const API_URL = import.meta.env.VITE_API_URL || "";

  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Invalid email or password.");
  }

  return response.json();
};
