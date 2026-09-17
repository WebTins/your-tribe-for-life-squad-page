// Slugify a string
// 1. make string lowercase 
// 2.replace spaces with a dash
export function slugify(name) {
  return name.toLowerCase().replaceAll(' ', '-');
}