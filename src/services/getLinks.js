export default async function getLinks() {
  try {
    const res = await fetch(process.env.API_URL + '/api/v1/links', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors',
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
}
