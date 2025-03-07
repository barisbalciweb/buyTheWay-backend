export const errorMiddleware = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: `errorMiddleware: ${err.message}` });
};
