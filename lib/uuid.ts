// Import the uuid package
import { v4 as uuidv4 } from "uuid";

// Function to generate a random UUID
export function GenerateChatID() {
  return uuidv4();
}

export const GetUUIDFromUrl = (pathname:string) => {
  // Split the pathname by '/'
  const parts = pathname.split('/');
  // Find the index of 'chat' in the array
  const index = parts.indexOf('chat');
  // If 'chat' exists and the index of 'chat' + 1 is less than the length of the parts array
  if (index !== -1 && index + 1 < parts.length) {
    // Return the UUID after 'chat'
    return parts[index + 1];
  }
  // If 'chat' doesn't exist or there's no UUID after it, return null
  return null;
};
