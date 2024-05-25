// Import the uuid package
import { v4 as uuidv4 } from "uuid";

// Function to generate a random UUID
export function GenerateChatID() {
  return uuidv4();
}

// Function to validate a UUID
export const isValidUUID = (uuid: any) => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

export const GetUUIDFromUrl = (pathname:string) => {
  const match = pathname.match(/\/chat\/([0-9a-fA-F-]+)&/);
  if (match && isValidUUID(match[1])) {
    const uid = match[1];
    console.log({ uid });
    return match[1];
  }
};
