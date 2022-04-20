function validateRegister(email, username, phoneNumber) {
  const newError = {};
  if (isRequire(email)) {
    newError.email = "Email is required";
  }

  if (isRequire(username)) {
    newError.username = "Username is required";
  }

  if (isRequire(phoneNumber)) {
    newError.phoneNumber = "Phone Number is required";
  } else if (len(phoneNumber, 10)) {
    newError.phoneNumber = "Invalid phone number format";
  }
  return newError;
}

function isRequire(value) {
  return !!!value;
}

function len(value, length) {
  return value.length === length;
}

export { validateRegister };
