function api<T>(url: string): Promise<T> {
  const options = {
    method: "GET"
  };

  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json() as Promise<T>;
  });
}

export { api };
