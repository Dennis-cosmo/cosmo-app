import { useState } from "react";

// Mock user profile data
const mockProfile = {
  id: "mock-user-1",
  email: "demo@example.com",
  firstName: "Demo",
  lastName: "User",
  companyName: "ACME GmbH",
  taxonomyActivities: [],
};

export function useUserProfile() {
  const [profile] = useState(mockProfile);
  const [loading] = useState(false);
  const [error] = useState(null);

  return { profile, loading, error };
}
