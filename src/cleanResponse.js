export default async function cleanResponse(response) {
  let responseJSON = await response.json();
  const fullAddress = responseJSON.resolvedAddress;
  const days = responseJSON.days;
  return { fullAddress, days };
}
