//ROUTE on Productions http://localhost:8888/.netlify/functions/1-hello

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Hello Word from  my firts serverless function",
  };
};
