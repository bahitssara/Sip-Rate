export const findReview = (reviews=[], id) =>
    reviews.find(review => review.id === id)