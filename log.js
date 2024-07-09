// log.js
exports.handler = async function(event, context) {
  const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'];
  const browser = event.headers['user-agent'];
  const timestamp = new Date().toISOString();

  const log = `IP: ${ip} - Browser: ${browser} - Time: ${timestamp}\n`;
  console.log(log);

  return {
    statusCode: 302,
    headers: {
      Location: 'https://www.example.com', // URL to redirect to
    },
  };
};

