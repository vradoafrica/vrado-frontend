export async function fetcher(url: string, options?: RequestInit){
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Request failed: ${res.status}`);
    }
  
    return res.json();
  }
  