// * These are constants, no need of backend APIs

export const BASE_URL = process.env.NODE_ENV ==="production" ? "https://kv-welding.vercel.app":"http://localhost:3000"
export const FLIP_BOOK_URL ="/pdf-flip-book?pdfUrl="