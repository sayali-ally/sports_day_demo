const formatTimings = (startTime, endTime) => {
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  const startFormatted = new Date(startTime).toLocaleTimeString([], options);
  const endFormatted = new Date(endTime).toLocaleTimeString([], options);
  return `${startFormatted}-${endFormatted}`;
};

export default formatTimings;