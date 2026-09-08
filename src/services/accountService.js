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
