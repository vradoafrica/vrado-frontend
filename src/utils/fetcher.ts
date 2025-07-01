export async function fetcher(url: string, options?: RequestInit){

  try {
    const res = await fetch(url, {
      ...options
    });
    
    if (!res.ok) {
      
      throw new Error(`Request failed: ${res.status}`);
    }

      
    return res.json();
  } catch (error) {
    return error
  }
  

  }
  