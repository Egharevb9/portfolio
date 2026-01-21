import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("/api/user/1");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    }
    fetchUser();
  }, []);

  // Don't render a visible loading message — keep the UI clean if the API is slow or unavailable
  if (!user) return null;
  return (
    <section id="profile" className="max-w-2xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold">{user.name}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{user.role}</p>
    </section>
  );
}

export default UserProfile;
