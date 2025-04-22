
export const sendSMS = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`sms://?&body=${encodedMessage}`, "_blank");
};
