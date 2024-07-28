export const validateForm = formData => {
  const errors = {};

  if (!formData.f_name.trim()) {
    errors.f_name = 'First name is required';
  }
  if (!formData.l_name.trim()) {
    errors.l_name = 'Last name is required';
  }
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
};
