export const getConfig = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  } else {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
