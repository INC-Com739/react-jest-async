// Utility function to fetch data from a public API
// Example uses the JSONPlaceholder API for demonstration

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Return error for testability
    return { error: error.message };
  }
}
