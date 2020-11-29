
export const validateEmail = email => {
    if (email.match(/^.+@.+\..+$/)) return true
    return false
  }
  