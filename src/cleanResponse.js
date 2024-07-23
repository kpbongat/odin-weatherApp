export default async function cleanResponse(response) {
  const responseJSON = await response.json();
  const { resolvedAddress, days } = responseJSON;
  return { resolvedAddress, days };
}
