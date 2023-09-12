const isValidJSON = string_ => {
  try {
    JSON.parse(string_);
    return true;
  } catch {
    return false;
  }
};

export const handleResponse = response => {
  return response.text().then(text => {
    const data = isValidJSON(text) ? JSON.parse(text) : text;
    if (!response.ok) {
      throw data;
    }
    return data;
  });
};
