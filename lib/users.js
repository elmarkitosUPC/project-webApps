export const loadUsers = async (numUsers) => {
  const response = await fetch(
    `https://randomuser.me/api?results=${numUsers}&seed=20240521`
  );
  const { results } = await response.json();
  return results;
};

